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

    const updatedTour = await updateDoc(refTour, result);
    const refRes = doc(collection(db, "reservas"));
    const create = await setDoc(refRes, {
      id_user: user.id,
      nombre_reserva: user.name,
      tour_id: tourID,
      id_reserva: refRes.id,
      ...data,
    });

    const refUser = doc(collection(db, "users"), user.id);
    const update = await updateDoc(refUser, {
      reservas: arrayUnion({
        reserva_id: refRes.id,
        tour_id: tourID,
        nombre_tour: result.nombre_tour,
        img_tour: result.img,
        ...data,
      }),
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

export const addFeedback = async (
  tourID,
  user,
  data,
  reservaID,
  onSuccess,
  onError
) => {
  try {
    const refTour = doc(collection(db, "tours"), tourID);
    if (data.descripcion != "") {
      const docTour = await updateDoc(refTour, {
        rating: data.rating,
        comentarios: arrayUnion({
          user: user.name,
          comentario: data.descripcion,
        }),
      });
    } else {
      const docTour = await updateDoc(refTour, {
        rating: data.rating,
      });
    }

    user.reservas.forEach((r, index) => {
      if (r.reserva_id === reservaID) {
        user["reservas"][index] = { ...r, feedback: true };
      }
    });

    const refUser = doc(collection(db, "users"), user.id);
    const docUser = await getDoc(refUser);
    const userData = docUser.data();
    userData.reservas.forEach((r, index) => {
      if (r.reserva_id === reservaID) {
        userData["reservas"][index] = { ...r, feedback: true };
      }
    });
    const updated = await updateDoc(refUser, userData);
    if (onSuccess) {
      onSuccess();
    }
  } catch (error) {
    if (onError) {
      onError();
    }
  }
};
