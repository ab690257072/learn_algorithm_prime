function f2(N) {
  let cur = 1,
      res = 0;
  for(let i = 1; i <= N; i++) {
    cur *= i;
    res += cur;
  }
  console.log(res);
  return res;
}
(() => {
  f2(4);
})();