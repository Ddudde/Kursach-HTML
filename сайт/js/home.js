import * as CPU from './3d/models/CPU/module.js';
//import * as MATH from './3d/models/matb/module.js';
//import * as KULER from './3d/models/kuler/module.js';
//import * as OZU from './3d/models/opera/module.js';
//import * as GPU from './3d/models/video/module.js';
//import * as PZU from './3d/models/disk/module.js';
//import * as KORP from './3d/models/korp/module.js';
//import * as BLOCK from './3d/models/block/module.js';
var hello, hellob, her, logimg, limg;
let dialogi = 0;
document.addEventListener("DOMContentLoaded",function(){
	hello = document.getElementById("hello");
	hellob = document.getElementById("hellob");
	her = document.getElementById("her");
	logimg = document.getElementById("logimg");
	limg = document.getElementById("limg");
});

function loadScript(url)
{
    // Adding the script tag to the head as suggested before
    var head = document.head;
    var script = document.createElement('script');
    script.type = 'module';
    script.src = url;

    // Fire the loading
    head.appendChild(script);
}

/*function chhello(){
	hello.innerHTML = 'Давайте разберёмся с комплектующими вместе. Мы заботимся о своих покупателях. И поэтому не желаем чтобы вы обманулись.<br>';
	hellob.innerHTML = 'Вперёд!';
	hellob.setAttribute('onclick', 'start();');
	hello.appendChild(hellob);
}*/

function start(){
	hello.style.display = 'none';
	hellob.style.display = 'none';
	her.setAttribute('style', `display: inline-block;
	animation: hra 1s linear infinite`);
	setTimeout(function () {her.setAttribute('style', `display: inline-block;
	animation: void 0; width: 100vw`)}, 975);
	logimg.setAttribute('style', `display: inline-block;
	animation: stlogimga 2s linear infinite`);
	setTimeout(function () {logimg.setAttribute('style', `display: inline-block;
	animation: logimga 2s linear infinite`);
	setTimeout(function () {logimg.setAttribute('style', `display: inline-block;
	animation: void 0;
	font-size: 24px;
	top: 0;
	left: auto;
	right: 10px;
	transform: translate(0%, 0%);
	position:fixed;
	cursor: pointer;`)}, 1975);
	limg.setAttribute('style', `display: inline-block;
	animation: limga 2s linear infinite`);
	setTimeout(function () {limg.setAttribute('style', `display: inline-block;
	animation: void 0;
	width: 32px;
	height: 32px;
	transform: translate(0%, 25%);`);
	init1();}, 1975)}, 1975);
}

function init1(){
	hello.innerHTML = 'Итак, вы решились на самостоятельную сборку домашнего компьютера из комплектующих. Поздравляем! Это не только интересно, но и более экономично, чем покупать готовую машину. Если с задачей подбора «железа» вы сталкиваетесь впервые, то вам обязательно помогут наши советы. Мы расскажем, из чего состоит компьютер, и дадим рекомендации по выбору процессора, дисков, памяти и всех остальных ключевых элементов вашего будущего ПК.<br>';
	hello.setAttribute('style', 'font-size: 24px');
	hellob.setAttribute('style', 'margin-top: 10px');
	hellob.innerHTML = 'Начнём!';
	hellob.setAttribute('onclick', 'dialog();');
	hello.appendChild(hellob);
	hello.style.display = 'inline-block';
	hellob.style.display = 'inline-block';
}

window.chhello = function chhello(){
//function dialog(){
	let dialog = [
	//'Любой настольный компьютер – это конструктор. Довольно увлекательный и абсолютно доступный каждому. В том плане, что ничего страшного в самостоятельной сборке ПК из купленных в магазине комплектующих нет. Фактически вы просто берёте несколько компонентов и лишь соединяете их друг с другом.'
	//,'Компонентов этих далеко не так много, как может изначально показаться. Самое главное – подобрать такой набор, чтобы всё совмещалось без проблем. Мы составили для вас список ключевых компонентов настольного компьютера в том порядке, в котором их лучше всего выбирать.'
	`Процессор. «Мозг» вашего будущего ПК. Этот чип управляет всеми вычислительными процессами.`
	,`Материнская плата. Это плата, которая является связующим звеном между всеми элементами компьютера, именно к ней подключаются все остальные комплектующие.`
	,`Система охлаждения процессора. Может быть сделана в виде вентилятора (кулера) со стальным или медным радиатором или жидкостной системы охлаждения («водянка»).`
	,`Оперативная память. Это очень быстрая временная память компьютера, в которой хранится информация о выполняемых в конкретный момент задачах. Например, локация игры, которую вы проходите, или фотография, которую вы обрабатываете в «Фотошопе». Как только вы заканчиваете операцию или выключаете компьютер, оперативная память очищается.`
	,`Видеокарта. Устройство, отвечающее за преобразование битов и байтов информации в реальные визуальные образы, которые вы видите на мониторе. Чем лучше ваша видеокарта, тем лучше графика в играх и тем быстрее осуществляются все наиболее сложные процессы: 3D-моделирование и рендеринг, например.`
	,`Устройство хранения данных. Здесь компьютер хранит всю информацию: установленную систему, игры и даже недописанный курсач по экономике. Может быть выполнено в виде накопителя на жёстких магнитных дисках (HDD) или твердотельного накопителя (SSD). Если не вдаваться в детали, то первое медленнее и дешевле, а второе – быстрее и дороже.`
	,`Корпус. То, что постоянно на виду. Прекрасный (или не очень), вместительный (не всегда) «ящик», внутри которого вы расположите все выбранные комплектующие.`
	,`Блок питания. Узел, который получает энергию от общей электросети и питает все компоненты компьютера. Чем мощнее вы хотите собрать компьютер – тем больше внимания нужно уделить выбору блока питания.`];
	hello.innerHTML = dialog[dialogi] + '<br>';
	hello.setAttribute('style', 'font-size: 24px; z-index: 1; left: auto; margin-left: 10px; transform: translate(0%, -50%); width: 400px;');
	hellob.setAttribute('style', 'margin-top: 10px');
	hellob.innerHTML = 'Далее!';
	console.log('дошло2');
	console.log('дошло1');
	if(dialogi>0)
	{
		console.log('дошло');
		//var threeDkit = document.getElementById(models[dialogi-1]);
		//threeDkit.destroy();
		//document.head.removeChild(threeDkit);
		//threeDkit = null;
	}
	CPU.init();
	//var threeDkit = document.getElementById(models[dialogi]);
	//threeDkit.init();
	console.log('передошло');
	hello.appendChild(hellob);
	hello.style.display = 'inline-block';
	hellob.style.display = 'inline-block';
	dialogi++;
}