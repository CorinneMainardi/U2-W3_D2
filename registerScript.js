const localStorageKey = "registration-memory";

const form = document.querySelector("form");
const input = document.getElementById("name");

const handleSubmit = function (e) {
  e.preventDefault();

  const name = input.value;
  console.log("nome indicato", name);
  let nameInLocaleStorage = localStorage.getItem(localStorageKey);
  if (!nameInLocaleStorage) {
    nameInLocaleStorage = [];
  } else {
    nameInLocaleStorage = JSON.parse(nameInLocaleStorage);
  }
  if (name) {
    nameInLocaleStorage.push(name);
  } else {
    alert("non hai inserito un nome, inseriscilo!");
  }
  if (nameInLocaleStorage.length > 1) {
    input.setAttribute("placeholder", `${nameInLocaleStorage[nameInLocaleStorage.length - 1]}`);
  }
};
form.addEventListener("submit", handleSubmit);
