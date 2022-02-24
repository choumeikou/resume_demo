// pages/upload/upload.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    job: '',
    filename: '',
    file: '',
  },
  choosefilefun() {
    let _that = this;
    wx.chooseMessageFile({
      count: 1,
      type: 'file',
      success(res) {
        // console.log(res, " :res")
        const tempFiles = res.tempFiles
        console.log('tmpfile', tempFiles)
        let newfile = tempFiles
        console.log('newfile', newfile)
        let newfilename = tempFiles[0].name
        let validname = newfilename.substr(newfilename.indexOf('.'))
        if (validname == '.doc' || validname == '.docx' || validname == '.pdf') {
          _that.setData({
            file: newfile,
            filename: newfilename,
          })
        }
        else {
          wx.showToast({
            title: '请选择word或pdf格式的文件',
            icon: 'none'
          })
          _that.setData({
            file: '',
            filename: ''
          })
        }
      }
    })
  },
  upfilefun: function (e) {
    let that = this
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    let name = e.detail.value.name
    let university = e.detail.value.university
    let newfilename = e.detail.value.filename
    if (name == '') {
      wx.showToast({
        title: '请输入姓名',
        icon: 'none'
      })
      return;
    }
    if (university == '') {
      wx.showToast({
        title: '请输入学校',
        icon: 'none'
      })
      return;
    }
    if (newfilename == '') {
      wx.showToast({
        title: '请选择你的简历',
        icon: 'none'
      })
      return;
    }
    let newjob = that.data.job
    while (newjob.indexOf('、') > 0) {
      newjob = newjob.replace('、', '|')
    }
    newfilename = name + '|' + university + '|' + newjob + newfilename.substr(newfilename.indexOf('.'))
    console.log('文件名', newfilename)
    wx.cloud.uploadFile({
      cloudPath: '简历/' + newfilename,
      filePath: that.data.file[0].path,
      success: res => {
        console.log('[上传文件] 成功：', res)
        let fileid = res.fileID
        wx.cloud.getTempFileURL({
          fileList: [fileid],
          success: res => {
            console.log('获取成功', res)
            let newpath = res.fileList[0].tempFileURL
            wx.cloud.callFunction({
              name: 'sendEmail',
              data: {
                filename: newfilename,
                path: newpath,
              },
              success: res => {
                console.log('发送成功', res)
                wx.showToast({
                  title: '上传成功',
                  icon: 'success'
                })
              },
              fail: err => {
                console.log('发送失败', err)
              }
            })
          },
          fail: err => {
            console.log('获取失败', err)
          }
        })
      },
      fail: err => {
        console.log('[上传文件]失败：', err)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.setData({ job: options.job })
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