var list = ['images/FireHedgehog.jpg', 'images/FlyingFox.jpg', 'images/GoastMouse.jpg', 'images/GoldSkull.jpg', 
'images/HoneyBear.jpg', 'images/KingPoo.jpg', 'images/Moon.jpg', 'images/MushroomTurtle.jpg', 'images/Pineapple.jpg', 
'images/PoodleKitten.jpg', 'images/SoccerKitty.jpg', 'images/Strawberry.jpg', 'images/StrawberryBear.jpg', 
'images/Tree.jpg', 'images/TuxPenguin.jpg', 'images/WoodenCow.jpg'];
var seenThings = [];
var score = 0;
var number = Math.floor(Math.random() * (list.length - 0));
var currentImage = document.getElementById('currentImage');
currentImage.src = list[number];
document.getElementById('restartButton').style.opacity = 0;
function say(placeToSay, thingToSay) {
    document.getElementById(placeToSay).innerText = thingToSay;
}
say('text1', `Score: ${score}`);
say('text2', 'Start');

document.getElementById('newButton').addEventListener('click', () => {
    if (seenThings.includes(list[number])) {
        say('text2', 'Game Over');
        currentImage.src = 'images/Wrong.jpg';
        document.getElementById('restartButton').style.opacity = 1;
        document.getElementById("newButton").style.opacity = 0;
        document.getElementById("seenButton").style.opacity = 0;
    } else {
        say('text2', 'Correct');
        seenThings.push(list[number]);
        score += 1;
        say('text1', `Score: ${score}`);
        number = Math.floor(Math.random() * (list.length - 0));
        currentImage.src = list[number];
    }
});

document.getElementById('seenButton').addEventListener('click', () => {
    if (seenThings.includes(list[number])) {
        say('text2', 'Correct');
        say('text2', 'Correct');
        score += 1;
        say('text1', `Score: ${score}`);
        number = Math.floor(Math.random() * (list.length - 0));
        currentImage.src = list[number];
    } else {
        say('text2', 'Game Over');
        currentImage.src = 'images/Wrong.jpg';
        document.getElementById('restartButton').style.opacity = 1;
        document.getElementById("newButton").style.opacity = 0;
        document.getElementById("seenButton").style.opacity = 0;
    }
});

document.getElementById('restartButton').addEventListener('click', () => {
    seenThings = [];
    score = 0;
    number = Math.floor(Math.random() * (list.length - 0));
    currentImage.src = list[number];
    say('text2', 'Start');
    say('text1', `Score: ${score}`);
    document.getElementById('restartButton').style.opacity = 0;
    document.getElementById("newButton").style.opacity = 1;
    document.getElementById("seenButton").style.opacity = 1;
});