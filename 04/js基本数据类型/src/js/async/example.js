/* setTimeout(() => {
    console.log('hello world');
    setTimeout(() => {
        console.log('hello world');
        setTimeout(() => {
            console.log('hello world')
        }, 2000)
    }, 2000)
}, 2000)


const task = new Promise((resolve, reject) => {
    // 怎么写
});
 */
task.then().then().then();

const task = new Promise((resolve, reject) => {
    // 怎么写 >=2000 不是精确的定时器
    setTimeout(() => {
        resolve()
    }, 2000)
});

task.then(() => {
    console.log('hello world')
    return new Promise((resolve, reject) => {
        // 怎么写 >=2000 不是精确的定时器
        setTimeout(() => {
            resolve()
        }, 2000)
    });
}).then(
    () => {
        console.log('hello world')
        return new Promise((resolve, reject) => {
            // 怎么写 >=2000 不是精确的定时器
            setTimeout(() => {
                resolve()
            }, 2000)
        });
    }
).then(
    () => {
        console.log('hello world')
    }
);//最后一步，不用再return
