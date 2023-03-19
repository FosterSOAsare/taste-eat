import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./theme";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import AdminProvider from "./context/AdminContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<ThemeProvider theme={theme}>
		<AuthProvider>
			<AdminProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</AdminProvider>
		</AuthProvider>
	</ThemeProvider>
);
