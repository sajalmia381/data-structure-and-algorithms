const arr: number[] = [1, 2, 5, 7, 8, 9, 13, 14, 45, 56, 78, 89, 100];
export function BinarySearch(): void {
  console.time("Binary Search")
  console.log(findIndex(arr, 13))
  console.timeEnd("Binary Search")
}


/*
*
* Time complexity: O(log n); Call: Order of log n
*
* Space complexity: O(1); Call: Order of 1
*
*/
function findIndex(arr: number[], target: number): number {
  let left: number = 0,
    right: number = arr.length - 1,
    mid!: number;

  while (left < right) {
    mid = Math.floor((left + right) / 2)
    if (arr[mid] === target) {
      return mid
    }
    if (arr[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return -1
}
