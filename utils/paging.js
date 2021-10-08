import {Http} from "./http";

class Paging {
    // 不关系细节
    // 我需要下一页数据了 , 你能给我吗 ?

    // paing 对象一定是以实例化对象的形式对外提供
    // 因为 paging 对象要保存状态 , 第几页 , 一页几条数据? 这些都是类所不能提供的!
    // 属性:

    req;            // JS请求对象
    start;
    count;
    locker = false;
    originalUrl;    // 原始的 url , 每次请求的时候都会重复拼接 , 为了防止这种情况 , 在构造方法里保存第一次的最原始的 url;

    // 构造函数:
    constructor(req , count = 10 , start = 0) {
        this.req = req;
        this.count = count;
        this.start = start;
        this.originalUrl = this.req.url;
    }

    /**
     * 获取更多数据:
     */
    getMoreData () {
        // 如果锁住了代表别的请求正在执行 , 不允许本次请求;
        if (!this._getLocker()) return;
        // 如果没锁住就做网络请求:
        this._requestData();
        // 释放锁:
        this._releaseLocker();
    }

    /**
     * 网络请求:
     * @private
     */
    _requestData () {
        Http.request({
           url: `spu/latest`,

        });
    }

    _getCurrentReq () {
        let url      = this.originalUrl;
        const params = `start=${this.start}&count=${this.count}`;
        // 拼接参数的时候要根据情况来判断;
        // 1.完全无参数 ? 拼接;
        // 2.之前就有参数 &拼接;
        if (url.contains("?")) {
            url += '&' + params;
        } else {
            url += '?' + params;
        }
        this.req.url = url;
        return this.req;
    }

    _getLocker () {
        // 如果锁住就获取不到锁:
        if (this.locker) {
            return false;
        }
        this.locker = true;
        return this.locker;
    }

    _releaseLocker () {
        this.locker = false;
    }

}





















