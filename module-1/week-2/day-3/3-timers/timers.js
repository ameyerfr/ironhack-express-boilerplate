class Chrono {
  constructor() {
    this.time = 0;
  }

  countTime() {
    console.log(this); // represents the current Object

    setInterval(() => {
      console.log(this.time);
      this.time++;
    }, 1000);

    // function increment() {
    //   console.log(this.time);
    //   this.time++;
    // }

    // const x = increment.bind(this);

    // setInterval(x, 1000);
  }
}

const c1 = new Chrono();
c1.countTime();
