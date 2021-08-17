import { Http } from "../utils/http";

// 获取首页主题数据:
export class Theme {
    /**
     * 首页顶部主题:
     * @returns 
     */
    static async getHomeLocationA() {
        const result = await Http.request({
            url: 'theme/by/names',
            data: { names: 't-1' },
        });
        return result.data;
    }

    /**
     * 首页中部主题:
     * 
     */
    static async getHomeLocationE() {
        const result = await Http.request({
            url: 'theme/by/names',
            data: { names: 't-2' },
        });
        return result.data;
    }
}

/**
 * 接口的颗粒度设计
 * 1.每一个数据就进行一次 http 请求;
 * 2.只发送一个 http 拿到所有的页面数据;
 * 3.有选择的把部分 http 请求合并成 1 个;
 * 
 * 对应下面的原则:
 * 
 * 1.Http 请求的数量
 * 2.Http 请求进行了多少次的数据库查询 , 复杂度如何 , 进行了 join 语句有多少?
 * 3.接口的灵活性如何? 接口的可维护性如何 接口的粒度~
 * 
 * 最合适的方法是第三个方法 , 有选择的合并接口
 * theme 本身就是可以传递一个数组进去一下查询到多个 theme , 
 * 根本没必要一个 theme 一个 theme 的查询;
 * 
 * Web 应用主要是 IO 密集型;
 * 还有一种类型的是 CPU 密集型的服务 , 如视频转码等操作;
 * 
 */

