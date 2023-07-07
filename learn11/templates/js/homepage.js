// 获取导航栏元素
const navbar = document.querySelector('.navbar');

// 监听窗口滚动事件
window.addEventListener('scroll', () => {
  // 当页面向下滚动超过100像素时，为导航栏添加一个固定的样式类
  if (window.scrollY > 100) {
    navbar.classList.add('navbar-fixed');
  } else {
    // 否则，移除固定样式类
    navbar.classList.remove('navbar-fixed');
  }
});
