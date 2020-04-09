/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let count = 0, current = head, currentIndex = 0;
  while (head.next != null) {
    ++count;
    let optmp = Math.ceil(count / 2) - currentIndex;
    while (optmp--) {
      current = current.next;
      ++currentIndex;
    }
    head = head.next;
  }
  return current;
};
