// Just like the movement of air bubbles in the water that rise up to the surface, each element of the array move to the end in each iteration
//Swap adjacent elements which are in wrong order
//For every pass largest element is moved to end
function bubbleSort(arr: number[]){
    let swapped = false;
    for(let i =0; i < arr.length; i++){

        for(let j = 0; j < arr.length - 1 - i; j++){
            if(arr[j] > arr[j+1]){
              let temp = arr[j]
              arr[j] = arr[j+1]
              arr[j+1] = temp
              swapped = true;
            }
        }

     // If no two elements were swapped by inner loop, then break
        if(!swapped) break;
    }
    return arr
}


let result = bubbleSort([3,10, 4, 8, 2, 0, 1])
console.log(result)
