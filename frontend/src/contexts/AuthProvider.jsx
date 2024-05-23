import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, onAuthStateChanged, GoogleAuthProvider, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


// Assuming `isAdmin` is a property of the user object obtained from authentication
const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Check if user is admin and set isAdmin property accordingly
            const user = userCredential.user;
            user.isAdmin = (user.email === 'sridhar.chandrasekar28@gmail.com'); // Example: Set isAdmin based on email
            setUser(user);
        })
        .catch((error) => {
            setLoading(false);
            throw error;
        });
}


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginwithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        loginwithGoogle,
        loading,
        login,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
