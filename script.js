

const { log } = require("console");
var express = require("express");
const app = express();

app.use(express.static('./public'))
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.listen("3000", function () {
  console.log("server is started at 3000");
});


// if(typeof window === "object"){

  function newgame() {
    var timer = 5;
    var score = 0;
    var hitrn = 0;
    function increasescore() {
      score += 10;
      document.querySelector("#scoreval").textContent = score;
    }
    function makebubble() {
      var clutter = "";
      var limit = 102;
      for (var i = 1; i <= limit; i++) {
        var random = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${random}</div>`;
      }

      document.querySelector("#pbtm").innerHTML = clutter;
    }

    function runtimer() {
      var timerinterval = setInterval(function () {
        if (timer > 0) {
          timer--;
          document.querySelector("#timer").textContent = timer;
        } else {
          clearInterval(timerinterval);
          document.querySelector("#pbtm").innerHTML = `<div class="ngdiv">
            <h1>Game Over</h1> 
            <button onclick="newgame()" class="ngbtn">New Game</button>
            </div>`;
        }
      }, 1000);
    }

    function getNewHit() {
      hitrn = Math.floor(Math.random() * 10);
      document.querySelector("#hit").textContent = hitrn;
    }
    document
      .querySelector("#pbtm")
      .addEventListener("click", function (details) {
        var clickednum = Number(details.target.textContent);
        if (clickednum === hitrn) {
          increasescore();
          makebubble();
          getNewHit();
        }
      });

    makebubble();
    runtimer();
    getNewHit();
  }
  newgame();
// }

