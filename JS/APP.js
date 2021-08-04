'use strict'
let answers = 0;

let name = prompt("what is your name ")
alert("wlecome to my website \" " + name + " \"")


////////////////////////////Q1///////////////////////////////////


function question1() {

    let level = prompt("do you think I'm in level 201")
    if (level !== null) {
        level = level.toLowerCase();


        switch (level) {
            case 'yes':
            case 'y':

                alert("you got it right (*_*)")
                console.log('you got it right (*_*)');
                answers++;
                break;
            case 'no':
            case 'n':
                console.log("I'am in level 201");
                alert("you don't know me well, better luck next time ")
                break;
            default:
                alert("these are yes or no qustions please type   yes / no ")
        }
    }

}


question1()





////////////////////////////Q2///////////////////////////////////


function question2() {

    let coffee = prompt("do you think I like coffee")
    if (coffee !== null) {
        coffee = coffee.toLowerCase();
        switch (coffee) {
            case 'yes':
            case 'y':
                alert("you don't know me well ,I Don't like coffee ")
                console.log("you don't know me well");
                break;
            case 'no':
            case 'n':
                console.log("you got it , I Don't like coffee (*_*)");
                alert("you got it , I Don't like coffee ")
                answers++;

                break;
            default:
                alert("these are yes or no qustions please type   yes / no ")
        }
    }
}

question2()


////////////////////////////Q2///////////////////////////////////
function question3() {


    let smoke = prompt("do you think I'm smoker ")
    if (smoke !== null) {
        smoke = smoke.toLowerCase();
        switch (smoke) {
            case 'yes':
            case 'y':
                alert("yes unfortunately I'am a Smoker  ")
                console.log('I\'ll try to quit ');
                answers++;
                break;
            case 'no':
            case 'n':
                console.log("unfortunately I'am a Smoker ");
                alert(" unfortunately I'am a Smoker ")
                break;
            default:
                alert("these are yes or no qustions please type   yes / no ")
        }
    }
}
question3()
function question4() {

    let study = prompt(" do you think I'am a Software engineer ")
    if (study !== null) {
        study = study.toLowerCase();
        switch (study) {
            case 'yes':
            case 'y':
                alert("you git it right")
                console.log('I\'am a Software engineer');
                answers++;
                break;
            case 'no':
            case 'n':
                console.log("you didn't get it right");
                alert("I\'am a Software engineer (-_-)")
                break;
            default:
                alert("these are yes or no qustions please type   yes / no ")
        }
    }
}

question4()

let interacting = prompt("do you like interacting with my website ")
if (interacting !== null) {
    interacting = interacting.toLowerCase();
    switch (interacting) {
        case 'yes':
        case 'y':
            alert("so you can share the link for this simple websie")
            console.log('you adore my website');
            answers++;

            break;
        case 'no':
        case 'n':
            console.log("I'll kick you from the website");
            alert(" I'll kick you from the website")
            break;
        default:
            alert("these are yes or no qustions please type   yes / no ")
    }
}


// this is my guessing Game

alert("now we will enter a guessuing game *(*_*)* you have onley 4 attempts ")
let myNumber = 7;

for (let i = 0; i < 4; i++) {
    let userNumber = prompt("guess  a number between 1 and 10 ")

    if (userNumber == myNumber) {
        alert("you got it ")
        answers++;
        break;
    }

    if (userNumber > myNumber) {
        alert("your guess is grater than the number ")
    }

    if (userNumber < myNumber) {
        alert("your number is lower than the number ")
    }


}

alert("guess what is my level in code feleowes is ")
let myArray = [101, 102, 201]
alert("you can choose from these levls " + myArray + "401,501,505,601,701")

let attempts = 6;
let userInput = prompt("enter your guess...be careful you only have 6 attempts")
let x = 0;
while (x < attempts) {
    for (let r = 0; r < myArray.length; r++) {
        if (userInput == myArray[r]) {
            alert("you got it right ")
            x = attempts;
            answers++;

            break;
        }
        else {
            let attempts1 = attempts - x;
            if (r == 2) {
                userInput = prompt("try again you now only have " + attempts1 + "attempts")
            }

        }

    }
    x++;
}

alert("well done you got " + answers + "out of 7")


