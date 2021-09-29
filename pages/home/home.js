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
        themeE: null,
        themeESpu: null,
        themeF: null,
        bannerG : null,
        themeH: null,
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
        const theme = new Theme();
        await theme.getThemes();  // 请求接口
        const themeA    = await theme.getHomeLocationA();
        const bannerB   = await Banner.getHomeLocationB();
        const gridC     = await Category.getHomeGridCategoryLocationC();
        const activityD = await Activity.getHomeActivityLocationD();
        const themeE    = await theme.getHomeLocationE();
        const themeESpu = await Theme.getHomeLocationESpu();
        const themeF    = await theme.getHomeLocationF();
        const bannerG   = await Banner.getHomeLocationG();
        const themeH    = await theme.getHomeLocationH();

        this.setData({
            themeA: themeA,
            bannerB: bannerB,
            gridC: gridC,
            activityD: activityD,
            themeE: themeE,
            themeESpu: themeESpu,
            themeF: themeF,
            bannerG : bannerG,
            themeH: themeH,
        });
    },

    onPullDownRefresh: function () {

    },

    onReachBottom: function () {

    },

    onShareAppMessage: function () {

    }

})