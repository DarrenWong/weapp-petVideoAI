//app.js

var config = require('./config');
var qcloud = require('./bower_components/wafer-client-sdk/index');
qcloud.setLoginUrl(config.service.loginUrl);
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    wx.checkSession({
      success: function(){
        //session 未过期，并且在本生命周期一直有效
        if(that.globalData.userInfo){
          typeof cb == "function" && cb(that.globalData.userInfo)
        }else{
          qcloud.login({
              success: function (userInfo) {
                  console.log('登录成功', userInfo);
                  that.globalData.userInfo = userInfo
                  typeof cb == "function" && cb(that.globalData.userInfo)
              },
              fail: function (err) {
                  console.log('登录失败', err);
                }
          })
        }

      },
      fail: function(){
        //登录态过期
       // wx.login() //重新登录
        qcloud.login({
            success: function (userInfo) {
                console.log('登录成功', userInfo);
                that.globalData.userInfo = userInfo
                typeof cb == "function" && cb(that.globalData.userInfo)
            },
            fail: function (err) {
                console.log('登录失败', err);
              }
        })        
      }
    });
    console.log('loading end')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  globalData:{
    userInfo:null
  }
})