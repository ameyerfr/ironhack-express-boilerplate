function start() {
  const items = document.querySelectorAll("li");

//   items.forEach(
//     item =>
//       (item.onclick = evt => {
//         evt.target.remove();
//       })
//   );

  items.forEach(function(item) {
    item.onclick = function(evt) {
      evt.target.remove();
      // parent.removeChild(node)
    };
  });
}

window.addEventListener("DOMContentLoaded", start);
