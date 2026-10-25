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
- **Luogo:** pulsante **Scopri la location**, collegato a `https://share.google/5HwNAloj1plsAWSnj`.
- **Conferme:** pulsante **Conferma su WhatsApp**, che apre `https://wa.me/393472343616` con un messaggio di conferma precompilato. Il visitatore deve scegliere personalmente di inviare il messaggio.
- **Conto alla rovescia:** giorni, ore, minuti e secondi, aggiornati automaticamente fino alle 20:30 del 28/12/2026. Da quel momento compare «È arrivato il momento di festeggiare!».
- **Colonna sonora:** brano allegato «Chiara Grispo — Oltre l’orizzonte (Da Oceania)», incluso nel file `assets/oltre-lorizzonte.mp3`. Continua anche sulla schermata finale e si ripete se necessario.

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

## Altre personalizzazioni

Puoi modificare `config.js` con qualsiasi editor di testo:

- `nome`, `eta` e `firmaPergamena` controllano nome, età e firma.
- `data`, `orario` e `dataEvento` controllano rispettivamente il testo stampato e l'istante esatto del countdown. **Se cambi la data, aggiorna anche `dataEvento` con l’offset del fuso corretto.**
- `locale`, `indirizzo`, `mappa`, `whatsapp` e `messaggioConferma` modificano dettagli e pulsanti.
- `musica` indica il file MP3; `onde` un eventuale sottofondo ambientale opzionale.
- `fotoBambina`, `fotoComplici`, `testi` e `durate` controllano contenuti e tempi delle scene.
- `sfondi` contiene le immagini desktop/mobile della bottiglia, la carta e il mare notturno; `video` può sostituire gli sfondi con clip MP4 silenziose, facoltative.

Per le foto di scena e la procedura di sostituzione rimane disponibile `assets/ORIGINE-IMMAGINI.txt`.

## Note di compatibilità

L'interazione è progettata per mouse, touch e tastiera. Sui dispositivi che bloccano l'audio automatico il clic iniziale sulla bottiglia è indispensabile per la riproduzione. I controlli di audio, pausa, salto alla fine e replay restano disponibili. La schermata finale si adatta agli schermi piccoli e scorre all'occorrenza.
