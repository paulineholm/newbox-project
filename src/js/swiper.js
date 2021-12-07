function swipeCatch (element, swipeFn, swipeLeft = true){

    //console.log(element)
    // Touches er indbygget listeners i JS!

    let initialX;
    let currentX;
    let movedX;

    
    const startTouch = function(e){
        initialX = e.touches[0].clientX;

        };
    const moveTouch = function(e){
        currentX = e.touches[0].clientX;
    }


    const endTouch = function(e){
        movedX = currentX - initialX;

        if (movedX < 0) {
            console.log('left')
        } else {
            console.log('right')
        }

        if(swipeLeft & movedX < 0) {
            swipeFn();
        }
    };

    element.addEventListener("touchstart", startTouch);
    element.addEventListener("touchmove", moveTouch);
    element.addEventListener("touchend", endTouch);
}
