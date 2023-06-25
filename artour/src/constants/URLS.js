export const HOME_URL = "/";

export const LOGIN_URL = "/login";
export const REGISTER_URL = "/registro";

export const SEARCH_URL = "/buscar";

export const UNAUTHORIZED_URL = "/403";

export const CREATE_ART = "/crear_obra";

export const CREATE_TOUR = "/crear_tour";

export const EDIT_TOUR = "/modificar_tour";

export const EDIT_ART = "/modificar_obra";

export const EDIT_PROFILE = "/modificar_perfil";

export const CONTACT_URL = "/contacto";

export const RESERVE_URL = "/reserva";

export const FEEDBACK_URL = "/feedback";

export const TOUR_DETAIL = (tourID = ":tourID") => {
  return `/tours/${tourID}`;
};
export const OBRA_DETAIL = (obraID = ":obraID") => {
  return `/obras/${obraID}`;
};
