/*

			VanillaJS v1.0
			Released into the Public Domain

<input type='text' class='subInputChat' spellcheck='false' autocomplete='new-password' onfocusout="mod_session.outUserNameInput();" placeholder=' . . .' value='' />
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

s('body').onkeydown = () => {
		switch (window.event.keyCode) {
			case 13:
					logIn();
				break;
			default:

		}
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


// Contenido del <strong> dentro de .titulo dentro de #contenedor
document.querySelector('#contenedor .titulo strong').textContent
// Todos los <span> y <img> de una página
document.querySelectorAll('span, img')

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

function htmlsa(i_, div, html){

	sa(div)[i_].innerHTML = html;

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
		let val = parseFloat(el.style.opacity);
		if (!((val += .1) > 1)) {
			el.style.opacity = val;
			requestAnimationFrame(fade);
		}
	})();
};

function fadeGlobal(fadein, div, time, from_dis, to_dis){
	const fadeGoblalMsgError = " warn -> fadeGlobal not div";
  const total_iter = 100;
  let time_interval = time/total_iter;
  let total_time = total_iter*time_interval;
  let time_cont = 0;
  for(let i=1;i<=total_iter;i++){
    setTimeout(()=>{
			let por;
      if(fadein){por = (i/total_iter);}
			else{por = 1 - (i/total_iter);}
      s(div) ? s(div).style.opacity = (''+por):
			console.warn(fadeGoblalMsgError);
      if(i==1){s(div) ? s(div).style.display = from_dis:
			console.warn(fadeGoblalMsgError);}
			if(i==total_iter){s(div) ? s(div).style.display = to_dis:
			console.warn(fadeGoblalMsgError);}
    },time_cont);
    time_cont = time_cont + time_interval;
  }
};

function sliderV1(sli_l, name, time, arrow_izq, arrow_der, tim_x, tim_y, animate_loop){
	let stop_ = false;
	let sli = 0;
	let change_ = true;
	let intervalReturn;
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
		intervalReturn = setInterval(function(){
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

	return intervalReturn;
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

function toUpBtn(btn_, limit_){
	setTimeout(()=>{
		if(-1*s('html').getBoundingClientRect().top>limit_ && s(btn_).style.display == 'none'){
			s(btn_).style.display = 'block';
		}
	}, 0);
	return scroll => {
		if(scroll>limit_ && s(btn_).style.display == 'none'){
			fadeIn(s(btn_));
		}else if(scroll <= limit_ &&  s(btn_).style.display == 'block' ){
			fadeOut(s(btn_));
		}
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
	https://keycode.info/
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
	  // e.preventDefault();
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




async function postData(url = '', data = {}, obj) {
	obj == undefined ? obj = { type:'POST' } : null;
  const response = await fetch(url, {
    method: obj.type,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'

    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: data==null? undefined: JSON.stringify(data)
  });
  return response.json();
}

/*

postData('/global-consistency', data)
.then(resp => {
		console.log(' success /global-consistency ->');
		console.log(resp);
}).catch( error => {
		console.log(' error /global-consistency ->');
		console.log(error);
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


function displayContentSlice(id_content, ref, transition){
	s(id_content).style.transition = transition;
	s(id_content).style.opacity = "0";
	s(id_content).style.height = "auto";
	const h_ = s(ref).clientHeight +"px";
	s(id_content).style.height = "0px";
	setTimeout(()=>{
		s(id_content).style.opacity = "1";
		s(id_content).style.height = h_;
	}, 10);
}

function dragDrop(div){

  let object = s(div),
  initX, initY, firstX, firstY;

  object.addEventListener('mousedown', function(e) {

  	// e.preventDefault();
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

  	// e.preventDefault();
  	initX = this.offsetLeft;
  	initY = this.offsetTop;
  	let touch = e.touches;
  	firstX = touch[0].pageX;
  	firstY = touch[0].pageY;

  	this.addEventListener('touchmove', swipeIt, false);

  	window.addEventListener('touchend', function(e) {
  		// e.preventDefault();
  		object.removeEventListener('touchmove', swipeIt, false);
  	}, false);

  }, false);

  function dragIt(e) {
  	this.style.left = initX+e.pageX-firstX + 'px';
  	this.style.top = initY+e.pageY-firstY + 'px';
  }

  function swipeIt(e) {
  	let contact = e.touches;
  	this.style.left = initX+contact[0].pageX-firstX + 'px';
  	this.style.top = initY+contact[0].pageY-firstY + 'px';
  }

}


var downloader = {
	BLOB: (nameFile, blob) => {
		let idDownload = makeid(4);
		append('body', `<a class='`+idDownload+`' style='display: none'></a>`);
		s('.'+idDownload).href = window.URL.createObjectURL(blob);
		s('.'+idDownload).download = nameFile;
		s('.'+idDownload).click();
		s('.'+idDownload).remove();
	},
	JSON: (exportObj, exportName) => {
		let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
		let downloadAnchorNode = document.createElement('a');
		downloadAnchorNode.setAttribute("href",     dataStr);
		downloadAnchorNode.setAttribute("download", exportName + ".json");
		document.body.appendChild(downloadAnchorNode); // required for firefox
		downloadAnchorNode.click();
		downloadAnchorNode.remove();
	}
}



function renderInput(obj){
	/*

	<div contenteditable="true">This is the first line.<br>

	<input type="button">
	<input type="checkbox">
	<input type="color">
	<input type="date">
	<input type="datetime-local">
	<input type="email">
	<input type="file">
	<input type="hidden">
	<input type="image">
	<input type="month">
	<input type="number">
	<input type="password">
	<input type="radio">
	<input type="range">
	<input type="reset">
	<input type="search">
	<input type="submit">
	<input type="tel">
	<input type="text">
	<input type="time">
	<input type="url">
	<input type="week">

	// prevent enter key in form div reload
	s(mainCardLoginContent).onsubmit =
	() => false;

	*/
	let value = (isOpenFalse(obj.value)?'':`value="`+obj.value+`"`);
	let idR = makeid(4);
	let render = `
	<style>
					.`+obj.id_content_input+` .`+obj.tag_label+` {

							position: absolute;
							top: `+obj.initLabelPos+`px;
							left: `+obj.initLabelPos+`px;
							-webkit-transform: translate3d(0, 0, 0);
							transform: translate3d(0, 0, 0);
							-webkit-transition: all 0.2s ease-in-out;
							transition: all 0.2s ease-in-out;

						}

					.`+obj.id_content_input+` input:valid + .`+obj.tag_label+`, .`+obj.id_content_input+` input:focus + .`+obj.tag_label+` {

						-webkit-transform: translate3d(0, `+obj.endLabelPos+`px, 0);
						transform: translate3d(0, `+obj.endLabelPos+`px, 0);
					}

					.`+obj.id_input+`::placeholder {
					  `+obj.style_placeholder+`
					}

	</style>

	`+(isOpenFalse(obj.topContent)?'':obj.topContent)+`

	<div class="`+obj.underpostClass+` `+obj.id_content_input+`"
	    style="`+obj.style_content_input+`">
			<`+(obj.textarea?'textarea':'input')+` `+(obj.disabled?'disabled':'')+`
			`+((!isOpenFalse(obj.placeholder))?`placeholder="`+obj.placeholder+`"`:'')+`
			`+value+`
			type="`+obj.type+`" class="`+obj.underpostClass+` w-fill
			`+(obj.style_outline?`in-outline`:'')+` `+obj.id_input+`" id='`+idR+`'
			`+(obj.required?'required':'')+` `+(obj.type=='password'?` autocomplete="new-password"`:'')+`
			`+(obj.username?` autocomplete="username"`:'')+`
			style="`+obj.style_input+`">`+(obj.textarea?(
				isOpenFalse(value)?'':value.split('value="')[1].slice(0, -1)
			)+'</textarea>':((obj.active_label&&!obj.disabled)?`<label class='`+obj.tag_label+`' for='`+idR+`' style="`+obj.style_label+`" >
					`+obj.text_label+`
		  </label>`:''))+`
	</div>

	`+(isOpenFalse(obj.botContent)?'':obj.botContent)+`

	`;

	// espacions uperios br content

	setTimeout(() => {

		s('.'+obj.id_content_input).onclick = async () => {
			s('.'+obj.id_input).focus();
			await obj.fnOnClick();
		};

	}, 0);


	/*

	let style_content_input = `
			border: 2px solid red;
			padding: 5px;
			width: 250px;
			margin: auto;
	`;
	let style_input = `
			background: green;
			font-size: 20px;
			height: 40px;
			padding: 5px;
	`;
	let style_label = `
			color: red;
			font-size: 20px;
	`;
	let style_placeholder = `
			color: orange;
	`;
	let top_content = spr('<br>', 1);
	let bot_content = ``;
	let dataInputs = [
	{
		underpostClass: 'in',
		id_content_input: 'a1',
		id_input: 'a2',
		type: 'text',
		required: true,
		style_content_input: style_content_input,
		style_input: style_input,
		style_label: style_label,
		style_outline: true,
		style_placeholder: style_placeholder,
		textarea: false,
		active_label: true,
		initLabelPos: 15,
		endLabelPos: -30,
		text_label: 'Ingrese Email',
		tag_label: 'a3',
		fnOnClick: async () => {
			console.log('click input');
		},
		value: ``,
		topContent: top_content,
		botContent: bot_content,
		placeholder: ''
	}
	];
	for(let di of dataInputs){
		append('body', renderInput(di));
	}

	*/


	return render;
}



