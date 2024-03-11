import { createContext } from "react";
import useFirebase from "../../Hooks/useFireBase";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const authContext = useFirebase();
  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default AuthProvider;
