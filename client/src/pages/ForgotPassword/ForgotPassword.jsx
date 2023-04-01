import React, { useReducer, useState, useEffect } from "react";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link, useNavigate } from "react-router-dom";

import styles from "../../app.styles";
import { useAdminContext } from "../../context/AdminContext";
import { useAuthContext } from "../../context/AuthContext";
import { httpValidatePasswordResetCode, httpSetNewPassword } from "../../hooks/requests/request";
import { statusFunc } from "../../components/Snackbar/status.service";

import PageDesc from "../../components/Header/PageDesc";
import Error from "../../components/Error/Error";
import Snackbar from "../../components/Snackbar/Snackbar";
import NotFound from "../../components/NotFound/NotFound";

import MessageIcon from "@mui/icons-material/Message";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

const ForgotPasswordPage = () => {
	const theme = useTheme();
	const { validations } = useAuthContext();
	const [pageFound, setPageFound] = useState(localStorage.getItem("forgot-password") || false);
	const [status, statusDispatchFunc] = useReducer(statusFunc, { error: null, success: null, waiting: null });
	const navigate = useNavigate();
	const [token, setToken] = useState(null);

	let [code, setCode] = useState("");
	let [password, setPassword] = useState({});

	async function verifyCode() {
		try {
			statusDispatchFunc({ type: "setWaiting" });
			// Validate password
			if (!code) {
				statusDispatchFunc({ type: "setError", payload: "Please enter your code " });
				return;
			}
			if (code.length !== 6) {
				statusDispatchFunc({ type: "setError", payload: "Invalid code length. Code must be 6 characters in length" });
				return;
			}
			let res = await httpValidatePasswordResetCode(code);
			if (res.error) {
				statusDispatchFunc({ type: "setError", payload: res.error });
				return;
			}

			setToken(res.token);
			statusDispatchFunc({ type: "clearStatus" });
		} catch (error) {
			statusDispatchFunc({ type: "setError", payload: error.message });
		}
	}

	async function updatePassword() {
		try {
			statusDispatchFunc({ type: "setWaiting" });
			if (!validations.validatePassword(password.main)) {
				statusDispatchFunc({ type: "setError", payload: "Password must contain at least eight characters, at least one number and both lower and uppercase letters and special characters" });
				return;
			}
			if (password.main !== password.confirm) {
				statusDispatchFunc({ type: "setError", payload: "Passwords do not match" });
				return;
			}

			let res = await httpSetNewPassword(password.main, token);
			if (res.error) {
				statusDispatchFunc({ type: "setError", payload: res.error });
				return;
			}
			statusDispatchFunc({ type: "setSuccess", payload: "Admin's password has been successfully changed" });

			localStorage.removeItem("forgot-password");
		} catch (e) {
			statusDispatchFunc({ type: "setError", payload: e.message });
		}
	}

	useEffect(() => {
		document.title = "Restaurante - Contact Us";
		if (pageFound) {
			// Check if a notFound session has been set
			let createdTime = parseInt(pageFound);
			if (!createdTime) {
				setPageFound(false);
				localStorage.removeItem("forgot-password");
				return;
			}
			let currentTime = new Date().getTime();

			console.log(createdTime - currentTime);
			if (createdTime - currentTime > 0 || createdTime - currentTime < -7200000) {
				setPageFound(false);
				return;
			}
			setPageFound(true);
		}
	}, []);

	return (
		<>
			{pageFound && (
				<>
					<PageDesc content="Forgot Password" />
					<>
						<Box sx={{ marginBlock: "120px", paddingInline: "20px" }}>
							{!token && (
								<Container maxWidth="sm" sx={{ ...styles.passwordpage__container, background: theme.palette.protectedBg.main, border: `2px solid ${theme.palette.stroke.main}` }}>
									<Box sx={{ ...styles.padlock__container, backgroundColor: theme.palette.primary.main }}>
										<MessageIcon sx={{ fontSize: "40px" }} color="white" />
									</Box>
									<Typography variant="h3" sx={{ ...styles.title, fontSize: "28px", marginBottom: "20px" }}>
										SMS sent
									</Typography>
									<Typography variant="p" sx={{ ...styles.desc, width: { xxs: "100%", sm: "55%" }, textAlign: "center", fontSize: "14px" }}>
										A message has been sent to the admin’s phone number please enter the code beowe
									</Typography>
									<Box
										sx={{
											width: { xxs: "100%", sm: "60%" },
											marginBlock: "20px",
											"& .MuiInputBase-input": {
												fontSize: { xxs: "18px", sm: "22px" },
												letterSpacing: "6px",
											},
										}}>
										<TextField
											id=""
											value={code}
											onChange={(e) => setCode(e.target.value)}
											placeholder="Enter code here"
											sx={{ width: "100%" }}
											type="text"
											onFocus={() => statusDispatchFunc({ type: "clearStatus" })}
										/>
									</Box>
									<Button
										variant="contained"
										color="secondary"
										sx={{ ...styles.button, width: { xxs: "100%", sm: "60%" } }}
										onClick={verifyCode}
										disabled={status.waiting ? true : false}>
										{status.waiting ? "Waiting..." : "Submit"}
									</Button>
									<Button variant="text" sx={{ ...styles.button, textAlign: "center", fontSize: "14px", opacity: 0.6 }}>
										Resend Code
									</Button>
									{status.error && <Error text={status.error} sx={{ textAlign: "center", marginTop: "10px" }} />}
									{status.success && <Snackbar text={status.success} close={() => statusDispatchFunc({ type: "clearStatus" })} />}
								</Container>
							)}
							{token && (
								<Container maxWidth="sm" sx={{ ...styles.passwordpage__container, background: theme.palette.footerBg.main, border: `2px solid ${theme.palette.primary.main}` }}>
									<Box sx={{ ...styles.padlock__container, backgroundColor: theme.palette.primary.main }}>
										<VpnKeyIcon sx={{ fontSize: "40px" }} color="secondary" />
									</Box>
									<Typography variant="h3" sx={{ ...styles.title, fontSize: "28px", marginBottom: "20px" }} color={theme.palette.white.main}>
										Select A New Password
									</Typography>
									<Typography variant="p" sx={{ ...styles.desc, width: { xxs: "100%", sm: "55%" }, textAlign: "center", fontSize: "14px" }} color={theme.palette.white.main}>
										Password must contain at least eight characters, at least one number and both lower and uppercase letters and special characters
									</Typography>
									<Box
										sx={{
											width: { xxs: "100%", sm: "60%" },
											marginBlock: "20px",
											"& .MuiInputBase-input": {
												fontSize: { xxs: "18px", sm: "22px" },
												color: theme.palette.white.main,
											},
											"& .MuiOutlinedInput-notchedOutline": {
												borderColor: theme.palette.white.main,
												"&:focus": {
													borderColor: theme.palette.white.main,
												},
											},
										}}>
										<TextField
											value={password.main || ""}
											onChange={(e) =>
												setPassword((prev) => {
													return { ...prev, main: e.target.value };
												})
											}
											placeholder="Enter password"
											sx={{ width: "100%", fontSize: "12px", marginBottom: "20px" }}
											type="password"
											onFocus={() => statusDispatchFunc({ type: "clearStatus" })}
										/>
										<TextField
											value={password.confirm || ""}
											onChange={(e) =>
												setPassword((prev) => {
													return { ...prev, confirm: e.target.value };
												})
											}
											placeholder="Confirm password"
											sx={{ width: "100%", fontSize: "12px" }}
											type="password"
											onFocus={() => statusDispatchFunc({ type: "clearStatus" })}
										/>
									</Box>
									<Button
										variant="contained"
										color="secondary"
										sx={{ ...styles.button, width: { xxs: "100%", sm: "60%" } }}
										onClick={updatePassword}
										disabled={status.waiting ? true : false}>
										{status.waiting ? "Waiting..." : "Submit"}
									</Button>

									{status.error && <Error text={status.error} sx={{ textAlign: "center", marginTop: "15px", width: "90%" }} />}
									{status.success && <Snackbar text={status.success} close={() => statusDispatchFunc({ type: "clearStatus" })} link="/blogs/new" />}
								</Container>
							)}
						</Box>
					</>
				</>
			)}
			{!pageFound && <NotFound />}
		</>
	);
};

export default ForgotPasswordPage;