async function renderSchedule(obj){
	  let data_ = {
    availability: () => {
      let availability = [];
      for(let rn of range(1, 7)){
        let from_ = (+ new Date())+([-1,1][random(0,1)]*60*60*1000*random(0, 9999));
        let to_ = from_ + (60*60*1000*random(1, 3));
        availability.push({
          from: new Date(from_),
          to: new Date(to_),
          period: false
        });
      };
      availability = availability.concat(data_.period());
      // console.log(" availability: () => ");
      // console.log(availability);
      return orderArrayFromAttrInt(availability, "from", true);
    },
    period: obj_ => {


      let dataPeriod = obj_ != undefined ? obj_.data.periods :
			[
        {
          tipo: 'Presencial',
          from: '16:00',
          to: '20:00',
          day: 7
        },
        {
          tipo: 'Presencial',
          from: '12:00',
          to: '13:00',
          day: 5
        }
      ];

      let dataRender = [];

      for(let d_ of dataPeriod){

        let from_h = parseInt(d_.from.split(':')[0]);
        let from_m = parseInt(d_.from.split(':')[1]);

        let to_h = parseInt(d_.to.split(':')[0]);
        let to_m = parseInt(d_.to.split(':')[1]);

        let month_ = new Date().getMonth();

        let initTime =
        new Date(new Date().getFullYear(), new Date().getMonth(), 1).getTime();
        let endTime = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getTime()+
        (60*60*24*1000)*62;

        while(initTime<endTime){

          let day_ = new Date(initTime).getDay();
          day_ == 0 ? day_ = 7 : null;

          if(day_==d_.day){
						let from_ = new Date(initTime+(from_h*60*60*1000)+(from_m*60*1000));
						let to_ = new Date(initTime+(to_h*60*60*1000)+(to_m*60*1000));

						if(from_.getTime()>new Date(2022, 3, 2, 23, 59, 59).getTime()){
							// cambio GMT 3 -> 4
							const gmt = 4;
							from_ = new Date(
								from_.getTime()
									-
								((60*60*(23+(gmt-1))*1000)-offTime())
							);
							to_ = new Date(
								to_.getTime()
									-
								((60*60*(23+(gmt-1))*1000)-offTime())
							);

						}

            dataRender.push({
              from: from_,
              to: to_,
              period: true,
							tipo: d_.tipo,
							_id: d_._id
            });
						// comprobar si esta un point y incrustar la data
						for(let obj_p of dataPeriod){
							for(let point_ of obj_p.points){
								// console.log(point_);
								if(
										point_.month==dataRender[(l(dataRender)-1)].from.getMonth()
										&&
										point_.date==dataRender[(l(dataRender)-1)].from.getDate()
										&&
										point_.year==dataRender[(l(dataRender)-1)].from.getFullYear()
										&&
										parseInt(point_._id)==parseInt(dataRender[(l(dataRender)-1)]._id)
								){
									// console.warn(" period data ->");
									// console.log(point_.data);
									dataRender[(l(dataRender)-1)].data = newInstance(point_.data);
									// console.log(point_.date);
									// console.log(point_.month);
									// console.log(dataRender[(l(dataRender)-1)]);
								}
							}
						}
          }

          initTime += (60*60*24*1000);

        }


      }
      // console.log("dataRender ->");
      // console.log(dataRender);

      return dataRender;


    }
  };


  let getDataRenderSchedule = obj_ => {

							let availability = [];

							if(obj_ != undefined){
								availability = availability.concat(obj_.data.points);
								availability = availability.concat(data_.period(obj_));
								availability = orderArrayFromAttrInt(availability, "from", true);
							}else{
								availability = data_.availability();
							}

							// TODO: algunos llegan con data -> period: false
							availability = availability.filter(x =>
								((new Date(x.from).getTime()+(x.period?0:offTime()))>=(+ new Date())));

              let years = arrJoin([
                availability.map(x=>new Date(x.from).getFullYear()),
                availability.map(x=>new Date(x.to).getFullYear())
              ]);

              years = uniqueArray(years).map(x=>{
                return {year: x, months: []};
              });

              for(let year of years){
                  for(let av of availability){
                    if(new Date(av.from).getFullYear()==year.year){
                      year.months.push(new Date(av.from).getMonth());
                    }
                    if(new Date(av.to).getFullYear()==year.year){
                      year.months.push(new Date(av.to).getMonth());
                    }
                  }
                  year.months = uniqueArray(year.months);
                  year.months = year.months.map(x=>{
                    return {
                      month: x,
                      lastDate: new Date(year.year, x + 1, 0),
                      firstDay: new Date(year.year, x, 1)
                    };
                  });
              }

              // console.log(" getDataRenderSchedule: async () => ");
              // console.log(years);

              return { years, availability };

  };


  let renderSchedule = async obj_ => {

    // console.log(" renderSchedule: async () => ");
    let getD = getDataRenderSchedule(obj_);

		// eliminar meses que todos tengas data
		// todos los meses
		// todos los años
		// conjunto tupla
		// si todos los de un mes del mismo año tiene data se eliminan
		console.warn("fix filter month ->");
		console.log(getD);
		for(let year_ of getD.years){
			let ind_mont = 0;
			for(let month_ of year_.months){
				// month_.month
				// year_.year
				let not_data = false;
				for(let g_ of getD.availability){
					// buscar al menos uno que no tenga al attr data
					if(
						parseInt(g_.from.getMonth())==parseInt(month_.month)
						&&
						parseInt(g_.from.getFullYear())==parseInt(year_.year)
						&&
						!existAttr(g_, "data")
					){
						not_data = true;
					}
				}
				// solo si no display data
				if(!not_data && obj_.displayDataPoint == false){
					year_.months[ind_mont] = null;
				}
				ind_mont++;
			}
			year_.months = year_.months.filter(x=>x!=null);
		}

    let availability = getD.availability;
    let dataRender = getD.years;
    let meses = obj_.str_months;
    let semana = obj_.str_week;

    let render = `
      <style>
      .`+obj_.id+`-row {
        `+obj_.style.row+`
      }
      .`+obj_.id+`-title-month {
      `+obj_.style.title_month+`
      }
      .`+obj_.id+`-title-day {
      `+obj_.style.title_day+`
      }
      .`+obj_.id+`-node-date {
        `+obj_.style.node_date+`
      }
			.`+obj_.id+`-week-row {
        `+obj_.style.rowWeek+`
      }
			.`+obj_.id+`-row-header-week {
        `+obj_.style.rowHeaderWeek+`
      }
			.`+obj_.id+`-point-period {
        `+obj_.style.point_period+`
      }
			.`+obj_.id+`-point-period:hover {
        `+obj_.style.point_period_hover+`
      }
			.`+obj_.id+`-point {
        `+obj_.style.point+`
      }
			.`+obj_.id+`-point:hover {
        `+obj_.style.point_hover+`
      }
      </style>
    `;

    for(let year of dataRender){
      for(let month of year.months){

        render += `

                <div class='in `+obj_.id+`-row `+obj_.style.class_font+` `+obj_.id+`-title-month'>


                  `+meses[month.month]+` `+year.year+`


                </div>

                `;

        render += `<div class='fl `+obj_.id+`-row `+obj_.style.class_font+`'>`;

				render += '<div class="fl '+obj_.id+'-row-header-week">';
        for(let date of semana){
					if(date%7==0){
															render += '</div><div class="fl '+obj_.id+'-row-header-week">';
														}
          render += `<div class='in fll `+obj_.id+`-title-day' style=
          '

                width: `+(100/l(semana))+`%;

          '

          >

              `+date+`

          </div>`;

        }
				render += '</div>';

        // rellenar espacios vacios
        let limitWhiteDay = new Date(month.firstDay).getDay();
        limitWhiteDay == 0 ? limitWhiteDay = 7:null;


				let initRowFix = 0;
				render += '<div class="fl '+obj_.id+'-week-row">';
        for(let date of range(2, limitWhiteDay)){

          render += `<div class='in fll' style=
          '

                width: `+(100/l(semana))+`%;

          '

          >

              -

          </div>`;
					initRowFix++;

        }
				let fixInit = false;
        for(let date of range(1, month.lastDate.getDate())){
					if(initRowFix%7==0 && fixInit){
										render += '</div><div class="fl '+obj_.id+'-week-row">';
									}
									fixInit = true;
									initRowFix++;

          render += `<div class='in fll `+obj_.id+`-node-date `+obj_.id+`-node-date-`+date+`-`+month.month+`-`+year.year+`' style=
          '

                width: `+(100/l(semana))+`%;
                /* background: `+(date%2==0?'#cccccc':'#e4e6e2')+` */

          '

          >

              `+date+`

          </div>`;

        }
				render += '</div>';


        render += `</div> `;

      }

    }

    setTimeout(()=>{
      for(let dateData of availability){

				let point_id = `.`+obj_.id+`-node-date-`
          +dateData.from.getDate()
          +`-`+dateData.from.getMonth()
          +`-`+dateData.from.getFullYear();

					if(

						obj_.displayDataPoint
						||
						(
							(!obj_.displayDataPoint)
							&&
							(!existAttr(dateData, "data"))
						)

					){


				let hashID = makeid(5);
				/*
        append(point_id, `

            <div class="`+hashID+`" style='`+
						(dateData.period?
							obj_.style.point_period:
							obj_.style.point)+`'>
                  Point
                  <br>
                  From: `+ new Date(new Date(dateData.from).getTime()+(dateData.period?0:offTime()))
									.toLocaleTimeString().slice(0,-3)+`
                  <br>
                  To: `+ new Date(new Date(dateData.to).getTime()+(dateData.period?0:offTime()))
									.toLocaleTimeString().slice(0,-3)+`
									<br>
									Tipo: `+dateData.tipo+`

            </div>

          `);
				*/
				dateData.from.getTime() > (+ new Date()) ?
				((()=>{
				append(point_id, `
						<div class="`+hashID+` `+(dateData.period?
							obj_.id+'-point-period':
							obj_.id+'-point')+`" style="margin-top: 10px; margin-bottom: 10px" >

									`+obj_.renderPoint({
										from: new Date(new Date(dateData.from).getTime()+(dateData.period?0:offTime()))
										.toLocaleTimeString().slice(0,-3),
										to: new Date(new Date(dateData.to).getTime()+(dateData.period?0:offTime()))
										.toLocaleTimeString().slice(0,-3),
										tipo: dateData.tipo
									})+`

            </div>

          `);
					obj_.pluginPoint(dateData, '.'+hashID);
				})())
					:null;



					}

      }
    },0);



		console.log('data render schedule end ->');
		console.log(availability);
    return render;

  };

	return await renderSchedule(obj);

}

