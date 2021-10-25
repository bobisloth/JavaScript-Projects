var X=10; //assigning a global variable
function Add_numbers_1() {
    document.write(20 + X + "<br>"); //sums up the variable and the number in the bracket
}
    function Add_numbers_2() {
        document.write(X + 100);//sums up the variable and the number in the bracket
    }
    Add_numbers_1();  
    Add_numbers_2();
     
document.write("<br>");

function Add_numbers_1() {
    var X = 10; // asssigns a local variable
    document.write(20 + X + "<br>");//sums up the variable and the number in the bracket
}
function Add_numbers_2() {
    document.write(X + 100);//sums up the variable and the number in the bracket
}
Add_numbers_1();
Add_numbers_2();

function my_greeting() {
    if (new Date().getHours() < 18) { //gets the local time and checks if it's less than 18:00
        document.getElementById("greeting").innerHTML = "How are you today?"; //displays the greeting if statemen is true
    }
        else {
            document.getElementById("greeting").innerHTML = "How are you tonight?";//displays the greeting if the statemant above is false
    }
 }

function age_function() {
    if (Age >= 18) { //checks if the ages the user has typed is greater or equal to 18
        Vote = "You are old enough to vote."; // if true this text is displayed
    }
    else {
        Vote = "You are not old enough to vote.";//if false this text is displayed
    }
    document.getElementById("how_old").innerHTML = Vote;
}

function time_function() {
    var Time = new Date().getHours(); //gets local time and assings it to the var
    var Reply;
    if (Time < 12 == Time > 0) { //checks if the time is between 12and00
        Reply = "It is morning time.";
    }
    else if (Time > 12 == Time < 18) { //checks if time is between 12 and 18
        Reply ="It is the afternoon."
    }

    else { //if none of the above is true displays the text bellow
        Reply = "It is evening time."
        document.getElementById("time_today").innerHTML = Reply;
    }
}
