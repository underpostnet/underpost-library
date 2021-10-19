





let classTimePicker = 'time-input-sch';
let classDatePicker = 'date-input-sch';

render+= `


<br>
<br>

<input type="time" value="`+
new Date((new Date().getTime() - (new Date().getTimezoneOffset()*60*1000)))
.toISOString().split(".")[0].split("T")[1].slice(0, -3)+`"
class='in `+classTimePicker+`'>

<input type="datetime-local" value="`+
new Date((new Date().getTime() - (new Date().getTimezoneOffset()*60*1000)))
.toISOString().split(".")[0]+`"
class='in `+classDatePicker+`'>


`;


setTimeout(()=>{
  s('.'+classTimePicker).onchange = value => {
    console.log(s('.'+classTimePicker).value);// 14:90
  }
  s('.'+classDatePicker).onchange = value => {
    console.log(s('.'+classDatePicker).value);
    console.log(new Date(s('.'+classDatePicker).value));
  }
},0);




// end
