import { assert } from "chai";
import { LinkedList, LinkedListNode } from "./single";

describe('Testing is working!', () => {
  it('should return true', () => {
    assert.isTrue(true)
  })
})

describe('◀︎◀︎ Linked Lists ▶︎▶︎', () => {
  it('A new Linked List should initialize as empty', () => {
    const LL = new LinkedList();
    assert.equal(LL.toString(), '')
  })
})
