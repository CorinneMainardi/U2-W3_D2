const localStorageKey = "registration-memory";

const form = document.querySelector("form");
const input = document.getElementById("name");
const saveBtn = document.getElementById("save");
const deleteBtn = document.getElementById("delete");
let nameInLocalStorage;
if (localStorage.getItem(localStorageKey)) {
  nameInLocalStorage = JSON.parse(localStorage.getItem(localStorageKey));
} else {
  nameInLocalStorage = [];
}
if (nameInLocalStorage.length > 0) {
  let i = nameInLocalStorage.length - 1;
  let placeholder = input.setAttribute("placeholder", nameInLocalStorage[i]);
}

const saveData = () => {
  const name = input.value;
  if (name.length > 2) {
    nameInLocalStorage.push(name);
    localStorage.setItem(localStorageKey, JSON.stringify(nameInLocalStorage));
    let i = nameInLocalStorage.length - 1;
    let placeholder = input.setAttribute("placeholder", nameInLocalStorage[i]);
    form.reset();
  } else {
    alert("inserisci un nome valido");
  }
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  saveData();
});
