function searchInStrings(arr: string[], target: string): boolean {
  if (arr.length == 0) return false;

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element.charAt(i) === target) {
      return true;
    }
  }

  return false;
}

const search = searchInStrings(["vinay"], "v");
console.log(search);
