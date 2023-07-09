// import { add as addTwo , substract, multiply, devide} from "./module";
import average, * as Methods from "./module";

const add = (param1: number, param2: number, param3: number): number => {
  return param1 + param2 + param3;
};

const resetAddTwo = Methods.add(4, 6);
const res = average(4, 6);
console.log(resetAddTwo);
// const resetAddTwo = addTwo(4, 6);
