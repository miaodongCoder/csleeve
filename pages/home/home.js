// pages/home/home.js

import { Banner } from "../../model/banner";
import { Theme } from "../../model/theme"
import { Category } from "../../model/categroy"
import { Activity } from "../../model/activity";

Page({
    /**
     * 页面的初始数据:
     */
    data: {
        // 顶部图片:
        themeA: null,
        bannerB: [],
        gridC: [],
        activityD: null,
    },

    /**
     * 生命周期函数--监听页面加载
     * 
     */
    // ES6的写法:
    async onLoad(options) {
        this.initAllData();
    },

    async initAllData() {
        const themeA = await Theme.getHomeLocationA();
        const bannerB = await Banner.getHomeLocationB();
        const gridC = await Category.getHomeGridCategoryLocationC();
        const activityD = await Activity.getHomeActivityLocationD();

        this.setData({
            themeA: themeA[0],
            bannerB: bannerB,
            gridC: gridC,
            activityD: activityD,
        });
    },

    onPullDownRefresh: function () {

    },

    onReachBottom: function () {

    },

    onShareAppMessage: function () {

    }

})