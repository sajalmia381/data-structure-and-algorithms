export function QueuePlayground(): void {

}

// ---------------------------- Queue -----------------------

interface IQueue<T> {
  items: T[],
  size: number,

  // Build-in JS Method
  push(item: T): T | undefined
  pop(): T | undefined
}

/**
 * @description Queue Object
 * @param capacity is max number of queue items, Default queue max 100 of item can be take
 */
export class Queue<T> implements IQueue<T> {
  private _storage: T[] = [];
  // Definition: Actual Static queue property
  head: number = 0;
  tail: number = 0

  constructor(private _capacity: number = 100) { }

  // Properties
  get items(): T[] {
    return this._storage
  }

  get size(): number {
    return this._storage.length;
  };

  /**
   * @description: Method implement via js build-in array method
   */
  push(item: T): T | undefined {
    if (this.size === this._capacity) throw new Error("Storage capacity has reached MAX_LENGTH");
    
    this._storage.push(item)
    return item
  }

  pop(): T | undefined {
    return this._storage.shift()
  };


}

// const queue = new Queue<number>(8);
