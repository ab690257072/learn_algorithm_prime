function bsnearright(arr, num) {
  if(!arr || !arr.length) {
    return -1;
  }
  let L = 0,
      R = arr.length - 1,
      ans = -1;
  while(L <= R) {
    let mid = L + ((R - L) >> 1);
    if(arr[mid] <= num) {
      ans = mid;
      L = mid + 1;
    } else {
      R = mid - 1;
    }
  }
  return ans;
}