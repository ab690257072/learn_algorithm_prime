/**
 * @function 插入排序，使用对数器校验算法正确性
 */
function insertSort(arr) {
  if(!arr || arr.length < 2) {
    return;
  }
  for(let i = 1; i < arr.length; i++) {
    for(let pre = i - 1; pre >= 0 && arr[pre] > arr[pre + 1]; pre--) {
      swap(arr, pre, pre + 1);
    }
  }
}
function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
/**
 * @function 对数器
 */
// 1. 一定正确的暴力比对算法
function comparator(arr) {
  arr.sort((a, b) => a - b); // ! 默认是按字符编码排序的，数值对比需要传入比较器
}
// 2. 生成随机数组
function generateRandomArray(maxSize, maxValue) {
  /**
   * @function 核心是Math.random()
   * Math.random(); // [0, 1)
   * Math.random() * N; // [0, N)
   * Math.floor(Math.random() * N); // [0, N]
   */
  // 生成随机长度和随机值
  let arr = [];
  let len = Math.floor(Math.random() * (maxSize + 1));
  for(let i = 0; i < len; i++) {
    // -? ~ +?
    arr[i] = Math.floor(Math.random() * (maxValue + 1)) - Math.floor(Math.random() * maxValue);
  }
  return arr;
}
// 3. 拷贝随机数组样本数据
function copyArray(arr) {
  if(!arr) return;
  let res = [];
  for(let i = 0; i < arr.length; i++) {
    res[i] = arr[i];
  }
  return res;
}
// 4. 比对数组是否相同
function isEqual(arr1, arr2) {
  if(!arr1 && arr2 || arr1 && !arr2) {
    return false;
  }
  if(!arr1 && !arr2) {
    return true;
  }
  if(arr1.length != arr2.length) {
    return false;
  }
  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] != arr2[i]) return false;
  }
  return true;
}
// 5. 打印结果函数
function printArray(arr) {
  if(!arr) {
    return;
  }
  let str = '';
  for(let i = 0; i < arr.length; i++) {
    str += arr[i] + ' ';
  }
  console.log(str);
}
// 6. 测试函数
function testMain() {
  let testTime = 500000;
  let maxValue = 100;
  let maxSize = 100;
  let success = true;
  for(let i = 0; i < testTime; i++) {
    let sampleArr = generateRandomArray(maxSize, maxValue);
    let copyArr = copyArray(sampleArr);
    insertSort(sampleArr);
    comparator(copyArr);
    if(!isEqual(sampleArr, copyArr)) {
      success = false;
      printArray(sampleArr);
      printArray(copyArr);
      break;
    }
  }
  console.log(success ? 'Nice!' : 'Fucking Fucked!');
  
  let arr = generateRandomArray(maxSize, maxValue);
  printArray(arr);
  insertSort(arr);
  printArray(arr);
}
// 执行测试函数
testMain();