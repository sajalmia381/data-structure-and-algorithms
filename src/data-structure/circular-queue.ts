/**
 * @description Queue Interface
 * @type {interface}
 */
export interface IQueue<T> {
  items: T[];
  size: number;
  head: number;
  tail: number;

  enqueue(item: T): T | undefined;
  dequeue(): T | undefined;
}

/**
 * @description: Circular Queue
 * @implements {IQueue<T>}
 * @example
 * ```ts
 * const queue = new Queue<string>(5);
 * queue.enqueue("Hola1");
 * queue.dequeue();
 * ```
 */
export class Queue<T> implements IQueue<T> {
  private _storage: T[] = [];
  public head: number = 0;
  public tail: number = 0;

  /**
   * @param {number} [_capacity=100] - capacity is max number of queue items, Default queue 100 of item can be take
   */
  constructor(private _capacity: number = 100) {
    this._storage.length = this._capacity + 1;
  }

  /**
   * @return {number[]} queue storage
   */
  get items(): T[] {
    if (this.head < this.tail) return this._storage.slice(this.head, this.tail);
    if (this.head > this.tail) {
      const _items = [...this._storage.slice(this.head)]
      if (this.tail > 0) {
        _items.concat(this._storage.slice(0, this.tail))
        return  _items.concat(this._storage.slice(0, this.tail))
      }
      return _items
    }
    return [];
  }

  /**
   * @return {number} queue size
   */
  get size(): number {
    if (this.head < this.tail) return this.tail - this.head;
    if (this.head > this.tail)
      return this._capacity - this.head + this.tail + 1;
    return 0;
  }

  /**
   * @param {T} item
   * @return {T | undefined} When successfully pushed it's return item, If failed, return undefined
   *
   * @description Push Item To Circler Queue
   * @Time-Complexity: O(1)
   * @Space-Complexity: O(1)
   */
  enqueue(item: T): T | undefined {
    if ((this.tail + 1) % (this._capacity + 1) === this.head) return undefined; // console.error("Queue is full!!! Maximum capacity of storage reached!!!", `Item: ${item}`)
    this._storage[this.tail] = item;
    this.tail = (this.tail + 1) % (this._capacity + 1);
    return item;
  }

  /**
   * @return {T | undefined} When successfully remove it's return item, If failed, return undefined
   *
   * @description: Remove Item From Circler Queue
   * @Time-Complexity: O(1)
   * @Space-Complexity: O(1)
   */
  dequeue(): T | undefined {
    if (this.head === this.tail) return undefined; // console.error("Queue is empty!!!")
    const item = this._storage[this.head];
    this.head = (this.head + 1) % (this._capacity + 1);
    return item;
  }
}

// Run
(function () {
  const queue = new Queue<string>(5);

  queue.enqueue("Hola1");
  queue.enqueue("Hola2");
  queue.enqueue("Hola3");
  console.log(queue.items); // [ 'Hola1', 'Hola2', 'Hola3' ]
  queue.dequeue()
  queue.enqueue("Hola4");
  console.log(queue.items); // [ 'Hola2', 'Hola3', 'Hola4' ]
  console.log("Actual Size: ", queue.size); // Actual Size:  3
  console.log("Head: ", queue.head); // Head:  1
  console.log("Tail: ", queue.tail); // Tail:  4
})();