const notifi = {
	data: {
		AttrRender: {}
	},
	load: obj =>{
		notifi.data.AttrRender = obj.AttrImg ? obj.AttrImg : obj.AttrRender;
		append((obj.divContent ? obj.divContent : 'body'), `
				<style>
								notifiValidator {

									`+obj.style.notifiValidator+`

								}

								.notifiValidator-c1 {

									`+obj.style.notifiValidator_c1+`

								}

								.notifiValidator-c2 {

									`+obj.style.notifiValidator_c2+`

								}
				</style>
				<notifiValidator class='fix' style='display: none;'>
							<div class='abs notifiValidator-c1'>
							</div>
							<div class='abs notifiValidator-c2'>
							</div>
				</notifiValidator>
		`);
	},
	display: (color, msg, time, AttrRender, arg) => {
			s('notifiValidator').style.background = color;
			htmls('.notifiValidator-c1', `
							<div class='abs center'>
										`+(isFunction(notifi.data.AttrRender[AttrRender])?
										notifi.data.AttrRender[AttrRender](arg):
										notifi.data.AttrRender[AttrRender])+`
							</div>
			`);
			htmls('.notifiValidator-c2', `
							<div class='abs center' style='width: 95%;'>
										`+msg+`
							</div>
			`);
			fadeIn(s('notifiValidator'));
			setTimeout(()=>{
				fadeOut(s('notifiValidator'));
			}, time);
	}
};


