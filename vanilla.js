/* <input type='text' class='subInputChat' spellcheck='false' autocomplete='new-password' onfocusout="mod_session.outUserNameInput();" placeholder=' . . .' value='' />
.split() .join()
 replace(/reemplazar todos los lugares en que este esto/g, 'por esto');
 .replaceAll('.','');
{a,b} -> {a: a, b: b}
 location.reload();
 location.href = "https://www.w3schools.com";
obtener contenido  .value
incitar focus  .focus() fuera focus .blur()
 .attr = ''
.includes('php') detectar string en string

async function load_foro_sietechakras() {
	const foro_sietechakras = await import('https://www.somosindia.cl/sv/gestor/foro_sietechakras.js');
}
load_foro_sietechakras();

JSON.parse() JSON.stringify()
str.trim() limpiar string
this.className.split('_')
s().onevent = ()=>{}; sobree escritura de evento
parseFloat(Math.round( num * 100) / 100).toFixed(2);
&nbsp; &nbsp;
s('html').scrollTop = s('html').scrollHeight;
s('html').scrollTop = s(('.preg-id-'+id_last_false)).offsetTop;
s('.'+name+'-input-focus').onmouseout
typeof -> que tipo de var es o si existe
s('body').onkeydown = function() {
		let aux_key = window.event.keyCode;
};

.splice(i, 1);
console.log(arr.join()); // Jani,Hege,Stale,Kai Jim,Borge
arr.splice(2, 0, "Lene");
console.log(arr.join()); // Jani,Hege,Lene,Stale,Kai Jim,Borge

.push();
async function loop(time) { await timer(time); }
<input type='checkbox' class='factura' />
type="number"
.checked
<textarea placeholder=' Ingrese Una Nota'></textarea>
▲▼►◄△▽▷◁
<select name='select'>
	<option value='' selected disabled style='display: none;'>
		LISTA
	</option>
	<option value='OP 1'>OP 1</option>
	<option value='OP 1'>OP 2</option>
</select>
https://google-map-generator.com/
let lang = req.body.lang=='es' ? 1 : 0;


https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard
navigator.clipboard.writeText(newClip).then(function() {
	 clipboard successfully set
}, function() {
	 clipboard write failed
});
navigator.clipboard.readText().then(
  clipText => console.log(clipText) );


printer impresora
window.print();

var w = window.innerWidth;
var h = window.innerHeight;






<input type="datetime-local" class='dateTime'
value=" new Date(time_email).toISOString().split(".")[0]  "
>
<input type="time" class='dateTime1'>
<input type="date" class='dateTime2'>

s('.dateTime').onchange = (event)=>{

  console.log(event);
  console.log(s('.dateTime').value);
  console.log(new Date(s('.dateTime').value));
  console.log(new Date(s('.dateTime').value).getTime());

};




*/

function s(div){

	return document.querySelector(div);

}

function sa(div){

	return document.querySelectorAll(div);
	/* document.querySelectorAll(".btn-group")[3].style.display = 'none'; */

}

function intxt(div, content){

	return div.innerText = content;
	/* intxt(sa('.test-1')[0], 'test'); */

}

function outs(div, content){

	return div.outerHTML = content;
	/* content includes tag -> outs(sa('div')[1], 'asdasd'); */

}

function siframe(iframe, div){

	return s(iframe).contentWindow.document.querySelector(div);

}

function append(div, html){

	s(div).insertAdjacentHTML('beforeend', html);

}

function prepend(div, html){

	s(div).insertAdjacentHTML('afterbegin', html);

}

function htmls(div, html){

	s(div).innerHTML = html;

}

function getHtml(div){

	return s(div).innerHTML.trim();

}

function sremove(div){

	s(div).parentNode.removeChild(s(div));

}

