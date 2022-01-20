/**
 * 
 * @function 求无序相邻不等数组的任一局部最小位置
 * @desc arr[0] < arr[1]，则 arr[0] 是局部最小
 * @desc arr[arr.length - 2] > arr[arr.length - 1]，则 arr[arr.length - 1] 为局部最小
 * @desc arr[i] < arr[i - 1] && arr[i] < arr[i + 1]，则 arr[i] 是局部最小
 */
function oneMinIndex(arr) {
  if(!arr || !arr.length) {
    return -1;
  }
  let N = arr.length;
  if(N == 1) {
    return 0;
  }
  if(arr[0] < arr[1]) {
    return 0;
  }
  if(arr[N - 2] > arr[N - 1]) {
    return N - 1;
  }
  // 二分法求任一抛物线中局部最小
  let L = 0,
      R = N - 1;
  // 相邻两数不等，所以中间波浪线肯定有局部最小
  // 范围长度 >2 用抛物线判断，<=2时需要单独判断
  while(L < R - 1) {
    let mid = L + ((R - L) >> 1);
    if(arr[mid] < arr[mid - 1] && arr[mid] < arr[mid + 1]) {
      return mid;
    } else if(arr[mid] > arr[mid - 1]) {
      R = mid - 1;
    } else {
      L = mid + 1;
    }
  }
  // 范围 <=2的情况
  return arr[L] < arr[R] ? L : R;
}
// 生成随机样本
function randomArray(maxLen, maxValue) {
  let len = Math.floor(Math.random() * (maxLen + 1));
  let arr = new Array(len);
  if(len > 0) {
    arr[0]  = Math.floor(Math.random() * maxValue);
    for(let i = 1; i < len; i++) {
      do {
        arr[i] = Math.floor(Math.random() * maxValue);
      } while(arr[i] == arr[i - 1]);
    }
  }
  return arr;
}
// 校验结果是否为局部最小
function check(arr, minIndex) {
  if(arr.length == 0) {
    return minIndex == -1;
  }
  let left = minIndex - 1,
      right = minIndex + 1;
  // left超出范围说明是0点，不需要校验左侧，所以默认true
  let leftBigger = left >= 0 ? arr[left] > arr[minIndex] : true,
      rightBigger = right < arr.length ? arr[right] > arr[minIndex] : true;
  return leftBigger && rightBigger;
}
// 打印数组
function printArray(arr) {
  for(let item of arr) {
    console.log(item + ' ');
  }
}
// 测试
function testMain() {
  let maxLen = 100,
      maxValue = 200,
      testTimes = 1000000;
  console.log('开始');
  for(let i = 0; i < testTimes; i++) {
    let arr = randomArray(maxLen, maxValue);
    let ans = oneMinIndex(arr);
    if(!check(ans)) {
      printArray(arr);
      console.log(ans);
      break;
    }
  }
  console.log('结束');
}

testMain();