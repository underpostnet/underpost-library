import '/lib/interact.min.js';

class UnderpostInteract {

   constructor(obj){
     this.obj = obj;
     switch (obj.type) {
       case 'quill':
         this.initQuillModule();
         break;
       default:
          console.warn(' UnderpostInteract -> Not Found Module to Work: ['+obj.type+']');
     }
   }

   initQuillModule(){

     const intervalTimeOnChangue = 500;

     window.dragMoveListener = function(event) {
      const target = event.target,
          // keep the dragged position in the data-x/data-y attributes
          x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
          y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

      // translate the element
      target.style.webkitTransform =
      target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)';

      // update the posiion attributes
      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
    };





      this.currentsImgWithResizableDraggable = [];

         setInterval( () =>
         getAllChillNodeDataByDiv('.'+this.obj.idContentEditable).forEach((item, i) =>
            (()=>{
              if(item.localName=='img'||item.nodeName=='IMG'){
                if(!this.currentsImgWithResizableDraggable.includes(item.classList[0])){
                  console.warn('setResizableDraggable -> '+item.classList[0]);
                  this.currentsImgWithResizableDraggable.push(item.classList[0]);
                  this.setResizableDraggable({divContent: '.'+item.classList[0]});
                }
              }
            })()
          ), intervalTimeOnChangue);


   }


   setResizableDraggable(obj){

         interact(obj.divContent)
           .resizable({
             // resize from all edges and corners
             edges: { left: true, right: true, bottom: true, top: true },

             listeners: {
               move (event) {
                 const target = event.target
                 let x = (parseFloat(target.getAttribute('data-x')) || 0)
                 let y = (parseFloat(target.getAttribute('data-y')) || 0)

                 // update the element's style
                 target.style.width = event.rect.width + 'px'
                 target.style.height = event.rect.height + 'px'

                 // translate when resizing from top or left edges
                 x += event.deltaRect.left
                 y += event.deltaRect.top

                 target.style.transform = 'translate(' + x + 'px,' + y + 'px)'

                 target.setAttribute('data-x', x)
                 target.setAttribute('data-y', y)
                 target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height)
               }
             },
             modifiers: [
               // keep the edges inside the parent
               interact.modifiers.restrictEdges({
                 outer: 'parent'
               }),

               // minimum size
               interact.modifiers.restrictSize({
                 min: { width: 100, height: 50 }
               })
             ],

             inertia: true
           })
           .draggable({
             listeners: { move: window.dragMoveListener },
             inertia: true,
             modifiers: [
               interact.modifiers.restrictRect({
                 restriction: 'parent',
                 endOnly: true
               })
             ]
           }).on('dragend', () =>
           console.warn('dragend -> '+obj.divContent));


   }

   remove(target){
      console.warn('remove -> '+target);
      interact(target).resizable(false);
      interact(target).draggable(false);
   }
}

export { UnderpostInteract };
