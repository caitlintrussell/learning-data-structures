import { assert } from "chai";
import { LinkedList, LinkedListNode } from "./single";

describe('Testing is working!', () => {
  it('should return true', () => {
    assert.isTrue(true)
  })
})

describe('◀︎◀︎  Linked Lists ▶︎▶︎', () => {
  it('A new Linked List should initialize as empty', () => {
    const LL = new LinkedList();
    assert.isNull(LL.head)
  })
})

describe('◀︎◀︎  Linked List Node ▶︎▶︎', () => {
  it('Should contain a .value and a .next', () => {
    const LLN = new LinkedListNode('something');
    assert.isDefined(LLN.value)
    assert.isDefined(LLN.next)
  })
})
