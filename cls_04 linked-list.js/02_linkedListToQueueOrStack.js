/**
 * @function 链表实现队列或栈
 */
function Node(val, next) {
  this.value = val || 0;
  this.next = next || null;
}
class MyQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size == 0;
  }
  size() {
    return this.size;
  }
  // 入队
  offer(value) {
    let cur = new Node(value);
    if(this.tail == null) {
      this.head = cur;
      this.tail = cur;
    } else {
      this.tail.next = cur;
      this.tail = cur;
    }
    this.size++;
  }
  // 出队
  poll() {
    let ans = null;
    if(this.head != null) {
      ans = this.head.value;
      this.head = this.head.next;
      this.size--;
    }
    if(this.head == null) {
      this.tail = null;
    }
    return ans;
  }
  // 获取节点值
  peek() {
    let ans = null;
    if(this.head != null) {
      ans = this.head.value;
    }
    return ans;
  }
}
class MyStack {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size == 0;
  }
  size() {
    return this.size;
  }
  // 入栈
  push(value) {
    let cur = new Node(value);
    if(this.head == null) {
      this.head = cur;
    } else {
      cur.next = this.head; // 反向构造一条顺序链表
      this.head = cur;
    }
  }
  // 出栈
  pop() {
    let ans = null;
    if(head != null) {
      ans = this.head.value;
      this.head = this.head.next;
      this.size--;
    }
    return ans;
  }
  // 获取节点值
  peek() {
    return this.head != null ? this.head.value : null;
  }
}