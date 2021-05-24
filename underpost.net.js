((()=>{ un = {
  param: {
    callback: 1000,
    movil: 500
  },
  var: {
    lang: lang()=='en' ? 0 : 1,
    dir: 'ltr',
    w: null,
    h: null
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
    },
    rc: function(obj){

      /*

      un.render.rc({
        class: '',
        w: '',
        h: '',
        t: '',
        l: '',
        minw: '',
        maxw: '',
        minh: '',
        maxh: '',
      });

      */

      s(obj.class).style.width = obj.w;
      s(obj.class).style.height = obj.h;
      s(obj.class).style.top = obj.t;
      s(obj.class).style.left =  obj.l;
      s(obj.class).style.minWidth = obj.minw;
      s(obj.class).style.maxWidth = obj.maxw;
      s(obj.class).style.minHeight = obj.minh;
      s(obj.class).style.maxHeight = obj.maxh;

    }
  },
  rr: async ()=>{
    if(un.var.w!=window.innerWidth){
      un.var.w=window.innerWidth;
      un.var.h=window.innerHeight;
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
