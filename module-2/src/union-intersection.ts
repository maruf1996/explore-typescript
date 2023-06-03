type noobDeveloper = {
  name: string;
};

// type juniorDeveloper = {
//   name: string;
//   expertise: string;
//   exprience: number;
// };

type juniorDeveloper = noobDeveloper & {
  expertise: string;
  exprience: number;
};

enum Level {
  junior = "junior",
  mid = "mid",
  senior = "senior",
}

type nextLevelDeveloper = juniorDeveloper & {
  ledership: number;
  //   level: "junior" | "mid" | "senior";
  level: Level;
};

const newDeveloper: noobDeveloper | juniorDeveloper = {
  name: "Maruf Islam",
  expertise: "javascript",
  exprience: 2,
};

const developer: nextLevelDeveloper = {
  name: "Maruf Islam",
  expertise: "typescript",
  exprience: 3,
  ledership: 1,
  level: Level.mid,
};
