/**
 * @function 位运算实现加减乘除
 * https://leetcode.com/problems/divide-two-integers
 */
// MAX_SAFE_INTEGER是浮点数精度边界，2^53，本题需要的是整数最大范围 2^31
const MAX_VALUE = Math.pow(2, 31) - 1;
const MIN_VALUE = - Math.pow(2, 31);

function add(a, b) {
    let sum = a;
    while(b != 0) {
        // 结果 = 无进位相加 + 进位信息
        sum = a ^ b;
        b = (a & b) << 1;
        a = sum;
    }
    return sum;
}
function negNum(n) {
    return add(~n, 1);
}
function minus(a, b) {
    return add(a, negNum(b));
}
function multi(a, b) {
    let res = 0;
    while(b != 0) {
        if((b & 1) != 0) {
            res = add(res, a);
        }
        a <<= 1;
        b >>>= 1;
    }
    return res;
}
function isNeg(n) {
    return n < 0;
}
function div(a, b) {
    let x = isNeg(a) ? negNum(a) : a;
    let y = isNeg(b) ? negNum(b) : b;
    let res = 0;
    for(let i = 30; i >= 0; i = minus(i, 1)) {
        if((x >> i) >= y) {
            res |= (1 << i);
            x = minus(x, y << i);
        }
    }
    return isNeg(a) ^ isNeg(b) ? negNum(res) : res;
}
function divide(a, b) {
    if(a == MIN_VALUE && b == MIN_VALUE) {
        return 1;
    } else if(b == MIN_VALUE) {
        return 0;
    } else if(a == MIN_VALUE) {
        if(b == negNum(1)) {
            return MAX_VALUE;
        } else {
            let c = div(add(a, 1), b);
            return add(c, div(minus(a, multi(c, b)), b));
        }
    } else {
        return div(a, b);
    }
}