// components/hot-list/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    banner: Object,
  },

  /**
   * 新版本的监听器 , 可以监听多个对象~
   * */
  observers: {
    'banner' : function (banner) {
      if (!banner || banner.items.length == 0) return;
      // 找到三个元素:
      const left        = banner.items.find(item => item.name == 'left');
      const rightTop    = banner.items.find(item => item.name == 'right-top');
      const rightBottom = banner.items.find(item => item.name == 'right-bottom');
      // 最后做数据绑定:
      this.setData({
        left: left,
        rightTop: rightTop,
        rightBottom : rightBottom
      });
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
