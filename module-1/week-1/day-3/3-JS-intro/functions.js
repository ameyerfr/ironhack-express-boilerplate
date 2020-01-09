// for mac users     =>  sudo npm install -g nodemon
// for windows users =>  npm install -g nodemon

// nodemon functions.js

console.log("hello world");

function test() {
  console.log("hey ! I'm a test function and i'm performing well !!!");
}

function helloWorld() {
  return "hello world";
}

console.log("---> ????");

function hello(who) {
  return "hello " + who;
}

var res1 = hello("Yannick");
var res2 = hello("Tayssir");

console.log(res1, res2);
console.log(hello("Franck"));
console.log(hello());

function sum(a, b) {
  const tmp = a + b;
  if (isNaN(tmp)) throw new Error("Hey, a and b should be of type Number");
  return tmp;
}

const x = sum(10, 10.45);
console.log(x);
// console.log(sum(30, "fooo"));

const user1 = {
  name: "toto",
  score: 10000
};

const user2 = {
  name: "titi",
  score: 100
};

function getWinner(p1, p2) {
  if (p1.score === p2.score) return "it's a draw";
  if (p1.score > p2.score) return p1.name;
  return p2.name;
}

function getWinnerTernary(p1, p2) {
  return p1.score === p2.score
    ? "it's a draw"
    : p1.score > p2.score
    ? p1.name
    : p2.name;
}

var yayOrNay = 100 > 1 ? "yay !" : "nay !";
console.log(yayOrNay);

console.log("and the winner is...", getWinnerTernary(user1, user2));

const foo = function() {
  return "foo";
};

const bar = () => "bar";
const baz = foo;

console.log(baz());


function giveMeTheBall() {
  return { name: "ball" };
}

function giveMeNothing() {
  return undefined;
}

var possibility1 = giveMeNothing();
// undefined
var possibility2 = giveMeTheBall();
// {name: "ball"}

function sayMyName(n) {
  return "hey ! Your name is " + n;
}

const resultOfNameDropping = sayMyName("Clara");
console.log(resultOfNameDropping);
console.log(sayMyName("Tayssir"));
console.log(sayMyName("Alex"));
console.log(sayMyName("Yannick"));


/*************************
        D.I.Y
*************************/

// write a function taking one parameter (string)
// return the length of the string
// print the result in the console
// try with several values

// bonus : if the parameter is not a string : throw an error

/**
 * @throws Error if str is not a string
 */
function getThisStringLength(str) {
  if (typeof str !== "string") {
    throw new Error("sorry mate, i need a string as an input here !!!");
  }
  return str.length;
}

var res1, res2, res3, res4, res5;

try {
  var res1 = getThisStringLength("guillaume");
  var res2 = getThisStringLength("franck");
  var res3 = getThisStringLength("clara");
  var res4 = getThisStringLength("anaïs");
  // var res5 = getThisStringLength({});
} catch (e) {
  console.error(e);
}

console.log(res1, res2, res3, res4, res5);
