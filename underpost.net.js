((()=>{

  //----------------------------------------------------------------------------
  //----------------------------------------------------------------------------

  const loader = {
    init: () =>{
      append('body', `



            <main class='abs center'>


                  `+[`Hello <a href='' >World</a>`,`Hola <a href='' >Mundo</a>`][data.const.lang]+`


            </main>




      `);
      s('main').style.border = '2px solid white';
    },
    render: async () =>{
      if(data.var.h>data.var.w){
        s('main').style.height = data.var.w+'px';
        s('main').style.width = data.var.w+'px';
      }else{
        s('main').style.height = data.var.h+'px';
        s('main').style.width = data.var.h+'px';
      }
    }
  }

  //----------------------------------------------------------------------------
  //----------------------------------------------------------------------------

  const main = {
    init: ()=> {
      s('html').lang = ['en','es'][data.const.lang];
      s('html').dir = data.const.dir;
      s('body').style.overflow = 'hidden';
      console.log('init template system lang -> '+['en','es'][data.const.lang]);
      loader.init();
      main.render();
    },
    render: async ()=>{
      if(data.var.w!=window.innerWidth || data.var.h!=window.innerHeight){
        data.var.w=window.innerWidth;
        data.var.h=window.innerHeight;
        console.log('-> rr | w:'+data.var.w+' h:'+data.var.h);
        loader.render();
      }
      console.log('callback');
      await timer(data.const.callback);
      main.render();
    }
  };

  //----------------------------------------------------------------------------
  //----------------------------------------------------------------------------

  let data = {
    const: {
      callback: 1000,
      lang: lang()=='en' ? 0 : 1,
      dir: 'ltr'
    },
    var: {
      w: null,
      h: null
    }
  };

  //----------------------------------------------------------------------------
  //----------------------------------------------------------------------------

  main.init();

})());
