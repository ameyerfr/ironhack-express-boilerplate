var otherThings = [1, 2, 77, -1];

function thing(p) {
  // fn scope starts here
  console.log(otherThings);
  // fn scope ends here
}

// IIFE
// Immediatly Invoked Function Expression
(function() {
  var x = "local to the IIFE";
  console.log("wooot ???", otherThings);
  // })(); // <== Doug says : Dog Balls
})(); // <== Doug says : Dog Balls

console.log("x", otherThings);
