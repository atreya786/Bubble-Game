const startGame = () => {
  var hit = 0;
  var time = 60;
  var score = 0;

  const createBubble = () => {
    var str = "";
    for (let i = 1; i <= 168; i++) {
      let rn = Math.floor(Math.random() * 10);
      str += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbotm").innerHTML = str;
  };

  const runTimer = () => {
    var timer = setInterval(() => {
      if (time > 0) {
        time--;
        document.querySelector("#timer").textContent = time;
      } else {
        clearInterval(timer);
        document.querySelector(
          "#pbotm"
        ).innerHTML = `<div class="over"><h1>Game Over</h1><br/><h1>Your Score is ${score}</h1><br/><button onclick="window.location.reload()">Try Again</button></div>`;
      }
    }, 1000);
  };

  const generateHit = () => {
    hit = Math.floor(Math.random() * 10);
    document.querySelector("#hit").textContent = hit;
  };
  const increaseScore = () => {
    score += 10;
    document.querySelector("#score").textContent = score;
  };

  document.querySelector("#pbotm").addEventListener("click", (elem) => {
    var clickedNum = Number(elem.target.textContent);
    if (clickedNum === hit) {
      increaseScore();
      createBubble();
      generateHit();
    }
  });

  createBubble();
  runTimer();
  generateHit();
};

document.querySelector("#startButton").addEventListener("click", () => {
  startGame();
  document.querySelector("#elem").style.display = "none";
  document.querySelector("#main").style.display = "flex";
});
