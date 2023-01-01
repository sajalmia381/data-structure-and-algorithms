
export function SelectionSort(): void {
  const arr = [4, 23, 7, 39, 19, 0, 9, 14]

  console.time("Selection Sort")
  console.log(selectionSort(arr))
  console.timeEnd("Selection Sort")
}


/*
*
* Definition: Align small digit to big digit [0 -> 4 -> 7 -> 9 -> ...]
*
* Time complexity: O(n2); Call: Order of n square
*
* Space complexity: O(1); Call: Order of 1
*
*/
function selectionSort(arr: number[]): number[] {
  let min_index: number, i: number = 0, j: number, temp: number;
  for (i; i < arr.length; i++) {
    min_index = i
    for (j = i + 1; j < arr.length; j++) {
      if (arr[min_index] > arr[j]) {
        min_index = j
      }
    }
    if (min_index !== i) {
      temp = arr[i]
      arr[i] = arr[min_index]
      arr[min_index] = temp
    }
  }
  return arr
}
