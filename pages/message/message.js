//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    result: '',
    messages:[
      {
        image: "http://img1.3lian.com/gif/more/11/201212/0d1252b54be4f2d240b6b7fe4ed35054.jpg",
      name:"马爸爸",
      message:"呵呵，微信小程序比得我支付宝么",
      time:"昨天"
      /*使用dataformat获取当前时间，具体百度*/
      },
      {
        image: "http://img1.3lian.com/gif/more/11/201212/cd1d745ed855bef27f47c8aff0786067.jpg",
        name: "马化腾",
        message: "小子，你说话小心点",
        time: "昨天"
      },
      {
        image: "http://img1.3lian.com/gif/more/11/201212/cf9d56d05c0cbc1edbf21cf64ad9c341.jpg",
        name: "雷军",
        message: "是时候，该小米来秀一波了",
        time: "今天3:00"
      }]
  },

  onLoad: function () {

  },

  getScancode: function () {
    var _this = this;
    // 允许从相机和相册扫码
    wx.scanCode({
      success: (res) => {
        var result = res.result;

        _this.setData({
          result: result,

        })
      }
    })

  }

})