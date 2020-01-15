function checkParams(p) {
  if (p) {
    return p;
  } else return "no infos yet";
}

class Hat {
  constructor(infos) {
    this.fabric = infos.fabric || "no infos yet";
    this.size = checkParams(infos.size);
    this.shape = checkParams(infos.shape);
    this.color = infos.color;
    this.price = infos.price;
    this.reference = infos.reference;
  }

  addFeather() {
    this.hasFeather = true;
  }
}

const topHat = new Hat({
  sizeeee: ["xs", "l", "xl"],
  price: 120,
  color: "black"
});

console.log(topHat);

topHat.addFeather();

console.log(topHat);

