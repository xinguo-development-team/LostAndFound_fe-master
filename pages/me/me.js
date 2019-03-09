/**  作者：Code4Android
 *   项目地址：https://github.com/xiehui999/SmallAppForQQ
 *   新浪微博：http://weibo.com/745687294
 *   CSDN  :    http://blog.csdn.net/xiehuimx?viewmode=contents
 *   简书   :   http://www.jianshu.com/users/d5b531888b2b/latest_articles
 * */
Page({
  data: {
    // text:"这是一个页面"
    isHiddenToast: true,
    messages: [
      {
        groupName: "签到",
        icon: "http://img.hcfyww.net/image/me_1.png",
        rightImage: "http://img.hcfyww.net/image/tip.png"
      },
      {
        groupName: "我的代金券",
        icon: "http://img.hcfyww.net/image/me_2.png",
        rightImage: "http://img.hcfyww.net/image/tip.png"
      },
      {
        groupName: "我的丢失物品",
        icon: "http://img.hcfyww.net/image/me_3.png",
        rightImage: "http://img.hcfyww.net/image/tip.png"
      },
      {
        groupName: "我的好人好事记录",
        icon: "http://img.hcfyww.net/image/me_4.png",
        rightImage: "http://img.hcfyww.net/image/tip.png"
      },
      {
        groupName: "成功归还记录",
        icon: "http://img.hcfyww.net/image/me_5.png",
        rightImage: "http://img.hcfyww.net/image/tip.png"
      },
      {
        groupName: "成功寻回记录",
        icon: "http://img.hcfyww.net/image/me_6.png",
        rightImage: "http://img.hcfyww.net/image/tip.png"
      },
      {
        groupName: "个性化背景",
        icon: "http://img.hcfyww.net/image/me_7.png",
        rightImage: "http://img.hcfyww.net/image/tip.png"
      },
      {
        groupName: "账号设置",
        icon: "http://img.hcfyww.net/image/me_8.png",
        rightImage: "http://img.hcfyww.net/image/tip.png"
      }
    ],
    idx: 0
  },

  isShowToast: function () {
    this.setData({
      isHiddenToast: false
    })
  },
  toastChange: function () {
    this.setData({
      isHiddenToast: true
    })
  },
  toPage: function (event) {
    //点击跳转菜单，获取当前的index值
    var Ind = event.currentTarget.dataset.index;
    console.log(Ind);
    switch (Ind) {
      case 3://判断跳转页面
        wx.navigateTo({
          url: "/pages/dynamic/music/music"
        });
    }
  },
  bindtap0: function () {
    console.log(0)
  },
  bindtap1: function () {
    console.log(1)
  },

  bindtap2: function () {
    console.log(2)
  },
  bindtap3: function () {
    console.log(3)
    wx.navigateTo({
      url: "/pages/dynamic/music/music"
    })
  },
  bindtap4: function () {
    console.log(4)
  },
  bindtap5: function () {
    console.log(5)
  },
  bindtap6: function () {
    console.log(6)
  },
  bindtap7: function () {
    console.log(7)
  },
  bindtap8: function () {
    console.log(8)
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  bindtap: function (event) {
    wx.navigateTo({
      url: "/pages/message/search/search"
    })
  }
})