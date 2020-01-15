import { exportTest } from "./export-test.js";

function xxx(value) {
  console.log(value);
}

console.log("toto");
console.log(exportTest);

exportTest(xxx);

function foo(a, clbk) {
  console.log(clbk);
  clbk();
}

foo("3", function() {
  console.log("we are in the callback scope");
});

function a(clbk) {
  return "i'm a " + clbk();
}

function b() {
  return "... :) i'm b";
}

var x = a(b);
console.log(x);
