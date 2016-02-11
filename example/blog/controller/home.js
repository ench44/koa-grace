'use strict';
module.exports = function* () {
  yield this.bindDefault();

  let posts = yield this.mongo('Post',{}).list();

  yield this.render('home',{
  	posts: posts,
  	userInfo: this.userInfo,
  	siteInfo: this.siteInfo
  })
}
// 配置index路由为get请求
module.exports.__method__ = 'get';