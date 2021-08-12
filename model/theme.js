import { Http } from "../utils/http";

// 获取首页主题数据:
export class Theme {
    static async getHomeLocationA() {
        const result = await Http.request({
            url: 'theme/by/names',
            data: { names: 't-1' },
            method: 'GET'
        });
        return result.data;
    }
}
