import { auth, db, storage } from "../firebaseConfig";
import {
  setDoc,
  collection,
  updateDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  arrayUnion,
  deleteDoc,
} from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { fetchPuntos, getDates, uploadPic } from "./firestore-add";

/* Funcion para verficar que dos arreglos contienen los mismos elementos */

function areEqual(array1, array2) {
  let equal = true;
  if (array1.length === array2.length) {
    array2.forEach((element) => {
      if (!array1.includes(element.nombre)) {
        equal = false;
      }
    });
  } else {
    equal = false;
  }
  return equal;
}

/* Funcion para verificar que dos arreglos de objetos de fecha contienen las mismas fechas */

function sameRange(newRange, objRange) {
  const start = new Date(objRange[0].fecha);
  const end = new Date(objRange.slice(-1)[0].fecha);
  const dateRange = `${start.toLocaleDateString()}-${end.toLocaleDateString()}`;
  return newRange === dateRange;
}

/*Funcion para generar el arreglo de objeto fecha de Tour actualizado segun el nuevo rango. De tal manera que se conserve la disponibilidad preexistente */

function getUpRange(newRange, objRange, capacidad) {
  let upRange = [];
  let newObjRange = getDates(newRange, capacidad);

  for (let i = 0; i < newObjRange.length; i++) {
    console.log(newObjRange, objRange[i]);
    if (objRange[i]) {
      if (newObjRange[i].fecha === objRange[i].fecha) {
        console.log(newObjRange, objRange);
        upRange.push({
          fecha: newObjRange[i].fecha,
          capacidad: objRange[i].capacidad,
        });
      } else {
        upRange.push({
          fecha: newObjRange[i].fecha,
          capacidad: capacidad,
        });
      }
    } else {
      upRange.push({
        fecha: newObjRange[i].fecha,
        capacidad: capacidad,
      });
    }
  }
  return upRange;
}
/* Funcion para eliminar una foto almacenada cuando se elimine un tour u obra */

const deletePic = async (nombre, path, pi) => {
  try {
    if (pi) {
      const storeRef = ref(storage, `${path}/${pi}/${nombre}`);
      await deleteObject(storeRef);
    } else {
      const storeRef = ref(storage, `${path}/${nombre}`);
      await deleteObject(storeRef);
    }
  } catch (error) {
    console.log(error);
  }
};

/* Funcion para actualizar el perfil de una obra */

export const updateObra = async (
  obra,
  newData,
  onSuccess,
  onNothing,
  onError
) => {
  try {
    let updated = {};
    Object.keys(newData).forEach((k) => {
      if (newData[k] != "" && newData[k] != obra[k]) {
        updated = { ...updated, [k]: newData[k] };
      }
    });

    if (Object.keys(updated).includes("img")) {
      let url;
      if (Object.keys(updated).includes("punto_de_interes")) {
        if (Object.keys(updated).includes("nombre_obra")) {
          url = await uploadPic(
            newData.img,
            "obras_de_arte",
            newData.nombre_obra.toLowerCase().replace(/ /g, "_"),
            newData.punto_de_interes.toLowerCase().replace(/ /g, "_")
          );
        } else {
          url = await uploadPic(
            newData.img,
            "obras_de_arte",
            obra.nombre_obra.toLowerCase().replace(/ /g, "_"),
            newData.punto_de_interes.toLowerCase().replace(/ /g, "_")
          );
        }
        await deletePic(
          obra.nombre_obra.toLowerCase().replace(/ /g, "_"),
          obra.punto_de_interes.toLowerCase().replace(/ /g, "_"),
          "obras_de_arte"
        );
      } else {
        if (Object.keys(updated).includes("nombre_obra")) {
          url = await uploadPic(
            newData.img,
            "obras_de_arte",
            newData.nombre_obra.toLowerCase().replace(/ /g, "_"),
            obra.punto_de_interes.toLowerCase().replace(/ /g, "_")
          );
        } else {
          url = await uploadPic(
            newData.img,
            "obras_de_arte",
            obra.nombre_obra.toLowerCase().replace(/ /g, "_"),
            obra.punto_de_interes.toLowerCase().replace(/ /g, "_")
          );
        }
      }
      updated = { ...updated, img: url };
    }

    if (Object.keys(updated).length === 0) {
      if (onNothing) {
        onNothing();
      }
    } else {
      if (
        Object.keys(updated).includes("punto_de_interes") ||
        Object.keys(updated).includes("img") ||
        Object.keys(updated).includes("nombre_obra") ||
        Object.keys(updated).includes("nombre_autor")
      ) {
        await updatePunto(obra, updated);
      }
      const ref = doc(db, "obras", obra.id);
      const result = await updateDoc(ref, updated);
      if (onSuccess) {
        onSuccess();
      }
    }
  } catch (error) {
    if (onError) {
      onError();
    }
  }
};

