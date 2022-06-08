import { adder } from "@org/adder";
import { multiplier } from "@org/multiplier";
import { powerRaiser } from "@org/power-raiser";

export function calculate(sample: string): number { 
  sample = sample.replace(/\s/g, '');
  const sampleArray = [];
  for (let i = 0; i < sample.length; ++i) {
    const char = sample.charAt(i)
    if (char === "+" || char === "*" || char === "^") {
      sampleArray.push(char);
    }
    else {
      if (sampleArray[sampleArray.length - 1] && !(sampleArray[sampleArray.length - 1] === "+" || sampleArray[sampleArray.length - 1] === "*" || sampleArray[sampleArray.length - 1] === "^"))
        sampleArray[sampleArray.length - 1] += char;
      else
        sampleArray.push(char);
    }
  }

  while (sampleArray.length > 1) {
    const powPos = sampleArray.indexOf("^");
    const mulPos = sampleArray.indexOf("*");
    const addPos = sampleArray.indexOf("+");
    if (powPos !== -1) {
      const res = powerRaiser(parseFloat(sampleArray[powPos - 1]), parseFloat(sampleArray[powPos + 1]));
      sampleArray.splice(powPos - 1, 3, res.toString());
    }
    else if (mulPos !== -1) {
      const res = multiplier(parseFloat(sampleArray[mulPos - 1]), parseFloat(sampleArray[mulPos + 1]));
      sampleArray.splice(mulPos - 1, 3, res.toString());
    }
    else if (addPos !== -1) {
      const res = adder(parseFloat(sampleArray[addPos - 1]), parseFloat(sampleArray[addPos + 1]));
      sampleArray.splice(addPos - 1, 3, res.toString());
    }
  }
  return parseFloat(sampleArray[0]);
}
