// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Give each project card a random tilt so it feels hand-placed
document.querySelectorAll('.card').forEach((card) => {
  const tilt = (Math.random() * 5 - 2.5).toFixed(2); // between -2.5deg and 2.5deg
  card.style.setProperty('--tilt', `${tilt}deg`);
});

// Split the name into letters, each a little off-kilter (hover one to make it hop)
const name = document.querySelector('.name');
if (name) {
  const lines = name.innerHTML.split(/<br\s*\/?>/i);
  name.setAttribute('aria-label', lines.map((l) => l.trim()).join(' '));
  name.innerHTML = lines
    .map((line) =>
      [...line.trim()]
        .map((ch) => {
          const rot = (Math.random() * 10 - 5).toFixed(1);   // -5 to 5 deg
          const dy = (Math.random() * 10 - 5).toFixed(1);    // -5 to 5 px
          return `<span class="ltr" aria-hidden="true" style="--rot:${rot}deg;--dy:${dy}px">${ch}</span>`;
        })
        .join('')
    )
    .join('<br>');
}
