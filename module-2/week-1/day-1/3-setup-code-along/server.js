const express = require("express");
const server = express();
const hbs = require("hbs"); // npm i hbs (npm install hbs)
const path = require("path"); // core node lib ... no need to install !
const PORT = 9999;

/****************************************************** */
/****************************************************** */
/** APP INITAL SETUP !!! MANDATORY (PLEASE DON'T FREAK OUT) **/
/****************************************************** */

// Make everything inside of public/ available to the browser (styles, images, frontend scripts)
server.use(express.static(path.join(__dirname, "public"))); // rock solid syntax

// indicates express where our "views" templates are located
// view is a term part of MVC design pattern... more coming. in a nutshell, a view is a page ; )
server.set("views", path.join(__dirname, "views"));

// indicates express wich view engine this app will use ; )
server.set("view engine", "hbs"); // in this case hbs, there are others ... pug/jade etc.engine !

hbs.registerPartials(path.join(__dirname, "views/partials"));
// what is a view engine ???
// basicaly a way to code HTML++ (loops, conditionals)

// setup routes
server.get("/", (HTTPRequest, HTTPResponse) => {
  HTTPResponse.render("home");
});

server.get("/about", (req, res) => {
  res.send("wondefull !!!");
});

server.get("*", (req, res) => {
  res.send("404");
});

// kickstart
server.listen(PORT, () => {
  console.log(`yata ! server is running @ http://localhost:${PORT}`);
});
