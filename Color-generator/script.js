const Color = document.querySelector(".color");

for (let index = 0; index < 30; index++) {
  const colorColor = document.createElement("div");
  colorColor.classList.add("color-container");
  Color.appendChild(colorColor);
}

const colorColors = document.querySelectorAll(".color-container");

generateColors();

function generateColors() {
  colorColors.forEach((colorColor) => {
    const newColorCode = randomColor();
    colorColor.style.backgroundColor = "#" + newColorCode;
    colorColor.innerText = "#" + newColorCode;
  });
}

function randomColor() {
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let colorCode = "";
  for (let index = 0; index < colorCodeLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum, randomNum + 1);
  }
  return colorCode;
}
 