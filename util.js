/*

npx kill-port [port]
nvm list
nvm use [version]

null==undefined -> true

delete person.age;  // or delete person["age"];

si pertenece a una clase ->
let validKeys = getKeys(dataRender[0])
.filter(x =>
							(
								(typeof(dataRender[0][x])!="object")
								||
								(dataRender[0][x] instanceof Date)
							)
);


fetch&ajax CRUD module & (cors) ->
GETS
GET(OBTAIN PULL POLL)
PUT(UPDATE)
POST(CREATE)
DELETE(REMOVE)

WYSIWYG text editor

<a href="data:image/png;base64,iVBORw0K........">Name</a>

<iframe src="data:base64...">

<object data="data:base64...">

MimeType: {
  type: String
},
Base64: {
  type: String
},
Name: {
  type: String
}

ecadenamiento opcional solo ts? ->
arr?.length || 0;

MAP VIA:

[true, true, false]
	.map( (v,i,a)=>{
	console.log(v);
	console.log(i);
	console.log(a);
	console.log('-')
}  );


ARRAY.includes(UNIQUE ELEMENT)

parseFloat((89324.344545).toFixed(2));

console.log('req file ->');
console.log(req.file);
console.log('req files ->');
console.log(req.files);
console.log('req params ->');
console.log(req.params);
console.log('req body ->');
console.log(req.body);

if(req.files){
    req.body = genBase64Image(req);
    req.file = {};
    req.files = {};
}else{
  	req.body = JSON.parse(req.body.Article);
}

const formData: FormData = new FormData();
let ind = 0;
for(let file_ of Files){
  formData.append(("file"+ind), file_.file, file_.file.name);
  ind++;
}
formData.append("NumberFiles", (""+ind));
formData.append("Ticket", JSON.stringify(Ticket));
const req = this.http.post(url, formData);

let file_messages = [];
for (let i = 0; i < parseInt(req.body.NumberFiles); i++) {
  console.log('file ->');
  let current_file = req.files[('file'+i)];
  let current_file_64 = current_file.data.toString('base64');
  let current_file_mimetype = current_file.mimetype;
  //console.log(current_file_mimetype);
  //console.log(current_file_64);
  file_messages.push({
    MimeType: current_file_mimetype,
    Base64: current_file_64,
    Name: current_file.name
  });
}

let ticket = JSON.parse(req.body.Ticket);
ticket.messages[0].attachments = file_messages;

req.file = {};
req.files = {};
req.body = ticket;

console.log('formmatter file ->');
console.log(req.body);

downloadDoc(item){
  console.log("downloadDoc ->");
  console.log(item);
  const source = `data:`+item.MimeType+`;base64,`+item.Base64;
  const link = document.createElement("a");
  link.href = source;
  link.download = item.Name;
  link.click();
}

Object.keys({data: "asd", jola:33})
(2) ["data", "jola"]

import { a, b, c } from 'file/abc';


const path = require('path');
let fs = require('fs');

fs.writeFileSync(
				 (path.join(__dirname, '../../base64')+'/'+token),
				 formatBase64, 'utf-8');

 const data = fs.readFileSync('./input2.txt',
               {encoding:'utf8', flag:'r'});

util = util.replace(/function/g, '');

import { Keys } from 'file:///C:/dd/underpost.net/src/node/src/keys/class/Keys.js';
const { startTimestamp: start, stopTimestamp: stop } =
      this.programmingPumpForm.value;

if (!fs.existsSync(dir+'modules')){

	fs.mkdirSync(dir+'modules');

}


function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();






let obj = {
    'Students': [{
            "name": "Raj",
             "Age":"15",
            "RollNumber": "123",
            "Marks": "99",

        }, {
            "name": "Aman",
             "Age":"14",
            "RollNumber": "223",
            "Marks": "69",
           },
           {
            "name": "Vivek",
             "Age":"13",
            "RollNumber": "253",
            "Marks": "89",
           },
        ]
};

let newArray = obj.Students.filter(function (el)
{
  return el.Age >=15 &&
         el.RollNumber <= 200 &&
         el.Marks >= 80 ;
}
);
console.log(newArray);





const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]








MERGE Object


let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    ssn: '123-456-2356'
};


let job = {
    jobTitle: 'JavaScript Developer',
    country: 'USA'
};


let employee = Object.assign(person, job);
console.log(employee);

.pop() -> devuelve ultimo elemento de arreglo y lo elimina
Array.from([1, 2, 3], x => x + x) -> Array [2, 4, 6]

obj.paths.filter((el)=>{
              return (el.type=='Transaction')
            }) -> devuelve elemento en base a condicion

[1,2,3].forEach(element => console.log(element));

number validator ->
isNaN("asd")



round->

Utilizar Math.round():

Math.round(num * 100) / 100
O para ser más específico y para asegurar que cosas como 1.005 redondeen correctamente, use Number.EPSILON :

Math.round((num + Number.EPSILON) * 100) / 100


sumatoria:

[1,1,1].reduce((pre, current) => pre+current); -> 3


//Add element to front of array
let numbers = ["2", "3", "4", "5"];
numbers.unshift("1");
//Result - numbers: ["1", "2", "3", "4", "5"]

-------------------------------------------------------
-------------------------------------------------------

reponder un mensaje de error
de forma decente

// si poner mejor directamente 404, y 500 en el framework

return res.status(400).json({
	msg: `Error`
});

return res.status(400).send({
	message: 'error'
});

redirect 301 permanente
redirect 302 temporal

404 not foung
500 server error

https://developer.mozilla.org/es/docs/Web/HTTP/Status


{ ...{1: true, 2: 23}, ...{no: 34 }, b: 98 }
->
{1: true, 2: 23, no: 34, b: 98}


-------------------------------------------------------
-------------------------------------------------------


Array(5).fill(undefined) ->
[undefined, undefined, undefined, undefined, undefined]


simular error ->
throw "msg";


-------------------------------------------------------
-------------------------------------------------------


clear interval ->

let prevNowPlaying = null;

function initNowPlayingMeta(station) {
    if(prevNowPlaying) {
        clearInterval(prevNowPlaying);
    }
    $('#cancion').children().remove();
    $('#cancion').load('sonando.php?emisora=' + station);
    prevNowPlaying = setInterval(function () {
        $('#cancion').load('sonando.php?emisora=' + station);
    }, 5000);
}

app.use(express.static('public'));

-------------------------------------------------------
-------------------------------------------------------


order alphabetycalli

[{t:"asd"}, {t:"zasdasd"}, {t:"bsd"}].sort(function(a, b){
    if(a.t < b.t) { return -1; }
    if(a.t > b.t) { return 1; }
    return 0;
});


['a',234,true].find(x=>x==="a"); -> "a"
['a',234,true].find(x=>x==="as"); -> undefined

-------------------------------------------------------
-------------------------------------------------------
imageFile.mv(`${__dirname}/public/${req.body.filename}.jpg`, err => {
 if (err) {
	return res.status(500).send(err);
 }


*/

