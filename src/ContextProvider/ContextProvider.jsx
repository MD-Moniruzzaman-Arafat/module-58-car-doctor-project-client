import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase.confiq";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState();

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // logIn user
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logOut user
    const logOutUser = () => {
        return signOut(auth);
    }


    const authInfo = {
        user,
        createUser,
        logInUser,
        logOutUser
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

ContextProvider.propTypes = {
    children: PropTypes.node,
}

export default ContextProvider;