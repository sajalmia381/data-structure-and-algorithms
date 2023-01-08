let randomArray: number[] = [4, 23, 7, 39, 19, 0, 9, 14]
let sortedArray: number[] = [2, 4, 5, 6, 8, 9, 11, 14, 16]

export default function (): void {

  console.time("removeByIndex")
  removeByIndex(randomArray, 0)
  console.timeEnd("removeByIndex")

  // console.time("insert")
  // insert(randomArray, 40, 1)
  // console.timeEnd("insert")
}


function removeByIndex(arr: number[], target: number): void {
  /* 
  * Method No. #2 - build-in method
  * Explanation: Slice two part and merge all
  * Time complexity: O(n); Call: Order of n for worst case. one splice cost 0(n)
  * Space complexity: O(1); Call: Order of 1
  */
  // arr.splice(target, 1)


  /* 
  * Method No. #1
  * Explanation: Push backward elements from target index element
  * Time complexity: O(n); Call: Order of n for worst case, best case order 1
  * Space complexity: O(1); Call: Order of 1
  */
  for (let i = target; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1]
    console.log(i)
  }
  arr.pop()
  console.log('Result', arr)
}


// Insert New Element In specific position
function insert(arr: number[], newElement: number, targetIndex: number): void {
  /* 
  * Method No. #2 build-in method -> Best For Use
  * Explanation: Slice two part and merge all
  * Time complexity: O(n); Call: Order of n for worst case. one splice cost 0(n)
  * Space complexity: O(1); Call: Order of 1
  */
  arr.splice(targetIndex, 0, newElement)


  /* 
  * Method No. #1
  * Explanation: Push forward 1 element
  * Time complexity: O(n); Call: Order of n for worst case, best case order 1
  * Space complexity: O(1); Call: Order of 1
  */
  // let i: number = arr.length - 1;
  // for (i; i >= targetIndex; i--) {
  //   arr[i + 1] = arr[i]
  //   if (i === targetIndex) {
  //     arr[i] = newElement
  //   }
  // }

  console.log('Result', arr)
}