$(document).ready(() => {

//check if js is working
const x = ['ready', 'steady', 'go'];

//add playField const
const $playField = $('.play-field');

//add object to playField
function createItems (){
    const $backpack = $('<div></div>').addClass('backpack'); //change to randomPos
    $playField.append($backpack); // add .css position when multiple to see what happens

}

createItems();

//add randomization of position of objects to playfield

//add multiple objects to playfield and randomize their starting place.

//add function removing objects from the field
//BONUS add <div>Collected</div> and put selected objects in this div 


//add function of winnerWinner if all objects are removed

//add Timer

//add else function of youAreLate if all objects are not removed


//add exitDoor function to initiate winnerWinner function


//add reset game button (or set a object reset button inside the collected div)

//build next level and link the two with localStorage


});
