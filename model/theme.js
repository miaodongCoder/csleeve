// 顶部的主题图片业务对象:
import { config } from "../config/Config";
import { Http } from "../utils/http";

export class Theme {
    // 获取首页主题数据:
    static getHomeLocationA(callback) {
        Http.request({
            url: 'theme/by/names',
            data: { names: 't-1' },
            callback: (data) => {
                callback(data);
            },
            method: 'GET'
        });
    }
}
