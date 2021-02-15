function sortNumberedArray(arr) {
  for (let j = 0; j < arr.length - 1; j++) {
    let currMax = arr[j];
    let maxIndex = j;

    //for loop to get maximum number and index of maximum number
    for (let i = j + 1; i < arr.length; i++) {
      if (arr[i] > currMax) {
        currMax = arr[i];
        maxIndex = i;
      }
    }

    //switching the max values
    arr[maxIndex] = arr[j];
    arr[j] = currMax;
  }
}

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 10];
sortNumberedArray(arr);
console.log(arr);
