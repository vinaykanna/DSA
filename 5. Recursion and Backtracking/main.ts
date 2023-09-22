function recursion(i: number, n: number) {
  if (i === 10) return; // base condition.
  console.log(i);
  recursion(i + 1, n);
}

recursion(1, 10);
