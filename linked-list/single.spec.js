import { assert } from "chai";
import { LinkedList, LinkedListNode } from "./single";

describe('▷▷  Linked List Node Class ', () => {
  it('Should contain a .value and a .next', () => {
    const LLN = new LinkedListNode('something');
    assert.isDefined(LLN.value)
    assert.isDefined(LLN.next)
  })
})

describe('▷▷  Linked List Class ', () => {
  it('A new Linked List should initialize as empty', () => {
    const LL = new LinkedList();
    assert.isNull(LL.head)
  })
  describe('→ Add to head function', () => {
    let LL = new LinkedList();
    it('Should replace the head if null', () => {
      assert.isNull(LL.head);
      LL.addToHead('beeep');
      assert.equal(LL.head.value, 'beeep');
    })
    it('should replace the current head', () => {
      LL.addToHead('booop');
      assert.equal(LL.head.value, 'booop');
    })
    it('the previous head should be the new head\'s next value', () => {
      assert.equal(LL.head.next.value, 'beeep');
    })
  })

})

