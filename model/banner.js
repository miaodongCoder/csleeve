import { Http } from "../utils/http";

// 获取轮播图数据:
export class Banner {
    static locationB = 'b-1';
    static locationG = 'b-2';
    static async getHomeLocationB() {
        const result = await Http.request({
            url: `banner/name/${Banner.locationB}`,
        });
        return result.data;
    }

    static async getHomeLocationG () {
        const result = await Http.request({
            url: `banner/name/${Banner.locationG}`,
        });
        return result.data;
    }

}