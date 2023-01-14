export function QueuePlayground(): void {

  const myQueue = new MyQueue<string>(5)

  myQueue.enqueue("Hola1")
  myQueue.enqueue("Hola2")
  myQueue.enqueue("Hola3")
  myQueue.enqueue("Hola4")
  myQueue.enqueue("Hola5")
  // myQueue.dequeue()
  // myQueue.enqueue("Hola7")
  // myQueue.enqueue("Hola8")
  // myQueue.dequeue()
  // myQueue.enqueue("Hola9")
  myQueue.dequeue()
  myQueue.dequeue()
  myQueue.dequeue()
  myQueue.dequeue()
  myQueue.dequeue()





  console.log("items: ", myQueue.items)
  // console.log("size: ", myQueue.size)
  // console.log('Head: ', myQueue.head)
  // console.log('Tail: ', myQueue.tail)
  console.log('Actual Size: ', myQueue.size)
}

// ---------------------------- Queue -----------------------

interface IQueue<T> {
  items: T[],
  size: number,

  // Build-in JS Method
  push(item: T): T | undefined
  pop(): T | undefined
}

/*
 * Definition: Queue Object
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
  /*
   * Definition: Method implement via js build-in array method
   * -----------------------------------------------------------
   */
  push(item: T): T | undefined {
    if (this.size === this._capacity) {
      throw new Error("Storage capacity has reached MAX_LENGTH");
    }
    this._storage.push(item)
    return item
  }

  pop(): T | undefined {
    return this._storage.shift()
  };


}

// const queue = new Queue<number>(8);


/*
 * Definition: Circular Queue
 * @param: capacity is max number of queue items, Default queue 100 of item can be take
 */
interface IMyQueue<T> {
  items: T[];
  size: number;
  head: number;
  tail: number;

  enqueue(item: T): T | undefined;
  dequeue(): T | undefined;
}

class MyQueue<T> implements IMyQueue<T> {
  private _storage: T[] = [];
  head: number = 0;
  tail: number = 0;

  constructor(private _capacity: number = 100) {
    this._storage.length = this._capacity + 1
  }

  get items(): T[] {
    return this._storage
  }

  get size(): number {
    if (this.head < this.tail) {
      return this.tail - this.head
    } else if (this.head > this.tail) {
      return (this._capacity - this.head) + this.tail + 1
    }
    return 0
  }
  
  /*
   * Description: Push Item To Circler Queue
   * @param Item type of T
   * @return: When successfully pushed it's return item, If failed, return undefined
   * Time Complexity: O(1)
   * Space Complexity: O(0)
   */
  enqueue(item: T): T | undefined {
    if (((this.tail + 1) % (this._capacity + 1)) === this.head) {
      // throw new Error("Queue is full!!! Maximum capacity of storage reached!!!")
      console.error("Queue is full!!! Maximum capacity of storage reached!!!", `Item: ${item}`)
      return undefined
    }
    this._storage[this.tail] = item;
    this.tail = (this.tail + 1) % (this._capacity + 1)
    return item
  }

  /*
   * Description: Remove Item From Circler Queue
   * @return: When successfully remove it's return item, If failed, return undefined
   * Time Complexity: O(1)
   * Space Complexity: O(0)
   */
  dequeue(): T | undefined {
    if (this.head === this.tail) {
      console.error("Queue is empty!!!")
      return undefined
    }
    const item = this._storage[this.head];
    this.head = (this.head + 1) % (this._capacity + 1)

    return item
  }

}
