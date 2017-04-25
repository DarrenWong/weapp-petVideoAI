//index.js
//获取应用实例

var util = require('../../utils/util.js')

var app = getApp()
Page( {
  data: {
    userInfo: {},
    source: ''
  },
  onLoad: function() {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo( function( userInfo ) {
      //更新数据
      that.setData( {
        userInfo: userInfo
      })
    });
    var userlogs = wx.getStorageSync('logs')|| []
    if(userlogs.length != 1){
      var displayMessage = '上次登陆: ' + util.formatTime(new Date(userlogs[1]))
    }
    else{
      var displayMessage = '欢迎第一次登陆!'  
    }
    that.setData({
      lastlog: displayMessage
    })
  },

  onReady: function () {
  },

    //事件处理函数
  logClick: function() {
    wx.navigateTo( {
      url: '../logs/logs'
    })
  },
  suggestionClick: function() {
    wx.navigateTo( {
      url: '../suggestion/suggestion'
    })
  },

})
