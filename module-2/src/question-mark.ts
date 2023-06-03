// ternary operator

const age: number = 18;

// if(age>=18){
//     console.log('yes')
// }else{
//     console.log('no')
// }

const isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult);

// nullish coalescing operator
// Null and undefined

const isAuthenticatedUser = null;
const userName = isAuthenticatedUser ?? "Guest";
console.log(userName);

type Manush = {
  name: string;
  age: number;
  address: {
    city: "no city";
    road: "no road";
    home?: "";
  };
};

const manush1: Manush = {
  name: "Manush",
  age: 100,
  address: {
    city: "no city",
    road: "no road",
  },
};

const home = manush1?.address?.home ?? "no home"; // default 'no home'
console.log(home);
