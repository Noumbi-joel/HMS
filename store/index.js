import { createContext, useState } from "react";

//localstorage
import AsyncStorage from "@react-native-async-storage/async-storage";

import firebase from "../firebase";

export const AuthContext = createContext({
  token: "",
  role: "",
  isAuthenticated: false,
  getRole: () => {},
  authenticate: (token) => {},
  logout: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState();
  const [authRole, setAuthRole] = useState();

  const authenticate = (token) => {
    setAuthToken(token);
    AsyncStorage.setItem("token", token);
  };

  const getRole = (role) => {
    setAuthRole(role);
    AsyncStorage.setItem("role", role);
  }

  const logout = async () => {
    setAuthToken(null);
    await firebase.auth().signOut();
    AsyncStorage.removeItem("token");
  };

  const value = {
    token: authToken,
    role: authRole,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
