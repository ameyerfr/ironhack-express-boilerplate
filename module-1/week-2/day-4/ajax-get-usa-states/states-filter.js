var states;
const input = document.getElementById("filter-states");
const list = document.getElementById("list-states");
const url =
  "https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json";

// String.match OR String.includes will help for this task :)
function handleInput(e) {
  displayStates(
    // using the filter return value to display the filtered list (only oninput)
    // notice that states is a variable accessible from the parent's (module) scope
    states.filter(s => s.toLowerCase().match(e.target.value.toLowerCase()))
  );
}

function handleInputWithAClosure(allStates) {
  // any closure needs to:
  // 1 - contain at least one nested function (here the returned handle function)
  // 2 - use part of the parent scope (here allStates)
  // 3 - escape it's own scope (here with the returned handle function)

  return function handle(evt) {
    return displayStates(
      allStates.filter(function(state) {
        return state.toLowerCase().match(evt.target.value.toLowerCase());
      })
    );
  };
  // same thing ass above, the shorter way with aft arrows functions...
  /*
  return evt =>
    displayStates(
      allStates.filter(s =>
        s.toLowerCase().includes(evt.target.value.toLowerCase())
      )
    );
  */
}

function displayStates(states) {
  // expecting an array of strings (full or filtered states)
  list.innerHTML = ""; // reset the list
  states.forEach(state => (list.innerHTML += `<li>${state}</li>`)); // appending an item per state
}

axios.get(url).then(HTTPResponse => {
  const states = Object.values(HTTPResponse.data); // convert the object to an array
  displayStates(states); // display the full list
  // input.oninput = handleInput; // attach the listener
  input.oninput = handleInputWithAClosure(states); // attach listener with closure's returned function
});
