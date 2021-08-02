let level = prompt("do you think I'm in level 201")
if (level !== null) {
    level = level.toLowerCase();


switch (level){
    case 'yes':
alert("you got it right (*_*)")
console.log('you got it right (*_*)');
break;
case 'no':
    console.log("I'am in level 201");
    alert("you don't know me well, better luck next time ")
    break;
    default:
        alert("these are yes or no qustions please type   yes / no ")
}
}



let coffee = prompt("do you think I like coffee")
if (coffee!== null) {
    coffee = coffee.toLowerCase();
switch (coffee){
    case 'yes':
alert("you don't know me well ,I Don't like coffee ")
console.log("you don't know me well");
break;
case 'no':
    console.log("you got it , I Don't like coffee (*_*)");
    alert("you got it , I Don't like coffee ")
    break;
    default:
        alert("these are yes or no qustions please type   yes / no ")
}
}

let smoke = prompt("do you think I'm smoker ")
if (smoke!== null) {
    smoke = smoke.toLowerCase();
switch (smoke){
    case 'yes':
alert("yes unfortunately I'am a Smoker  ")
console.log('I\'ll try to quit ');
break;
case 'no':
    console.log("unfortunately I'am a Smoker ");
    alert(" unfortunately I'am a Smoker ")
    break;
    default:
        alert("these are yes or no qustions please type   yes / no ")
}
}

let study = prompt(" do you think I'am a Software engineer ")
if (study!== null) {
    study = study.toLowerCase();
switch (study){
    case 'yes':
alert("you git it right")
console.log('I\'am a Software engineer');
break;
case 'no':
    console.log("you didn't get it right");
    alert("I\'am a Software engineer (-_-)")
    break;
    default:
        alert("these are yes or no qustions please type   yes / no ")
}
}

let interacting = prompt("do you like interacting with my website ")
if (interacting!== null) {
    interacting = interacting.toLowerCase();
switch (interacting){
    case 'yes':
alert("so you can share the link for this simple websie")
console.log('you adore my website');
break;
case 'no':
    console.log("I'll kick you from the website");
    alert(" I'll kick you from the website")
    break;
    default:
        alert("these are yes or no qustions please type   yes / no ")
}
}
