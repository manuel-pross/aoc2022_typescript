import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const dummyData = [
  "    [D]        ",
  "[N] [C]        ",
  "[Z] [M] [P] [H]",
  " 1   2   3   4 ",
  "",
  "move 1 from 2 to 1",
  "move 3 from 1 to 3",
  "move 2 from 2 to 1",
  "move 1 from 1 to 2",
];

let storagesMap = new Map<string, string[]>();

function createEmptyStorageMap(input: string[]) {
  for (const el of input) {
    if (el.includes("1")) {
      const allNumbers: RegExpMatchArray | null = el.match(/[0-9]+/g);
      if (allNumbers) {
        allNumbers.forEach((numberEl) => {
          storagesMap.set(numberEl, []);
        });
      }
    }
    if (el === "") break;
  }
}

function addItemsToStorage(input: string[]) {
  const regExp = /\[([^)]+)\]/;
  for (const el of input) {
    const match = regExp.exec(el)?.input;
    // console.log(matches);
    // regex for chars /[a-z]/i
    if (match) {
      console.log(match);
    }

    if (el === "" || el.includes("1")) break;
  }
}

function createStorageArray(input: string[]): string[][] {
  const allStorages: string[][] = [];
  // console.log(input);
  createEmptyStorageMap(input);
  addItemsToStorage(input);

  return allStorages;
}

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const splittedInput = input.split("\n");
  const storages = createStorageArray(dummyData);
  return 0;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return 0;
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
