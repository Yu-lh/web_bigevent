// 在发起真正的Ajax请求之前，统一拼接请求的根路径
$.ajaxPrefilter(function (option) {
    options.url = 'http://api-breakingnews-web.itheima.net' + options.url
})