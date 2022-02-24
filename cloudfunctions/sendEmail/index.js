// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
var nodemailer = require('nodemailer')
var config = {
  host:'smtp.126.com',
  port:465,
  auth:{
    user:'huashilvshe@126.com',
    pass:'Dll376689637'
  }
}
var transporter = nodemailer.createTransport(config);
// 云函数入口函数
exports.main = async (event, context) => {
  /*const wxContext = cloud.getWXContext()*/
  var mail={
    from:'来自微信小程序<huashilvshe@126.com>',
    subject:'简历投递',
    to:'HR-zp2018@huashijc.com',
    html:'<a href="'+event.path+'">'+event.filename+'</a>'
    //text:'hello world!',
    /*attachments:[{
      filename:event.filename,
      path:event.path,
    }]*/
  };
  let res = await transporter.sendMail(mail);
  return res;
  /*return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }*/
}