/*

npx kill-port [port]
nvm list
nvm use [version]

delete person.age;  // or delete person["age"];

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
var fs = require('fs');

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






var obj = {
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

var newArray = obj.Students.filter(function (el)
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


*/

function aprox(num, dec){

	return parseFloat(Math.round( num * 100) / 100).toFixed(dec);

}

function random(min, max){

	return Math.floor(Math.random() * (max - min + 1) ) + min;

}

function randomExep(min, max, failOn) {
    failOn = Array.isArray(failOn) ? failOn : [failOn]
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
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
	 var p = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
	 if(url.match(p)){
			 return url.match(p)[1];
	 }
	 return false;
}

function fDate(s) {
  var d = new Date();
  s = s.split('/');
  d.setFullYear(s[2]);
  d.setMonth((s[1]-1));
  d.setDate(s[0]);
  return d;
}

function getDate(){

	/*
	let date_ = new Date();
	console.log(date_);
	console.log((+ new Date()));
	console.log(date_.getTime());
	console.log(date_.toLocaleString());
	.toString() -> para string en bases de datos
	let custom_date =
	new Date(new Date().getTime() - (new Date().getTimezoneOffset()*60*1000));
	console.log(custom_date.toLocaleString());

	new Date().toISOString(); -> '2021-05-24T22:22:00.948Z'

	new Date().getDay()+'-'+new Date().getMonth()+'-'+new Date().getFullYear();

	new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds()+':'+ new Date().getMilliseconds();

	*/

	var f = new Date();

	var hour = f.getHours();
	var mins = f.getMinutes();

	if(hour<10){

		hour = '0'+hour;

	}

	if(mins<10){

		mins = '0'+mins;

	}

	var date = f.getDate();
	var month = (f.getMonth() +1);
	var year = f.getFullYear();

	if(date<10){

	date = '0'+date

	}

	if(month<10){

		month = '0'+month;

	}

	return [ date , month , year , hour , mins];

}

function testMail(email){

  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

}

function regulartxt(txt){

  var patt = new RegExp(/^[A-Za-z0-9\s]+$/g);
  var res = patt.test(txt);

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
var str_test = {
  charLength: function(str) {
      if( str.length >= 8 ) {
          return true;
      }else{
				return false;
			}
  },
  lowercase: function(str) {
      var regex = /^(?=.*[a-z]).+$/;

      if( regex.test(str) ) {
          return true;
      }else{
				return false;
			}
  },
  uppercase: function(str) {
      var regex = /^(?=.*[A-Z]).+$/;

      if( regex.test(str) ) {
          return true;
      }else{
				return false;
			}
  },
  special: function(str) {
      var regex = /^(?=.*[0-9_\W]).+$/;

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
var numArray = [140000, 10, 104, 99];
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
  var usePound = false;
  if ( col[0] == "#" ) {
      col = col.slice(1);
      usePound = true;
  }

  var num = parseInt(col,16);

  var r = (num >> 16) + amt;

  if ( r > 255 ) r = 255;
  else if  (r < 0) r = 0;

  var b = ((num >> 8) & 0x00FF) + amt;

  if ( b > 255 ) b = 255;
  else if  (b < 0) b = 0;

  var g = (num & 0x0000FF) + amt;

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
var min = Math.min( ...arr ),
var max = Math.max( ...arr );
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

	function fusionObj(listObj){
		let returnObj = {};
		for(let obj of listObj){
			returnObj = Object.assign(returnObj, obj);
		}
		return returnObj;
	}

	/*

	var a = [
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
		let arr_index_order = arr.map( ( x )=>{ return x[attr] } );
		// type -> true asc
		// type-> false desc
		if(type){
			arr_index_order = arr_index_order.sort((a, b)=> {
			      return a - b;
			});
		}else {
			arr_index_order = arr_index_order.sort((a, b)=> {
			      return b - a;
			});
		}
		let returnArr = [];
		let banIndex = [];
		for(let index_ of arr_index_order){
			let ind_=0;
			for(let obj_ of arr){
				let found_index = false;
				for(let test_index of banIndex){
					if(test_index==ind_){
						found_index = true;
					}
				}
				if(!found_index){
					if(obj_[attr]==index_){
						returnArr.push(obj_);
						banIndex.push(ind_);
						break;
					}
				}
				ind_++;
			}
		}
		return returnArr;
	}


	function arrJoin(arr){
		returnArr = [];
		for(let arr_ of arr){
			returnArr = returnArr.concat(arr_);
		}
		return returnArr;
	}

	function getLastElement(arr){
		return arr[arr.length-1];
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
    var p = Object.keys(x);
    return Object.keys(y).every(i => { return p.indexOf(i) !== -1; }) &&
        p.every(i => { return objEq(x[i], y[i]); });
	}
