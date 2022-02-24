const hell = obj => `

string

`+

(obj ?
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

hell();

! function(){ console.warn(`str`) }();
(() => console.warn(`str`))();

{(()=>console.warn('ins1'))(), (()=>console.warn('ins2'))()};
