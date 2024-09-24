const localStorageKey = "time-memory";

const time = document.getElementById("time");

let sec = 0;

if (sessionStorage.getItem(localStorageKey)) {
  sec = sessionStorage.getItem(localStorageKey);
} else {
  sec = 0;
}

const addSec = () => {
  sec++;
  sessionStorage.setItem(localStorageKey, sec);
  time.innerText = sec;
};
setInterval(addSec, 1000);
