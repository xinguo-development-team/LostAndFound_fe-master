//index.js
//获取应用实例


Page({
  data: {
    navbar: [
      '失物招领', '寻物启事', '话题广场'
    ],
    /*将丢失的物品信息存入到数组中，点击跳转到详细信息面 */

    /*将丢失的物品信息存入到数组中 */
    imgUrls: [
      'http://img.hcfyww.net/image/swiper-1.png',
      'http://img.hcfyww.net/image/swiper-2.png',
      'http://img.hcfyww.net/image/swiper-3.png'
    ],
    banner: [], // 轮播图
    searchInput: '',
    currentTab: 0, // 导航栏切换索引
    toView: 0,
    pageSize: 5, // 每次翻页大小
    totalPages: 0, // 共有多少页
    currentPage: 1, // 当前页码是
    animationData: {}, // 启动动画
    messages: [{
      title: "李霞",
      // url: "http://img1.3lian.com/gif/more/11/201212/0d1252b54be4f2d240b6b7fe4ed35054.jpg",
      url: "http://img.hcfyww.net/image/lost_things/deng@2x.png",
      locate: "http://img1.3lian.com/gif/more/11/201212/0d1252b54be4f2d240b6b7fe4ed35054.jpg",
      message: "捡到地点：红湘校区 1教311",
      message2: "丢失地点：红湘校区 新2教110",
      time: "捡到时间：2018.2.15",
      time2: "丢失时间：2018.2.11",
      clock: "今天：12：30",
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
    ], 
    publish: [{
        content: "再也不用一个个地在失物招领群找回自己丢失的宝贝了，一个信果平台搞定！",
        url: "http://img.hcfyww.net/image/lost_things/deng@2x.png",
        id: "一只小萌新",
        time: "今天12:30",
        attach: "http://img.hcfyww.net/image/swiper-1.png"

      },
      {
        content: "新的学期，新的开始，加油！小伙伴们",
        url: "http://img.hcfyww.net/image/lost_things/san@2x.png",
        id: "香蕉你个不拿拿",
        time: "今天12:30",
        attach: ""
      },
      {
        content: "第一次用这个平台耶，看起来还不错哟，还有信用积分可以对换商品，amazing 《~ ^ ~》",
        url: "http://img.hcfyww.net/image/lost_things/deng@2x.png",
        id: "脚踏实地+仰望星空",
        time: "今天12:30",
        attach: "http://img.hcfyww.net/image/swiper-2.png"

      }
    ],
    result: ''
  },
  // 删除文本框文字icon
  cancelBtnTap: function() {
    this.setData({
      inputFocus: true,
      searchInput: '',
    })
  },
  onShowLostTap: function(e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../Firstpage/showlost/showlost?specialid=' + id
    });
  },
  onShowPick_upTap: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../Firstpage/showpick_up/showpick_up?specialid=' + id
    });
  },
  // 搜索取消
  SearchCancel: function() {
    that.setData({
      searchHotShow: true,
      searchHistoryShow: false,
      searchResultShow: false,
      searchCancelShow: false,
      searchKeyword: '',
      inputFocus: false
    });
  },
  // 文本框获取焦点
  FocusTap: function(e) {
    var searchKeyword = this.data.searchKeyword;
    this.setData({
      searchBtnShow: true,
      searchHotShow: false,
      searchHistoryShow: true,
      searchResultShow: false
    })
  },
  Create_thing:function(){
wx.navigateTo({
  url: '../Firstpage/Create_thing/Create_thing',
})
  },
  // 文本框输入时
  inputChangeTap: function(e) {
    this.setData({
      searchKeyword: e.detail.value
    })
  },
  // 文本框提交
  inputConfirmTap: function(e) {
    var searchKeyword = e.detail.value;
    var searchHistorys = this.data.searchHistorys;
    var that = this;
    if (searchKeyword.trim()) {
      if (searchHistorys.length > 0) {
        if (searchHistorys.indexOf(searchKeyword) < 0) {
          searchHistorys.unshift(searchKeyword);
        }
      } else {
        searchHistorys.push(searchKeyword);
      }
      wx.setStorage({
        key: "searchHistorysKey",
        data: searchHistorys,
        success: function() {
          that.setData({
            searchHistorys: searchHistorys
          });
        }
      });
    }
    this.setData({
      searchKeyword: searchKeyword,
      searchHotShow: false,
      searchHistoryShow: false,
      searchResultShow: true,
      Searchlist: []
    });
    this.onFetchSearchList();
  },
  // 搜索结果
  onFetchSearchList: function() {
    var searchKeyword = this.data.searchKeyword;
    music.getSearchMusic(searchKeyword, res => {
      this.setData({
        Searchlist: this.data.Searchlist.concat(res.data.info)
      });
    });
  },
  // 清除所有历史记录
  onSearchHistoryDeleteAll: function() {
    var that = this;
    wx.removeStorage({
      key: 'searchHistorysKey',
      success: function(res) {
        that.setData({
          searchHistorys: []
        });
      }
    });
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  // 新歌首发    点击翻上一页
  previousMove: function(e) {
    for (var i = this.data.Newsong.length; i > 0; i--) {
      if (i === this.data.toView) {
        this.setData({
          toView: i - 5,
          currentPage: i / 5
        })
        break
      }
    }
  },
  // 新歌首发    点击翻下一页
  nextMove: function(e) {
    for (var i = 0; i < (this.data.Newsong.length - 5); i++) {
      if (i === this.data.toView) {
        this.setData({
          toView: i + 5,
          currentPage: (i + 10) / 5
        })
        break
      }
    }
  },
  // 导航栏操作
  onNavbarTap: function(e) {
    this.setData({
      currentTab: e.currentTarget.dataset.index
    });
  },
  onShow: function() {
    this.setData({
      currentTab: 0,
      searchHotShow: true,
      searchHistoryShow: false,
      searchResultShow: false,
    });
  },
  onReady: function(e) {
    //启动动画
    var animation = wx.createAnimation({
      duration: 1000,
      delay: 1500,
      timingFunction: 'ease',
    })
    this.animation = animation;
    animation.rotateY(90).opacity(0).step();
    this.setData({
      animationData: animation.export()
    })
  },
  getScancode: function() {
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
    wx.navigateTo({
      url: '../Firstpage/saoyisao/saoyisao',
    })
  },

  onLoad: function() {
    //推荐频道  新歌数据
    music.getNewsong(res => {
      wx.hideLoading();
      var pageSize = 5;
      var Newsong = res.data;
      var totalPages = Math.ceil(Newsong.length / pageSize);
      this.setData({
        banner: res.banner,
        Newsong: Newsong,
        totalPages: totalPages
      });
    });
    //分类频道  排行榜分类
    music.getRankclass(res => {
      this.setData({
        Rankclass: res.rank.list
      })
    });
    //分类频道  歌手分类
    music.getSingerclass(res => {
      this.setData({
        Singerclass: res.list
      });
    });
    //搜索频道  热门搜索
    music.getHotSearch(res => {
      this.setData({
        Hotsearch: res.data.info
      });
    });
    // 设置search 结果scrollview的高度
    wx.getSystemInfo({
      success: res => {
        this.setData({
          scrollviewH: res.windowHeight - 90
        });
      }
    });
    // 历史浏览记录 从本地缓存中获取前10条数据
    var searchHistorys = wx.getStorageSync('searchHistorys') || [];
    if (searchHistorys.length > 0) {
      this.setData({
        searchHistorys: searchHistorys.length >= 10 ? searchHistorys.slice(0, 10) : searchHistorys
      });
    }
    //启动页数据
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShareAppMessage: function(res) {
    if (res.from === 'button') {
      console.log(res.target, res)
    }
    return {
      title: '一起打卡学习，每天进步一点点',
      imageUrl: 'http://img.hcfyww.net/image/x-go.png',
    }
  }
})