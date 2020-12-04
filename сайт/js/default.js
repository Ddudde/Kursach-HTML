var d1 = document.createElement('img');
window.onload = function(){
	window.addEventListener('scroll', scr);
	scr();
	var d = document.createElement('div');
	d.innerHTML='© 2020 ООО "Рога и Копыта" Все права защищены. Project on <a href="https://github.com/Ddudde/Kursach-HTML" style="color: #ff9700;">github</a>.';
	d.setAttribute('style', `position: absolute;
	right: 100px;
	color: #ff9700;
	top: ${document.body.scrollHeight}px`);
	document.body.appendChild(d);
	d1.src = "media/up.png";
	d1.setAttribute('style', `user-select: none;
	cursor: pointer;
	position: fixed;
	bottom: 50px;
	right: 50px;
	display: none;`);
	d1.setAttribute('onclick', 'nach();');
	document.body.appendChild(d1);
}
function nach(){
    window.scrollTo(0, 0);
}
function scr() {
	if (pageYOffset > window.innerHeight / 2)
		d1.style.display = "inline";
	else
		d1.style.display = "none";
}