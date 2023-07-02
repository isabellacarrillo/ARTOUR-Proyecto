import { db } from "../firebaseConfig";
import {
  getDocs,
  collection,
  getDoc,
  doc,
  where,
  query,
} from "firebase/firestore";

{
  /* Funcion para conseguir todos los objetos Tours disponibles en la base de datos */
}

export const pullAllTours = async () => {
  let tours = [];
  const result = await getDocs(collection(db, "tours"));
  result.forEach((doc) => {
    tours.push(doc.data());
  });
  return tours;
};

{
  /* Funcion para obtener el objeto Tour escogido por ID en la base de Datos */
}

export const getTourDetail = async (tourID) => {
  const ref = doc(db, "tours", tourID);
  const result = await getDoc(ref);
  return result.data();
};

{
  /* Funcion para obtener el punto de interes correspondiente a una referencia */
}

export const getPuntos = async (refP) => {
  const result = await getDoc(refP);
  return result.data();
};

{
  /*Funcion para obtener el objeto Obra correspondiente al ID enviado */
}

export const pullObra = async (obraID) => {
  const ref = doc(db, "obras", obraID);
  const result = await getDoc(ref);
  return result.data();
};

{
  /* Funcion para conseguir todos los objetos Punto de Interes en la base de datos */
}

export const pullAllPuntos = async () => {
  let puntos = [];
  const result = await getDocs(collection(db, "puntos de interes"));
  result.forEach((doc) => {
    puntos.push(doc.data());
  });
  return puntos;
};

{
  /* Funcion que maneja la logiga de busqueda basado en el filtro y el input ingresado  */
}

export const pullQuery = async (search, filter, tours) => {
  try {
    if (filter === "obra") {
      const q = query(
        collection(db, "obras"),
        where("nombre_obra", "==", search)
      );
      const obras = await getDocs(q);
      let puntos = [];
      obras.forEach((o) => {
        const data = o.data();

        puntos.push(data.punto_de_interes);
      });

      let tourfiltered = [];
      tours.map((t) => {
        Object.keys(t).forEach((k) => {
          if (k === "puntos_de_interes") {
            const p = t[k];
            if (p.some((pun) => pun.nombre === puntos[0])) {
              tourfiltered.push(t);
            }
          }
        });
      });
      return tourfiltered;
    } else if (filter === "fecha") {
      let tourfiltered = [];
      tours.map((t) => {
        Object.keys(t).forEach((k) => {
          if (k === "fecha") {
            const wanted = new Date(search);
            const start = new Date(t[k][0].fecha);
            const end = new Date(t[k].slice(-1)[0].fecha);
            if (wanted >= start && wanted <= end) {
              tourfiltered.push(t);
            }
          }
        });
      });
      return tourfiltered;
    } else if (filter === "punto_de_interes") {
      let tourfiltered = [];
      tours.map((t) => {
        Object.keys(t).forEach((k) => {
          if (k === "puntos_de_interes") {
            const p = t[k];
            if (
              p.some(
                (pun) =>
                  pun.nombre.toLowerCase() === search.toLowerCase().trim()
              )
            ) {
              tourfiltered.push(t);
            }
          }
        });
      });
      return tourfiltered;
    } else {
      const q = query(
        collection(db, "tours"),
        where("nombre_tour", "==", search)
      );
      const result = await getDocs(q);
      let tours = [];
      result.forEach((r) => {
        tours.push(r.data());
      });
      return tours;
    }
  } catch (error) {
    console.log(error);
  }
};

{
  /* Funcion para conseguir todas las fechas en las cuales ocurre un tour con disponibilidad */
}

export const pullAllDates = async () => {
  let dates = [];
  const pullResult = await getDocs(collection(db, "tours"));

  pullResult.forEach((p) => {
    const tour = p.data();
    if (tour.disponibilidad != "out") {
      tour.fecha.forEach((f) => {
        if (!dates.includes(f.fecha) && parseInt(f.capacidad) > 0) {
          dates.push(f.fecha);
        }
      });
    }
  });

  return dates;
};

{
  /* Funcion para encontrar todos los tours que ocurren en una fecha en especifico */
}

export const getDateTours = async (date) => {
  let tours = [];
  const pullResult = await getDocs(collection(db, "tours"));
  pullResult.forEach((p) => {
    const tour = p.data();

    tour.fecha.forEach((f) => {
      if (f.fecha === date && f.capacidad > 0) {
        tours.push(tour);
      }
    });
  });
  return tours;
};
