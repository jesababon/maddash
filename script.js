$(function() {

  //add objects
  const emojis = ["🎒", "📱", "🔑", "☕️", "💻", "👓", "🎧", "🍩", "📓", "💊"];
  const misc = ['🏈', '📚', '🍕', '🎨', '⌚️', '⌛️', '💡', '💰', '🔧 ', '📼', '🔬', '✂️ ', '🖍', '🔮', '📿'];


  //add GameBoard areas
  const $playField = $('.play-field');
  const $EssentField = $('.essential');
  const clock = $('.clock');
  let countdown = 5;
  const $collected = $('.collected');


// Added an Item Key but want to add just the values created in the createEssentials function
  let itemKey = $EssentField.append(emojis);


console.log($('.play-field').classList);


  //attach objects to field in random positions
  function createEssentials() {
    const $gottaGet = $('<div class="item"></div>').append(emojis[Math.floor(Math.random() * misc.length)]);


    let $addGet = $playField.append($gottaGet);

    //help with randomization src: http://jsfiddle.net/hspvadfv/

    let x = Math.max(0, Math.min(80, Math.ceil(Math.random() * 90)));
    let y = Math.max(0, Math.min(80, Math.ceil(Math.random() * 90)));


    $gottaGet.css({
      position: 'absolute',
      top: y + '%',
      left: x + '%',
    });


  }

  function makeMisc() {
    const $misc = $('<div class="noclick"></div>').append(misc[Math.floor(Math.random() * misc.length)]);
    let $notNeeded = $playField.append($misc);


    //Added x and y randoms to the create function. then force the position to css.
    let x = Math.max(0, Math.min(60, Math.ceil(Math.random() * 100)));
    let y = Math.max(0, Math.min(60, Math.ceil(Math.random() * 100)));




    $misc.css({
      position: 'absolute',
      top: y + '%',
      left: x + '%',

      //looking for overlapping solutions. found http://jsfiddle.net/AHReF/1/

      // let coords = {
      //   w: $(this).outerWidth(true),
      //   h: $(this).outerHeight(true)
      // };
      // let success = false;
      // while (!success) {
      //   coords.x = parseInt(Math.random() * ($playField - coords.w));
      //   coords.y = parseInt(Math.random() * ($playField - coords.h));
      //   let success = true;
      //   $.each(positions, function () {
      //     if (
      //       coords.x <= (this.x + this.w) &&
      //       (coords.x + coords.w) >= this.x &&
      //       coords.y <= (this.y + this.h) &&
      //       (coords.y + coords.h) >= this.y
      //     ) {
      //       success = false;
      //     }
      //   });
      // }
      // positions.push(coords);
      // $(this).css({
      //       top: coords.y + 'px',
      //       left: coords.x + 'px'
      //above logic would not process. kept looping.
      //overlap tutorial in p5.js https://www.youtube.com/watch?v=XATr_jdh-44
      //distance is greater than radius 1 + radius of 2. distance function.
      // let protection = 0;
      // const spaceBetween = [];

      // while (spaceBetween.length < 20) {
      //   let manyPos = {
      //     x: Math.random() * $playField,
      //     y: Math.random() * $playField,


      //   };

      //   let overlapping = false;
      //   for (let j = 0; j < spaceBetween.length; j++) {
      //     let other = spaceBetween[j];
      //     let a = manyPos.x - other.x;
      //     let b = manyPos.y - other.y;
      //     let d = Math.sqrt(((a * a) + (b * b)));
      //     if (d < 30) {
      //       overlapping = true;
      //     }
      //   }


      //   if (!overlapping) {
      //     spaceBetween.push(manyPos);
      //   }
      //   protection++;
      //   if (protection > 10) {
      //     break;
      //   }
      //   for (let i = 0; i < spaceBetween.length; i++) {
      //     makeMisc(spaceBetween[i].x, spaceBetween[i].y);           
    });
  }
  //add multiple objects to playfield and randomize their starting place.



  function manyMisc() {
    for (let i = 0; i < 10; i++) {
      let manyPos = {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      };

      makeMisc();

    }
  }

  function manyEssentials() {
    for (let i = 0; i < 6; i++) {
      let manyPos = {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      };

      createEssentials();


    }
  }


  //add function of winnerWinner if all objects are removed
  //if class items in playfield === 0. win
  function winnerWinner() {
    if ($('.collected').text().length > 4) {
      alert('You win');
    } else alert('You lose');
  }


  //add function removing objects from the field
  function pickThingsUp() {
    const item = $('.item').on('click', function(e){
      console.log(e.target.innerText);
      $collected.append(e.target.innerText);
      (e.target).remove();

    });
  }



  //add countdown clock
  function startClock() {
    let $interval = setInterval(function time() {
      console.log(countdown);
      if (countdown !== 0) {
        countdown--;
        $('.clock').html(`${countdown} seconds <p>remaining</p>`);
      } else {
        clearInterval($interval);
        winnerWinner();

        
      }
    }, 1000);
  }

  //add game initialization function
  function startGame() {
    manyEssentials();
    manyMisc();
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
