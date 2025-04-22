// script.js
let currentPart = null;

// Parts to recolor
const parts = document.querySelectorAll('#main-body, #name-plate, #name-text');
parts.forEach(part => {
  part.style.cursor = 'pointer';
  part.addEventListener('click', () => {
    currentPart = part;
  });
});

// Color swatches
const swatches = document.querySelectorAll('.swatch');
swatches.forEach(swatch => {
  swatch.addEventListener('click', () => {
    if (!currentPart) {
      alert('Please click on a part of the dock first.');
      return;
    }
    const color = swatch.dataset.color;
    // Apply color based on element type
    if (currentPart.tagName.toLowerCase() === 'text') {
      currentPart.setAttribute('fill', color);
    } else {
      currentPart.setAttribute('fill', color);
    }
  });
});
