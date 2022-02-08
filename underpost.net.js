
// VanillaJS v1.0
// Released into the Public Domain

((()=>{

  //----------------------------------------------------------------------------
  // UNDERpost.net LIBRARY
  //----------------------------------------------------------------------------

  {{UNDERPOST}}

  //----------------------------------------------------------------------------
  // COMPONENTS
  //----------------------------------------------------------------------------

  /*

  Example:

  const component = {
      loader: async () => {},
      render: async () => {},
  };

  */

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
      await global.init();
      await main.render();
      s('html').scrollTop = 0;
    },
    render: async ()=>{
      if(data.var.w!=window.innerWidth || data.var.h!=window.innerHeight){
        data.var.w=window.innerWidth;
        data.var.h=window.innerHeight;
        console.log('-> render | w:'+data.var.w+' h:'+data.var.h);
        await global.render();
      }
      console.log('callback');
      await timer(data.const.callback);
      await main.render();
    }
  };

  main.init();

  //----------------------------------------------------------------------------
  //----------------------------------------------------------------------------
})());
