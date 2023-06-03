// // keyof guard

// type AlphaNewmeric = string | number;

// function add(p1: AlphaNewmeric, p2: AlphaNewmeric): AlphaNewmeric {
//   if (typeof p1 === "number" && typeof p2 === "number") {
//     return p1 + p2;
//   } else {
//     return p1.toString() + p2.toString();
//   }
// }

// add(1, 2);
// add("1", "2");

// // in guard

// type NormalUserType = {
//   name: string;
// };

// type AdminUserType = {
//   name: string;
//   role: "admin";
// };

// function getUser(user: NormalUserType | AdminUserType) {
//   if ("role" in user) {
//     return `I am an ${user.role}`;
//   } else {
//     return `I am a normal User`;
//   }
// }

// const normalUser1: NormalUserType = { name: "X" };
// const adminUser1: AdminUserType = { name: "Y", role: "admin" };

// console.log(getUser(normalUser1));
// console.log(getUser(adminUser1));

// // instanceof guard
// class Animal {
//   name: string;
//   species: string;

//   constructor(name: string, species: string) {
//     this.name = name;
//     this.species = species;
//   }

//   makeSound() {
//     console.log("I am Making Sound");
//   }
// }

// class Dog extends Animal {
//   constructor(name: string, species: string) {
//     super(name, species);
//   }
//   makeBark() {
//     console.log("I am Barking");
//   }
// }

// class Cat extends Animal {
//   constructor(name: string, species: string) {
//     super(name, species);
//   }
//   makeMeaw() {
//     console.log("I am Meawing");
//   }
// }

// function isDog(animal: Animal): animal is Dog {
//   return animal instanceof Dog;
// }

// function isCat(animal: Animal): animal is Cat {
//   return animal instanceof Cat;
// }

// function getAnimal(animal: Animal) {
//   if (isDog(animal)) {
//     animal.makeBark();
//   } else if (isCat(animal)) {
//     animal.makeMeaw();
//   } else {
//     animal.makeSound();
//   }
// }

// // function getAnimal(animal: Animal) {
// //   if (animal instanceof Dog) {
// //     animal.makeBark();
// //   } else if (animal instanceof Cat) {
// //     animal.makeMeaw();
// //   } else {
// //     animal.makeSound();
// //   }
// // }

// const animal1 = new Dog("V", "Dog"); //instance by dog
// const animal2 = new Cat("N", "Cat"); //instance by cat

// getAnimal(animal1);
// getAnimal(animal2);
