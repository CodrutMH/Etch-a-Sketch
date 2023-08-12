const gridContainer = document.querySelector('.grid-container');

//buttons
const normalModBtn = document.getElementById('normal-mod');
const rainbowModBtn = document.getElementById('rainbow-mod');
const eraser = document.getElementById('eraser');
const clearModBtn = document.getElementById('clear-mod');

let slider = document.getElementById('myRange');
let output = document.getElementById('sizeValue');

let paintMode = 'normal';

slider.oninput = function () {
  output.innerHTML = `${this.value} x ${this.value}`;
  generateDivs(this.value);
};
generateDivs(16);

function generateDivs(divs) {
  gridContainer.innerHTML = '';
  gridContainer.style.gridTemplateColumns = `repeat(${divs}, 1fr)`;

  for (let i = 0; i < divs * divs; i++) {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'grid-item');
    gridContainer.appendChild(newDiv);

    newDiv.addEventListener('mouseover', () => {
      newDiv.style.backgroundColor = 'red'; // Change color to red on hover
    });
  }
}

clearModBtn.addEventListener('click', () => {
  const gridItems = document.querySelectorAll('.grid-item');

  gridItems.forEach((gridItem) => {
    gridItem.style.backgroundColor = 'white'; // Clear the background color
  });
});

eraser.addEventListener('click', () => {
  paintMode = 'eraser';
});

rainbowModBtn.addEventListener('click', () => {
  paintMode = 'rainbow';
});
normalModBtn.addEventListener('click', () => {
  paintMode = 'normal';
});

function paintRainbow() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const randomColor = `rgb(${red}, ${green}, ${blue})`;

  return randomColor;
}
const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach((gridItem) => {
  gridItem.addEventListener('mousemove', () => {
    if (paintMode === 'rainbow') {
      gridItem.style.backgroundColor = paintRainbow();
    } else if (paintMode === 'eraser') {
      gridItem.style.backgroundColor = 'white';
    } else {
      gridItem.style.backgroundColor = 'black';
    }
  });
});
