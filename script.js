//     // ● moveBackward: takes a distance parameter. Move the character backward (based on the
//     // direction they are facing) the specified distance.
//     // ● turnAround: reverse the direction the character is facing.
//     // ● printLocation: logs the current position to the console.
    
//     // moveForward 5
//     // 2. moveBackward 3
//     // 3. printLocation … should print 2
//     // 4. turnAround
//     // 5. moveForward 10
//     // 6. moveBackward 5
//     // 7. printLocation … should print -3
// positive 5, negative 3, from result 2 - negative 10, positive 5.

(function () {
    let position=0;
    let direction=true;
    
    // Moving in the positive direction, false will be needed to move in opposite direction.
    function moveForward(fdistance) {
    if (direction === true) {
    position+=fdistance; /*positive*/
    }
    else {
    position-=fdistance; /*otherwise,negative*/
    }
    }
    function moveBackward (bdistance) {
    if (direction === true) {
    position-=bdistance;
    }
    else {
      position+=bdistance;
    }
    }
    function printLocation () {
      console.log(position);
    }
    
    
    function turnAround (){ 
    
    direction=!direction; /*direction equal not direction, direction is opposite of true.*/
    }
    moveForward(5);
    moveBackward(3);
    printLocation();
    turnAround();
    moveForward(10);
    moveBackward(5);
    printLocation();
    }
    
    )();