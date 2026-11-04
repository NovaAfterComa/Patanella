# Versione 48 — Apertura Memory con un solo tocco

- Corretto il doppio tap richiesto talvolta da Safari su smartphone per aprire il Memory dalla Polaroid finale.
- Il primo tocco valido avvia subito l'immersione; eventuali click sintetici duplicati non possono avviarla una seconda volta.
- Un dito che scorre sulla schermata non attiva accidentalmente il gioco.
- L'effetto `:hover` sulla foto si applica soltanto ai dispositivi con mouse, senza interferire con i tocchi.
- Confermati il click da desktop e l'attivazione da tastiera; Polaroid, animazioni, bollicine, musica e Memory invariati.
- Aggiornata la cache del codice modificato (CSS e JS) a V48.

---
# Versione 47 — Richiamo Polaroid e spaziatura Memory

- Ripristinato un effetto di ingresso chiaramente visibile della scritta «Tocca la Polaroid»: dissolvenza e piccolo rimbalzo, seguiti da un movimento lento e continuo di respirazione senza salti.
- Le due animazioni operano su due elementi diversi, evitando che una annulli l’altra.
- Migliorati gli spazi verticali del Memory fra barra dei pulsanti, intestazione, descrizione, statistiche e griglia, su desktop e smartphone.
- Sugli schermi molto bassi il gioco può scorrere verticalmente senza sovrapporre i controlli.
- Foto della Polaroid, bollicine, schermata di immersione, pulsanti e dati dell’invito invariati.

---
## V45 — Tesoro degli abissi e correzioni mobile (5 novembre 2026)

- Nella sorpresa della luna: intestazione "✦ Un piccolo segreto dal mare ✦", titolo "Il tesoro degli abissi 💎" e testo "Il mare nasconde una piccola sorpresa."
- Conservata la fotografia originale della Polaroid e lo sfondo notturno sfocato.
- Più spazio tra Polaroid e invito al tocco, con lieve dissolvenza e rimbalzo.
- Rimossa la seconda animazione "Un viaggio sotto le onde…" dentro l'iframe; ora la scritta termina prima che il Memory diventi visibile.
- Nella modalità integrata, nascosto il pulsante fisso "Chiudi" che si sovrapponeva a "Ricomincia" su smartphone. Si esce da "Torna all’invito".
- Aggiornati i parametri di cache alla V45.

# V44 — Easter egg con Memory immersivo

- La Polaroid segreta originale (foto 9) rimane identica ed è ora cliccabile.
- Il click avvia dissolvenza, bollicine e immersione negli abissi, direttamente dalla Polaroid del sito.
- Il gioco Memory originale viene caricato in iframe isolato, saltando la sua Polaroid introduttiva duplicata.
- Il pulsante per tornare al gioco originale è adattato per tornare alla Polaroid dell’invito.
- Accessibilità: pulsante accessibile da tastiera, Escape chiude il Memory, rispetto dell’impostazione Riduci movimento.
- Nessuna modifica alle animazioni e ai contenuti della V43.

## V43 — Stelline più presenti e scrittura stabile (1 novembre 2026)

- Stelline dorate più grandi e frequenti: fino a 4 su smartphone e 7 su desktop, se c'è spazio libero.
- Al cambio di scena svaniscono in circa 0,85 secondi invece di scomparire bruscamente.
- Le stelle rimangono decorative: niente tocchi catturati e nessuna sovrapposizione con le aree di testo e i pulsanti durante la creazione.
- La pergamena determina i ritorni a capo prima della scrittura e rivela le righe a inchiostro senza spostare le parole già visibili.
- Eliminato l'effetto grafico temporaneo sulla firma che causava un piccolo salto al completamento.
- Riferimenti cache aggiornati a V43; fotografie, video, audio e collegamenti invariati.

## V42 — Stelline dorate ambientali (1 novembre 2026)

