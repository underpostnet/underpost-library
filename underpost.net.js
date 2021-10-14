((()=>{

  //----------------------------------------------------------------------------
  // UNDERpost.net LIBRARY
  //----------------------------------------------------------------------------

  {{UNDERPOST}}

  //----------------------------------------------------------------------------
  // COMPONENTS
  //----------------------------------------------------------------------------

  {{COMPONENTS}}

  //----------------------------------------------------------------------------
  // GLOBAL
  //----------------------------------------------------------------------------

  const global = {
    init: async ()=>{
      {{LOADER}}
    },
    render: async ()=>{
      {{RENDER}}
    }
  };

  //----------------------------------------------------------------------------
  // DATA
  //----------------------------------------------------------------------------

  let data = {
    const: {
      callback: 300,
      lang: lang()=='en' ? 0 : 1,
      dir: 'ltr',
      token: null
    },
    var: {
      w: null,
      h: null
    }
  };

  {{INITDATA}}

  //----------------------------------------------------------------------------
  // MAIN
  //----------------------------------------------------------------------------

  const main = {
    init: async ()=> {
      s('html').lang = ['en','es'][data.const.lang];
      s('html').dir = data.const.dir;
      console.log('init template system lang -> '+['en','es'][data.const.lang]);
      global.init();
      await main.render();
      s('html').scrollTop = 0;
    },
    render: async ()=>{
      if(data.var.w!=window.innerWidth || data.var.h!=window.innerHeight){
        data.var.w=window.innerWidth;
        data.var.h=window.innerHeight;
        console.log('-> render | w:'+data.var.w+' h:'+data.var.h);
        global.render();
      }
      console.log('callback');
      await timer(data.const.callback);
      main.render();
    }
  };

  main.init();

  //----------------------------------------------------------------------------
  //----------------------------------------------------------------------------
})());
