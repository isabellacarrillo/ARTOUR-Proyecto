import { db } from "../firebaseConfig";
import {
  getDocs,
  collection,
  getDoc,
  doc,
  where,
  query,
} from "firebase/firestore";

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

export const pullObra = async (obraID) => {
  const ref = doc(db, "obras", obraID);
  const result = await getDoc(ref);
  return result.data();
};

export const pullAllPuntos = async () => {
  let puntos = [];
  const result = await getDocs(collection(db, "puntos de interes"));
  result.forEach((doc) => {
    puntos.push(doc.data());
  });
  return puntos;
};

export const pullQuery = async (search, filter, tours) => {
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
          console.log(p);
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
          const p = t[k].split("-");
          const wanted = new Date(search);
          const start = new Date(p[0]);
          const end = new Date(p[1]);
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
              (pun) => pun.nombre.toLowerCase() === search.toLowerCase().trim()
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
};

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

export const getDateTours = async (date) => {
  let tours = [];
  const pullResult = await getDocs(collection(db, "tours"));
  pullResult.forEach((p) => {
    const tour = p.data();

    tour.fecha.forEach((f) => {
      console.log(f.fecha, date);
      if (f.fecha === date && f.capacidad > 0) {
        tours.push(tour);
      }
    });
  });
  return tours;
};
