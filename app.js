const parent = document.querySelector('.square-container');

function generateDivs(divs) {
  for (let i = 0; i < divs; i++) {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'grid-item');
    parent.appendChild(newDiv);
  }
}

generateDivs(16);
