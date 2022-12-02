// import run from "aocrunner";

// //A for Rock, B for Paper, and C for Scissors
// //X for Rock, Y for Paper, and Z for Scissors
// //X lose,     Y  draw          Z win

// const dummyData = ["A Y", "B X", "C Z"]; //4+1+7

// function calculatePoints(input) {
//   let totalPoints = 0;
//   const lookupPoints = createLookupPoints();
//   input.forEach((el) => {
//     totalPoints += lookupPoints.get(el);
//   });

//   return totalPoints;
// }

// function createRightOutcomes(input) {
//   const lookupOutcomes = createLookupOutcome();

//   const rightOutcomes = [];
//   input.forEach((el) => {
//     rightOutcomes.push(lookupOutcomes.get(el));
//   });

//   return rightOutcomes;
// }

// function createLookupOutcome() {
//   const combinationsMap = new Map();
//   combinationsMap.set("A X", "A Z"); //passt
//   combinationsMap.set("A Y", "A X"); //passt
//   combinationsMap.set("A Z", "A Y"); //passt
//   combinationsMap.set("B X", "B X"); //passt
//   combinationsMap.set("B Y", "B Y"); //passt
//   combinationsMap.set("B Z", "B Z"); //passt
//   combinationsMap.set("C X", "C Y"); //passt
//   combinationsMap.set("C Y", "C Z"); //passt
//   combinationsMap.set("C Z", "C X"); //passt
//   return combinationsMap;
// }

// function createLookupPoints() {
//   const combinationsMap = new Map();
//   combinationsMap.set("A X", 1 + 3);
//   combinationsMap.set("A Y", 2 + 6); //fix
//   combinationsMap.set("A Z", 3 + 0);
//   combinationsMap.set("B X", 1 + 0); //fix
//   combinationsMap.set("B Y", 2 + 3);
//   combinationsMap.set("B Z", 3 + 6);
//   combinationsMap.set("C X", 1 + 6);
//   combinationsMap.set("C Y", 2 + 0);
//   combinationsMap.set("C Z", 3 + 3);
//   return combinationsMap;
// }

// const parseInput = (rawInput) => rawInput;

// const part1 = (rawInput) => {
//   const input = parseInput(rawInput);
//   const splittedData = input.split("\n");
//   const points = calculatePoints(splittedData);
//   return points;
// };

// const part2 = (rawInput) => {
//   const input = parseInput(rawInput);
//   const spread = input.split("\n");

//   let rightOutcomes = createRightOutcomes(spread);
//   const points = calculatePoints(rightOutcomes);

//   return points;
// };

// run({
//   part1: {
//     tests: [
//       // {
//       //   input: ``,
//       //   expected: "",
//       // },
//     ],
//     solution: part1,
//   },
//   part2: {
//     tests: [
//       // {
//       //   input: ``,
//       //   expected: "",
//       // },
//     ],
//     solution: part2,
//   },
//   trimTestInputs: true,
//   onlyTests: false,
// });
