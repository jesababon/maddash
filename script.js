$(function() {

  //add objects
  const emojis = ["🎒", "📱", "🔑", "☕️", "💻", "👓", "🎧", "🍩", "📓", "💊"];
  const misc = ['🏈', '📚', '🍕', '🎨', '⌚️', '⌛️', '💡', '💰', '🔧 ', '📼', '🔬', '✂️ ', '🖍', '🔮', '📿'];


  //add GameBoard areas
  const $playField = $('.play-field');
  const $EssentField = $('.essential');
  const clock = $('.clock');
  let countdown = 10;
  const $collected = $('.collected');



  //attach multiple objects to field in random positions
  function createEssentials() {
    for (let i = 0; i < 5; i++) {
      const $gottaGet = $('<div class="item"></div>').append(emojis[Math.floor(Math.random() * [i])]);
      let $addGet = $playField.append($gottaGet);
    } //NEED TO MAKE RANDOM PLAYFIELD DIV CONSTANT
  }

  function makeMisc() {
    for (let i = 0; i < 25; i++) {
    const $misc = $('<div class="noclick"></div>').append(misc[Math.floor(Math.random() * [i])]);
    let $notNeeded = $playField.append($misc);
    $('.box:empty').remove();    //remove empty divs      
    }
  }
  
  //add function of winnerWinner if all objects are removed
  function winnerWinner() {    
    if ($('.collected').text().length - 9 >= 8) { //minus the "collected" characters. emoji count as two characters.
      alert('You win');}
    else alert('You lose');
  }


  //add function removing objects from the field
  function pickThingsUp() {
    const item = $('.item').on('click', function(e){
      $collected.append(e.target.innerText);
      (e.target).remove();
      $('.item:empty').remove(); //Thanks Paris! Deletes empty divs.
    });
  }



  //add countdown clock
  function startClock() {
    let $interval = setInterval(function time() {
      console.log(countdown);
      if (countdown !== 0) {
        countdown--;
        $('.clock').html(`TIMER<br><br> ${countdown} seconds<br>remaining`);
      } else {
        clearInterval($interval);
        winnerWinner();        
      }
    }, 1000);
  }

  //add game initialization function
  function startGame() {
    createEssentials();
    makeMisc();
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
