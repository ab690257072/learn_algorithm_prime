/**
 * @function 前缀和
 * @desc 方法一，每次查询都计算和
 * @desc 方法二，计算前缀和，相比于计算所有范围和更省空间
 */

// 方法一
let arr = [];
function RangeSum1(list) {
  arr = list;
}
function rangeSum1(L, R) {
  let sum = 0;
  for(let i = L; i <= R; i++) {
    sum += arr[i];
  }
  return sum;
}
// 方法二
let preSum = [];
function RangeSum2(list) {
  preSum[0] = list[0];
  for(let i = 1; i < list; i++) {
    preSum[i] = preSum[i - 1] + list[i];
  }
}
function rangeSum2(L, R) {
  return L === 0 ? preSum[R] : preSum[R] - preSum[L - 1];
}