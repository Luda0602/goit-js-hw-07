function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  const amount = parseInt(input.value.trim(), 10);

  if (isNaN(amount) || amount < 1 || amount > 100) {
    alert("Please enter a number between 1 and 100.");
    return;
  }

  createBoxes(amount);
  input.value = "";
});

destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  boxesContainer.innerHTML = "";

  const elements = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";
    box.style.display = "inline-block";
    elements.push(box);
    size += 10;
  }

  boxesContainer.append(...elements);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}