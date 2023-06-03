"use strict";
// // normal function
// // default parameter
// function add(num1: number, num2: number = 10) {
//   return num1 + num2;
// }
// add(22, 33);
// // spread operator
// const myFriends = ["hasan", "aktar", "rasel"];
// const newFriend = ["ashraf", "shahnur"];
// const myBestFriend = {
//   fullName: "Abul Khair",
//   age: 29,
// };
// const [bestFriend] = myFriends;
// const { fullName: myFullName } = myBestFriend;
// console.log(myFullName);
// myFriends.push(...newFriend);
// // console.log(myFriends);
// // rest paremeter
// // const greetFiends = (friend1: string, friend2: string, friend3: string): void =>
// //   console.log(`Hi ${friend1}\n Hi ${friend2}\n Hi ${friend3}`);
// // greetFiends("hasan", "akter", "Rasel");
// // const greetFiends = (...friends: string[]): void => console.log(friends);
// // greetFiends("hasan", "akter", "Rasel");
// const greetFiends = (...friends: string[]): void =>
//   friends.forEach((friend) => console.log(`Hi ${friend}`));
// greetFiends("hasan", "akter", "Rasel");
// const addArrow = (num1: number, num2: number): number => num1 + num2;
// const arr = [1, 4, 5, 7];
// const newArray = arr.map((e: number) => e * e);
// const persons: {
//   name: string;
//   balence: number;
//   addBalence(money: number): void;
// } = {
//   name: "Maruf",
//   balence: 5,
//   addBalence(money: number) {
//     console.log(this.balence + money);
//   },
// };
function generateAdder(a) {
    return function (b) {
        return a + b;
    };
}
const addTwo = generateAdder(2);
console.log(addTwo(3));
console.log(addTwo(5));
