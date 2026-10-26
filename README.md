# Invito Patanella - V20

Un invito interattivo per la festa del 28 dicembre 2026 alle 20:30.
Il sito e' statico e pronto per GitHub Pages.

## Pubblicare su GitHub Pages

1. Apri il repository `Patanella`.
2. Sostituisci i file della versione precedente con **tutto il contenuto** dello ZIP,
   mantenendo le cartelle e i nomi originali.
3. Aspetta che GitHub Pages termini la pubblicazione, poi visita:
   https://novaaftercoma.github.io/Patanella/
4. Prova da telefono, anche aprendo il link tramite WhatsApp.

## Personalizzare l'invito

- `config.js`: nomi, data, contatti, testi, musica, immagini e durata delle scene.
- `assets/photos/`: le prime tre Polaroid usano ora le fotografie personali 1, 2 e 3 caricate dall’utente; le altre tre Polaroid usano le fotografie personali 6, 5 e 7 (versione adulta).
- `assets/scenes/`: immagini fotografiche delle diverse scene (desktop e mobile).
- `assets/monogramma-trasparente.png`: simbolo RD, con trasparenza.
- `assets/anteprima-whatsapp.jpg`: immagine mostrata quando il link viene condiviso.
- `index.html`: tag Open Graph, favicon, titolo, meta robots e struttura della pagina.
- `Patanella_28_dicembre_2026.ics`: evento per il calendario (ora di Roma).

Il file ICS dura dalle 20:30 del 28 dicembre alle 00:00 del 29 dicembre 2026
ed ha un promemoria 24 ore prima. La posizione segue il link Google Maps fornito.

## Privacy e pubblicazione

Questa versione include `robots=noindex,nofollow`, che chiede ai motori di
ricerca di non indicizzare la pagina. **Non protegge ne' rende privati** il
numero WhatsApp, le fotografie o gli altri file pubblicati su GitHub Pages.
Carica solo fotografie per cui hai il consenso, quando necessario.

I due font calligrafici sono ancora serviti da Google Fonts per conservare
l'aspetto originale: la pagina richiede dunque risorse esterne da Google.
La loro sostituzione con file ospitati localmente richiede font autentici
con licenza d'uso compatibile e un test visivo del rendering.

## Risoluzione di problemi

- Se sul telefono vedi una vecchia versione, chiudi e riapri il link o
  ricarica la pagina dopo la pubblicazione GitHub.
- La musica parte solo dopo un tocco. Il pulsante con nota musicale
  permette di ritentare se il browser blocca la riproduzione.
- Se WhatsApp non aggiorna subito l'immagine del link, attendi il refresh
  della sua cache; l'immagine e' in `assets/anteprima-whatsapp.jpg`.

Vedi `CHANGELOG.md` per l'elenco delle modifiche.

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


## V21 — Il segreto della luna
Nella schermata finale premi e tieni premuta la luna presente nella fotografia per cinque secondi consecutivi. Si illuminerà, cadrà una stella e comparirà una Polaroid aggiuntiva con la foto `assets/photos/polaroid-segreta-08.jpg`. Rilasciando prima, l'effetto si annulla. La foto può essere chiusa con la X o con Esc. La musica e il resto dell'invito rimangono invariati.
