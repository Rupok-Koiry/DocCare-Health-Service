import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase.config";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

initializeAuthentication();

//Toastify generator
const toastCreator = (message, status) => {
  toast[status](message, {
    position: "bottom-center",
    autoClose: 3000,
    toastId: "unique",
    theme: "dark",
  });
};

const useFirebase = () => {
  const history = useHistory();

  //All state
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const auth = getAuth();
  //Sign in provider
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  //Google sign in
  const signInUsingGoogle = (redirectPath) => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        history.replace(redirectPath.pathname);
      })
      .catch((error) => {
        setError(error.message);
        toastCreator("Something went wrong!", "error");
      });
  };
  //Facebook sign in
  const signInUsingFacebook = (redirectPath) => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        setUser(result.user);
        history.replace(redirectPath.pathname);
      })
      .catch((error) => {
        setError(error.message);
        toastCreator("Something went wrong!", "error");
      });
  };

  //Update user
  const updateUser = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    }).catch((error) => {
      setError(error.message);
    });
  };
  //Register user
  const registerUser = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        updateUser(name);
      })
      .catch((error) => {
        setError(error.message);
        if (error.message.includes("email-already-in-use")) {
          toastCreator("Email already exists!", "error");
        } else {
          toastCreator("Something went wrong!", "error");
        }
      });
  };
  //Login user
  const loginUser = (email, password, redirectPath) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        history.replace(redirectPath.pathname);
      })
      .catch((error) => {
        setError(error.message);
        if (
          error.message.includes("wrong-password") ||
          error.message.includes("user-not-found")
        ) {
          toastCreator("Email or Password is invalid!", "error");
        } else if (error.message.includes("too-many-requests")) {
          toastCreator("Too many invalid requests, try again later!", "error");
        } else {
          toastCreator("Something went wrong!", "error");
        }
      });
  };
  //Logout functionality
  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
        toastCreator("Something went wrong!", "error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });

    return unsubscribe;
  }, [auth]);

  return {
    user,
    error,
    loading,
    signInUsingGoogle,
    signInUsingFacebook,
    registerUser,
    loginUser,
    logout,
  };
};

export default useFirebase;
