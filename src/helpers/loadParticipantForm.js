import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';

export const firebaseCollection = 'participant/form';

export const loadParticipantForm = async (uid = '') => {
    if (!uid) throw new Error('El UID del usuario no existe');

    const collectionRef = collection(FirebaseDB, `${uid}/${firebaseCollection}`);
    const docs = await getDocs(collectionRef);

    const participantForms = [];
    docs.forEach(doc => {
        participantForms.push({ id: doc.id, ...doc.data() });
    });

    return participantForms;
}
