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
