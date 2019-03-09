//获取应用实例
var app = getApp()
var that;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    phone: '',
    content: "",
    noteNowLen: 0, //备注当前字数
    types: ["书本", "首饰品", "水杯", "笔", "卡类（银行卡等）", "数码用品类（手机等等）", "伞", "包类（书包等）", "服饰类（帽子、衣服等）", "钥匙"],
    typeIndex: "0",
   
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this;
    that.setData({ //初始化数据
      src: "",
      isSrc: false,
      ishide: "0",
      autoFocus: true,
      isLoading: false,
      loading: true,
      isdisabled: false
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.hideToast()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var myInterval = setInterval(getReturn, 500); ////半秒定时查询
    function getReturn() {
      wx.getStorage({
        key: 'user_openid',
        success: function (ress) {
          if (ress.data) {
            clearInterval(myInterval)
            that.setData({
              loading: true
            })
          }
        }
      })
    }
  },
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },



  //改变活动类别
  bindTypeChange: function (e) {
    this.setData({
      typeIndex: e.detail.value
    })
  },


  //表单验证
  showTopTips: function () {
    var that = this;
    this.setData({
      showTopTips: true
    });
    setTimeout(function () {
      that.setData({
        showTopTips: false
      });
    }, 3000);
  },
  //提交表单
  submitForm: function (e) {
    var that = this;
    var name = e.detail.value.name; //用哪种方法保存用户填写的信息，并进行是否非空验证？ that.data.name
    var phone = e.detail.value.phone;
    var content = e.detail.value.content; //什么时候从
    //------发布者真实信息------
    var realname = e.detail.value.realname;
    var contactindex = this.data.accountIndex;
    //先进行表单非空验证
    if (name == '') {
      this.setData({
        showTopTips: true,
        TopTips: '输入物品名称'
      });
    }else {
      console.log('校验完毕');
      that.setData({
        isLoading: true,
        isdisabled: true
      })
      //向 Events 表中新增一条数据
      wx.getStorage({
        key: 'user_id',
        success: function (ress) {
          var Diary = Bmob.Object.extend("Events");
          var diary = new Diary();
          var me = new Bmob.User();
          me.id = ress.data;
          diary.set("title", title);
          diary.set("endtime", endtime);
          diary.set("acttype", acttype + "");
          diary.set("isShow", 1);
          diary.set("address", address);
          diary.set("longitude", longitude); //经度
          diary.set("latitude", latitude); //纬度\
          if (that.data.peopleHide) { //如果设置了人数
            diary.set("peoplenum", peoplenum);
          } else if (!that.data.peopleHide) {
            diary.set("peoplenum", "-1");
          }
          diary.set("content", content);
          diary.set("publisher", me);
          diary.set("likenum", 0);
          diary.set("commentnum", 0);
          diary.set("liker", []);
          diary.set("joinnumber", 0); //发布后初始加入人数为0
          diary.set("joinArray", []);
          if (that.data.isSrc == true) {
            var name = that.data.src; //上传图片的别名
            var file = new Bmob.File(name, that.data.src);
            file.save();
            diary.set("actpic", file);
          }
          //新增操作
          diary.save(null, {
            success: function (result) {
              //活动扩展表中添加一条记录
              var Diary = Bmob.Object.extend("EventMore");
              var query = new Diary();
              var Events = Bmob.Object.extend("Events");
              var event = new Events();
              event.id = result.id;
              query.set("Status", 0);
              query.set("Statusname", "准备中");
              query.set("event", event);
              //如果上传了群二维码
              if (that.data.isCodeSrc == true) {
                var name = that.data.codeSrc; //上传图片的别名
                var file = new Bmob.File(name, that.data.codeSrc);
                file.save();
                query.set("qrcode", file);
              }
              query.save();

              //再将发布者的信息添加到联系表中
              wx.getStorage({
                key: 'user_id',
                success: function (ress) {
                  var Contacts = Bmob.Object.extend("Contacts");
                  var contact = new Contacts();
                  var Events = Bmob.Object.extend("Events");
                  var event = new Events();
                  event.id = result.id;
                  var me = new Bmob.User();
                  me.id = ress.data;
                  contact.set("publisher", me); //发布人是自己
                  contact.set("currentUser", me); //参加的人也是自己
                  contact.set("event", event);
                  contact.set("realname", realname);
                  contact.set("contactWay", contactWay);
                  contact.set("contactValue", contactValue);
                  contact.save();
                },
              })

              console.log("发布成功,objectId:" + result.id);
              that.setData({
                isLoading: false,
                isdisabled: false,
                eventId: result.id,
              })
              //添加成功，返回成功之后的objectId(注意，返回的属性名字是id,而不是objectId)
              common.dataLoading("发起成功", "success", function () {
                //重置表单
                that.setData({
                  title: '',
                  typeIndex: 0,
                  address: '点击选择位置',
                  longitude: 0, //经度
                  latitude: 0, //纬度
                  data: formate_data(myDate),
                  isHide: true,
                  peoplenum: 0,
                  peopleHide: false,
                  isAgree: false,
                  accountIndex: 0,
                  realname: "",
                  content: "",
                  contactValue: '',
                  noteNowLen: 0,
                  showInput: false,
                  src: "",
                  isSrc: false,
                  codeSrc: "",
                  isCodeSrc: false

                })
              });
            },
            error: function (result, error) {
              //添加失败
              console.log("发布失败=" + error);
              common.dataLoading("发起失败", "loading");
              that.setData({
                isLoading: false,
                isdisabled: false
              })
            }
          })
        },
      })
    }
    setTimeout(function () {
      that.setData({
        showTopTips: false
      });
    }, 1000);
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

  },
  goback: function () {
    wx.navigateTo({
      url: '/page/find/find',
    })
  }
})

