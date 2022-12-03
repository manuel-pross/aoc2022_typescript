// export const priorityLookup = new Map<string, number>([
//   ["a", 1],
//   ["b", 2],
//   ["c", 3],
//   ["d", 4],
//   ["e", 5],
//   ["f", 6],
//   ["g", 7],
//   ["h", 8],
//   ["i", 9],
//   ["j", 10],
//   ["k", 11],
//   ["l", 12],
//   ["m", 13],
//   ["n", 14],
//   ["o", 15],
//   ["p", 16],
//   ["q", 17],
//   ["r", 18],
//   ["s", 19],
//   ["t", 20],
//   ["u", 21],
//   ["v", 22],
//   ["w", 23],
//   ["x", 24],
//   ["y", 25],
//   ["z", 26],
//   ["A", 27],
//   ["B", 28],
//   ["C", 29],
//   ["D", 30],
//   ["E", 31],
//   ["F", 32],
//   ["G", 33],
//   ["H", 34],
//   ["I", 35],
//   ["J", 36],
//   ["K ", 37],
//   ["z", 38],
//   ["z", 39],
//   ["z", 40],
//   ["z", 41],
//   ["z", 42],
//   ["z", 43],
//   ["z", 44],
//   ["z", 45],
//   ["z", 46],
//   ["z", 47],
//   ["z", 48],
//   ["z", 49],
//   ["z", 50],
//   ["z", 51],
//   ["z", 52],
// ]);

export function createAlphabetLookup(): Map<string, number> {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabetUpperCase = alpha.map((x) => String.fromCharCode(x));
  const alphabetLowerCase = alphabetUpperCase.map((x) => x.toLowerCase());
  const mergedAlphabet = alphabetUpperCase.concat(alphabetLowerCase);

  const alphabetPriorityMap = new Map<string, number>();
  mergedAlphabet.forEach((el, i) => {
    alphabetPriorityMap.set(el, i + 1);
  });

  return alphabetPriorityMap;
}