function renderTableV1(dataRender, obj){

	let id_table = obj.id_table ? obj.id_table : makeid(4, false);
	let validKeys = l(dataRender)>0 ? getKeys(dataRender[0])
	.filter(x =>
								(
									(typeof(dataRender[0][x])!="object")
									||
									(dataRender[0][x] instanceof Date)
								)
	):[];

	console.log(" validKeys ->");
	console.log(validKeys);

  let rowClickWidth = '100%';

  obj.style.header_cell_style += 'width: '+(100/(l(validKeys)))+'%;';
  obj.style.cell_style += 'width: '+(100/(l(validKeys)))+'%;';

  if(obj.plugin != undefined){
		obj.style.header_cell_style += 'width: '+(100/(l(validKeys)+1))+'%;';
		// obj.style.cell_style += 'width: '+(100/(l(validKeys)+1))+'%;';
    obj.style.contentPlugStyle += 'width: '+(100/(l(validKeys)+1))+'%;';
    rowClickWidth = (100/(l(validKeys)+1))*l(validKeys) + '%';
	}

	let render = `

			<style>
				.`+id_table+`-header_row_style {
					`+obj.style.header_row_style+`
					min-width: `+(obj.style.minWidth?obj.style.minWidth:'800px')+`;
				}
				.`+id_table+`-header_cell_style {
					`+obj.style.header_cell_style+`
				}
				.`+id_table+`-header_sub_cell_style {
					`+obj.style.header_sub_cell_style+`
				}
				.`+id_table+`-row_style {
					`+obj.style.row_style+`
					min-width: `+(obj.style.minWidth?obj.style.minWidth:'800px')+`;
				}
				.`+id_table+`-cell_style {
					`+obj.style.cell_style+`
				}
				.`+id_table+`-sub_cell_style {
					`+obj.style.sub_cell_style+`
				}

				`+(obj.idMark!=undefined?'.'+id_table+`-mark_row_style  {
					`+obj.style.mark_row_style+`
				}`:'')+`

			</style>

	`;

	if(obj.onRenderStyle){
		obj.onRenderStyle(newInstance(render));
	}

	let renderHeader = '';
	if(obj.hiddenHeader==undefined){
		renderHeader += `<div class='fl `+id_table+`-header_row_style'>`;
		for(let header_col of validKeys){
			renderHeader += `<div class='in fll `+id_table+`-header_cell_style'>
					<div class='in `+id_table+`-header_sub_cell_style'>
					`+header_col+`
					</div>
			</div>`;
		}
		if(obj.plugin != undefined){
			renderHeader += `<div class='in fll `+id_table+`-header_cell_style'>`+
			(obj.name_plugin!=undefined?obj.name_plugin:'')+`</div>`;
		}
		renderHeader += '</div>';
	}

	render += renderHeader;
	if(obj.onHeaderRender){
		obj.onHeaderRender(newInstance(renderHeader));
	}

	let index_row = 0;
	for(let row of dataRender){
		let rowClickId = 'click-table-'+id_table+'-'+index_row;
		let renderRow = `<div class='fl `+(obj.idMark!=undefined && obj.idMark.includes(row.id)?id_table+`-mark_row_style'>`:id_table+`-row_style'>`);
		renderRow += '<'+rowClickId+' class="in fll" style="width: '+rowClickWidth+'">';
		for(let header_col of validKeys){
			renderRow += `<div class='in fll `+id_table+`-cell_style'>
					<div class='in `+id_table+`-sub_cell_style'>`
					+row[header_col]+
					`
					</div>
			</div>`;
		}
		renderRow += '</'+rowClickId+'>';
		if(obj.plugin != undefined){
			renderRow += `<div class='in fll `+id_table+`-cell_style' `+(obj.style.contentPlugStyle?`style='`+obj.style.contentPlugStyle+`'`:'')+`  >`
			+obj.plugin(index_row)+
			`</div>`;
		}
		renderRow += '</div>';

		render += renderRow;
		if(obj.onRenderDataRow){
			obj.onRenderDataRow(renderRow, row, index_row, rowClickId);
		}
		index_row++;
	}

	/*
	append('.render-list', renderTableV1( [{ a: 'a' }, { a: 'b' }], {
      style: {
        header_row_style: 'border-bottom: 2px solid green;',
        header_cell_style: '',
        row_style: 'border-bottom: 2px solid gray;',
        cell_style: '',
        minWidth: 'none'
      }
  }));
	
	append('body', renderTableV1( data_periods, {
			style: {
				header_row_style: header_row_style,
				header_cell_style: header_cell_style,
				row_style: row_style,
				cell_style: cell_style
			},
			plugin: index => {
				let render_ = `<div class='inl test-`+index+`'>
				test `+index+`
				</div>`;
				setTimeout(()=>{
					s('.test-'+index).onclick = ()=>{
						alert("index: "+index);
					};
				},0);
				return render_;
			},
			name_plugin: undefined
		}
	));

	*/

 return render;

}


		function renderFullModal(obj){


			    let render = `

			      <style>
			        .`+obj.id_sch_content_modal+`-content-modal {
			          `+obj.style_sch_content_modal+`
			        }
			      </style>

			      <div class='
						fix
						`+obj.id_sch_content_modal+`-content-modal
						`+obj.id_sch_content_modal+`'>

						<div class='`+obj.id_content_display_data+`'>
						</div>

						`+(obj.closeButton!=undefined?`

								`+((()=>{console.log('test ->');

									setTimeout(()=>{
										s('.'+obj.id_sch_content_modal+'-close-button').onclick =
										() => {
													console.log('close modal -> '+'.'+obj.id_sch_content_modal+'-close-button');

													fadeOut(s('.'+obj.id_sch_content_modal+'-content-modal'));
										};
									},0);
									return `

										<div class='fix `+obj.id_sch_content_modal+`-close-button'
										style='`+obj.closeButton.content_style+`'>

														<div class='abs center'>

																	`+obj.closeButton.simbol+`

														</div>
											</div>

									`;


								})())+`

							`:'')+`

			      </div>

			    `;

					return render;

		}


		function renderValueTable(obj){

			let render_ = `<div class='fl' style='`+obj.style.content+`'>`;
			for(let key_ in obj.data){
				render_ += `
				<div class='fl'>
					<div class='in fll' style='`+obj.style.key+`'>
							`+key_+`
					</div>
					<div class='in fll' style='`+obj.style.value+`'>
							`+obj.data[key_]+`
					</div>
				</div>
				`;
			}
			render_ += `</div>`;
			return render_;

		}


