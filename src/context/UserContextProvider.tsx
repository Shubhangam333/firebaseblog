import React, { createContext, FC, useEffect, useState } from "react";
import { useCheckAuthStatus } from "../api/user";
import { auth } from "../config/firebaseConfig";

interface UserStateProps {
  user: any;
  isAuthenticated: boolean;
  isLoading: boolean;
  setisAuthenticated: any;
  setUser: any;
}

export const UserContext = createContext<UserStateProps | undefined>(undefined);

const UserContextProvider: FC = ({ children }) => {
  // const [isLoading, setLoading] = useState(true);
  const [isAuthenticated, setisAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") ? true : false
  );
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser({
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
          avatar: user.photoURL,
        });
        setisAuthenticated(true);
        localStorage.setItem(
          "user",
          JSON.stringify({
            uid: user.uid,
            name: user.displayName,
            authProvider: "google",
            email: user.email,
            avatar: user.photoURL,
          })
        );
        localStorage.setItem("isAuthenticated", JSON.stringify(true));
      }
      // setLoading(false);
    });

    return unsubscribe;
  }, []);
  return (
    <UserContext.Provider
      value={{ user, isAuthenticated, setisAuthenticated, setUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
