//app.js
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        env:'huashi-resume',
        traceUser: true,
      })
    }
   /* wx.cloud.getTempFileURL({
      fileList: ['cloud://huashi-resume.6875-huashi-resume-1300052905/font/msyh.ttf'],
      success:res=>{
        let newpath = res.fileList[0].tempFileURL
        wx.loadFontFace({
          family: 'msyh',
          source: 'url("https://dn-qtshe.qbox.me/HYZhengYuan-95W.ttf")',
          success: function (res) {
            console.log('成功',res.status)
          },
          fail: function (res) {
            console.log('失败',res.status)
          }
        })
      }
    })*/
    this.globalData = {}
  }
})
