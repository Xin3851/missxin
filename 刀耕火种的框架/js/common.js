// 响应式单位设置 1rem = 100px
(function(doc, win) {  
	var docEl  =  doc.documentElement,
		resizeEvt  =  'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function() {   
			var clientWidth = docEl.clientWidth;   
			if (!clientWidth) return;   
			if (clientWidth >= 640) {     
				docEl.style.fontSize  =  '100px';   
			} else {      
				docEl.style.fontSize  =  100  *  (clientWidth  /  640)  +  'px';   
			} 
		};
	if  (!doc.addEventListener)  return;
	win.addEventListener(resizeEvt,  recalc,  false);
	doc.addEventListener('DOMContentLoaded',  recalc,  false);
})(document,window);

// 文档加载完毕执行
$(document).ready(function(){
	
	"use strict"		// 严格模式
	
	new WOW().init();	// 初始化wow
	
	
	$(window).load(function(){
		$('#Londing').delay(500).fadeOut('slow');
	})
	
	
	console.log("%c 一切OK", "color:#66ccff");
	
	
})