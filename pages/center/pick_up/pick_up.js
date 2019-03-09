//获取应用实例
var app = getApp()
var that;
var myDate = new Date();
//格式化日期
function formate_data(myDate) {
  let month_add = myDate.getMonth() + 1;
  var formate_result = myDate.getFullYear() + '-' +
    month_add + '-' +
    myDate.getDate()
  return formate_result;
}
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
    multiArray: [
      ['1教', '新2教', '老2教', '3教', '4教', '5教', '6教', '7教', '8教', '9教'],
      ['1楼', '2楼', '3楼', '4楼', '5楼', '6楼'],
      ['101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118']
    ],
    objectMultiArray: [
      [{
        id: 0,
        name: '1教'
      },
      {
        id: 1,
        name: '新2教'
      },
      {
        id: 1,
        name: '老2教'
      },
      {
        id: 2,
        name: '3教'
      },
      {
        id: 3,
        name: '4教'
      },
      {
        id: 4,
        name: '5教'
      },
      {
        id: 5,
        name: '6教'
      },
      {
        id: 6,
        name: '7教'
      },
      {
        id: 7,
        name: '8教'
      },
      {
        id: 8,
        name: '9教'
      }
      ],
      [{
        id: 0,
        name: '1楼'
      },
      {
        id: 1,
        name: '2楼'
      },
      {
        id: 2,
        name: '3楼'
      },
      {
        id: 3,
        name: '4楼'
      },
      {
        id: 4,
        name: '5楼'
      },
      {
        id: 5,
        name: '6楼'
      }
      ],
      [{
        id: 0,
        name: '101'
      },
      {
        id: 1,
        name: '102'
      },
      {
        id: 3,
        name: '103'
      },
      {
        id: 4,
        name: '104'
      }, {
        id: 0,
        name: '105'
      },
      {
        id: 1,
        name: '106'
      },
      {
        id: 3,
        name: '107'
      },
      {
        id: 4,
        name: '108'
      }, {
        id: 0,
        name: '109'
      },
      {
        id: 1,
        name: '110'
      },
      {
        id: 3,
        name: '111'
      },
      {
        id: 4,
        name: '112'
      }, {
        id: 0,
        name: '113'
      },
      {
        id: 1,
        name: '114'
      },
      {
        id: 3,
        name: '115'
      },
      {
        id: 4,
        name: '116'
      }, {
        id: 0,
        name: '117'
      },
      {
        id: 1,
        name: '118'
      }

      ]
    ],
    multiIndex: [0, 0, 0],
    date: '2019-02-27'
  },

  tapNotice: function (e) {
    if (e.target.id == 'notice') {
      this.hideNotice();
    }
  },
  showNotice: function (e) {
    this.setData({
      'notice_status': true
    });
  },
  hideNotice: function (e) {
    this.setData({
      'notice_status': false
    });
  },


  //字数改变触发事件
  bindTextAreaChange: function (e) {
    var that = this
    var value = e.detail.value,
      len = parseInt(value.length);
    if (len > that.data.noteMaxLen)
      return;
    that.setData({
      content: value,
      noteNowLen: len
    })
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
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0: //第一列
        switch (data.multiIndex[0]) {
          case 0: //第一列，  
            data.multiArray[1] = ['1楼', '2楼', '3楼', '4楼', '5楼', '6楼'];
            data.multiArray[2] = ['101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118'];
            break;
          case 1: //第一列，  
            data.multiArray[1] = ['1楼', '2楼', '3楼', '4楼', '5楼', '6楼'];
            data.multiArray[2] = ['101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118'];
            break;
          case 2: //第一列，  
            data.multiArray[1] = ['1楼', '2楼', '3楼', '4楼', '5楼', '6楼'];
            data.multiArray[2] = ['101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118'];
            break;
          case 3: //第一列，  
            data.multiArray[1] = ['1楼', '2楼', '3楼', '4楼', '5楼', '6楼'];
            data.multiArray[2] = ['101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118'];
            break;
          case 4: //第一列，  
            data.multiArray[1] = ['1楼', '2楼', '3楼', '4楼', '5楼', '6楼'];
            data.multiArray[2] = ['101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118'];
            break;
          case 5: //第一列，  
            data.multiArray[1] = ['1楼', '2楼', '3楼', '4楼', '5楼', '6楼'];
            data.multiArray[2] = ['101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118'];
            break;
          case 6: //第一列，  
            data.multiArray[1] = ['1楼', '2楼', '3楼', '4楼', '5楼', '6楼'];
            data.multiArray[2] = ['101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118'];
            break;
          case 7: //第一列，  
            data.multiArray[1] = ['1楼', '2楼', '3楼', '4楼', '5楼', '6楼'];
            data.multiArray[2] = ['101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118'];
            break;
          case 8: //第一列，  
            data.multiArray[1] = ['1楼', '2楼', '3楼', '4楼', '5楼', '6楼'];
            data.multiArray[2] = ['101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118'];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      case 1: //第二列
        switch (data.multiIndex[0]) {
          case 0: //第一列中的第一个
            switch (data.multiIndex[1]) {
              case 0: //第二列中的第一个
                data.multiArray[2] = ['101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118'];
                break;
              case 1: //第二列中的第二个
                data.multiArray[2] = ['201', '202', '203', '204', '205', '206', '207', '208', '209', '210', '211', '212', '213', '214', '215', '216', '217', '218'];
                break;
              case 2: //第二列中的第三个，以此类推
                data.multiArray[2] = ['301', '302', '303', '304', '305', '306', '307', '308', '309', '310', '311', '312', '313', '314', '315', '316', '317', '318'];
                break;
              case 3:
                data.multiArray[2] = ['401', '402', '403', '404', '405', '406', '407', '408', '409', '410', '411', '412', '413', '414', '415', '416', '417', '418'];
                break;
              case 4:
                data.multiArray[2] = ['501', '502', '503', '504', '505', '506', '507', '508', '509', '510', '511', '512', '513', '514', '515', '516', '517', '518'];
                break;
              case 5:
                data.multiArray[2] = ['601', '602', '603', '604', '605', '606', '607', '608', '609', '610', '611', '612', '613', '614', '615', '616', '617', '618'];
                break;
            }

            break;
          case 2: //第一列中的第一个
            switch (data.multiIndex[1]) {
              case 0: //第二列中的第一个
                data.multiArray[2] = ['101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118'];
                break;
              case 1: //第二列中的第二个
                data.multiArray[2] = ['201', '202', '203', '204', '205', '206', '207', '208', '209', '210', '211', '212', '213', '214', '215', '216', '217', '218'];
                break;
              case 2: //第二列中的第三个，以此类推
                data.multiArray[2] = ['301', '302', '303', '304', '305', '306', '307', '308', '309', '310', '311', '312', '313', '314', '315', '316', '317', '318'];
                break;
              case 3:
                data.multiArray[2] = ['401', '402', '403', '404', '405', '406', '407', '408', '409', '410', '411', '412', '413', '414', '415', '416', '417', '418'];
                break;
              case 4:
                data.multiArray[2] = ['501', '502', '503', '504', '505', '506', '507', '508', '509', '510', '511', '512', '513', '514', '515', '516', '517', '518'];
                break;
              case 5:
                data.multiArray[2] = ['601', '602', '603', '604', '605', '606', '607', '608', '609', '610', '611', '612', '613', '614', '615', '616', '617', '618'];
                break;
            }

            break;
          case 3: //第一列中的第一个
            switch (data.multiIndex[1]) {
              case 0: //第二列中的第一个
                data.multiArray[2] = ['101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118'];
                break;
              case 1: //第二列中的第二个
                data.multiArray[2] = ['201', '202', '203', '204', '205', '206', '207', '208', '209', '210', '211', '212', '213', '214', '215', '216', '217', '218'];
                break;
              case 2: //第二列中的第三个，以此类推
                data.multiArray[2] = ['301', '302', '303', '304', '305', '306', '307', '308', '309', '310', '311', '312', '313', '314', '315', '316', '317', '318'];
                break;
              case 3:
                data.multiArray[2] = ['401', '402', '403', '404', '405', '406', '407', '408', '409', '410', '411', '412', '413', '414', '415', '416', '417', '418'];
                break;
              case 4:
                data.multiArray[2] = ['501', '502', '503', '504', '505', '506', '507', '508', '509', '510', '511', '512', '513', '514', '515', '516', '517', '518'];
                break;
              case 5:
                data.multiArray[2] = ['601', '602', '603', '604', '605', '606', '607', '608', '609', '610', '611', '612', '613', '614', '615', '616', '617', '618'];
                break;
            }

            break;
          case 1: //第一列中的第一个
            switch (data.multiIndex[1]) {
              case 0: //第二列中的第一个
                data.multiArray[2] = ['101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118'];
                break;
              case 1: //第二列中的第二个
                data.multiArray[2] = ['201', '202', '203', '204', '205', '206', '207', '208', '209', '210', '211', '212', '213', '214', '215', '216', '217', '218'];
                break;
              case 2: //第二列中的第三个，以此类推
                data.multiArray[2] = ['301', '302', '303', '304', '305', '306', '307', '308', '309', '310', '311', '312', '313', '314', '315', '316', '317', '318'];
                break;
              case 3:
                data.multiArray[2] = ['401', '402', '403', '404', '405', '406', '407', '408', '409', '410', '411', '412', '413', '414', '415', '416', '417', '418'];
                break;
              case 4:
                data.multiArray[2] = ['501', '502', '503', '504', '505', '506', '507', '508', '509', '510', '511', '512', '513', '514', '515', '516', '517', '518'];
                break;
              case 5:
                data.multiArray[2] = ['601', '602', '603', '604', '605', '606', '607', '608', '609', '610', '611', '612', '613', '614', '615', '616', '617', '618'];
                break;
            }

            break;
          case 4: //第一列中的第一个
            switch (data.multiIndex[1]) {
              case 0: //第二列中的第一个
                data.multiArray[2] = ['101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118'];
                break;
              case 1: //第二列中的第二个
                data.multiArray[2] = ['201', '202', '203', '204', '205', '206', '207', '208', '209', '210', '211', '212', '213', '214', '215', '216', '217', '218'];
                break;
              case 2: //第二列中的第三个，以此类推
                data.multiArray[2] = ['301', '302', '303', '304', '305', '306', '307', '308', '309', '310', '311', '312', '313', '314', '315', '316', '317', '318'];
                break;
              case 3:
                data.multiArray[2] = ['401', '402', '403', '404', '405', '406', '407', '408', '409', '410', '411', '412', '413', '414', '415', '416', '417', '418'];
                break;
              case 4:
                data.multiArray[2] = ['501', '502', '503', '504', '505', '506', '507', '508', '509', '510', '511', '512', '513', '514', '515', '516', '517', '518'];
                break;
              case 5:
                data.multiArray[2] = ['601', '602', '603', '604', '605', '606', '607', '608', '609', '610', '611', '612', '613', '614', '615', '616', '617', '618'];
                break;
            }

            break;
          case 5: //第一列中的第一个
            switch (data.multiIndex[1]) {
              case 0: //第二列中的第一个
                data.multiArray[2] = ['101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118'];
                break;
              case 1: //第二列中的第二个
                data.multiArray[2] = ['201', '202', '203', '204', '205', '206', '207', '208', '209', '210', '211', '212', '213', '214', '215', '216', '217', '218'];
                break;
              case 2: //第二列中的第三个，以此类推
                data.multiArray[2] = ['301', '302', '303', '304', '305', '306', '307', '308', '309', '310', '311', '312', '313', '314', '315', '316', '317', '318'];
                break;
              case 3:
                data.multiArray[2] = ['401', '402', '403', '404', '405', '406', '407', '408', '409', '410', '411', '412', '413', '414', '415', '416', '417', '418'];
                break;
              case 4:
                data.multiArray[2] = ['501', '502', '503', '504', '505', '506', '507', '508', '509', '510', '511', '512', '513', '514', '515', '516', '517', '518'];
                break;
              case 5:
                data.multiArray[2] = ['601', '602', '603', '604', '605', '606', '607', '608', '609', '610', '611', '612', '613', '614', '615', '616', '617', '618'];
                break;
            }

            break;
          case 6: //第一列中的第一个
            switch (data.multiIndex[1]) {
              case 0: //第二列中的第一个
                data.multiArray[2] = ['101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118'];
                break;
              case 1: //第二列中的第二个
                data.multiArray[2] = ['201', '202', '203', '204', '205', '206', '207', '208', '209', '210', '211', '212', '213', '214', '215', '216', '217', '218'];
                break;
              case 2: //第二列中的第三个，以此类推
                data.multiArray[2] = ['301', '302', '303', '304', '305', '306', '307', '308', '309', '310', '311', '312', '313', '314', '315', '316', '317', '318'];
                break;
              case 3:
                data.multiArray[2] = ['401', '402', '403', '404', '405', '406', '407', '408', '409', '410', '411', '412', '413', '414', '415', '416', '417', '418'];
                break;
              case 4:
                data.multiArray[2] = ['501', '502', '503', '504', '505', '506', '507', '508', '509', '510', '511', '512', '513', '514', '515', '516', '517', '518'];
                break;
              case 5:
                data.multiArray[2] = ['601', '602', '603', '604', '605', '606', '607', '608', '609', '610', '611', '612', '613', '614', '615', '616', '617', '618'];
                break;
            }

            break;
          case 7: //第一列中的第一个
            switch (data.multiIndex[1]) {
              case 0: //第二列中的第一个
                data.multiArray[2] = ['101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118'];
                break;
              case 1: //第二列中的第二个
                data.multiArray[2] = ['201', '202', '203', '204', '205', '206', '207', '208', '209', '210', '211', '212', '213', '214', '215', '216', '217', '218'];
                break;
              case 2: //第二列中的第三个，以此类推
                data.multiArray[2] = ['301', '302', '303', '304', '305', '306', '307', '308', '309', '310', '311', '312', '313', '314', '315', '316', '317', '318'];
                break;
              case 3:
                data.multiArray[2] = ['401', '402', '403', '404', '405', '406', '407', '408', '409', '410', '411', '412', '413', '414', '415', '416', '417', '418'];
                break;
              case 4:
                data.multiArray[2] = ['501', '502', '503', '504', '505', '506', '507', '508', '509', '510', '511', '512', '513', '514', '515', '516', '517', '518'];
                break;
              case 5:
                data.multiArray[2] = ['601', '602', '603', '604', '605', '606', '607', '608', '609', '610', '611', '612', '613', '614', '615', '616', '617', '618'];
                break;
            }

            break;
          case 8: //第一列中的第一个
            switch (data.multiIndex[1]) {
              case 0: //第二列中的第一个
                data.multiArray[2] = ['101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118'];
                break;
              case 1: //第二列中的第二个
                data.multiArray[2] = ['201', '202', '203', '204', '205', '206', '207', '208', '209', '210', '211', '212', '213', '214', '215', '216', '217', '218'];
                break;
              case 2: //第二列中的第三个，以此类推
                data.multiArray[2] = ['301', '302', '303', '304', '305', '306', '307', '308', '309', '310', '311', '312', '313', '314', '315', '316', '317', '318'];
                break;
              case 3:
                data.multiArray[2] = ['401', '402', '403', '404', '405', '406', '407', '408', '409', '410', '411', '412', '413', '414', '415', '416', '417', '418'];
                break;
              case 4:
                data.multiArray[2] = ['501', '502', '503', '504', '505', '506', '507', '508', '509', '510', '511', '512', '513', '514', '515', '516', '517', '518'];
                break;
              case 5:
                data.multiArray[2] = ['601', '602', '603', '604', '605', '606', '607', '608', '609', '610', '611', '612', '613', '614', '615', '616', '617', '618'];
                break;
            }

            break;
          case 9: //第一列中的第一个
            switch (data.multiIndex[1]) {
              case 0: //第二列中的第一个
                data.multiArray[2] = ['101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118'];
                break;
              case 1: //第二列中的第二个
                data.multiArray[2] = ['201', '202', '203', '204', '205', '206', '207', '208', '209', '210', '211', '212', '213', '214', '215', '216', '217', '218'];
                break;
              case 2: //第二列中的第三个，以此类推
                data.multiArray[2] = ['301', '302', '303', '304', '305', '306', '307', '308', '309', '310', '311', '312', '313', '314', '315', '316', '317', '318'];
                break;
              case 3:
                data.multiArray[2] = ['401', '402', '403', '404', '405', '406', '407', '408', '409', '410', '411', '412', '413', '414', '415', '416', '417', '418'];
                break;
              case 4:
                data.multiArray[2] = ['501', '502', '503', '504', '505', '506', '507', '508', '509', '510', '511', '512', '513', '514', '515', '516', '517', '518'];
                break;
              case 5:
                data.multiArray[2] = ['601', '602', '603', '604', '605', '606', '607', '608', '609', '610', '611', '612', '613', '614', '615', '616', '617', '618'];
                break;
            }

            break;

        }
        data.multiIndex[2] = 0;
        console.log(data.multiIndex);
        break;
    }
    this.setData(data);
  },

  //上传活动图片
  uploadPic: function () { //选择图标
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['compressed'], //压缩图
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        that.setData({
          isSrc: true,
          src: tempFilePaths
        })
      }
    })
  },

  //删除图片
  clearPic: function () { //删除图片
    that.setData({
      isSrc: false,
      src: ""
    })
  },

  //上传活动群二维码
  uploadCodePic: function () { //选择图标
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['compressed'], //压缩图
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        that.setData({
          isCodeSrc: true,
          codeSrc: tempFilePaths
        })
      }
    })
  },

  //删除活动群二维码
  clearCodePic: function () {
    that.setData({
      isCodeSrc: false,
      codeSrc: ""
    })
  },

  //限制人数
  switch1Change: function (e) {
    if (e.detail.value == false) {
      this.setData({
        peopleHide: false
      })
    } else if (e.detail.value == true) {
      this.setData({
        peopleHide: true
      })
    }
  },

  //改变活动类别
  bindTypeChange: function (e) {
    this.setData({
      typeIndex: e.detail.value
    })
  },

  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
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
        TopTips: '输入联系人姓名'
      });
    } else if (phone == "") {
      this.setData({
        showTopTips: true,
        TopTips: '请输入联系方式'
      });
    } else if (content == "") {
      this.setData({
        showTopTips: true,
        TopTips: '请输入物品描述'
      });
    } else {
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
