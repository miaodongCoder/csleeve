import { config } from "../Config/Config";
import { promisic } from "../utils/util"

/**
 * http请求的基类:
 *
 * */
// class Http {
//     // 这边在request的参数外层用{}包裹 , 这样在方法的实现的时候就可以像写JS对象的方式一样去书写代码了~
//     static async request({ url, method = 'GET', data }) {
//         return await promisic(wx.request)({
//             url: `${config.apiBaseUrl}${url}`,
//             method: method,
//             data: data,
//             header: {
//                 appkey: config.appkey,
//             }
//         });
//     }
// }

export class Http {
    static request({ url, data, callback, method = 'GET' }) {
        wx.request({
            url: `${config.apiBaseUrl}${url}`,
            data: data,
            method: method,
            header: {
                appkey: config.appkey,
            },
            // result 里包含了 cookies、data、errMsg、header、statusCode几个字段 , data 里保存了本次请求的数据:
            success: (result) => {
                callback(result.data);
            },
            fail: () => {

            },
            complete: () => {

            }
        })
    }
}

