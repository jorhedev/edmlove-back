const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const auth = require("basic-auth");
const path = require("path");

const edmRoutes = require("./routes"); // Adjust if necessary

const {
  config: { USERS },
} = require("../src/config");

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(corsOptions));

const users = JSON.parse(USERS);

const checkCredentials = (username, password) => {
  return users.find(
    (user) => user.email === username && user.password === password
  );
};

const basicAuth = (req, res, next) => {
  const credentials = auth(req);
  if (!credentials || !checkCredentials(credentials.name, credentials.pass)) {
    res.set("WWW-Authenticate", "Basic realm=Restricted Area");
    res.status(401).send("Authentication required");
  } else {
    next(); // Call next() to proceed to the next middleware or route
  }
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "../public")));

// Use the routes
app.use(basicAuth, edmRoutes); // Adjust the path as necessary

module.exports = app;
