// 监听登录表单的提交事件
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // 阻止表单默认提交行为

  // 获取用户名和密码输入框的值
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // 进行登录验证逻辑，此处仅作示例，您需要根据实际需求自行修改
  if (username === 'a' && password === 'a') {
    // 登录成功，保存登录状态到本地存储或会话
    localStorage.setItem('isLoggedIn', true);

    // 重定向回主页面
    window.location.href = 'main.html';
  } else {
    // 登录失败，清空输入框
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';

    alert('登录失败，请检查用户名和密码！');
  }
});