async function getPasteContent(){
	return new Promise(resolve => {
		navigator.clipboard.readText().then(
			clipText => resolve(clipText)
		);
	});
}

async function copyStrClipboard(newClip){
	return await new Promise(resolve => {
		navigator.clipboard.writeText(newClip).then(function() {
			 // clipboard successfully set
			 resolve(true);
		}, function() {
			 // clipboard write failed
			 resolve(false);
		});
	})
}


function isBase64(str) {
    try {
		if (str ==='' || str.trim() ===''){ return false; }
        return btoa(atob(str)) == str;
    } catch (err) {
        return false;
    }
}

var enBase64 = encodedDataBase64 => btoa(encodedDataBase64); // encode a string
var deBase64 = decodedDataBase64 => atob(decodedDataBase64); // decode the string

/*

"data:[mimetype];charset=utf-8," + dataEnCode
"data:[mimetype];base64," + dataEnCode

text/json
text/csv

console.log(deBase64(enBase64("hola")));

*/

async function fileToBase64(file){
	return new Promise((resolve, reject) => {
	    const reader = new FileReader();
	    reader.readAsDataURL(file);
	    reader.onload = () => resolve(reader.result);
	    reader.onerror = error => reject(error);
	});
};

function getUriPath(baseUri){
	if(!baseUri){
		baseUri = "";
	}
	const _test = 
	(location.href.slice(-1) == "/" ? location.href.slice(0, -1): location.href)
	.split('/').pop()
	.split('?')[0];
	if(_test == location.host || _test == baseUri.split("/").pop()){
		return baseUri + "/";
	}else{
		return baseUri + "/" + _test;
	}
}

function renderDropDownV1(obj){

	let render = `<select class="`+obj.underpostClass+` `+obj.id+`"
	style="`+obj.style.content+`">
	<option style='display: none; `+obj.style.option+`'
	 value='' selected disabled>
		`+obj.title+`
	</option>
	`;
	for(let data_ of obj.data){
		render += `
				<option style='`+obj.style.option+`'
				 value='`+data_.value+`'>`+data_.display+`</option>
		`;
	}
	render += `</select>`;
	return render;

}


function renderGridsModal(obj){

	console.log("renderGridsModal(obj) ->");
	console.log(obj);

	let idGrid = obj.mainIdGrid ? obj.mainIdGrid : makeid(5, false);
	let intervalReturn = {};
	let render = `


			<style>
					.content-cell-`+idGrid+` {
						`+obj.style.cell+`
					}
					.content-cell-`+idGrid+`:hover {
						`+obj.style.cell_hover+`
					}
					.main-content-cell-modal-`+idGrid+` {
						`+obj.style.content_cell_modal+`
					}
					.content-cell-modal-`+idGrid+` {
						`+obj.style.cell_modal+`
					}
					.cell-gfx-`+idGrid+` {
						`+obj.style.cell_gfx+`
					}
					.close-btn-content-`+idGrid+` {
						`+obj.style.close_btn_content+`
					}
					.close-btn-content-`+idGrid+`:hover {
						`+obj.style.close_btn_content_hover+`
					}
			</style>

			<div class='fl `+idGrid+`-content'>
			`;


	htmls(obj.divRenderModal, `

		<div class='fix center main-content-cell-modal-`+idGrid+`'>

		<div class='in content-cell-modal-`+idGrid+`'>

				test

		</div>


			<div class='abs center gm-back-btn-`+idGrid+`'
			style='`+obj.style.cell_btn_render_back+`
			`+(obj.disableRowNavModal&&obj.disableRowNavModal==true?'display: none;':'')+`
			'>

						`+obj.style.cell_btn_render_back_value+`

			</div>

			<div class='abs center gm-next-btn-`+idGrid+`'
			style='`+obj.style.cell_btn_render_next+`
			`+(obj.disableRowNavModal&&obj.disableRowNavModal==true?'display: none;':'')+`
			'>

						`+obj.style.cell_btn_render_next_value+`

			</div>



		<div class='abs close-btn-content-`+idGrid+`'>
				<div class='abs center'>
							`+obj.style.close_btn_simbol+`
				</div>
		</div>

		</div>

	`);

  let ind_cell = 0;
	let render_rows = obj.row!=null ? obj.row : ((()=>{
		let real_ = l(obj.dataCell)/obj.col;
		let plus_ = l(obj.dataCell)%obj.col!=0?1:0;
		obj.row = Math.trunc(real_)+plus_;
	})());

	for(let row_ of range(1, obj.row)){
		// render += `<div class='fl row-content-`+row_+`-`+idGrid+`'>`;
			for(let col_ of range(1, obj.col)){

						let id_cell_ = idGrid+`-x-`+col_+`-y-`+row_;
						let id_cell_modal_ = 'content-cell-modal-'+idGrid;
						let id_cell_content_modal_ = 'main-'+id_cell_modal_;
						render +=
						`<div class='inl `+id_cell_+` main-cell-`+obj.id_cell+`-`+ind_cell+`' data-id='`+obj.id_cell+'-'+ind_cell+`' style='
									width: `+((100/obj.col)*(obj.factorCell!=undefined?obj.factorCell:1))+`%;
						'>
										<!-- y:`+row_+` x:`+col_+` -->

												<div class='`+(obj.classSubContentCell ? obj.classSubContentCell : 'abs center' )+` content-cell-`+idGrid+` `+obj.id_cell+`-`+ind_cell+`'>

															<!--

															<div class='abs center'>

																		y:`+row_+` x:`+col_+`

															</div>

															-->

															`+(obj.dataType=='img' && obj.dataCell[ind_cell]?
															`
															<img class='abs center cell-gfx-`+idGrid+`'
															src='`+obj.dataCell[ind_cell].path+`'
															style='`+
															(obj.dataCell[ind_cell].style?
																obj.dataCell[ind_cell].style:'')+`'
																>

																`+
																(obj.dataCell[ind_cell].html?
																	obj.dataCell[ind_cell].html:'')+`


															`
															:'')+`

												</div>

						 </div>`;
						 let w_f = null;
						 let h_f = null;
						 const ind_cell_return = newInstance(ind_cell);
						 setTimeout(()=>{
							 s('.'+id_cell_).onclick = () => {
								 	console.log(id_cell_);
								try {
									ind_cell_return-1 >= 0 && obj.disableRowNavModal != true ?
									((()=>{
										s('.gm-back-btn-'+idGrid).style.opacity = '1';
										s('.gm-back-btn-'+idGrid).style.display = 'block';
									})()):
									s('.gm-back-btn-'+idGrid).style.opacity = '0';

									ind_cell_return+1 >= 0 && obj.disableRowNavModal != true ?
									((()=>{
										s('.gm-next-btn-'+idGrid).style.opacity = '1';
										s('.gm-next-btn-'+idGrid).style.display = 'block';
									})()):
									s('.gm-next-btn-'+idGrid).style.opacity = '0';

									if(obj.dataCell[ind_cell_return]!=undefined){
										// fadeIn(s('.'+id_cell_content_modal_));
										obj.clickRowOpenModal === false ? null:
										 s('.'+id_cell_content_modal_).style.display = 'block';
										obj.clickRowOpenModal === false ? null:
										 s('.'+id_cell_content_modal_).style.opacity = '1';
										 // obj.clickRowOpenModal === false ? null:
										obj.onCLick(obj.dataCell[ind_cell_return], id_cell_modal_, ind_cell_return, idGrid);

										ind_cell_return-1 >= 0 ?
										s('.gm-back-btn-'+idGrid).onclick = () => {
												// console.log("back grid modal");
												s('.gm-next-btn-'+idGrid).style.opacity = '1';
												s('.gm-next-btn-'+idGrid).style.display = 'block';
												s('.'+obj.id_cell+'-'+(ind_cell_return-1))
												.click();

										}: s('.gm-back-btn-'+idGrid).style.opacity = '0';

										ind_cell_return+1 <= (l(obj.dataCell)-1) ?
										s('.gm-next-btn-'+idGrid).onclick = () => {
												// console.log("next grid modal");
												s('.gm-back-btn-'+idGrid).style.opacity = '1';
												s('.gm-back-btn-'+idGrid).style.display = 'block';
												s('.'+obj.id_cell+'-'+(ind_cell_return+1))
												.click();

										}: s('.gm-next-btn-'+idGrid).style.opacity = '0';


									}else{
										console.log('no data cell');
										s('.close-btn-content-'+idGrid).click();
									}
								}catch(error){
									// console.log(error);
									console.warn('click grill default');
								}
							 };
							 const renderCell = () => {
								 if(s('.'+id_cell_) && (w_f!=window.innerWidth || h_f!=window.innerHeight || s('.'+id_cell_).style.height=='0px')){
						        w_f=window.innerWidth;
						        h_f=window.innerHeight;
										s('.'+id_cell_).style.height = obj.setHeight ? obj.setHeight : s('.'+id_cell_).clientWidth+'px';
      					}
							 };
							 renderCell();
							 intervalReturn['interval-'+obj.id_cell+'-'+id_cell_] =
							 setInterval(()=>renderCell(), obj.intervalRender);
						 }, obj.delayInit);
						 ind_cell++;
			}
		// render += `</div>`;
	}

	render += `</div>`;

	setTimeout(()=>{

			// console.warn(ind_cell);
			// console.warn(obj.dataCell);

			s('.close-btn-content-'+idGrid).onclick = () => {
				fadeOut(s('.main-content-cell-modal-'+idGrid));
			};
			dragDrop('.main-content-cell-modal-'+idGrid);
	},0);

	return { render, intervalReturn, idGrid };

}


