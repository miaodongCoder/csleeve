import { config } from "../config/Config";
import { promisic } from "./util";

/**
 * http请求的基类:
 *
 * */
export class Http {
    static async request({ url, data, method = 'GET' }) {
        // 入参为函数名 , 后面接小括弧代表调用 promisic 函数 , 里面装着的是wx.request所需要的参数
        await promisic(wx.request)({
            url: `${config.apiBaseUrl}${url}`,
            data: data,
            method: method,
            header: { appkey: config.appkey }
        });
    }
}

promisic(wx.request);
/**
 * Home.js调用 Theme.js , Theme.js调用Http.js , 由于 Http.js 里的 wx.request 方法是异步的 ,
 * 从而导致每一层都是异步的调用 , 需要回调;
 * 而异步的调用有几种形式:
 * 1.callback 回调的方式;
 * 2.promise 方式;
 * 3.async 和 await是最高级的方式;
 *
 */