const { Router } = require("express");
const controllers = require("../controllers/edmNewsControllers");

const edmNews = Router();

edmNews.get("/", controllers.getEdmNews);
edmNews.post("/createNews" , controllers.postCreateNews);



module.exports = edmNews;
