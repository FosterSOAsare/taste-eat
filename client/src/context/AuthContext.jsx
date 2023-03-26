import React, { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react";
import Validations from "../hooks/validations/Validations";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
	const validations = useMemo(() => new Validations(), []);

	return <AuthContext.Provider value={{ validations }}>{children}</AuthContext.Provider>;
};

export function useAuthContext() {
	return useContext(AuthContext);
}
export default AuthProvider;
