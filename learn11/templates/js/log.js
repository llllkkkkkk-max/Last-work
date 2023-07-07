document.getElementById('log-form').addEventListener('submit', function(event) {
  event.preventDefault(); // 阻止表单默认提交行为

  // 获取日志名和日志内容输入框的值
  var logTitle = document.getElementById('log-title').value;
  var logContent = document.getElementById('log-content').value;

  // 创建新的日志元素
  var logElement = document.createElement('div');
  logElement.classList.add('log-item');

  var titleElement = document.createElement('h3');
  titleElement.textContent = '日志名: ' + logTitle;
  logElement.appendChild(titleElement);

  var contentElement = document.createElement('p');
  contentElement.textContent = '内容: ' + logContent;
  logElement.appendChild(contentElement);

  // 将新的日志元素添加到已提交的日志列表中
  var submittedLogs = document.getElementById('submitted-logs');
  submittedLogs.appendChild(logElement);

  // 清空输入框
  document.getElementById('log-title').value = '';
  document.getElementById('log-content').value = '';

  // 提示提交成功
  alert('日志提交成功！');
});
