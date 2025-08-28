import { setDoc, doc as docFirebase, collection } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { savingNewParticipantForm, setParticipantForm, setSaving, updateParticipantForm } from './registerSlice';
import { firebaseCollection, loadParticipantForm } from '../../helpers/loadParticipantForm';



export const startNewParticipantForm = () => {
    return async (dispatch, getState) => {

        const newForm = {
            id: '',
            titulo: '',
            autor: '',
            area: '',
            coautor1: '',
            coautor2: '',
            coautor3: '',
            voucher: '',
            date: new Date().getTime(),
        }

        dispatch(savingNewParticipantForm());

        const { uid } = getState().auth;

        const path = `congress`;
        const congressRef = collection(FirebaseDB, path);

        await setDoc(docFirebase(congressRef, uid), newForm, { merge: true });

        dispatch(setParticipantForm(newForm));
    }
}


export const startLoadingParticipantForm = () => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;
        if (!uid) throw new Error('El UID del usuario no existe');

        const participantForm = await loadParticipantForm(uid);
        // await loadAllParticipantsForm();

        const newForm = {
            id: '',
            titulo: '',
            autor: '',
            area: '',
            coautor1: '',
            coautor2: '',
            coautor3: '',
            voucher: '',
            date: new Date().getTime(),
        }

        dispatch(setParticipantForm(participantForm || newForm));
    }
}

export const startSaveParticipantForm = () => {
    return async (dispatch, getState) => {
        dispatch(setSaving());

        const { uid } = getState().auth;
        const { participantForm } = getState().register;

        const path = `congress`;
        const congressRef = collection(FirebaseDB, path);

        await setDoc(docFirebase(congressRef, uid),
            {
                ...participantForm,
                id: uid

            }, { merge: true });

        dispatch(updateParticipantForm(participantForm));

    }
}

export const startGetAllParticipantsForm = () => {
    return async (dispatch, getState) => {
        dispatch(setSaving());

        const { uid } = getState().auth;
        const { participantForm } = getState().register;

        const path = `congress/${uid}/forms`;
        const docRef = docFirebase(FirebaseDB, path, firebaseCollection);
        await setDoc(docRef, participantForm, { merge: true });

        dispatch(updateParticipantForm(participantForm));

    }
}

// export const startUploadingFiles = (files = []) => {
//     return async (dispatch) => {
//         dispatch(setSaving());

// await fileUpload( files[0] );
//         const fileUploadPromises = [];
//         for (const file of files) {
//             fileUploadPromises.push(fileUpload(file))
//         }

//         const photosUrls = await Promise.all(fileUploadPromises);

//         dispatch(setPhotosToActiveNote(photosUrls));

//     }
// }

