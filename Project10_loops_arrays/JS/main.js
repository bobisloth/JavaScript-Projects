
var Instrumernts = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instrumernts.length; Y++) {
        Content += Instrumernts[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function counting() {
    let digit = "";
    let X = 1;
    while (X < 11) {
        digit += "<br>" + X;
        X++;
    }
    document.getElementById("count").innerHTML = digit;
}

