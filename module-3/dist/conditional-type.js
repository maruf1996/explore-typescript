"use strict";
// // a type is dependent on another type
// type a1 = string;
// type a3 = undefined;
// type a4 = number;
// type a2 = a1 extends string ? string : null;
// // nested conditional type
// type d = a1 extends null
//   ? null
//   : a3 extends number
//   ? number
//   : a4 extends null
//   ? null
//   : never;
// type Sheikh = {
//   wife1: string;
//   wife2: string;
// };
// type A = keyof Sheikh;
// type CheckProperty<T, K> = K extends keyof Sheikh ? true : false;
// type CheckWife1 = CheckProperty<Sheikh, "wife2">;
// type Bandhubi = "Imu" | "Mim" | "Rubu";
// type RemoveBandhubi<T, K> = T extends K ? never : T;
// type CurrentBandhubi = RemoveBandhubi<Bandhubi, "Imu">;