function borderChar(px_, color_){
	return `
	text-shadow: `+px_+`px -`+px_+`px `+px_+`px `+color_+`,
							 -`+px_+`px `+px_+`px `+px_+`px `+color_+`,
							 -`+px_+`px -`+px_+`px `+px_+`px `+color_+`,
							 `+px_+`px `+px_+`px `+px_+`px `+color_+`;

	`;
}


function responsiveRender(interval_time, fn){
	let r_w = null;
	let r_h = null;
	let intervalReturn;
	const render_ = ()=>{
		if(r_w!=window.innerWidth || r_h!=window.innerHeight){
			r_w = window.innerWidth;
			r_h = window.innerHeight;
			fn(r_w, r_h);
		}
	}
	render_();
	intervalReturn =
	setInterval(()=>render_(), interval_time);
	return intervalReturn;
}

async function responsiveRenderAsync(interval_time, fn){
	let r_w = null;
	let r_h = null;
	let intervalReturn;
	const render_ = async ()=>{
		if(r_w!=window.innerWidth || r_h!=window.innerHeight){
			r_w = window.innerWidth;
			r_h = window.innerHeight;
			await fn(r_w, r_h);
		}
	}
	await render_();
	intervalReturn =
	setInterval(async ()=>await render_(), interval_time);
	return intervalReturn;
}


function renderTooltipV1(obj_){
	return `
	<style>
				.tooltiptext-`+obj_.idTooltip+` {
							visibility: hidden;
							`+(obj_.transition.active===true?
								`transition:visibility `+obj_.transition.time+` linear,opacity `+obj_.transition.time+` linear;`
								:'')+`
							`+obj_.tooltipStyle+`
				}
				.tooltip-`+obj_.idTooltip+`:hover .tooltiptext-`+obj_.idTooltip+` {
							visibility: visible;
				}
				</style>


				<div class="`+obj_.contentUnderpostClass+` tooltip-`+obj_.idTooltip+`">
					`+obj_.originContent+`
							<div class="tooltiptext-`+obj_.idTooltip+`" >	`+obj_.tooltipContent+`</div>
				</div>
	`;
}

var getImgDataDOM = () =>
getKeys(sa('img')).map( imgDOM => true ? {
	src: sa('img')[imgDOM].currentSrc,
	index: imgDOM
}:null );

function resizeBase64Img(url, width, height, end) {
			let img = new Image();
			img.setAttribute('crossOrigin', 'anonymous');
			img.onload = function () {
					let canvas = document.createElement("canvas");
					canvas.style.display = 'none';
					canvas.width = width;
					canvas.height = height;
					let ctx = canvas.getContext("2d");
					ctx.scale(width/this.width,  height/this.height);
					ctx.drawImage(this, 0, 0);
					let result = canvas.toDataURL();
					// console.log(result);
					end(result);

					/*
					getImgDataDOM().map(dataImg => {
						// console.log(dataImg.src);
						const dataImg_ = newInstance(dataImg);
						const arrData = dataImg_.src.split(',');
						const rawBase64 = arrData[1];
						const format = arrData[0];
						// console.log(
						//   isBase64(rawBase64)
						// );
						if(isBase64(rawBase64)){
							console.log('resize on ->');
							// console.log(imageToDataUri(dataImg.src, 40, 40));
							// sa('img')[dataImg.index].src = imageToDataUri(dataImg.src, w_, h_);
							resizeBase64Img(dataImg.src, w_, h_, resizeImge => {
								sa('img')[dataImg.index].src = resizeImge;
							});
						}
					});
					*/
			};

			img.src = url;
	};

