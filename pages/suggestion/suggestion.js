Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: 'City of Stars',
    author: 'Ryan Gosling',
    src: 'https://19322494.qcloud.la/static/LaLaLand.mp3',
    height: 20,
    focus: false,
    videoStatus: false
  },
  audioPlay: function () {
    console.log(this.audioCtx.play)
  },
  audioChange: function () {
    var that = this
    if(this.data.videoStatus ==false){
      this.audioCtx.play()
      this.setData({
        videoStatus: true
       })
    }
    else{
      this.audioCtx.pause()
      this.setData({
        videoStatus: false
       })
    }      
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  },
  bindButtonTap: function() {
    this.setData({
      focus: true
    })
  },
  bindTextAreaBlur: function(e) {
    console.log(e.detail.value)
  },
  bindFormSubmit: function(e) {
    console.log(e.detail.value.textarea)
  }
})