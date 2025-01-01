const emojiData = [
        {
          emoji: "🌈",
          correctWords: ["arc de Sant Martí", "iris", "colors", "arc de cel"],
          incorrectWords: ["nit", "foscor", "llum", "espai", "solitud", "gris", "humitat", "tristor", "fred", "hivern"]
        },
        {
          emoji: "💧",
          correctWords: ["gota d'aigua", "gota", "aigua", "líquid"],
          incorrectWords: ["foc", "calor", "sòlid", "desert", "sec", "flam", "escassetat", "pols", "arena", "groc"]
        },
        {
          emoji: "😀",
          correctWords: ["somriure", "content", "cara", "alegria", "riure", "content"],
          incorrectWords: ["pluja", "arbre", "granja", "lluna", "bicicleta", "mar", "petxina", "gel", "sol", "rellotge", "enfadat"]
        },
        {
          emoji: "🐶",
          correctWords: ["gos (o ca)", "animal", "mascota", "pelut", "cadell"],
          incorrectWords: ["planeta", "carpeta", "taula", "secret", "sort", "números", "tinta", "manualitat", "llapis"]
        },
        {
          emoji: "🌞",
          correctWords: ["sol", "calor", "dia", "estiu", "brillant", "llum", "radiant", "bon temps", "matí", "bon dia"],
          incorrectWords: ["xocolata", "música", "ordinador", "sabó", "cançó", "paret", "bombó", "gos (o ca)", "salat", "copa"]
        },
        {
          emoji: "🍎",
          correctWords: ["poma (o maçana)", "fruita", "saludable", "menjar", "saborós", "dolç", "fresc", "natura"],
          incorrectWords: ["cadira", "camí", "acte", "llibre", "fotografia", "pintura", "notícia", "televisor", "sabatilla", "passeig"]
        },
        {
          emoji: "🏠",
          correctWords: ["habitatge", "casa", "llar", "apartament", "immoble", "allotjament", "confort"],
          incorrectWords: ["ocell", "setmana", "bicicleta", "cartell", "lluna", "primavera", "llibre", "company", "tarda", "poma (o maçana)"]
        },
        {
          emoji: "🍕",
          correctWords: ["pizza", "menjar", "italià", "coca", "saborós",  "sopar", "dinar"],
          incorrectWords: [ "dibuix", "arbre", "cabell", "carrer", "escola", "concert", "samarreta", "bossa", "joc"]
        },
        {
          emoji: "🚗",
          correctWords: ["cotxe", "vehicle", "carretera", "viatge", "motor", "velocitat", "conduir", "rodes"],
          incorrectWords: ["temps", "llibre", "festa", "cotó", "pilota", "paper", "xarxa", "platja", "llit", "poma (o maçana)"]
        },
        {
          emoji: "🎶",
          correctWords: ["música", "cançó", "melodia", "so", "instrument", "cant", "ritme", "concert", "notes"],
          incorrectWords: ["muntanya", "pluja", "paperera", "avió", "poma (o maçana)", "motiu", "guerra", "resposta", "pintor", "principi"]
        },
        {
          emoji: "🐱",
          correctWords: ["gat", "animal", "àgil", "meu", "mascota", "felí"],
          incorrectWords: ["desastre", "instant", "forat", "misteri", "persona", "estat", "muntanya", "sol", "roca", "carta"]
        },
        {
          emoji: "🌧️",
          correctWords: ["pluja", "gota", "núvols", "tempesta", "mal temps", "aigua"],
          incorrectWords: ["rosa", "llibre", "relació", "sabó", "oli", "fàbrica", "música", "teatre", "amor", "carrer"]
        },
        {
          emoji: "💡",
          correctWords: ["llum", "idea", "bombeta", "il·luminació", "creativitat", "clar", "brillant", "solució"],
          incorrectWords: ["dormitori", "taula", "platja", "carreteres", "estiu", "amics", "setmana", "nota", "informació", "llop"]
        },
        {
          emoji: "🌺",
          correctWords: ["flor", "bonic", "natura", "rosa", "jardí", "perfum", "primavera", "colorit", "fragància"],
          incorrectWords: ["gas", "pi", "ballar", "gos (o ca)", "músic", "avió", "horari", "vida", "lloc", "cabell"]
        },
        {
          emoji: "🦁",
          correctWords: ["lleó", "animal", "felí", "ferotge", "carnívor"],
          incorrectWords: ["casa", "telèfon", "mà", "plaça", "cançó", "oceà", "bolet", "matí", "sorra", "robòtic"]
        },
        {
          emoji: "🍦",
          correctWords: ["gelat", "fred", "dolç", "cucurutxo", "congelat"],
          incorrectWords: ["cua", "silenci", "pressa", "història", "mitja", "calor", "sort", "producte", "saldo"]
        },
        {
          emoji: "📚",
          correctWords: ["llibre", "lectura", "educació", "coneixement", "llegir", "novel·la"],
          incorrectWords: ["bàndol", "xiclet", "gos (o ca)", "viatge", "natura", "estiu", "lleig", "negat", "mercat", "força"]
        },
        {
          emoji: "🏖️",
          correctWords: ["platja", "vacances", "mar", "sol", "relaxant", "descans", "sorra (o arena)", "banyador", "estiu"],
          incorrectWords: ["cotxe", "sabata", "vespre", "curiositat", "drama", "passatge", "ràdio", "muntanya", "mapa (o carta)", "gimnàs"]
        },
        {
          emoji: "🍿",
          correctWords: ["crispetes", "menjar", "roses"],
          incorrectWords: ["altura", "cel", "últim", "històric", "biblioteca", "trànsit", "golf", "estudi", "feina"]
        },
        {
          emoji: "✈️",
          correctWords: ["avió", "volar", "viatge", "viatjar", "aeroport", "vacances"],
          incorrectWords: ["bossa", "fort", "núvol", "dibuix", "pluja", "memòria", "casa", "mar", "mà", "cançó"]
        },
        {
          emoji: "🎉",
          correctWords: ["festa", "celebració", "diversió", "alegria", "aniversari", "sorpreses", "gresca"],
          incorrectWords: ["sol", "terra", "curs", "peça", "paisatge", "escola", "cafè", "treballar", "direcció"]
        },
        {
          emoji: "🤔",
          correctWords: ["pensar", "reflexió", "dubte", "pregunta", "idea", "solució", "incertesa", "curiositat"],
          incorrectWords: ["tornada", "roig", "arbre", "sorra", "dissabte", "política", "estiu", "joc", "primavera", "llibre"]
        }
      
  ];
  