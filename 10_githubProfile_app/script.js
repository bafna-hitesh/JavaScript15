const API_URL = "https://api.github.com/users/";
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getUser(user) {
  console.log(user);
  const resp = await fetch(API_URL + user);
  const respData = await resp.json();

  createUserCard(respData);
}

function createUserCard(user) {
  const { avatar_url, name, bio, following, followers, public_repos } = user;
  // const card = document.createElement("div");
  const cardHTML = `
      <div class="card">
        <div class="img-container">
            <img class= "avatar" src="${avatar_url}" alt="${name}"/>
        </div>
        <div class="user-info">
            <h2>${name}</h2>
            <p>${bio ?? ""}</p>
            <ul class="info">
                <li>${following}<strong>following</strong></li>
                <li>${followers}<strong>followers</strong></li>
                <li>${public_repos}<strong>public repo</strong></li>
            </ul>
        </div>
      </div>
    `;

  main.innerHTML = cardHTML;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;

  if (user) {
    getUser(user);
    search.value = "";
  }
});
