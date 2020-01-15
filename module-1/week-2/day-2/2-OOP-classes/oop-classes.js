class Player {
  constructor(n) {
    this.name = n; // hydrating an object :D
    this.score = 0;
  }

  incrementScore() {
    this.score += 1;
  }

  decrementScore() {
    this.score -= 1;
  }
}

class Villain extends Player {
  constructor(name, plot) {
    super(name);
    this.score = 10;
    this.plot = plot;
  }

  laughEvilly() {
    return "Mouhahahahaha";
  }

  incrementScore() {
    this.score += 10;
  }
}

const p1 = new Player("toto");
const p2 = new Player("titi");

const v1 = new Villain("Magneto", "Destroy");
console.log("------------");

console.log(p1.laughEvilly);
v1.incrementScore();
console.log(v1);



// p1.incrementScore();
// p2.decrementScore();

// console.log(p1, p2);
// console.log(p1.name)
