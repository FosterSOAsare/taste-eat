import React, { useState } from "react";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import styles from "../../app.styles";
import { useAdminContext } from "../../context/AdminContext";
import { httpValidateAdmin } from "../../hooks/requests/request";

import PageDesc from "../../components/Header/PageDesc";

const PasswordProtectedPage = () => {
	const theme = useTheme();
	const { isAdmin, setIsAdmin, setLoading } = useAdminContext();
	let [password, setPassword] = useState("");

	async function logInAdmin() {
		let res = await httpValidateAdmin("password", password);
		if (res.error) return;
		setIsAdmin(true);
		localStorage.setItem("admin-session", res._id);
	}
	return (
		<>
			<PageDesc content="Password Protected" />
			<Box sx={{ marginBlock: "120px" }}>
				<Container maxWidth="sm" sx={{ ...styles.passwordpage__container, background: theme.palette.protectedBg.main, border: `2px solid ${theme.palette.stroke.main}` }}>
					<Box sx={{ ...styles.padlock__container, backgroundColor: theme.palette.primary.main }}>
						<LockOutlinedIcon sx={{ fontSize: "40px" }} color="secondary" />
					</Box>
					<Typography variant="h3" sx={{ ...styles.title, fontSize: "28px", marginBottom: "20px" }}>
						Protected Page
					</Typography>
					<Typography variant="p" sx={{ ...styles.desc, width: "85%", textAlign: "center", fontSize: "14px" }}>
						This page is password protected. If you are the website admin, or have access to this page, please type your password below.
					</Typography>
					<TextField id="" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password here" sx={{ width: "60%", marginBlock: "20px" }} type="password" />
					<Button variant="contained" color="secondary" sx={{ ...styles.button, width: "60%" }} onClick={logInAdmin}>
						Submit
					</Button>
				</Container>
			</Box>
		</>
	);
};

export default PasswordProtectedPage;
