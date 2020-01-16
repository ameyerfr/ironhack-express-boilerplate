const contentMain = document.getElementById("content-main");

function loadPage(e) {
  const page = e.target.getAttribute("data-page");

  axios
    .get(`/pages/${page}.html`)
    .then(res => {
      contentMain.innerHTML = res.data;
    })
    .catch(err => {
      console.error(err);
    });
}

document
  .querySelectorAll("#nav-main .link")
  .forEach(link => (link.onclick = loadPage));