function renderMedia(obj){

	/*

	video/mp4
	audio/mpeg

	*/

	let type = '';
	if(obj.tag=='audio'){

		type = 'audio/mpeg';

	}
	if(obj.tag=='video'){

		type = 'video/mp4';

	}

	/*--------------------*/
	/*--------------------*/

	let poster = '';
	if(obj.src_poster!=''){

		poster = `poster='`+obj.src_poster+`'`;

	}

	/*--------------------*/
	/*--------------------*/

	let source = '';
	if(obj.source){

		source = `

			<source src='`+obj.src+`' type='`+type+`'>


		`;

	}

	/*--------------------*/
	/*--------------------*/

	let download = '';

	if(!obj.download){

		download=`controlsList='nodownload'`;

	}

	/*--------------------*/
	/*--------------------*/

 	let render = `

			<`+obj.tag+`
			`+obj.controls+` `+obj.autoplay+` `+obj.muted+` `+obj.loop+` class='`+obj.class+`' style='`+obj.style+`'
			`+download+`
			`+poster+`
			>

					`+source+`

			</`+obj.tag+`>

		`;

	return render;

	/*

	append('body', renderMedia({
		tag: 'video',
		source: true,
		controls: 'controls',
		download: true,
		autoplay: '',
		muted: '',
		loop: '',
		class: 'in',
		src_poster: 'https://www.nexodev.org/assets/social.jpg',
		src: 'http://techslides.com/demos/sample-videos/small.mp4',
		style: `

		width: 400px;
		height: 300px;
		margin: auto;

		`
	}));

	*/

};

function renderYouTube(obj){

	let id = YoutubeUrl(obj.url).split('/');
	let ind = l(id)-1;
	id = id[ind];

	let render = `


	<iframe style='`+obj.style+`' width='`+obj.w+`' height='`+obj.h+`' class='`+obj.class+`'
	src='https://www.youtube.com/embed/`+id+`?autoplay=`+obj.autoplay+`'
	frameborder='0'
	allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen>
	</iframe>


	`;

	return render;

	/*

	append('body', renderYouTube({
		url: 'https://www.youtube.com/watch?v=jgHfPgcFsOM&list=RD_NGdzZfJi-4&index=4',
		autoplay: '0',
		w: '300px',
		h: '200px',
		class: 'in',
		style: 'margin: auto;'
	}));

	*/

}

function fadeOut(el){
	el.style.opacity = 1;

	(function fade() {
		if ((el.style.opacity -= .1) < 0) {
			el.style.display = "none";
		} else {
			requestAnimationFrame(fade);
		}
	})();
};

function fadeIn(el, display){
	el.style.opacity = 0;
	el.style.display = display || "block";

	(function fade() {
		var val = parseFloat(el.style.opacity);
		if (!((val += .1) > 1)) {
			el.style.opacity = val;
			requestAnimationFrame(fade);
		}
	})();
};

function fadeGlobal(fadein, div, time, from_dis, to_dis){
  const total_iter = 100;
  let time_interval = time/total_iter;
  let total_time = total_iter*time_interval;
  let time_cont = 0;
  for(let i=1;i<=total_iter;i++){
    setTimeout(()=>{
			let por;
      if(fadein){por = (i/total_iter);}
			else{por = 1 - (i/total_iter);}
      s(div).style.opacity = (''+por);
      if(i==1){s(div).style.display = from_dis;}
			if(i==total_iter){s(div).style.display = to_dis;}
    },time_cont);
    time_cont = time_cont + time_interval;
  }
};

