const API_KEY = "2b0293e92ad7ae48273f5c8230c571e7";
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=" +
  API_KEY +
  "&primary_release_year=2017&sort_by=revenue.desc";
const SEARCHAPI =
  "https://api.themoviedb.org/3/discover/movie?&api_key=" + API_KEY + "&query=";

const IMGPATH = "https://image.tmdb.org/t/p/w1280/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getMovies(url) {
  const resp = await fetch(url);
  const respData = await resp.json();
  console.log(resp);

  respData.results.forEach((movie) => {
    const { title, vote_average, poster_path } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
        <img
            src="${IMGPATH + poster_path}"
            alt = "${title}"
            />
        <div class="movie-info">
            <h3>${title}</h3>
            <span>${vote_average}</span>
        </div>
        `;
    main.appendChild(movieEl);
  });

  return respData;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchInput = search.value;
  const searchResult = SEARCHAPI + searchInput;
  console.log(searchResult);
  // getMovies(searchResult);
  search.value = "";
});

getMovies(API_URL);
