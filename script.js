let timer = 60;
let score = 0;

function scoreIncrement() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

function generateHit() {
  let hit = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = hit;
}

function makeBubble(number) {
  let pbtm = document.querySelector("#pbtm");
  let clutter = "";
  for (let i = 0; i <= number; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }
  pbtm.innerHTML = clutter;
}

function runTimer() {
  let timeCounter = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      document.querySelector(
        "#pbtm"
      ).innerHTML = `<h1 class="scorecard">Your Score is ${score}</h1>`;
      clearInterval(timeCounter);
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", (details) => {
  const value = +details.target.textContent;
  const targetValue = +document.querySelector("#hit").textContent;
  if (value === targetValue) {
    scoreIncrement();
    makeBubble(200);
    generateHit();
  }
});

makeBubble(200);
runTimer();
generateHit();
