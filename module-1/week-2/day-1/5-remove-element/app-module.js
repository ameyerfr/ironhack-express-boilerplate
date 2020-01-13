function start() {
  const items = document.querySelectorAll("li");

  items.forEach(function(item) {
    item.onclick = function(evt) {
      console.log(evt);
      console.log(item === evt.target); // true
      evt.target.remove();
      // parent.removeChild(node);
    };
  });
}

start();

const title = document.getElementById("title-main")

window.onscroll = function(e) {
  console.log("---->");
  console.log(e);
  title.style.color = "blue";
//   title.remove();
};
