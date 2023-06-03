type crushType = {
  name: string;
  age?: number;
  profession: string;
  address: string;
};

const crush1: crushType = {
  name: "Imu",
  age: 22,
  profession: "housewife",
  address: "bhola",
};
const crush2: crushType = {
  name: "Mim",
  profession: "housewife",
  address: "pabna",
};
const crush3: crushType = {
  name: "Rubu",
  age: 22,
  profession: "housewife",
  address: "rangpur",
};

type crushMarredType = boolean;
const crushMarred: crushMarredType = true;

type courseType = string;
const courses: courseType = "Nex Level Web Development";

type operationType = (x: number, y: number) => number;
const calculate = (
  num1: number, //10
  num2: number, //20
  operation: operationType //(x,y)=> x+y || (10,20)=>10+20
) => {
  return operation(num1, num2);
};

calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x - y);
calculate(10, 20, (x, y) => x * y);
