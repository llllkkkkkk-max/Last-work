document.getElementById('circle-form').addEventListener('submit', function(event) {
  event.preventDefault(); // 阻止表单默认提交行为

  // 获取圈子名和圈子内容输入框的值
  var circleTitle = document.getElementById('circle-title').value;
  var circleContent = document.getElementById('circle-content').value;

  // 创建新的圈子元素
  var circleElement = document.createElement('div');
  circleElement.classList.add('circle-item');

  var titleElement = document.createElement('h3');
  titleElement.textContent = '圈名: ' + circleTitle;
  circleElement.appendChild(titleElement);

  var contentElement = document.createElement('p');
  contentElement.textContent = '内容: ' + circleContent;
  circleElement.appendChild(contentElement);

  // 将新的圈子元素添加到已提交的圈子列表中
  var submittedCircles = document.getElementById('submitted-circles');
  submittedCircles.appendChild(circleElement);

  // 清空输入框
  document.getElementById('circle-title').value = '';
  document.getElementById('circle-content').value = '';

  // 提示提交成功
  alert('圈子提交成功！');
});
