// script.js

// 1) Helper to fetch & inject an external SVG into a container DIV
async function loadPart(id, url) {
  const res  = await fetch(url);
  const text = await res.text();
  // Inject the <svg>… into the DIV (or wherever you placed <div id="main-body">)
  document.getElementById(id).innerHTML = text;
}

// 2) Async initialization: load all parts, then wire up handlers
(async () => {
  // Load each SVG before doing anything else
  await Promise.all([
    loadPart('main-body',  'svgs/main-body.svg'),
    loadPart('name-plate', 'svgs/name-plate.svg'),
    loadPart('name-text',  'svgs/name-text.svg'),
  ]);

  // --- Your original code, unchanged: ---
  let currentPart = null;

  // Now that the SVGs are in the DOM, grab them by their IDs
  const parts = document.querySelectorAll('#main-body svg, #name-plate svg, #name-text svg, #main-body [id], #name-plate [id], #name-text [id]');
  // (If your external SVG wraps its shapes in a <g id="main-body"> etc, adjust the selector accordingly.)

  parts.forEach(part => {
    part.style.cursor = 'pointer';
    part.addEventListener('click', () => {
      currentPart = part;
    });
  });

  // Swatches logic stays the same
  const swatches = document.querySelectorAll('.swatch');
  swatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      if (!currentPart) {
        alert('Please click on a part of the dock first.');
        return;
      }
      const color = swatch.dataset.color;
      // Apply the new fill
      currentPart.setAttribute('fill', color);
    });
  });
})();
