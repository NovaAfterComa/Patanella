# Invito di Rosy — Una bottiglia, una storia, una festa

Questo è il sito pronto per **GitHub Pages**, con fotografia realistica, animazioni, foto dimostrative, musica e invito finale.

## Come aprire e pubblicare

1. Estrai lo ZIP sul computer.
2. Apri `index.html` nel browser, oppure carica **tutti i file e la cartella `assets` nella radice** del repository GitHub Pages.
3. Sul sito, **clicca o tocca direttamente la bottiglia** nella scena iniziale. La storia dura circa 53 secondi; in qualsiasi momento puoi usare **Vai all’invito**.
4. Lascia attivi audio e altoparlanti se vuoi ascoltare la musica. Per evitare i blocchi di riproduzione automatica di iPhone, Safari, Chrome e altri browser, la musica comincia solo dopo il clic/tocco sulla bottiglia. Puoi disattivarla con l’icona dell’altoparlante.

GitHub Pages pubblica siti statici, quindi non serve alcun server o compilazione. Il sito usa percorsi relativi, compatibili anche con i repository pubblicati in una sottocartella.

## Dati già impostati

- **Protagonista:** Rosy, 30 anni.
- **Firma sulla pergamena:** Patanella (modificabile separatamente con `firmaPergamena`).
- **Festa:** lunedì 28 dicembre 2026, ore 20:30 (fuso di Roma, CET).
- **Luogo:** pulsante **Indicazioni su Google Maps** (con icona della posizione), collegato a `https://maps.app.goo.gl/FoxAbSmSC42Bt9TLA`.
- **Conferme:** due pulsanti WhatsApp: **Conferma / Ci sono** in verde e **Declina / Non ci sono** in rosso. Entrambi aprono `https://wa.me/393472343616` con un messaggio precompilato differente. Il visitatore deve scegliere personalmente di inviare il messaggio.
- **Conto alla rovescia:** giorni, ore, minuti e secondi, aggiornati automaticamente fino alle 20:30 del 28/12/2026. Da quel momento compare «È arrivato il momento di festeggiare!».
- **Colonna sonora:** brano allegato «Chiara Grispo — Oltre l’orizzonte (Da Oceania)», incluso nel file `assets/oltre-lorizzonte.mp3`. Continua senza interruzioni anche durante «Il prossimo capitolo» e sulla schermata finale; si ripete se necessario.

**Il nome e l’indirizzo del locale non sono stati inventati:** il collegamento Google condiviso è stato impostato direttamente. Nel sito compare il testo «La location? Scoprila sulla mappa.»; se preferisci il nome esatto puoi modificarlo in `config.js` (`locale` e `indirizzo`).

## Personalizzare le foto senza toccare il codice

Sostituisci i seguenti file JPG con i tuoi, mantenendo gli stessi nomi:

| File | Da sostituire con |
| --- | --- |
| `assets/photos/bambina-01.jpg` | Primo ricordo d’infanzia |
| `assets/photos/bambina-02.jpg` | Secondo ricordo d’infanzia |
| `assets/photos/bambina-03.jpg` | Terzo ricordo d’infanzia |
| `assets/photos/amiche.jpg` | Foto con gli amici |
| `assets/photos/cagnolona.jpg` | Foto della cagnolona |
| `assets/photos/festa.jpg` | Foto di una festa o altro ricordo |

Le immagini provvisorie sono sintetiche, fotorealistiche e raffigurano persone immaginarie. Se vuoi adattare il ritaglio di una foto, modifica il campo `posizione` della relativa voce in `config.js` (es. `"50% 30%"`).

## Stile della pergamena e timbri

- Il testo della pergamena usa una calligrafia **Dancing Script** e la firma **Great Vibes**, caricate da Google Fonts quando è disponibile una connessione Internet. In assenza di connessione viene utilizzato un corsivo di sistema.
- I sigilli sulle foto hanno un fondo rosso con scritte color avorio, per rimanere leggibili anche sulle immagini scure. Puoi cambiare colori e dimensioni delle scritte in `style.css`, nella sezione «Revisione 2».
- Il brano rimane in riproduzione anche durante il passaggio alla scena «Il prossimo capitolo»; si ferma solo quando metti in pausa la storia, disattivi l'audio o passi a un'altra scheda.

## Altre personalizzazioni

Puoi modificare `config.js` con qualsiasi editor di testo:

