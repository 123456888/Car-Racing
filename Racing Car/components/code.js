const carGame = document.querySelector(".carGame");
const score = document.querySelector(".score");
const startScreen = document.querySelector(".startScreen");
const gameArea = document.querySelector(".gameArea");
var line = document.getElementById("line");
var carOne = document.getElementById("carOne");
var carThree = document.getElementById("carThree");
var over = document.getElementById("over");
const counting = document.getElementById("counting");
var scoring = document.getElementById("scoring");

let counter = 0;

carThree.addEventListener("animationiteration", function (e) {
    var random = ((Math.floor(Math.random() * 2)) * 130)
    carThree.style.left = random + "px";
    counter++;
})

function playGame() {
    window.requestAnimationFrame(start);
}

window.addEventListener("keydown", function (e) {
    if (e.key == "ArrowRight") {
        var carOneSelect = parseInt(window.getComputedStyle(carOne).getPropertyValue("left"));
        if (carOneSelect < 90) {
            carOne.style.left = (carOneSelect + 130) + "px";
        }
    }
    if (e.key == "ArrowLeft") {
        var carOneSelect = parseInt(window.getComputedStyle(carOne).getPropertyValue("left"));
        if (carOneSelect > 90) {
            carOne.style.left = (carOneSelect - 130) + "px";
        }
    }
    if (e.key == "ArrowUp") {
        var carOneSelect = parseInt(window.getComputedStyle(carOne).getPropertyValue("top"));
        if (carOneSelect < 90) {
            carOne.style.top = (carOneSelect - 130) + "px";
        }
    }
    if (e.key == "ArrowDown") {
        var carOneSelect = parseInt(window.getComputedStyle(carOne).getPropertyValue("top"));
        if (carOneSelect < 90) {
            carOne.style.top = (carOneSelect + 130) + "px";
        }
    }
})

setInterval(
    function Gameover() {
        var carOneLeft = parseInt(window.getComputedStyle(carOne).getPropertyValue("left"));
        var carThreeLeft = parseInt(window.getComputedStyle(carThree).getPropertyValue("left"));
        var carThreeTop = parseInt(window.getComputedStyle(carThree).getPropertyValue("top"));
        counting.innerHTML = `${counter}`;
        if ((carOneLeft === carThreeLeft) && (carThreeTop > 516)) {
            over.style.display = "block";
            carOne.style.display = "none";
            carThree.style.display = "none";
            line.style.display = "none";
            counting.innerHTML = `${counter}`;
            scoring.innerHTML = `Score is: ${counter}`;
        }
    }
)
