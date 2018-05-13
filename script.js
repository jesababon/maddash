$(function () {

  //add objects
  const emojis = ["🎒", "📱", "🔑", "☕️", "💻", "👓", "🎧", "🍩", "📓", "💊"];
  const misc = ['🏈', '📚', '🍕', '🎨', '⌚️', '⌛️', '💡', '💰', '🔧 ', '📼', '🔬', '✂️ ', '🖍', '🔮', '📿'];
  const randoMisc = misc[Math.floor(Math.random() * misc.length)]; //for empty arrays

  //add GameBoard areas
  const $playField = $('.play-field');
  const $EssentField = $('.essential');
  const clock = $('.clock');
  let countdown = 10;
  const $collected = $('.collected');



  //attach multiple objects to field in random positions
  function createEssentials() {
    for (let i = 0; i < 10; i++) {
      const $gottaGet = $('<div class="item resort"></div>').append(emojis[Math.floor(Math.random() * [i])]);
      let $addGet = $playField.append($gottaGet);
      $('div:empty').append($gottaGet); //remove empty divs
    } //NEED TO MAKE RANDOM PLAYFIELD DIV CONSTANT
  }

  function makeMisc() {
    for (let i = 0; i < 40; i++) {
      const $misc = $('<div class="noclick resort"></div>').append(misc[Math.floor(Math.random() * [i])]);
      let $notNeeded = $playField.append($misc);
      $('div:empty').append(misc[3]); //remove empty divs      
    }
  }

  //add function of winnerWinner if all objects are removed
  function winnerWinner() {
    if ($('.collected').text().length - 9 >= 10) { //minus the "collected" characters. emoji count as two characters.
      alert('You win');
    } else alert('You lose');
  }


  //add function removing objects from the field
  function pickThingsUp() {
    const item = $('.item').on('click', function (e) {
      $collected.append(e.target.innerText);
      (e.target).remove(); // $('.item:empty').remove(); // Paris, I figured it out! Deletes empty divs.
    });
  }


  //add countdown clock
  function startClock() {
    let $interval = setInterval(function time() {
      console.log(countdown);
      if (countdown !== 0) {
        countdown--;
        $('.clock').html(`TIMER<br>${countdown} seconds<br>remaining`);
      } else {
        clearInterval($interval);
        winnerWinner();
      }
    }, 1000);
  }

  //DIV SHUFFLE SOURCE: http://jsfiddle.net/uYyAH/2/
  function shuffle() {
    "use strict";
    // Cycle over each .shuffledv HTMLElement
    $(".play-field").each(function () {
      // Remove all divs within, store in $d
      var $d = $(this).find("div").remove();
      // Sort $d randomnly
      $d.sort(function () {
        return Math.floor(Math.random() * $d.length);
      });
      // Append divs within $d to .shuffledv again
      $d.appendTo(this);
    });
  }

  //add game initialization function
  function startGame() {
    createEssentials();
    makeMisc();
    shuffle();
    startClock();
    pickThingsUp();
  }


  startGame();




  //add <div>Collected</div> and put selected objects in this div 

  //get divs to remain in $playfield. Mike suggested creating a grid and divs populate in ranodm cells.


  //add else function of youAreLate if all objects are not removed on time


  //add exitDoor function to initiate winnerWinner function


  //add reset game button (or set a object reset button inside the collected div)

  //build next level and link the two with localStorage

  //build landing page


});
