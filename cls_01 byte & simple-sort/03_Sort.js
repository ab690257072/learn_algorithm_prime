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
    // 假设最小值为当前i位置，从i+1开始遍历查找最小值位置
    for(let j = i + 1; j < len; j++) {
      // 注意是各个j值与最新min值比较，不能用i值
      min = arr[min] > arr[j] ? j : min;
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
// 插入排序，初步实现
function insertSort1(arr) {
  if(!arr || arr.length < 2) {
    return;
  }
  let len = arr.length;
  // 0~0范围已经有序，所以从0~n-i范围内实现有序
  for(let i = 1; i < len; i++) {
    // 右侧小值往左插，直到0~n-i范围内有序
    for(let j = i; j >= 1; j--) {
      if(arr[j] < arr[j - 1]) {
        swap(arr, j - 1, j);
      } else {
        // 因为前一范围已经有序，所以j位置值到达左侧后本次循环就有序了
        // 因此不必再循环下去
        break;
      }
    }
  }
}
// 插入排序，精简for循环
function insertSort2(arr) {
  if(!arr || arr.length < 2) {
    return;
  }
  for(let end = 1; end < arr.length; end++) {
    for(let pre = end - 1; pre >= 0 && arr[pre] > arr[pre + 1]; pre--) {
      swap(arr, pre, pre + 1);
    }
  }
}
// 插入排序，改写为while思路
function insertSort3(arr) {
  if(!arr || arr.length < 2) {
    return;
  }
  for(let end = 1; end < arr.length; end++) {
    let newIdx = end;
    while(newIdx - 1 >= 0 && arr[newIdx - 1] > arr[newIdx]) {
      swap(arr, newIdx - 1, newIdx);
      newIdx--;
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
  let arr = [7, 2, 2, 5, 6, 9, 8, 4, 3];
  printArr(arr);
  // selectSort(arr);
  // bubbleSort(arr);
  // insertSort1(arr);
  // insertSort2(arr);
  insertSort3(arr);
  printArr(arr);
}
testMain();