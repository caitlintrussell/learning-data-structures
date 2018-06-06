
/**** Linked List Class ****/

export class LinkedListNode {
  constructor (value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList {
  constructor () {
    this.head = null;
  }
  addToHead (val) {
    let LLN = new LinkedListNode(val);
    if (this.head === null) this.head = LLN;
    else {
      LLN.next = this.head;
      this.head = LLN;
    }
  }
}
