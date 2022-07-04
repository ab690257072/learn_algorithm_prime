// 等概率返回1~5
function f() {
  return Math.floor(Math.random() * 5) + 1;
}
// 等概率返回0~1
function a() {
  let ans = 0;
  do {
    ans = f();
  } while(ans == 3);
  return ans < 3 ? 0 : 1;
}
// 等概率返回0~6
function b() {
  let ans = 0;
  do {
    ans = 0;
    ans = (a() << 2) + (a() << 1) + a();
  } while(ans == 7);
  return ans;
}
// 等概率返回1~7
function c() {
  return b() + 1;
}
function RandomBox(mi, ma) {
  min = mi;
  max = ma;
  return {
    min() {
      return min;
    },
    max() {
      return max;
    },
    random() {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
}
function rand01(randomBox) {
  let min = randomBox.min(),
      max = randomBox.max();
  let size = max - min + 1,
      mid = size << 1,
      odd = (size & 1) != 0;
  let ans = 0;
  do {
    ans = randomBox.random() - min;
  } while(odd && ans == mid);
  return ans < mid ? 0 : 1;
}
// 得到任意from~to
function random(randomBox, from, to) {
  if(from == to) {
    return from;
  }
  let range = to - from,
      num = 1;
  while((1 << num) - 1 < range) {
    num++;
  }
  let ans = 0;
  do {
    ans = 0;
    for(let i = 0; i < num; i++) {
      ans |= (rand01(randomBox) << i);
    }
  } while(ans > range);
  return ans + from;
}
function x() {
  return Math.random() < 0.82 ? 0 : 1;
}
function y() {
  let ans = 0;
  do {
    ans = x();
  } while(ans == x());
  return ans;
}