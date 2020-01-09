var thing1 = "yo";
let thing2 = "yo too";
const thing3 = "yo toi même";

var book = {
  title: "Harry Potter",
  isFamous: true,
  author: {
    name: "J.K Rowling",
    age: 40,
    hobbies: ["writing", "reading", "magic"]
  },
  releaseDate: "12-01-2011"
};

const x = 10;

// for, while, do... while, for...in, for...of, forEach

var cond = true,
  count = 0;

while (cond) {
  console.log("you won't go far buddy...");
  count += 1;
  if (count === 10) {
    cond = false;
  }
}

cond = false;

do {
  console.log("in the do..while");
} while (cond);

const sentence = "abcdefghijklm...";

for (let i = 0; i < sentence.length; i += 1) {
  console.log(sentence[i]);
}

const user = {
  name: "gui",
  age: 39,
  favColor: "black"
};

for (let prop in user) {
  console.log(prop);
  console.log(user[prop]);
}