function aprox(num, dec){

	return parseFloat(Math.round( num * 100) / 100).toFixed(dec);

}

function random(min, max){

	return Math.floor(Math.random() * (max - min + 1) ) + min;

}

function randomExep(min, max, failOn) {
    failOn = Array.isArray(failOn) ? failOn : [failOn]
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return failOn.includes(num) ? randomExep(min, max, failOn) : num;
}

function l(size){

	return size.length;

}

function gitUrl(data){
	let url = `
	https://raw.githubusercontent.com/`+data.user+`
	/`+data.repo+`/master`+data.path;
	return url;
}

const timer = ms => new Promise(res => setTimeout(res, ms));

/*

await new Promise(resolve => setTimeout(resolve, 1000));

async function loop(time){
	let loop_index = 0;
	while(true){
		await timer(time);
		console.log(loop_index);
		loop_index++;
	}
}
loop(1000);

*/

function getHash(){
	function chr4(){
		return Math.random().toString(16).slice(-4);
	}
	return chr4() + chr4() +
	'-' + chr4() +
	'-' + chr4() +
	'-' + chr4() +
	'-' + chr4() + chr4() + chr4();
}

function isJSON(str) {
	try {
		JSON.parse(str);
	} catch (e) {
		return false;
	}
	return true;
}

function YoutubeUrl(url) {
	 let p = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
	 if(url.match(p)){
			 return url.match(p)[1];
	 }
	 return false;
}

function fDate(s) {
  let d = new Date();
  s = s.split('/');
  d.setFullYear(s[2]);
  d.setMonth((s[1]-1));
  d.setDate(s[0]);
  return d;
}

