"use strict";
// // const rollNumbers1:number[]=[2,3,4,5,6];
// // const rollNumbers2:string[]=['2','3','4']
// // const rollNumbers1: Array<number> = [2, 3, 4, 5, 6];
// // const rollNumbers2: Array<string> = ["2", "3", "4"];
// // const rollNumbers3: Array<boolean> = [true, false];
// type GenericTuple<X, Y> = [X, Y];
// const relation: GenericTuple<string, string> = ["maruf", "imu"];
// // type RelationWithSalaryType = { name: string; salary: number };
// interface RelationWithSalaryIrface {
//   name: string;
//   salary: number;
// }
// const relationWithSalary: GenericTuple<RelationWithSalaryIrface, string> = [
//   { name: "maruf", salary: 20000 },
//   "imu",
// ];
// // const relationWithSalary: GenericTuple<object, string> = [
// //   { name: "maruf", salary: 20000 },
// //   "imu",
// // ];
// const relationWithSalary2: GenericTuple<
//   { name: string; salary: number },
//   string
// > = [{ name: "maruf", salary: 20000 }, "imu"];
// // type GenericArray = Array<number>;
// type GenericArray<T> = Array<T>;
// const rollNumbers1: GenericArray<number> = [2, 3, 4, 5, 6];
// const rollNumbers2: GenericArray<string> = ["2", "3", "4"];
// const rollNumbers3: GenericArray<boolean> = [true, false];
// type nameAndRollType = { name: string; roll: number };
// const userNameAndRollNumber: GenericArray<nameAndRollType> = [
//   {
//     name: "X",
//     roll: 1,
//   },
//   {
//     name: "Y",
//     roll: 2,
//   },
// ];
