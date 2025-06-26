export function getFormatedTime(date: string) {
  try {
    const tempate = new Intl.DateTimeFormat("en-GB", {
      month: "short",
      year: "numeric",
    });
    return tempate.format(new Date(parseInt(date)));
  } catch {
    return "";
  }
}

export function stringPatternCompare() {
  const str = "birthboy";
  const pattern = "boy";
  const strLength = str.length;
  const patternLength = pattern.length;

  let hash = 0;
  const base = 256,
    prime = 101;

  let highOrder = 1;
  for (let i = 0; i < patternLength - 1; i++) {
    highOrder = (highOrder * base) % prime;
  }
  let textHash = 0;
  for (let i = 0; i < patternLength; i++) {
    const charCode = pattern[i].charCodeAt(0);
    const textCharCode = pattern[i].charCodeAt(0);
    hash = (hash * base + charCode) % prime;
    textHash = (textHash * base + textCharCode) % prime;
  }

  for (let i = 0; i <= strLength - patternLength; i++) {
    if (hash === textHash) {
      let match = true;
      for (let j = 0; j < patternLength; j++) {
        if (str[i + j] !== pattern[j]) {
          match = false;
          break;
        }
      }
      if (match) {
        console.log("Pattern found at index:", i);
      }
    }
    if (i < strLength - patternLength) {
      const toBeAddedChar = str[i + patternLength].charCodeAt(0);
      const toBeRemovedChar = str[i].charCodeAt(0);
      textHash =
        (textHash * base - toBeRemovedChar * highOrder + toBeAddedChar) % prime;
      if (textHash < 0) {
        textHash += prime;
      }
    }
  }
}
