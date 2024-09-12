require("dotenv").config();

const config = {};

config.PORT = process.env.PORT || 3000;

config.USERS = process.env.EDMUSERS;

config.URI = process.env.MONGOURIEDM;

module.exports = config;
