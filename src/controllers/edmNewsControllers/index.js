const getEdmNews = require("./getEdmNews");
const getEdmNewsById = require("./getEdmNewsById");
const { postCreateNews } = require("./postCreateNews");

const edmNewsController = {
  getEdmNews,
  postCreateNews,
  getEdmNewsById
};

module.exports = edmNewsController;
