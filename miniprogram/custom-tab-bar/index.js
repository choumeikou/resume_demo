Component({
  data: {
    selected: 0,
    color: "#000000",
    selectedColor: "#02DA02",
    color_1: "#02DA02",
    color_2: "#FFFFFF",
    list: [
      {
        pagePath: "index",
        text: "公司简介"
      },
      {
        pagePath: "main",
        text: "职位一览"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    }
  }
})