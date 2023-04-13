const express = require("express");
const { controllerGetBlogs, controllerGetABlog, controllerDeleteABlog, controllerSaveBlog, controllerUpdateABlog } = require("./Blogs.controller");
const { uploadToCloudinary } = require("../../lib/multer");
const admin = require("../../middlewares/admin.middleware");

const blogsRouter = express.Router();
blogsRouter.get("/blogs", controllerGetBlogs);
blogsRouter.post("/blogs", admin, uploadToCloudinary.single("image"), controllerSaveBlog);
blogsRouter.get("/blog/:blogId", controllerGetABlog);
blogsRouter.delete("/blog/:blogId", admin, controllerDeleteABlog);
blogsRouter.put("/blog/:blogId", admin, uploadToCloudinary.single("image"), controllerUpdateABlog);

module.exports = blogsRouter;
