// // Generic intarface

// interface CrushIntarface<T, U = null> {
//   name: string;
//   husband: T;
//   wife?: U;
// }

// const crush1: CrushIntarface<boolean, undefined> = {
//   name: "Imu",
//   husband: true,
// };

// const crush2: CrushIntarface<string, null> = {
//   name: "Imu",
//   husband: "Maruf",
// };

// // const crush3: CrushIntarface<object> = {
// //   name: "Imu",
// //   husband: {
// //     name: "Maruf",
// //     salary: 10000,
// //   },
// // };

// // const crush3: CrushIntarface<{ name: string; salary: number }> = {
// //   name: "Imu",
// //   husband: {
// //     name: "Maruf",
// //     salary: 10000,
// //   },
// // };
// interface HusbendIntarface {
//   name: string;
//   salary: number;
// }

// const crush3: CrushIntarface<HusbendIntarface> = {
//   name: "Imu",
//   husband: {
//     name: "Maruf",
//     salary: 10000,
//   },
// };

// interface PersonalInterface {
//   name: string;
//   age: number;
// }
// const crush4: CrushIntarface<PersonalInterface, PersonalInterface> = {
//   name: "Imu",
//   husband: {
//     name: "Maruf",
//     age: 27,
//   },
//   wife: {
//     name: "rubu",
//     age: 22,
//   },
// };

// // const crush4: CrushIntarface<
// //   { name: string; age: number },
// //   { name: string; age: number }
// // > = {
// //   name: "Imu",
// //   husband: {
// //     name: "Maruf",
// //     age: 27,
// //   },
// //   wife: {
// //     name: "rubu",
// //     age: 22,
// //   },
// // };

// // const crush4: CrushIntarface<object, object> = {
// //   name: "Imu",
// //   husband: {
// //     name: "Maruf",
// //     salary: 10000,
// //   },
// //   wife: {
// //     name: "rubu",
// //     age: 22,
// //   },
// // };

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
