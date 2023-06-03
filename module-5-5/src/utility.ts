// Pick

interface Person {
  name: string;
  email?: string;
  contactNo: string;
}

type Email = Pick<Person, "email">;
type ContactNo = Pick<Person, "contactNo">;
type Contact = Pick<Person, "contactNo" | "email">;

// Omit
type Name = Omit<Person, "email" | "contactNo">;

// Partial and Required
type OPtional = Partial<Person>;
type RequiredProps = Required<Person>;

const person: Readonly<Person> = {
  name: "Kutub",
  email: "kutub@gmail.com",
  contactNo: "121212",
};
// person.name = "Karim";

// Record type

// type myObj = {
//   a: string;
//   b: string;
//   c: string;
// };

// using index signature
// type myObj = {
//   [key: string]: string;
// };

// Record
// type myObj = Record<string, string>;
type myObj = Record<"a" | "b" | "c", string>;

const obj: myObj = {
  a: "1",
  b: "2",
  c: "3",
};
