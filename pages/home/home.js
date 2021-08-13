// pages/home/home.js

import { Banner } from "../../model/banner";
import { Theme } from "../../model/theme"


Page({
    /**
     * 页面的初始数据:
     */
    data: {
        // 顶部图片:
        themeA:null,
        bannerB : []
    },

    /**
     * 生命周期函数--监听页面加载
     * 
     */
    // ES6的写法:
    async onLoad (options) {
        this.initAllData();  
    },

    async initAllData () {
        const themeA = await Theme.getHomeLocationA();
        const bannerB = await Banner.getHomeLocationB();
        this.setData({
            themeA  : themeA[0],
            bannerB : bannerB,
        });
    },

    onPullDownRefresh: function () {

    },

    onReachBottom: function () {

    },

    onShareAppMessage: function () {

    }

})