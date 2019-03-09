//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isShowUserPannel: true, //是否显示个人中心面板
  },
  onLoad: function () {
  },
  showUserPannel: function () {
  },
    bindViewTap:function(){
   wx.redirectTo({
     url: '/pages/center/center',
   })
   wx.switchTab({
     url: '/pages/center/center', /*关闭当前的tabBar页面，跳转到navigator指定的url */
   })
    },
    /*goback:function(){
    wx.navigateTo({
      url: '/page/find/find',
    })
    }*/
})