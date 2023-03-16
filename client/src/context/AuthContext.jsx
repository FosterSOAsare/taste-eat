import React, { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react";
import Validations from "../hooks/validations/Validations";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
	const [error, errorDispatchFunc] = useReducer(errorFunc, { display: "none", text: null });
	const [waiting, setWaiting] = useState(false);
	const validations = useMemo(() => new Validations(), []);

	function errorFunc(states, action) {
		switch (action.type) {
			case "displayError":
				return { display: "block", text: action.payload };
			case "clearError":
				return { display: "none", text: null };
			default:
				return states;
		}
	}

	function clearError() {
		errorDispatchFunc({ type: "clearError" });
	}

	useEffect(() => {
		error.display === "block" && setWaiting(false);
	}, [error]);
	return <AuthContext.Provider value={{ error, errorDispatchFunc, validations, clearError, waiting, setWaiting }}>{children}</AuthContext.Provider>;
};

export function useAuthContext() {
	return useContext(AuthContext);
}
export default AuthProvider;