- Effetto scintille dorate ispirato alle stelline della bottiglia, nelle scene successive.
- Posizioni casuali e variabili; il codice evita titoli, pergamena, Polaroid, contenuti della pagina finale e controlli.
- Una o due stelline per volta su smartphone (massimo tre su desktop), senza catturare clic o tocchi.
- Nessuna nuova richiesta di immagini o video; animazione CSS leggera.
- Rispetta Pausa, visibilita della scheda e Riduci movimento.
- **Invariati** i video della bottiglia, il mare notturno e l’easter egg della luna della V41.

## V41 — Nuova carta marina e allineamento pre/post tap
- Pergamena marina illustrata con conchiglie, ritagliata in trasparenza e ottimizzata WebP, senza cambiare il layout del testo.
- Video mobile dello stappo riallineato rispetto alla bottiglia in attesa, senza riposizionamenti CSS che potrebbero scoprire i bordi.
- Poster dell'apertura rigenerato dal video corretto.
- Loop del mare notturno V40 e tutte le altre funzioni invariati.

## V40 — Mare naturale e raccordi video senza JPG visibile
- Eliminata l'inversione temporale del mare: ciclo in avanti con raccordo progressivo dei fotogrammi finali e iniziali.
- Primo fotogramma reale del video di attesa usato come poster della schermata iniziale.
- Passaggio al filmato dello stappo solo quando il nuovo video e' pronto, mantenendo in riproduzione quello precedente durante l'incrocio.
- Corretta la hitbox per il poster 720x1080 e aggiornata la cache alla V40.

## V39 - Loop mare notturno senza stacco
- Rimossa la giunzione brusca tra fine e inizio del video notturno originale.
- Nuovo ciclo di 14 secondi: onda che si ritira e torna ad avanzare lentamente, con accelerazione e frenata dolci nei punti di inversione.
- Primo e ultimo fotogramma ricondotti alla stessa posa, senza dissolvenze sovrapposte, ghosting o slittamento laterale.
- Video H.264 silenzioso, dimensioni originali 768x1344; posizione della luna e area interattiva invariate.
- Un solo video continuo nelle scene 5, 6 e finale, solo su smartphone; desktop e tutte le altre funzioni invariati. Cache v39.

## V38 - Mare notturno anche nelle scene 5 e 6
- Il video `mare-notte-mobile.mp4` comincia con `epico` (scena 5), continua in `citazione` (6) e rimane attivo nella schermata finale senza ricominciare.
- Eliminato il lieve scorrimento orizzontale del filmato stabilizzando la porzione fissa del cielo. Onde e riflessi restano in movimento.
- Disattivato il `night-drift` CSS nelle tre scene e aggiunto il preload del video durante la seconda carrellata.
- Desktop e controlli della luna invariati. Cache V38.

## V37 - Apertura con il nuovo video su smartphone
- Sostituito `assets/video/apertura-mobile.mp4` con il video fornito dall'utente, ottimizzato (zoom 8%, audio rimosso, H.264).
- Durata dell'apertura mobile adeguata a 5,05 secondi per far vedere sia il tappo sia l'uscita della pergamena, senza pause aggiuntive.
- Apertura su desktop invariata (2,7 secondi, immagine originale).
- Cache-busting aggiornato alla versione 37.

## V35 — Pergamena leggibile
- Nuova immagine carta.png come pergamena originale.
- Testo più grande, leggibile, con righe stabili.
- Firma ampliata e con spazio aggiuntivo.

## V33 — Pergamena e calligrafia
- Sfondo carta isolato dalla fotografia originale con bordi sfrangiati morbidi (PNG trasparente).
- Rimosso il ritaglio geometrico della V32.
- Nuovo font Pinyon Script per il testo, ispirato alla calligrafia a pennino del riferimento.
- Firma Great Vibes ancora animata per ultima; dimensioni adattive su mobile.

