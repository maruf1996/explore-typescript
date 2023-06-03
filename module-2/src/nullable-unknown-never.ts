const searchName = (value: string | null) => {
  if (value === null) {
    console.log("there is nothing to search");
  } else {
    console.log("searching");
  }
};
searchName("mezba");

const getMyCarSpeed = (speed: unknown) => {
  if (typeof speed === "number") {
    const convertedSpeed = (speed * 1000) / 3600;
    console.log(convertedSpeed);
  }
  if (typeof speed === "string") {
    const [value, unit] = speed.split(" ");
    const convertedSpeed = (parseFloat(value) * 1000) / 3600;
    console.log(convertedSpeed);
  } else {
    console.log("this is wrong type");
  }
};
getMyCarSpeed(10);
getMyCarSpeed("10 kmh^-1");

function throwError(message: string): never {
  // throw new Error("Error is mortal");
  throw new Error(message);
}
throwError("error hoyeche");
