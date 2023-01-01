const arr: number[] = [1, 2, 5, 7, 8, 9, 13, 14, 45, 56, 78, 89, 100];
export function LinerSearch(): void {
  console.time("Linear search")
  console.log(findIndex(arr, 13))
  console.timeEnd("Linear search")

  console.time("Linear search with JS Build-in Method")
  console.log(buildInJsSearch(arr, 13))
  console.timeEnd("Linear search with JS Build-in Method")

}


/*
*
* Time complexity: O(n); Call: Order of n
*
* Space complexity: O(1); Call: Order of 1
*
*/

function findIndex(arr: number[], target: number): number {
  let i = 0;
  for (i; i < arr.length; i++) {
    if (arr[i] === target) {
      return i
    }
  }
  return -1
}

function buildInJsSearch(arr: number[], target: number): number {
  return arr.findIndex((num: number) => num === target)
}