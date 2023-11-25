export function InsertionSort(): void {
  const arr = [4, 23, 7, 39, 19, 0, 9, 14];

  console.time("Insertion Sort");
  console.log(insertionSort(arr));
  console.timeEnd("Insertion Sort");
}

/**
 * @approach Align small digit to big digit [0 -> 4 -> 7 -> 9 -> ...]
 * @complexity
 * - Time complexity: O(n2); Call: Worst Case: Order of n square, Best Case: Order of n
 * - Space complexity: O(1); Call: Order of 1
 */
function insertionSort(arr: number[]): number[] {
  let item: number,
    i: number = 1,
    j: number;
  for (i; i < arr.length; i++) {
    item = arr[i];
    j = i - 1;

    while (j >= 0 && arr[j] > item) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = item;
  }
  return arr;
}

const arr = [4, 23, 7, 39, 19, 9, 14];
console.log(insertionSort(arr)); // [4,  7,  9, 14, 19, 23, 39]
