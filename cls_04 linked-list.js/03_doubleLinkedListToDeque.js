/**
 * @function 双向链表实现双向队列
 */
function Node(value, last, next) {
  this.value = value;
  this.last = last || null;
  this.next = next || null;
}

class MyDeque {
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
  // 头入队
  pushHead(value) {
    let cur = new Node(value);
    if(this.head == null) {
      this.head = cur;
      this.tail = cur;
    } else {
      cur.next = this.head;
      this.head.last = cur;
      this.head = cur;
    }
    this.size++;
  }
  // 尾入队
  pushTail(value) {
    let cur = new Node(value);
    if(this.head == null) {
      this.head = cur;
      this.tail = cur;
    } else {
      cur.last = this.tail;
      this.tail.next = cur;
      this.tail = cur;
    }
    this.size++;
  }
  // 头出队
  pollHead() {
    let ans = null;
    if(this.head == null) {
      return ans;
    }
    this.size--;
    ans = this.head.value;
    if(this.head == this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.last = null;
    }
    return ans;
  }
  // 尾出队
  pollTail() {
    let ans = null;
    if(this.head == null) {
      return ans;
    }
    this.size--;
    if(this.head == this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.last;
      this.tail.next = null;
    }
    return ans;
  }
  // 头取值
  peekHead() {
    return this.head != null ? this.head.value : null;
  }
  // 尾取值
  peekTail() {
    return this.tail != null ? this.tail.value : null;
  }
}