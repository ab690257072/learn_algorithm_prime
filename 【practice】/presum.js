function rangeSum(list) {
  let preSum = [];
  preSum[0] = list[0];
  for(let i = 1; i < list.length; i++) {
    preSum[i] = preSum[i - 1] + list[i];
  }
  return preSum;
}
function searchRange(L, R) {
  let preSum = rangeSum(list);
  return L == 0 ? preSum[R] : preSum[R] - preSum[L - 1];
}