
import { config } from "../config/Config";

/**
 * http请求的基类:
 *
 * */
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

