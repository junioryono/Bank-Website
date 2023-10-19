import React, { createContext, useContext } from "react";

/**
 * This represents some generic auth provider API, like Firebase.
 */
const authProvider = {
   username: undefined,
};

export const AuthContext = createContext(authProvider);

export const useAuth = () => {
   return useContext(AuthContext);
};

export function AuthProvider({ children }) {
   // TODO: get the user from local storage?
   return <AuthContext.Provider value={authProvider}>{children}</AuthContext.Provider>;
}
