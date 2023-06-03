// // Mocking

// // json place holder

// interface iTodo {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }

// const getTodo = async (): Promise<iTodo> => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   return await res.json();
// };

// const getTodoData = async (): Promise<void> => {
//   const result = await getTodo();
//   console.log(result);
// };
// getTodoData();

// const makePromise = (): Promise<string> => {
//   return new Promise<string>((resolve, reject) => {
//     const data: string = "Data is fached";
//     if (data) {
//       resolve(data);
//     } else {
//       reject("Failed to Fached data");
//     }
//   });
// };

// const getPromiseData = async (): Promise<string> => {
//   const data = await makePromise();
//   return data;
// };

// interface DataType {
//   data: string;
// }
// // type DataType = {
// //   data: string;
// // };

// const makePromiseObject = (): Promise<DataType> => {
//   return new Promise<DataType>((resolve, reject) => {
//     const data: DataType = { data: "Data is fached" };
//     if (data) {
//       resolve(data);
//     } else {
//       reject("Failed to Fached data");
//     }
//   });
// };

// const getPromiseDataObject = async (): Promise<DataType> => {
//   const data = await makePromiseObject();
//   return data;
// };

// const makePromiseBoolean = (): Promise<boolean> => {
//   return new Promise<boolean>((resolve, reject) => {
//     const data: boolean = false;
//     if (data) {
//       resolve(data);
//     } else {
//       reject("Failed to Fached data");
//     }
//   });
// };

// const getPromiseDataBoolean = async (): Promise<boolean> => {
//   const data = await makePromiseBoolean();
//   return data;
// };
// // Promise<string> Promise<boolean> Promise<object>
