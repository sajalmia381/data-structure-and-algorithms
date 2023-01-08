


export function StackPlayground(): void {
  const arr = [4, 23, 7, 39, 19, 0, 9, 14]

  console.time("Bubble Sort")
  const stack = new Stack()
  console.timeEnd("Bubble Sort")
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  length: number;
}


class Stack<T> implements IStack<T> {
  private storage: T[] = [];

  constructor(private capacity: number = Infinity) { }

  push(item: T): void {
    if (this.length === this.capacity) {
      throw Error("Stack has reached max capacity, You can't add more item")
    }
    this.storage.push(item)
  }

  pop(): T | undefined {
    return this.storage.pop()
  }
  peek(): T | undefined {
    return this.storage[this.length - 1]
  };

  get length(): number {
    return this.storage.length
  }
}