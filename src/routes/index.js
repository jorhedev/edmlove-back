const { Router } = require("express");

const edmRoutes = Router();

const edmBack = require("./edmBack");

edmRoutes.use("/edmNews", edmBack);

module.exports = edmRoutes;
