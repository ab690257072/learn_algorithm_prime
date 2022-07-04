// 局部最小
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
  let L = 0,
      R = N - 1;
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
  return arr[L] < arr[R] ? L : R;
}