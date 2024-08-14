import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from './../firebase/firebase.config';

export const AuthContext = createContext(null); 

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true); 


    // user create account with email and password
    const createNewUser = (email, password) => {
        setLoading(true); 
        return createUserWithEmailAndPassword(auth, email, password); 
    }

    // user login with email and password
    const userLogin = (email, password) => {
        setLoading(true); 
        return signInWithEmailAndPassword(auth, email, password);
    }

    //user profile update 
    const userUpdateProfile = (name=null, photoURL=null) => {
        setLoading(true); 
        return updateProfile(auth.currentUser, {
            displayName : name, 
            photoURL : photoURL,
        })
    }

    //user google login
    const googleProvider = new GoogleAuthProvider(); 
    const userGoogleLogin = () => {
        setLoading(true); 
        return signInWithPopup(auth, googleProvider)
    }

    //user login 
    const userLogout = () => {
        setLoading(true); 
        return signOut(auth);
    }

    //user observing. 
    useEffect(()=>{
        const unSubcribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser); 
            setLoading(false);

        })
        return ()=>{unSubcribe()}
    },[])



    const authInfo = {
        user, 
        loading,
        createNewUser,
        userLogin,
        userGoogleLogin,
        userLogout,
        userUpdateProfile
     }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;