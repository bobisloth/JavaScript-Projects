//var keeps trac on turns.
let activePlayer = 'X';
//array of moves, used to determine win conditions
let selectedSquares = [];

//for placing x or o in a square
function placeXOrO(squareNumber) {
    //checks if a square has been used
    //the some method check each element of selectedsquare array for square number clocked on
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //retrievs the element clicked on
        let select = document.getElementById(squareNumber);
    
        //checks whos turn it is
        if (activePlayer === 'X') {
            //places x if activePlayer = x
            select.style.backgroundImage = 'url("./imgs/x.png")';
        }
        else {
            //if acrivePlayer=o, places o
            select.style.backgroundImage = 'url("./imgs/o.png")';
        }
        //selectedSquares and squareNumber are concatenated and added to array
        selectedSquares.push(squareNumber + activePlayer);
        //calls a function to check for any win conditions
        checkWinConditions();
        //condition for changing active player
        if (activePlayer === 'X') {
            activePlayer = 'O';
        }
        //if actpl is other than x
        else {
            //change the actpl to X
            activePlayer = 'X';
        }
        //placement  sound
        audio('./media/place.mp3');
        //checks to see if is pc's turn
        if (activePlayer === 'O') {
            //disables clickin for pc's choice
            disableClick();
            //waits 1sec before placing the img and enables click
            setTimeout(function () { computersTurn(); }, 1000);
        }
        //returning true is needed for compsturn function to work
        return true;
    }

    //radnom square being selected
    function computersTurn() {
        //this boolean is needed for while loop
        let success = false;
        //var stores a random number 0-8
        let pickASquare;
        //allows our while to keep trying if a square is selected already
        while (!success) {
            //arandom number 0-8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
            //if this returns tru the square hasnt been selected yet
            if (placeXOrO(pickASquare)) {
                //callse the function
                placeXOrO(pickASquare);
                //changes our boolean and ends the loop
                success = true;
            }
        }
    }
    
}

//This function parses the selectedsquares array to search for win conditions.
//drawWinLine function is called to draw line if condition is met.
function checkWinConditions() {
    // X 0, 1, 2 condition.
    if (arrayIncludes('0x', '1X', '2X')) { drawWinLine(50, 100, 558, 100); }
    // X 3, 4, 5 condition.
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304); }
    // X 6, 7, 8 condition.
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508); }
    // X0, 3, 6 condition.
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558); }
    // X 1, 4, 7 condition.
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558); }
    // X 2, 5, 8 condition.
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558); }
    // X 6, 4, 2 condition.
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90); }
    // X 0, 4, 8 condition.
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520); }
    // O 0, 1, 2 condition.
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100); }
    // O 3, 4, 5 condition.
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304); }
    // 06, 7, 8 condition.
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508); }
    // O 0, 3, 6 condition.
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558); }
    // O 1, 4, 7 condition.
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558); }
    // O 2, 5, 8 condition.
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558); }
    // O 6, 4, 2 condition.
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90); }
    //OO, 4, 8' condition.
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520); }

    //Condition check for tie if none of the above are selected the code executes
    else if (selectedSquares.length >= 9) {
        //plays tie sound
        audio('./media/tie.mp3');
        //sets a .3s timef befer resetGane is called
        setTimeout(function () { resetGame(); }, 1000);
    }
    //checks if an array includes 3 strings, for each win condition
    function arrayIncludes(squareA, squareB, squareC) {
        //will be used to check for 3 in a row
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //if the 3 are included in our array true is returned and else if execures the drawinline function
        if (a === true && b === true && c === true) { return true; }
    }
}

//makes our body temp unclickable
function disableClick() {
    body.style.pointerEvents = 'none';
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}

//sets sound
function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

//utilizes canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //acces our html canvas el
    const canvas = document.getElementById('win-lines');
    //gives us acces to methods and properties ti use canv
    const c = canvas.getContext('2d');
    //indicates where the start of x lines is
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        //stores temp x data we update in our animation loop
        x = x1,
        //stores temp y data we update in our animation loop
        y = y1;
    
    //interacts with the canvas
    function animateLineDrawing() {
        //creates the loop for the game ends/restarts
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //this clears content from last loop iteration
        c.clearRect(0, 0, 608, 608);
        //starts a new path
        c.beginPath();
        //moves us to a strting point in our line
        c.moveTo(x1, y1);
        //indicates the end point in our line
        c.lineTo(x, y);
        //sets the width
        c.lineWidth = 10;
        //sets the colour
        c.strokeStyle = 'rgba(70, 255, 33, 0.8)';
        //draws evertything laid above
        c.stroke();
        //checks if weve reached the endpoint
        if(x1 <= x2 && y1 <= y2) {
          //adds 10 to the previous end  x point
            if (x < x2) { x += 10; }
            //add 10 to the prev y end point
            if (y < y2) { y += 10; }
            //cancels when reaches end
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop);}
        }
        //similliar to the above condition, necessary for the 6,4,2, conition
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop);}
        }
    }
    //clears our canvas after line is drawn
    function clear() {
        //starts our anim loop
        const animationLoop = requestAnimationFrame(clear);
        //clears canvars
        c.clearRect(0, 0, 608, 608);
        //stops anim loop
        cancelAnimationFrame(animationLoop);
    }
    //disallows clickin while the win sound is playing
    disableClick();
    //plays the win souns
    audio('./media/winGame.mp3');
    //calls main anim loop
    animateLineDrawing();
    //waits 1s, then clears canvas, res game and allows clicking again
    setTimeout(function () { clear(); resetGame(); }, 1000);
}
//resets the game in a tie or a win
function resetGame() {
    //iterates through each html el
    for (let i = 0; i < 9; i++) {
        //gets the html el of i
        let square = document.getElementById(String(i));
        //removes our backgroundimage
        square.style.backgroundImage = '';
    }
    //resets our array
    selectedSquares = [];
}