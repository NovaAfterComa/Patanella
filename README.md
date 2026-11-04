# Invito Patanella V48 — Un solo tocco per aprire il Memory

Aggiornamento mirato della V47: dopo aver sbloccato la luna, **un solo tocco sulla Polaroid** apre il Memory su smartphone. Restano invariati lo sfondo sfocato, la transizione con bollicine, le fotografie e gli altri elementi dell'invito.

Pubblica i file alla radice del repository GitHub Pages, senza caricare la cartella contenitore. I file modificati sono `script.js`, `style.css`, `index.html`, `README.md` e `CHANGELOG.md`.

---
# Invito Patanella V47 — Richiamo Polaroid e spaziatura Memory

Carica **tutti i file** nella radice del repository GitHub Pages, mantenendo la cartella `assets`. Il testo sotto la Polaroid segreta ora compare in dissolvenza con piccolo rimbalzo e continua con una morbida pulsazione. Nel Memory, pulsanti e testi hanno spazi uniformi anche su smartphone.

---
# Invito Patanella V43 — stelline e pergamena rifinite

La V43 mantiene i filmati, le immagini, la musica e le interazioni della V42.
Le stelline sono ora più numerose e leggermente più grandi, e al cambio scena si dissolvono senza essere cancellate di colpo. Il testo calligrafico sulla pergamena viene impaginato prima di iniziare la scrittura, evitando che le parole saltino di riga durante l'animazione. La firma mantiene le stesse dimensioni per l'intero effetto.

Per GitHub Pages, estrai lo ZIP e carica tutti i file e le cartelle nella radice del repository `Patanella`.

---

# Invito Patanella V41 — nuova pergamena e apertura riallineata

Aggiornamento mirato della V40:
- La pergamena con le conchiglie fornita dall'utente ora sostituisce la precedente, con contorno trasparente e proporzioni originali (2:3). Testo, font e firma animata restano invariati.
- Il video di apertura su smartphone e' stato riallineato verticalmente nel filmato stesso, in modo che la bottiglia non scenda visibilmente al tap. Il poster dell'apertura e' stato aggiornato allo stesso fotogramma.
- Il video del mare notturno V40, sempre in avanti, e tutte le altre interazioni restano invariati.
- Riferimenti cache CSS, JS e video apertura aggiornati a V41.

Per GitHub Pages carica **tutti i file** presenti nello ZIP nella radice del repository `Patanella` (non la cartella contenitore).

---

# Invito Patanella V40 — onde in avanti e transizioni della bottiglia

- Mare notturno su smartphone: nuovo loop **solo in avanti**, ricostruito dalla clip originale stabilizzata con un raccordo a dissolvenza graduale, rallentato leggermente per un movimento piu morbido (niente reverse). Rimane continuo nelle sezioni 5 e 6 e nel finale.
- L'immagine di apertura mobile viene dal primo fotogramma del video di attesa, per evitare il lampo tra JPG e MP4 quando si apre il sito.
- Dopo il tap, il video di attesa resta visibile finche' il primo fotogramma di apertura non e' pronto; raccordo di 0,68 secondi senza esporre la foto statica intermedia.
- Hitbox ovale ricalibrata per il nuovo poster mobile; controlli, musica, pergamena e luna segreta invariati.
- Cache CSS/JS/clip aggiornata a V40.

Per GitHub Pages, pubblicare **tutti** i file e le cartelle contenuti nello ZIP alla radice del repository, senza la cartella contenitore.

---

# Invito Patanella V39 — mare notturno con loop fluido

Il mare notturno su smartphone ora utilizza un ciclo lento di 14 secondi con inversione graduale del movimento: l’onda avanza e si ritira senza il salto netto del video precedente. La luna, l’easter egg dei cinque secondi, le scene 5 e 6 e la pagina finale restano operativi. Su desktop resta l’immagine panoramica.

Per GitHub Pages, caricare tutti i file e le cartelle di questo ZIP nella radice del repository (non la cartella contenitore).

# Invito Patanella - V38 (mare notturno continuo e stabilizzato)

- Sul telefono in verticale lo stesso video notturno appare nelle scene 5 ("Il bello deve ancora venire"), 6 (citazione) e nella schermata finale. Rimane in riproduzione continua anche passando da una scena all'altra.
- Stabilizzato il movimento laterale del filmato (circa 9 px lungo il loop) senza modificare il movimento naturale delle onde.
- La luna, il glow e l'easter egg con pressione di 5 secondi rimangono nel finale; su desktop si utilizza ancora il panorama fotografico originale.
- Cache aggiornata alla V38.

## Istruzioni di pubblicazione

