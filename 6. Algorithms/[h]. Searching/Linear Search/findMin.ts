function findMin(arr: number[]): number {
  let ans = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < ans) {
      ans = arr[i];
    }
  }

  return ans;
}

let min = findMin([3, 4, 56, 43, 12, 21, 6, 9, 1]);
console.log(min);
