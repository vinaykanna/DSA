let findNumbersWithEventNumberDigits = function (nums: number[]): number {
  let result = 0;
  for (let num of nums) {
    let count = 0;

    num = +num;

    while (num > 0) {
      count++;
      num = Math.trunc(num / 10);
    }
    if (count % 2 == 0) {
      result++;
    }
  }

  return result;
};

let result = findNumbersWithEventNumberDigits([555, 12]);
console.log(result);
