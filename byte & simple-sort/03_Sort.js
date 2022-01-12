/**
 * @function 简单排序概览
 */
// 交换数组项
function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
// 选择排序
function selectSort(arr) {
  if(!arr || arr.length < 2) {
    return;
  }
  let len = arr.length;
  for(let i = 0; i < len; i++) {
    let min = i;
    for(let j = i; j < len; j++) {
      min = arr[i] > arr[j] ? j : i;
    }
    swap(arr, i, min);
  }
}
// 冒泡排序
function bubbleSort(arr) {
  if(!arr || arr.length < 2) {
    return;
  }
  for(let end = arr.length - 1; end >= 0; end--) {
    for(let second = 1; second <= end; second++) {
      if(arr[second - 1] > arr[second]) {
        swap(arr, second - 1, second);
      }
    }
  }
}
// 插入排序
function insertSort(arr) {
  if(!arr || arr.length < 2) {
    return;
  }
  let len = arr.length;
  for(let i = 1; i < len; i++) {
    for(let j = i - 1; j >= 0; i--) {
      if(arr[j] > arr[i]) {
        swap(arr, i, j);
      }
    }
  }
}
// 打印数组
function printArr(arr) {
  res = '';
  arr.forEach(x => {
    res += ` ${x}`;
  });
  console.log(res);
}
// 测试
function testMain() {
  let arr = [7, 2, 2, 5, 6, 9, 8];
  printArr(arr);
  selectSort(arr);
  printArr(arr);
}
testMain();