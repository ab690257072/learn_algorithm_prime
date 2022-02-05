/**
 * @function 两链表相加
 */

function ListNode(val, next) {
  this.val = val || 0;
  this.next = next || null;
}
function addTwoNumbers(head1, head2) {
  let len1 = listLength(head1),
      len2 = listLength(head2);
  let l = len1 >= len2 ? head1 : head2,
      s = l == head1 ? head2 : head1;
  let curL = l,
      curS = s;
  let last = curL;
  let carry = 0,
      curNum = 0;
  while(curS != null) {
    curNum = curL.val + curS.val + carry;
    curL.val = curNum % 10;
    carry = curNum / 10;
    last = curL;
    curL = curL.next;
    curS = curS.next;
  }
  while(curL != null) {
    curNum = curL.val + carry;
    curL.val = curNum % 10;
    carry = curNum / 10;
    last = curL;
    curL = curL.next;
  }
  if(carry != 0) {
    last.next = new ListNode(1);
  }
  return l;
}
function listLength(head) {
  let len = 0;
  while(head != null) {
    len++;
    head = head.next;
  }
  return len;
}