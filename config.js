/* =============================================================
   PERSONALIZZA QUI — non servono installazioni o compilazioni.
   Le foto dimostrative sono già incluse: sostituisci i file in
   assets/photos/ mantenendo i nomi, oppure cambia i percorsi qui.
   Le persone nelle foto di prova sono generate e immaginarie.
   ============================================================= */
window.INVITO_CONFIG = {
  nome: "Rosy",
  firmaPergamena: "Patanella", // Firma visibile sulla lettera
  eta: "30",                  // "" per non mostrare l’età
  data: "Lunedì 28 dicembre 2026",
  dataEvento: "2026-12-28T20:30:00+01:00", // Roma: CET, data/ora usate per il conto alla rovescia
  orario: "20:30",
  locale: "La location? Scoprila sulla mappa.",
  indirizzo: "", // Il link indica il luogo; non inventiamo il nome o la via
  mappa: "https://maps.app.goo.gl/FoxAbSmSC42Bt9TLA",
  whatsapp: "393472343616",
  messaggioConferma: "Ciao Patanella! 🎉🥂\nConfermo che ci sarò alla tua festa!\n\n🍽️ Allergie/intolleranze: ___",
  messaggioDeclina: "Ciao Patanella! Mi dispiace, purtroppo non ci sarò alla tua festa. Ti auguro una bellissima serata! ❤️",
  monogramma: "assets/monogramma-trasparente.png",

  // Scene fotografiche incluse. Puoi lasciarle così.
  sfondi: {
    messaggio: "assets/scenes/bottiglia.jpg",
    apertura: "assets/scenes/bottiglia-aperta.jpg",
    messaggioMobile: "assets/scenes/bottiglia-mobile.jpg",
    aperturaMobile: "assets/scenes/bottiglia-aperta-mobile.jpg",
    notte: "assets/scenes/mare-notte.jpg",
    carta: "assets/scenes/carta.jpg"
  },

  // Le tre foto d’infanzia. posizione regola il ritaglio (CSS object-position).
  fotoBambina: [
    { src: "assets/photos/bambina-01.jpg", etichetta: "Da piccola, al mare", didascalia: "Il mare, da sempre.", posizione: "50% 50%" },
    { src: "assets/photos/bambina-02.jpg", etichetta: "Un compleanno da bambina", didascalia: "Le idee erano già chiare.", posizione: "50% 50%" },
    { src: "assets/photos/bambina-03.jpg", etichetta: "Un ricordo d’infanzia", didascalia: "Una piccola peste.", posizione: "50% 50%" }
  ],
  timbri: ["TESTARDAGGINE: CONFERMATA", "MATURITÀ: NON PERVENUTA", "POTENZIALE DI GUAI: ELEVATO"],
  timbroFinale: "TOP SECRET",

  // Da 1 a 10 ricordi. Puoi aggiungere voci o usare solo percorsi stringa.
  fotoComplici: [
    { src: "assets/photos/amiche.jpg", didascalia: "Le mie persone.", etichetta: "Due amiche al mare" },
    { src: "assets/photos/cagnolona.jpg", didascalia: "L’ospite d’onore.", etichetta: "La cagnolona sulla spiaggia" },
    { src: "assets/photos/festa.jpg", didascalia: "Solo un ultimo brindisi…", etichetta: "Una serata con gli amici" }
  ],

  // Video REALI opzionali: MP4, senza audio, loop. Hanno precedenza
  // sulla fotografia della scena. Un file mancante lascia la foto.
  video: { messaggio: "", segreto: "", prove: "", complici: "", epico: "", citazione: "", finale: "" },
  musica: "assets/oltre-lorizzonte.mp3", // Il brano allegato; parte cliccando sulla bottiglia
  onde: "",                   // es. "assets/onde.mp3"

  // Durate in secondi. Pausa e cambio scheda fermano anche il tempo.
  durate: { messaggio: 6, segreto: 13, prove: 9, complici: 10, epico: 5.5, citazione: 6 },
  testi: {
    introduzione: "Ci sono storie che nascono dal mare…",
    scena1: "Ogni storia ha un inizio…",
    macchina1: "La protagonista di questa storia?",
    macchina2: "Una certa ragazza che non ha nessuna intenzione di crescere davvero…",
    complici: ["Anni di amicizia…", "Segreti mantenuti…", "Serate finite troppo tardi…", "E prove che sarebbe meglio distruggere."],
    epico1: "Trent’anni di sogni, risate e persone speciali.",
    epico2: "E non è ancora diventata una persona seria.",
    citazione: "Le cose belle non si contano negli anni, ma nei momenti che ci fanno brillare gli occhi.",
    finale: "La storia continua… e stavolta voglio viverla con voi!"
  }
};
