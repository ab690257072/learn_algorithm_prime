/**
 * @function 创建位图（int是32位）
 */
class BitMap {
    constructor(max) {
        this.checkNum(max);
        this.bits = new Array((max + 32) >> 5).fill(0);
    }
    checkNum(num) {
        // 确保 max 不超过 32 位的最大值
        if (num < 0 || num > 0xFFFFFFFF) {
            throw new Error("num must be between 0 and 2^32 - 1");
        }
    }
    add(num) {
        this.checkNum(num);
        // 若是java里的64位来改写，1需要改为1L，5改为6,31改为63，其他函数同理
        this.bits[num >> 5] |= (1 << (num & 31));
    }
    delete(num) {
        this.checkNum(num);
        this.bits[num >> 5] &= ~(1 << (num & 31));
    }
    contains(num) {
        this.checkNum(num);
        return (this.bits[num >> 5] & (1 << (num & 31))) != 0;
    }
}
// 对数器
(() => {
    console.log('测试开始!');
    let max = 10000;
    let bitMap = new BitMap(max);
    let set = new Set();
    let testTime = 10000000;
    for(let i = 0; i < testTime; i++) {
        let num = Math.floor(Math.random() * (max + 1));
        let decide = Math.random();
        if(decide < 0.333) {
            bitMap.add(num);
            set.add(num);
        } else if(decide < 0.666) {
            bitMap.delete(num);
            set.delete(num);
        } else {
            if(bitMap.contains(num) != set.has(num)) {
                console.log(num, bitMap.contains(num), set.has(num), bitMap, set);
                console.log('Oops!');
                break;
            }
        }
    }
    for(let num = 0; num <= max; num++) {
        if(bitMap.contains(num) != set.has(num)) {
            console.log('Oops!');
            break;
        }
    }
    console.log('测试结束!');
})();