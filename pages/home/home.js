// pages/home/home.js

import { Theme } from "../../model/theme"


Page({
    /**
     * 页面的初始数据:
     */
    data: {
        // 顶部图片:
        topTheme:null,
    },

    /**
     * 生命周期函数--监听页面加载
     * 
     */
    // ES6的写法:
    onLoad: function (options) {
        Theme.getHomeLocationA((data) => {
            this.setData({
                topTheme:data[0]
            });
        });
    },

    onPullDownRefresh: function () {

    },

    onReachBottom: function () {

    },

    onShareAppMessage: function () {

    }

})