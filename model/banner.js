import { Http } from "../utils/http";

// 获取轮播图数据:
export class Banner {
    static async getHomeLocationB() {
        const result = await Http.request({
            url: 'banner/name/b-1',
            method: 'GET'
        });
        return result.data;
    }
}