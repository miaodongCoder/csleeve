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
        // const themes = await Theme.getThemes();
        // find 函数: return 返回一个匹配的条件
        // const themeA = themes.find((theme) => theme.name === 't-1');

        // const theme = new Theme();
        // await theme.getThemes(); // 请求接口~
        // const themeA =  theme.getHomeLocationA();
        // const themeE =  theme.getHomeLocationE();


        const theme = new Theme();
        await theme.getThemes();  // 请求接口
        const themeA = await theme.getHomeLocationA();
        const themeE = await theme.getHomeLocationE();



        const bannerB = await Banner.getHomeLocationB();
        const gridC = await Category.getHomeGridCategoryLocationC();
        const activityD = await Activity.getHomeActivityLocationD();

        this.setData({
            themeA: themeA,
            bannerB: bannerB,
            gridC: gridC,
            activityD: activityD,
            themeE: themeE,
            // themeF: themes[2],
            // themeH: themes[3],
        });
    },

    onPullDownRefresh: function () {

    },

    onReachBottom: function () {

    },

    onShareAppMessage: function () {

    }

})