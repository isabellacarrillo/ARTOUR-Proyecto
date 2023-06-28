import { db, storage } from "../firebaseConfig";
import {
  setDoc,
  collection,
  updateDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  and,
  arrayUnion,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const addObraPunto = async (data, id) => {
  try {
    console.log(data.punto_de_interes);
    const q = query(
      collection(db, "puntos de interes"),
      where("nombre", "==", data.punto_de_interes)
    );
    const res = await getDocs(q);
    let ref;
    if (!res.empty) {
      console.log("if");
      res.forEach((d) => {
        ref = d.id;
      });
      const docref = doc(collection(db, "puntos de interes"), ref);
      const result = await updateDoc(docref, {
        obras: arrayUnion({
          id: id,
          nombre_obra: data.nombre_obra,
          nombre_autor: data.nombre_autor,
          img: data.img,
        }),
      });
    } else {
      const newRef = doc(
        collection(db, "puntos de interes"),
        data.punto_de_interes.toLowerCase().replace(/ /g, "_")
      );
      const create = await setDoc(newRef, {
        id: newRef.id,
        nombre: data.punto_de_interes,
        obras: [
          {
            id: id,
            nombre_obra: data.nombre_obra,
            nombre_autor: data.nombre_autor,
            img: data.img,
          },
        ],
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const uploadPic = async (blob, path, name, pi) => {
  try {
    if (blob != null) {
      let storeRef;
      if (pi) {
        console.log(`${path}/${pi}/${name}`);
        storeRef = ref(storage, `${path}/${pi}/${name}`);
      } else {
        storeRef = ref(storage, `${path}/${name}`);
      }
      await uploadBytes(storeRef, blob).then((h) => {});
      console.log(storeRef);
      const url = await getDownloadURL(storeRef);
      return url;
    } else {
      return null;
    }
  } catch (error) {
    console.log("upload", error);
  }
};

export const fetchPuntos = async (puntos) => {
  try {
    let pObjs = [];
    for (let index = 0; index < puntos.length; index++) {
      const element = query(
        collection(db, "puntos de interes"),
        where("nombre", "==", puntos[index])
      );

      const result = await getDocs(element);
      let p;
      result.forEach((r) => {
        p = r.data();
      });
      console.log(p);
      pObjs.push({
        nombre: p.nombre,
        ref: doc(collection(db, "puntos de interes"), p.id),
      });
    }
    return pObjs;
  } catch (error) {}
};
export const createNewObra = async (data) => {
  try {
    const q = query(
      collection(db, "obras"),
      and(
        where("nombre_obra", "==", `${data.nombre_obra}`),
        where("nombre_autor", "==", `${data.nombre_autor}`)
      )
    );
    let found = [];
    const res = await getDocs(q);
    res.forEach((doc) => {
      found.push(doc.data);
    });
    if (found.length == 0) {
      const ref = doc(collection(db, "obras"));
      const url = await uploadPic(
        data.img,
        "obras_de_arte",
        data.nombre_obra.toLowerCase().replace(/ /g, "_"),
        data.punto_de_interes.toLowerCase().replace(/ /g, "_")
      );
      Object.keys(data).forEach((k) => {
        if (k === "img") {
          data[k] = url;
        }
      });
      const create = await setDoc(ref, { id: ref.id, ...data });
      addObraPunto(data, ref.id);
      return "success";
    } else {
      return "error";
    }
  } catch (error) {
    console.log(error);
    return "error";
  }
};

export const createNewTour = async (data) => {
  try {
    const q = query(
      collection(db, "tours"),
      where("nombre_tour", "==", `${data.nombre_tour}`)
    );
    let found = [];
    const res = await getDocs(q);
    res.forEach((doc) => {
      found.push(doc.data);
    });
    if (found.length == 0) {
      const ref = doc(collection(db, "tours"));
      const url = await uploadPic(data.img, "tours", data.nombre_tour);
      const pObj = await fetchPuntos(data.puntos_de_interes);
      Object.keys(data).forEach((k) => {
        if (k === "img") {
          data[k] = url;
        }
        if (k === "puntos_de_interes") {
          data[k] = pObj;
        }
      });
      const create = await setDoc(ref, {
        id: ref.id,
        comentarios: [],
        rating: [],
        disponibilidad: "full",
        ...data,
      });
      return "success";
    } else {
      return "error";
    }
  } catch (error) {
    console.log("create", error);
    return "error";
  }
};
