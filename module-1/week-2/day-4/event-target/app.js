const btnsWrap = document.getElementById("btns-wrap");
const btns = document.querySelectorAll(".btn");
const btns2 = document.getElementsByTagName("button");

console.log(Array.from(btns2));
console.log([...btns2]);

[...btns2].forEach(b => console.log(b))


btnsWrap.onclick = function(e) {
  console.log(e.currentTarget);
  console.log(e.target);
  console.log(e.target.parentElement.remove());
};

// btns.forEach(btn => {
//   btn.onclick = function(e) {
//     console.log(e.target);
//   };
// });
