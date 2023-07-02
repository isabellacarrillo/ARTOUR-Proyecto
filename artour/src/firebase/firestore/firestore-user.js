import { db } from "../firebaseConfig";
import {
  setDoc,
  collection,
  updateDoc,
  doc,
  getDoc,
  arrayUnion,
} from "firebase/firestore";

/* Funcion para guardar una reserva en la base de datos */

export const saveReserve = async (data, user, tourID, onError) => {
  try {
    const refTour = doc(collection(db, "tours"), tourID);
    const docTour = await getDoc(refTour);
    const result = docTour.data();
    let disponibilidad = false;
    result.fecha.forEach((f, index) => {
      if (f.fecha === data.fecha_reserva) {
        const newAvailable = parseInt(f.capacidad) - data.num_entradas;
        result.fecha[index]["capacidad"] = `${newAvailable}`;
      }
      if (parseInt(f.capacidad) > 0) {
        disponibilidad = true;
      }
    });
    if (disponibilidad) {
      result["disponibilidad"] = "full";
    } else {
      result["disponibilidad"] = "out";
    }

    const refUser = doc(collection(db, "users"), user.id);
    const update = await updateDoc(refUser, {
      reservas: arrayUnion({
        tour_id: tourID,
        nombre_tour: result.nombre_tour,
        img_tour: result.img,
        ...data,
      }),
    });
    const updatedTour = await updateDoc(refTour, result);
    const refRes = doc(collection(db, "reservas"));
    const create = await setDoc(refRes, {
      id_user: user.id,
      nombre_reserva: user.name,
      tour_id: tourID,
      id_reserva: refRes.id,
      ...data,
    });

    return refRes;
  } catch (error) {
    console.log(error);
    if (onError) {
      onError();
    }
  }
};

/* Funcion para agregar una contribucion a la base de datos */

export const addContribution = async (number, paymentID, reservaID) => {
  try {
    const result = await updateDoc(reservaID, {
      monto_contribucion: number,
      contribucion_id: paymentID,
    });
  } catch (error) {
    console.log(error);
  }
};
