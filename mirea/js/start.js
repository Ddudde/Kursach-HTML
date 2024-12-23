var regb, vxodb;
$('body').keydown(checkCaps);
$('#logv').bind('input', inpchv);
$('#logr').bind('input', inpchr);
$('#pasv').bind('input', inpchv);
$('#pasr').bind('input', inpchr);
regb = false;
vxodb = false;

function kon(){
    window.scrollTo(0, window.innerHeight);
}

function gen_pas(){
    var password = "";
    var symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 15; i++){
        password += symbols.charAt(Math.floor(Math.random() * symbols.length));     
    }
    $('#pasr').value = password;
	navigator.clipboard.writeText(password);
	$('#wt').innerHTML = "Сгенерирован пароль: ".concat(password, ". Он скопирован в буфер обмена");
	$('#warner').css("display", "inline");
	setTimeout(function (){
		$('#warner').css("display", "none");
		$('#wt').innerHTML = "Допустимы только латинница и цифры";
	}, 10000);
}

function inpchv(event){
	var dat = event.target;
	if (dat.validity.patternMismatch || dat.value.length == 0) {
		$(dat).css("animation", "but 1s ease infinite");
		setTimeout(function () {$(dat).css("animation", "none");}, 1000)
		$(dat).css("outline", "solid red");
		$('#warnev').css("display", "inline-block");
	} else {
		$(dat).css("outline", "none black");
		$('#warnev').css("display", "none");
	}
}

function vxo(){
	var sp = window.location.hash.split(";");
	for(var i = 0; i < sp.length; i++)
	{
		var el = sp[i];
		var al = el.split('=');
		if(al[0] == '#login')
			vxodb = al[1] == $('#logv').value;
		if(al[0] == 'pas')
			vxodb &= al[1] == $('#pasv').value;
	}
	if(vxodb)
	{
		$('#warnew').css("display", "none");
		console.log('vxod');
		window.location.href = 'home.html' + window.location.hash;
	}
	else
		$('#warnew').css("display", "inline");
}

function rego(){
	if(regb && $('#pasr').value && $('#logr').value){
		var ch = $('#ch1').checked ? 1 : $('#ch2').checked ? 2 : 3;
		window.location.hash = "login=".concat($('#logr').value,";pas=".concat($('#pasr').value,";ch=".concat(ch,"")));
		onvxod();
	}
}

function inpchr(event){
	var dat = event.target;
	regb = !(dat.validity.patternMismatch || dat.value.length == 0);
	if (dat.validity.patternMismatch || dat.value.length == 0) {
		$(dat).css("animation", "but 1s ease infinite");
		setTimeout(function () {$(dat).css("animation", "none");}, 1000)
		$(dat).css("outline", "solid red");
		$('#warner').css("display", "inline");
	} else {
		$(dat).css("outline", "none black");
		$('#warner').css("display", "none");
	}
}

function checkCaps(event) {
	console.log(event);
	console.log(event.originalEvent);
	console.log(event.originalEvent.getModifierState("CapsLock"));
	console.log(event.originalEvent.modifiers);
	if (event.keyCode == 20){
		$('#warnc').css("display", "inline");
		$('#warncr').css("display", "inline");
	}else{
		$('#warnc').css("display", "none");
		$('#warncr').css("display", "none");
	}
}

function onreg(){
	$('#vxod').css("transform", "rotateX(90deg)");
	$('#vxod').one('transitionend', chvxod);
}

function onvxod(){
	$('#reg').css("transform", "rotateX(90deg)");
	$('#reg').one('transitionend', chreg);
}

function chvxod(){
	$('#vxod').css("position", "absolute");
	$('#reg').css("transform", "rotateX(0deg)");
	$('#reg').css("position", "relative");
	$('#r').css("display", "none");
	$('#v').css("display", "inline");
}

function chreg(){
	$('#reg').css("position", "absolute");
	$('#vxod').css("transform", "rotateX(0deg)");
	$('#vxod').css("position", "relative");
	$('#r').css("display", "inline");
	$('#v').css("display", "none");
}