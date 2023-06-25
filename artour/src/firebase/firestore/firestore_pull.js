import { db } from "../firebaseConfig";
import { getDocs, collection, getDoc, doc } from "firebase/firestore";

export const pullAllTours = async () => {
  let tours = [];
  const result = await getDocs(collection(db, "tours"));
  result.forEach((doc) => {
    tours.push(doc.data());
  });
  return tours;
};

export const getTourDetail = async (tourID) => {
  const ref = doc(db, "tours", tourID);
  const result = await getDoc(ref);
  return result.data();
};

export const getPuntos = async (refP) => {
  const result = await getDoc(refP);
  return result.data();
};

export const pullObra = async (obraID)=>{
  const ref = doc(db, "obras", obraID);
  const result = await getDoc(ref);
  return result.data();
}
