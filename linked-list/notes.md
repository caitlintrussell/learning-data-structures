## Singly Linked List

### Basics
+ Linear data structure
+ Each node has a .value and a .next
+ Usually a "head" node represents the whole list (by chaining of .next's)
+ Must be 'traversed', has no index access

### Complexity
+ No direct node selection. Find a node through traversal, which is O(N), where N is length of the list.
+ Arrays are more performant for selecting a node in the middle
+ Deletion and addition are much more performant, because an array would have to re-index all nodes that follow the deleted or added
