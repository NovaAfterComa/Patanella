# Invito Patanella - V20

## Novita V13

- Corretto il titolo introduttivo configurabile con esattamente quattro parole.
- Le immagini successive (bottiglia aperta, mare notturno, Polaroid) si avviano
  dopo il caricamento della fotografia iniziale.
- Indicazione sulla bottiglia piu vicina alla foto sui display 320 x 568 px.
- Cache-busting CSS/JS aggiornato alla versione 13.

## Novita V14

- Corretto il caricamento differito della versione mobile della bottiglia aperta: il percorso ora proviene da `backgrounds.aperturaMobile`, con fallback all'immagine desktop.
- Ripristinato il caricamento delle scene notturne e delle fotografie, che prima veniva interrotto da `ReferenceError`.
- Cache-busting CSS e JS aggiornato alla versione 14.

## Novita V15

- Il messaggio WhatsApp del pulsante Conferma include il campo per allergie/intolleranze alimentari.
- Il testo di conferma nel collegamento HTML e in `config.js` e allineato.
- Aggiornata la cache della sola configurazione a `v=15`, senza modificare musica, grafica o script.

## Novita V16

- Eliminata data e ora dal messaggio WhatsApp di declino.
- Allineati i link WhatsApp statici ai messaggi della configurazione, anche senza JavaScript.
- Cache della configurazione aggiornata a `v=16`; immagini, audio, CSS e logica JS invariati.

## Novita V17

- Conferma WhatsApp con segnaposto breve `Allergie/intolleranze: ___`.
- Messaggio Declina senza data e ora, come in V16.
- Aggiornati tutti i link WhatsApp nell'HTML e la cache della configurazione a `v=17`.

## Novita V18

- Nella pergamena: «Una ragazza» al posto di «Una certa ragazza».
- Sostituite le prime tre Polaroid con le tre foto fornite, nell'ordine 1, 2, 3.
- Rimossi tutti i timbri dalle tre Polaroid d'infanzia.
- Ritaglio calibrato per il formato quadrato delle Polaroid, senza alterare i file originali.
- Cache-busting di `config.js` e `script.js` aggiornato alla V18.

Le fotografie personali resteranno pubblicamente accessibili tramite GitHub Pages.

## Novita V19: il prima e il dopo

- La seconda carrellata si intitola **Qualche anno dopo** (al posto di I complici).
- Le 3 fotografie dell'eta adulta sono `assets/photos/adulta-01.jpg`, `adulta-02.jpg`, `adulta-03.jpg`, in ordine 4, 5, 6.
- Una frase in alto per ciascuna foto: "Poi gli anni sono passati…", "E qualcosa è cambiato…", "Ma non troppo.".
- Le didascalie delle foto: "Il mare, ancora.", "Le idee, ancora più chiare.", "Piccola peste, edizione 30.".
- Rimossi i timbri dalle tre Polaroid adulte; le transizioni sono rimaste invariate.
- Testo alto e fotografia sono collegati allo stesso indice, quindi cambiano sempre insieme.
- Cache aggiornata alla V19 per script, configurazione e CSS.

Nota: GitHub Pages rende pubblicamente accessibili le sei fotografie personali a chiunque conosca l'URL dei file.

## Novita V20: nuove foto, stesso racconto

- Il carosello «Qualche anno dopo» mostra le immagini originali nell'ordine **6, 5, 7**.
- Foto 1 (ex 6): «Poi gli anni sono passati…» / «Il mare, ancora.».
- Foto 2 (ex 5): «E qualcosa è cambiato…» / «Le idee, ancora più chiare.».
- Foto 3 (nuova 7): «Ma non troppo.» / «Piccola peste, edizione 30.».
- Nessuna modifica ai testi, alla musica, ai timbri o alle animazioni.
- Le foto sostituite hanno query `?v=20` per evitare la vecchia cache dei browser.
