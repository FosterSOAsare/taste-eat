import React, { createContext, useContext, useEffect, useState } from "react";
import { httpValidateAdmin } from "../hooks/requests/request";
const AdminContext = createContext();
const AdminProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [isAdmin, setIsAdmin] = useState(false);

	useEffect(() => {
		(async function () {
			let session = localStorage.getItem("admin-session");
			if (!session) {
				setLoading(false);
				setIsAdmin(false);
				return;
			}
			// setIsAdmin(true);
			let admin = await httpValidateAdmin("_id", session);
			if (admin.error) return;
			setLoading(false);
			setIsAdmin(true);
		})();
	}, []);

	return <AdminContext.Provider value={{ loading, isAdmin, setIsAdmin }}>{children}</AdminContext.Provider>;
};

export function useAdminContext() {
	return useContext(AdminContext);
}
export default AdminProvider;
