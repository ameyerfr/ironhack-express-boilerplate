function createDiv() {
  const ipt = document.getElementById("ipt");
  const btn = document.querySelector(".btn-input");
  const target = document.getElementById("target");
console.log("icic");

  btn.onclick = function() {
    console.log(ipt.innerText)
    // target.innerHTML += `<div>${ipt.value}</div>`;
  };
}

createDiv();
