$(window).ready(function(){
	var slvh, slvw;
	slvh = $(window).height() * 0.01;
	slvw = $(window).width() * 0.01;
    var linke  = document.createElement('link');
    linke.rel  = 'stylesheet/less';
    linke.type = 'text/css';
    linke.href = 'css/start.less';
	less.sheets = [linke];
	less.refresh();
	less.refreshStyles();
	less.modifyVars({
	  '@lvh': slvh + '',
	  '@lvw': slvw + '',
	  '@lvmax': Math.max(slvw, slvh) + ''
	});
});
function con(par) {
	console.log(par);
	return 0;
}
function getHexColor(a, r, b, g) {
	a = Math.round(a);
	a = a.toString(16);
	r = r.toString(16);
	g = g.toString(16);
	b = b.toString(16);

	if (a.length == 1)
	a = "0" + a;
	if (r.length == 1)
	r = "0" + r;
	if (g.length == 1)
	g = "0" + g;
	if (b.length == 1)
	b = "0" + b;

	return "#" + a + r + g + b;
}