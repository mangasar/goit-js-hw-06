function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorEl = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");
const bodyDoc = document.querySelector("body");

changeColorEl.addEventListener("click" , () => {
  bodyDoc.style.backgroundColor = getRandomHexColor(), colorEl.textContent = getRandomHexColor();
})