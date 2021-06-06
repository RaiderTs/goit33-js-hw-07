const inputEl = document.querySelector("input");
const buttonDataRender = document.querySelector('button[data-action="render"]');
const buttonDataDestroy = document.querySelector(
  'button[data-action="destroy"]'
);
const divEl = document.querySelector("#boxes");

const randomRgbColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

function createBoxes(amount) {
  const array = new Array(amount);
  //   console.log(array);
  const boxes = [...array];
  //   console.log(boxes);
  const boxesMarkup = boxes
    .map(
      (_el, i) =>
        `<div style="height: ${i * 10 + 30}px; width: ${
          i * 10 + 30
        }px; background-color:${randomRgbColor()};"></div>`
    )
    .join("");
  divEl.innerHTML = boxesMarkup;
}

buttonDataRender.addEventListener("click", () => {
  createBoxes(Number(inputEl.value));
});

function destroyBoxes() {
  divEl.innerHTML = "";
  inputEl.value = "";
}

buttonDataDestroy.addEventListener("click", destroyBoxes);
