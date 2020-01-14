(function rateWidget() {
  // below : alternative way of using querySelector (works also with selectorAll)
  //   const widget = document.getElementById("rate-widget");
  //   const inputAlt = widget.querySelector(".input");
  const input = document.querySelector("#rate-widget .input");
  const target = document.querySelector("#rate-widget .target");

  input.oninput = function handler() {
    target.textContent = input.value;
    target.className =
      "target " +
      (input.value < 4 ? "danger" : input.value < 7 ? "warning" : "success");

    // the ternary condition above is similar to :
    // if (input.value < 4 ) target.className = "target danger";
    // else if (input.value < 7 ) target.className = "target warning";
    // else  target.className = "target success";
  };
})();

/*
var x;

x = Boolean({}) ? "yay" : "nay";
x = 100 < 1 ? "yay" : "nay"
x = false ? "yay" : "nay"

var user = {name: "fooo"}
x = user.name === "gui" ? "yay" : user.name === "andy" ? "yay yay" : "sorry i dont know ya"
*/