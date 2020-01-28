require("dotenv").config();
// read the .env file and associate it's content as key/value pairs in the process.env object
const express = require("express");
const server = express();
const hbs = require("hbs");
// console.log(process.env.PORT);

// 1 INITIAL SETUP
server.use(express.static("./public"));
server.set("views", "./views");
server.set("view engine", "hbs");
hbs.registerPartials("./views/partials");

// 2 ROUTING

server.get(["/", "/home"], (req, res) => {
  res.render("home");
});

server.get("/about", (req, res) => {
  res.render("about");
});

server.get("/contact", (req, res) => {
  res.render("contact");
});

// KICKSTART
server.listen(process.env.PORT, () => {
  console.log(
    `server is ready to rock at http://localhost:${process.env.PORT}`
  );
});
