// 二分查找
function BSExist(arr, num) {
  if(arr == null || arr.length == 0) {
    return false;
  }
  let L = 0,
      R = arr.length - 1;
  while(L <= R) {
    let mid = L + ((R - L) >> 1);
    if(num < arr[mid]) {
      R = mid - 1;
    } else if(num > arr[mid]) {
      L = mid + 1;
    } else {
      return true;
    }
  }
  return false;
}