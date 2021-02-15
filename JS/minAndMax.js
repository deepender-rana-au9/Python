function min(arr) {
  if (arr.length == 0) {
    return;
  }
  currMin = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < currMin) {
      currMin = arr[i];
    }
  }
  return currMin;
}

function max(arr) {
  if (arr.length == 0) {
    return;
  }
  currMax = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > currMax) {
      currMax = arr[i];
    }
  }
  return currMax;
}

arr = [1, 2, 4, 6, 7, 9, 25, 22, 6];
console.log(`Min is ${min(arr)}`);
console.log(`Max is ${max(arr)}`);
