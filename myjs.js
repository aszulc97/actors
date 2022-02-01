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
  console.log(actor);
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);
  clone.querySelector("h1").textContent = actor.fullname;
  clone.querySelector("h2").textContent = actor.movie;
  //   const aEl = clone.querySelector(".sk-link");
  //   aEl.addEventListener("click", showPopUp);
  //   function showPopUp(e) {
  //     e.preventDefault();
  //     document.querySelector("#sk-pop-up").classList.remove("hidden");
  //     document.querySelector(
  //       ".skc-pic"
  //     ).src = `https://ailu-torreval.github.io/sk-pics/${sk.id}m.png`;
  //     if (sk.alias) {
  //       document.querySelector(".skc-name").textContent = sk.alias;
  //     } else {
  //       document.querySelector(".skc-name").textContent = sk.realname;
  //     }
  //     document.querySelector(".sk-real-name").textContent = sk.realname;
  //     document.querySelector(".location").textContent = sk.location;
  //     document.querySelector(".years").textContent = sk.activity;
  //     document.querySelector(".killstreak").textContent = sk.killstreak;
  //     document.querySelector(".motive").textContent = sk.motive;
  //     document.querySelector(".weapon").textContent = sk.weapon;
  //     document.querySelector(".read-link").setAttribute("href", "profile.html?id=" + sk._id);
  //     document.querySelector(".close-button").addEventListener("click", closePopUp);
  //   }
  const parent = document.querySelector("#actorContainer");
  parent.appendChild(clone);
}

// function closePopUp() {
//   document.querySelector("#sk-pop-up").classList.add("hidden");
// }
