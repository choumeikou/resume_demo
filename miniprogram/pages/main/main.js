// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
    /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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

  }
})
Component({
  data: {
    job:'',
    checkboxItems: [
      { name: '1', value: '美国' },
      { name: '2', value: '中国' },
      { name: '3', value: '巴西' },
      { name: '4', value: '日本' },
      { name: '5', value: '英国' },
      { name: '6', value: '法国' },
      { name: '7', value: '法国' },
      { name: '8', value: '法国' },
      { name: '9', value: '法国' },
      { name: '10', value: '法国' },
      { name: '11', value: '法国' },
      { name: '12', value: '法国' },
    ],
  },
  methods:{
    checkboxChange: function (e) {
      var that = this;
      var checked = e.detail.value
      var display = ''
      var changed = {}
      for (var i = 0; i < that.data.checkboxItems.length; i++) {
        if (checked.indexOf(that.data.checkboxItems[i].name) !== -1) {
          changed['checkboxItems[' + i + '].checked'] = true
          display = display + that.data.checkboxItems[i].value
        } else {
          changed['checkboxItems[' + i + '].checked'] = false
        }
      }
      that.setData(changed)
      that.setData({job:display})
    },
    form_submit: function (e) {
      var submit_p = e.detail.value
      var that = this
      console.log('form发生了submit事件，携带数据为：', submit_p)
      if(that.data.job!=''){
        wx.navigateTo({
          url: '../upload/upload?job='+that.data.job,
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
    }
      else
        wx.showToast({

          title: '请选择职位',

          icon: 'none',

          duration: 2000

        })
    },
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 1
        })
      }
    }
  }
})