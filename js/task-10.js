function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsEl = document.querySelector("#controls");
const inputEl = document.querySelector("[type=number]");
const btnCreateEl = document.querySelector(".button[data-create]");
const btnDestroyEl = document.querySelector(".button[data-destroy]");
const boxesEl = document.querySelector("#boxes");

btnCreateEl.addEventListener("click", createBoxes);
btnDestroyEl.addEventListener("click", destroyBoxes);

const createBoxes = (amount) => {
  let size = 30;
  const divArray = [];
  for (let i = 0; i <= amount; i += 1) {
    size += 10;
    return divArray.push(div);
  }
};

const destroyBoxes = () => {
  boxesEl.innerHTML = "";
};
