import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword, getAuth,
    onAuthStateChanged, signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";

import app from "../firebaseConfig/firebaseConfig";
import { createContext, useEffect, useState } from "react";

const auth = getAuth(app);
export const authContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(true);

    const createuser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const provider = new GoogleAuthProvider();
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const profileUpdate = (name, image) => {
        setLoading(true);
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("Current User in the auth state: ", currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, []);

    const Info = { createuser, signIn, user, logOut, loading, setLoading, googleSignIn, profileUpdate };
    return (
        <authContext.Provider value={Info}>
            {children}
        </authContext.Provider>
    )
};

export default AuthProvider;