Estrai lo ZIP e sostituisci tutti i file nel repository GitHub Pages, mantenendo le cartelle `assets/` complete. Testa la sequenza su smartphone.

---

# Invito Patanella - V37 (apertura della bottiglia su mobile)

La V37 conserva tutti i contenuti e le funzioni della V36.

**Novita**
- Il video della bottiglia che si stappa, fornito dall'utente, e stato ottimizzato e usato nella scena di apertura **solo sui telefoni in verticale**.
- Il video ha un ritaglio/zoom centrale di circa 8%, non contiene audio aggiuntivo e pesa circa 0,9 MB.
- Per mostrare tappo e pergamena senza interromperli, la scena di apertura dura circa 5,05 secondi su mobile. Su desktop dura ancora 2,7 secondi e mantiene il comportamento preesistente.
- Il video di attesa viene dissolto nel video di apertura; il resto del sito, incluso l'easter egg della luna, e invariato.

**Nota:** il ritaglio nasconde/attenua i difetti ai bordi, ma non puo correggere eventuali artefatti interni alla generazione.

---

# Invito Patanella - V25

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
Nella schermata finale premi e tieni premuta la luna presente nella fotografia per cinque secondi consecutivi. Si illuminerà, cadrà una stella e comparirà una Polaroid aggiuntiva con la foto `assets/photos/polaroid-segreta-09.jpg`. Rilasciando prima, l'effetto si annulla. La foto può essere chiusa con la X o con Esc. La musica e il resto dell'invito rimangono invariati.

## Novita V22

- La foto segreta della luna ora e la fotografia 9: Patanella da bambina in mare.
- Nuova didascalia: Il mare nel cuore, fin da piccola.
- La Polaroid segreta usa il formato orizzontale 3:2 per non tagliare i braccioli e il mare.
- Tutta la logica della pressione da 5 secondi, del glow e della stella cadente resta invariata.

## Novita V23

- Nella scena finale un piccolo alone dorato pulsa lentamente intorno alla luna, per suggerire che e interattiva senza svelare il segreto.
- La pressione di cinque secondi, la stella cadente e la Polaroid restano invariati.
- Per le preferenze di movimento ridotto il glow e statico.
- CSS con cache-busting v23.

## Novita V24

- Eliminate le etichette visibili «La scoperta», «Un piccolo segreto per te», «Le prove» e «Qualche anno dopo».
- Rimosse anche le ultime due etichette dagli indicatori di avanzamento senza togliere le barre.
- Cambiata la frase in «E non sono ancora diventata una persona seria.».
- La conferma e' gradita entro e non oltre il 7 dicembre 2026, come indicato nella schermata finale e nel fallback.
- Versione aggiornata a `v=24` per CSS e JavaScript.

## Novita V28

Predisposizione ai filmati realistici del `PIANO_VIDEO_REALISTICI.md`: blocco `clip` in `config.js`, sequenza intro/attesa/apertura/pergamena/ritorno/slideshow/finale, ripiego automatico sulle foto. Nessun video incluso: senza clip il sito e' identico alla V25. Dettagli e vincoli di ripresa in fondo al PIANO.


### V30 — Pergamena anticipata
La scena di stappo ora dura 2,7 secondi, per raccordarsi al video di circa 2,58 secondi. La pergamena entra subito dopo.


## V36 - video mare notturno
- Su smartphone la schermata finale usa `assets/video/mare-notte-mobile.mp4`, senza audio, in loop.
- Leggero zoom CSS (11%) per limitare i difetti visibili sui bordi del video.
- Sul desktop viene mantenuta la fotografia originale, poiche' il video e' verticale.
- `assets/scenes/mare-notte-mobile-poster.jpg` offre il fallback mobile.
- La hitbox della luna segue ora il video mobile e la foto desktop.

### V42: stelline ambientali
Le scintille decorative sono gestite da `sparkles.js`, sono casuali, non cliccabili e vengono mostrate solo dove non coprono i contenuti. Per disattivarle, rimuovere dal file `index.html` lo script `sparkles.js?v=43`.


## Easter egg Memory — V44

Nella schermata finale, tieni premuta la luna per cinque secondi. Compare la stessa Polaroid dell'infanzia della V43. Toccando la Polaroid si attivano dissolvenza, bollicine e immersione nel gioco **Il tesoro degli abissi**. Il gioco mostra direttamente le carte e non ripete l'introduzione: usa `memory.html` e `memory-loader.js`, che devono rimanere accanto a `index.html`, più il foglio `memory-transition.css`. Chiudendo il gioco si torna alla Polaroid originale.

### V46
Il titolo del segreto della luna è su una riga e l’indicazione di tocco ha un’animazione più fluida.
