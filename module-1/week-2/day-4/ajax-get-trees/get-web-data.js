const url =
  "https://opendata.paris.fr/api/records/1.0/search/?dataset=arbresremarquablesparis&rows=1000&facet=genre&facet=espece&facet=stadedeveloppement&facet=varieteoucultivar&facet=dateplantation&facet=libellefrancais";

const body = document.querySelector("body"); // reference to the body object (HTML Element)

function displayTrees(trees) {
  // console.log(trees); // list of all the rare trees in Paris
  body.innerHTML = "<ul>";
  // .... loop through the trees
  trees.forEach(tree => {
    // console.log(tree);
    body.innerHTML += `<li>
            ${tree.fields.espece} - 
            ${tree.fields.adresse}
        </li>`;
  });
  body.innerHTML += "</ul>";
}

axios
  .get(url) // performs a HTTP GET request to paris opendata's server
  .then(HTTPResponse => {
    console.log(HTTPResponse.data.records);
    displayTrees(HTTPResponse.data.records); // an array ojf objects
  })
  .catch(err => {
    console.error(err); // if an error occurs while gettign data, it will be cctached in this block
  });
