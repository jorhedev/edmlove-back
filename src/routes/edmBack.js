const { Router } = require("express");
const controllers = require("../controllers/edmNewsControllers");

const edmNews = Router();

edmNews.get("/", controllers.getEdmNews);
edmNews.post("/createNews", controllers.postCreateNews);
edmNews.get("/:id", controllers.getEdmNewsById);

module.exports = edmNews;
