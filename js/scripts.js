var time=0;
function animate() {
  // 更新元素的位置
  /*xPos += step;
  element.style.transform = 'translateX(' + xPos + 'px)';

  // 检查是否到达终点或需要继续动画
  if (xPos < window.innerWidth) {
    
  }*/
  var timeEl = document.getElementById("time");
    timeEl.innerHTML = time;
	time++;
    requestAnimationFrame(animate);
}

// 开始动画
requestAnimationFrame(animate);
