// document.querySelector("button").addEventListener("click", handleClick);
//
// function handleClick() {
//     alert("i got clicked!");
// }

//Another way to use the event listener, using anonymous functions;
// document.querySelector("button").addEventListener("click", function() {
//
//     alert("i got clicked!");
// });


//challenge. add event listener to all buttons;
// var myButtons = document.querySelectorAll(".drum");
//
// for (var i=0; i<myButtons.length; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//         alert("btns got clicked");
//     });
// }


//challenge. add sound to all buttons;

//Detecting Button Press
var myButtons = document.querySelectorAll(".drum");


for (var i = 0; i < myButtons.length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });
}


//Detecting Keyboard Press
document.addEventListener("keydown", function(event){

    makeSound(event.key);

    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case 'j':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case 'a':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case 'w':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case 'k':
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;
        case 'l':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        default:
            console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey)

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },100);
}
