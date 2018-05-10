

$(function () {

    //add objects
    const get = ["🎒", "📱", "🔑", "☕️", "💻", "👓", "🎧", "🍩", "📓", "💊"];
    const misc = ['🏈', '📚', '🍕', '🎨', '⌚️', '⌛️', '💡', '💰', '🔧 ', '📼', '🔬', '✂️ ', '🖍', '🔮', '📿'];

    //add playField const
    const $playField = $('.play-field');
    const $EssentField = $('.essential');
    let $addtoEssential = $EssentField.append(get); //want to add just the values created in the createEssentials function

    //attach objects to field in random positions
    function createEssentials() {
        const $gottaGet = $('<div></div>').append(get[Math.floor(Math.random() * misc.length)]);

        let $addGet = $playField.append($gottaGet);
        
        var x = Math.max(0, Math.min(60, Math.ceil(Math.random() * 100)));
        var y = Math.max(0, Math.min(60, Math.ceil(Math.random() * 100)));


        $gottaGet.css({
            position: 'absolute',
            top: y + '%',
            left: x + '%',
        });
        return [];


    }

    function makeMisc() {
        const $misc = $('<div></div>').append(misc[Math.floor(Math.random() * misc.length)]);

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
        let left = Math.random() * window.innerWidth;
        let top = Math.random() * window.innerHeight;

        for (let i = 0; i < 30; i++) {

            makeMisc();

        }
    }

     function manyEssentials() {
       let left = Math.random() * window.innerWidth;
       let top = Math.random() * window.innerHeight;


       for (let i = 0; i < 5; i++) {

         createEssentials();




       }
     }

manyEssentials();
manyMisc();



    //add function removing objects from the field





    //BONUS add <div>Collected</div> and put selected objects in this div 


    //add function of winnerWinner if all objects are removed

    //add Timer

    //add else function of youAreLate if all objects are not removed


    //add exitDoor function to initiate winnerWinner function


    //add reset game button (or set a object reset button inside the collected div)

    //build next level and link the two with localStorage


});