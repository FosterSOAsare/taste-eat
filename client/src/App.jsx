import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

import "./App.css";
import "./styles/output.css";
import { useAdminContext } from "./context/AdminContext";

import Loading from "./components/Loading/Loading";
import Layout from "./components/Layout/Layout";
import Homepage from "./pages/Homepage/Homepage";
import BlogsPage from "./pages/Blogs/Blogs";
import BlogPage from "./pages/Blogs/Blog";
import MenuPage from "./pages/Menu/Menu";
import AboutPage from "./pages/About/AboutPage";
import ChefsPage from "./pages/Chefs/Chefs";
import Chef from "./pages/Chefs/Chef";
import GalleryCollection from "./pages/Gallery/GalleryCollection";
import NotFound from "./components/NotFound/NotFound";
import ReservationPage from "./pages/Reservation/Reservation";
import NewBlogPage from "./pages/Blogs/NewBlog";
import DishesPage from "./pages/Dishes/Dishes";
import NewDishPage from "./pages/Dishes/NewDish";
import NewChefPage from "./pages/Chefs/NewChef";
import LicensesPage from "./pages/Licenses/Licenses";
import PasswordProtectedPage from "./pages/PasswordProtected/PasswordProtected";
import FaqPage from "./pages/Faq/Faq";
import ContactUsPage from "./pages/Contact/Contact";
import SingleDishPage from "./pages/Dishes/SingleDish";
import ForgotPasswordPage from "./pages/ForgotPassword/ForgotPassword";

function CheckAdmin({ children }) {
	const { loading, isAdmin } = useAdminContext();

	return (
		<>
			{loading && <Loading />}
			{!loading && isAdmin && children}
			{!loading && !isAdmin && <PasswordProtectedPage />}
		</>
	);
}

function App() {
	useTheme();
	return (
		<Box className="App">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Homepage />}></Route>
					<Route>
						<Route path="blogs" element={<BlogsPage />}></Route>
						<Route
							path="blogs/new"
							element={
								<CheckAdmin>
									<NewBlogPage />
								</CheckAdmin>
							}></Route>
						<Route path="blog/:blogId" element={<BlogPage />}></Route>
						<Route
							path="blog/:blogId/edit"
							element={
								<CheckAdmin>
									<NewBlogPage />
								</CheckAdmin>
							}></Route>
					</Route>
					<Route path="menu" element={<MenuPage />}></Route>
					<Route path="faq" element={<FaqPage />}></Route>
					<Route path="licenses" element={<LicensesPage />}></Route>
					<Route path="about" element={<AboutPage />}></Route>
					<Route path="contact" element={<ContactUsPage />}></Route>
					<Route path="forgotpassword" element={<ForgotPasswordPage />}></Route>
					<Route>
						<Route path="chefs" element={<ChefsPage />}></Route>
						<Route
							path="chefs/new"
							element={
								<CheckAdmin>
									<NewChefPage />
								</CheckAdmin>
							}></Route>

						<Route path="chef/:chefId" element={<Chef />}></Route>
						<Route
							path="chef/:chefId/edit"
							element={
								<CheckAdmin>
									<NewChefPage />
								</CheckAdmin>
							}></Route>
					</Route>
					<Route path="gallery" element={<GalleryCollection />}></Route>
					<Route path="reserve" element={<ReservationPage />}></Route>
					<Route>
						<Route path="dishes" element={<DishesPage />}></Route>
						<Route
							path="dishes/new"
							element={
								<CheckAdmin>
									<NewDishPage />
								</CheckAdmin>
							}></Route>
						<Route
							path="dish/:dishId/edit"
							element={
								<CheckAdmin>
									<NewDishPage />
								</CheckAdmin>
							}></Route>
						<Route path="dish/:dishId" element={<SingleDishPage />}></Route>
					</Route>
					<Route path="*" element={<NotFound />}></Route>
				</Route>
			</Routes>
		</Box>
	);
}

export default App;
