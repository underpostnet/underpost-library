function dynamicBtn(obj){

  let render = `

     <`+obj.changeStyle.name+`>
     </`+obj.changeStyle.name+`>

     <`+obj.contentGlobal.name+` class='`+obj.contentGlobal.underpost+`'>
     </`+obj.contentGlobal.name+`>

     <style>
     `+obj.contentGlobal.name+` `+obj.contentGlobal.style+`
     `+obj.contentSingleStyle.name+` `+obj.contentSingleStyle.style+`
     </style>

  `;

  obj.render.append ?
  append(obj.render.selector, render):
  htmls(obj.render.selector, render);


  let btnActive = null;
  obj.indexActive!=null ? ((()=>{
    btnActive = obj.preFij+'-'+obj.indexActive;
  })()) : null;

  const renderStatusBtn = () => {

    let cssRender = '';

    for(let i of range(0, (l(obj.contentSingleBtn)-1)) ){

       const singleID = obj.preFij+'-'+i;
       singleID == btnActive ?
       cssRender += '.'+singleID+' '+obj.changeStyle.active +
       '.'+singleID+':hover '+obj.changeStyle.hoverActive :
       cssRender += '.'+singleID+' '+obj.changeStyle.inactive +
       '.'+singleID+':hover '+obj.changeStyle.hoverInactive ;

     }

     htmls(obj.changeStyle.name,
       ('<style>'+cssRender+'</style>'));

  };


   for(let i of range(0, (l(obj.contentSingleBtn)-1)) ){

      const singleID = obj.preFij+'-'+i;

      append(obj.contentGlobal.name, `

          <`+obj.contentSingleStyle.name+`
          class='`+obj.contentSingleStyle.underpost+`  `+singleID+`'>

                `+obj.contentSingleBtn[i]+`

          </`+obj.contentSingleStyle.name+`>

      `);

      s('.'+singleID).onclick = ()=>{

          console.log(singleID);
          btnActive = singleID;
          renderStatusBtn();

      }

   }

   renderStatusBtn();

}

/*


dynamicBtn({

   render: {
     selector: 'body',
     append: true,
     htmls: false
   },

   contentSingleBtn: ['test', 'test', 'test', 'test', 'test'],
   indexActive: 1,
   preFij: 'test',

   contentGlobal: {
     underpost: 'in',
     name: 'test-content',
     style: '{ text-align: center; }'
   },

   contentSingleStyle: {
     underpost: 'inl',
     name: 'test-content-single',
     style: `{
       padding: 5px;
       border: 3px solid white;
       cursor: pointer;
       transition: .3s;
     }`
   },

   changeStyle: {
     name: 'test-change-style',
     active: '{ border: 3px solid red; }',
     inactive: '{ border: 3px solid white; }',
     hoverInactive: '{ border: 3px solid yellow; }',
     hoverActive: '{ border: 3px solid green; }'
   }

 });


 append('body', `

   <style class='dynamic-css' >

       h1, h2 {

         display: none;

       }

       body {

         background: white;
         color: black;

       }

   </style>

   test

 `);
 setTimeout(()=>{
     htmls('.dynamic-css', `

     body {

       background: pink;
       color: white;

     }

     `);
 }, 2000);


*/
