function binarySearch(arr: number[], target: number): number {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    let isAsc = arr[start] < arr[end];

    if (target === arr[mid]) {
      return mid;
    }

    if (isAsc) {
      if (target > arr[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else {
      if (target < arr[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1;
}

let result = binarySearch(
  [-18, -16, -10, 0, 13, 17, 25, 27, 67, 98, 120, 234, 567],
  567
);

console.log(result);
