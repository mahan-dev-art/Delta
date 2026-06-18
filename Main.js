const wave = document.querySelector("path");
let t = 0;

function animateWave() {
  const points = [];

  for (let i = 0; i <= 1440; i += 40) {
    const y = 20 * Math.sin(i * 0.01 + t) + 10 * Math.sin(i * 0.02 + t);
    points.push(`${i},${160 + y}`);
  }

  wave.setAttribute(
    "d",
    `M0,160 ${points.map(p => "L" + p).join(" ")} L1440,320 L0,320 Z`
  );

  t += 0.03;
  requestAnimationFrame(animateWave);
}

animateWave();
