"use strict";
const a = "age";
const b = "address";
function getProperty(obj, key) {
    obj[key];
}
const property = getProperty({ name: "Mr. X", age: 100 }, "age");
