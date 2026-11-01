(() => {
  'use strict';
  const C = window.INVITO_CONFIG || {};
  const $ = id => document.getElementById(id);
  const stage = $('stage');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const text = Object.assign({
    scena1: 'Ogni storia ha un inizio…', macchina1: 'La protagonista di questa storia?',
    macchina2: 'Una ragazza che non ha nessuna intenzione di crescere davvero…',
    complici: ['Poi gli anni sono passati…', 'E qualcosa è cambiato…', 'Ma non troppo.'],
    epico1: 'Trent’anni di sogni, risate e persone speciali.', epico2: 'E non sono ancora diventata una persona seria.',
    citazione: 'Le cose belle non si contano negli anni, ma nei momenti che ci fanno brillare gli occhi.',
    finale: 'La storia continua… e stavolta voglio viverla con voi!'
  }, C.testi);
  const defaults = {messaggio:2.7, segreto:13, prove:9, complici:10, epico:9, citazione:6};
  const labels = ['', '', '', '', '', ''];
  let total = 0;
  const timeline = Object.keys(defaults).map((name, i) => {
    const requested = Number(name === 'messaggio' && matchMedia('(max-aspect-ratio: 3/4)').matches && C.durataAperturaMobile ? C.durataAperturaMobile : (C.durate || {})[name]);
    const duration = Number.isFinite(requested) && requested > 0 ? requested : defaults[name];
    const scene = {name, duration, start:total, label:labels[i]}; total += duration; return scene;
  });
  let elapsed = 0, lastTime = null, started = false, paused = false, muted = false, finished = false;
  let activeScene = 'welcome', activeIndex = -1, lastPercent = -1, frameId = 0;
  const panels = [...document.querySelectorAll('.panel')];

  /* Luna segreta nella scena finale: il bersaglio segue la luna *fotografata*
     (object-fit cover, object-position e movimento lento dell'immagine inclusi). */
  const moonButton = $('moon-hold');
  const moonSecret = $('moon-secret');
  const moonStar = $('moon-star');
  const moonClose = $('moon-secret-close');
  const moonNightImage = $('night');
  let moonHoldTimer = null, moonHoldStart = 0, moonPointer = null;
  let moonTrackingTimer = null, moonSequenceTimer = null, moonRevealed = false;
  let moonPreviousFocus = null;
  const MOON_DELAY = 5000;
  // Coordinate misurate sulla foto originale 1536 x 1024.
  const moonPixel = {x:1117, y:198};
  function positionMoonButton() {
    if (activeScene !== 'finale') return;
    // Su mobile il filmato ha un'inquadratura diversa dalla foto desktop.
    // Poster e video usano lo stesso zoom e object-position: la hitbox segue
    // esattamente la luna e continua a funzionare anche se il video non parte.
    const useMobile = matchMedia('(max-aspect-ratio: 3/4)').matches;
    const finalVideo = document.querySelector('#clips video[data-clip="finale"]');
    const useVideo = useMobile && finalVideo && finalVideo.classList.contains('on') && finalVideo.videoWidth > 0;
    const media = useVideo ? finalVideo : moonNightImage;
    const mw = useVideo ? finalVideo.videoWidth : moonNightImage.naturalWidth;
    const mh = useVideo ? finalVideo.videoHeight : moonNightImage.naturalHeight;
    if (!mw || !mh) return;
    const rect=media.getBoundingClientRect();
    const stageRect=stage.getBoundingClientRect();
    const scale=Math.max(rect.width/mw,rect.height/mh);
    const cropX=(rect.width - mw*scale)*.72;
    const cropY=(rect.height - mh*scale)*.50;
    const pixel = useMobile ? {x:608,y:401} : moonPixel;
    const x=rect.left-stageRect.left+cropX+pixel.x*scale;
    const y=rect.top-stageRect.top+cropY+pixel.y*scale;
    moonButton.style.left=x.toFixed(2)+'px';
    moonButton.style.top=y.toFixed(2)+'px';
    return {x,y};
  }
  function moonTracking(on) {
    if(moonTrackingTimer!==null){clearInterval(moonTrackingTimer);moonTrackingTimer=null;}
    if(on) { positionMoonButton(); moonTrackingTimer=setInterval(()=>{ if(!document.hidden && !moonRevealed) positionMoonButton(); },120); }
  }
  function cancelMoonHold() {
    if(moonHoldTimer!==null){clearTimeout(moonHoldTimer);moonHoldTimer=null;}
    moonHoldStart=0; moonPointer=null;
    moonButton.classList.remove('holding');
  }
  function dismissMoonSecret() {
    if(moonSequenceTimer!==null){clearTimeout(moonSequenceTimer);moonSequenceTimer=null;}
    moonSecret.classList.remove('open');moonSecret.hidden=true;
    $('finale').inert=false;
    moonButton.inert=false;
    moonButton.classList.remove('moon-activated');
    moonStar.hidden=true; moonStar.classList.remove('falling');
    moonRevealed=false;
    if(activeScene==='finale'){moonTracking(true);(moonPreviousFocus?.isConnected?moonPreviousFocus:moonButton).focus({preventScroll:true});}
  }
  function revealMoonPhoto() {
    if(activeScene!=='finale' || document.hidden) return;
    moonSecret.hidden=false;
    $('finale').inert=true; // Non navigare dietro la Polaroid aperta.
    moonButton.inert=false;
    moonPreviousFocus=document.activeElement;
    moonSecret.classList.add('open');
    moonClose.focus({preventScroll:true});
    $('status').textContent='Hai trovato il segreto della luna: una Polaroid speciale!';
  }
  function unlockMoonSecret() {
    cancelMoonHold();
    moonRevealed=true;
    moonTracking(false);
    const center=positionMoonButton() || {x:innerWidth*.7,y:innerHeight*.19};
    moonButton.classList.add('moon-activated');
    moonStar.hidden=false;moonStar.classList.remove('falling');
    moonStar.style.setProperty('--star-x',center.x+'px');
    moonStar.style.setProperty('--star-y',center.y+'px');
    moonStar.style.setProperty('--star-dx',(stage.clientWidth*.5-center.x)+'px');
    moonStar.style.setProperty('--star-dy',(stage.clientHeight*.48-center.y)+'px');
    // Restart CSS animation reliably if the secret is found a second time.
    void moonStar.offsetWidth;
    moonStar.classList.add('falling');
    moonSequenceTimer=setTimeout(()=>{moonSequenceTimer=null;revealMoonPhoto();},reduced?180:1120);
  }
  function beginMoonHold(pointerId) {
    if(activeScene!=='finale'||moonRevealed||document.hidden||moonHoldTimer!==null) return;
    moonPointer=pointerId;
    moonHoldStart=performance.now();
    moonButton.classList.remove('holding'); void moonButton.offsetWidth;
    moonButton.classList.add('holding');
    moonHoldTimer=setTimeout(()=>{
      moonHoldTimer=null;
      if(moonHoldStart && performance.now()-moonHoldStart>=MOON_DELAY-20) unlockMoonSecret();
      else cancelMoonHold();
    },MOON_DELAY);
  }
  moonButton.addEventListener('pointerdown',e=>{
    if(!e.isPrimary||e.button!==0)return;
    e.preventDefault(); beginMoonHold(e.pointerId);
  });
  for(const name of ['pointerup','pointercancel','pointerleave'])moonButton.addEventListener(name,e=>{
    if(moonPointer===e.pointerId)cancelMoonHold();
  });
  moonButton.addEventListener('contextmenu',e=>e.preventDefault());
  moonButton.addEventListener('keydown',e=>{
    if((e.key===' '||e.key==='Enter')&&!e.repeat){e.preventDefault();beginMoonHold('keyboard');}
  });
  moonButton.addEventListener('keyup',e=>{
    if((e.key===' '||e.key==='Enter')&&moonPointer==='keyboard'){e.preventDefault();cancelMoonHold();}
  });
  moonButton.addEventListener('blur',()=>{if(moonPointer==='keyboard')cancelMoonHold();});
  moonClose.addEventListener('click',dismissMoonSecret);
  moonSecret.addEventListener('click',e=>{if(e.target===moonSecret||e.target.classList.contains('moon-secret-veil'))dismissMoonSecret();});
  document.addEventListener('keydown',e=>{
    if(!moonSecret.hidden && e.key==='Escape'){e.preventDefault();dismissMoonSecret();}
    if(!moonSecret.hidden && e.key==='Tab'){e.preventDefault();moonClose.focus({preventScroll:true});}
  });
  moonNightImage.addEventListener('load',positionMoonButton);
  addEventListener('resize',positionMoonButton);

  const clamp = n => Math.max(0, Math.min(1, n));
  const normalize = f => typeof f === 'string' ? {src:f} : (f || {});
  const fill = s => String(s || '').replace(/\{(\w+)\}/g, (_, key) => C[key] || '');
  const setContent = (id, value) => {const e=$(id); e.textContent=value || ''; e.hidden=!value;};
  const setTextIfChanged = (element, value) => {if (element.textContent !== value) element.textContent = value;};
  // V43 - Impaginazione completa prima della prima lettera. Le righe vengono
  // misurate nel font finale e poi rivelate senza modificare testo o wrapping:
  // nessuna parola salta alla riga successiva durante la scrittura.
  const writtenLines = {};
  for (const [id, full] of [['ty1', String(text.macchina1 || '')], ['ty2', String(text.macchina2 || '')]]) {
    const box = $(id);
    box.textContent = '';
    const measure = document.createElement('span');
    measure.className = 'letter-measure';
    measure.setAttribute('aria-hidden', 'true');
    measure.textContent = full;
    const ink = document.createElement('span');
    ink.className = 'letter-ink';
    ink.setAttribute('aria-hidden', 'true');
    box.append(measure, ink);
    writtenLines[id] = {box, measure, ink, full, lines: [], shown: 0};
  }
  function writeLetterTo(id, count) {
    const entry = writtenLines[id];
    if (!entry) return;
    entry.shown = Math.max(0, Math.min(entry.full.length, count));
    for (const line of entry.lines) {
      const shown = Math.max(0, Math.min(line.end - line.start, entry.shown - line.start));
      if (shown === line.lastShown) continue;
      line.lastShown = shown;
      // Soprattutto sui font corsivi la larghezza finale puo' variare con il
      // font web caricato: usa le dimensioni correnti, non pixel memorizzati.
      // Le righe successive rimangono completamente invisibili fino al turno.
      line.node.style.visibility = shown === 0 ? 'hidden' : 'visible';
      if (shown >= line.end - line.start) {
        line.node.style.clipPath = 'none';
      } else if (shown === 0) {
        line.node.style.clipPath = 'inset(0 100% 0 0)';
      } else {
        const fullWidth = line.widths[line.widths.length - 1] || 1;
        const visibleWidth = line.widths[shown] || 0;
        const visibleRatio = Math.min(1, visibleWidth / fullWidth);
        const right = (line.node.getBoundingClientRect().width * (1 - visibleRatio));
        line.node.style.clipPath = `inset(0 ${right.toFixed(2)}px 0 0)`;
      }
    }
  }
  function layoutLetter(id) {
    const entry = writtenLines[id];
    if (!entry) return;
    const {measure, ink, full, box} = entry;
    ink.replaceChildren();
    entry.lines = [];
    const node = measure.firstChild;
    if (!node || !full) return;
    const range = document.createRange();
    const groups = [];
    // Nel corsivo le coordinate Y dei singoli caratteri variano lungo la
    // stessa parola (la linea di base e' inclinata). Una nuova riga si
    // riconosce dal ritorno della posizione X al margine iniziale.
    let previousX = null;
    for (let i = 0; i < full.length; i++) {
      if (/\s/.test(full[i])) continue;
      range.setStart(node, i);
      range.setEnd(node, i + 1);
      const rect = range.getClientRects()[0];
      if (!rect || !rect.width) continue;
      const wrapped = previousX !== null && rect.left < previousX - 7;
      if (!groups.length || wrapped) groups.push({start:i, end:i+1});
      else groups[groups.length - 1].end = i+1;
      previousX = rect.left;
    }
    const style = getComputedStyle(box);
    let lineHeight = parseFloat(style.lineHeight);
    if (!Number.isFinite(lineHeight)) lineHeight = parseFloat(style.fontSize) * 1.3;
    groups.forEach((group, index) => {
      const span = document.createElement('span');
      span.className = 'letter-ink-line';
      span.textContent = full.slice(group.start, group.end);
      span.style.top = `${(index * lineHeight).toFixed(2)}px`;
      ink.appendChild(span);
      const textNode = span.firstChild;
      const charRange = document.createRange();
      const widths = [0];
      const length = textNode?.length || 0;
      for (let n = 1; n <= length; n++) {
        charRange.setStart(textNode, 0);
        charRange.setEnd(textNode, n);
        widths.push(charRange.getBoundingClientRect().width);
      }
      const width = Math.max(widths[length] || 0, span.getBoundingClientRect().width);
      entry.lines.push({node:span, start:group.start, end:group.end,
        widths, width, lastShown:-1});
    });
    writeLetterTo(id, entry.shown);
  }
  function layoutAllLetters() {
    layoutLetter('ty1');
    layoutLetter('ty2');
  }
  layoutAllLetters();
  document.fonts?.ready?.then(layoutAllLetters);
  let letterLayoutRaf = 0;
  const scheduleLetterLayout = () => {
    cancelAnimationFrame(letterLayoutRaf);
    letterLayoutRaf = requestAnimationFrame(layoutAllLetters);
  };
  if (window.ResizeObserver) {
    const observer = new ResizeObserver(scheduleLetterLayout);
    observer.observe($('ty1'));
    observer.observe($('ty2'));
  } else window.addEventListener('resize', scheduleLetterLayout, {passive: true});

  setContent('intro-text', text.scena1);
  setContent('quote-text', text.citazione);
  setContent('signature', C.firmaPergamena || C.nome || 'Con affetto');
  setContent('f-name', C.nome || 'Ti aspetto');
  setContent('f-age', C.eta ? C.eta + ' anni' : '');
  setContent('f-title', text.finale);
  setContent('f-data', C.data);
  setContent('f-ora', C.orario ? 'ore ' + String(C.orario).replace(/^ore\s*/i, '') : '');
  setContent('f-locale', C.locale);
  setContent('f-addr', C.indirizzo);
  document.querySelector('.date-divider').hidden = !(C.data && C.orario);
  if (C.nome && !C.nome.includes('[')) {
    $('brand-name').textContent = C.nome + (C.eta ? ' / ' + C.eta : ' / La mia storia');
    document.title = C.nome + ' — Una bottiglia, una storia, una festa';
  }
  const map = String(C.mappa || '').trim();
  if (/^https?:\/\//i.test(map)) {$('b-map').href=map; $('b-map').hidden=false;}
  const number = String(C.whatsapp || '').replace(/\D/g, '');
  if (number) {
    const whatsappUrl = 'https://wa.me/' + number + '?text=';
    for (const [id, message] of [
      ['b-wa-yes', C.messaggioConferma],
      ['b-wa-no', C.messaggioDeclina]
    ]) {
      const link = $(id);
      const preparedMessage = fill(message).trim();
      if (preparedMessage) {
        link.href = whatsappUrl + encodeURIComponent(preparedMessage);
        link.hidden = false;
      }
    }
    $('rsvp').hidden = $('b-wa-yes').hidden && $('b-wa-no').hidden;
  }
  document.querySelector('.final-actions').hidden = $('b-map').hidden && $('rsvp').hidden;
  for (const id of ['brand-monogram', 'mono']) {
    const image = $(id);
    if (C.monogramma) { image.onload=()=>{image.hidden=false;}; image.onerror=()=>{image.hidden=true;}; image.src=C.monogramma; }
    else image.hidden=true;
  }
  if (text.introduzione && text.introduzione !== 'Ci sono storie che nascono dal mare…') {
    const title = $('welcome-title');
    const value = String(text.introduzione).trim();
    // Keep the original line breaks and final emphasized words when config changes.
    const parts = value.split(/\s+/);
    title.replaceChildren();
    if (parts.length <= 3) {
      const em = document.createElement('em'); em.textContent=value; title.append(em);
    } else {
      const first = parts.slice(0, 3).join(' ');
      const middle = parts.slice(3, -2).join(' ');
      const last = parts.slice(Math.max(3, parts.length - 2)).join(' ');
      title.append(document.createTextNode(first));
      if (middle) { title.append(document.createElement('br'), document.createTextNode(middle)); }
      title.append(document.createElement('br'));
      const em = document.createElement('em'); em.textContent=last; title.append(em);
    }
  }
  const backgrounds = Object.assign({messaggioMobile:'assets/scenes/bottiglia-mobile.jpg',aperturaMobile:'assets/scenes/bottiglia-aperta-mobile.jpg',messaggio:'assets/scenes/bottiglia.jpg', apertura:'assets/scenes/bottiglia-aperta.jpg', notte:'assets/scenes/mare-notte.jpg', carta:'assets/scenes/carta.jpg'}, C.sfondi);
  function setPhotographicFraming() {
    // <picture> chooses the correct source, avoiding a desktop download on mobile.
    const main = backgrounds.messaggio || 'assets/scenes/bottiglia.jpg';
    const mainMobile = backgrounds.messaggioMobile || main;
    if ($('shore').getAttribute('src') !== main) $('shore').src = main;
    if ($('shore-mobile-source').getAttribute('srcset') !== mainMobile) $('shore-mobile-source').srcset = mainMobile;
    // The open-bottle image is queued only after the main photograph loads.
  }
  setPhotographicFraming();

  /* La hitbox resta ovale (clip-path: ellipse) e segue la bottiglia reale,
     anche col ritaglio object-fit: cover e il movimento fotografico. */
  const bottleFrame = $('bottle-frame');
  const bottleGuide = $('bottle-guide');
  const bottleShapes = {
    landscape: { bounds: [545, 575, 1015, 810] },
    portrait: { bounds: [290, 830, 770, 1080] }
  };
  function positionBottleHitbox() {
    const image = $('shore');
    if (!image.naturalWidth || !image.naturalHeight) return;
    const imageRect = image.getBoundingClientRect();
    const stageRect = stage.getBoundingClientRect();
    const fittedScale = Math.max(imageRect.width / image.naturalWidth, imageRect.height / image.naturalHeight);
    // object-position: 51% 50% nella regola .backdrop.
    const cropLeft = (imageRect.width - image.naturalWidth * fittedScale) * .51;
    const cropTop = (imageRect.height - image.naturalHeight * fittedScale) * .5;
    const portrait = matchMedia('(max-aspect-ratio: 3/4)').matches && Boolean(backgrounds.messaggioMobile);
    const shape = portrait ? bottleShapes.portrait : bottleShapes.landscape;
    // La foto mobile iniziale coincide con il primo fotogramma del video di attesa.
    // Le coordinate della bottiglia restano espresse nel sistema dell'originale
    // (1024x1536); normalizzarle evita di spostare la hitbox con il poster 720x1080.
    const originalW = portrait ? 1024 : 1536;
    const originalH = portrait ? 1536 : 1024;
    const [x1, y1, x2, y2] = shape.bounds.map((v,i) =>
      v * ((i % 2 === 0 ? image.naturalWidth / originalW : image.naturalHeight / originalH))
    );
    const x = imageRect.left - stageRect.left + cropLeft + x1 * fittedScale;
    const y = imageRect.top - stageRect.top + cropTop + y1 * fittedScale;
    const w = (x2 - x1) * fittedScale;
    const h = (y2 - y1) * fittedScale;
    bottleFrame.style.left = x.toFixed(2) + 'px';
    bottleFrame.style.top = y.toFixed(2) + 'px';
    bottleFrame.style.width = w.toFixed(2) + 'px';
    bottleFrame.style.height = h.toFixed(2) + 'px';
    bottleGuide.style.left = (x + w * .51).toFixed(2) + 'px';
    // On very short 320px-wide phones, bring the callout closer to the bottle
    // so it doesn't touch the last line of the headline above it.
    const tinyPortrait = stageRect.width <= 350 && stageRect.height <= 610;
    bottleGuide.style.top = (y - (tinyPortrait ? -7 : 17)).toFixed(2) + 'px';
  }
  // The bottle backdrop drifts with CSS. 70ms is enough to keep the ellipse aligned.
  let bottleTrackingTimer = setInterval(() => {
    if (activeScene !== 'welcome' || document.hidden) return;
    positionBottleHitbox();
  }, 70);
  const stopBottleTracking = () => {
    if (bottleTrackingTimer !== null) clearInterval(bottleTrackingTimer);
    bottleTrackingTimer = null;
  };
  $('shore').addEventListener('load', positionBottleHitbox);
  addEventListener('resize', positionBottleHitbox);
  if ('ResizeObserver' in window) new ResizeObserver(positionBottleHitbox).observe(stage);
  positionBottleHitbox();
  $('shore-open').onerror=()=>{$('shore-open').style.display='none';};
  $('night').onerror=()=>{stage.classList.add('night-missing');};
  if (backgrounds.carta) stage.style.setProperty('--paper', 'url(' + JSON.stringify(backgrounds.carta) + ')');

  const kidFallbacks = [1,2,3].map((n)=>({src:'assets/photos/bambina-0'+n+'.jpg',didascalia:'Un ricordo da conservare.'}));
  const friendFallbacks = [
    {src:'assets/photos/adulta-01.jpg',didascalia:'Il mare, ancora.'},
    {src:'assets/photos/adulta-02.jpg',didascalia:'Le idee, ancora più chiare.'},
    {src:'assets/photos/adulta-03.jpg',didascalia:'Piccola peste, edizione 30.'}
  ];
  const kidData = (C.fotoBambina?.length ? C.fotoBambina : kidFallbacks).slice(0,3).map(normalize);
  const friendData = (C.fotoComplici?.length ? C.fotoComplici : friendFallbacks).slice(0,10).map(normalize);
  function makePhoto(data, index, container, stamp, fallback) {
    const figure=document.createElement('figure'); figure.className='pol';
    const image=new Image(); image.alt=data.etichetta || data.didascalia || 'Un ricordo'; image.decoding='async';
    // Create the Polaroid now, but download its image only after #shore loads.
    image.dataset.deferredSrc=data.src || fallback;
    image.fetchPriority='low';
    image.style.objectPosition=data.posizione || '50% 50%';
    image.onerror=()=>{image.onerror=null; if(image.getAttribute('src')!==fallback) image.src=fallback;};
    figure.append(image);
    const caption=document.createElement('figcaption'); caption.textContent=data.didascalia || '\u00a0'; figure.append(caption);
    if(stamp) {const mark=document.createElement('span');mark.className='stamp';mark.textContent=stamp;figure.append(mark);}
    figure.dataset.index=index;
    container.append(figure); return figure;
  }
  const kids=kidData.map((f,i)=>makePhoto(f,i,$('kids'),(C.timbri || [])[i],kidFallbacks[i].src));
  const friends=friendData.map((f,i)=>{
    const fig=makePhoto(f,i,$('friends'),'',friendFallbacks[i%3].src);
    const sign=i%2 ? 1 : -1;
    fig.style.setProperty('--r', (sign*(4+(i%3)*2))+'deg');
    fig.style.setProperty('--dx', (sign*(74+(i%3)*8))+'%');
    fig.style.setProperty('--dy', ((i%3)*20-10)+'px');
    return fig;
  });
  // Give the first photograph exclusive priority. Start downloading the later
  // scenes and Polaroids after #shore finishes (or errors), with a ready-cache
  // fast path for browsers that loaded it before this script ran.
  let secondaryMediaQueued=false;
  function loadSecondaryMedia() {
    if (secondaryMediaQueued) return;
    secondaryMediaQueued=true;
    const open = backgrounds.apertura || backgrounds.messaggio || 'assets/scenes/bottiglia-aperta.jpg';
    const mobileSource = $('open-mobile-source');
    const openImage = $('shore-open');
    mobileSource.srcset = backgrounds.aperturaMobile || open;
    openImage.src = open;
    if (backgrounds.notte) $('night').src=backgrounds.notte;
    for (const photo of [...kids, ...friends]) {
      const img=photo.querySelector('img');
      if (img?.dataset.deferredSrc) {
        img.src=img.dataset.deferredSrc;
        delete img.dataset.deferredSrc;
      }
    }
  }
  const mainImage = $('shore');
  if (mainImage.complete) {
    requestAnimationFrame(loadSecondaryMedia);
  } else {
    mainImage.addEventListener('load', loadSecondaryMedia, {once:true});
    mainImage.addEventListener('error', loadSecondaryMedia, {once:true});
  }

  const lastBarProgress=timeline.map(()=>null);
  const bars=timeline.map(()=>{
    const track=document.createElement('span'), bar=document.createElement('i');track.append(bar);$('progress').append(track);return bar;
  });

  /* Optional real footage: each clip replaces just its photographic background. */
  const videos={};
  for (const [name, src] of Object.entries(C.video || {})) {
    if(!src) continue;
    const v=document.createElement('video');v.muted=true;v.loop=true;v.playsInline=true;v.preload='metadata';
    v.setAttribute('playsinline','');v.setAttribute('aria-hidden','true');v.src=src;
    v.onerror=()=>{v.classList.remove('on');v.remove();delete videos[name];};
    $('videos').append(v);videos[name]=v;
  }
  /* ===== Filmati realistici (vedi PIANO_VIDEO_REALISTICI.md) =====
     Sette clip opzionali in C.clip. Ogni clip mancante o rotta viene scartata
     in silenzio e resta la fotografia della scena. Con "riduci movimento" o
     "risparmio dati" le clip non vengono caricate. */
  const clipLayer = $('clips');
  const clipEl = {};
  const portraitMQ = matchMedia('(max-aspect-ratio: 3/4)');
  const clipDefs = C.clip || {};
  const clipLoops = {attesa:true, slideshow:true, finale:true};
  let clipTransitionId = 0;
  const clipsAllowed = !reduced && !(navigator.connection && navigator.connection.saveData);
  let clipCurrent = null, introDone = false, clipLastLocal = 0, clipLastDur = 1, clipLastP = 0;
  const clipSrc = def => {
    if (!def) return '';
    if (typeof def === 'string') return def;
    // Verticale: solo la versione mobile. Orizzontale: solo desktop. Mai l'una al posto dell'altra,
    // perche' un filmato con l'inquadratura sbagliata sposta bottiglia e luna rispetto alle hitbox.
    return portraitMQ.matches ? (def.mobile || '') : (def.desktop || def.src || '');
  };
  function dropClip(name) {
    const v = clipEl[name]; if (!v) return;
    v.remove(); delete clipEl[name];
    if (name === 'intro') introDone = true;
    if (clipCurrent === name) { clipCurrent = null; stage.dataset.clip = ''; }
    clipSync();
  }
  function clipTextSync() {
    const v = clipEl.pergamena;
    const unrolled = clipCurrent === 'pergamena' && v && (v.ended || (isFinite(v.duration) && v.duration - v.currentTime < .6));
    stage.classList.toggle('clip-paper', clipCurrent === 'pergamena' || clipCurrent === 'ritorno');
    stage.classList.toggle('clip-text', Boolean(unrolled));
  }
  if (clipsAllowed && clipLayer) {
    for (const name of ['intro','attesa','apertura','pergamena','ritorno','slideshow','finale']) {
      const src = clipSrc(clipDefs[name]); if (!src) continue;
      const v = document.createElement('video');
      v.muted = true; v.defaultMuted = true; v.playsInline = true; v.loop = Boolean(clipLoops[name]);
      v.preload = (name === 'intro' || name === 'attesa' || name === 'apertura') ? 'auto' : 'metadata';
      v.setAttribute('playsinline', ''); v.setAttribute('muted', ''); v.setAttribute('aria-hidden', 'true');
      v.disablePictureInPicture = true; v.dataset.clip = name;
      if (portraitMQ.matches) {
        if (name === 'attesa') v.poster = 'assets/scenes/bottiglia-attesa-poster-mobile.jpg';
        if (name === 'apertura') v.poster = 'assets/scenes/bottiglia-apertura-poster-mobile.jpg';
        if (name === 'finale') v.poster = 'assets/scenes/mare-notte-mobile-poster.jpg';
      }
      v.src = src;
      v.addEventListener('error', () => dropClip(name));
      v.addEventListener('ended', () => { if (name === 'intro') introDone = true; clipSync(); clipTextSync(); });
      if (name === 'pergamena') v.addEventListener('timeupdate', clipTextSync);
      clipLayer.append(v); clipEl[name] = v;
    }
  }
  function desiredClip() {
    const rest = clipEl.attesa ? 'attesa' : (clipEl.intro ? 'intro' : null);
    switch (activeScene) {
      case 'welcome': return (clipEl.intro && !introDone) ? 'intro' : rest;
      case 'messaggio': return clipEl.apertura ? 'apertura' : rest; // Avvia subito lo stappo al tap
      case 'segreto': {
        if (!clipEl.pergamena) return null;
        const r = clipEl.ritorno;
        if (r) {
          const len = (isFinite(r.duration) ? r.duration : 2.5) + .3;
          if (clipLastLocal >= clipLastDur - len) return 'ritorno';
        }
        return 'pergamena';
      }
      case 'prove': case 'complici': return clipEl.slideshow ? 'slideshow' : null;
      // Il mare notturno continua in UN SOLO loop dalle sezioni 5 e 6
      // fino all'invito finale: nessun riavvio o salto al cambio di scena.
      case 'epico': case 'citazione': case 'finale':
        return clipEl.finale ? 'finale' : null;
      default: return null;
    }
  }
  function activateClip(name) {
    const v = clipEl[name]; if (!v) return;
    const transitionId = ++clipTransitionId;
    try { v.currentTime = 0; } catch {}
    // Il filmato precedente rimane visibile e continua a riprodursi finche'
    // il nuovo non ha decodificato il primo fotogramma. Niente flash di JPG.
    const reveal = () => {
      if (clipCurrent !== name || transitionId !== clipTransitionId) return;
      for (const [n, o] of Object.entries(clipEl)) {
        o.classList.toggle('on', n === name);
        if (n !== name) setTimeout(() => {
          // Lascia finire l'incrocio di opacita' prima di mettere in pausa.
          if (!o.classList.contains('on')) o.pause();
        }, 850);
      }
      stage.dataset.clip = name; clipTextSync();
      if (name === 'finale') positionMoonButton();
    };
    const p = v.play();
    const afterPlay = () => {
      if (clipCurrent !== name || transitionId !== clipTransitionId) return;
      if (typeof v.requestVideoFrameCallback === 'function') {
        let shown = false;
        const fallback = setTimeout(() => { if (!shown) { shown = true; reveal(); } }, 450);
        v.requestVideoFrameCallback(() => {
          if (shown) return;
          shown = true; clearTimeout(fallback); reveal();
        });
      } else requestAnimationFrame(reveal);
    };
    if (p && p.then) p.then(afterPlay).catch(() => dropClip(name));
    else afterPlay();
  }
  function clipSync() {
    if (!clipLayer) return;
    const want = desiredClip();
    if (want !== clipCurrent) {
      clipCurrent = want;
      if (want) activateClip(want);
      else {
        stage.dataset.clip = ''; clipTextSync();
        for (const o of Object.values(clipEl)) { o.classList.remove('on'); setTimeout(() => { if (!o.classList.contains('on')) o.pause(); }, 850); }
      }
    }
    const v = clipEl[clipCurrent];
    if (v) {
      const live = !paused && !document.hidden;
      if (live && v.paused && !v.ended) safePlay(v); else if (!live && !v.paused) v.pause();
    }
  }
  const safePlay = media => {if(!media)return;const p=media.play();if(p?.catch)p.catch(()=>{});};
  let audioUnlocked = false;
  let audioFailed = false;
  const audios=[];
  for (const [key,volume] of [['musica',.35],['onde',.22]]) {
    if(!C[key])continue;
    const audio=new Audio(C[key]);audio.loop=true;audio.preload='metadata';audio.volume=volume;
    audio.addEventListener('error',()=>{ audioFailed=true; $('b-audio-retry').hidden=false; $('status').textContent='La musica non è disponibile. Puoi riprovare ad attivarla.'; });
    audios.push({audio,key});
  }
  $('b-sound').hidden=audios.length===0;
  function playMusic(audio) {
    let p;
    try { p=audio.play(); }
    catch(e) { audioFailed=true; $('b-audio-retry').hidden=false; return; }
    if(p && typeof p.then==='function') {
      p.then(()=>{ audioFailed=false; $('b-audio-retry').hidden=true; })
       .catch(()=>{ audioFailed=true; $('b-audio-retry').hidden=false; $('status').textContent='La musica non è partita. Tocca la nota musicale per riprovare e controlla il volume del telefono.'; });
    }
  }
  function syncMedia() {
    const running=started && !paused && !document.hidden;
    for(const {audio} of audios) {
      audio.muted = muted;
      if (running && !muted && audioUnlocked) {
        if (audio.paused) playMusic(audio);
      } else if (!audio.paused) {
        audio.pause();
      }
    }
    for(const [name,v] of Object.entries(videos)) {
      const key=activeScene==='citazione' && !videos.citazione ? 'finale' : activeScene;
      const active=name===key;v.classList.toggle('on',active);
      if(running && active)safePlay(v);else v.pause();
    }
    clipSync();
  }
  function setScene(name,index) {
    if(name===activeScene)return;
    const previous=panels.find(p=>p.id===activeScene);
    const focusedInside=previous?.contains(document.activeElement);
    activeScene=name;activeIndex=index;stage.dataset.scene=name;clipLastP=0;clipLastLocal=0;
    // Precarica il mare notturno durante l'ultimo carosello.
    if(name==='complici' && clipEl.finale && clipEl.finale.preload!=='auto') {
      clipEl.finale.preload='auto';
    }
    if(name==='segreto') { const signature=$('signature'); signature.style.setProperty('--signed','0%');signature.classList.remove('signing','signed'); }
    for(const panel of panels) {const active=panel.id===name;panel.classList.toggle('active',active);panel.inert=!active;}
    const isFinal=name==='finale';
    cancelMoonHold();
    moonButton.hidden=!isFinal;
    moonTracking(isFinal);
    if(!isFinal && !moonSecret.hidden) dismissMoonSecret();
    $('b-skip').hidden=isFinal;$('b-pause').hidden=isFinal;
    $('story-footer').hidden=isFinal;
    if(!isFinal) $('chapter').textContent=timeline[index].label;
    if(isFinal){$('status').textContent='La storia continua: ecco il tuo invito.';if(focusedInside)$('f-name').focus({preventScroll:true});}
    else if(focusedInside)$('b-pause').focus({preventScroll:true});
    syncMedia();
  }
  function updateScene(local, scene) {
    const p=clamp(local/scene.duration);
    clipLastLocal=local;clipLastDur=scene.duration;clipLastP=p;clipSync();
    if(scene.name==='messaggio')stage.classList.toggle('bottle-open',p>.16); // fallback fotografico, dissolvenza ravvicinata al tap
    if(scene.name==='segreto') {
      const a=String(text.macchina1 || ''),b=String(text.macchina2 || '');
      const p1=reduced?1:clamp((p-.10)/.19),p2=reduced?1:clamp((p-.37)/.39);
      writeLetterTo('ty1', Math.ceil(a.length*p1));
      writeLetterTo('ty2', Math.ceil(b.length*p2));
      $('ty1').classList.toggle('typing',p1>0&&p1<1);$('ty2').classList.toggle('typing',p2>0&&p2<1);
      // La firma inizia solo quando l'ultima lettera del messaggio e' comparsa.
      // Rivelazione progressiva dell'inchiostro da sinistra a destra;
      // resta leggibile prima della chiusura della pergamena.
      const signatureProgress = reduced ? (p2 >= 1 ? 1 : 0) : clamp((p-.78)/.13);
      const signature=$('signature');
      const signaturePct=Math.round(signatureProgress*1000)/10;
      signature.style.setProperty('--signed',signaturePct+'%');
      // Nessun filtro temporaneo: evita il piccolo cambio di rasterizzazione alla fine.
      signature.classList.toggle('signed',signatureProgress>=1);
    }
    if(scene.name==='prove') {
      kids.forEach((photo,i)=>{
        const shown=p>=(i*.28), stamped=p>=(i*.28+.16);
        photo.classList.toggle('visible',shown);photo.classList.toggle('stamped',stamped);
        photo.classList.toggle('past',p>=(i+1)*.28);
      });
    }
    if(scene.name==='complici') {
      const current=Math.min(friends.length-1,Math.floor(p*friends.length));
      friends.forEach((photo,i)=>{
        photo.classList.toggle('visible',i<=current);photo.classList.toggle('active-photo',i===current);
        photo.classList.toggle('previous-photo',i<current);
      });
      const lines=Array.isArray(text.complici)?text.complici:[];
      const line=lines[current] || ''; // Same index as the visible adult Polaroid.
      if($('flash').textContent!==line)$('flash').textContent=line;
    }
    if(scene.name==='epico') {
      // Sequenza piu rapida: la frase iniziale scompare dopo 2,3 secondi.
      const punch=p>.54;
      const headline=$('epico').querySelector('.eyebrow');
      headline.classList.toggle('closing',local>=2.3);
      setTextIfChanged($('epic-text'), punch?text.epico2:text.epico1);
      $('epic-text').classList.toggle('punchline',punch);
      const nextOpacity=reduced?'1':String(Math.round((p<.54?clamp((.53-p)*22):clamp((p-.54)*22))*100)/100);
      if ($('epic-text').style.opacity !== nextOpacity) $('epic-text').style.opacity=nextOpacity;
      // La colonna sonora continua senza interruzioni anche durante il cambio di battuta.
    }
  }
  function render() {
    if(!started)return;
    const i=timeline.findIndex(s=>elapsed<s.start+s.duration);
    bars.forEach((bar,n)=>{
      const value=Math.round(clamp((elapsed-timeline[n].start)/timeline[n].duration)*200)/200;
      if (lastBarProgress[n] !== value) {bar.style.setProperty('--p',value);lastBarProgress[n]=value;}
    });
    const percent=Math.round(clamp(elapsed/total)*100);
    if(percent!==lastPercent){$('progress').setAttribute('aria-valuenow',percent);lastPercent=percent;}
    if(i<0){finished=true;setScene('finale',6);return;}
    const s=timeline[i];setScene(s.name,i);updateScene(elapsed-s.start,s);
  }
  function tick(now) {
    frameId=0;
    if(lastTime!==null&&!paused&&!document.hidden&&!finished)elapsed=Math.min(total,elapsed+(now-lastTime)/1000);
    lastTime=now;
    if(!paused&&!document.hidden)render();
    if(started&&!finished&&!paused&&!document.hidden)frameId=requestAnimationFrame(tick);
  }
  function resumeClock() {lastTime=null;if(!frameId&&!finished&&!paused&&!document.hidden)frameId=requestAnimationFrame(tick);}
  function pauseClock(){if(frameId)cancelAnimationFrame(frameId);frameId=0;lastTime=null;}
  function start() {
    cancelMoonHold();
    if(!moonSecret.hidden) dismissMoonSecret();
    stopBottleTracking();pauseClock();elapsed=0;started=true;finished=false;paused=false;audioUnlocked=true;
    stage.classList.remove('is-paused','bottle-open');
    stage.classList.add('bottle-tapped');
    window.setTimeout(()=>stage.classList.remove('bottle-tapped'),1050);
    $('b-pause').setAttribute('aria-pressed','false');$('b-pause').setAttribute('aria-label','Metti in pausa');
    for(const p of [...kids,...friends])p.classList.remove('visible','stamped','active-photo','previous-photo','past');
    writeLetterTo('ty1',0);writeLetterTo('ty2',0);
    for(const {audio} of audios){try{audio.currentTime=0;}catch{}}
    for(const v of Object.values(videos)){try{v.currentTime=0;}catch{}}
    introDone=true;clipLastP=0;clipLastLocal=0;
    render();syncMedia();resumeClock();
  }
  $('bottle').addEventListener('click',start);$('bottle-guide').addEventListener('click',start);$('b-replay').addEventListener('click',start);
  $('b-skip').addEventListener('click',()=>{
    stopBottleTracking();pauseClock();started=true;paused=false;elapsed=total;finished=true;stage.classList.remove('is-paused');
    render();syncMedia();$('f-name').focus({preventScroll:true});
  });
  $('b-pause').addEventListener('click',()=>{
    paused=!paused;stage.classList.toggle('is-paused',paused);
    $('b-pause').setAttribute('aria-pressed',String(paused));$('b-pause').setAttribute('aria-label',paused?'Riprendi la storia':'Metti in pausa');
    $('status').textContent=paused?'Storia in pausa.':'La storia riprende.';
    if(paused)pauseClock();else resumeClock();syncMedia();
  });
  $('b-sound').addEventListener('click',()=>{
    muted=!muted;if (!muted) audioUnlocked=true;$('b-sound').setAttribute('aria-pressed',String(muted));$('b-sound').setAttribute('aria-label',muted?'Attiva l’audio':'Disattiva l’audio');syncMedia();
  });
  $('b-audio-retry').addEventListener('click',()=>{
    audioUnlocked=true; muted=false;
    $('b-sound').setAttribute('aria-pressed','false');
    $('b-sound').setAttribute('aria-label','Disattiva l’audio');
    $('b-audio-retry').hidden=true;
    syncMedia();
  });
  document.addEventListener('visibilitychange',()=>{
    if(document.hidden){cancelMoonHold();moonTracking(false);}
    else if(activeScene==='finale'&&!moonRevealed)moonTracking(true);
    stage.classList.toggle('is-paused',paused||document.hidden);
    if(document.hidden)pauseClock();else resumeClock();syncMedia();
  });

  /* Ora dell'evento: 28 dicembre 2026, 20:30 a Roma (UTC+01:00). */
  const eventTime = Date.parse(C.dataEvento || '2026-12-28T20:30:00+01:00');
  const countdownNode = $('countdown');
  const countdownUnits = countdownNode.querySelector('.countdown-units');
  if (Number.isFinite(eventTime)) {
    const format = n => String(n).padStart(2, '0');
    function updateCountdown() {
      const remaining = Math.max(0, eventTime - Date.now());
      const seconds = Math.floor(remaining / 1000);
      $('cd-days').textContent = format(Math.floor(seconds / 86400));
      $('cd-hours').textContent = format(Math.floor(seconds % 86400 / 3600));
      $('cd-minutes').textContent = format(Math.floor(seconds % 3600 / 60));
      $('cd-seconds').textContent = format(seconds % 60);
      $('countdown-message').textContent = remaining > 0
        ? 'Il conto alla rovescia è iniziato…'
        : 'È arrivato il momento di festeggiare!';
      countdownUnits.hidden = remaining === 0;
      countdownNode.classList.toggle('countdown-finished', remaining === 0);
      if (remaining === 0) countdownNode.dispatchEvent(new Event('countdown-completed'));
    }
    let countdownTimer = null;
    const startCountdown = () => {
      updateCountdown();
      if (!document.hidden && Date.now() < eventTime && countdownTimer === null) {
        countdownTimer = setInterval(updateCountdown, 1000);
      }
    };
    const stopCountdown = () => {
      if (countdownTimer !== null) clearInterval(countdownTimer);
      countdownTimer = null;
    };
    countdownNode.addEventListener('countdown-completed', stopCountdown);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stopCountdown(); else startCountdown();
    });
    startCountdown();
  } else if (countdownNode) {
    countdownNode.hidden = true;
  }

  /* Secondary images are deferred until the first bottle photograph has
     loaded. The <picture> elements select one orientation per device. */
  clipSync(); // schermata iniziale: intro / attesa
  const essentialFallback = $('static-fallback');
  if (essentialFallback) essentialFallback.hidden = true;
})();
