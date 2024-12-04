function floorOfNumber(arr: number[], target: number) {
  if (target > arr[arr.length - 1]) {
    return -1;
  }

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (target === arr[mid]) {
      return arr[mid];
    }

    if (target > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return end;
}

let floor = floorOfNumber([2, 5, 8, 14, 19, 29], 30);
console.log(floor);
