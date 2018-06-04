
/**** Linked List Class ****/

export class LinkedList {
  constructor () {
    this.head = null;
  }
}

export class LinkedListNode {
  constructor (value, next = null) {
    this.value = value;
    this.next = next;
  }
}
