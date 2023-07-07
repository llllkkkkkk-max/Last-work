// 假设存在一个全局变量 circles，用于存储圈子数据
let circles = [];
// 获取最新圈子列表的容器元素
const circleListContainer = document.querySelector('.circle-list');
// 渲染最新圈子列表
function renderCircleList() {
      // 清空容器元素
      circleListContainer.innerHTML = '';

      // 遍历圈子数据并创建圈子项
      circles.forEach((circle) => {
        const circleItem = document.createElement('div');
        circleItem.classList.add('circle-item');

        const title = document.createElement('h3');
        title.textContent = circle.circleTitle;
        circleItem.appendChild(title);

        const creator = document.createElement('p');
        creator.textContent = `创建者: ${circle.creator}`;
        circleItem.appendChild(creator);

        const description = document.createElement('p');
        description.textContent = circle.circleDescription;
        circleItem.appendChild(description);

        const members = document.createElement('p');
        members.textContent = `成员数: ${circle.members}`;
        circleItem.appendChild(members);

        circleListContainer.appendChild(circleItem);
      });
}
// 在页面加载完成后渲染最新圈子列表
window.addEventListener('DOMContentLoaded', () => {
renderCircleList();
});

// 假设存在一个全局变量 blogs，用于存储日志数据
let blogs = [];
// 获取最新日志列表的容器元素
const blogListContainer = document.querySelector('.blog-list');
// 渲染最新日志列表
function renderBlogList() {
      // 清空容器元素
      blogListContainer.innerHTML = '';

      // 遍历日志数据并创建日志项
      blogs.forEach((blog) => {
        const blogItem = document.createElement('div');
        blogItem.classList.add('blog-item');

        const title = document.createElement('h3');
        title.textContent = blog.blogTitle;
        blogItem.appendChild(title);

        const author = document.createElement('p');
        author.textContent = `作者: ${blog.author}`;
        blogItem.appendChild(author);

        const date = document.createElement('p');
        date.textContent = `日期: ${blog.date}`;
        blogItem.appendChild(date);

        const description = document.createElement('p');
        description.textContent = blog.blogDescription;
        blogItem.appendChild(description);

        blogListContainer.appendChild(blogItem);
      });
}
// 在页面加载完成后渲染最新日志列表
window.addEventListener('DOMContentLoaded', () => {
      renderBlogList();
    });

// 假设存在一个全局变量 reviews，用于存储书评数据
let reviews = [];

// 获取最新书评列表的容器元素
const reviewListContainer = document.querySelector('.review-list');

// 渲染最新书评列表
function renderReviewList() {
  // 清空容器元素
  reviewListContainer.innerHTML = '';

  // 遍历书评数据并创建书评项
  reviews.forEach((review) => {
    const reviewItem = document.createElement('div');
    reviewItem.classList.add('review-item');

    const title = document.createElement('h3');
    title.textContent = review.bookTitle;
    reviewItem.appendChild(title);

    const author = document.createElement('p');
    author.textContent = `作者: ${review.author}`;
    reviewItem.appendChild(author);

    const rating = document.createElement('p');
    rating.textContent = `评分: ${review.rating}`;
    reviewItem.appendChild(rating);

    const description = document.createElement('p');
    description.textContent = review.reviewContent;
    reviewItem.appendChild(description);

    reviewListContainer.appendChild(reviewItem);
  });
}

// 提交书评函数
async function submitReview(review) {
  // 这里可以添加发送书评数据到服务器的逻辑
  // 假设提交成功后，将书评数据存储到全局变量 reviews
  reviews.push(review);
}

// 在页面加载完成后渲染最新书评列表
window.addEventListener('DOMContentLoaded', () => {
  renderReviewList();
});
