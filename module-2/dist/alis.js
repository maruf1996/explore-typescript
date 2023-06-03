"use strict";
const crush1 = {
    name: "Imu",
    age: 22,
    profession: "housewife",
    address: "bhola",
};
const crush2 = {
    name: "Mim",
    profession: "housewife",
    address: "pabna",
};
const crush3 = {
    name: "Rubu",
    age: 22,
    profession: "housewife",
    address: "rangpur",
};
const crushMarred = true;
const courses = "Nex Level Web Development";
const calculate = (num1, //10
num2, //20
operation //(x,y)=> x+y || (10,20)=>10+20
) => {
    return operation(num1, num2);
};
calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x - y);
calculate(10, 20, (x, y) => x * y);
