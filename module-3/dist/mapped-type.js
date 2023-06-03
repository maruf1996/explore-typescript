"use strict";
// const arrayOfNumbers = [1, 2, 3]; //['1','2','3']
// const arrayOfString = arrayOfNumbers.map((number) => number.toString());
// // console.log(arrayOfString);
// type Volume = {
//   height: number;
//   width: number;
//   depth: string;
// };
// type Area<T> = {
//   //   [key in keyof Volume]: Volume[key];
//   //   [key in keyof Volume]: string;
//   //   [key in "width" | "height"]: string;
//   readonly [key in keyof T]: T[key];
// };
// const area1: Area<{ height: number; width: number }> = {
//   height: 10,
//   width: 10,
// };
// type AreaNumber = {
//   height: number;
//   width: number;
// };
// type AreaString = {
//   height: string;
//   width: string;
// };
// type AreaReadOnly = {
//   readonly height: number;
//   readonly width: number;
// };
// const rectangularArea: AreaReadOnly = {
//   height: 10,
//   width: 12,
// };
// // rectangularArea.width = 10;
// type A = AreaNumber["height"]; // look up type
// type B = keyof AreaNumber; // 'width'|'height'
// // const obj={
// //     name:'vokku'
// // }
// // obj['name']
function getArrayItem(arr, index, key) {
    const item = arr[index];
    return item[key];
}
const users = [
    { name: "John", age: 30 },
    { name: "Mary", age: 25 },
];
console.log(getArrayItem(users, 0, "name"));
