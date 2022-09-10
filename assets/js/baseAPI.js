$.ajaxPrefilter(function (options) {
    // 在发起真正的Ajax请求之前，统一拼接请求的根路径
    options.url = 'http://api-breakingnews-web.itheima.net' + options.url

    // 统一为有权限的借口设置请求头
    if (options.url.indexOf('/my/') !== -1) {
        options.headers = {
            Authorization: localStorage.getItem('token') || ''
        }
    }

    // 全局挂载回调函数
    options.comlpete = function (res) {
        if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！')
            // 1.清空token
            localStorage.removeItem('token')
        // 2.强制跳转到登录页面
        location.href = '/login.html'
    }
})
