function bsnearleft(arr, num) {
  if(arr == null || arr.length == 0) {
    return -1;
  }
  let L = 0,
      R = arr.length - 1,
      ans = -1;
  while(L <= R) {
    let mid = L + ((R - L) >> 1);
    if(arr[mid] >= num) {
      ans = mid;
      R = mid - 1;
    } else {
      L = mid + 1;
    }
  }
  return ans;
}