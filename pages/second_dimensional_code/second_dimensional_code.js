// pages/second_dimensional_code/second_dimensional_code.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code_img: [{
      img1: "http://img.hcfyww.net/image/code_img/code_1.png",
      img2: "http://img.hcfyww.net/image/code_img/code_2.png",
      ifFirst:true
    }, {
        img1: "http://img.hcfyww.net/image/code_img/code_3.png",
        img2: "http://img.hcfyww.net/image/code_img/code_4.png"

    }, {
        img1: "http://img.hcfyww.net/image/code_img/code_5.png",
        img2: "http://img.hcfyww.net/image/code_img/code_6.png"

    }, {
        img1: "http://img.hcfyww.net/image/code_img/code_7.png",
        img2: "http://img.hcfyww.net/image/code_img/code_8.png"

    }, {
        img1: "http://img.hcfyww.net/image/code_img/code_9.png",
        img2: "http://img.hcfyww.net/image/code_img/code_10.png"

    }, {
        img1: "http://img.hcfyww.net/image/code_img/code_11.png",
        img2: "http://img.hcfyww.net/image/code_img/code_12.png"

    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },
  click: function () {
    wx.navigateTo({
      url: '../second_dimensional_code/print_code/print_code',/*为何不能是同一阶层里面跳转到某wxml文件里面？ */
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})