/* Funcion para actualizar el perfil de un tour */
export const updateTour = async (
  tour,
  newData,
  onSuccess,
  onNothing,
  onError
) => {
  try {
    let updated = {};
    Object.keys(newData).forEach((k) => {
      if (
        newData[k] != "" &&
        newData[k] != tour[k] &&
        k != "puntos_de_interes" &&
        k != "fecha"
      ) {
        updated = { ...updated, [k]: newData[k] };
      }
    });
    if (!areEqual(newData["puntos_de_interes"], tour["puntos_de_interes"])) {
      const puntos = await fetchPuntos(newData["puntos_de_interes"]);
      updated = { ...updated, puntos_de_interes: puntos };
    }
    if (newData.fecha && !sameRange(newData["fecha"], tour["fecha"])) {
      let dateObject;
      if (Object.keys(updated).includes("capacidad")) {
        dateObject = getUpRange(
          newData["fecha"],
          tour["fecha"],
          updated.capacidad
        );
      } else {
        dateObject = getUpRange(
          newData["fecha"],
          tour["fecha"],
          tour.capacidad
        );
      }

      updated = { ...updated, fecha: dateObject };
    }

    if (Object.keys(newData).includes("img")) {
      let url;
      if (Object.keys(updated).includes("nombre_tour")) {
        url = await uploadPic(newData.img, "tours", updated.nombre_tour);
      } else {
        url = await uploadPic(newData.img, "tours", tour.nombre_tour);
      }
      updated = { ...updated, img: url };
    }

    if (Object.keys(updated).length === 0) {
      if (onNothing) {
        onNothing();
      }
    } else {
      const ref = doc(db, "tours", tour.id);
      const result = await updateDoc(ref, updated);
      if (onSuccess) {
        onSuccess();
      }
    }
  } catch (error) {
    if (onError) {
      onError();
    }
    console.log(error);
  }
};

/* Funcion para actualizar el perfil de una obra en el objeto Punto de Interes */

