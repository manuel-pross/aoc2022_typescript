export function createAlphabetLookup(): Map<string, number> {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabetUpperCase = alpha.map((x) => String.fromCharCode(x));
  const alphabetLowerCase = alphabetUpperCase.map((x) => x.toLowerCase());
  const mergedAlphabet = alphabetLowerCase.concat(alphabetUpperCase);

  const alphabetPriorityMap = new Map<string, number>();
  mergedAlphabet.forEach((el, i) => {
    alphabetPriorityMap.set(el, i + 1);
  });

  return alphabetPriorityMap;
}
