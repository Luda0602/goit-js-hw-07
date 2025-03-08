function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const changeColorbtn = document.querySelector(".change-color");
const changeColor = document.querySelector(".color");
const body = document.body;


changeColorbtn.addEventListener('click',() =>{
  const newColor = getRandomHexColor();

  body.style.backgroundColor = newColor;

  changeColor.textContent = newColor;
})