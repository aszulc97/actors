const url = "https://actors-69fe.restdb.io/rest/actors";

const options = {
  headers: {
    "x-apikey": "61f92aa1fd4d376be83fdf73",
  },
};

let allData = [];
fetch(url, options)
  .then((response) => response.json())
  .then((data) => {
    allData = data;
    allData.forEach(showActors);
  });

function showActors(actor) {
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);
  clone.querySelector(".name").textContent = actor.fullname;
  clone.querySelector(".movie").textContent = actor.movie;

  const nameEl = clone.querySelector(".name");
  nameEl.addEventListener("click", showPopUp);

  const movieEl = clone.querySelector(".movie");
  movieEl.addEventListener("click", showPopUp);

  function showPopUp(e) {
    e.preventDefault();
    document.querySelector(".popUp").classList.remove("hidden");
    document.querySelector("div > h1").textContent = actor.fullname;
    document.querySelector("div > h2").textContent = actor.movie;
    document.querySelector(".closeButton").addEventListener("click", closePopUp);
  }

  const parent = document.querySelector("table");
  parent.appendChild(clone);
}

function closePopUp() {
  document.querySelector(".popUp").classList.add("hidden");
}

function dropdown() {
  var value = document.getElementById("select").options[select.selectedIndex].value;
  console.log(value);

  if (value === "Reset") {
    deleteList();
    allData.forEach(showActors);
    console.log("hi");
  } else {
    filterMovie(value);
  }
}
// document.querySelector("#pulpFiction").addEventListener("click", function () {
//   filterMovie("Pulp Fiction");
// });
// document.querySelector("#fightClub").addEventListener("click", function () {
//   filterMovie("Fight Club");
// });
// document.querySelector("#goodfellas").addEventListener("click", function () {
//   filterMovie("Goodfellas");
// });
// document.querySelector("#inception").addEventListener("click", function () {
//   filterMovie("Inception");
// });

function filterMovie(title) {
  console.log(allData);
  deleteList();
  const filtered = allData.filter((oneActor) => {
    if (oneActor.movie === title) {
      return true;
    } else {
      return false;
    }
  });
  console.log(filtered);
  filtered.forEach(showActors);
}

function deleteList() {
  console.log("deleted");
  const myNode = document.getElementById("table");
  while (myNode.childNodes.length > 3) {
    myNode.removeChild(myNode.lastChild);
  }
}
