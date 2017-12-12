var output = document.getElementById("output");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");

function calc(a, b, s, callback) {
    var result = callback(Number(a), Number(b));
    output.innerHTML += a + " " + s + " " + b + " = " + result + "<br>";
}

function add() {
    calc(num1.value, num2.value, "+", function (a, b) {
        return a + b;
    })
}
function sub() {
    calc(num1.value, num2.value, "-", function (a, b) {
        return a - b;
    })
}
function mult() {
    calc(num1.value, num2.value, "*", function (a, b) {
        return a * b;
    })
}
function div() {
    calc(num1.value, num2.value, "/", function (a, b) {
        return a / b;
    })
}