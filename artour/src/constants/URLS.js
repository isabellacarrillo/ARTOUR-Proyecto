export const HOME_URL = "/";

export const LOGIN_URL = "/login";

export const REGISTER_URL = "/registro";

export const CALENDAR_URL = "/calendario";

export const SEARCH_URL = "/buscar";

export const UNAUTHORIZED_URL = "/403";

export const CREATE_ART = "/crear_obra";

export const CREATE_TOUR = "/crear_tour";

export const EDIT_TOUR = (tourID = ":tourID") => {
  return `/tours/${tourID}/modificar`;
};

<<<<<<< HEAD
export const EDIT_ART = "/modificar_obra";
export const CONTACT_URL = "/contacto";
=======
export const EDIT_ART = (obraID = ":obraID") => {
  return `/obras/${obraID}/modificar`;
};

export const EDIT_PROFILE = "/modificar_perfil";

export const CONTACT_URL = "/contacto";

export const PROFILE_URL = "/profile";

export const MYRESERVES_URL = "/misreservas";

export const RESERVE_URL = (tourID = ":tourID") => {
  return `/tours/${tourID}/reservar`;
};

export const FEEDBACK_URL = (tourID = ":tourID", reservaID = ":reservaID") => {
  return `/misreservas/${reservaID}/${tourID}/feedback`;
};

>>>>>>> d166608ab561a53717057062a4a8360a9538ba0d
export const TOUR_DETAIL = (tourID = ":tourID") => {
  return `/tours/${tourID}`;
};
export const OBRA_DETAIL = (obraID = ":obraID") => {
  return `/obras/${obraID}`;
};
<<<<<<< HEAD

export const EDIT_PROFILE = "/modificar_perfil";
=======
>>>>>>> d166608ab561a53717057062a4a8360a9538ba0d
