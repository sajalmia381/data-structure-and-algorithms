
/**
 * @approach Align big digit to small digit [... <- 4 <- 7 <- 9]
 * @complexity
 * - Time complexity: O(n2); Call: Order of n square
 * - Space complexity: O(1); Call: Order of 1
 */
function bubbleSort(arr: number[]): number[] {
  let i: number = 0,
    j: number,
    temp: number;
  for (i; i < arr.length; i++) {
    for (j = 0; j < arr.length - (i + 1); j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}


const arr = [4, 7, 9, 3, 1];
console.log(bubbleSort(arr)); // [ 1, 3, 4, 7, 9 ]