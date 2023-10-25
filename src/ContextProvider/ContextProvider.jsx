import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const AuthContext = createContext();

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState();


    const authInfo = {
        user,
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