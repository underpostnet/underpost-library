`

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
