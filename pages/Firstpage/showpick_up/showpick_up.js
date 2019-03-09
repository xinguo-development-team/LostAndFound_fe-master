// pages/Firstpage/showlost/showlost.js
//var Firstpage = require('../Firstpage/Firstpage.js'); 如何使用它？？


Page({

  /**
   * 页面的初始数据
   */
  data: {
    messages: [{
      title: "李霞",
      // url: "http://img1.3lian.com/gif/more/11/201212/0d1252b54be4f2d240b6b7fe4ed35054.jpg",
      url: "http://img.hcfyww.net/image/lost_things/deng@2x.png",
      locate: "http://img1.3lian.com/gif/more/11/201212/0d1252b54be4f2d240b6b7fe4ed35054.jpg",
      classroom: "捡到地点：红湘校区 1教311",
      classroom2: "丢失地点：红湘校区 新2教110",
      time: "捡到时间：2018.2.15",
      time2: "丢失时间：2018.2.11",
      clock: "今天：12：30",
      
      phone: 135780922234,
      lostscribe: "丢失了一件挂在书包上的小布娃娃，身体是像有泥土一样的颜色，头部是黄色，希望有捡到的同学联系我。",
      getscribe: "捡到一件挂在书包上的小布娃娃，身体是像有泥土一样的颜色，头部是黄色，请有丢失的同学联系我。",
      type: '服饰',
      count: 5
    },
    {
      title: "马腾",
      //url: "http://img1.3lian.com/gif/more/11/201212/cd1d745ed855bef27f47c8aff0786067.jpg",
      url: "http://img.hcfyww.net/image/lost_things/bao@2x.png",
      locate: "http://img1.3lian.com/gif/more/11/201212/cd1d745ed855bef27f47c8aff0786067.jpg",
      message: "捡到地点：红湘校区 6教101",
      message2: "丢失地点：红湘校区 老二教203",
      time: "捡到时间：2018.2.13",
      time2: "丢失时间：2018.1.15",
      clock: "今天：12：30",
      count: 22
    },
    {
      title: "杨李维",
      url: "http://img.hcfyww.net/image/lost_things/san@2x.png",
      locate: "http://img1.3lian.com/gif/more/11/201212/cf9d56d05c0cbc1edbf21cf64ad9c341.jpg",
      message: "捡到地点：红湘校区 8教508",
      message2: "丢失地点：红湘校区 9教109",
      time: "捡到时间：2018.2.11",
      time2: "丢失时间：2018.1.13",
      clock: "今天：12：30",
      count: 0
    },
    {
      title: "黄彦宏",
      // url: "http://img1.3lian.com/gif/more/11/201212/c011f2b2ab1a10d79fe931a786503d03.jpg",
      url: "http://img.hcfyww.net/image/lost_things/deng@2x.png",
      locate: "http://img1.3lian.com/gif/more/11/201212/c011f2b2ab1a10d79fe931a786503d03.jpg",
      message: "捡到地点：红湘校区 1教311",
      message2: "丢失地点：红湘校区 新2教110",
      time: "捡到时间：2019.1.21",
      time2: "丢失时间：2019.1.11",
      clock: "今天：12：30",
      count: 1
    },
    {
      title: "军雷",
      //url: "http://img1.3lian.com/gif/more/11/201212/cf9d56d05c0cbc1edbf21cf64ad9c341.jpg",
      url: "http://img.hcfyww.net/image/lost_things/bao@2x.png",
      locate: "http://img1.3lian.com/gif/more/11/201212/cf9d56d05c0cbc1edbf21cf64ad9c341.jpg",
      message: "捡到地点：红湘校区 6教111",
      message2: "丢失地点：红湘校区 9教411",
      time: "捡到时间：2018.11.11",
      time2: "丢失时间：2018.12.11",
      clock: "今天：12：30",
      count: 0
    },
    {
      title: "贾名",
      //url: "http://img1.3lian.com/gif/more/11/201212/04b335ead07530a6188a27549fad1a68.jpg",
      url: "http://img.hcfyww.net/image/lost_things/san@2x.png",
      locate: "http://img1.3lian.com/gif/more/11/201212/04b335ead07530a6188a27549fad1a68.jpg",
      message: "捡到地点：红湘校区 1教311",
      message2: "丢失地点：红湘校区 新2教110",
      time: "捡到时间：2018.10.11",
      time2: "丢失时间：2018.9.11",
      clock: "今天：12：30",
      count: 0
    }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})