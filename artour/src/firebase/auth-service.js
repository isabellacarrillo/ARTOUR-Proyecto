//Metodos de autenticacion
import {
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAdditionalUserInfo,
} from "firebase/auth";
import {
  auth,
  facebookProvider,
  googleProvider,
  twitterProvider,
} from "./firebaseConfig";
import { createUserProfile } from "./users-service";

export const signInWithGoogle = async ({ onSuccess }) => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const { isNewUser } = getAdditionalUserInfo(result);

    if (isNewUser) {
      await createUserProfile(result.user.uid, {
        email: result.user.email,
        name: result.user.displayName,
        id: result.user.uid,
        telefono: "",
        numero_carnet: "",
        role: "user",
        reservas: [],
      });
    }
    if (onSuccess) {
      onSuccess();
    }
  } catch (error) {
    const authcode = error.code;
    return authcode;
  }
};

export const signInWithFacebook = async ({ onSuccess }) => {
  try {
    const result = await signInWithPopup(auth, facebookProvider);
    const { isNewUser } = getAdditionalUserInfo(result);

    if (isNewUser) {
      await createUserProfile(result.user.uid, {
        email: result.user.email,
        name: result.user.displayName,
        id: result.user.uid,
        telefono: "",
        numero_carnet: "",
        role: "user",
        reservas: [],
      });
    }
    if (onSuccess) {
      onSuccess();
    }
  } catch (error) {
    const authcode = error.code;
    return authcode;
  }
};

export const signInWithTwitter = async ({ onSuccess }) => {
  try {
    const result = await signInWithPopup(auth, twitterProvider);
    const { isNewUser } = getAdditionalUserInfo(result);

    if (isNewUser) {
      await createUserProfile(result.user.uid, {
        email: result.user.email,
        name: result.user.displayName,
        id: result.user.uid,
        img: result.user.photoURL,
        telefono: "",
        numero_carnet: "",
        role: "user",
         reservas : [],
      });
    }
    if (onSuccess) {
      onSuccess();
    }
  } catch (error) {
    const authcode = error.code;
    return authcode;
  }
};

export const registerWithEmailAndPassword = async (
  { onSuccess },
  email,
  password,
  extraData
) => {
  try {
    console.log(email, password);
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await createUserProfile(result.user.uid, {
      email,
      id: result.user.uid,
      password,
      role: "user",
      numero_carnet: "",
      reservas : [],
      ...extraData,
    });
    if (onSuccess) {
      onSuccess();
    }
  } catch (error) {
    const authcode = error.code;
    return authcode;
  }
};

export const loginWithEmailAndPassword = async (
  { onSuccess },
  email,
  password
) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    if (onSuccess) {
      onSuccess();
    }
  } catch (error) {
    const authcode = error.code;
    return authcode;
  }
};
export const logout = async ({ onSuccess }) => {
  try {
    await signOut(auth);
    if (onSuccess) {
      onSuccess();
    }
  } catch (error) {}
};
