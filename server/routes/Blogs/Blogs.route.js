const express = require("express");
const { controllerGetBlogs, controllerGetABlog, controllerDeleteABlog, controllerSaveBlog, controllerUpdateABlog } = require("./Blogs.controller");
const createUpload = require("../../multer");

const blogsUpload = createUpload("blogs");

const blogsRouter = express.Router();
blogsRouter.get("/blogs", controllerGetBlogs);
blogsRouter.post("/blogs", blogsUpload.array("image"), controllerSaveBlog);
blogsRouter.get("/blog/:blogId", controllerGetABlog);
blogsRouter.delete("/blog:blogId", controllerDeleteABlog);
blogsRouter.put("/blog/:blogId", blogsUpload.array("image"), controllerUpdateABlog);

module.exports = blogsRouter;
