console.log("hey, im intro dom file");

// most usefull DOM selection methods
// document.
// getElementById => object
// getElementsByClassName => htmlCollection
// getElementsByTagName = htmlCollection
// querySelector => object
// querySelectorAll => nodeList

function testGetById() {
  var parag = document.getElementById("my-intro");
  console.log("parag ===>");
  console.log(parag, parag.id, parag.textContent, parag.style);
  console.log(typeof parag);
  parag.style.color = "red";
  parag.textContent = "foo bar baz";
  parag.textContent += "... fun ain't it ?";
}

function textQuerySelector() {
  const titleMain = document.querySelector(".title.main");
  console.log(titleMain);
  titleMain.parentElement.style.fontWeight = "bold";
}

function listenClicks() {
  const btn = document.getElementById("my-btn");
  btn.onclick = textQuerySelector; // option 1
  //btn.addEventListener("click", textQuerySelector); // option 2 (same)

  // maybe you want to launch several action per/event =>
  // btn.onclick = function() {
  // you could use a wrapping function for these type of scenarios...
  //     action1();
  //     action2();
  //     action3();
  //     action4();
  // };
}

function parseBodyChildren() {
  const nodes = document.body.children; // html collection returned
  const nodesBis = document.querySelectorAll("body > *"); // nodeList returned

  // hint: with HTML collections, you'll need to use either a for loop OR a for...of loop
  //   for (let i = 0; i < nodes.length; i += 1) {
  //     console.log(nodes[i]);
  //   }

  // hint: forEach is attached to nodeLists, NOT HTMLCollections !!!
  nodesBis.forEach(node => console.log(">", node));
}

function loopIronhackers() {
  const ihs = document.getElementsByClassName("ironhacker");

  function toggleClick(evt) {
    const clickedElement = evt.srcElement || evt.target;
    console.log("clicked", evt);
    // console.log(clickedElement);
    // console.log(this);
    // console.log(this === clickedElement);
    clickedElement.classList.toggle("is-active");
  }

  //   console.log(ihs, ihs.forEach);
  for (let i = 0; i < ihs.length; i += 1) {
    // console.log(ihs[i]);
    ihs[i].onclick = toggleClick;
    // onclick is the event-listener
    // toggleClick is the event-handler
  }
}

function modifyDocument() {
  const input = document.getElementById("user-input");
  const btn = document.getElementById("btn-add-text");
  const target = document.getElementById("my-content");
  console.log("hey");

  btn.onclick = function() {
    console.log("current input value => ", input.value);
    target.textContent += input.value;
  };
}

function insertIronhacker() {
  const input = document.getElementById("ironhacker-name");
  const btn = document.getElementById("btn-add-ironhacker");
  const list = document.getElementById("ironhackers");

  // inserting markup with innerHTML
  // btn.onclick = function(evt) {
  //   evt.preventDefault();
  //   list.innerHTML += `<li class="ironhacker"><span>${input.value}</span></li>`;
  //   input.value = "";
  //   input.focus();
  // };

  // inserting markup with createElement + appendChild
  btn.onclick = function(evt) {
    evt.preventDefault();
    const li = document.createElement("li");
    // console.log(li, typeof li);
    li.className = "ironhacker";
    li.textContent = input.value;
    list.appendChild(li);
    input.value = "";
    input.focus();
    loopIronhackers();
  };
}

function start() {
  //   parseBodyChildren();
  //   testGetById();
  //   listenClicks();
  modifyDocument();
  insertIronhacker();
  loopIronhackers();
}

window.addEventListener("DOMContentLoaded", start);
// window.addEventListener("load", start);
// window.onload = start;
