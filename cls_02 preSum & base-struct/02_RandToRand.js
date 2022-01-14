/**
 * @function 给定等概率返回1~5的随机函数，要求只用该函数写出一个等概率返回1~7的随机函数
 */

// 等概率返回1~5
function f() {
  return Math.floor(Math.random() * 5) + 1;
}
// 等概率返回0~1
function a() {
  let ans = 0;
  do {
    ans = f();
  } while(ans == 3); // 1/2返回0，跳过3，4/5返回1
  return ans < 3 ? 0 : 1;
}
// 等概率返回 0~6
function b() {
  let ans = 0;
  do {
    ans = (a() << 2) + (a() << 1) + a(); // 000~111，111是7，跳过
  } while(ans == 7);
  return ans;
}

// 等概率返回 1~-7
function c() {
  return b() + 1;
}

/**
 * @function 将上述范围泛化实现
 */
function RandomBox(mi, ma) {
  let min = mi;
  let max = ma;

  return {
    min() {
      return min;
    },
    max() {
      return max;
    },
    // 13~17
    // [0, 4]+13
    random() {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
}
// 给定条件randomBox，返回等概率0/1
function rand01(randomBox) {
  let min = randomBox.min();
  let max = randomBox.max();
  // 范围长度
  let size = max - min + 1;
  let mid = size >> 1 + 1;
  let odd = (size & 1) != 0;
  // 获取等概率0/1
  let ans = 0;
  do {
    ans = randomBox.random() - min;
  } while(odd && ans == mid);
  
  return ans < mid ? 0 : 1;
}
// 给定RandomBox，等概率返回from~to的任意数，要求from<=to
function random(randomBox, from, to) {
  if(from == to) {
    return from;
  }
  let range = to - from;
  let num = 1;
  while((num << 1) - 1 < range) {
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

// 测试
function testMain() {

}