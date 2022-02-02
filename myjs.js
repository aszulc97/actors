const url = "https://actors-69fe.restdb.io/rest/actors";

const options = {
  headers: {
    "x-apikey": "61f92aa1fd4d376be83fdf73",
  },
};

fetch(url, options)
  .then((response) => response.json())
  .then((data) => data.forEach(showPic));

function showPic(actor) {
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
