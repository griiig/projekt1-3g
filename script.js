result = document.getElementById("result");

function to_decimaler(x){
    return Number.parseFloat(x).toFixed(2);
}

function check(){
if (result.innerHTML.length > 13){
    result.innerHTML = "fejl";
}}

function a(){
    console.log("7")
    result.innerHTML += "7";
    check();
}
function b(){
    console.log("8")
    result.innerHTML += "8";
    check();
}
function c(){
    console.log("9")
    result.innerHTML += "9";
    check();
}
function d(){
    console.log("*")
    result.innerHTML += "*";
    check();
}
function e(){
    console.log("4")
    result.innerHTML += "4";
    check();
}
function f(){
    console.log("5")
    result.innerHTML += "5";
    check();   
}
function g(){
    console.log("6")
    result.innerHTML += "6";
    check();
}
function h(){
    console.log("/")
    result.innerHTML += "/";
    check();
}
function i(){
    console.log("1")
    result.innerHTML += "1";
}
function j(){
    console.log("2")
    result.innerHTML += "2";
    check();
}
function k(){
    console.log("3")
    result.innerHTML += "3";
    check();
}
function l(){
    console.log("+")
    result.innerHTML += "+";
    check();
}
function m(){
    console.log("0")
    result.innerHTML += "0";
    check();
}
function n(){
    console.log(".")
    result.innerHTML += ".";
    check();
}
function o(){
    console.log("-")
    result.innerHTML += "-";
    check();
}
function p(){
    console.log("=")
    result.innerHTML = to_decimaler(eval(result.innerHTML));
    
    if(String(result.innerHTML).includes(".00")){
    result.innerHTML = String(result.innerHTML).slice(0,-3);
    }

    check();
}
function z(){
    console.log("c")
    result.innerHTML = "";
}

function y(){
    result.innerHTML = String(result.innerHTML).slice(0,-1);
}

function cg(){
    document.getElementById("body").style.backgroundColor = "grey";
    document.getElementById("textf").style.color = "black";
    document.getElementById("result").style.color = "black";
    document.getElementById("result").style.border = "5px solid white";
}
function cw(){
    document.getElementById("body").style.backgroundColor = "white";
    document.getElementById("textf").style.color = "black";
    document.getElementById("result").style.color = "black";4
    document.getElementById("result").style.border = "5px solid black";
}
function cb(){
    document.getElementById("body").style.backgroundColor = "black";
    document.getElementById("textf").style.color = "white";
    document.getElementById("result").style.color = "white";
    document.getElementById("result").style.border = "5px solid white";
}