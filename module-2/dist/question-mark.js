"use strict";
// ternary operator
var _a, _b;
const age = 18;
// if(age>=18){
//     console.log('yes')
// }else{
//     console.log('no')
// }
const isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult);
// nullish coalescing operator
// Null and undefined
const isAuthenticatedUser = null;
const userName = isAuthenticatedUser !== null && isAuthenticatedUser !== void 0 ? isAuthenticatedUser : "Guest";
console.log(userName);
const manush1 = {
    name: "Manush",
    age: 100,
    address: {
        city: "no city",
        road: "no road",
    },
};
const home = (_b = (_a = manush1 === null || manush1 === void 0 ? void 0 : manush1.address) === null || _a === void 0 ? void 0 : _a.home) !== null && _b !== void 0 ? _b : "no home"; // default 'no home'
console.log(home);
