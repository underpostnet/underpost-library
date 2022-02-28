

class Base {

  constructor(){


        append('body', `

            <style>

              body {
                font-family: retro-font;
              }

            </style>

        `);

        const fontSizeNotifiIcon = 30;
        const fontSizeNotifi = 18;
        notifi.load({
        			 AttrRender: {
        				 error: `

        							<i class="fas fa-times" style='font-size: `+fontSizeNotifiIcon+`px; color: red;'></i>

        				 `,
        				 success: `

        						<i class="fas fa-check" style='font-size: `+fontSizeNotifiIcon+`px; color: green;'></i>

        				 `
        			 },
        			 style: {
        				 notifiValidator: `
        				 border-radius: 10px;
        				 /* border: 2px solid yellow; */
        				 color: white;
        				 font-size: `+fontSizeNotifi+`px;
        				 z-index: 9999;
        				 height: 50px;
        				 transform: translate(-50%, 0);
                 bottom: 10px;
        				 left: 50%;
        				 width: 300px;
        				 `,
        				 notifiValidator_c1: `
        				 width: 80px;
        				 height: 100%;
        				 /* border: 2px solid blue; */
        				 top: 0%;
        				 left: 0%;
        				 `,
        				 notifiValidator_c2: `
        				 height: 100%;
        				 /* border: 2px solid blue; */
        				 top: 0%;
        				 left: 80px;
        				 width: 220px;
        				 `

        			 }
        		 });





  }
}


export { Base };