function getDate(){

	/*

	get Day() -> 1,2,3,4,5,6,0
	let currenDay_ = this.startTime.getDay();
	currenDay_ == 0 ? currenDay_ = 7 :null;

	let date_ = new Date();
	console.log(date_);
	console.log((+ new Date()));
	console.log(date_.getTime());
	console.log(date_.toLocaleString());
	.toString() -> para string en bases de datos
	let custom_date =
	new Date(new Date().getTime() - (new Date().getTimezoneOffset()*60*1000));
	console.log(custom_date.toLocaleString());

	ultimo date de un mes
	let date = new Date();
	let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
	let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

	new Date().toISOString(); -> '2021-05-24T22:22:00.948Z'

	new Date().getDay()+'-'+new Date().getMonth()+'-'+new Date().getFullYear();

	new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds()+':'+ new Date().getMilliseconds();

	roundTime(time){
    let current_time = new Date(time);
    current_time.setMinutes(0);
    current_time.setMilliseconds(0);
    current_time.setSeconds(0);
    return current_time.getTime();
  }


 troleo del toLocaleDateString():
	time_order = time_order.map(x=>new Date(x).toLocaleDateString());
	 time_order = time_order.map(x=>new Date(

		 (x.split('/')[1]+'/'+
		 x.split('/')[0]+'/'+
		 x.split('/')[2])


	 ).getTime());


	 new Date(2016, 11, 17)
	 december -> 11
	 Date.parse('12-24-2020') -> timestamp


	*/

	let f = new Date();

	let hour = f.getHours();
	let mins = f.getMinutes();

	if(hour<10){

		hour = '0'+hour;

	}

	if(mins<10){

		mins = '0'+mins;

	}

	let date = f.getDate();
	let month = (f.getMonth() +1);
	let year = f.getFullYear();

	if(date<10){

	date = '0'+date

	}

	if(month<10){

		month = '0'+month;

	}

	return [ date , month , year , hour , mins];

}

function offTime(){
	return (new Date().getTimezoneOffset()*60*1000);
}

function testMail(email){

  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(email);

}

function regulartxt(txt){

  let patt = new RegExp(/^[A-Za-z0-9\s]+$/g);
  let res = patt.test(txt);

  return res;

}

function tl(str){
 return str.toLowerCase();
}

function tu(str){
	return str.toUpperCase();
}

function cap(str){

	return str
	 .toLowerCase()
	 .split(' ')
	 .map(word => word.charAt(0).toUpperCase() + word.slice(1))
	 .join(' ');

}

function spr(str, repeat){

	let str_r = str;

	/* ----------- */
	/* ----------- */

	if(str==' '){

		str_r = '&nbsp;';

	}

	/* ----------- */
	/* ----------- */

	let res = '';

	for(let i=1;i<=repeat;i++){

		res = res + str_r;

	}

	return res;

	/* spr('test<br>', 3) */

}

function ban(test, banArray){

	let pre_test =
			test.includes('?>')
			||
			test.includes('unlink')
			||
			test.includes('file_get_contents')
			||
			test.includes('move_uploaded_file')
			||
			test.includes('scandir')
			||
			test.includes('getcwd')
			||
			test.includes('rmdir');

	let function_test = false;

	for(val of banArray){

		if(test.includes(val)){
			function_test = true;
		}

		for(val_sub of test){

			if(val_sub.includes(val)){
				function_test = true;
			}

		}

	}

	let result_ban = pre_test || function_test;

	return result_ban;

	/*

	ban(['123asd', '456asd'], ['sdfs', 'sdfff', '23a']); -> true
	ban('asdasdasda123sdsa', ['loco', '123']); -> true

	*/

}

/* fix */
let str_test = {
  charLength: function(str) {
      if( str.length >= 8 ) {
          return true;
      }else{
				return false;
			}
  },
  lowercase: function(str) {
      let regex = /^(?=.*[a-z]).+$/;

      if( regex.test(str) ) {
          return true;
      }else{
				return false;
			}
  },
  uppercase: function(str) {
      let regex = /^(?=.*[A-Z]).+$/;

      if( regex.test(str) ) {
          return true;
      }else{
				return false;
			}
  },
  special: function(str) {
      let regex = /^(?=.*[0-9_\W]).+$/;

      if( regex.test(str) ) {
          return true;
      }else{
				return false;
			}
  }
};
/* fix */

/*

metodo sor y sort reverse
let numArray = [140000, 10, 104, 99];
.sort((a, b)=> {
      return a - b;
    });
.reverse();
a -> b | menor -> mayor
b -> a | mayor -> menor

*/

