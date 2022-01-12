/**
 * @function 阶乘的实现
 * @desc f1的时间复杂度是O(N^2)
 * @desc f2的时间复杂度是O(N)
 */
// 法1
function f1(N) {
  let ans = 0;
  for(let i = 1; i <= N; i++) {
    ans += factorial(i);
  }
  return ans;
}
function factorial(N) {
  let ans = 1;
  for(let i = 1; i <= N; i++) {
    ans *= i;
  }
  return ans;
}
// 法2
function f2(N) {
  let ans = 0;
  let cur = 1;
  for(let i = 1; i <= N; i++) {
    cur *= i; // 累乘暂存阶乘结果
    ans += cur;
  }
  return ans;
}

function testMain() {
  let N = 4;
  console.log(f1(N));
  console.log(f2(N));
}
testMain();