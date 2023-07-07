// 获取 DOM 元素
const reviewForm = document.getElementById('review-form');
const submittedReviews = document.getElementById('submitted-reviews');

// 监听提交书评表单的提交事件
reviewForm.addEventListener('submit', submitReview);

// 提交书评函数
function submitReview(event) {
  event.preventDefault(); // 阻止表单默认提交行为

  // 获取表单数据
  const bookTitleInput = document.getElementById('book-title');
  const authorInput = document.getElementById('author');
  const ratingInput = document.getElementById('rating');
  const reviewContentInput = document.getElementById('review-content');

  const bookTitle = bookTitleInput.value;
  const author = authorInput.value;
  const rating = ratingInput.value;
  const reviewContent = reviewContentInput.value;

  // 创建书评项的 DOM 元素
  const reviewItem = document.createElement('div');
  reviewItem.classList.add('review-item');

  const titleElement = document.createElement('h3');
  titleElement.textContent = bookTitle;
  reviewItem.appendChild(titleElement);

  const authorElement = document.createElement('p');
  authorElement.textContent = '作者: ' + author;
  reviewItem.appendChild(authorElement);

  const ratingElement = document.createElement('p');
  ratingElement.textContent = '评分: ' + rating;
  reviewItem.appendChild(ratingElement);

  const contentElement = document.createElement('p');
  contentElement.textContent = '内容: ' + reviewContent;
  reviewItem.appendChild(contentElement);

  // 将书评项添加到已提交的书评列表中
  submittedReviews.appendChild(reviewItem);

  // 重置表单
  reviewForm.reset();
  alert('书评提交成功！');
}
