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

{
  /* Funcion para añadir una obra de arte a la lista de obras disponibles en un punto de interes*/
}

const addObraPunto = async (data, id) => {
  try {
    const q = query(
      collection(db, "puntos de interes"),
      where("nombre", "==", data.punto_de_interes)
    );
    const res = await getDocs(q);
    let ref;
    if (!res.empty) {
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

/* Funcion para  almacenar un archivo foto en el deposito de informacion de la aplicacion*/

export const uploadPic = async (blob, path, name, pi) => {
  try {
    if (blob != null) {
      let storeRef;
      if (pi) {
        storeRef = ref(storage, `${path}/${pi}/${name}`);
      } else {
        storeRef = ref(storage, `${path}/${name}`);
      }
      await uploadBytes(storeRef, blob).then((h) => {});
      const url = await getDownloadURL(storeRef);
      return url;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

/* Funcion para conseguir el objeto referencia y nombre que es almacenado en el objeto Tour en sus puntos de interes  */

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
      pObjs.push({
        nombre: p.nombre,
        ref: doc(collection(db, "puntos de interes"), p.id),
      });
    }
    return pObjs;
  } catch (error) {}
};

/* Funcion para crear un nuevo perfil de una obra */
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
    return "error";
  }
};
/* Funcion para crear un nuevo tour */
export const createNewTour = async (data) => {
  try {
    data["fecha"] = getDates(data.fecha, data.capacidad);
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
        rating: ["0", "0"],
        disponibilidad: "full",
        ...data,
      });
      return "success";
    } else {
      return "error";
    }
  } catch (error) {
    return "error";
  }
};

/* Funcion para crear el objeto fecha para el nuevo tour con su capacidad correspondiente */

export const getDates = (data, capacidad) => {
  const range = data.split("-");
  let dates = [];
  const start = new Date(range[0]);
  const end = new Date(range[1]);

  const datesArray = getDatesFromDateRange(start, end);

  datesArray.forEach((d) => {
    const newD = new Date(d.toLocaleDateString());
    dates.push({
      fecha: d.toLocaleDateString(),
      capacidad: parseInt(capacidad),
    });
  });
  return dates;
};
function getDatesFromDateRange(from, to) {
  const dates = [];
  for (let date = from; date <= to; date.setDate(date.getDate() + 1)) {
    const cloned = new Date(date.valueOf());
    dates.push(cloned);
  }
  return dates;
}
