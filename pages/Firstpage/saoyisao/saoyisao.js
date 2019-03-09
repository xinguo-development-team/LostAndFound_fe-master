//login.js
//获取应用实例
var app = getApp();
Page({
  data: {

  },
cancel:function(e){
  wx.navigateTo({
    url: '../Firstpage',
  })
}
})