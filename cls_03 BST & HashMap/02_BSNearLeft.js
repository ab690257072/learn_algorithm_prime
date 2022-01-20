/**
 * @function 有序数组找到>=num所有数中的最左侧位置
 */
function BSNearLeft(arr, num) {
  if(!arr || !arr.length) {
    return -1;
  }
  let L = 0,
      R = arr.length - 1,
      ans = -1;
  while(L <= R) {
    let mid = L + ((R - L) >> 1);
    if(arr[mid] >= num) { // >=num时，范围往左侧缩短，最终会落到最左侧位置
      ans = mid; // 记录位置
      R = mid - 1;
    } else {
      L = mid + 1;
    }
  }
  return ans;
}
// 对比函数
function comparator(arr, num) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] >= num) {
      return i;
    };
  }
  return -1;
}
// 随机数组生成器
function generateRandomArray(maxSize, maxValue) {
  let arr = new Array(Math.floor(Math.random() * (maxSize + 1)));
  for(let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * (maxValue + 1)) - Math.floor(Math.random() * maxValue);
  }
  return arr;
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
    if(BSNearLeft(arr, value) != comparator(arr, value)) {
      console.log('出错了');
      success = false;
      break;
    }
  }
  console.log(success ? 'Nice' : 'Fucking Fucked');
}

testMain();