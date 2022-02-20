const meals = document.getElementById("meals");
const userInputMeal = document.getElementById("userInput");
const favContainer = document.getElementById("fav-meals");

async function getRandomMeal() {
  const resp = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );

  const resData = await resp.json();
  const randomMeal = resData.meals[0];
  console.log(randomMeal);
  addMeal(randomMeal, true);
}

async function getMealById(id) {
  console.log(id);
  const resp = await fetch(
    "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
  );
  const resData = await resp.json();
  const meal = resData.meals[0];
  return meal;
}

async function getMealBySearch(term) {
  const meals = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=" + term
  );
}

function addMeal(mealData, random) {
  const meal = document.createElement("div");
  meal.classList.add("meal");
  favContainer.innerHTML = "";

  meal.innerHTML = `
    <div class="meal-header">
        ${
          random
            ? `
      <span class="random"> ${mealData.strMeal} </span>`
            : ""
        }
      <img
        src = "${mealData.strMealThumb}"       
        alt="${mealData.strMeal}"
      />
    </div>
    <div class="meal-body">
      <h4>${mealData.strCategory}</h4>
      <button class="fav-btn">
        <i class="far fa-heart"></i>
      </button>
    </div>`;

  favouriteHandler(meal, mealData);
  meals.appendChild(meal);
}

function favouriteHandler(meal, mealData) {
  const btn = meal.querySelector(".meal-body .fav-btn");

  btn.addEventListener("click", (e) => {
    if (btn.classList.contains("active")) {
      removeFavourite(mealData.idMeal);
      btn.classList.remove("active");
    } else {
      addFavouriteToLs(mealData.idMeal);
      btn.classList.add("active");
      featchFavMeal();
    }
  });
}

function addFavouriteToLs(mealId) {
  const mealIds = getFavouriteToLs();

  localStorage.setItem("mealIds", JSON.stringify([...mealIds, mealId]));
}

function removeFavourite(mealId) {
  console.log("infunc");
  const mealIds = getFavouriteToLs();

  localStorage.setItem(
    "mealIds",
    JSON.stringify(mealIds.filter((id) => id !== mealId))
  );
}

function getFavouriteToLs() {
  const mealIds = JSON.parse(localStorage.getItem("mealIds"));
  return mealIds === null ? [] : mealIds;
}

async function featchFavMeal() {
  const mealIds = getFavouriteToLs();

  for (let i = 0; i < mealIds.length; i++) {
    const mealId = mealIds[i];

    let meal = await getMealById(mealId);

    addFavouriteMeal(meal);
  }
}

function addFavouriteMeal(mealData) {
  // console.log(mealData);
  const favMeal = document.createElement("li");

  favMeal.innerHTML = `
  <img
        src = "${mealData.strMealThumb}"       
        alt="${mealData.strMeal}"
      />
  <span>${mealData.strMeal}</span>
  `;
  favContainer.appendChild(favMeal);
}

getRandomMeal();
