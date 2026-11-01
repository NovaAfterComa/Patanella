# Patanella - base pulita per video realistici

Questa distribuzione ripristina ESATTAMENTE il sito statico collaudato della V25: nessun video artificiale delle V26/V27 e nessuna simulazione del movimento di acqua, vetro o carta.

## Filmati necessari per una futura versione cinematografica

1. INTRO - Bottiglia che arriva dal mare, si adagia sulla sabbia. Al suo arresto il filmato d'arrivo termina. Il mare deve continuare a muoversi in un secondo loop senza salto visibile.
2. ATTESA - Onde lente in loop con bottiglia nella posizione precisa della hitbox. Glowing hint CSS gia presente.
3. APERTURA - Solo dopo un tap: tappo che esce e pergamena che comincia a emergere. Le riprese devono preservare posizione, scala e forma della bottiglia.
4. PERGAMENA - Carta senza testo che vola verso il centro e si srotola. Il testo HTML e la firma vanno sovrapposti dal sito, non impressi nel video.
5. RITORNO - Carta che si arrotola e si posa vicino alla bottiglia aperta, senza salti di posizione.
6. SLIDESHOW - Onde molto lente e realistiche sotto le foto, senza muovere i soggetti.
7. FINALE - Mare notturno in loop; luna FERMA nella stessa posizione per mantenere esatta la hitbox del segreto.

Consigli tecnici: clip MP4/H.264, muted, playsinline, versioni 16:9 e verticali quando necessarie, primo/ultimo frame compatibili per i loop, compressione per uso mobile. Fallback alle fotografie originali in caso di blocco del video. Mantenere la musica dell'invito separata dai filmati.

## Nota sulla versione

I file applicativi qui contenuti corrispondono alla V25: questa e' una base restaurata, non una nuova animazione AI. La V27 e' stata scartata per qualita' insufficiente.

## Come collegare i filmati (V28)

Copia gli MP4 in `assets/video/` e compila `clip` in `config.js`, ad esempio:

```js
clip: {
  intro:     { desktop: "assets/video/intro.mp4",     mobile: "assets/video/intro-v.mp4" },
  attesa:    { desktop: "assets/video/attesa.mp4",    mobile: "assets/video/attesa-v.mp4" },
  apertura:  { desktop: "assets/video/apertura.mp4",  mobile: "assets/video/apertura-v.mp4" },
  pergamena: "assets/video/pergamena.mp4",
  ritorno:   "assets/video/ritorno.mp4",
  slideshow: "assets/video/onde.mp4",
  finale:    "assets/video/finale.mp4"
}
```

Vincoli di inquadratura, necessari perche' le hitbox restino precise:

- intro, attesa, apertura: stessa inquadratura di `bottiglia.jpg` (16:9) e `bottiglia-mobile.jpg` (verticale 2:3); la bottiglia, a riposo, nella posizione della foto.
- finale: formato 3:2 come `mare-notte.jpg`, luna ferma nello stesso punto della foto.
- intro: l'ultimo frame deve coincidere con il primo di attesa; attesa e finale devono chiudere il loop senza salto.
- pergamena: carta senza testo; a fine clip il foglio occupa l'area della lettera (circa 460 px di larghezza su desktop). Il testo HTML compare negli ultimi 0,6 s.
- ritorno: parte dalla posizione finale della pergamena. Parte da sola negli ultimi secondi della scena (durata del clip + 0,3 s prima della fine): con `durate.segreto` di 13 s e un ritorno di 3 s parte a 9,7 s.
- Tempi della storia: apertura parte a meta' scena `messaggio` (52% di 6 s); allunga `durate.messaggio` in `config.js` se il clip dura di piu'.
- Formato: MP4 H.264, senza audio, 1280x720 (verticale 720x1080), 24-30 fps, circa 1-3 MB per clip.