const updatePunto = async (obra, updated) => {
  try {
    const q = query(
      collection(db, "puntos de interes"),
      where("nombre", "==", obra.punto_de_interes)
    );
    const res = await getDocs(q);
    let ref;
    if (!res.empty) {
      res.forEach((d) => {
        ref = d.id;
      });
      const docref = doc(collection(db, "puntos de interes"), ref);
      const fullDoc = await getDoc(docref);
      const data = fullDoc.data();
      if (updated.punto_de_interes && updated.punto_de_interes != "") {
        let update = [];
        data.obras.forEach((o) => {
          if (o.id != obra.id) {
            update.push(o);
          }
        });
        const filteredU = await updateDoc(docref, { obras: update });
        const newPunto = doc(
          collection(db, "puntos de interes"),
          updated.punto_de_interes.toLowerCase().replace(/ /g, "_")
        );
        const newPuntoDoc = await getDoc(newPunto);
        const getPuntoData = getObj(obra, updated);

        if (!newPuntoDoc.exists()) {
          await setDoc(newPunto, {
            id: updated.punto_de_interes.toLowerCase().replace(/ /g, "_"),
            nombre: updated.punto_de_interes,
            obras: [getPuntoData],
          });
        } else {
          await updateDoc(newPunto, { obras: arrayUnion(getPuntoData) });
        }
      } else {
        data.obras.forEach((o, index) => {
          const newObj = getObj(obra, updated);
          if (o.id == obra.id) {
            data.obras[index] = newObj;
          }
        });
        await updateDoc(docref, { obras: data.obras });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

/* Funcion para obtener el objeto actualizado a incluir en el objeto Punto de Interes */

const getObj = (obra, updated) => {
  let Obj = { id: obra.id };
  if (Object.keys(updated).includes("nombre_obra")) {
    Obj = { ...Obj, ["nombre_obra"]: updated.nombre_obra };
  } else {
    Obj = { ...Obj, ["nombre_obra"]: obra.nombre_obra };
  }
  if (Object.keys(updated).includes("nombre_autor")) {
    Obj = { ...Obj, ["nombre_autor"]: updated.nombre_autor };
  } else {
    Obj = { ...Obj, ["nombre_autor"]: obra.nombre_autor };
  }
  if (Object.keys(updated).includes("img")) {
    Obj = { ...Obj, ["img"]: `${updated.img}` };
  } else {
    Obj = { ...Obj, ["img"]: `${obra.img}` };
  }
  if (Object.keys(updated).includes("punto_de_interes")) {
    Obj = { ...Obj, ["punto_de_interes"]: updated.punto_de_interes };
  } else {
    Obj = { ...Obj, ["punto_de_interes"]: obra.punto_de_interes };
  }

  return Obj;
};

/* Funcion para eliminar el perfil de un tour */

export const deleteTour = async (tourID, nombre, onSuccessDelete, onError) => {
  try {
    const ref = doc(collection(db, "tours"), tourID);
    await deleteDoc(ref);
    await deletePic(nombre, "tours");

    if (onSuccessDelete) {
      onSuccessDelete();
    }
  } catch (error) {
    console.log(error);
    if (onError) {
      onError();
    }
  }
};

/* Funcion para eliminar el perfil de una obra */

export const deleteObra = async (
  obraID,
  punto,
  nombre,
  onSuccessDelete,
  onError
) => {
  try {
    const q = query(
      collection(db, "puntos de interes"),
      where("nombre", "==", punto)
    );
    const res = await getDocs(q);
    if (!res.empty) {
      let d;
      res.forEach((q) => {
        d = q.data();
      });

      const filtered = [];
      d.obras.forEach((o) => {
        if (o.id != obraID) {
          filtered.push(o);
        }
      });
      const refPunto = doc(collection(db, "puntos de interes"), d.id);
      await updateDoc(refPunto, { obras: filtered });
    }
    await deletePic(
      nombre.toLowerCase().replace(/ /g, "_"),
      "obras_de_arte",
      punto.toLowerCase().replace(/ /g, "_")
    );
    const refDoc = doc(collection(db, "obras"), obraID);
    await deleteDoc(refDoc);
    if (onSuccessDelete) {
      onSuccessDelete();
    }
  } catch (error) {
    if (onError) {
      onError();
    }
  }
};

/* Funcion para actualizar un perfil de usuario */

export const updateUser = async (
  user,
  newData,
  onSuccess,
  onNothing,
  onError
) => {
  try {
    let updated = {};
    Object.keys(newData).forEach((k) => {
      if (newData[k] != "" && newData[k] != user[k]) {
        updated = { ...updated, [k]: newData[k] };
      }
    });

    if (Object.keys(updated).length > 0) {
      if (Object.keys(updated).includes("img")) {
        let url;
        if (user.img != null) {
          await deletePic(user.name.toLowerCase().replace(/ /g, "_"), "users");
        }
        if (Object.keys(updated).includes("name")) {
          url = await uploadPic(
            updated.img,
            "users",
            updated.name.toLowerCase().replace(/ /g, "_")
          );
        } else {
          url = await uploadPic(
            updated.img,
            "users",
            user.name.toLowerCase().replace(/ /g, "_")
          );
        }
        updated["img"] = url;
      }

      const userRef = doc(collection(db, "users"), user.id);
      const update = await updateDoc(userRef, updated);
      if (onSuccess) {
        onSuccess();
      }
    } else {
      if (onNothing) {
        onNothing();
      }
    }
  } catch (error) {
    console.log(error);
    if (onError) {
      onError();
    }
  }
};

/* Funcion para eliminar un usuario */

export const deleteUser = async (user, onSuccessDelete, onError) => {
  try {
    await auth.currentUser.delete();
    const ref = doc(collection(db, "users"), user.id);
    await deleteDoc(ref);
    if (user.img != null) {
      await deletePic(user.name.toLowerCase().replace(/ /g, "_"), "users");
    }
    if (onSuccessDelete) {
      onSuccessDelete();
    }
  } catch (error) {
    console.log(error);
    if (onError) {
      onError();
    }
  }
};
