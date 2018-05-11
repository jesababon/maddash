

$(function () {

    //add objects
    const get = ["🎒", "📱", "🔑", "☕️", "💻", "👓", "🎧", "🍩", "📓", "💊"];
    const misc = ['🏈', '📚', '🍕', '🎨', '⌚️', '⌛️', '💡', '💰', '🔧 ', '📼', '🔬', '✂️ ', '🖍', '🔮', '📿'];
    const clock = $('.clock');
    let countdown = 10;

    //add playField const
    const $playField = $('.play-field');
    const $EssentField = $('.essential');
    let $addtoEssential = $EssentField.append(get); // but want to add just the values created in the createEssentials function
    

    //attach objects to field in random positions
    function createEssentials() {
        const $gottaGet = $('<div class="item"></div>').append(get[Math.floor(Math.random() * misc.length)]);

        let $addGet = $playField.append($gottaGet);

        //help with randomization src: http://jsfiddle.net/hspvadfv/
        var x = Math.max(0, Math.min(100, Math.ceil(Math.random() * 100)));
        var y = Math.max(0, Math.min(100, Math.ceil(Math.random() * 100)));


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

        var x = Math.max(0, Math.min(60, Math.ceil(Math.random() * 100)));
        var y = Math.max(0, Math.min(60, Math.ceil(Math.random() * 100)));


        $misc.css({
            position: 'absolute',
            top: y + '%',
            left: x + '%', 
            
        });
    }
    //add multiple objects to playfield and randomize their starting place.

    function manyMisc() {
        let left = Math.random() * $playField.innerWidth;
        let top = Math.random() * $playField.innerWidt;



        for (let i = 0; i < 10; i++) {

            makeMisc();

        }
    }

     function manyEssentials() {
       let left = Math.random() * $playField.innerWidth;
       let top = Math.random() * $playField.innerHeight;


       for (let i = 0; i < 5; i++) {

         createEssentials();

       }
     }

//add function removing objects from the field
function pickThingsUp() {
  $('.item').on('click', function () {
    $(this).remove();

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
      //end game function
    }
  }, 1000);
}

//add game initialization function
function startGame (){
manyEssentials();
manyMisc();
startClock();
pickThingsUp();
}



startGame();


//BONUS add <div>Collected</div> and put selected objects in this div 


//add function of winnerWinner if all objects are removed


//add else function of youAreLate if all objects are not removed


//add exitDoor function to initiate winnerWinner function


//add reset game button (or set a object reset button inside the collected div)

//build next level and link the two with localStorage


});