//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    imgUrls: [
      '/images/swiper_01.jpg', '/images/swiper_02.jpg', '/images/swiper_03.jpg', '/images/swiper_04.jpg',
    ],
    indicatorDots: true,
    autoplay: true,    // 轮播图自动播放
    circular: true,
    interval: 3000,
    duration: 1000,
    moves: [],   // 当前热映相关数据
  },

  onLoad: function () {
    this.moveList();
  },

  // 加载当前热映电影目录
  moveList() {
    wx.showToast({
      title: '正在加载',
      icon: 'loading',
      duration: 5000
    })
    let thisPage = this;
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/in_theaters',
      //url: 'http://t.yushu.im/v2/movie/in_theaters',
      method: 'GET',
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        thisPage.setData({
          moves: res.data.subjects,
        })
        console.log(res.data.subjects)
        wx.hideLoading();
      },
    })
  },

})