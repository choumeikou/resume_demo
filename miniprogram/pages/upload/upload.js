// pages/upload/upload.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    job:'',
    filename:'',
    file:'',
  },
  choosefilefun() {
    let _that = this;
    wx.chooseMessageFile({
      count: 1,
      type: 'file',
      success(res) {
        // console.log(res, " :res")
        const tempFiles = res.tempFiles
        console.log('tmpfile',tempFiles)
        let newfile = tempFiles
        console.log('newfile',newfile)
        let newfilename = tempFiles[0].name
        _that.setData({
          file:newfile,
          filename: newfilename,
        })
      }
    })
  },
  upfilefun() {
    let that = this
    let upfile = that.data.file
    let file_path = upfile[0].path
    let newfilename = that.data.filename
    console.log('地址', file_path)
    wx.cloud.uploadFile({
      cloudPath:'简历/'+newfilename,
      filePath:file_path
    })
    /*wx.uploadFile({
      url: 'https://wxzp.free.idcfengye.com/upload',
      filePath: file_path,
      name: newfilename,
    })*/
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.setData({job:options.job})
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