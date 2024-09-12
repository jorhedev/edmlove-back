const getEdmNews = require("./getEdmNews");
const { postCreateNews } = require("./postCreateNews");

const edmNewsController = {
  getEdmNews,
  postCreateNews
};

module.exports = edmNewsController;
