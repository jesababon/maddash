$(function () {

  //add objects
  const emojis = ["🎒", "📱", "🔑", "☕️", "💻", "👓", "🎧", "🍩", "📓", "💊"];
  const misc = ['🏈', '📚', '🍕', '🎨', '⌚️', '⌛️', '💡', '💰', '🔧 ', '📼', '🔬', '✂️ ', '🖍', '🔮', '📿', '🥡', '⚽️', '🎮', '📟', '🧦', '🌂', '🥨', '🥪', '📀'];
  const randoMisc = misc[Math.floor(Math.random() * misc.length)]; //for empty arrays

  //add GameBoard areas
  const $playField = $('.play-field');
  const $EssentField = $('.essential');
  const clock = $('.clock');
  let countdown = 10;
  const $collected = $('.collected');

  //add sounds
  let makeit = $('#makeit')[0];
  let playYoull = function() {
    makeit.play();
  };

  let nogodno = $('#nogodno')[0];
  let playNoGodNo = function () {
    nogodno.play();
  };

  
  //add win and lose Modals: source https://www.w3schools.com/howto/howto_css_modals.asp
  // Get the modal
  const modal = $('#winOne')[0]; //accurate jquery calls source: https://stackoverflow.com/questions/4069982/document-getelementbyid-vs-jquery
  const loseOne = $('#loseOne')[0];

  // Get the <span> element that closes the modal
  const span = $('.close')[0];

  // When the user clicks the button, open the modal 
  const winner = function () {
    modal.style.display = "block";
    playYoull();
  };

  const loser = function () {
    loseOne.style.display = "block";
    playNoGodNo();
  };

  // When the user clicks on <span> (x), close the modal
  $('.close')[0].onclick = function () {
    modal.style.display = "none";
  };
  $('.close')[1].onclick = function () {
    loseOne.style.display = "none";
  };


  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
    if (event.target == loseOne) {
      loseOne.style.display = "none";
    }
  };



  //attach multiple objects to field in random positions
  function createEssentials() {
    for (let i = 0; i < 10; i++) {
      const $gottaGet = $('<div class="item resort"></div>').append(emojis[Math.floor(Math.random() * [emojis.length])]);
      let $addGet = $playField.append($gottaGet);
      $('div:empty').append($gottaGet); //remove empty divs
    } //NEED TO MAKE RANDOM PLAYFIELD DIV CONSTANT}
  }

  function makeMisc() {
    for (let i = 0; i < 30; i++) {
      const $misc = $('<div class="noclick resort"></div>').append(misc[Math.floor(Math.random() * [misc.length])]);
      let $notNeeded = $playField.append($misc);
      $('div:empty').append(randoMisc); //remove empty divs      
    }
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

  //add function collecting objects from the field
  function pickThingsUp() {
    const item = $('.item').on('click', function (e) {
      $collected.append(e.target.innerText);
      $(event.target).text(" ");
    });
  }

  //add countdown clock
  function startClock() {
    let $interval = setInterval(function time() {
      if (countdown !== 0) {
        countdown--;
        $('.clock').html(`TIME REMAINING<br><b>0${countdown}:00</b><br>`);
      } else {
        clearInterval($interval);
        winnerWinner();
      }
    }, 1000);
  }

  //add function of winnerWinner if all objects are removed
  function winnerWinner() {
    if ($('.collected').text().length >= 45) { //"$('.collected') length is 24 with 4 emoji.
    winner();
    
    } else loser();
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
