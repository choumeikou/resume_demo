Component({
  data: {
    job: '',
    checkboxItems: [
      { name: '安全管理', value: '安全工程等' },
      { name: '设备管理', value: '机械制造、电气自动化等' },
      { name: '采购管理', value: '采购管理、材料类' },
      { name: '材料管理', value: '' },
      { name: '信息管理', value: '计算机科学与技术、软件工程、自动化等' },
      { name: '试验岗', value: '无机非金属材料等' },
      { name: '前场工长', value: '土木工程、工程管理等' },
      { name: '生产工长', value: '土木工程、工程管理等' },
      { name: '交付工长', value: '物流等' },
      { name: '预算员', value: '工程造价等' },
      { name: '销售员', value: '土木工程、工程管理、市场营销等' },
      { name: '技术员', value: '结构工程、岩土、土木工程、建筑电气、给排水等' },
      { name: '采矿技术员', value: '采矿工程' },
      { name: '技术研发', value: '无机非金属材料、结构工程、土木工程' },
      { name: '会计', value: '会计、财务管理、税务' },
      { name: '财务管理', value: '财务管理、金融学、金融工程' },
      { name: '投资管理', value: '法学、财务' },
      { name: '人力资源管理', value: '人力资源管理' },
      { name: '文书档案', value: '行政管理、戏剧学、广播编导' },
      { name: '后勤管理', value: '行政管理、戏剧学、广播编导' },
      { name: '法务', value: '法学、财务' },
      { name: '党群干事', value: '哲学、思想政治、戏剧学、广播编导' },
    ],
  },
  methods: {
    checkboxChange: function (e) {
      var that = this;
      var checked = e.detail.value
      var display = ''
      var changed = {}
      for (var i = 0; i < that.data.checkboxItems.length; i++) {
        if (checked.indexOf(that.data.checkboxItems[i].name) !== -1) {
          changed['checkboxItems[' + i + '].checked'] = true
          display = display + that.data.checkboxItems[i].name + '、'
        } else {
          changed['checkboxItems[' + i + '].checked'] = false
        }
      }
      display = display.substr(0, display.length - 1)
      that.setData(changed)
      that.setData({ job: display })
    },
    form_submit: function (e) {
      var submit_p = e.detail.value
      var that = this
      console.log('form发生了submit事件，携带数据为：', submit_p)
      if (that.data.job != '') {
        wx.navigateTo({
          url: '../upload/upload?job=' + that.data.job,
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