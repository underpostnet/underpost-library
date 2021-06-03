/*

npx kill-port [port]
nvm list
nvm use [version]

delete person.age;  // or delete person["age"];

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

		console.log(e);

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
