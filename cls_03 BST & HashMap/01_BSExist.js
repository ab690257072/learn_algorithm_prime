/**
 * @function 二分查找某数
 */
function BSExist(arr, num) {
  if(!arr || arr.length == 0) {
    return false;
  }
  let L = 0,
      R = arr.length - 1;
  while(L <= R) {
    let mid = L + ((R - L) >> 1);
    if(arr[mid] > num) {
      R = mid - 1;
    } else if(arr[mid] < num) {
      L = mid + 1;
    } else {
      return true;
    }
  }
  return false;
}
// 对比函数
function comparator(sortedArr, num) {
  for(let item of sortedArr) {
    if(item == num) {
      return true;
    }
  }
  return false;
}
// 随机样本数组
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
      maxValue = 100,
      maxSize = 100;
  let success = true;
  for(let i = 0; i < testTimes; i++) {
    let arr = generateRandomArray(maxSize, maxValue);
    arr.sort((a, b) => a - b);
    let value = Math.floor(Math.random() * (maxValue + 1)) - Math.floor(Math.random() * maxValue);
    if(BSExist(arr, value) != comparator(arr, value)) {
      console.log('出错了');
      success = false;
      break;
    }
  }
  console.log(success ? 'Nice' : 'Fucking Fucked');
}

testMain();