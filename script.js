$(document).ready(() => {

//check if js is working
const x = ['ready', 'steady', 'go'];

//add playField const
const $playField = $('.play-field');

//add object to playField
//tried wrapping in window.onload = function

// window.onload = 
function createItems (){
    const $backpack = $('<div style="height:100px;"></div>').addClass('object backpack'); //change to randomPos



    $playField.append($backpack).position(randomPos()); // add .css position when multiple to see what happens


}

createItems();
//add randomization of position of objects to playfield

function randomPos (){
    const left = Math.random()*window.innerWidth;
    const top = Math.random()* window.innerHeight;
    return{top: top, left:left};
}

//add multiple objects to playfield and randomize their starting place.


function manyItems (){
    for (let i = 0; i < 5; i++) {
       
     createItems();
    }
}

manyItems();


//add function removing objects from the field
//BONUS add <div>Collected</div> and put selected objects in this div 


//add function of winnerWinner if all objects are removed

//add Timer

//add else function of youAreLate if all objects are not removed


//add exitDoor function to initiate winnerWinner function


//add reset game button (or set a object reset button inside the collected div)

//build next level and link the two with localStorage


});
