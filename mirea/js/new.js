function kon(){window.scrollTo(0,window.innerHeight)}
function gen_pas(){for(var b="",a=0;15>a;a++)b+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62*Math.random()));$("#pasr").value=b;navigator.clipboard.writeText(b);$("#wt").innerHTML="\u0421\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d \u043f\u0430\u0440\u043e\u043b\u044c: ".concat(b,". \u041e\u043d \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d \u0432 \u0431\u0443\u0444\u0435\u0440 \u043e\u0431\u043c\u0435\u043d\u0430");$("#warner").css("display",
"inline");setTimeout(function(){$("#warner").css("display","none");$("#wt").innerHTML="\u0414\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u043b\u0430\u0442\u0438\u043d\u043d\u0438\u0446\u0430 \u0438 \u0446\u0438\u0444\u0440\u044b"},1E4)}
function inpchv(b){var a=b.target;a.validity.patternMismatch||0==a.value.length?($(a).css("animation","but 1s ease infinite"),setTimeout(function(){$(a).css("animation","none")},1E3),$(a).css("outline","solid red"),$("#warnev").css("display","inline-block")):($(a).css("outline","none black"),$("#warnev").css("display","none"))}
function vxo(){for(var b=window.location.hash.split(";"),a=0;a<b.length;a++){var c=b[a].split("=");"#login"==c[0]&&(vxodb=c[1]==$("#logv").value);"pas"==c[0]&&(vxodb&=c[1]==$("#pasv").value)}vxodb?($("#warnew").css("display","none"),console.log("vxod"),window.location.href="home.html"+window.location.hash):$("#warnew").css("display","inline")}
function rego(){if(regb&&$("#pasr").value&&$("#logr").value){var b=$("#ch1").checked?1:$("#ch2").checked?2:3;window.location.hash="login=".concat($("#logr").value,";pas=".concat($("#pasr").value,";ch=".concat(b,"")));onvxod()}}
function inpchr(b){var a=b.target;regb=!(a.validity.patternMismatch||0==a.value.length);a.validity.patternMismatch||0==a.value.length?($(a).css("animation","but 1s ease infinite"),setTimeout(function(){$(a).css("animation","none")},1E3),$(a).css("outline","solid red"),$("#warner").css("display","inline")):($(a).css("outline","none black"),$("#warner").css("display","none"))}
function checkCaps(b){console.log(b);console.log(b.originalEvent);console.log(b.originalEvent.getModifierState("CapsLock"));console.log(b.originalEvent.modifiers);20==b.keyCode?($("#warnc").css("display","inline"),$("#warncr").css("display","inline")):($("#warnc").css("display","none"),$("#warncr").css("display","none"))}function onreg(){$("#vxod").css("transform","rotateX(90deg)");$("#vxod").one("transitionend",chvxod)}
function onvxod(){$("#reg").css("transform","rotateX(90deg)");$("#reg").one("transitionend",chreg)}function chvxod(){$("#vxod").css("position","absolute");$("#reg").css("transform","rotateX(0deg)");$("#reg").css("position","relative");$("#r").css("display","none");$("#v").css("display","inline")}function chreg(){$("#reg").css("position","absolute");$("#vxod").css("transform","rotateX(0deg)");$("#vxod").css("position","relative");$("#r").css("display","inline");$("#v").css("display","none")}
function nach(){window.scrollTo(0,0)}function scr(){$(window).scrollTop()>.5*window.innerHeight?$("#d1").css("display","inline"):$("#d1").css("display","none")}var regb,vxodb,slvh,slvw;$("body").keydown(checkCaps);$("#logv").bind("input",inpchv);$("#logr").bind("input",inpchr);$("#pasv").bind("input",inpchv);$("#pasr").bind("input",inpchr);slvh=.01*$(window).height();slvw=.01*$(window).width();less.modifyVars({"@lvh":slvh+"","@lvw":slvw+"","@lvmax":Math.max(slvw,slvh)+""});vxodb=regb=!1;$(window).scroll(scr);
scr();$("body").append($('<div id="d" style="position: fixed; right: 12.5vw; font-size: 2vw; color: #ff9700; bottom: 0; z-index: -1;">\u00a9 2020 \u041e\u041e\u041e "\u0420\u043e\u0433\u0430 \u0438 \u041a\u043e\u043f\u044b\u0442\u0430" \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b. Project on <a href="https://github.com/Ddudde/Kursach-HTML" style="color: #ff9700;">github</a>.</div>'));$("body").append($('<img alt id="d1" src = "data:image/png;base64,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" style="user-select: none; cursor: pointer; position: fixed; bottom: 50px; right: 6.25vw; display: none;" onclick="nach();">'));