import { onAuthStateChanged } from "@firebase/auth";
import React, { useContext, createContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebaseConfig";
import { getUserProfile } from "../firebase/users-service";

export const UserContext = createContext(null);

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, async (firebaseUser) => {
      setIsLoading(true);
      if (firebaseUser && !user) {
        const profile = await getUserProfile(firebaseUser.email);
        setUser(profile);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });
  }, []);
  return (
    <UserContext.Provider
      value={{
        user,
        isLoading,
        setUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}