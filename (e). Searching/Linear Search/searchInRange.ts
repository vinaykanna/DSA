type Args<Type> = {
  arr: Type[];
  target: Type;
  start: number;
  end: number;
};

function linearSearchInRange<Type>(args: Args<Type>): number {
  let { arr, target, start, end } = args;
  if (arr.length == 0) return -1;
  if (arr.length < start) return -1;

  for (let i = start; i <= end; i++) {
    let element = arr[i];
    if (element === target) {
      return i;
    }
  }

  return -1;
}

const searchInRange = linearSearchInRange<string>({
  arr: ["vinay", "prashanth", "kishan", "praveen", "jany"],
  target: "jany",
  start: 1,
  end: 3,
});
