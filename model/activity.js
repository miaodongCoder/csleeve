import { Http } from "../utils/http";

/**
 * 优惠券活动业务模型类:
 * 当前可使用的活动name=a-2, a-2标识Home主页里的优惠活动
 * 首页获取 entrance_img 图片即可
 */
export class Activity {
    static locationD = 'a-2';
    static async getHomeActivityLocationD () {
        const result = await Http.request({
            url: `activity/name/${Activity.locationD}`
        });
        return result.data;
    }
}
