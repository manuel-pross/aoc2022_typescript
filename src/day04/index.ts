import run from "aocrunner";

interface Section {
  begin: number;
  end: number;
  range: number[];
}

const parseInput = (rawInput: string) => rawInput;

const dummyData = [
  "2-4,6-8",
  "2-3,4-5",
  "5-7,7-9",
  "2-8,3-7",
  "6-6,4-6",
  "2-6,4-8",
];

function getAllSections(input: string[]): Section[][] {
  const allSections: Section[][] = [];

  input.forEach((el) => {
    const firstSectionArr: Section[] = [];
    const secondSectionArr: Section[] = [];

    const allNumbers: RegExpMatchArray | null = el.match(/[0-9]+/g);

    let firstSectionNumber1 = 0;
    let firstSectionNumber2 = 0;
    let secondSectionNumber1 = 0;
    let secondSectionNumber2 = 0;

    if (allNumbers) {
      firstSectionNumber1 = parseInt(allNumbers[0]);
      firstSectionNumber2 = parseInt(allNumbers[1]);
      secondSectionNumber1 = parseInt(allNumbers[2]);
      secondSectionNumber2 = parseInt(allNumbers[3]);
    }

    const firstSectionRange: number[] = [];
    const secondSectionRange: number[] = [];

    for (let i = firstSectionNumber1; i <= firstSectionNumber2; i++) {
      firstSectionRange.push(i);
    }

    for (let i = secondSectionNumber1; i <= secondSectionNumber2; i++) {
      secondSectionRange.push(i);
    }

    firstSectionArr.push({
      begin: firstSectionNumber1,
      end: firstSectionNumber2,
      range: firstSectionRange,
    });

    secondSectionArr.push({
      begin: secondSectionNumber1,
      end: secondSectionNumber2,
      range: secondSectionRange,
    });

    const twoSectionsArr = firstSectionArr.concat(secondSectionArr);

    allSections.push([...twoSectionsArr]);
  });
  return allSections;
}

function calcAssignmentContainments(input: Section[][]): number {
  let sumContainments = 0;

  input.forEach((el) => {
    if (
      (el[0].begin >= el[1].begin && el[0].end <= el[1].end) ||
      (el[1].begin >= el[0].begin && el[1].end <= el[0].end)
    ) {
      sumContainments++;
    }
  });

  return sumContainments;
}

function calcOverallContainments(input: Section[][]): number {
  let sumContainments = 0;
  input.forEach((el) => {
    for (const i of el[0].range) {
      const foundSection2 = el[1].range.find((el) => el === i);

      if (foundSection2) {
        sumContainments++;
        break;
      }
    }
  });

  return sumContainments;
}

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const splittedInput = input.split("\n");
  const allSections = getAllSections(splittedInput);
  // console.log(allSections);
  const allContainments = calcAssignmentContainments(allSections);
  return allContainments;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const splittedInput = input.split("\n");
  const allSections = getAllSections(splittedInput);
  const allContainments = calcOverallContainments(allSections);

  return allContainments;
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
