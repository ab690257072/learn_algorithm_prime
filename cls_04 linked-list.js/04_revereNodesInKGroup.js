/**
 * @function 每K个节点内逆序调整链表
 */

function reverseInKGroup(head, k) {
  let start = head;
  let end = getKGroupEnd(start, k);
  if(end == null) {
    return head;
  }
  reverse(start, end);
  head = end;
  let lastEnd = start;
  while(lastEnd.next != null) {
    start = lastEnd.next;
    end = getKGroupEnd(start, k);
    if(end == null) {
      return head;
    }
    reverse(start, end);
    lastEnd.next = end;
    lastEnd = start;
  }
  return head;
}
function getKGroupEnd(start, k) {
  while(--k > 0 && start != null) {
    start = start.next;
  }
  return start;
}
function reverse(start, end) {
  end = end.next;
  let pre = null;
  let next = null;
  let cur = start;
  while(cur != end) {
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  start.next = end;
}