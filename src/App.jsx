import { Routes, Route } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

import "./App.css";
import "./styles/output.css";
import Layout from "./components/Layout/Layout";
import Homepage from "./pages/Homepage/Homepage";
import BlogPage from "./pages/Blog/Blog";
import MenuPage from "./pages/Menu/Menu";
import AboutPage from "./pages/About/AboutPage";
import ChefsPage from "./pages/Chefs/Chefs";
import Chef from "./pages/About/Chef";

function App() {
	useTheme();
	return (
		<Box className="App">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Homepage />}></Route>
					<Route path="blog" element={<BlogPage />}></Route>
					<Route path="menu" element={<MenuPage />}></Route>
					<Route path="about" element={<AboutPage />}></Route>
					<Route path="chefs" element={<ChefsPage />}></Route>
					<Route path="chef/:chefId" element={<Chef />}></Route>
				</Route>
			</Routes>
		</Box>
	);
}

export default App;