/*


existencia de clase y iterador

var element = document.getElementById('element');
element.classList.add('class-1');
element.classList.add('class-2', 'class-3');
element.classList.remove('class-3');

getImgDataDOM().map(imgDOM => {
	console.log(imgDOM.index);
	if(imgDOM.index>currentIndex){

				// imagen ingresada al editor
				// console.log('img set ->');
				// dragDrop('.resize-drag');
				const newClass = getHash().split('-')[0];
				this.classInsertsImg.push(newClass);
				sa('img')[imgDOM.index].classList.add(newClass);

				console.log(sa('img')[imgDOM.index].classList);

				sa('img')[imgDOM.index].classList.forEach((value, key, listObj)=>{
					console.log(value);
				});
	}
});







renderTooltipV1({
		idTooltip: id_test_pj,
		tooltipStyle: '',
		contentUnderpostClass: 'abs center',
		originContent:  `
				<i class="fas fa-shield-alt"></i>
		`,
		tooltipContent: `
			<div class='abs center' style='top: -18px; width: 100px;'>
						<div class='inl' style='
						font-size: 8px;
						padding: 2px;
						background: rgba(0, 0, 0, 0.82);
						color: rgb(215, 215, 215);
						border-radius: 3px;
						'>
								`+['Faction Bonus', 'Bonus de Facción'][data.users.var[0].lang=='es'?1:0]+`
						</div>
			</div>
		`,
		transition: {
			active: false,
			time: '.3s'
		}
	})

	*/
	function getAllChillNodeDataByDiv(div){
		const TokenList = function (ids) {
				'use strict';
				let idsArray = [],
						TokenList = this,
						parse = function (id, functionName, cb) {
								let search = id.toString();
								if (search.split(' ').length > 1) {
										throw new Error("Failed to execute '" + functionName + "' on 'TokenList': The token provided ('" + search + "') contains HTML space characters, which are not valid in tokens.');");
								} else {
										cb(search);
								}
						};

				function triggerAttributeChange() {
						if (TokenList.tokenChanged && typeof TokenList.tokenChanged === 'function') {
								TokenList.tokenChanged(idsArray.toString());
						}
				}

				if (ids && typeof ids === 'string') {
						idsArray = ids.split(' ');
				}
				TokenList.item = function (index) {
						return idsArray[index];
				};

				TokenList.contains = function (id) {
						parse(id, 'contains', function (search) {
								return idsArray.indexOf(search) !== -1;
						});
				};

				TokenList.add = function (id) {
						parse(id, 'add', function (search) {
								if (idsArray.indexOf(search) === -1) {
										idsArray.push(search);
								}
								triggerAttributeChange();
						});
				};

				TokenList.remove = function (id) {
						parse(id, 'remove', function (search) {
								idsArray = idsArray.filter(function (item) {
										return item !== id;
								});
								triggerAttributeChange();
						});
				};

				TokenList.toggle = function (id) {
						parse(id, 'toggle', function (search) {
								if (!TokenList.contains(search)) {
										TokenList.add(search);
								} else {
										TokenList.remove(search);
								}
						});
				};

				TokenList.tokenChanged = null;

				TokenList.toString = function () {
						let tokens = '',
								i;
						if (idsArray.length > 0) {
								for (i = 0; i < idsArray.length; i = i + 1) {
										tokens = tokens + idsArray[i] + ' ';
								}
								tokens = tokens.slice(0, tokens.length - 1);
						}
						return tokens;
				};
		};

		const attachTokenList = function (element, prop, initialValues) {
				'use strict';
				let initValues = initialValues || element.prop,
						MutationObserver = window.MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
						observer,
						config,
						cancelMutation = false;

				function createTokenList(values) {
						let tList = new TokenList(values);
						tList.tokenChanged = function () {
								element.prop = element[prop].toString();
								cancelMutation = true;
						};
						element[prop] = tList;
				}

				createTokenList(initValues);

				observer = new MutationObserver(function (mutation) {
						let i,
								mutationrec,
								newAttr;
						if (mutation.length > 0 && !cancelMutation) {
								for (i = 0; i < mutation.length; i = i + 1) {
										mutationrec = mutation[i];
										if (mutationrec.attributeName === prop && element[prop]) {
												newAttr = element.prop;
												createTokenList(newAttr);
										}
								}
						}
						cancelMutation = false;
				});

				config = {
						attributes: true
				};
				observer.observe(element, config);
		};

		//------------------------------------------------------------------------------
		//------------------------------------------------------------------------------

		let _dataDom = [];
		const _recursiveChillNodeIterator = nodes =>
		nodes.forEach((itemNode, indexNode) =>
			(() => {
				let idClass = undefined;
				if(!itemNode.classList){
					attachTokenList(itemNode, 'underpost-child-'+makeid(5));
					// console.log(itemNode.classList);
				}else if(!itemNode.classList[0]){
					idClass = 'underpost-child-'+makeid(5);
					itemNode.classList.add(idClass);
				}
				// console.log('itemNode', itemNode);
				// console.log('nodeName', itemNode.nodeName);
				// console.log('localName', itemNode.localName);
				// console.log('childNodes', itemNode.childNodes);
				// console.log('children', itemNode.children);
				// console.log('classList', itemNode.classList);
				_dataDom.push({
					nodeName: itemNode.nodeName,
					localName: itemNode.localName,
					childNodes: itemNode.childNodes,
					children: itemNode.children,
					classList: itemNode.classList,
					indexNode,
					idClass
				});
				_recursiveChillNodeIterator(itemNode.childNodes);
			})()
		);
		_recursiveChillNodeIterator(sa(div));
		/*

		      this.currentsImgWithResizableDraggable = [];

		         setInterval( () =>
		         getAllChillNodeDataByDiv('.ql-editor').forEach((item, i) =>
		            (()=>{
		              if(item.localName=='img'||item.nodeName=='IMG'){
		                if(!this.currentsImgWithResizableDraggable.includes(item.classList[0])){
		                  console.warn('setResizableDraggable -> '+item.classList[0]);
		                  this.currentsImgWithResizableDraggable.push(item.classList[0]);
		                  this.setResizableDraggable({divContent: '.'+item.classList[0]});
		                }
		              }
		            })()
		          ), intervalTimeOnChangue);
							*/
		return _dataDom;
	};


	function undo(){
		document.execCommand('undo', false, null);
	};

	function redo(){
		document.execCommand('redo', false, null);
	};


	function getQueryParams(){
		const params = new URLSearchParams(window.location.search);
		let querys_ = {};
		for (const param of params) {
			querys_[param[0]] = param[1];
		}
		return querys_;
	};

	function getRawQuery(){
		return window.location.search;
	}


	function renderLang(langs){
			return langs[s('html').lang]
	}

	function renderChecbox(obj_){
		setTimeout( () => {
			s('.'+obj_.id).onclick = async () => {
				obj_.state = !obj_.state;
				obj_.state ? fadeIn(s('.check-icon-'+obj_.id)):fadeOut(s('.check-icon-'+obj_.id));
				await obj_.click(obj_.state);
			};
		}, 0);
		return `
						<style>
								.`+obj_.id+`  {
										background: `+obj_.style.background+`;
										width: `+obj_.style.width+`px;
										height: `+obj_.style.height+`px;
										`+(obj_.style.radio?'border-radius: '+obj_.style.radio+';':'')+`
										border: `+obj_.style.border+`;
										transition: .3s;
										`+(obj_.style.pointer===true?'cursor: pointer;':'')+`
								}

								.`+obj_.id+`:hover  {
										`+obj_.style.hover+`
								}
						</style>
					<div class='fl' style='`+obj_.style.content+`'>
								<div class='in fll `+obj_.extraClassContent+` `+obj_.id+`'>
											<div class='abs center check-icon-`+obj_.id+`' `+(obj_.state===true?'':`style='display: none'`)+`>
															`+obj_.style.icon+`
											</div>
								</div>
								<div class='in fll' style='height: `+obj_.style.height+`px; width: `+obj_.style.widthText+`px;'>
											<div class='abs center'>
														`+obj_.text+`
											</div>
								</div>
					</div>
		`;
	}

	function renderAccordion(obj){
		let render = `
			<div class='fl header-`+obj.id+` `+obj.classHeader+`'>
					<div class='in fll' style='width: `+obj.width+`%; height: `+obj.height+`;'>
							`+obj.contentHeader+`
					</div>
					<div class='in fll' style='width: `+(100-obj.width)+`%; height: `+obj.height+`;'>
							<div class='`+(obj.classIconContent?obj.classIconContent:'abs center')+`'>
										<i class='fas fa-caret-down icon-`+obj.id+`' style='`+obj.styleIcon+`'></i>
							</div>
					</div>
			</div>
		`;
		setTimeout( () => {
			let _open = obj.open;
			s('.header-'+obj.id).onclick = () => {
				_open ?
				obj.onClose():
				obj.onOpen();
				_open ?
				s('.icon-'+obj.id).style.transform = 'rotate(0deg)':
				s('.icon-'+obj.id).style.transform = 'rotate(180deg)';
				_open = !_open;
			};
			_open === true ? (()=>{
				s('.icon-'+obj.id).style.transform = 'rotate(180deg)';
				obj.onOpen();
			})() : null;
		}, 0);
		return render;
	};



    function setDynamicDisplay(dynamicSection, referenceDisplay, init, log){
  		const testDivScroll = (dynamicSection, referenceDisplay, scroll) => {
  			if(scroll===false){
  				return fadeIn(s(dynamicSection));
  			}
  			if( scroll >= s(referenceDisplay).offsetTop
  					&&
  					(s(dynamicSection).style.display == 'none'
  					||
  					s(dynamicSection).style.display == '')
  					&&
  					scroll < (s(referenceDisplay).offsetTop+s(referenceDisplay).offsetHeight)
  					){
  				return fadeIn(s(dynamicSection));
  			}
  			if( scroll > (s(referenceDisplay).offsetTop+s(referenceDisplay).offsetHeight)
  					&&
  					s(dynamicSection).style.display == 'block'){
  				return fadeOut(s(dynamicSection));
  			}
  			if( scroll < s(referenceDisplay).offsetTop
  					&&
  					s(dynamicSection).style.display == 'block'){
  				return fadeOut(s(dynamicSection));
  			}
  		};
  		if(init===true){
  			testDivScroll(dynamicSection, referenceDisplay, false);
  		}

      return scroll => {
				if(!s(dynamicSection)){
					return;
				}
				if(!s(referenceDisplay)){
					return;
				}
        log == true ?
  			console.log(s(dynamicSection).style.display)
  			:null;
  			testDivScroll(dynamicSection, referenceDisplay, scroll);
      }
  	};


