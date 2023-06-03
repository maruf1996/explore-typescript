// interface

// interface IVehicle {
//   name: string;
//   model: string;
// }
// const vehicle: IVehicle = {
//   name: "Car",
//   model: "2000",
// };

interface Vehicle {
  startEngine(): void;
  stopEngine(): void;
  move(): void;
}

class Vehicle implements Vehicle {
  constructor(
    public name: string,
    public brand: string,
    public model: number
  ) {}
  startEngine(): void {
    console.log("I am starting engine");
  }
  stopEngine(): void {
    console.log("I am stoping engine");
  }
  move(): void {
    console.log("I am moving engine");
  }
  test() {
    console.log("I am for testing purpose");
  }
}

const vehicle1 = new Vehicle("Car", "toyota", 2000);

// abstract class

// abstract class Vehicle {
//   constructor(
//     public name: string,
//     public brand: string,
//     public model: number
//   ) {}
//   abstract startEngine(): void;
//   abstract stopEngine(): void;
//   move(): void {
//     console.log("I am moving engine");
//   }
// }

// class Car extends Vehicle {
//   startEngine(): void {
//     console.log("start engine");
//   }
//   stopEngine(): void {
//     console.log("stop engine");
//   }
// }

// const car1 = new Vehicle("Car", "toyota", 2000);
// car1.startEngine;
