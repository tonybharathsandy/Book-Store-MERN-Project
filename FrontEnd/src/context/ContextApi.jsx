/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from "firebase/auth";
import {auth} from '../firebase/firebase.config';


 const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //signUp with Google

    const googleProvider = new GoogleAuthProvider();

    //register a user;
    const registerUser = async (email, password) => {
       return await createUserWithEmailAndPassword(auth, email, password)
    }

    //Login User 
    const signInUser = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password)
    }

    // Sign in with Google
    const signInWithGoogle = async () => {
       return await signInWithPopup(auth, googleProvider)
    } 

    //Logout 
    const logOut = async () => {
        return await signOut(auth)
    }

    // Manage user

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setLoading(false);
            if (user) {
                const userData = {
                    email: user.email,
                    userName: user.displayName,
                    photo: user.photoURL
                };
                setCurrentUser(userData);
            }
        });
    
        return () => unSubscribe();
    }, []);
    

    const value = {
            currentUser,
            registerUser,
            signInUser,
            signInWithGoogle,
            logOut,
            loading
    }

    return(
        <AuthContext.Provider value={value}>
                {children}
        </AuthContext.Provider>
    )
}   