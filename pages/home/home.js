const body = document.querySelector('body');
	shell = body.querySelector('nav');
	toggle = body.querySelector(".toggle");
	searchBtn = body.querySelector(".search-box");
	modeSwitch = body.querySelector(".toggle-switch");
	modeText = body.querySelector(".mode-text");
//点击toggle元素触发事件
toggle.addEventListener("click", () => {
	//切换shell的close类
	shell.classList.toggle("close");
})
//点击searchBtn元素触发事件
searchBtn.addEventListener("click", () => {
	//切换shell的active类
	shell.classList.remove("close");
})
//点击modeSwitch元素触发事件
modeSwitch.addEventListener("click", () => {
	//切换body的dark类
	body.classList.toggle("dark");
	//如果body元素包含dark类
	if (body.classList.contains("dark")) {
		modeText.innerText = "日间模式";
	} else {
		modeText.innerText = "夜间模式";
	}
});