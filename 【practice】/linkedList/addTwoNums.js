// 两链表相加
function Node(v, next) {
  this.val = v;
  this.next = next || null;
}
function listLen(head) {
  let len = 0;
  while(head != null) {
    let++;
    head = head.next;
  }
  return len;
}
function addTwoNums(head1, head2) {
  let len1 = listLen(head1),
      len2 = listLen(head2),
      l = len1 >= len2 ? head1 : head2,
      s = l == head1 ? head2 : head1,
      curL = l,
      curS = s,
      last = curL,
      carry = 0,
      curNum = 0;
  while(curS != null) {
    curNum = curL.val + curS.val + carry;
    curL.val = curNum % 10;
    carry = Math.floor(curNum / 10);
    last = curL;
    curL = curL.next;
    curS = curS.next;
  }
  while(curL != null) {
    curNum = curL.val + carry;
    curL.val = curNum % 10;
    carry = Math.floor(curNum / 10);
    last = curL;
    curL = curL.next;
  }
  if(carry != 0) {
    last.next = new Node(1);
  }
  return l;
}