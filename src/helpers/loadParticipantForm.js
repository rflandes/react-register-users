import { getDoc, doc as docFirebase } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';

export const firebaseCollection = 'participant';

export const loadParticipantForm = async (uid = '') => {
  if (!uid) throw new Error('El UID del usuario no existe');

  const docRef = docFirebase(FirebaseDB, uid, firebaseCollection);
  const docSnap = await getDoc(docRef);

  return docSnap.exists() ? docSnap.data() : undefined;
}
