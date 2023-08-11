const gridContainer = document.querySelector('.grid-container');

//buttons
const normalModBtn = document.getElementById('normal-mod');
const rainbowModBtn = document.getElementById('rainbow-mod');
const eraser = document.getElementById('eraser');
const clearModBtn = document.getElementById('clear-mod');

let slider = document.getElementById('myRange');
let output = document.getElementById('sizeValue');

slider.oninput = function () {
  output.innerHTML = `${this.value} x ${this.value}`;
  generateDivs(this.value);
};
// output.innerHTML = slider.value;
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

    //   newDiv.addEventListener('mouseout', () => {
    //     newDiv.style.backgroundColor = 'transparent'; // Reset color on mouseout
    //   });
    // }
  }
}

clearModBtn.addEventListener('click', () => {
  const gridItems = document.querySelectorAll('.grid-item');

  gridItems.forEach((gridItem) => {
    gridItem.style.backgroundColor = 'white'; // Clear the background color
  });
});

eraser.addEventListener('click', () => {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach((gridItem) => {
    gridItem.addEventListener('mouseover', () => {
      gridItem.style.backgroundColor = 'white'; // Change color to red on hover
    });
  });
});