## V32 — Pergamena
- Rimossa la linea ornamentale superiore.
- Tolta ombra rettangolare e ripristinate proporzioni 2:3 del foglio.
- Font Marck Script con tonalità inchiostro seppia, firma Great Vibes progressiva invariata.
- Testo ridimensionato su mobile e schermi bassi.

## V30 — Pergamena senza attesa
- Accorciata la scena di apertura da 6 a 2,7 secondi, sincronizzata con il filmato di stappo da 2,58 secondi.
- La pergamena appare oltre 3 secondi prima rispetto alla V29.
- Conservate la dissolvenza introdotta nella V29 e le altre scene senza modifiche.
- Cache-busting dei file HTML, CSS e JavaScript aggiornato alla V30.

V29 - apertura immediata al tap: clip apertura attivata subito, precaricamento dedicato, dissolvenza piu morbida e fallback fotografico anticipato. Resto invariato.
# V28 - Predisposizione ai filmati realistici

- Prima clip reale: `assets/video/attesa-mobile.mp4` (PixVerse, watermark tagliato con zoom, loop con dissolvenza di 1 s, 720x1080, circa 0,9 MB). Solo verticale: su desktop resta la foto finche' non c'e' una clip `desktop`.
- Seconda clip: `assets/video/apertura-mobile.mp4` (Viggle, solo dal secondo 2,6 in poi, dove il watermark e' in basso a destra e si taglia). Mostra la bottiglia gia' aperta con il tappo sulla sabbia; il tappo che esce non c'e'.
- Una clip `mobile` si usa solo in verticale e una `desktop` solo in orizzontale, mai al posto l'una dell'altra.

- Nuovo blocco `clip` in `config.js` con i sette filmati del PIANO_VIDEO_REALISTICI.md: intro, attesa, apertura, pergamena, ritorno, slideshow, finale. Ogni voce e' un percorso MP4 oppure `{ desktop, mobile }`.
- Sequenza: intro (una volta) -> attesa (loop) -> apertura al tocco -> pergamena -> ritorno -> slideshow sotto le foto -> finale (loop, luna ferma).
- Clip mancante o che non si carica: resta la fotografia di quella scena, senza errori. Con `prefers-reduced-motion` o risparmio dati le clip non vengono caricate.
- Con una clip attiva la foto sotto smette di muoversi, cosi' le hitbox della bottiglia e della luna restano allineate al filmato.
- Pergamena: con il filmato attivo il testo HTML e la firma compaiono a carta srotolata e spariscono al ritorno.
- Senza clip il sito si comporta esattamente come la V25. Nessun file video e' incluso: vanno girati o prodotti e copiati in `assets/video/`.



## V31 - Firma calligrafica
La firma Patanella non compare subito: viene rivelata da sinistra verso destra soltanto al termine del testo della pergamena. Rimane leggibile prima che la storia prosegua.

## V34 — Pergamena stabile
- Proporzioni 2:3 della fotografia della carta; nessun allungamento.
- Eliminato il cursore verticale dopo le lettere.
- Testo con spazio riservato prima della scrittura per evitare salti al ritorno a capo.
- Firma con spazio verticale e margini maggiori per non tagliare gli svolazzi.


### V36 - Sfondo video finale
- Aggiunto filmato mare notturno per smartphone, senza traccia audio, con zoom 11%.
- Poster e fallback dedicati; desktop invariato.
- Corretta la posizione dell'easter egg della luna rispetto al nuovo video.
- Il video notturno viene mostrato soltanto nella schermata finale, non nelle scene precedenti.
- Versione cache aggiornata.

## V46 — Titolo e invito della Polaroid
- Titolo «Il tesoro degli abissi 💎» su una sola riga, con carattere serif coerente col sito e dimensione responsiva.
- Indicazione «Tocca la Polaroid» con dissolvenza e piccolo rimbalzo: ingresso e pulsazione separati per eliminare gli scatti, anche alle riaperture.
- Nessun cambiamento a fotografie, musica, gioco Memory o easter egg.
