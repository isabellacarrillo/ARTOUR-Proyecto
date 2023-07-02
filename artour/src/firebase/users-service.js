import {
  doc,
  collection,
  setDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "./firebaseConfig";

/* Funcion para crear un perfil en la base de datos */

export async function createUserProfile(userId, data) {
  return setDoc(doc(db, "users", userId), data);
}

/* Obtener la informacion del usuario en la base de datos */

export async function getUserProfile(email) {
  const useQuery = query(collection(db, "users"), where("email", "==", email));
  const results = await getDocs(useQuery);

  if (results.size > 0) {
    const users = results.docs.map((item) => ({
      ...item.data(),
      id: item.id,
    }));

    const [user] = users;
    return user;
  } else {
    return null;
  }
}
