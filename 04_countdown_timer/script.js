// CHANGE: use const and better variable name
const daysEl = document.getElementById("days");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

let newYear = new Date().getFullYear() + 1;

// CHANGE: remove global variable
// const imgURLS = []

Api_key = "OllxFDAPBqmIc7j59fHbII0zTZfDak9G6qh4hQZeWsk";
API_URL = "https://api.unsplash.com/photos/?client_id=" + Api_key;

const fetchData = async () => {
  const response = await fetch(API_URL).catch((error) => console.log(error));
  const data = await response.json();

  // CHANGE: declare imgSources in function and call changeBgImg
  let imgSources = [];

  data.forEach((image) => {
    imgSources.push(image.urls.regular);
  });

  changeBgImg(imgSources && imgSources);
};

function changeBgImg(imgSources) {
  let i = Math.floor(Math.random() * 10);
  // CHANGE: get imgSources
  document.body.style.background = `url(${imgSources[i]})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center center";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundAttachment = "fixed";
  document.body.style.transition = "all 1.5s ";
}

function countdown() {
  let today = new Date();
  let newYearDate = new Date(newYear, 0, 1);

  let totalSecond = (newYearDate - today) / 1000;
  let days = Math.floor(totalSecond / 3600 / 24);
  let hours = Math.floor(totalSecond / 3600) % 24;
  let minutes = Math.floor(totalSecond / 60) % 60;
  let seconds = Math.floor(totalSecond) % 60;

  daysEl.textContent = formateTime(days);
  hourEl.textContent = formateTime(hours);
  minuteEl.textContent = formateTime(minutes);
  secondEl.textContent = formateTime(seconds);

  if (minutes % 2 === 0 && seconds === 59) fetchData();
}

// console.log(imgURLS);

function formateTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
