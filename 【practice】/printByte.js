function printBinary(num) {
  let str = '';
  for(let i = 31; i >= 0; i--) {
    str += (num & (1 << i)) == 0 ? '0' : '1';
  }
  console.log(str);
}
(() => {
  printBinary(45612);
})();