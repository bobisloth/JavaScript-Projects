function full_sentence() { //combines str var into a sentence
    var p_1 = "I have ";
    var p_2 = "made this ";
    var p_3 = "into a complete ";
    var p_4 = "sentence.";
    var whole_sentence = p_1.concat(p_2, p_3, p_4);
    document.getElementById("concatenate").innerHTML = whole_sentence;

}

function slice_method() { //displays a string which is found on the position stated in  slice()
    var sentence = "All work and no play makes Jhonny a dull boy";
    var section = sentence.slice(27, 33);
    document.getElementById("slice").innerHTML = section;
}

function uppercase() { //transforms the targeted string to uppercASE
    var a = "uppercase";
    var b = a.toUpperCase();
    document.getElementById("upercase").innerHTML=b;
}

function lowercase() { //transforms the str into lowercase
    var a = "lowercase";
    var b = a.toLowerCase();
    document.getElementById("lowercase").innerHTML = b;
}

function search_meth() { //searches for a word and returns back its position
    var a = ">To successfully write and execute the search method.";
    document.getElementById("search").innerHTML= a.search("search");
}

function str_meth() { // returns a number as a string
    var a = 182;
    document.getElementById("num_to_str").innerHTML = a.toString();
}

function precision_meth() { // formats a number to a specified lenght
    var a = 3.14159265359;
    document.getElementById("precision").innerHTML = a.toPrecision(3);
}

function tofix_meth() { // formats a number to a specified lenght
    var a = 3.14159265359;
    document.getElementById("fix").innerHTML = a.toFixed(5);
}

function valueof_meth() { // returns the primitive value of a number
    var a = 3.14159265359;
    document.getElementById("value").innerHTML = a.valueOf();
}
