//index.js
// 引入配置
var config = require('../../config');

//photo source 
var photo_base_url = config.s3_storage_url + "petphotolist/poster/";

//video source
//s3
// var storage_url = config.s3_storage_url;
// var video_base_url = storage_url + "petvideolist/";

//change to tencentyun coz some area cann't access s3 point
var storage_url = config.tencent_storage_url //use this link if cannot connect to S3 video
var video_base_url = storage_url + "petvideolist/";

var app = getApp()
Page( {
  data: {
    indicatorDots: false,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo( {
      url: '../logs/logs'
    })
  },
  //播放影片
   videoDetailClick(event) {
    let currentVideoUrl = event.currentTarget.dataset.video;
    let currentVideoTitle = event.currentTarget.dataset.title;
    let vid = event.currentTarget.dataset.vid;
    if (!currentVideoUrl || !currentVideoTitle || !vid) return;

    let app = getApp();
    app.currentVideoUrl = currentVideoUrl;
    app.currentVideoTitle = currentVideoTitle;
    app.vid = vid;
    wx.navigateTo({ url: '../videodetail/videodetail' });
  },
  onLoad: function() {
    console.log( 'onLoad' )
    var that = this
    app.getUserInfo( function( userInfo ) {
      //更新数据
      that.setData( {
        userInfo: userInfo,
        items : [
            {
              "image": photo_base_url + "post1.png",
              "title": "10 Funniest Dog Videos",
              "video_url": video_base_url + "10%20Funniest%20Dog%20Videos.mp4",
              "title": "10 Funniest Dog Videos",
              "label": "Animal / Dog / Bulldog ",
              "vid": "demo1"
            },
            {
              "image": photo_base_url + "post2.png",
              "title": "Cute Dogs And Adorable Babies Compilation",
              "video_url": video_base_url + "Cute%20Dogs%20And%20Adorable%20Babies%20Compilation.mp4",
              "label": "Infant / Pet / Retriever ",
              "vid": "demo2"
            },
            {
              "image": photo_base_url + "post3.png",
              "title": "TOP 10 DANGEROUS DOGS IN THE WORLD",
              "video_url": video_base_url + "TOP%2010%20DANGEROUS%20DOGS%20IN%20THE%20WORLD.mp4",
              "label": "Alaskan Malamute / Bulldog / Chow Chow ",
              "vid": "demo3"
            }
          ],
          images: [
            config.s3_storage_url + "/petphotolist/pet.jpeg"
          ]
      }
      )
    })
  },
})
