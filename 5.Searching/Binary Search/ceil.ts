function ceilOfNumber(arr: number[], target: number) {
  if (target > arr[arr.length - 1]) {
    return -1;
  }

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    console.log("start", start, "end", end, "mid", mid, "item", arr[mid]);
    if (target === arr[mid]) {
      return arr[mid];
    }

    if (target > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return start;
}

let result = ceilOfNumber([2, 5, 8, 14, 19, 29], 30);
console.log(result);
