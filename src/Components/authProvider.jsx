import React, { createContext } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebaseInit.js"

export const AuthContext = createContext(null)
const auth = getAuth(app);

const authProvider = ({children}) => {


    
const authInfo={
    user
}


    return (
        <AuthContext.Provider value={authInfo}>

           {children}
            
        </AuthContext.Provider>
    );
};

export default authProvider;