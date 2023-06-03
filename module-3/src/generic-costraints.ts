// // Arrow function
// const createArray = <T, U>(param1: T, param2: U): [T, U] => {
//   return [param1, param2];
// };

// const result1 = createArray<string, string>("Bangladesh", "i love my country");
// const result2 = createArray<boolean, [string]>(false, ["USA"]);

// type Name = { name: string };

// const result3 = createArray<Name, boolean>({ name: "Bangladesh" }, false);

// // sparead operator

// type MandatoryTypes = { name: string; age: number; salary: number };
// interface MandatoryInterface {
//   name: string;
//   age: number;
//   salary: number;
// }

// const addMeInMyCrushMind = <T extends MandatoryTypes>(myInfo: T) => {
//   const crush = "Imu";
//   const newData = { ...myInfo, crush };
//   return newData;
// };

// function addMeInMyCrushMind2<T extends MandatoryInterface>(myInfo: T) {
//   const crush = "Imu";
//   const newData = { ...myInfo, crush };
//   return newData;
// }

// type MyInfoType = {
//   name: string;
//   age: number;
//   salary: number;
//   other1: boolean;
//   other2: null;
// };
// const myInfo: MyInfoType = {
//   name: "Maruf",
//   age: 28,
//   salary: 10000,
//   other1: false,
//   other2: null,
// };
// const result4 = addMeInMyCrushMind(myInfo);
// const result5 = addMeInMyCrushMind2(myInfo);
