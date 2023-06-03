"use strict";
// // Arrow function
// // const createArray = (param: string): string[] => {
// //   return [param];
// // };
// // const createArray = <T>(param: T): T[] => {
// //   return [param];
// // };
// // const createArray = <T>(param: T): T[] => {
// //   return [param];
// // };
// // const result1 = createArray<string>("Bangladesh");
// // const result2 = createArray<boolean>(false);
// // const result3 = createArray<object>({ name: "Bangladesh" });
// // const result4 = createArray<{ name: string }>({ name: "Bangladesh" });
// const createArray = <T, U>(param1: T, param2: U): [T, U] => {
//   return [param1, param2];
// };
// const result1 = createArray<string, string>("Bangladesh", "i love my country");
// const result2 = createArray<boolean, [string]>(false, ["USA"]);
// type Name = { name: string };
// const result5 = createArray<Name, boolean>({ name: "Bangladesh" }, false);
// // sparead operator
// // const crush = "Imu";
// // const myInfo = {
// //   name: "Maruf",
// //   age: 28,
// //   salary: 10000,
// // };
// // const newData = { ...myInfo, crush };
// const addMeInMyCrushMind = <T>(myInfo: T) => {
//   const crush = "Imu";
//   const newData = { ...myInfo, crush };
//   return newData;
// };
// function addMeInMyCrushMind2<T>(myInfo: T) {
//   const crush = "Imu";
//   const newData = { ...myInfo, crush };
//   return newData;
// }
// const myInfo = {
//   name: "Maruf",
//   age: 28,
//   salary: 10000,
// };
// const result6 = addMeInMyCrushMind(myInfo);
// const result7 = addMeInMyCrushMind2(myInfo);
