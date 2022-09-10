$(function () {

    var layer = layui.layer
    getUserInfo()

    function getUserInfo() {
        $.ajax({
            method: 'GET',
            url: '/my/userinfo',
            // 请求头配置对象
            // headers: {
            //     Authorization: localStorage.getItem('token') || ''
            // },
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg('获取用户信息失败！')
                }
                // 渲染用户头像
                renderAvatar(res.data)
            }
        })
    }

    function renderAvatar(user) {
        var name = user.nickname || user.username
        $('#welcome').html('欢迎&nbsp;&nbsp;' + name)
        if (user.user_pic !== null) {
            $('.layui-nav-img')
                .attr('src', user.user_pic)
                .show()
            $('.text-avatar').hide()
        } else {
            $('.layui-nav-img').hide()
            var first = name[0].toUpperCase()
            $('.text-avatar')
                .html(first)
                .show()
        }
    }

    $('#btnLogout').on('click', function () {
        layer.confirm('确定退出登录?', { icon: 3, title: '提示' }, function (index) {
            // 1.清空token
            localStorage.removeItem('token')
            // 2.跳转到登录页面
            location.href = '/login.html'
            layer.close(index);
        });
    })



})