
  // not use ->  {} for if var ;

  ((()=>window.hell = 0)()),
  ((()=>hell++)()),
  ((()=>hell++)()),
  ((()=>console.log(hell))()),
  ((()=>console.log(`

  `+(()=>'hell:'+hell)()+`

  `))())