function sliderV1(sli_l, name, time, arrow_izq, arrow_der, tim_x, tim_y, animate_loop){
	let stop_ = false;
	let sli = 0;
	let change_ = true;
	function nextV1(t_a, t_b, sum){
		if(!stop_){
			change_ = false;
			setTimeout(()=>{
				change_ = true;
			}, Math.max.apply(null, tim_x));
		}
		fadeGlobal(false, (name+sli), t_a, 'block', 'none');
		if(sum){sli++;}else{sli--;}
		if(sli>sli_l){
			sli = 0;
		}
		if(sli<0){
			sli = sli_l;
		}
		fadeGlobal(true, (name+sli), t_b, 'block', 'block');
	}
	if(animate_loop){
		setInterval(function(){
			if(!stop_){
				nextV1(tim_x[0], tim_x[1], true);
			}
		}, time);
	}
	s(arrow_der).onclick = () => {
		if(change_){
			nextV1(tim_y[0], tim_y[1], true);
		}
		stop_ = true;
	};
	s(arrow_izq).onclick = () => {
		if(change_){
			nextV1(tim_y[0], tim_y[1], false);
		}
		stop_ = true;
	};
	/* sliderV1(5, '.testi-', 4000, '.s8-izq', '.s8-der', [1000, 2000], [500, 500]); */
}

var mod_scroll = {
  scrollPos: 0,
  init: (div, log, fn)=>{
    window.onscroll = ()=>{
      let aux_scroll = -1*div.getBoundingClientRect().top;
      if(log){
        if (aux_scroll > this.scrollPos){
          console.log(('scroll ↓ '+(aux_scroll)+' + innerHeight: '+window.innerHeight));
        }else{
          console.log(('scroll ↑ '+(aux_scroll)+' + innerHeight: '+window.innerHeight));
        }
      }
      this.scrollPos = aux_scroll;
      fn(this.scrollPos);
    };
  }
  /*

	setTimeout(()=>{
		 let display_ball = false;
		 mod_scroll.init(s('body'), false, scroll => {
			 // console.log(s('.content-main-ball-content').offsetTop*0.95);
				 if(scroll>s('.content-main-ball-content').offsetTop*0.95 && !display_ball){
					 setTimeout(()=>{
						 console.warn('display scroll -> display_ball');
						 display_ball = true;
						 // fadeGlobal(true, '.main-ball-content', 200, 'block', 'block');
						 s('.main-ball-content').style.opacity = '1';
						 animateStaticsBall();

					 }, 400);
				 }
		 });
	 }, 2000);

	 require TweenMax Lib ->

	 Counter:

	 function count(nameClass, limit){
		 let counter = { var: 0 };
		 TweenMax.to(counter, 5, {
			 var: limit,
			 onUpdate: function () {
				 let number = Math.ceil(counter.var);
				 htmls(nameClass, number);
				 // if(number === counter.var){ count.kill(); }
			 },
			 onComplete: function(){
				 setTimeout(()=>{
					 count(nameClass, limit);
				 }, 3000);
			 },
			 ease:Circ.easeOut
		 });
	 };

  */
};

let mod_key = {
	keyState: [],
	init: function(){
		window.addEventListener('keydown',function(e){
			mod_key.keyState[e.keyCode] = true;
		},true);
		window.addEventListener('keyup',function(e){
			mod_key.keyState[e.keyCode] = false;
		},true);
	}
	/*
	mod_key.init();
	setInterval(()=>{
		if(mod_key.keyState[38]){
			console.log('test');
		}

	},50);
	*/
};

function setScrollTouchX(el){

	const slider = s(el);
	let isDown = false;
	let startX;
	let scrollLeft;

	slider.onmousedown = function (e) {

	  isDown = true;
	  slider.classList.add("active");
	  startX = e.pageX - slider.offsetLeft;
	  scrollLeft = slider.scrollLeft;

	};

	slider.onmouseleave = function (e) {

	  isDown = false;
	  slider.classList.remove("active");

	};

	slider.onmouseup = function (e) {

	  isDown = false;
	  slider.classList.remove("active");

	};

	slider.onmousemove = function (e) {

	  if (!isDown) return;
	  e.preventDefault();
	  const x = e.pageX - slider.offsetLeft;
	  const walk = x - startX;
	  slider.scrollLeft = scrollLeft - walk;

	};

}

function lang(){

	return navigator.language.split('-')[0];

}

