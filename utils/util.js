/**
 * Promise 回调方法 , 返回一个Promise对象 ,
 * 这种方法的回调比简单的callBack好但是不如async 和await方式;
 * 这种方式是linUI框架的 promisic 方法的内部实现
 * promisic 这个方法 接收一个函数 , 返回的也是一个函数;
 * promisic 将小程序内置的非 primise API 转换为 promise:
 * 
 * */
 export const promisic = function (func) {
    return function (params = {}) {
        return new Promise((resolve, reject) => {
            const args = Object.assign(params, {
                success: (res) => {
                    resolve(res);
                },
                fail: (error) => {
                    reject(error);
                }
            });
            // 调用接收的那个函数 , 同时把args参数传递进去:
            // 如wx.request()这个方法:
            func(args);
        });
    };
};

// Promise相当于用了代理模式 , 每次调用 wx.request 都是通过 promisic 代理完成的;