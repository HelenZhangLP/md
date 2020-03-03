export function formatParamets() {
  const url = window.location.href; // 获取当前浏览器的URL
  const params = {}; // 存储最终JSON结果对象
  url.replace(/([^?&]+)=([^?&]+)/g, (match, p1, p2) => {
    params[p1] = decodeURIComponent(p2); // 解析字符为中文
  });
  return params;
}