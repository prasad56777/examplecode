//Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.
function reverseArrayInPlace(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      // Swap elements 
      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }
  
  //Example usage:
  const arr = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arr);
  console.log(arr);
  