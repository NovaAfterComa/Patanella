## V17 - Conferma WhatsApp piu semplice

- Sostituito il campo lungo per allergie con `Allergie/intolleranze: ___`.
- Mantenuta la rinuncia senza data e ora dalla V16.
- Sincronizzati tutti i link WhatsApp statici e di fallback.
- Aggiornato `config.js?v=17`.

## V16 - Messaggio Declina WhatsApp

- Rimossi data e orario dal messaggio precompilato di rinuncia.
- Aggiornati il link principale e i link della versione essenziale nell'HTML.
- I link statici di conferma ora coincidono con il testo di `config.js`.
- Riferimento configurazione aggiornato a `v=16`.

## V15 - Messaggio di conferma WhatsApp

- Modificato solamente il testo WhatsApp di Conferma per chiedere eventuali allergie/intolleranze alimentari.
- Aggiornati `config.js` e il link di fallback nell'HTML; `config.js?v=15`.
- Nessun testo aggiuntivo nel sito, nessuna modifica al pulsante Declina.

# V14 - Correzione caricamento immagini

- Risolto `ReferenceError: openMobile is not defined` in `loadSecondaryMedia()`.
- La sorgente mobile di bottiglia aperta usa `backgrounds.aperturaMobile || open`.
- Caricamento di bottiglia aperta, mare notturno e Polaroid riattivato su mobile e desktop.
- Cache-busting aggiornato a v14.

# V13 - Correzioni mirate

- Titolo personalizzato di quattro parole: niente duplicazioni.
- Caricamento differito delle immagini delle scene successive dopo la bottiglia iniziale.
- Richiamo sulla bottiglia ribassato soltanto sui telefoni molto piccoli (es. 320 x 568).
- Cache-busting v13; monogramma invariato.

# Changelog

## V12 - 26 ottobre 2026

- Richiesta di non indicizzazione (`noindex, nofollow`) nel markup.
- Versione dei file CSS e JavaScript aggiornata a 12 per evitare vecchia cache.
- Monogramma ridimensionato a 256 px e ottimizzato, file JPG ridondante eliminato.
- Immagini iniziali responsive con `<picture>`, senza caricare prima il desktop.
- Rimosso precaricamento indiscriminato e duplicato delle scene.
- Brano in MP3 ottimizzato a 128 kbps senza cambiare percorso o comportamento.
- Aggiornamenti DOM animati solo quando i valori cambiano.
- Titolo personalizzato preserva interruzioni di riga e corsivo in modo sicuro.
- Allineamento bottiglia mantenuto, con aggiornamento ogni 70 ms anziche' callback a ogni frame.
- Countdown fermo quando la scheda non e' visibile; refresh al ritorno.
- Promemoria ICS 24 ore prima; titolo, orari e link Maps confermati.
- Microtesti piu' leggibili su telefoni piccoli.
- README semplificato.

Non modificati: hitbox ovale, glow, stelline, scene, WhatsApp, Google Maps e
indirizzo pubblico. La pulizia completa dei CSS stratificati e i font
ospitati localmente richiedono una verifica visiva dedicata e non sono
inclusi in questa versione di ottimizzazione prudente.
