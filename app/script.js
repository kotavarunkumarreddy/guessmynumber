const randomn = Math.floor(Math.random()*10);
console.log(randomn);
const check = document.getElementById("check");
const box = document.getElementById("box2");
const low = document.getElementById("low")
const empty = document.getElementById("empty");
const won = document.getElementById("won");
const high = document.getElementById("high");
const score = document.getElementById("score");
const highscore = document.getElementById("highscore");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const lost = document.getElementById("lost");
const start = document.getElementById("start");
const again = document.getElementById("again");

start.style.display = "block";
empty.style.display = "none";
won.style.display = "none";
high.style.display = "none";
low.style.display = "none";
box1.style.display = "block";
box2.style.display = "none";
lost.style.display = "none";

let scores = 20;
let highscores = 0;

check.addEventListener('click', () =>{
    let num = document.getElementById("num").value;
    if(num==randomn) {
        let scores=score.innerHTML;
        start.style.display = "none";
        box.innerHTML = randomn;
        empty.style.display = "none";
        won.style.display = "block";
        box1.style.display = "none";
        box2.style.display = "block";
        document.body.style.backgroundColor = "green";
        if(scores > highscores) {
            highscore.innerHTML = scores;
        }
    } else if(num =="") {
        empty.style.display = "block";
        start.style.display = "none";
        low.style.display = "none";
        high.style.display = "none";
    } else if(num > randomn) {
        high.style.display = "block";
        low.style.display = "none";
        start.style.display = "none";
        score.innerHTML -= 1;
    } else if(num < randomn) {
        high.style.display = "none";
        low.style.display = "block";
        score.innerHTML -= 1;
        start.style.display = "none";
    } 
    if(score.innerHTML == 0) {
        lost.style.display = "block";
        start.style.display = "none";
        document.body.style.backgroundColor = "red";
    }
});

again.addEventListener('click', () =>{
    let scores=score.innerHTML=20;
    let num = document.getElementById("num").value = "";
        document.body.style.backgroundColor = "black";
});
