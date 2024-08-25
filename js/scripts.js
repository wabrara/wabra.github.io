//const step = 5; // 每次移动的像素数

  (function() {
	  var timeEl = document.getElementById("time");
    timeEl.innerHTML = new Date();
    console.log('This is an Immediately Invoked Function Expression (IIFE).');
  })();


function animate() {
  // 更新元素的位置
  /*xPos += step;
  element.style.transform = 'translateX(' + xPos + 'px)';

  // 检查是否到达终点或需要继续动画
  if (xPos < window.innerWidth) {
    
  }*/
  var timeEl = document.getElementById("time");
    timeEl.innerHTML = new Date();
	console.log("更新内容：" + new Date().toLocaleTimeString());
    requestAnimationFrame(animate);
}

// 开始动画
requestAnimationFrame(animate);
