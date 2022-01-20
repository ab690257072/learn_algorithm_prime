/**
 * @function 有序数组找到<=num的最右侧位置
 * @desc 思路：记录<=num的位置，不断缩短右侧范围，最终会落到最右侧
 */
function bsNearRightIndex(arr, num) {
  if(!arr || !arr.length) {
    return -1;
  }
  let L = 0,
      R = arr.length - 1,
      idx = -1;
  while(L <= R) {
    let mid = L + ((R - L) >> 1);
    if(arr[mid] <= num) {
      idx = mid;
      L = mid + 1;
    } else {
      R = mid - 1;
    }
  }
  return idx;
}
// 比对函数
function comparator(arr, num) {
  for(let i = arr.length - 1; i >= 0; i--) {
    if(arr[i] <= num) {
      return i;
    }
  }
  return -1;
}
// 随机数组生成函数
function generateRandomArray(maxSize, maxValue) {
  let arr = new Array(Math.floor(Math.random() * (maxSize + 1)));
  for(let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * (maxValue + 1)) - Math.floor(Math.random() * maxValue);
  }
  return arr;
}
// 打印数组函数
function printArray(arr) {
  if(!arr) {
    return;
  };
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i] + ' ');
  }
}
// 测试函数
function testMain() {
  let testTimes = 500000,
      maxSize = 100,
      maxValue = 100,
      success = true;
  for(let i = 0; i < testTimes; i++) {
    let arr = generateRandomArray(maxSize, maxValue);
    arr.sort((a, b) => a - b);
    let value = Math.floor(Math.random() * (maxValue + 1)) - Math.floor(Math.random() * maxValue);
    if(bsNearRightIndex(arr, value) != comparator(arr, value)) {
      printArray(arr);
      console.log(value);
      console.log(bsNearRightIndex(arr, value));
      console.log(comparator(arr, value));
      success = false;
      break;
    }
  }
  console.log(success ? 'Nice' : 'Fucking Fucked');
}

testMain();