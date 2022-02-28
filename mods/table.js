
class Table {

  constructor(obj){


        const fontSize = 10;
        const fontFamily = 'retro-font';
        append(obj.divContent, renderTableV1( obj.data, {
    			style: {
    				header_row_style: `
            padding-bottom: 10px;
            padding-top: 10px;
            `+'font-family: '+fontFamily+'; border-bottom: 3px solid red; font-size: '+fontSize+'px;',
    				header_cell_style: '',
    				row_style: 'font-family: '+fontFamily+'; border-bottom: 3px solid yellow; font-size: '+fontSize+'px;',
    				cell_style: ''
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
    			name_plugin: 'plugin'
    		}
    	));
  }

}

export { Table }
