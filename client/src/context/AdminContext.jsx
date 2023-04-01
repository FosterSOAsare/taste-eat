import React, { createContext, useContext, useEffect, useState } from "react";
import { httpValidateAdminToken } from "../hooks/requests/request";
const AdminContext = createContext();
const AdminProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [isAdmin, setIsAdmin] = useState(false);

	useEffect(() => {
		(async function () {
			try {
				let token = localStorage.getItem("admin-token");
				if (!token) {
					setLoading(false);
					setIsAdmin(false);
					return;
				}

				let admin = await httpValidateAdminToken(token);

				if (admin.error) {
					setLoading(false);
					localStorage.removeItem("admin-token");
					return;
				}
				setLoading(false);
				setIsAdmin(true);
			} catch (e) {
				setLoading(false);
				localStorage.removeItem("admin-token");
			}
		})();
	}, []);

	return <AdminContext.Provider value={{ loading, isAdmin, setIsAdmin }}>{children}</AdminContext.Provider>;
};

export function useAdminContext() {
	return useContext(AdminContext);
}
export default AdminProvider;
