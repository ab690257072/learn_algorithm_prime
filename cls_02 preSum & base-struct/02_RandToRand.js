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
  let mid = size >> 1; // size假如等于5，则0~4内2为中位数，所以这里不加1
  let odd = (size & 1) != 0;
  // 获取等概率0/1
  let ans = 0;
  do {
    ans = randomBox.random() - min; // 下面是用ans < mid 判断的，mid是数量的一半，而不是范围内的中位数，所以这里减去min
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
/**
 * @function 给定一个固定概率返回0/1的函数，概率不知道，写出一个等概率01函数
 * @desc 思路同上，造相同概率，由于只有一个函数可用，思路往连续事件上想
 * @desc 能够想到，两概率相乘就是等概率
 */
function x() {
  return Math.random() < 0.82 ? 0 : 1;
}
function y() {
  let ans = 0;
  do {
    ans = x(); // 假如是0，概率为0.82
  } while(ans == x()); // 若仍为0，则重来，直到两次x()结果不同，即0.18
  // ans样本是 0-1-0、1-0-1，两者等概率 0.82*0.18
  return ans;
}

// 测试
function testMain() {
  console.log('测试开始');
  let testTimes = 10000000;
  let count = 0;
  for(let i = 0; i < testTimes; i++) {
    if(Math.random() < 0.75) {
      count++;
    }
  }
  console.log(count / testTimes);
  console.log('-----------');

  count = 0;
  for(let i = 0; i < testTimes; i++) {
    if(Math.random() * 8 < 5) {
      count++;
    }
  }
  console.log(count / testTimes);
  console.log(5 / 8);
  console.log('-----------');

  let K = 9;
  let counts = new Array(K).fill(0);
  for(let i = 0; i < testTimes; i++) {
    let ans = Math.floor(Math.random() * K);
    counts[ans]++;
  }
  for(let i = 0; i < K; i++) {
    console.log(`${i} 这个数出现了 ${counts[i]} 次`);
  }
  console.log('-------------');

  function xToXPower2() {
    // 这里若换成 Math.min()，则概率是任意随机数取小于 x 的概率
    // 也就是 1 减去两数都大于等于 x 的情况，所以是 1-(1-x)^2
    return Math.max(Math.random(), Math.random());
  }
  count = 0;
  let x = 0.17;
  for(let i = 0; i < testTimes; i++) {
    if(xToXPower2() < x) {
      count++;
    }
  }
  console.log(count / testTimes);
  console.log(Math.pow(x, 2));
  console.log('Math.min()的概率', 1 - Math.pow(1 - x, 2));
  console.log('-------------');

  // 测试等概率01函数
  count = 0;
  for(let i = 0; i < testTimes; i++) {
    if(a() == 0) {
      count++;
    }
  }
  console.log(count / testTimes);
  console.log('-----------');

  let randbox = RandomBox(2, 6);
  K = 8;
  counts = new Array(K).fill(0);
  for(let i = 0; i < testTimes; i++) {
    let num = random(randbox, 4, 7);
    counts[num]++;
  }
  for(let i = 0; i < K; i++) {
    console.log(`${i} 数出现了 ${counts[i]} 次`);
  }
  console.log('------------');
  
  count = 0;
  for(let i = 0; i < testTimes; i++) {
    if(y()) count++;
  }
  console.log(count / testTimes);
}
// 执行
testMain();