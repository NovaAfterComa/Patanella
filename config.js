/* =============================================================
   PERSONALIZZA QUI — non servono installazioni o compilazioni.
   Le sei Polaroid ora contengono le fotografie personali fornite.
   Per sostituirle, mantieni i nomi in assets/photos/ o modifica i percorsi qui.
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
    { src: "assets/photos/bambina-01.jpg", etichetta: "Bambina seduta su una coperta", didascalia: "Il mare, da sempre.", posizione: "50% 20%" },
    { src: "assets/photos/bambina-02.jpg", etichetta: "Bambina seduta sulla spiaggia", didascalia: "Le idee erano già chiare.", posizione: "50% 50%" },
    { src: "assets/photos/bambina-03.jpg", etichetta: "Bambina che gioca nell’acqua del mare", didascalia: "Una piccola peste.", posizione: "50% 42%" }
  ],
  timbri: [], // Nessun timbro sulle tre Polaroid d’infanzia
  timbroFinale: "", // Nessun timbro neppure nella seconda carrellata

  // Seconda carrellata: il "dopo", tre foto adulte: 6, 5, 7.
  // Il nome tecnico fotoComplici resta invariato per compatibilita con il sito.
  fotoComplici: [
    { src: "assets/photos/adulta-01.jpg?v=20", didascalia: "Il mare, ancora.", etichetta: "Rosy adulta guarda il mare al tramonto", posizione: "50% 43%" },
    { src: "assets/photos/adulta-02.jpg", didascalia: "Le idee, ancora più chiare.", etichetta: "Rosy adulta sorride durante un brindisi", posizione: "50% 39%" },
    { src: "assets/photos/adulta-03.jpg?v=20", didascalia: "Piccola peste, edizione 30.", etichetta: "Rosy adulta salta felice sulla spiaggia", posizione: "50% 44%" }
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
    macchina2: "Una ragazza che non ha nessuna intenzione di crescere davvero…",
    complici: ["Poi gli anni sono passati…", "E qualcosa è cambiato…", "Ma non troppo."],
    epico1: "Trent’anni di sogni, risate e persone speciali.",
    epico2: "E non è ancora diventata una persona seria.",
    citazione: "Le cose belle non si contano negli anni, ma nei momenti che ci fanno brillare gli occhi.",
    finale: "La storia continua… e stavolta voglio viverla con voi!"
  }
};
