const Promise = require('bluebird');
const { info } = console;

const delay = timeout => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(timeout);
    }, timeout);
});

let arr = [
    delay(1000),
    delay(2000),
    delay(3000),
];

let mapArr = [1000, 2000, 3000];
// 找到最快执行的2个
Promise.some(arr, 2).spread((f, s) => {
    info('f', f); // 1000
    info('s', s); // 2000
});

// 把数组封装成promise对象 ==> Promise.all
let map = Promise.map(mapArr, num => {
    return Promise.resolve(num / 1000);
}).then(res => {
    info('res1', res); // [1, 2, 3]
    return res.join('');
});

info('map', map); // promise 对象
map.then(res => {
    info('map', res); // map 123
});

let sum = Promise.map(mapArr, num => {
    return delay(num).then(res => res);
}).then(res => {
    info('res2', res); // [1000, 2000, 3000]
    return res.reduce((prev, curr) => { 
        return prev + curr;
    }, 0);
});

sum.then(s => {
    info('sum', s); // 4000
});

