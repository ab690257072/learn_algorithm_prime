/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// 单链表节点
function Node(val, next) {
  this.value = val || 0;
  this.next = next || null;
}
// 双链表节点
function DoubleNode(val, last, next) {
  this.value = val || 0;
  this.last = last || null;
  this.next = next || null;
}
// 反转单链表
function reverseLinkedList(head) {
  let pre = null,
      next = null;
  while(head != null) {
    next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }
  return pre;
}
// 反转双链表
function reverseDoubleList(head) {
  let pre = null,
      next = null;
  while(head != null) {
    next = head.next;
    head.next = pre;
    head.last = next;
    pre = head;
    head = next;
  }
  return pre;
}
// 反转单链表对数器
function testReverselinkedList(head) {
  if(head == null) {
    return null;
  }
  let list = [],
      i = 0;
  while(head != null) {
    list[i++] = head;
    head = head.next;
  }
  let N = list.length;
  list[0].next = null;
  for(i = 1; i < N; i++) {
    list[i].next = list[i - 1];
  }
  return list[N - 1];
}
// 反转双链表对数器
function testReverseDoubleList(head) {
  if(head == null) {
    return null;
  }
  let list = [],
      i = 0;
  while(head != null) {
    list[i] = head;
    head = head.next;
  }
  list[0].next = null;
  let N = list.length;
  for(i = 1; i < N; i++) {
    let cur = list[i];
    cur.last = null;
    cur.next = pre;
    pre.last = cur;
    pre = cur;
  }
  return list[N - 1];
}
// 生成随机单链表
function generateRandomLinkedList(len, value) {
  let size = Math.floor(Math.random() * (len + 1));
  if(size == 0) {
    return null;
  }
  size--;
  let head = new Node(Math.floor(Math.random() * (value + 1)));
  let pre = head;
  while(size != 0) {
    let cur = new Node(Math.floor(Math.random() * (value + 1)));
    pre.next = cur;
    pre = cur;
    size--;
  }
  return head;
}
// 生成随机双链表
function generateRandomDoubleList(len, value) {
  let size = Math.floor(Math.random() * (len + 1));
  if(size == 0) {
    return null;
  }
  size--;
  let head = new DoubleNode(Math.floor(Math.random() * (value + 1)));
  let pre = head;
  while(size != 0) {
    let cur = new DoubleNode(Math.floor(Math.random() * (value + 1)));
    pre.next = cur;
    cur.last = pre;
    pre = cur;
    size--;
  }
  return head;
}
// 获取单链表原始顺序
function getLinkedListOriginOrder(head) {
  let ans = [],
      i = 0;
  while(head != null) {
    ans[i] = head.value; // 传值
    head = head.next;
  }
  return ans;
}
// 校验单链表顺序
function checkLinkedListReverse(origin, head) {
  for(let i = origin.length - 1; i >= 0; i--) {
    if(origin[i] != head.value) {
      return false;
    }
    head = head.next;
  }
  return true;
}
// 获取双链表原始顺序
function getDoubleListOringOrder(head) {
  // 传值，和单链表没区别
  let ans = [],
      i = 0;
  while(head != null) {
    ans[i] = head.value;
    head = head.next;
  }
  return ans;
}
// 校验双链表顺序
function checkDoubleListReverse(origin, head) {
  let end = null;
  for(let i = origin.length - 1; i >= 0; i--) {
    if(origin[i] != head.value) {
      return false;
    }
    end = head;
    head = head.next;
  }
  for(let i = 0; i < origin.length; i++) {
    if(origin[i] != end.value) {
      return false;
    }
    end = end.last;
  }
  return true;
}
// 测试函数
function testMain() {
  let len = 50,
      value = 100,
      testTimes = 100000;
  for(let i = 0; i < testTimes; i++) {
    let node1 = generateRandomLinkedList(len, value);
    let list1 = getLinkedListOriginOrder(node1);
    node1 = reverseLinkedList(node1);
    if(!checkLinkedListReverse(list1, node1)) {
      console.log('反转单链表失败');
      console.log(list1);
      console.log(node1);
    }
    let node2 = generateRandomLinkedList(len, value);
    let list2 = getLinkedListOriginOrder(node2);
    node2 = testReverselinkedList(node2);
    if(!checkLinkedListReverse(list2, node2)) {
      console.log('单链表对数器失败');
      console.log(list2);
      console.log(node2);
    }
    let node3 = generateRandomDoubleList(len, value);
    let list3 = getDoubleListOringOrder(node3);
    node3 = reverseDoubleList(node3);
    if(!checkDoubleListReverse(list3, node3)) {
      console.log('反转双链表失败');
      console.log(list3);
      console.log(node3);
    }
    let node4 = generateRandomDoubleList(len, value);
    let list4 = getDoubleListOringOrder(node4);
    node4 = testReverseDoubleList(node4);
    if(!checkDoubleListReverse(list4, node4)) {
      console.log('双链表对数器失败');
      console.log(list4);
      console.log(node4);
    }
  }
  console.log('finish');
}
// 执行测试
testMain();