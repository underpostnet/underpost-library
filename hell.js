const hell = obj => `

string

`+

(true==false ?
        ((()=>{

        console.log(true);
        return ` true`;

        })()):
        ((()=>{

        console.log(false);
        return ` false`;

        })())
)+`

string

`;

! function(){ console.warn(`str`) }();
(() => console.warn(`str`))();
