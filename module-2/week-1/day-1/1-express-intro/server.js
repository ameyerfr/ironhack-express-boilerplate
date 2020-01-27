const express = require("express"); // get the framework !
// you get a function that you should use ton generate the backend app !!!
const server = express();

const hbs = require("hbs"); // require the templating engine
const path = require("path"); // part of the node's core lib, usefull to work with relative path
// console.log(server);
const PORT = 8080;

// console.log(global);
// console.log(__dirname); // indicates the current file/folder paths
// node variable always available : __dirname represents the directory in which the currently executed script is

/****************************************************** */
/****************************************************** */
/** APP INITAL SETUP !!! MANDATORY (PLEASE DON'T FREAK OUT) **/
/****************************************************** */

// Make everything inside of public/ available to the browser (styles, images, frontend scripts)
server.use(express.static(path.join(__dirname, "public"))); // rock solid syntax

// indicates express where our "views" templates are located
// view is a term part of MVC design pattern... more coming. in a nutshell, a view is a page ; )
server.set("views", path.join(__dirname, "views"));

hbs.registerPartials(path.join(__dirname, "views/partials"));

// indicates express wich view engine this app will use ; )
server.set("view engine", "hbs"); // in this case hbs, there are many others ... pug/jade etc.engine !
// what is a view engine ???
// basicaly a way to code HTML++ (loops, conditionals)

/****************************************************** */
// ROUTE SETUP
/****************************************************** *//****************************************************** */

server.get("/", (HTTPRequest, HTTPResponse) => {
  // there are several function attached to res, able to send some values back to the client
  // res.send, res.sendFile, res.json
  // we will focus mainly on 2 (render now and later json)
  // note : render MUST be used with a predefined template engine
  const data = {
    text: "introduction text....",
    count: 42,
    loveCoding: false,
    user: {
      name: "gui",
      age: 34
    },
    fruits: ["apple", "pear", "banana"],
    css: ["home"],
    html: "<div class=\"widget\">TOTO is in da DIV</div>"
  };
  
  HTTPResponse.render("home", data); // data has to be an object
});

server.get("/about", (req, res) => {
  const data = {
    css: ["about"],
    title: "My About Page",
    content: "A super text exaplaining why my company rocks !!!"
    // try to send a dynamic title + content to the view and display it
  };
  res.render("about", data);
});

/****************************************************** */
/****************************************************** */
// SERVER KICKSTART
/****************************************************** */


server.listen(PORT, () => {
  console.log(`server ready to rock @ http://localhost:${PORT}`);
});
