function recursion(i: number, n: number){

    if(i === 10) return //break point

    recursion(i + 1, n)
}


recursion(1, 10);
