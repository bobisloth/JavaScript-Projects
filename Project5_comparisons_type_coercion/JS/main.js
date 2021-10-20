//Not a number
function my_function() {
    document.getElementById("test").innerHTML = 0/0;
    document.getElementById("test1").innerHTML = isNaN("string");
    document.getElementById("test2").innerHTML =isNaN('007');

}

document.write(typeof 5);
document.write("<br>");//line break
document.write(2E310); //floating point infinity
document.write("<br>");//line break
document.write(-2E310); //floating point negative infinity
document.write("<br>");//line break
document.write(10>2); //boolean logic T
document.write("<br>");//line break
document.write(10 < 2);//boolean logic F
console.log(2 + 2); //displaying data in the console
document.write("<br>");//line break
document.write("10" + 5);//coercion
document.write("<br>");//line break
document.write(10==2);
document.write("<br>");//line break
document.write(10 == 10);
document.write("<br>");//line break
document.write(10 === 2);
document.write("<br>");//line break
document.write(10 < 2 && 10 > 2); //and operator-false
document.write("<br>");//line break
document.write(10 > 2 && 2 > 1); //and operator true
document.write("<br>");//line break
document.write(10 < 2 || 7 < 3); //OR operator - false
document.write("<br>");
document.write(10 < 2 || 5 > 4); //OR operator - true

//NOT operator
function not() {
    document.getElementById("NotOp").innerHTML = !(20 > 10);
    document.getElementById("NotOp1").innerHTML = !(20 < 10);

}