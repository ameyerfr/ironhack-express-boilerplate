function spinLoaders() {
  const btn = document.getElementById("btn-spin");
  const loaders = document.querySelectorAll(".loader");
  console.log(btn, loaders);

  // option 1
  btn.onclick = () =>
    loaders.forEach(loader => loader.classList.toggle("is-spinning"));

  // option 2 (similar but longer...)
  //   btn.onclick = function() {
  //     loaders.forEach(function(loader) {
  //       loader.classList.toggle("is-spinning");
  //     });
  //   };
}

window.addEventListener("DOMContentLoaded", spinLoaders);
