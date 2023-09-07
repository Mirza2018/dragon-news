import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading,setLoading]=useState(true);

    useEffect(() => {
        const unsubscrbe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false)
        })
        return () => { unsubscrbe() };
    }, [])

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
        
    }


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
            
    }

    const value = {
        user,
        createUser,
        loginUser, 
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={value}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;