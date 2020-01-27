// console.log(window);
// console.log(global);

const oimport1 = require("./module-1.js");
const oimport2 = require("./module-2");

console.log(oimport1, oimport2);

console.log(oimport2({}));