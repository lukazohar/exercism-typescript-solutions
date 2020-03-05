class Words {
  constructor() {}

  count(wordString: string) {
    let wordMap: Map<string, number> = new Map();
    let wordStringArray = wordString
      .replace(/\n|\t/, " ")
      .replace(/\s{1,}/, " ")
      .replace(/^\s{1,}/, "")
      .replace(/\s{0,}$/, "")
      .toLowerCase()
      .split(" ");
    wordStringArray.forEach((word: string) => {
      // @ts-ignore
      wordMap.set(word, wordMap.get(word) + 1 || 1);
    });
    return wordMap;
  }
}

export default Words;
