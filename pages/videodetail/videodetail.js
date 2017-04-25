var config = require('../../config');

const videoresultURL = 'https://' + config.service.host + '/static/result/'

Page({
  onLoad() {
        let app = getApp();
        let that = this;
        console.log(app.currentVideoUrl)
        this.setData({ videoSrc: app.currentVideoUrl, vid: app.vid });
        wx.request({
            url: videoresultURL+ app.vid,
            method: 'GET',
            success: function(res) {
              that.setData({
                demolabel: res.data
              })
            }
        })
    }
})