function sortArrAsc(arr){
	return arr.sort((a, b)=> {
	      return a - b;
	});
}

function sortArrDesc(arr){
	return arr.sort((a, b)=> {
	      return b - a;
	});
}

function reduce(str){

	return str.replace(/\n|\t/g, ' ');

}

function getSizeJSON(obj){
	const size_ = new TextEncoder().encode(JSON.stringify(obj)).length;
	const kiloBytes_ = size_ / 1024;
	const megaBytes_ = kiloBytes_ / 1024;
	return {
		size: size_,
		kiloBytes: kiloBytes_,
		megaBytes: megaBytes_
	}
}

function getSumSizeJSON(arrObj){
	let size_sum = 0;
	let kiloBytes_sum = 0;
	let megaBytes_sum = 0;
	for(let obj_ of arrObj){

		const size_ = new TextEncoder().encode(JSON.stringify(obj_)).length;
		const kiloBytes_ = size_ / 1024;
		const megaBytes_ = kiloBytes_ / 1024;

		size_sum += size_;
		kiloBytes_sum += kiloBytes_;
		megaBytes_sum += megaBytes_;

	}
	return {
		size: size_sum,
		kiloBytes: kiloBytes_sum,
		megaBytes: megaBytes_sum
	}
}


function jsonLog(json){

	console.log(JSON.stringify(json, null, 4));

}

function jsonSave(json){

	return JSON.stringify(json, null, 4);

}

function JSONstr(json){

	return JSON.stringify(json);

}

function LightenDarkenColor(col,amt) {
  let usePound = false;
  if ( col[0] == "#" ) {
      col = col.slice(1);
      usePound = true;
  }

  let num = parseInt(col,16);

  let r = (num >> 16) + amt;

  if ( r > 255 ) r = 255;
  else if  (r < 0) r = 0;

  let b = ((num >> 8) & 0x00FF) + amt;

  if ( b > 255 ) b = 255;
  else if  (b < 0) b = 0;

  let g = (num & 0x0000FF) + amt;

  if ( g > 255 ) g = 255;
  else if  ( g < 0 ) g = 0;

  return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}

function maxArr(arr){
	return Math.max.apply(null, arr);
}

function minArr(arr){
	return Math.min.apply(null, arr);
}
/*
let min = Math.min( ...arr ),
let max = Math.max( ...arr );
*/

function range(ini, fin){
	let list_ = [];
	for(let i_=ini; i_<=fin; i_++){
		list_.push(i_);
	}
	return list_;
}

function pad(num, size) {
	num = num.toString();
	while (num.length < size) num = "0" + num;
	return num;
};

function checkRut(rut) {

    // Despejar Puntos
    let valor = (''+rut).replaceAll('.','');
    // Despejar Guión
    valor = valor.replace('-','');

    // Aislar Cuerpo y Dígito Verificador
    let cuerpo = valor.slice(0,-1);
    let dv = valor.slice(-1).toUpperCase();

    // Formatear RUN
    // rut.value = cuerpo + '-'+ dv

    // Si no cumple con el mínimo ej. (n.nnn.nnn)
    if(cuerpo.length < 7) { return { success: false }; }

    // Calcular Dígito Verificador
    let suma = 0;
    let multiplo = 2;

    // Para cada dígito del Cuerpo
    for(let i=1;i<=cuerpo.length;i++) {

        // Obtener su Producto con el Múltiplo Correspondiente
        let index = multiplo * valor.charAt(cuerpo.length - i);

        // Sumar al Contador General
        suma = suma + index;

        // Consolidar Múltiplo dentro del rango [2,7]
        if(multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }

    }

    // Calcular Dígito Verificador en base al Módulo 11
    let dvEsperado = 11 - (suma % 11);

    // Casos Especiales (0 y K)
    dv = (dv == 'K')?10:dv;
    dv = (dv == 0)?11:dv;

    // Validar que el Cuerpo coincide con su Dígito Verificador
    if(dvEsperado != dv) { return { success: false }; }

		dv == 10 ? dv = 'k' : null;
		dv == 11 ? dv =  0  : null;

    // Si todo sale bien, eliminar errores (decretar que es válido)
    return {
			success: true,
			value: (cuerpo+'-'+dv)
		};
  }

	// existe attr sea cual sea el valor
	function existAttr(obj, attr){
		return obj.hasOwnProperty(attr);
	}

