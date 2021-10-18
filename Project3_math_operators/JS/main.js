window.alert(Math.random()); //random number 0-1

//substraction
function math_function() { 
    var substraction = 5 - 2;
    document.getElementById("Math").innerHTML="5 - 2= " + substraction;
}

//addition
function math_function1() {
    var sum = 5 + 2;
    document.getElementById("Math1").innerHTML = "5 + 2= " + sum;
}

//multiplication
function math_function2() {
    var mul = 5 * 2;
    document.getElementById("Math2").innerHTML = "5 * 2= " + mul;
}

//division
function math_function3() {
    var div = 5 / 2;
    document.getElementById("Math3").innerHTML = "5 / 2= " + div;
}

//modulus
function math_function4() {
    var mod = 5 % 2;
    document.getElementById("Math4").innerHTML = "when you divide 5  and 2, the remainder is: " + mod;
}

//increment
function math_function5() {
    var a = 5;
    a++;
    document.write(a);
}

//decrement
function math_function6() {
    var a = 5;
    a--;
    document.write(a);
}
