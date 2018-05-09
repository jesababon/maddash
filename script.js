

$(function () {

//check if js is working
// const x = ['ready', 'steady', 'go'];

//add objects
const essential = ["🎒","📱","🔑","☕️","💻","👓","🎧","🍩","📓", "💊"];
const misc = ['🏈', '📚', '🍕', '🎨', '⌚️', '⌛️', '💡', '💰', '🔧 ', '📼', '🔬', '✂️ ', '🖍', '🔮', '📿'];

//add playField const
const $playField = $('.play-field');

//add object to playField
//tried wrapping in window.onload = function

// const backpack = $('.object');


//to add many random objects would i need to have the images in an array,
//or would i be able to create a function that "fetches" a random image.
//

function createEssentials (){
    const $backpack = $('<div></div>').append(essential[0]); //change to randomPos
    let $needToFind = $playField.append($backpack); // add .css position when multiple to see what happens
    // $('.playField').css('position', 'relative');

    //Celeste help. needed to add x and y randoms to the create function. then force the position to css.

    var x = Math.max(0, Math.min(60, Math.ceil(Math.random() * 100)));
    var y = Math.max(0, Math.min(60, Math.ceil(Math.random() * 100)));


    $backpack.css({
        position: 'absolute',
        top: y + '%',
        left: x + '%',
    });


}

createEssentials();

function makeMisc(){
    const $misc = $('<div></div>').append(misc[0]);
    let $notNeeded = $playField.append($misc); // add .css position when multiple to see what happens
    // $('.playField').css('position', 'relative');

    //Celeste help. needed to add x and y randoms to the create function. then force the position to css.

    var x = Math.max(0, Math.min(60, Math.ceil(Math.random() * 100)));
    var y = Math.max(0, Math.min(60, Math.ceil(Math.random() * 100)));


    $misc.css({
        position: 'absolute',
        top: y + '%',
        left: x + '%',
    });
}
//add multiple objects to playfield and randomize their starting place.

function manyItems (){
    let left = Math.random() * window.innerWidth;
    let top = Math.random() * window.innerHeight;

    for (let i = 0; i < 10; i++) {
       
        makeMisc();
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