// Object.keys({data: "asd", jola:33})
// (2) ["data", "jola"]

  function getKeys(obj){
		return Object.keys(obj);
	}

	/*

		getAllKeys({
			a: "a",
			b: { a_a: "a_a"}
		});

	*/

	function getAllKeys(obj, numbers_){
					let allListKeys = [];
					const listKeys_ = obj_ => {
						Object.keys(obj_).forEach( key_ => {
							if(numbers_){
								allListKeys.push(key_);
							}else{
								if(isNaN(key_)){
									allListKeys.push(key_);
								}
							}
							if((typeof(obj_[key_])=='object') && (obj_[key_]!=null)){
								listKeys_(obj_[key_]);
							}
						});
					};
					listKeys_(obj);
					return allListKeys;
	}

/*

.slice(index, pos) > 0  pos != 0
.slice(pos, index) < 0  index != 0

*/

	function iterateKeys(obj, fn){
		for(let key_ of Object.keys(obj)){
			fn(key_, obj[key_]);
		}
	}

	async function iterateKeysAsync(obj, fn){
		for(let key_ of Object.keys(obj)){
			await fn(key_, obj[key_]);
		}
	}

	function isLen(obj){
		return obj.hasOwnProperty("length");
	}

	function isObj(obj){
		return (typeof(obj)=='object');
	}

	function fusionObj(listObj){
		let returnObj = {};
		for(let obj of listObj){
			returnObj = Object.assign(returnObj, obj);
		}
		return returnObj;
	}

	/*

	let a = [
		{
		  a:23,
		  b:10
		},
		{
		  a:24,
		  b:11
		},
		{
		  a:24,
		  b:8
		},
		{
		  a:23,
		  b:26
		},
		{
		  a:8,
		  b:21
		}
	];

*/

	function uniqueArray(arr){
		return arr.filter( (item, pos) => {
		    return arr.indexOf(item) == pos;
		});
	}

	function getAttrArrayFromArray(attr, arr){
		return arr.map( ( x )=>{ return x[attr] } );
	}

	function uniqueAttrArray(attr, arr){
		let arrReturn = arr.map( ( x )=>{ return x[attr] } );
		return arrReturn.filter( (item, pos) => {
				return arrReturn.indexOf(item) == pos;
		});
	}

	function orderArrayFromAttrInt(arr, attr, type){
		// type -> true asc
		// type-> false desc
		if(type === true){
			return arr.sort( (a, b) =>  a[attr] - b[attr] )
		}else{
			return arr.sort( (a, b) =>  b[attr] - a[attr] )
		}
	}


	function arrJoin(arr){
		returnArr = [];
		for(let arr_ of arr){
			returnArr = returnArr.concat(arr_);
		}
		return returnArr;
	}

	function getLastElement(arr){
		return newInstance(arr[arr.length-1]);
	}

	function objEq(x, y) {

    if (x === null || x === undefined || y === null || y === undefined) { return x === y; }
    // after this just checking type of one would be enough
    if (x.constructor !== y.constructor) { return false; }
    // if they are functions, they should exactly refer to same one (because of closures)
    if (x instanceof Function) { return x === y; }
    // if they are regexps, they should exactly refer to same one (it is hard to better equality check on current ES)
    if (x instanceof RegExp) { return x === y; }
    if (x === y || x.valueOf() === y.valueOf()) { return true; }
    if (Array.isArray(x) && x.length !== y.length) { return false; }

    // if they are dates, they must had equal valueOf
    if (x instanceof Date) { return false; }

    // if they are strictly equal, they both need to be object at least
    if (!(x instanceof Object)) { return false; }
    if (!(y instanceof Object)) { return false; }

    // recursive object equality check
    let p = Object.keys(x);
    return Object.keys(y).every(i => { return p.indexOf(i) !== -1; }) &&
        p.every(i => { return objEq(x[i], y[i]); });
	}

	function decimalAdjust(type, value, exp) {
		// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/round
		/*
		`+decimalAdjust(
			'round', // floor ceil
			((mod_itemtoken.calculateTotalPJstats(id_test_pj))
			/
			(mod_itemtoken.calculateTotalPJstats(id_test_pj_max)),
			2)+`
			*/
    // Si el exp no está definido o es cero...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // Si el valor no es un número o el exp no es un entero...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }

	function validateIP(ipaddress){
		 if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress))
		  {
		    return true;
		  }
		return false;
		}


	function newInstance(obj){
		return JSON.parse(JSON.stringify(obj));
	}

	function setValueAllKeys(obj, setValue){
		const listKeys_ = obj_ => {
			Object.keys(obj_).forEach( key_ => {
				if((typeof(obj_[key_])=='object') && (obj_[key_]!=null)){
					listKeys_(obj_[key_]);
				}else{
					obj_[key_] = setValue;
				}
			});
		};
		listKeys_(obj);
		return obj;
	}


	function isFunction(obj_){
		return typeof(obj_)=='function';
	}