function setURI(_uri, _objData, _title){
	return history.pushState(_objData, _title, _uri);
}

class Rest {
	async FETCH(url, method, data, options) {
	  const defaultOptions = {
		mode: 'cors',
		cache: 'no-cache',
		credentials: 'same-origin',
		headers: {
		  'Content-Type': 'application/json'
		  // 'navigator-onLine': navigator.onLine
		},
		redirect: 'follow',
		referrerPolicy: 'no-referrer'
	  };
	  try {
		const response = await fetch(url, {
		  method: method,
		  ...(options == undefined ? defaultOptions : options),
		  body: data == undefined ? undefined : JSON.stringify(data)
		});
		return response.json();
	  }catch(error){
		console.error(error);
		return {success: false, error }
	  }
	}
  }


  function renderJoyBtn(_obj){

	const idBtnJoy = _obj && _obj.id ? _obj.id : makeid(5);

	return /*html*/ `

	<style>
				/* content-btn  */
			.${idBtnJoy} { ${_obj.style.contenBtn} }
			
				/* btn */
			.${idBtnJoy}__text { ${_obj.style.btn} }

				/* btn bot */
			.${idBtnJoy}__bot { ${_obj.style.btn_bot } }

					/* hover */
			.${idBtnJoy}:hover { ${_obj.style.btn_hover } }

					/* Z direction */
			.${idBtnJoy}:active .${idBtnJoy}__text { ${_obj.style.direction } }

	</style>

	<div class="${idBtnJoy}">

			<div class="abs ${idBtnJoy}__bot"></div>
			<div class="abs ${idBtnJoy}__text">
			
						${_obj.icon}
			
			</div>
	</div>

	`;
}

/*

const idTest = makeid(5);
append("body", renderJoyBtn({
	id: idTest,
	icon: `
	
						<div class="abs center">
														Add
						</div>
	`,
	style: {
		contenBtn: `
				display: block;
				cursor: pointer;
				position: relative;
				width: 100px;
				height: 100px;
				background: green;
		
		`,
		btn: `
				width: 80%;
				height: 80%;
				right: 10%;
				background: pink;
				transition: .2s;
				border-radius: 50%;
		`,
		btn_bot: `
				width: 80%;
				height: 80%;
				right: 10%;
				top: 20%;
				background: orange;
				border-radius: 50%;
		`,
		btn_hover: `
				color: red;    
		`,
		direction: `
				transform: translateY(20%);
		`
	}
}));

s("."+idTest).onclick = () => console.warn("ok");

*/

function squareBtnSwithcIcon(obj){
    let open = false;
    s(obj.onclick).onclick = () => {              
        if(open){
            // CLOSE
            open = false;
            s(obj.closeIcon).style.display = "none";
            fadeIn(s(obj.openIcon));
            obj.onClose();
        }else{
            // OPEN 
            open = true;
            s(obj.openIcon).style.display = "none";
            fadeIn(s(obj.closeIcon));
            obj.onOpen();
        }
    };
    obj.open ? s(obj.onclick).click() : null;
}


function addClass(div, _class){
	return div.classList.add(_class);
}

function removeClass(div, _class){
	return div.classList.remove(_class);
}

function getListClass(div){
	return div.classList;
}


/*

// receiver stat to changue view

window.onpopstate = function(e){
    if(e.state){
        document.getElementById("content").innerHTML = e.state.html;
        document.title = e.state.pageTitle;
    }
};

*/


// end
