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

function createHalfedArray(input: string[]): string[][] {
  let counter = 0;
  let halfedArray: string[][] = [];

  input.forEach((el) => {
    const middle = Math.floor(el.length / 2);
    let firstHalf = "";
    let secondHalf = "";

    for (let index = 0; index < el.length; index++) {
      if (index < middle) firstHalf += el[index];
      else secondHalf += el[index];
    }
    counter++;
    halfedArray.push([firstHalf, secondHalf]);
  });

  return halfedArray;
}

function summarizePriority(input: string[][]): number {
  let sumPriority = 0;
  const lookup = createAlphabetLookup();
  let isGroups = false;

  if (input[0].length >= 3) isGroups = true;

  input.forEach((el) => {
    for (let c of el[0]) {
      if (!isGroups) {
        if (el[1].includes(c)) {
          const newPriority = lookup.get(c) ? lookup.get(c) : 0;
          if (newPriority) sumPriority += newPriority;
          else sumPriority += 0;
          break;
        }
      } else {
        if (el[1].includes(c) && el[2].includes(c)) {
          const newPriority = lookup.get(c) ? lookup.get(c) : 0;
          if (newPriority) sumPriority += newPriority;
          else sumPriority += 0;
          break;
        }
      }
    }
  });
  return sumPriority;
}

function createGroups(input: string[]): string[][] {
  const groups: string[][] = [];
  const group: string[] = [];
  let counter = 1;

  input.forEach((el) => {
    if (counter !== 3) {
      group.push(el);
    } else {
      group.push(el);
      groups.push([...group]);
      group.length = 0;
    }
    if (counter >= 3) counter = 0;

    counter++;
  });

  return groups;
}

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const splittedInput = input.split("\n");
  const halfedArray = createHalfedArray(splittedInput);
  const sumPriority = summarizePriority(halfedArray);
  return sumPriority;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const splittedInput = input.split("\n");
  const groups = createGroups(splittedInput);
  const sumPriority = summarizePriority(groups);
  return sumPriority;
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
