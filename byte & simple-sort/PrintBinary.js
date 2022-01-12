/**
 * @function 打印一个整数的32位每位的二进制值
 */
function printBinary(num) {
  let str = '';
  // 1. 要从头开始打印
  for(let i = 31; i >= 0; i--) {
    // 2. 和移位后的 1 进行与运算的话，当前位是0则结果为0，否则可能是任何数
    // 所以用 0 判等，注意不是 1
    str += (num & (1 << i)) == 0 ? '0': '1';
  }
  // 3. js中打印是自动换行的，所以需要先拼字符串再打印
  console.log(str);
}
// 测试
function testMain() {
  printBinary(45612);
}

testMain();