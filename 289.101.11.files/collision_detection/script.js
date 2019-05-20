/*eslint-env browser*/
/*eslint no-console:0*/
/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red when the puck is over it
- the puck 'teleports' to the opposite boundary when it crosses one (think asteroids/snake)

*/


var puck = document.getElementById('puck');
var puck_x = 210;
var puck_y = 210;
var speed = 50;

puck.style.top = puck_y + 'px';
puck.style.left = puck_x + 'px';

function logCoords(){
    console.log('x=' + puck_x + 'y=' + puck_y);
}

//GAP RED will run any code inside, only trigger in hole
function checkColl(){
    if (puck_x > 250 && puck_x < 350 && puck_y > 150 && puck_y < 250 ){
        console.log('DIE');
        document.getElementById('gap').style.backgroundColor="red";
    }

    else {  document.getElementById('gap').style.backgroundColor="white";  
    } 
    
}

//TELEPORT 
function teleport(){
    console.log ('x=' + puck_x + 'y=' + puck_y);
}

function teleport(){
    if (puck_x < 0 && puck_y < 0 && puck_x > 600 && puck_y > 400 ){;
    console.log('teleport');
    
}
}

document.getElementById('left').addEventListener('click', function(){
    puck_x -= speed;
    // another var for puck
    puck.style.left = puck_x + 'px';
    //looking for function
    logCoords();
    checkColl()
});

document.getElementById('right').addEventListener('click', function(){
    puck_x += speed;
    puck.style.left = puck_x + 'px';
    logCoords()
    checkColl()
});

document.getElementById('up').addEventListener('click', function(){
    puck_y -= speed;
    // another var for puck
    puck.style.top = puck_y + 'px';
    //looking for function
    logCoords();
    checkColl()
});

document.getElementById('down').addEventListener('click', function(){
    puck_y += speed;
    puck.style.top = puck_y + 'px';
    logCoords()
    checkColl()
});