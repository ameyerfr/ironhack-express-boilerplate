// OOP
// Object Oriented Programming
// ==> what, why, how ?

var y; // undefined

function Foo() {
  this.something = "whatever";
}

function Cake(flavor, ingredients) {
  this.flavor = flavor;
  this.category = "fooding";
  this.ingredients = [...ingredients];
  // return this;
}

// methods
Cake.prototype.displayIngredients = function() {
  return `the ingredients of ${this.flavor} cake are ${this.ingredients.join(" ")}`;
};

Cake.prototype.getNutritiveInformation = function() {

};

const cakeChoco = new Cake("chocolate", ["flour", "sugar", "choco", "butter"]);
const cakeBanana = new Cake("banana / chocolate", [
  "flour",
  "sugar",
  "choco",
  "butter",
  "banana"
]);

console.log("cakeChoco.displayIngredients()");
console.log(cakeChoco.displayIngredients());
console.log(cakeBanana.displayIngredients());

console.log(cakeChoco, cakeBanana);

const x1 = Foo();
console.log(x1); // undefined

const x2 = new Foo();
console.log(x2); // {}
