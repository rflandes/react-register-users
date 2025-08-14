import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyParticipantForm, savingNewParticipantForm, setActiveParticipantForm, updateParticipantForm } from './registerSlice';
import { firebaseCollection, loadParticipantForm } from '../../helpers/loadParticipantForm';


export const startNewParticipantForm = () => {
    return async (dispatch, getState) => {

        dispatch(savingNewParticipantForm());

        const { uid } = getState().auth;

        const newParticipantForm = {
            title: '',
            id: '',
            title: '',
            autor: '',
            area: '',
            coautor1: '',
            coautor2: '',
            coautor3: '',
            voucher: '',
            date: new Date().getTime(),
        }

        const newDoc = doc(collection(FirebaseDB, `${uid}/${firebaseCollection}`));
        await setDoc(newDoc, newParticipantForm);

        newParticipantForm.id = newDoc.id;

        //! dispatch
        dispatch(addNewEmptyParticipantForm(newParticipantForm));
        dispatch(setActiveParticipantForm(newParticipantForm));
    }
}


export const startLoadingParticipantNote = () => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;
        if (!uid) throw new Error('El UID del usuario no existe');

        const participantForms = await loadParticipantForm(uid);
        dispatch(setParticipantForm(participantForms));
    }
}

export const startSaveParticipantForm = () => {
    return async (dispatch, getState) => {

        dispatch(updateParticipantForm());

        const { uid } = getState().auth;
        const { active: participantForm } = getState().journal;

        const participantFormToFireStore = { ...participantForm };
        delete participantFormToFireStore.id;

        const docRef = doc(FirebaseDB, `${uid}/${firebaseCollection}/${participantForm.id}`);
        await setDoc(docRef, participantFormToFireStore, { merge: true });

        dispatch(updateParticipantForm(participantForm));

    }
}


// export const startUploadingFiles = (files = []) => {
//     return async (dispatch) => {
//         dispatch(setSaving());

//         // await fileUpload( files[0] );
//         const fileUploadPromises = [];
//         for (const file of files) {
//             fileUploadPromises.push(fileUpload(file))
//         }

//         const photosUrls = await Promise.all(fileUploadPromises);

//         dispatch(setPhotosToActiveNote(photosUrls));

//     }
// }

