import run from "aocrunner";
import { createAlphabetLookup } from "../utils/lookups.js";

const parseInput = (rawInput: string) => rawInput;

const dummyData = [
  "vJrwpWtwJgWrhcsFMMfFFhFp",
  "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
  "PmmdzqPrVvPwwTWBwg",
  "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
  "ttgJtRGJQctTZtZT",
  "CrZsJsPPZsGzwwsLwLmpwMDw",
];

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const splittedInput = input.split("\n");
  const lookup = createAlphabetLookup();

  const halfedArray: string[][] = [];
  let counter = 0;

  dummyData.forEach((el) => {
    const middle = Math.floor(el.length / 2);
    let firstHalf = "";
    let secondHalf = "";

    for (let index = 0; index < el.length; index++) {
      if (index < middle) firstHalf += el[index];
      else secondHalf += el[index];
    }
    counter++;
    halfedArray[counter].push(firstHalf);
    halfedArray[counter].push(secondHalf);
  });
  console.log(halfedArray);

  // console.log(halfedArray);

  return;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return;
};

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
