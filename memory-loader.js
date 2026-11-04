(function(){
  'use strict';
  if(window.PatanellaMemory)return;
  let layer=null,priorFocus=null,priorOverflow='',priorBodyOverflow='',onClose=null;
  let fallback=null, minimum=null, ready=false, minElapsed=false;
  function close(){
    if(!layer)return;
    clearTimeout(fallback);clearTimeout(minimum);
    layer.remove();layer=null;
    document.documentElement.style.overflow=priorOverflow;
    document.body.style.overflow=priorBodyOverflow;
    const done=onClose;onClose=null;
    if(done)done();
    if(priorFocus && priorFocus.isConnected && !priorFocus.closest('[inert]'))priorFocus.focus({preventScroll:true});
  }
  function reveal(){
    if(!layer||!ready||!minElapsed||layer.classList.contains('is-ready'))return;
    layer.classList.add('is-ready');
    const frame=layer.querySelector('iframe');
    if(frame)frame.focus({preventScroll:true});
    const cover=layer.querySelector('.patanella-memory-dive');
    setTimeout(()=>{if(cover&&cover.isConnected&&layer)cover.remove();},980);
  }
  function open(opts={}){
    if(layer)return;
    priorFocus=document.activeElement;
    priorOverflow=document.documentElement.style.overflow;
    priorBodyOverflow=document.body.style.overflow;
    onClose=typeof opts.onClose==='function'?opts.onClose:null;
    document.documentElement.style.overflow='hidden';
    document.body.style.overflow='hidden';
    ready=false;minElapsed=false;
    layer=document.createElement('div');
    layer.className='patanella-memory-layer';
    layer.setAttribute('role','dialog');
    layer.setAttribute('aria-modal','true');
    layer.setAttribute('aria-label','Il tesoro degli abissi, gioco Memory');
    const frame=document.createElement('iframe');
    frame.className='patanella-memory-frame';
    frame.title='Memory: Il tesoro degli abissi';
    frame.src=new URL('memory.html?direct=1&v=47',document.baseURI).href;
    frame.setAttribute('allow','autoplay');
    layer.append(frame);
    const dive=document.createElement('div');
    dive.className='patanella-memory-dive';
    dive.setAttribute('aria-hidden','true');
    const target=opts.origin;
    if(target&&target.isConnected){
      const r=target.getBoundingClientRect();
      const photo=target.cloneNode(true);
      photo.removeAttribute('id');
      photo.querySelectorAll('[id]').forEach(el=>el.removeAttribute('id'));
      photo.classList.add('patanella-memory-photo');
      photo.setAttribute('aria-hidden','true');
      Object.assign(photo.style,{top:r.top+'px',left:r.left+'px',width:r.width+'px',height:r.height+'px'});
      dive.append(photo);
    }
    const caption=document.createElement('div');
    caption.className='patanella-memory-caption';
    caption.innerHTML='Un viaggio sotto le onde…<small>Scendi negli abissi</small>';
    dive.append(caption);
    const count=innerWidth<650?95:130;
    for(let i=0;i<count;i++){
      const bubble=document.createElement('i');
      bubble.className='patanella-memory-bubble';
      const sz=5+Math.random()*27;
      bubble.style.setProperty('--x',(Math.random()*100).toFixed(2)+'%');
      bubble.style.setProperty('--size',sz.toFixed(2)+'px');
      bubble.style.setProperty('--duration',(1.2+Math.random()*1.65).toFixed(2)+'s');
      bubble.style.setProperty('--delay',(Math.random()*.63).toFixed(2)+'s');
      bubble.style.setProperty('--drift',((Math.random()-.5)*110).toFixed(1)+'px');
      dive.append(bubble);
    }
    layer.append(dive);
    document.body.append(layer);
    minimum=setTimeout(()=>{minElapsed=true;reveal();},1850);
    fallback=setTimeout(()=>{ready=true;reveal();},5500);
  }
  window.addEventListener('message',function(e){
    if(!layer)return;
    const frame=layer.querySelector('iframe');
    if(e.source!==frame?.contentWindow || !e.data)return;
    if(e.data.type==='patanella-memory-close')close();
    if(e.data.type==='patanella-memory-ready'){ready=true;clearTimeout(fallback);reveal();}
  });
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&layer)close();});
  window.PatanellaMemory={open,close};
})();
