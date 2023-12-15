import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../config/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContextProvider";
// import { useContext } from "react";
// import { UserContext } from "../context/UserContextProvider";

const signInWithGoogle = async () => {
  try {
    const googleProvider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        avatar: user.photoURL,
      });
    }
    return { data: { user } };
  } catch (err) {
    console.error(err);
    return { error: err.message };
  }
};

const signUpWithEmailAndPassword = async ({ email, password }) => {
  try {
    const auth = getAuth();
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    console.log("res", res);
    console.log("user", user);
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "local",
        email: user.email,
        avatar: user.photoURL,
      });
    }
    return { data: { user } };
  } catch (err) {
    console.error(err);
    return { error: err.message };
  }
};

const logOut = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    return { error };
  }
};

export const useGoogleAuth = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: signInWithGoogle,
    onSuccess: () => {
      toast.success("Login Succesful");
      navigate("/");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Something went wrong.Please try again later");
    },
  });
};

export const useRegisterWithEmail = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: signUpWithEmailAndPassword,
    onSuccess: () => {
      toast.success("Registration Succesful");
      navigate("/");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Something went wrong.Please try again later");
    },
  });
};

export const useLogout = () => {
  const navigate = useNavigate();
  const { setisAuthenticated, setUser } = useContext(UserContext);
  return useMutation({
    mutationFn: logOut,
    onSuccess: () => {
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("user");
      setisAuthenticated(false);
      setUser(null);
      toast.success("Logout Succesful");
      navigate("/");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Something went wrong.Please try again later");
    },
  });
};
