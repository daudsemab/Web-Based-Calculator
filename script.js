alert("Thansk for using, made with ❤ by Daud Semab.\nGithub Profile: github.com/daudsemab");
var num0 = document.querySelector("#num0");
var num1 = document.querySelector("#num1");
var num2 = document.querySelector("#num2");
var num3 = document.querySelector("#num3");
var num4 = document.querySelector("#num4");
var num5 = document.querySelector("#num5");
var num6 = document.querySelector("#num6");
var num7 = document.querySelector("#num7");
var num8 = document.querySelector("#num8");
var num9 = document.querySelector("#num9");
var dotBtn = document.querySelector("#dot")
var oprAddition = document.querySelector("#oprAddition");
var oprSubtraction = document.querySelector("#oprSubtraction");
var oprMultiplication = document.querySelector("#oprMultiplication");
var oprDivision = document.querySelector("#oprDivision");
var clrBtn = document.querySelector("#clrBtn");
var evalBtn = document.querySelector("#eval");
var delBtn = document.querySelector("#del");
var equation = document.querySelector("#equation");
var resultScreen = document.querySelector("#resultScreen");
var result = "";

function deleteCharacter() {
    equation.textContent = equation.textContent.slice(0, -1);
    clearScreen();
    if (equation.textContent.length == 0) {
        equation.textContent = "0";
    }
}

function include0() {
    if (equation.textContent.length === 1 && equation.textContent == 0) {
        equation.textContent = "0";
    } else {
        equation.textContent = equation.textContent.concat(num0.textContent);
        clearScreen();
    }
}

function include1() {
    if (equation.textContent.length === 1 && equation.textContent == 0) {
        equation.textContent = num1.textContent;
    } else {
        equation.textContent = equation.textContent.concat(num1.textContent);
        clearScreen();
    }
}

function include2() {
    if (equation.textContent.length === 1 && equation.textContent == 0) {
        equation.textContent = num2.textContent;
    } else {
        equation.textContent = equation.textContent.concat(num2.textContent);
        clearScreen();
    }
}

function include3() {
    if (equation.textContent.length === 1 && equation.textContent == 0) {
        equation.textContent = num3.textContent;
    } else {
        equation.textContent = equation.textContent.concat(num3.textContent);
        clearScreen();
    }
}

function include4() {
    if (equation.textContent.length === 1 && equation.textContent == 0) {
        equation.textContent = num4.textContent;
    } else {
        equation.textContent = equation.textContent.concat(num4.textContent);
        clearScreen();
    }
}

function include5() {
    if (equation.textContent.length === 1 && equation.textContent == 0) {
        equation.textContent = num5.textContent;
    } else {
        equation.textContent = equation.textContent.concat(num5.textContent);
        clearScreen();
    }
}

function include6() {
    if (equation.textContent.length === 1 && equation.textContent == 0) {
        equation.textContent = num6.textContent;
    } else {
        equation.textContent = equation.textContent.concat(num6.textContent);
        clearScreen();
    }
}

function include7() {
    if (equation.textContent.length === 1 && equation.textContent == 0) {
        equation.textContent = num7.textContent;
    } else {
        equation.textContent = equation.textContent.concat(num7.textContent);
        clearScreen();
    }
}

function include8() {
    if (equation.textContent.length === 1 && equation.textContent == 0) {
        equation.textContent = num8.textContent;
    } else {
        equation.textContent = equation.textContent.concat(num8.textContent);
        clearScreen();
    }
}

function include9() {
    if (equation.textContent.length === 1 && equation.textContent == 0) {
        equation.textContent = num9.textContent;
    } else {
        equation.textContent = equation.textContent.concat(num9.textContent);
        clearScreen();
    }
}

function includeDot() {
    if (equation.textContent.length === 1 && equation.textContent == 0) {
        equation.textContent = "0.";
    } else if (equation.textContent.substr("-1") == ".") {
        alert("Alert! Your math expression is going wrong. You clicked '.' twice in row.");
    } else {
        equation.textContent = equation.textContent.concat(dotBtn.textContent);
        clearScreen();
    }
}

function clearScreen() {
    result = "";
    resultScreen.textContent = result;
}

function clearAll() {
    equation.textContent = "0";
    clearScreen();
}

function includeOprAddition() {
    if (equation.textContent.length === 1 && equation.textContent == 0) {
        equation.textContent = "0 + ";
    } else if (equation.textContent.substr(-3) == " + ") {
        alert("Alert! you clicked '+' operator twice in row.");
        equation.textContent = equation.textContent;
    } else {
        equation.textContent = equation.textContent.concat(" + ");
        clearScreen();
    }
}

function includeOprSubtraction() {
    if (equation.textContent.length === 1 && equation.textContent == 0) {
        equation.textContent = "0 - ";
    } else if (equation.textContent.substr(-3) == " - ") {
        alert("Alert! you clicked '-' operator twice in row.");
        equation.textContent = equation.textContent;
    } else {
        equation.textContent = equation.textContent.concat(" - ");
        clearScreen();
    }
}

function includeOprMultiplication() {
    if (equation.textContent.length === 1 && equation.textContent == 0) {
        equation.textContent = "0 * ";
    } else if (equation.textContent.substr(-3) == " * ") {
        alert("Alert! you clicked '*' operator twice in row.");
        equation.textContent = equation.textContent;
    } else {
        equation.textContent = equation.textContent.concat(" * ");
        clearScreen();
    }
}

function includeOprDivision() {
    if (equation.textContent.length === 1 && equation.textContent == 0) {
        equation.textContent = "0 / ";
    } else if (equation.textContent.substr(-3) == " / ") {
        alert("Alert! you clicked '/' operator twice in row.");
        equation.textContent = equation.textContent;
    } else {
        equation.textContent = equation.textContent.concat(" / ");
        clearScreen();
    }
}

function evaluateEquation() {
    try {
        result = eval(equation.textContent);
        resultScreen.textContent = result;
    }
    catch {
        result = "Error! Expression is not valid.";
        resultScreen.textContent = result;
    }
}

num0.addEventListener("click", include0);
num1.addEventListener("click", include1);
num2.addEventListener("click", include2);
num3.addEventListener("click", include3);
num4.addEventListener("click", include4);
num5.addEventListener("click", include5);
num6.addEventListener("click", include6);
num7.addEventListener("click", include7);
num8.addEventListener("click", include8);
num9.addEventListener("click", include9);
dotBtn.addEventListener("click", includeDot);
delBtn.addEventListener("click", deleteCharacter);
clrBtn.addEventListener("click", clearAll);
oprAddition.addEventListener("click", includeOprAddition);
oprSubtraction.addEventListener("click", includeOprSubtraction);
oprMultiplication.addEventListener("click", includeOprMultiplication);
oprDivision.addEventListener("click", includeOprDivision);
evalBtn.addEventListener("click", evaluateEquation);
