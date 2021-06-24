((()=>{

  //----------------------------------------------------------------------------
  // COMPONENTS
  //----------------------------------------------------------------------------

  const component = {
    loader: async () =>{
      component.init.renderCss();
      component.init.renderHtml();
      component.init.onEvent();
    },
    init: {
      renderHtml: async ()=>{},
      renderCss: async ()=>{},
      onEvent: async ()=>{}
    },
    service: {},
    render: async () =>{}
  }

  //----------------------------------------------------------------------------
  //----------------------------------------------------------------------------

  const base = {
    loader: async () =>{
      base.init.renderCss();
      base.init.renderHtml();
      base.init.onEvent();
    },
    init: {
      renderHtml: async ()=>{
        append('body', `
              <main class='abs center'>
                    <div class='abs center txt'>
                          `+[`Hello <a href='' >World</a>`,`Hola <a href='' >Mundo</a>`][data.const.lang]+`
                    </div>
              </main>
        `);
        s('main').style.border = '2px solid white';
      },
      renderCss: async ()=>{

        let style_txt = `
        <style>
          .txt:hover {
            color: red;
          }
        </style>
        `;
        append('body', style_txt);
      },
      onEvent: async ()=>{
        s('main').onclick = ()=>{
          alert(base.service.getMainContent());
        }
      }
    },
    service: {
      getMainContent: ()=>{
        return s('main').innerHTML
      }
    },
    render: async () =>{
      s('body').style.width = data.var.w+'px';
      s('body').style.height = data.var.h+'px';
      if(data.var.h>data.var.w){
        s('main').style.height = data.var.w*0.95+'px';
        s('main').style.width = data.var.w*0.95+'px';
      }else{
        s('main').style.height = data.var.h*0.95+'px';
        s('main').style.width = data.var.h*0.95+'px';
      }
    }
  }

  //----------------------------------------------------------------------------
  // GLOBAL
  //----------------------------------------------------------------------------

  const global = {
    init: async ()=>{
      base.loader();
    },
    render: async ()=>{
      base.render();
    }
  };

  //----------------------------------------------------------------------------
  // DATA
  //----------------------------------------------------------------------------

  let data = {
    const: {
      callback: 100,
      lang: lang()=='en' ? 0 : 1,
      dir: 'ltr'
    },
    var: {
      w: null,
      h: null
    }
  };

  //----------------------------------------------------------------------------
  // MAIN
  //----------------------------------------------------------------------------

  const main = {
    init: async ()=> {
      s('html').lang = ['en','es'][data.const.lang];
      s('html').dir = data.const.dir;
      console.log('init template system lang -> '+['en','es'][data.const.lang]);
      global.init();
      main.render();
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
