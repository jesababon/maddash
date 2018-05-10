

$(function () {

    //add objects
    const essential = ["🎒", "📱", "🔑", "☕️", "💻", "👓", "🎧", "🍩", "📓", "💊"];
    const misc = ['🏈', '📚', '🍕', '🎨', '⌚️', '⌛️', '💡', '💰', '🔧 ', '📼', '🔬', '✂️ ', '🖍', '🔮', '📿'];

    //add playField const
    const $playField = $('.play-field');

    //attach objects to field in random positions
    function createEssentials() {
        const $backpack = $('<div></div>').append(essential[Math.floor(Math.random() * misc.length)]);

        let $needToFind = $playField.append($backpack);
        
        var x = Math.max(0, Math.min(60, Math.ceil(Math.random() * 100)));
        var y = Math.max(0, Math.min(60, Math.ceil(Math.random() * 100)));


        $backpack.css({
            position: 'absolute',
            top: y + '%',
            left: x + '%',
        });


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

    function manyItems() {
        let left = Math.random() * window.innerWidth;
        let top = Math.random() * window.innerHeight;

        for (let i = 0; i < 5; i++) {

            makeMisc();
            createEssentials();


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