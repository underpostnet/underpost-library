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

  // only one "{}" and not use " for, if, var, ; "

  {
    ((()=>window.hell = 0)()),
    ((()=>hell++)()),
    ((()=>hell++)()),
    ((()=>console.log(hell))())
  }
