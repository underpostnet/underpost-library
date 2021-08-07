// https://stackoverflow.com/questions/5201317/read-the-contents-of-a-file-object

// (change)="fileChange($event.target.files)"

 const fileChange = file =>{

   console.log(" s('.file-input-data').onchange ->");
   console.log(file); // FileList {0: File, length: 1}
   console.log(file['0']);

   var read = new FileReader();

   // csv -> .split('\n') .trim()
   // format validator
   // multiples files

   read.readAsBinaryString(file['0']);

   read.onloadend = () => {

     console.warn(typeof(read.result));
     console.log(read.result);

     for(let row of read.result.split('\r\n')){

       row.split(';')[0] != "" ? console.log(row.split(';')) : null;

     }

   }

 }

 s('.file-input').onchange =
 event => fileChange(event.target.files);

 // funcion read csv

 // este tipo de eventos cuando es mas
 // util la funcion que su apariencia
 // tambien en el reproductor de musica
 // o auto generar descargas o eventos

 s('.content-input').onclick = () => {
   s('.file-input').click();
 };

 /*


<style>

 .content-input {

   width: 300px;
   height: 40px;
   border: 2px solid white;

 }

</style>

<div class='inl content-input'>

  <div class='abs center'>
    upload
  </div>

</div>

<input type="file" class='file-input' multiple="multiple" style='display: none;' >

<!--

  multiple="multiple"

  accept=".xls,.xlsx" -> solo limita los archivos que se visualizan al explorar

  validacion en el metodo

-->









 */
