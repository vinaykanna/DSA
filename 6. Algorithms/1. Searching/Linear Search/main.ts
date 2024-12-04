// search the array: return the index if item found
//if item not found return -1
function linearSearch1<Type>(arr: Type[], target: Type): number {
  if (arr.length == 0) return -1;

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element === target) {
      return i;
    }
  }

  return -1;
}

// search the array: return true if item found or false if item not found.
function linearSearch2<Type>(arr: Type[], target: Type): boolean {
  if (arr.length == 0) return false;

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element === target) {
      return true;
    }
  }

  return false;
}

const index = linearSearch1([1, 2, 3, 4, 5, 6, 7, 9], 9);
const isInArray = linearSearch2(
  ["vinay", "kumar", "kishan", "praveen"],
  "kishan"
);
console.log(index);
console.log(isInArray);
