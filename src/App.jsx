import { Routes, Route } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

import "./App.css";
import "./styles/output.css";
import Layout from "./components/Layout/Layout";
import Homepage from "./pages/Homepage/Homepage";
import BlogsPage from "./pages/Blogs/Blogs";
import MenuPage from "./pages/Menu/Menu";
import AboutPage from "./pages/About/AboutPage";
import ChefsPage from "./pages/Chefs/Chefs";
import Chef from "./pages/Chef/Chef";
import GalleryCollection from "./pages/Gallery/GalleryCollection";
import NotFoundPage from "./pages/NotFound/NotFound";
import ReservationPage from "./pages/Reservation/Reservation";

function App() {
	useTheme();
	return (
		<Box className="App">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Homepage />}></Route>
					<Route path="blogs" element={<BlogsPage />}></Route>
					<Route path="menu" element={<MenuPage />}></Route>
					<Route path="about" element={<AboutPage />}></Route>
					<Route path="chefs" element={<ChefsPage />}></Route>
					<Route path="chef/:chefId" element={<Chef />}></Route>
					<Route path="gallery" element={<GalleryCollection />}></Route>
					<Route path="reserve" element={<ReservationPage />}></Route>
					<Route path="*" element={<NotFoundPage />}></Route>
				</Route>
			</Routes>
		</Box>
	);
}

export default App;
