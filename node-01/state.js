const os = require('os')
const cpuStat = require('cpu-stat')

//匿名
// module.exports = function() {
//     const mem = os.freemem() / os.totalmem() * 100;
//     console.log(`内存占用率${mem}`);
//     cpuStat.usagePercent((err, prencent) => {
//         console.log(`cpu占用率是${prencent}`);
//     });
// }

//具名
module.exports.getState = function() {
    const mem = os.freemem() / os.totalmem() * 100;
    console.log(`内存占用率${mem}`);
    cpuStat.usagePercent((err, prencent) => {
        console.log(`cpu占用率是${prencent}`);
    });
}