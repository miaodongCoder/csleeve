// components/spu-scroll/index.js

// 每周上新轮播图组件
Component({

  /**
   * 定义外部样式类 , 为了接收外部用户传递进来的一个样式:
   * 因为有时候给自定义组件增加CSS样式的时候会失效 ,
   * 所以要么在外部再包裹一个 view 给这个 view 设置样式
   * 要么就通过外部样式类的方法直接给内部的组件增加样式;
   * */
  externalClasses:['l-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    theme:Object,
    // 这里用驼峰 , 引用该组件的地方属性应该写为连字符 "spu-list" , 小程序不支持属性驼峰;
    spuList:Array
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
