const money: number = 100;
let numberOfLaptop = 0;
const laptopPrice: number = 10

export function Recursion(): void {
  // Indirect Recursion:
  buyLaptop(money)

  // Direct Recursion Example:
  console.log(factorialNumber(2))
}


/**
  * @description: Indirect Recursion-> Buy max number of laptop
  * @explanation Call X method from Y method and Y method call X method
  * @Time-complexity: O(n); Call: Order of n for worst case, best case order 1
  * @Space-complexity: O(1); Call: Order of 1
  */
function buyLaptop(money: number): void {
  if (money >= laptopPrice) {
    purchase(money)
  } else {
    console.log("Number of laptop bought", numberOfLaptop, ", Current Balance: ", money)
  }
}

function purchase(money: number): void {
  numberOfLaptop++
  buyLaptop(money - laptopPrice)
}


/**
  * @description: Direct Recursion-> Get Factorial number
  * @explanation Call method from own method
  * @Time-complexity: O(n); Call: Order of n for worst case, best case order 1
  * @Space-complexity: O(1); Call: Order of 1
  */
function factorialNumber(x: number): number {
  if (x == 0) return 1;
  return x * factorialNumber(x - 1)
}