- `nome`, `eta` e `firmaPergamena` controllano nome, età e firma.
- `data`, `orario` e `dataEvento` controllano rispettivamente il testo stampato e l'istante esatto del countdown. **Se cambi la data, aggiorna anche `dataEvento` con l’offset del fuso corretto.**
- `locale`, `indirizzo`, `mappa`, `whatsapp`, `messaggioConferma` e `messaggioDeclina` modificano dettagli e pulsanti.
- `musica` indica il file MP3; `onde` un eventuale sottofondo ambientale opzionale.
- `fotoBambina`, `fotoComplici`, `testi` e `durate` controllano contenuti e tempi delle scene.
- `sfondi` contiene le immagini desktop/mobile della bottiglia, la carta e il mare notturno; `video` può sostituire gli sfondi con clip MP4 silenziose, facoltative.

Per le foto di scena e la procedura di sostituzione rimane disponibile `assets/ORIGINE-IMMAGINI.txt`.

## Note di compatibilità

L'interazione è progettata per mouse, touch e tastiera. Sui dispositivi che bloccano l'audio automatico il clic iniziale sulla bottiglia è indispensabile per la riproduzione. I controlli di audio, pausa, salto alla fine e replay restano disponibili. La schermata finale si adatta agli schermi piccoli e scorre all'occorrenza.


### Revisione 3 — ritmo e leggibilita su smartphone

- La scena **Il prossimo capitolo** dura adesso **5,5 secondi** (prima 9): la scritta **Il bello deve ancora venire** sfuma dopo circa 2,3 secondi. Il brano musicale non viene interrotto.
- I testi bianchi sul mare hanno ombre piu nette e una sfumatura fotografica protettiva nelle zone piu luminose, mantenendo la bottiglia in luce.
- Per regolare la durata modifica `epico: 5.5` dentro `config.js`.

### Revisione 4 — indicazioni e RSVP

- Link Google Maps aggiornato al nuovo URL condiviso, con icona segnaposto sul bottone.
- Il tasto WhatsApp è più grande, verde e include il cortese invito a confermare.
- I due tasti sono impilati per rendere la conferma prioritaria e facilmente cliccabile sui telefoni.

### Revisione 5 - due risposte WhatsApp

- La scelta WhatsApp e' ora divisa in due pulsanti affiancati: verde **Conferma (Ci sono!)** e rosso **Declina (Non ci sono)**.
- Compare il testo cortese "La tua risposta sarebbe gradita" sopra le opzioni.
- Entrambi i link usano il numero `393472343616` e aprono WhatsApp con il rispettivo messaggio pronto, senza inviarlo automaticamente.
- I testi dei messaggi sono personalizzabili separatamente in `config.js`: `messaggioConferma` e `messaggioDeclina`.
- Location Google Maps, countdown, musica e tutte le altre scene restano invariati.

### Revisione 6 - bottiglia in primo piano

- Nella prima scena, la bottiglia presenta un piccolo alone luminoso pulsante e un'etichetta **Tocca la bottiglia per iniziare la storia** in posizione vicina all'oggetto. L'intera area della bottiglia e l'etichetta sono cliccabili. L'effetto e' piu evidente su smartphone, ma discreto e coerente con l'immagine del mare.
- Il link secondario in alto a destra ora dice **Salta la storia** per distinguerlo dall'azione principale.
- La battuta **Segreti mai mantenuti…** e' stata modificata in **Segreti mantenuti…**.
- L'animazione tiene conto della preferenza del sistema operativo per la riduzione del movimento.

### Revisione 7 — hitbox bottiglia precisa

- L'area che avvia la storia ora segue la sagoma reale della bottiglia con coordinate diverse per fotografie orizzontali e verticali, ed è ricalcolata dopo il ritaglio `object-fit: cover` e durante il lieve movimento dello sfondo. Non si attiva più toccando porzioni lontane di mare o spiaggia.
- Il glow segue la stessa sagoma; l'etichetta 'Tocca la bottiglia' è anch'essa un pulsante accessibile e cliccabile.
- In caso di sostituzione delle immagini del mare con fotografie in cui la bottiglia è posizionata altrove, aggiornare i punti in `bottleShapes` all'interno di `script.js`.

### Revisione 8 — hitbox ovale e glow V6

- L'area cliccabile della bottiglia e' **sempre un'ellisse inclinata**, approssimata al corpo della bottiglia (clip-path CSS), anziche' il poligono della V7.
- L'ellisse si riposiziona automaticamente con l'immagine desktop/mobile, il crop e il lentissimo movimento dello sfondo.
- Ripristinati l'**alone dorato pulsante** e tre **stelline scintillanti** ispirati alla V6, senza ampliare l'area interattiva sul mare circostante.
- Il pulsante testuale 'Tocca la bottiglia' continua a funzionare anche da tastiera.
