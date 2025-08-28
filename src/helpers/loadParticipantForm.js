import {
  getDocs,
  collection,
  query,
  where,
  getCount,
  limit
} from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';

export const firebaseCollection = 'participant';

export const loadParticipantForm = async (uid = '') => {
  if (!uid) throw new Error('El UID del usuario no existe');

  const path = `congress`;

  const q = query(collection(FirebaseDB, path),
    where("id", "==", uid),
    limit(1));

  const querySnapshot = await getDocs(q);

  return !querySnapshot.empty ? querySnapshot.docs[0].data() : undefined;
}

export const loadAllParticipantsForm = async () => {

  console.log('getting all participants...');
  const path = `congress`;

  // Después de crear un objeto de consulta, usa la función get() para recuperar los resultados
  const q = query(collection(FirebaseDB, path), where("id", "!=", ''));

  const count = await getCount(q);
  // const querySnapshot = await getDocs(q);
  // querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, " => ", doc.data());
  // });

  console.log('Count:', count.data());


}
