((()=>{ un = {
  param: {
    callback: 1000,
    movil: 500
  },
  var: {
    lang: lang()=='en' ? 0 : 1,
    dir: 'ltr',
    w: null
  },
  init: ()=>{
    s('html').lang = lang();
    s('html').dir = un.var.dir;
    console.log('init template system lang -> '+['en','es'][un.var.lang]);
    un.render.init();
    un.rr();
  },
  render: {
    init: ()=>{
      append('body', `

      `+[`Hello <a href='' >World</a>`,`Hola <a href='' >Mundo</a>`][un.var.lang]+`

      `);
    }
  },
  rr: async ()=>{
    if(un.var.w!=window.innerWidth){
      un.var.w=window.innerWidth;
      if(un.var.w>un.param.movil){
        console.log('render -> resize desktop -> '+un.var.w);
      }else{
        console.log('render -> resize movil -> '+un.var.w);
      }
    }
    console.log('callback');
    await timer(un.param.callback);
    un.rr();
  }
};un.init();
})());
