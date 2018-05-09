

$(function () {

//check if js is working
const x = ['ready', 'steady', 'go'];
const essential = ["🎒","📱","🔑","☕️","💻","👓","🎧","🍩","📓", "💊"];
const misc = ['🏈','📚','🍕','🎨','⌚️'];
//add playField const
const $playField = $('.play-field');

//add object to playField
//tried wrapping in window.onload = function

// window.onload = 

//to add many random objects would i need to have the images in an array,
//or would i be able to create a function that "fetches" a random image.

function createEssentials (){
    // const $backpack = $('<div style="height:100px;"></div>').addClass('object backpack'); //change to randomPos
    let left = Math.random() * window.innerWidth;
    let top = Math.random() * window.innerHeight;

    let $needToFind = $playField.append(essential); // add .css position when multiple to see what happens
    $needToFind.css({left: left, top: top});


}

createEssentials();

function createMisc (){
    // const $backpack = $('<div style="height:100px;"></div>').addClass('object backpack'); //change to randomPos
    let left = Math.random() * window.innerWidth;
    let top = Math.random() * window.innerHeight;


    let $miscObjects = $playField.append(misc[Math.floor(Math.random() * misc.length)]); // add .css position when multiple to see what happens
    $miscObjects.css({ left: left, top: top });


}

//add multiple objects to playfield and randomize their starting place.

function manyItems (){
    let left = Math.random() * window.innerWidth;
    let top = Math.random() * window.innerHeight;

    for (let i = 0; i < 30; i++) {
       
     createMisc();
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
