const nb = 4;

const artists = ["Daft Punk"];

console.log(typeof artists);
console.log(typeof artists.length);
console.log(artists);
artists.push("ModeSeleKtor");
console.log(artists);
artists[2] = "Shakira";
artists.push("Wu Tang Clan");
console.log(artists);
console.log("-------");
console.log(artists[0], "/", artists[artists.length - 1]);

for (let i = 0; i < artists.length; i += 1) {
  console.log(artists[i]);
}

var j = 0;

console.log("-------");

while (j < artists.length) {
  console.log(artists[j]);
  j += 1;
}
console.log("-------");

artists.forEach(function(v, i) {
  console.log(i, "current artist => ", v);
});

function loopThroughArtists(v, i) {
  console.log(i, "current artist => ", v);
}

console.log("-------");

artists.forEach(loopThroughArtists);

console.log("-------");

artists.forEach((v, i) => console.log(i, "current artist => ", v));

// Some usefull array's functions

/*
    push	Adds an element at the end
    unshift	Adds an element at the beginning
    shift	Removes the first element
    pop	Removes the last element
    splice	Removes elements from anywhere in the array
*/
const myArr = [];
myArr.push("world");
myArr.unshift("hello");
myArr.unshift("...");
console.log("A =>", myArr);
myArr[3] = "!";
console.log("B =>", myArr);
myArr.shift();
myArr.pop();
console.log("C =>", myArr);
myArr.splice(0, 1);
console.log("D =>", myArr);

const fruits = ["orange", "banana", "apple", "pear"];

console.log("before", fruits);

for (let i = 0; i < fruits.length; i += 1) {
  if (fruits[i] === "apple") fruits.splice(i, 2);
}

console.log("after", fruits);

const ironhackers = [
  {
    firstname: "foo",
    age: 23,
    cohort: "par_0120"
  },
  {
    firstname: "bar",
    age: 34,
    cohort: "par_0120"
  },
  {
    firstname: "baz",
    age: 18,
    cohort: "par_0120"
  },
  {
    firstname: "bim",
    age: 45,
    cohort: "par_0120"
  },
  {
    firstname: "bam",
    age: 38,
    cohort: "par_0120"
  }
];

console.log("___________ARRAYS/OBJECTS");
console.log(ironhackers[0].firstname);

const product = { name: "sneaker", price: 200 };
// DIY freestyle
// create an array of objects (anything you like)
// loop through the array with a for loop and a forEach loop
// log some properties using template string (``)
// bonus : add some logic to modify the array's content

console.log(
  `this product is ${product.name} and it costs ${product.price} euros`
);

console.log("---- PLAYERS ----");

// example
// find and store the player with a scores greater than 10
const players = [
    { name: "will", score: 10 },
    { name: "jill", score: 9 },
    { name: "tim", score: 1 },
    { name: "bill", score: 20 },
    { name: "kim", score: 13 }
  ],
  bests = [];

players.forEach(player => {
  console.log(`the player named ${player.name} scored ${player.score}`);
  if (player.score > 10) bests.push(player);
});

for (let i = 0; i < players.length; i += 1) {
  console.log(`the player named ${players[i].name} scored ${players[i].score}`);
  if (players[i].score > 10) bests.push(players[i]);
}

console.log("the best players are :", bests);

// nested arrays

const nestedArray = [
  ["a", "b", "c", "d", "e", "f", "g"],
  [true, false, true || false, true && false, !true && !false],
  [123, -20, 300, 50.0111]
];

for (let i = 0; i < nestedArray.length; i += 1) {
  console.log("------>");
  console.log(nestedArray[i]);
  console.log("------>");
  for (let j = 0; j < nestedArray[i].length; j += 1) {
    console.log(nestedArray[i][j]);
  }
}

nestedArray.forEach(arr => arr.forEach(v => console.log(v)));

nestedArray.forEach(function(arr) {
  arr.forEach(function(currentValue) {
    console.log(currentValue);
  });
});

const coordsPlayers = [
  [
    { x: 0, y: 10 },
    { x: 43, y: 20 },
    { x: 0, y: 100 },
    { x: 1, y: 0 }
  ],
  [
    { x: 55, y: 10 },
    { x: 22, y: 5 },
    { x: 33, y: 12 }
  ]
];

// DIY =>
// use a nested loop to access each indiviual player's coordinates
// use an extra variable to store the sum of all x's
//

var totalX = 0;

for (let i = 0; i < coordsPlayers.length; i++) {
  console.log(`team ${i + 1} => `);
  for (let j = 0; j < coordsPlayers[i].length; j++) {
    console.log(
      `the player ${j} are x: ${coordsPlayers[i][j].x} y: ${coordsPlayers[i][j].y}`
    );
    totalX += coordsPlayers[i][j].x;
  }
}

console.log("-------");
console.log("the total of x's is : " + totalX);

const teams = {
  a: [
    { x: 55, y: 10 },
    { x: 22, y: 5 },
    { x: 33, y: 12 }
  ],
  b: [
    { x: 55, y: 10 },
    { x: 22, y: 5 },
    { x: 33, y: 12 },
    { x: 33, y: 12 },
    { x: 33, y: 12 },
    { x: 33, y: 12 },
  ]
};


teams.a.forEach(player => console.log(player.x, player.y));

