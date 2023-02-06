export interface INode<T> {
  data: T;
  next: INode<T> | null;
}



export class Node<T> implements INode<T> {
  next: INode<T> | null = null;
  constructor(public data: T) { }
}
