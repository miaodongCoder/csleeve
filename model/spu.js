import {Http} from "../utils/http";

export class Spu {
    static async getLatest () {
        const result = await Http.request({
            url: 'spu/latest',
        });
        return result.data;
    }
}

/**
 * 分页数据考虑:
 * 1.一条都没有;
 * 2.最后一条 , 没有更多数据了!
 * 3.累加性: 每次的数据 , 第一次 1-20 条,  第二次我 setData 的时候需要把 1-40 条都数据绑定一下... 以此类推...
 * 4.分页数据的加载性能考量,
 * 5.用户上划触底之后没有更多数据了 , 要避免让用户重复发送请求!
 * 6.控制 start 和 count 这两个参数 , 一般 count 是固定的 10 条 20 条 , start 每次请求都要自增~
 * 要注意封装性 , 不要只是什么功能细节都写死在业务对象里!
 *
 * 类似的还有按钮的防抖与截流 , 防止用户频繁点击请求接口...
 * 如: 1.按钮马上禁用状态 ; 2.要有一个倒计时 ; 3.全局的 loading  , 4.加锁 ; 总的来说都是让用户禁用 ,
 * */