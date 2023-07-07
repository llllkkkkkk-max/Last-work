// 获取表单元素
const registerForm = document.getElementById('registerForm');
const password0Input = document.getElementById('password0');
const password1Input = document.getElementById('password1');

// 监听表单提交事件
registerForm.addEventListener('submit', function(event) {
  event.preventDefault(); // 阻止表单默认提交行为

  const password0 = password0Input.value;
  const password1 = password1Input.value;

  if (password0 !== password1) {
    alert('密码不一致，请重新输入！');
    password0Input.value = '';
    password1Input.value = '';
    password0Input.focus();
  } else {
    // 密码一致，可以继续执行注册逻辑
    // 在此处添加注册逻辑代码
    alert('注册成功！');
    registerForm.reset();
  }
});
