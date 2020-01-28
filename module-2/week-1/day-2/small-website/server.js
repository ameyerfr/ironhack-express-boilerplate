require("dotenv").config(); 
// above get the .env file and parse its content (accessible as key/value pairs in process.env object)
const express = require("express");
const server = express();
const hbs = require("hbs");


// 1 - SERVER INITAL CONFIG

server.use(express.urlencoded({ extended: true }));
server.use(express.static("./public"));
server.set("views", "./views");
server.set("view engine", "hbs");
hbs.registerPartials("./views/partials");

// 2 - SERVER ROUTING

server.get("/", (req, res) => {
  res.render("home");
});

server.get("/about", (req, res) => {
  res.render("about");
});

server.get("/contact", (req, res) => {
  const data = {
    css: ["form"]
  };
  res.render("contact", data);
});

server.post("/contact", (req, res) => {
  console.log(req.body);
  res.redirect("contact");
});

// 2 - SERVER KICKSTART

server.listen(process.env.PORT, () => {
  console.log(`server ready @ http://localhost:${process.env.PORT}`);
});
