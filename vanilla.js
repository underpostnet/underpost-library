/* <input type='text' class='subInputChat' spellcheck='false' autocomplete='new-password' onfocusout="mod_session.outUserNameInput();" placeholder=' . . .' value='' />
.split() .join()
 replace(/reemplazar todos los lugares en que este esto/g, 'por esto');
 location.reload();
 location.href = "https://www.w3schools.com";
obtener contenido  .value
incitar focus  .focus() fuera focus .blur()
 .attr = ''
.includes('php') detectar string en string
async function load_foro_sietechakras() {
	const foro_sietechakras = await import('https://www.somosindia.cl/sv/gestor/foro_sietechakras.js');
}
load_foro_sietechakras(data);
JSON.parse() JSON.stringify()
str.trim() limpiar string
this.className.split('_')
s().onevent = function(){}; sobree escritura de evento
parseFloat(Math.round( num * 100) / 100).toFixed(2);
&nbsp; &nbsp;
s('.chat-history').scrollTop = s('.chat-history').scrollHeight;
s('.'+name+'-input-focus').onmouseout
typeof -> que tipo de var es o si existe
s('body').onkeydown = function() {
		let aux_key = window.event.keyCode;
};
.splice(i, 1);
.push();
async function loop(time) { await timer(time); }
<input type='checkbox' class='factura' />
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

navigator.clipboard.writeText(newClip).then(function() {
	 clipboard successfully set
}, function() {
	 clipboard write failed
});
window.print();
.innerText
.innerHTML
var w = window.innerWidth;
var h = window.innerHeight;
*/

function s(div){

	return document.querySelector(div);

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

		type = 'video/mp4';

	}
	if(obj.tag=='video'){

		type = 'audio/mpeg';

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

/*

(function(){

  console.log('home init');

  function rr(){

    if( (data.lastW!=s('body').clientWidth) || (data.lastH!=s('body').clientHeight) ){

      data.lastW=s('body').clientWidth;
      data.lastH=s('body').clientHeight;

      if(data.lastW>500){

        data.movil = false;

      }else{

        data.movil = true;

      }

      console.log('movil -> '+data.movil);

      //--------------------------------------------------------------------------
      //--------------------------------------------------------------------------



      //--------------------------------------------------------------------------
      //--------------------------------------------------------------------------

    }

  }

  var data = {

    movil: false,
    lastH: null,
    lastW: null

  };
  rr();
  setInterval(function(e){
    rr();
  }, 100);


}())

*/
