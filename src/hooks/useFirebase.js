import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from './../firebase/firebase.init';
import { useState, useEffect } from 'react';
import useFunction from './useFunction';


initializeAuthentication();

const useFirebase = () => {
    const { clearAuth } = useFunction();
    const auth = getAuth();
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    //? Google SingIn Method
    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    };

    // ? Email SignUp Method

    const signUpUsingEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // ? Email SignIn Method

    const signInUsingEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // ? Sign Auth State Change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);


    // ? Sign Out
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                clearAuth();

            })
            .finally(() => setIsLoading(false));

    }

    return {
        user,
        isLoading,
        signInUsingGoogle,
        signUpUsingEmail,
        signInUsingEmail,
        logOut,
    };
}

export default useFirebase;