function isOpenFalse(value){
		return ((value == null ) ||
		(value == undefined ) ||
		(value == '' ) ||
		(value == "" ) ||
		(value == `` ) ||
		(value == 0 ) ||
		(value == false));
}


function countSecondsV1(asc, limit, size, count_, fn, factor_){
	// limit = 60*1000*2;
	// asc = true;
	const update_ = () => {
		asc ? count_ += 1000 : count_ -= 1000;
		count_ < 0 ? count_ = limit:null;
		count_ > limit ? count_ = 0:null;
		let minutes_ = Math.trunc((count_/(60*1000)));
		let seconds_ = Math.trunc(((count_%(60*1000))/1000));
		let value_ = pad(minutes_, size)+":"+pad(seconds_, size);
		fn(value_);
	};
	update_();
	let intervalReturn =
	setInterval(()=>update_(),
		(factor_!=undefined?1000*factor_:1000)
	);
	return intervalReturn;
}

function changeKeyname(obj, oldKey, newKey){
	obj[newKey] = newInstance(obj[oldKey]);
	delete obj[oldKey];
	return obj;
}


function setSimpleIntID(arr, nameID){
	let current_id = -1;
	arr.map( x => {
		if(
			x.hasOwnProperty(nameID)
			&&
			x[nameID] > current_id
		){
			current_id = x[nameID];
		}
	});
	arr = arr.map(x=>{
		if(!x.hasOwnProperty(nameID)){
			x[nameID] = current_id + 1;
			current_id++;
		}
		return x;
	});
	return arr;
}

function makeid(length, num) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
		num ? characters += '0123456789':null;
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() *
 charactersLength));
   }
   return result;
}


function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function jsonWebRender(objRender){
	return `JSON.parse(`+'`'+JSONstr(objRender)+'`'+`)`;
}



function getObJSeqKey(targetObj, stringKeys){
	let valObj = JSON.parse(JSON.stringify(targetObj));
	if(stringKeys.split("-").length>1){
		for(let key_ of stringKeys.split("-")){
			valObj = valObj[key_];
		}
	}else{
		return valObj[stringKeys];
	}
	return valObj;
}

function clearDir(dir_){
	return dir_.replace(/\\/g, '/').replace(/\/\//g, "/");
}


function timeSince(date, lang, offTimeFactor) {

	const setS = val => val > 1 ? "s":"";
	let seconds = Math.floor((new Date() - date + (offTimeFactor*offTime()) ) / 1000);
	lang = lang == 'es' ? 1:0;

	let interval = seconds / 31536000;

	if (interval > 1) {
		return Math.floor(interval) + [" year"+setS(Math.floor(interval)), " año"+setS(Math.floor(interval))][lang];
	}
	interval = seconds / 2592000;
	if (interval > 1) {
		return Math.floor(interval) + [" month"+setS(Math.floor(interval)), " mese"+setS(Math.floor(interval))][lang];
	}
	interval = seconds / 86400;
	if (interval > 1) {
		return Math.floor(interval) + [" day"+setS(Math.floor(interval)), " día"+setS(Math.floor(interval))][lang];
	}
	interval = seconds / 3600;
	if (interval > 1) {
		return Math.floor(interval) + [" hour"+setS(Math.floor(interval)), " hora"+setS(Math.floor(interval))][lang];
	}
	interval = seconds / 60;
	if (interval > 1) {
		return Math.floor(interval) + [" minute"+setS(Math.floor(interval)), " minuto"+setS(Math.floor(interval))][lang];
	}
	return Math.floor(seconds) + [" second"+setS(Math.floor(seconds)), " segundo"+setS(Math.floor(seconds))][lang];
}



function clearPem(str){
	return str.replace(/(\r\n|\n|\r)/gm, '');
};
	// end
