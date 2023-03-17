const express = require("express");
const { controllerGetBlogs, controllerGetABlog, controllerDeleteABlog, controllerSaveBlog, controllerUpdateABlog } = require("./Blogs.controller");
const { blogsUpload } = require("./Blogs.multer");

const blogsRouter = express.Router();
blogsRouter.get("/blogs", controllerGetBlogs);
blogsRouter.post("/blogs", blogsUpload.array("image"), controllerSaveBlog);
blogsRouter.get("/blog/:blogId", controllerGetABlog);
blogsRouter.delete("/blog:blogId", controllerDeleteABlog);
blogsRouter.put("/blog:blogId", controllerUpdateABlog);

module.exports = blogsRouter;
