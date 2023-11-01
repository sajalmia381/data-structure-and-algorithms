
export function BubbleSort(): void {
  const arr = [4, 23, 7, 39, 19, 0, 9, 14]

  console.time("Bubble Sort")
  console.log(bubbleSort(arr))
  console.timeEnd("Bubble Sort")
}


/**
  *
  * Explanation: Align big digit to small digit [... <- 14 <- 19 <- 23 <- 39]
  *
  * Time complexity: O(n2); Call: Order of n square
  *
  * Space complexity: O(1); Call: Order of 1
  *
  */
function bubbleSort(arr: number[]): number[] {
  let i: number = 0, j: number, temp: number;
  for (i; i < arr.length; i++) {
    for (j = 0; j < arr.length - (i + 1); j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}
