// 选择排序
function selectSort(arr) {
  if(arr == null || arr.length < 2) {
    return;
  }
  let N = arr.length;
  for(let i = 0; i < N; i++) {
    let min = i;
    for(let j = i + 1; j < N; j++) {
      min = arr[j] < arr[min] ? j : min;
    }
    swap(arr, min, i);
  }
}
// 冒泡排序
function bubbleSort(arr) {
  if(arr == null || arr.length < 2) {
    return;
  }
  let N = arr.length;
  for(let end = N - 1; end >= 0; end--) {
    for(let second = 1; second <= end; second++) {
      if(arr[second - 1] > arr[second]) {
        swap(arr, second - 1, second);
      }
    }
  }
}
// 插入排序
function insertSort(arr) {
  if(arr == null || arr.length < 2) {
    return;
  }
  let N = arr.length;
  for(let end = 1; end < N; end++) {
    for(let pre = end - 1; pre >= 0 && arr[pre] > arr[pre + 1]; pre--) {
      swap(arr, pre, pre + 1);
    }
  }
}
function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
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
  let arr = [7, 2, 2, 5, 6, 9, 8, 4, 3];
  let arr1 = [7, 2, 2, 5, 6, 9, 8, 4, 3];
  let arr2 = [7, 2, 2, 5, 6, 9, 8, 4, 3];
  // printArr(arr);
  selectSort(arr);
  bubbleSort(arr1);
  // insertSort1(arr);
  // insertSort2(arr);
  insertSort(arr2);
  printArr(arr);
  printArr(arr1);
  printArr(arr2);
}
testMain();