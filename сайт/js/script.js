var upper, vxod, reg, r, v;
window.onload = function(){
	upper = document.getElementById("uppr");
	vxod = document.getElementById("vxod");
	reg = document.getElementById("reg");
	r = document.getElementById("r");
	v = document.getElementById("v");
	window.addEventListener('scroll', scr);
	scr();
}
function scr() {
	if (pageYOffset > window.innerHeight / 2)
		upper.style.display = "inline";
	else
		upper.style.display = "none";
}
function onreg(){
	vxod.style.transform = "rotateX(90deg)";
	vxod.addEventListener('transitionend', chvxod);
}
function onvxod(){
	reg.style.transform = "rotateX(90deg)";
	reg.addEventListener('transitionend', chreg);
}
function chvxod(){
	vxod.style.position = "absolute";
	reg.style.transform = "rotateX(0deg)";
	reg.style.position = "relative";
	r.style.display = "none";
	v.style.display = "inline";
	vxod.removeEventListener('transitionend', chvxod);
}
function chreg(){
	reg.style.position = "absolute";
	vxod.style.transform = "rotateX(0deg)";
	vxod.style.position = "relative";
	r.style.display = "inline";
	v.style.display = "none";
	reg.removeEventListener('transitionend', chreg);
}