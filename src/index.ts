// totalTime：每次动画执行总时间，默认为700毫秒
// many：是否执行多次动画，默认为true

export default function (totalTime: number = 700, many: boolean = true) {
  return {
    // 当被绑定的元素插入到 DOM 时调用
    inserted: function (el: HTMLElement, binding: any) {
      // flag用来判断是否能执行动画，防止一个时间段内触发多次动画函数
      binding.flag = true;
      // 元素在可视区域内才开始执行动画的函数
      binding.animate = () => {
        // 获取元素距离可视区域顶部的距离
        const top = el.getBoundingClientRect().top;
        // 获取浏览器可视区域的高度(这里考虑了浏览器兼容的问题)
        const h =
          document.documentElement.clientHeight || document.body.clientHeight;
        // 当元素在可视区域内
        if (top < h) {
          // 如果动画没在执行
          if (binding.flag) {
            binding.flag = false;
            const finalNum = el.innerHTML; // 要显示的真实数值
            animateNumber(el, Number(finalNum), Date.now(), totalTime); // 执行数字自增动画
            // 如果只执行一次动画，则解绑滚动事件
            !many && window.removeEventListener("scroll", binding.animate);
          }
        } else {
          binding.flag = true;
        }
      };
      window.addEventListener("scroll", binding.animate);
    },
    // 自定义绑定的组件销毁时，关闭监听器
    unbind: function (el: HTMLElement, binding: any) {
      window.removeEventListener("scroll", binding.animate);
    }
  };
}

function animateNumber(el: HTMLElement, finalNum: number, startTime: number, totalTime: number) {
  const currentTime = Date.now();
  const runTime = currentTime - startTime; // 运行时间
  const progress = Math.min(runTime / totalTime, 1); // 动画进度
  el.innerHTML = Math.floor(finalNum * progress) + ''; // 当前页面显示的数字
  if (runTime < totalTime) {
    requestAnimationFrame(() => animateNumber(el, finalNum, startTime, totalTime));
  }
}