function typeWriter(obj){
	const child = obj.child;
	const id_stop_save = obj.id;
	const arrayCharacter = obj.arrayCharacter;
	let interval_init_time = parseInt(obj.interval_init_time+'');
	const interval_character = obj.interval_character;
	htmls(child, '');
	for(let character of arrayCharacter){
		setTimeout(()=>{
			if(id_stop_save==obj.id){
				append(child, character);
			}
		}, interval_init_time);
		interval_init_time = interval_init_time + interval_character;
	}
}

function fullScreenIn(){

	let el = document.documentElement;
	let rfs =
	el.requestFullScreen
	|| el.webkitRequestFullScreen
	|| el.mozRequestFullScreen
	|| el.msRequestFullScreen
	;
	if(typeof rfs!="undefined" && rfs){
		rfs.call(el);
	} else if(typeof window.ActiveXObject!="undefined"){

		let wscript = new ActiveXObject("WScript.Shell");
		if (wscript!=null) {
			wscript.SendKeys("{F11}");
		}
	}

}

function fullScreenOut(){

	document.exitFullscreen();

}

async function ajax(type, url, obj, end){

	let xhr = new XMLHttpRequest();
	xhr.open(type, url, true);
	xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
	xhr.send(JSON.stringify(obj));

	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			end(JSON.parse(this.responseText));
		}
	};

}

/*ajax('POST', '/check_input', {

	name: name,
	value: val

}, function(res){

	//console.log('ajax response');
	//console.log(res);

	if(res.adv!=''){

		htmls(('.error-input-txt-'+name), res.adv[it]);
		fadeIn(s('.error-input-'+name), 'block');

	}

});*/




async function postData(url = '', data = {}) {

  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'

    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  });
  return response.json();
}

/*

postData('https://example.com/answer', { answer: 42 })
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
});

*/

function notclick(div, id, state){

	if(id==0){
		s(div).oncontextmenu = function(){ return state; }
	}

	if(id==1){
		s(div).ondragstart = function(){ return state; }
	}

	if(id==2){
		s(div).onselectstart = function(){ return state; }
	}

}

function allNotClick(div){
	let el = div;
	if(el == null){el = 'body'}
	notclick(el, 0, false);
	notclick(el, 1, false);
	notclick(el, 2, false);
}

async function sha256(message) {
		/* cors restriction
    encode as UTF-8 */
    const msgBuffer = new TextEncoder().encode(message);

    /* hash the message */
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

    /* convert ArrayBuffer to Array */
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    /* convert bytes to hex string */
    const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
    return hashHex;
		/* let result = await sha256('test'); */
}

function dragDrop(div){

  var object = s(div),
  initX, initY, firstX, firstY;

  object.addEventListener('mousedown', function(e) {

  	e.preventDefault();
  	initX = this.offsetLeft;
  	initY = this.offsetTop;
  	firstX = e.pageX;
  	firstY = e.pageY;

  	this.addEventListener('mousemove', dragIt, false);

  	window.addEventListener('mouseup', function() {
  		object.removeEventListener('mousemove', dragIt, false);
  	}, false);

  }, false);

  object.addEventListener('touchstart', function(e) {

  	e.preventDefault();
  	initX = this.offsetLeft;
  	initY = this.offsetTop;
  	var touch = e.touches;
  	firstX = touch[0].pageX;
  	firstY = touch[0].pageY;

  	this.addEventListener('touchmove', swipeIt, false);

  	window.addEventListener('touchend', function(e) {
  		e.preventDefault();
  		object.removeEventListener('touchmove', swipeIt, false);
  	}, false);

  }, false);

  function dragIt(e) {
  	this.style.left = initX+e.pageX-firstX + 'px';
  	this.style.top = initY+e.pageY-firstY + 'px';
  }

  function swipeIt(e) {
  	var contact = e.touches;
  	this.style.left = initX+contact[0].pageX-firstX + 'px';
  	this.style.top = initY+contact[0].pageY-firstY + 'px';
  }

}
