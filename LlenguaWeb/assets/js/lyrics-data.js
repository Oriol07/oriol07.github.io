const songs = {
    "bonDia": {
      videoId: "lUWqelFPKCs",
      phrases: [
        {
          text: "La vella Montserrat ____ el barri a cops d'escombra tot cantant\nles primeres persianes s'obren feixugues badallant.",
          answer: "desperta",
          startTime: 18,
          endTime: 33
        },
        {
          text: "Rere el vidre entelat el cafeter assegura que no era penal\ni es desfà la ____ igual que el sucre del tallat.",
          answer: "conversa",
          startTime: 33,
          endTime: 47
        },
        {
          text: "Bon dia, ningú ho ha demanat però ____ bon dia, damunt els caps un sol ben insolent il·lumina descarat tot l'espectacle de la gent.",
          answer: "fa",
          startTime: 47,
          endTime: 63
        },
        {
          text: "Al bell ____ de la plaça la peixatera pren paciència amb la Consol que remuga i regala grans bafarades d'alcohol.",
          answer: "mig",
          startTime: 77,
          endTime: 94
        },
        {
          text: "I al pedrís reposant l'avi Josep no es deixa perdre cap ____ i amb l'esguard es pregunta quants dies més tinc de regal.",
          answer: "detall",
          startTime: 94,
          endTime: 110
        },
        {
          text: "Bon dia, ningú ho ha demanat però fa bon dia, damunt els caps un ____ ben insolent il·lumina descarat tot l’espectacle de la gent.",
          answer: "sol",
          startTime: 110,
          endTime: 126
        }
      ],
      keyWords: [
        {
          word: "La vella... (o el vell...)",
          translations: { 
              en: "The old", 
              sv: "Den gamla", 
              es: "La vieja", 
              it: "Il vecchio (o la vecchia)", 
              fr: "Le vieux (ou la vieille)" 
          },
          description: {
              ca: "Significa que té molts anys.",
              en: "Means someone or something is old.",
              sv: "Betyder att någon eller något är gammalt.",
              es: "Significa que alguien o algo es viejo, que perdura desde hace mucho tiempo.",
              it: "Significa che qualcuno o qualcosa è vecchio, che esiste da molto tempo.",
              fr: "Signifie que quelqu'un ou quelque chose est vieux, qui existe depuis longtemps."
          },
          emoji: "👵 (o 👴)"
        },
        {
            word: "Montserrat",
            translations: { en: "Montserrat", sv: "Montserrat", es: "Montserrat" },
            description: {
                ca: "Un nom popular de dona i també una muntanya famosa a Catalunya.",
                en: "A popular female name and also a famous mountain in Catalonia.",
                sv: "Ett populärt kvinnonamn och också ett känt berg i Katalonien.",
                es: "Un nombre femenino popular y también una montaña famosa en Cataluña."
            },
            emoji: "👱‍♀️ (o ⛰️  )"
        },
        {
          word: "despertar",
          translations: { 
              en: "to wake up", 
              sv: "att vakna", 
              es: "despertar", 
              it: "svegliare", 
              fr: "réveiller" 
          },
          description: {
              ca: "Parar de dormir.",
              en: "To stop sleeping.",
              sv: "Att sluta sova.",
              es: "Dejar de dormir.",
              it: "Smetti di dormire.",
              fr: "Arrête de dormir."
          },
          emoji: "🌞(😴❌)"
        },
        {
        word: "Sol",
        translations: {
            ca: "",
            en: "Sun",
            sv: "Sol",
            it: "Sole",
            es: "Sol",
            fr: "Soleil"
        },
        description: {
          ca: "L'estrella que ens dóna llum.",
          en: "The star that gives us light.",
          sv: "Stjärnan som ger oss ljus.",
          it: "La stella che ci dà luce.",
          es: "La estrella que nos da luz.",
          fr: "L'étoile qui nous donne de la lumière."
        },
        emoji: "☀️"
    },
    {
        word: "Al bell mig",
        translations: {
            ca: "Al bell mig",
            en: "Right in the middle",
            sv: "Precis i mitten",
           it: "Proprio al centro",
            es: "Justo en el medio",
            fr: "Au beau milieu"
        },
        description: {
            ca: "Significa el punt central d'un lloc.",
            en: "Refers to the central point of a place.",
            sv: "Syftar på den centrala punkten av en plats.",
           it: "Si riferisce al punto centrale di un luogo.",
            es: "Se refiere al punto central de un lugar.",
            fr: "Fait référence au point central d'un lieu."
        },
        emoji: "📍"
    },
    {
        word: "Una plaça",
        translations: {
            ca: "Plaça",
            en: "A square",
            sv: "Ett torg",
           it: "Una piazza",
            es: "Una plaza",
            fr: "Une place"
        },
        description: {
            ca: "Un espai obert dins d'un poble o ciutat, sovint per reunir-se.",
            en: "An open area in a town or city, often for gatherings.",
            sv: "Ett öppet område i en stad, ofta för möten.",
           it: "Uno spazio aperto in una città, spesso per raduni.",
            es: "Un espacio abierto en una ciudad, a menudo para reuniones.",
            fr: "Un espace ouvert dans une ville, souvent pour des rassemblements."
        },
        emoji: " "
    },
    {
        word: "Fa bon dia",
        translations: {
            ca: "Fa bon dia",
            en: "It's a nice day",
            sv: "Det är en fin dag",
           it: "È una bella giornata",
            es: "Hace buen día",
            fr: "Il fait beau"
        },
        description: {
            ca: "Una expressió per descriure un dia amb bon temps.",
            en: "An expression to describe a day with good weather.",
            sv: "Ett uttryck för att beskriva en dag med fint väder.",
           it: "Un'espressione per descrivere una giornata con bel tempo.",
            es: "Una expresión para describir un día con buen clima.",
            fr: "Une expression pour décrire une journée avec beau temps."
        },
        emoji: "☀️😊"
    },
    {
        word: "Pedrís",
        translations: {
            ca: "Pedrís",
            en: "Stone bench",
            sv: "Stenbänk",
           it: "Panca di pietra",
            es: "Banco de piedra",
            fr: "Banc en pierre"
        },
        description: {
            ca: "Un banc fet de pedra, sovint situat en espais públics.",
            en: "A bench made of stone, often found in public spaces.",
            sv: "En bänk gjord av sten, ofta i offentliga områden.",
           it: "Una panchina fatta di pietra, spesso in spazi pubblici.",
            es: "Un banco hecho de piedra, a menudo en espacios públicos.",
            fr: "Un banc en pierre, souvent dans des espaces publics."
        },
        emoji: "🪑"
    },
    {
        word: "Reposar",
        translations: {
            ca: "Reposar",
            en: "Rest",
            sv: "Vila",
           it: "Riposo",
            es: "Descansar",
            fr: "Se reposer"
        },
        description: {
            ca: "Parar per recuperar energia o relaxar-se.",
            en: "To stop to regain energy or relax.",
            sv: "Att stanna för att återhämta energi eller slappna av.",
            it: "Fermarsi per recuperare energia o rilassarsi.",
            es: "Detenerse para recuperar energía o relajarse.",
            fr: "S'arrêter pour reprendre de l'énergie ou se détendre."
        },
        emoji: "😴"
    },
    {
        word: "L'esguard",
        translations: {
            ca: "L'esguard",
            en: "The gaze",
            sv: "Blicken",
           it: "Lo sguardo",
            es: "La mirada",
            fr: "Le regard"
        },
        description: {
            ca: "La manera en què algú mira o observa.",
            en: "The way someone looks or observes.",
            sv: "Hur någon tittar eller observerar.",
            it: "Il modo in cui qualcuno guarda o osserva.",
            es: "La manera en que alguien mira u observa.",
            fr: "La façon dont quelqu'un regarde ou observe."
        },
        emoji: "👀"
    },
    {
      word: "badallant",
      translations: { 
          en: "yawning", 
          sv: "gäspande", 
          es: "bostezando", 
          it: "sbadigliando", 
          fr: "baillant" 
      },
      description: {
          ca: "Quan algú obre la boca de cansament o avorriment.",
          en: "When someone opens their mouth from tiredness or boredom.",
          sv: "När någon öppnar munnen på grund av trötthet eller tristess.",
          es: "Cuando alguien abre la boca por cansancio o aburrimiento.",
          it: "Quando qualcuno apre la bocca per stanchezza o noia.",
          fr: "Quand quelqu'un ouvre la bouche à cause de la fatigue ou de l'ennui."
      },
      emoji: "🥱"
    },
    {
      word: "vidre entelat",
      translations: { 
          en: "foggy glass", 
          sv: "immigt glas", 
          es: "vidrio empañado", 
          it: "vetro appannato", 
          fr: "verre embué" 
      },
      description: {
          ca: "Un vidre cobert de vapor que impedeix veure clarament.",
          en: "A glass covered in steam that obstructs visibility.",
          sv: "Ett glas täckt av ånga som hindrar sikten.",
          es: "Un vidrio cubierto de vapor que dificulta la visibilidad.",
          it: "Un vetro coperto di vapore che ostacola la visibilità.",
          fr: "Un verre couvert de vapeur qui empêche la visibilité."
      },
      emoji: "🌫️🪟"
    },
    {
      word: "cafeter",
      translations: { 
          en: "barista", 
          sv: "barista", 
          es: "camarero (de cafetería)", 
          it: "barista", 
          fr: "barista" 
      },
      description: {
          ca: "Una persona que serveix begudes, especialment cafè, en una cafeteria.",
          en: "A person who serves drinks, especially coffee, in a coffee shop.",
          sv: "En person som serverar drycker, särskilt kaffe, på ett kafé.",
          es: "Una persona que sirve bebidas, especialmente café, en una cafetería.",
          it: "Una persona che serve bevande, specialmente caffè, in un bar.",
          fr: "Une personne qui sert des boissons, notamment du café, dans un café."
      },
      emoji: "🤵☕"
    },
    {
      word: "il·lumina descarat",
      translations: { 
          en: "shines boldly", 
          sv: "lyser djärvt", 
          es: "ilumina descaradamente", 
          it: "illumina sfacciatamente", 
          fr: "illumine avec audace" 
      },
      description: {
          ca: "Quan alguna cosa brilla d'una manera cridanera o atrevida.",
          en: "When something shines in a striking or daring way.",
          sv: "När något lyser på ett iögonfallande eller djärvt sätt.",
          es: "Cuando algo brilla de manera llamativa o atrevida.",
          it: "Quando qualcosa splende in modo vistoso o audace.",
          fr: "Quand quelque chose brille de manière frappante ou audacieuse."
      },
      emoji: "✨☀️"
  },

    
  ]
},
  
    "llumFocDestruccio": {
      videoId: "MCZjn2MUvaI",
      phrases: [
        { text: "Volant, volant, ____ amunt. Sempre amunt!", answer: "sempre", startTime: 16, endTime: 22 },
        { text: "En anar, tu amb mi, ____ dos junts lluitarem.", answer: "tots", startTime: 22, endTime: 29 },
        { text: "Volant, volant, sempre amunt. Sempre amunt! Na, na na. Mai un ____ sol no deixarem.", answer: "amic", startTime: 29, endTime: 41 },
        { text: "____ podem fer esclatar un iceberg", answer: "junts", startTime: 41, endTime: 47 },
        { text: "Unint les ____ mans, fem front al mal que ens persegueix.", answer: "nostres", startTime: 47, endTime: 55 },
        { text: "Llum, foc, destrucció! El món pot ____ només una runa: això no ho consentirem!", answer: "ser", startTime: 55, endTime: 68 },
        { text: "Llum, foc, destrucció! Els ____ de sempre hem de vèncer lluitant fins a la fi.", answer: "enemics", startTime: 68, endTime: 78 },
        { text: "Llum, foc, destrucció! La ____ a tot l'Univers ha de néixer. Hem de fer un món molt més just.", answer: "pau", startTime: 77, endTime: 90 },
        { text: "Llum, foc, destrucció! La força de la ____ mai no morirà. No morirà mai, mai, mai, mai, mai...", answer: "veritat", startTime: 90, endTime: 112 },
        
      ],
      keyWords: [
        {
          word: "volant",
          translations: { 
              en: "flying", 
              sv: "flygande", 
              es: "volando", 
              it: "volando", 
              fr: "volant" 
          },
          description: {
              ca: "Moure's per l'aire sense tocar el terra.",
              en: "Moving through the air without touching the ground.",
              sv: "Röra sig genom luften utan att röra marken.",
              es: "Moverse por el aire sin tocar el suelo.",
              it: "Muoversi nell'aria senza toccare il suolo.",
              fr: "Se déplacer dans l'air sans toucher le sol."
          },
          emoji: "✈️🕊️"
      },
        {
            word: "sempre amunt",
            translations: { 
                en: "always upwards", 
                sv: "alltid uppåt", 
                es: "siempre hacia arriba", 
                it: "sempre in alto", 
                fr: "toujours en haut" 
            },
            description: {
                ca: "Expressió per indicar que s’ha d’aspirar o pujar sempre.",
                en: "An expression to indicate striving or going up always.",
                sv: "Ett uttryck för att alltid sträva eller gå uppåt.",
                es: "Una expresión para indicar que siempre hay que aspirar o subir.",
                it: "Un'espressione per indicare che bisogna sempre aspirare o salire.",
                fr: "Une expression pour indiquer qu'il faut toujours aspirer ou monter."
            },
            emoji: "♾️⬆️"
        },
        {
            word: "lluitarem",
            translations: { 
                en: "we will fight", 
                sv: "vi ska kämpa", 
                es: "lucharemos", 
                it: "lotteremo", 
                fr: "nous nous battrons" 
            },
            description: {
                ca: "Vol dir que es farà tot el possible per superar un obstacle.",
                en: "Means doing everything possible to overcome an obstacle.",
                sv: "Betyder att göra allt möjligt för att övervinna ett hinder.",
                es: "Significa hacer todo lo posible para superar un obstáculo.",
                it: "Significa fare tutto il possibile per superare un ostacolo.",
                fr: "Signifie faire tout son possible pour surmonter un obstacle."
            },
            emoji: "⚔️🤼"
        },
        {
            word: "amics",
            translations: { 
                en: "friends", 
                sv: "vänner", 
                es: "amigos", 
                it: "amici", 
                fr: "amis" 
            },
            description: {
                ca: "Persones que mantenen una relació d'afecte i confiança.",
                en: "People who share a relationship of affection and trust.",
                sv: "Personer som delar en relation av tillgivenhet och förtroende.",
                es: "Personas que comparten una relación de afecto y confianza.",
                it: "Persone che condividono una relazione di affetto e fiducia.",
                fr: "Personnes qui partagent une relation d'affection et de confiance."
            },
            emoji: "🧑🏼‍🤝‍🧑🏻"
        },
        {
            word: "junts",
            translations: { 
                en: "together", 
                sv: "tillsammans", 
                es: "juntos", 
                it: "insieme", 
                fr: "ensemble" 
            },
            description: {
                ca: "Quan dues o més persones fan alguna cosa alhora o col·laboren.",
                en: "When two or more people do something at the same time or collaborate.",
                sv: "När två eller fler personer gör något samtidigt eller samarbetar.",
                es: "Cuando dos o más personas hacen algo al mismo tiempo o colaboran.",
                it: "Quando due o più persone fanno qualcosa contemporaneamente o collaborano.",
                fr: "Quand deux ou plusieurs personnes font quelque chose en même temps ou collaborent."
            },
            emoji: "👫(o 👩🏻‍❤️‍👩🏻, 👨‍👩‍👧‍👦)"
        },
        {
            word: "les nostres mans",
            translations: { 
                en: "our hands", 
                sv: "våra händer", 
                es: "nuestras manos", 
                it: "le nostre mani", 
                fr: "nos mains" 
            },
            description: {
                ca: "Les mans que utilitzem per unir forces i enfrontar-nos als desafiaments junts.",
                en: "The hands we use to join forces and face challenges together.",
                sv: "Händerna vi använder för att förena krafter och möta utmaningar tillsammans.",
                es: "Las manos que usamos para unir fuerzas y enfrentar desafíos juntos.",
                it: "Le mani che usiamo per unire le forze e affrontare le sfide insieme.",
                fr: "Les mains que nous utilisons pour unir nos forces et relever les défis ensemble."
            },
            emoji: "👐🤝"
        },
        {
            word: "runa",
            translations: { 
                en: "ruins", 
                sv: "ruiner", 
                es: "ruina", 
                it: "rovine", 
                fr: "ruines" 
            },
            description: {
                ca: "El que queda d'alguna cosa que ha estat destruïda.",
                en: "What remains of something that has been destroyed.",
                sv: "Vad som finns kvar av något som har förstörts.",
                es: "Lo que queda de algo que ha sido destruido.",
                it: "Ciò che rimane di qualcosa che è stato distrutto.",
                fr: "Ce qui reste de quelque chose qui a été détruit."
            },
            emoji: "🏚"
        },
        {
            word: "enemics de sempre",
            translations: { 
                en: "eternal enemies", 
                sv: "eviga fiender", 
                es: "enemigos de siempre", 
                it: "nemici di sempre", 
                fr: "ennemis de toujours" 
            },
            description: {
                ca: "Aquells amb qui hi ha hagut conflictes des de fa molt de temps.",
                en: "Those with whom there have been conflicts for a long time.",
                sv: "De som man haft konflikter med under lång tid.",
                es: "Aquellos con los que ha habido conflictos durante mucho tiempo.",
                it: "Coloro con cui ci sono stati conflitti da molto tempo.",
                fr: "Ceux avec qui il y a eu des conflits depuis longtemps."
            },
            emoji: "😡⚔️😡"
        },
        {
            word: "la pau",
            translations: { 
                en: "peace", 
                sv: "fred", 
                es: "la paz", 
                it: "la pace", 
                fr: "la paix" 
            },
            description: {
                ca: "L'absència de conflictes i un estat de tranquil·litat.",
                en: "The absence of conflict and a state of tranquility.",
                sv: "Frånvaro av konflikter och ett tillstånd av lugn.",
                es: "La ausencia de conflictos y un estado de tranquilidad.",
                it: "L'assenza di conflitti e uno stato di tranquillità.",
                fr: "L'absence de conflits et un état de tranquillité."
            },
            emoji: "☮️🕊️"
        },
        {
            word: "la veritat",
            translations: { 
                en: "the truth", 
                sv: "sanningen", 
                es: "la verdad", 
                it: "la verità", 
                fr: "la vérité" 
            },
            description: {
                ca: "El que és real o correcte, sense enganys.",
                en: "What is real or correct, without lies.",
                sv: "Vad som är verkligt eller korrekt, utan lögner.",
                es: "Lo que es real o correcto, sin mentiras.",
                it: "Ciò che è reale o corretto, senza bugie.",
                fr: "Ce qui est réel ou correct, sans mensonges."
            },
            emoji: "✅"
        },
        {
            word: "esclatar",
            translations: { 
                en: "explode", 
                sv: "explodera", 
                es: "estallar", 
                it: "esplodere", 
                fr: "exploser" 
            },
            description: {
                ca: "Fer una explosió o trencar-se bruscament amb força.",
                en: "To make an explosion or break suddenly with force.",
                sv: "Att göra en explosion eller bryta plötsligt med kraft.",
                es: "Hacer una explosión o romperse bruscamente con fuerza.",
                it: "Fare un'esplosione o rompersi improvvisamente con forza.",
                fr: "Faire une explosion ou se briser soudainement avec force."
            },
            emoji: "💥"
        },
        {
          word: "front",
          translations: { 
              en: "front", 
              sv: "front", 
              es: "frente", 
              it: "fronte", 
              fr: "front" 
          },
          description: {
              ca: "La part que està més avançada, sovint associada a una línia de combat.",
              en: "The part that is most advanced, often associated with a line of combat.",
              sv: "Den del som är längst fram, ofta förknippad med en stridslinje.",
              es: "La parte más avanzada, a menudo asociada a una línea de combate.",
              it: "La parte più avanzata, spesso associata a una linea di combattimento.",
              fr: "La partie la plus avancée, souvent associée à une ligne de combat."
          },
          emoji: "🛡️"
        },
        {
          word: "un món més just",
          translations: { 
              en: "a fairer world", 
              sv: "en rättvisare värld", 
              es: "un mundo más justo", 
              it: "un mondo più giusto", 
              fr: "un monde plus juste" 
          },
          description: {
              ca: "Un món on totes les persones tenen els mateixos drets i oportunitats.",
              en: "A world where everyone has equal rights and opportunities.",
              sv: "En värld där alla har lika rättigheter och möjligheter.",
              es: "Un mundo donde todos tienen los mismos derechos y oportunidades.",
              it: "Un mondo in cui tutti hanno gli stessi diritti e opportunità.",
              fr: "Un monde où tout le monde a les mêmes droits et opportunités."
          },
          emoji: "🌍 + ⚖️"
        },{
          word: "la força",
          translations: { 
              en: "the strength", 
              sv: "styrkan", 
              es: "la fuerza", 
              it: "la forza", 
              fr: "la force" 
          },
          description: {
              ca: "La capacitat de fer coses difícils o resistir.",
              en: "The ability to do difficult things or withstand pressure.",
              sv: "Förmågan att göra svåra saker eller stå emot tryck.",
              es: "La capacidad de hacer cosas difíciles o resistir.",
              it: "La capacità di fare cose difficili o resistere.",
              fr: "La capacité à faire des choses difficiles ou à résister."
          },
          emoji: "💪"
      },
      {
          word: "l'univers",
          translations: { 
              en: "the universe", 
              sv: "universum", 
              es: "el universo", 
              it: "l'universo", 
              fr: "l'univers" 
          },
          description: {
              ca: "Tot el conjunt d'estrelles, planetes i galàxies.",
              en: "The entire collection of stars, planets, and galaxies.",
              sv: "Den totala samlingen av stjärnor, planeter och galaxer.",
              es: "La totalidad de estrellas, planetas y galaxias.",
              it: "L'insieme di stelle, pianeti e galassie.",
              fr: "L'ensemble des étoiles, planètes et galaxies."
          },
          emoji: "🌌"
      },
      {
          word: "un iceberg",
          translations: { 
              en: "an iceberg", 
              sv: "ett isberg", 
              es: "un iceberg", 
              it: "un iceberg", 
              fr: "un iceberg" 
          },
          description: {
              ca: "Una gran massa de gel flotant al mar.",
              en: "A large mass of floating ice in the sea.",
              sv: "En stor ismassa som flyter på havet.",
              es: "Una gran masa de hielo flotando en el mar.",
              it: "Una grande massa di ghiaccio galleggiante nel mare.",
              fr: "Une grande masse de glace flottant dans la mer."
          },
          emoji: "🧊🌊"
      },
      {
          word: "el mal que ens persegueix",
          translations: { 
              en: "the evil that chases us", 
              sv: "det onda som jagar oss", 
              es: "el mal que nos persigue", 
              it: "il male che ci perseguita", 
              fr: "le mal qui nous poursuit" 
          },
          description: {
              ca: "Una força negativa que intenta afectar-nos.",
              en: "A negative force that tries to affect us.",
              sv: "En negativ kraft som försöker påverka oss.",
              es: "Una fuerza negativa que intenta afectarnos.",
              it: "Una forza negativa che cerca di colpirci.",
              fr: "Une force négative qui essaie de nous atteindre."
          },
          emoji: "🕷️💀👣"
      }
    ]
    },
    "jugular":
    {
      videoId: "HekwACr4CHc",
      phrases: [
        { text: "Soc un moc podrit en un lloc ____. Maquino atordit rere d'un menhir.", answer: "avorrit", startTime: 12, endTime: 17 },
        { text: "Poc em crec la ____. Falta honestedat. Estic en captivitat. Dissociant la veritat.", answer: "realitat", startTime: 17, endTime: 21 },
        { text: "Però tu tranquil. És ____ riure's de la vida que morir vivint. Tots abduïts. La &quot;movie&quot; m'atabala però jo crec en el destí.", answer: "millor", startTime: 21, endTime: 29 },
        { text: "Una aparició m'il·lumina a mitja ____. Fem alguna cosa que aquesta &quot;party&quot; a pesta. Papapara el paripé o em tiraré per la finestra. Tranqui Triqui titu tranqui que ara això s'arregla.", answer: "festa", startTime: 29, endTime: 37 },
        { text: "Una revelació m'obre els ulls a mitja festa. ____ cerimònia és avorrida i somnolenta. I ara dinamitem la trama perquè deixi de ser un trauma. La ridícula vetllada d'un sol ús i fraudulenta.", answer: "aquesta", startTime: 37, endTime: 45 },
        { text: "Anem a encendre la ____. Canviaré aquesta festa. La moguda és aquesta. Incrementa la &quot;music&quot;. Ja sents la potència.", answer: "metxa", startTime: 45, endTime: 53 },
        { text: "Anem a encendre la metxa. Canviaré aquesta festa. La ____ és aquesta. Que ara arribo, Joe. I te la lio amb la nova Triqui", answer: "moguda", startTime: 53, endTime: 60 },
        { text: "Bomb, bomb, bomb, bomb, bomb, bomb track. A ____ jugu, jugu, jugu, jugular", answer: "la", startTime: 60, endTime: 77 },
        { text: "Perseguint la ____ buscant la teva intimitat. Pura és eclipsada per un món esclavitzat. No ballaré ofuscat per una 'melody' trillada. Al ritme de la batxata, barata, ballada per papes i mames que no saben com cuidar-la", answer: "nit", startTime: 90, endTime: 103 },
        { text: "Hem vingut a liar un &quot;chicken&quot; (Joe). S'ha escapat el teu ____ (Joe). Deixa de donar la nota (Joe). Una ronda de &quot;White Russian&quot; (Joe)", answer: "pollastre", startTime: 103, endTime: 112 },
        { text: "Una aparició m'il·lumina a mitja festa. ____ alguna cosa que aquesta &quot;party&quot; a pesta. Papapara el paripé o em tiraré per la finestra. Tranqui Triqui titu tranqui que ara això s'arregla.", answer: "fem", startTime: 112, endTime: 121 },
        { text: "Una revelació m'obre els ulls a mitja festa. ____ cerimònia és avorrida i somnolenta. I ara dinamitem la trama perquè deixi de ser un trauma. La ridícula vetllada d'un sol ús i fraudulenta.", answer: "aquesta", startTime: 121, endTime: 129 },
        { text: "Anem a encendre la metxa. Canviaré aquesta festa. La moguda és aquesta. ____ la &quot;music&quot;. Ja sents la potència.", answer: "incrementa", startTime: 129, endTime: 137 },
        { text: "Anem a encendre la metxa. Canviaré aquesta festa. La moguda és aquesta. Que ____ arribo, Joe. I te la lio amb la nova Triqui", answer: "ara", startTime: 137, endTime: 145 },
        { text: "Bomb, bomb, bomb, bomb, bomb, bomb track. ____ la jugu, jugu, jugu, jugular", answer: "a", startTime: 145, endTime: 170 },
      ],
      keyWords: [
        {
            word: "moc podrit",
            translations: { 
                en: "rotten snot", 
                sv: "rutten snor", 
                es: "moco podrido", 
                it: "muco marcio", 
                fr: "morve pourri" 
            },
            description: {
                ca: "Un líquid desagradable i en mal estat del nas.",
                en: "A gross, rotten liquid from the nose.",
                sv: "En äcklig, rutten vätska från näsan.",
                es: "Un líquido desagradable y podrido de la nariz.",
                it: "Un liquido disgustoso e marcio dal naso.",
                fr: "Un liquide dégoûtant et pourri du nez."
            },
            emoji: "🤧💀"
        },
        {
            word: "avorrit",
            translations: { 
                en: "boring", 
                sv: "tråkig", 
                es: "aburrido", 
                it: "noioso", 
                fr: "ennuyeux" 
            },
            description: {
                ca: "Alguna cosa que no és interessant o que cansa.",
                en: "Something that is not interesting or tiresome.",
                sv: "Något som inte är intressant eller tröttsamt.",
                es: "Algo que no es interesante o que cansa.",
                it: "Qualcosa che non è interessante o che annoia.",
                fr: "Quelque chose qui n'est pas intéressant ou qui fatigue."
            },
            emoji: "🥱"
        },
        {
            word: "realitat",
            translations: { 
                en: "reality", 
                sv: "verklighet", 
                es: "realidad", 
                it: "realtà", 
                fr: "réalité" 
            },
            description: {
                ca: "Allò que és real i no imaginat.",
                en: "What is real and not imagined.",
                sv: "Vad som är verkligt och inte påhittat.",
                es: "Lo que es real y no imaginado.",
                it: "Ciò che è reale e non immaginato.",
                fr: "Ce qui est réel et non imaginé."
            },
            emoji: "🌍✅"
        },
        {
            word: "millor",
            translations: { 
                en: "better", 
                sv: "bättre", 
                es: "mejor", 
                it: "meglio", 
                fr: "mieux" 
            },
            description: {
                ca: "Alguna cosa de més qualitat o més bona que una altra.",
                en: "Something of higher quality or better than another.",
                sv: "Något med högre kvalitet eller bättre än något annat.",
                es: "Algo de mayor calidad o mejor que otra cosa.",
                it: "Qualcosa di qualità superiore o migliore di un'altra cosa.",
                fr: "Quelque chose de meilleure qualité ou mieux qu'une autre."
            },
            emoji: "⬆️✨"
        },
        {
            word: "festa",
            translations: { 
                en: "party", 
                sv: "fest", 
                es: "fiesta", 
                it: "festa", 
                fr: "fête" 
            },
            description: {
                ca: "Una reunió de gent per celebrar o divertir-se.",
                en: "A gathering of people to celebrate or have fun.",
                sv: "En samling människor för att fira eller ha kul.",
                es: "Una reunión de personas para celebrar o divertirse.",
                it: "Un raduno di persone per celebrare o divertirsi.",
                fr: "Un rassemblement de personnes pour célébrer ou s'amuser."
            },
            emoji: "🎉💃🕺"
        },
        {
            word: "metxa",
            translations: { 
                en: "fuse", 
                sv: "stubin", 
                es: "mecha", 
                it: "miccia", 
                fr: "mèche" 
            },
            description: {
                ca: "Una corda que s'encén per provocar una explosió.",
                en: "A cord that is lit to cause an explosion.",
                sv: "Ett snöre som tänds för att orsaka en explosion.",
                es: "Una cuerda que se enciende para provocar una explosión.",
                it: "Una corda che si accende per provocare un'esplosione.",
                fr: "Une corde qui s'allume pour provoquer une explosion."
            },
            emoji: "🧨"
        },
        {
            word: "pollastre",
            translations: { 
                en: "chicken", 
                sv: "kyckling", 
                es: "pollo", 
                it: "pollo", 
                fr: "poulet" 
            },
            description: {
                ca: "Un animal que és una font comú d'aliment.",
                en: "An animal that is a common source of food.",
                sv: "Ett djur som är en vanlig matkälla.",
                es: "Un animal que es una fuente común de alimento.",
                it: "Un animale che è una fonte comune di cibo.",
                fr: "Un animal qui est une source commune de nourriture."
            },
            emoji: "🐔 (o 🍗)"
        },
        {
            word: "incrementa",
            translations: { 
                en: "increase", 
                sv: "öka", 
                es: "incrementa", 
                it: "incrementa", 
                fr: "augmente" 
            },
            description: {
                ca: "Fer més gran en quantitat o intensitat.",
                en: "To make bigger in quantity or intensity.",
                sv: "Att göra större i mängd eller intensitet.",
                es: "Hacer más grande en cantidad o intensidad.",
                it: "Rendere più grande in quantità o intensità.",
                fr: "Rendre plus grand en quantité ou intensité."
            },
            emoji: "📈"
        },
        {
            word: "jugular",
            translations: { 
                en: "jugular", 
                sv: "jugular", 
                es: "yugular", 
                it: "giugulare", 
                fr: "jugulaire" 
            },
            description: {
                ca: "Una vena gran i important al coll.",
                en: "A large and important vein in the neck.",
                sv: "En stor och viktig ven i halsen.",
                es: "Una vena grande e importante en el cuello.",
                it: "Una vena grande e importante nel collo.",
                fr: "Une veine grande et importante dans le cou."
            },
            emoji: "🩸"
        }
    ]
    
  
    }
    ,
  
    "MaiNevaFades": {
      videoId: "L6xK0CaLWIU",
      phrases: [
        { text: "Oh, te ____ i me desplom. T'estim, t'estim.", answer: "mir", startTime: 0, endTime: 10 },
        { text: "Si me mires, me desplom. Amb jo no has de ser un cabró. Agafats de sa ____, un passeig per Portocolom", answer: "maneta", startTime: 19, endTime: 27 },
        { text: "Primer tu no ets es segon. Ho feim bèstia com Ramon. Religiós i me confon, en el ____ i digue'm. On som? Fes-me besos que me fonc. On som? Si me mires me desplom.", answer: "llit", startTime: 26, endTime: 38 },
        { text: "Oh, te mir i me desplom. No és broma que t'estim a totes ____. Pens en tu cada segon. Pens en tu, pens en tu, pens en tu, eh.", answer: "hores", startTime: 37, endTime: 50 },
        { text: "Oh, tu que ets qui m'ha ____ el món. Oh, amb aquesta barba de Pau Debon", answer: "ensenyat", startTime: 50, endTime: 60 },
        { text: "Flors, bombons, cançons, regals. Un ____ com es d'abans. Flors, bombons, cançons, regals. 'Si me mires me desfaig'", answer: "amor", startTime: 60, endTime: 66 },
        { text: "Si mos miren és igual. Si al final mos estimam. Diuen que ____ ho faran. Però són uns homòfobs i fan mal. Sempre que mos miren quan mos besam. I és que som noltros contra el món 🏳️‍🌈", answer: "mai", startTime: 65, endTime: 78 },
        { text: "Oh, te mir i me desplom. No és ____ que t'estim a totes hores. Pens en tu cada segon. Pens en tu, pens en tu, pens en tu, eh.", answer: "broma", startTime: 77, endTime: 89 },
        { text: "Oh, tu que ets qui m'ha ensenyat el món. Oh, amb aquesta ____ de Pau Debon", answer: "barba", startTime: 89, endTime: 100 },
        { text: "Mai neva a Ciutat. Mai neva a Ciutat. Mai neva a Ciutat. Però tu i jo mos ____ ", answer: "besam", startTime: 100, endTime: 113 },
        { text: "Oh, te mir i me desplom. No és broma que t'estim a ____ hores. Pens en tu cada segon.", answer: "totes", startTime: 113, endTime: 121 },
        { text: "Un ____ per Portocolom. Amb aquesta barba de Pau Debon. I és que som noltros contra el món.", answer: "passeig", startTime: 127, endTime: 140 },
    
      ], 
      keyWords: [
        {
            word: "mirar",
            translations: { 
                en: "to look", 
                sv: "att titta på", 
                es: "observar", 
                it: "guardare", 
                fr: "regarder" 
            },
            description: {
                ca: "Acció de fixar la vista en algú o alguna cosa.",
                en: "The action of focusing your sight on someone or something.",
                sv: "Handling att fästa blicken på någon eller något.",
                es: "La acción de fijar la vista en alguien o algo.",
                it: "L'azione di focalizzare lo sguardo su qualcuno o qualcosa.",
                fr: "L'action de fixer son regard sur quelqu'un ou quelque chose."
            },
            emoji: "👀"
        },
        {
            word: "maneta",
            translations: { 
                en: "little hand", 
                sv: "liten hand", 
                es: "manita", 
                it: "manina", 
                fr: "petite main" 
            },
            description: {
                ca: "Una mà petita, sovint usada per indicar tendresa.",
                en: "A small hand, often used to indicate tenderness.",
                sv: "En liten hand, ofta använd för att visa ömhet.",
                es: "Una mano pequeña, a menudo usada para indicar ternura.",
                it: "Una piccola mano, spesso usata per indicare tenerezza.",
                fr: "Une petite main, souvent utilisée pour indiquer de la tendresse."
            },
            emoji: "✋"
        },
        {
            word: "llit",
            translations: { 
                en: "bed", 
                sv: "säng", 
                es: "cama", 
                it: "letto", 
                fr: "lit" 
            },
            description: {
                ca: "Moble on es dorm o descansa.",
                en: "A piece of furniture where one sleeps or rests.",
                sv: "En möbel där man sover eller vilar.",
                es: "Un mueble donde se duerme o descansa.",
                it: "Un mobile dove si dorme o ci si riposa.",
                fr: "Un meuble où l'on dort ou se repose."
            },
            emoji: "🛏️"
        },
        {
            word: "hores",
            translations: { 
                en: "hours", 
                sv: "timmar", 
                es: "horas", 
                it: "ore", 
                fr: "heures" 
            },
            description: {
                ca: "Unitats de temps que equivalen a 60 minuts.",
                en: "Units of time equal to 60 minutes.",
                sv: "Tidsenheter som motsvarar 60 minuter.",
                es: "Unidades de tiempo equivalentes a 60 minutos.",
                it: "Unità di tempo pari a 60 minuti.",
                fr: "Unités de temps égales à 60 minutes."
            },
            emoji: "⏳🕒"
        },
        {
            word: "ensenyat",
            translations: { 
                en: "taught", 
                sv: "lärt", 
                es: "enseñado", 
                it: "insegnato", 
                fr: "enseigné" 
            },
            description: {
                ca: "Mostrar a algú com fer o entendre alguna cosa.",
                en: "To show someone how to do or understand something.",
                sv: "Att visa någon hur man gör eller förstår något.",
                es: "Mostrar a alguien cómo hacer o entender algo.",
                it: "Mostrare a qualcuno come fare o capire qualcosa.",
                fr: "Montrer à quelqu'un comment faire ou comprendre quelque chose."
            },
            emoji: "📚👩‍🏫"
        },
        {
            word: "amor",
            translations: { 
                en: "love", 
                sv: "kärlek", 
                es: "amor", 
                it: "amore", 
                fr: "amour" 
            },
            description: {
                ca: "Sentiment intens d'afecte cap a algú.",
                en: "An intense feeling of affection for someone.",
                sv: "En intensiv känsla av tillgivenhet för någon.",
                es: "Un sentimiento intenso de afecto hacia alguien.",
                it: "Un sentimento intenso di affetto verso qualcuno.",
                fr: "Un sentiment intense d'affection pour quelqu'un."
            },
            emoji: "❤️"
        },
        {
            word: "mai",
            translations: { 
                en: "never", 
                sv: "aldrig", 
                es: "nunca", 
                it: "mai", 
                fr: "jamais" 
            },
            description: {
                ca: "Indica que alguna cosa no succeeix en cap moment.",
                en: "Indicates that something does not happen at any time.",
                sv: "Indikerar att något inte sker någon gång.",
                es: "Indica que algo no sucede en ningún momento.",
                it: "Indica che qualcosa non accade in nessun momento.",
                fr: "Indique que quelque chose ne se produit à aucun moment."
            },
            emoji: "🚫"
        },
        {
            word: "broma",
            translations: { 
                en: "joke", 
                sv: "skämt", 
                es: "broma", 
                it: "scherzo", 
                fr: "blague" 
            },
            description: {
                ca: "Una expressió o acció per fer riure o entretenir.",
                en: "An expression or action meant to make someone laugh or entertain.",
                sv: "Ett uttryck eller en handling avsedd att få någon att skratta eller roa sig.",
                es: "Una expresión o acción destinada a hacer reír o entretener.",
                it: "Un'espressione o azione per far ridere o intrattenere.",
                fr: "Une expression ou action destinée à faire rire ou divertir."
            },
            emoji: "😂"
        },
        {
            word: "barba",
            translations: { 
                en: "beard", 
                sv: "skägg", 
                es: "barba", 
                it: "barba", 
                fr: "barbe" 
            },
            description: {
                ca: "Pèl que creix a la cara, sobretot a la barbeta.",
                en: "Hair that grows on the face, especially on the chin.",
                sv: "Hår som växer i ansiktet, särskilt på hakan.",
                es: "Pelo que crece en la cara, especialmente en la barbilla.",
                it: "Capelli che crescono sul viso, soprattutto sul mento.",
                fr: "Cheveux qui poussent sur le visage, surtout sur le menton."
            },
            emoji: "🧔"
        },
        {
            word: "besar",
            translations: { 
                en: "to kiss", 
                sv: "att kyssa", 
                es: "besar", 
                it: "baciare", 
                fr: "embrasser" 
            },
            description: {
                ca: "Acció de tocar algú amb els llavis per mostrar afecte.",
                en: "The act of touching someone with the lips to show affection.",
                sv: "Handlingen att röra någon med läpparna för att visa tillgivenhet.",
                es: "El acto de tocar a alguien con los labios para mostrar afecto.",
                it: "L'atto di toccare qualcuno con le labbra per mostrare affetto.",
                fr: "L'acte de toucher quelqu'un avec les lèvres pour montrer de l'affection."
            },
            emoji: "💋"
        },
        {
            word: "Ciutat",
            translations: { 
                en: "Palma (City)", 
                sv: "Palma (stad)", 
                es: "Palma (Ciudad)", 
                it: "Palma (Città)", 
                fr: "Palma (Ville)" 
            },
            description: {
                ca: "Nom col·loquial per referir-se a Palma, la capital de Mallorca.",
                en: "A colloquial name referring to Palma, the capital of Mallorca.",
                sv: "Ett vardagligt namn som syftar på Palma, Mallorcas huvudstad.",
                es: "Un nombre coloquial para referirse a Palma, la capital de Mallorca.",
                it: "Un nome colloquiale per riferirsi a Palma, la capitale di Maiorca.",
                fr: "Un nom familier pour désigner Palma, la capitale de Majorque."
            },
            emoji: "🏙️"
        },
        {
            word: "passeig",
            translations: { 
                en: "stroll", 
                sv: "promenad", 
                es: "paseo", 
                it: "passeggiata", 
                fr: "promenade" 
            },
            description: {
                ca: "Caminar tranquil·lament, sovint per gaudir del paisatge.",
                en: "Walking leisurely, often to enjoy the scenery.",
                sv: "Gå lugnt, ofta för att njuta av landskapet.",
                es: "Caminar tranquilamente, a menudo para disfrutar del paisaje.",
                it: "Camminare lentamente, spesso per godersi il paesaggio.",
                fr: "Marcher tranquillement, souvent pour profiter du paysage."
            },
            emoji: "🚶‍♂️"
        },
        {
            word: "T'estim",
            translations: { 
                en: "I love you", 
                sv: "Jag älskar dig", 
                es: "Te amo", 
                it: "Ti amo", 
                fr: "Je t'aime" 
            },
            description: {
                ca: "Valorar molt positivament una persona, sentir-ne afecte. En altres variants: T'estimo, t'estime, t'estimi, te vull bé...",
                en: "It's used to describe all strong feelings of closeness and care between two people, whether those two people are in a romantic relationship or not. When it is used to describe a feeling between members of the same family, it is not romantic.",
                sv: "Används för att beskriva alla starka känslor av närhet och omsorg mellan två personer, oavsett om de är i ett romantiskt förhållande eller inte. När det används för att beskriva känslor mellan familjemedlemmar är det inte romantiskt.",
                es: "Se utiliza para describir todos los sentimientos fuertes de cercanía y cuidado entre dos personas, ya sea que esas dos personas estén en una relación romántica o no. Cuando se usa para describir un sentimiento entre miembros de la misma familia, no es romántico.",
                it: "Viene utilizzato per descrivere tutti i sentimenti forti di vicinanza e cura tra due persone, che siano o meno in una relazione romantica. Quando viene usato per descrivere un sentimento tra membri della stessa famiglia, non è romantico.",
                fr: "C'est utilisé pour décrire tous les sentiments forts de proximité et d'affection entre deux personnes, que ces deux personnes soient ou non dans une relation amoureuse. Lorsqu'il est utilisé pour décrire un sentiment entre des membres de la même famille, ce n'est pas romantique."
            },
            emoji: "🥰👨‍❤️‍👨"
        }
    ]
    },
    "testimoMolt": {
      videoId: "B7QBtUp4GsY",
      phrases: [
        { text: "Anem a recordar una cançó que es ____ &quot;Maite Zaitut&quot; (T'estimo en eusquera)", answer: "diu", startTime: 8, endTime: 13 },
        { text: "De colors són els meus ____, tot i que ja m'he llevat, i la son no ve a veure'm, quan la Lluna s'ha aixecat.", answer: "somnis", startTime: 29, endTime: 37 },
        { text: "Salto i salto sobre els núvols, sembla que pugui ____, el meu cor fa pampallugues, i no deixa de ballar.", answer: "volar", startTime: 37, endTime: 44 },
        { text: "Quan posem els ____ enlaire, quan posem el cap per avall, quan et crido a la muntanya i l'eco em va contestant.", answer: "peus", startTime: 44, endTime: 52 },
        { text: "Quan et faig amb margarides la ____ de colors, vull mirar-te als ulls i dir-te, que el que sento és això:", answer: "polsera", startTime: 51, endTime: 60 },
        { text: "T'estimo molt, jo a tu t'estimo molt. Si estàs amb mi desapareix tot el que és ____, un dia gris el pintes de colors. Fins a la Lluna i tornar t'estimo jo.", answer: "trist", startTime: 60, endTime: 75 },
        { text: "Els meus ulls són com bombetes, els meus ____ riuen fort. No puc amagar el que sento, quan em mires tan de prop.", answer: "llavis", startTime: 75, endTime: 83 },
        { text: "Cames i braços que em passa, el cos m'està ____. El meu cor fa pampallugues, i no deixa de ballar.", answer: "tremolant", startTime: 83, endTime: 91 },
        { text: "Quan s'uneixen els ____ per fer 🌈l'arc de sant Martí🌈, quan escrius amb el teu dit, el meu nom en el mirall, li dono canya a la ràdio i escolto aquesta cançó.", answer: "colors", startTime: 91, endTime: 102 },
        { text: "Vull mirar-te als ____ i dir-te que el que sento és això:", answer: "ulls", startTime: 102, endTime: 106 },
        { text: "T'estimo molt, jo a tu t'estimo molt. Si estàs amb mi desapareix tot el que és trist, un dia gris el ____ de colors. Fins a la Lluna i tornar t'estimo jo.", answer: "pintes", startTime: 106, endTime: 120 },
        { text: "&quot;Maite zaitut. Maite, maite zaitut...&quot; T'estimo molt, jo a tu t'estimo molt. Si estàs amb mi desapareix tot el que és trist, un dia gris el pintes de colors. Fins a la Lluna i ____ t'estimo jo.", answer: "tornar", startTime: 155, endTime: 180 },
        
        
        
      ],
      keyWords: [
        {        
          word: "T'estimo molt",
          translations: { 
              en: "I love you so much", 
              sv: "Jag älskar dig så mycket", 
              es: "Te amo mucho", 
              it: "Ti amo così tanto", 
              fr: "Je t'aime tellement" 
          },
          description: {
              ca: "Valorar molt positivament una persona, sentir-ne afecte. En altres variants: T'estime, t'estimi, t'estim, te vull bé...",
              en: "It's used to describe all strong feelings of closeness and care between two people, whether those two people are in a romantic relationship or not. When it is used to describe a feeling between members of the same family, it is not romantic.",
              sv: "Används för att beskriva alla starka känslor av närhet och omsorg mellan två personer, oavsett om de är i ett romantiskt förhållande eller inte. När det används för att beskriva känslor mellan familjemedlemmar är det inte romantiskt.",
              es: "Se utiliza para describir todos los sentimientos fuertes de cercanía y cuidado entre dos personas, ya sea que esas dos personas estén en una relación romántica o no. Cuando se usa para describir un sentimiento entre miembros de la misma familia, no es romántico.",
              it: "Viene utilizzato per descrivere tutti i sentimenti forti di vicinanza e cura tra due persone, che siano o meno in una relazione romantica. Quando viene usato per descrivere un sentimento tra membri della stessa famiglia, non è romantico.",
              fr: "C'est utilisé pour décrire tous les sentiments forts de proximité et d'affection entre deux personnes, que ces deux personnes soient ou non dans une relation amoureuse. Lorsqu'il est utilisé pour décrire un sentiment entre des membres de la même famille, ce n'est pas romantique."
          },
          emoji: "🥰👨‍❤️‍👨"
      },
      {
          word: "somnis",
          translations: { 
              en: "dreams", 
              sv: "drömmar", 
              es: "sueños", 
              it: "sogni", 
              fr: "rêves" 
          },
          description: {
              ca: "Imatges o idees que es formen a la ment mentre dorms.",
              en: "Images or ideas formed in the mind while sleeping.",
              sv: "Bilder eller idéer som bildas i sinnet när du sover.",
              es: "Imágenes o ideas que se forman en la mente mientras duermes.",
              it: "Immagini o idee che si formano nella mente mentre dormi.",
              fr: "Images ou idées qui se forment dans l'esprit pendant le sommeil."
          },
          emoji: "😴💭✨"
      },
      {
          word: "volar",
          translations: { 
              en: "fly", 
              sv: "flyga", 
              es: "volar", 
              it: "volare", 
              fr: "voler" 
          },
          description: {
              ca: "Moure's per l'aire sense tocar el terra.",
              en: "To move through the air without touching the ground.",
              sv: "Att röra sig genom luften utan att röra marken.",
              es: "Moverse por el aire sin tocar el suelo.",
              it: "Muoversi nell'aria senza toccare il suolo.",
              fr: "Se déplacer dans l'air sans toucher le sol."
          },
          emoji: "✈️🕊️"
      },
      {
          word: "peus",
          translations: { 
              en: "feet", 
              sv: "fötter", 
              es: "pies", 
              it: "piedi", 
              fr: "pieds" 
          },
          description: {
              ca: "La part del cos que s’utilitza per caminar o estar dret.",
              en: "The part of the body used for walking or standing.",
              sv: "Den del av kroppen som används för att gå eller stå.",
              es: "La parte del cuerpo que se usa para caminar o estar de pie.",
              it: "La parte del corpo che si usa per camminare o stare in piedi.",
              fr: "La partie du corps utilisée pour marcher ou se tenir debout."
          },
          emoji: "👣"
      },
      {
          word: "braçalet (o polsera)",
          translations: { 
              en: "bracelet", 
              sv: "armband", 
              es: "pulsera", 
              it: "braccialetto", 
              fr: "bracelet" 
          },
          description: {
              ca: "Una joia que es porta al voltant del canell.",
              en: "A piece of jewelry worn around the wrist.",
              sv: "Ett smycke som bärs runt handleden.",
              es: "Una joya que se lleva alrededor de la muñeca.",
              it: "Un gioiello che si porta intorno al polso.",
              fr: "Un bijou porté autour du poignet."
          },
          emoji: "📿"
      },
      {
          word: "trist",
          translations: { 
              en: "sad", 
              sv: "ledsen", 
              es: "triste", 
              it: "triste", 
              fr: "triste" 
          },
          description: {
              ca: "Sentir-se infeliç o descontent.",
              en: "Feeling unhappy or discontent.",
              sv: "Att känna sig olycklig eller missnöjd.",
              es: "Sentirse infeliz o descontento.",
              it: "Sentirsi infelice o scontento.",
              fr: "Se sentir malheureux ou mécontent."
          },
          emoji: "😢"
      },
      {
          word: "els llavis",
          translations: { 
              en: "the lips", 
              sv: "läpparna", 
              es: "los labios", 
              it: "le labbra", 
              fr: "les lèvres" 
          },
          description: {
              ca: "Parts toves i carnoses de la boca.",
              en: "The soft, fleshy parts of the mouth.",
              sv: "De mjuka, köttiga delarna av munnen.",
              es: "Las partes suaves y carnosas de la boca.",
              it: "Le parti morbide e carnose della bocca.",
              fr: "Les parties douces et charnues de la bouche."
          },
          emoji: "👄"
      },
      {
          word: "tremolant",
          translations: { 
              en: "trembling", 
              sv: "skakande", 
              es: "temblando", 
              it: "tremando", 
              fr: "tremblant" 
          },
          description: {
              ca: "Quan el cos es mou ràpidament i de manera involuntària.",
              en: "When the body shakes quickly and involuntarily.",
              sv: "När kroppen skakar snabbt och ofrivilligt.",
              es: "Cuando el cuerpo tiembla rápidamente e involuntariamente.",
              it: "Quando il corpo trema rapidamente e involontariamente.",
              fr: "Quand le corps tremble rapidement et involontairement."
          },
          emoji: "😨🫨"
      },
      {
          word: "ulls",
          translations: { 
              en: "eyes", 
              sv: "ögon", 
              es: "ojos", 
              it: "occhi", 
              fr: "yeux" 
          },
          description: {
              ca: "L'òrgan que s'utilitza per veure.",
              en: "The organ used for seeing.",
              sv: "Organet som används för att se.",
              es: "El órgano que se usa para ver.",
              it: "L'organo usato per vedere.",
              fr: "L'organe utilisé pour voir."
          },
          emoji: "👀"
      },
      {
          word: "colors",
          translations: { 
              en: "colors", 
              sv: "färger", 
              es: "colores", 
              it: "colori", 
              fr: "couleurs" 
          },
          description: {
              ca: "Els tons o matisos que percebem amb els ulls.",
              en: "The tones or shades we perceive with our eyes.",
              sv: "Toner eller nyanser som vi uppfattar med våra ögon.",
              es: "Los tonos o matices que percibimos con nuestros ojos.",
              it: "I toni o sfumature che percepiamo con gli occhi.",
              fr: "Les tons ou nuances que nous percevons avec nos yeux."
          },
          emoji: "🌈"
      },
      {
          word: "pintar / Tu el pintes",
          translations: { 
              en: "to paint / You paint it", 
              sv: "att måla / Du målar den", 
              es: "pintar / Tú lo pintas", 
              it: "dipingere / Lo dipingi tu", 
              fr: "peindre / Tu le peins" 
          },
          description: {
              ca: "Acció de cobrir una superfície amb color.",
              en: "The act of covering a surface with color.",
              sv: "Handlingen att täcka en yta med färg.",
              es: "La acción de cubrir una superficie con color.",
              it: "L'atto di coprire una superficie con colore.",
              fr: "L'acte de couvrir une surface avec de la couleur."
          },
          emoji: "🎨🖌️"
      },
      {
          word: "tornar",
          translations: { 
              en: "return", 
              sv: "återvända", 
              es: "volver", 
              it: "ritornare", 
              fr: "revenir" 
          },
          description: {
              ca: "Anar a un lloc on ja havies estat abans.",
              en: "To go to a place where you have been before.",
              sv: "Att gå till en plats där du har varit tidigare.",
              es: "Ir a un lugar donde ya habías estado antes.",
              it: "Andare in un luogo dove eri già stato prima.",
              fr: "Aller dans un endroit où vous avez déjà été."
          },
          emoji: "🔙"
      },
      {
          word: "la Lluna",
          translations: { 
              en: "the Moon", 
              sv: "månen", 
              es: "la Luna", 
              it: "la Luna", 
              fr: "la Lune" 
          },
          description: {
              ca: "El satèl·lit natural de la Terra que brilla a la nit.",
              en: "The Earth's natural satellite that shines at night.",
              sv: "Jordens naturliga satellit som lyser på natten.",
              es: "El satélite natural de la Tierra que brilla por la noche.",
              it: "Il satellite naturale della Terra che brilla di notte.",
              fr: "Le satellite naturel de la Terre qui brille la nuit."
          },
          emoji: "🌕"
      },
      {
          word: "desapareix tot",
          translations: { 
              en: "everything disappears", 
              sv: "allt försvinner", 
              es: "todo desaparece", 
              it: "tutto scompare", 
              fr: "tout disparaît" 
          },
          description: {
              ca: "Quan alguna cosa deixa d'estar present o visible.",
              en: "When something ceases to be present or visible.",
              sv: "När något upphör att vara närvarande eller synligt.",
              es: "Cuando algo deja de estar presente o visible.",
              it: "Quando qualcosa cessa di essere presente o visibile.",
              fr: "Quand quelque chose cesse d'être présent ou visible."
          },
          emoji: "✨❌"
      },
      {
          word: "el meu nom",
          translations: { 
              en: "my name", 
              sv: "mitt namn", 
              es: "mi nombre", 
              it: "il mio nome", 
              fr: "mon nom" 
          },
          description: {
              ca: "Com algú és identificat o conegut.",
              en: "How someone is identified or known.",
              sv: "Hur någon identifieras eller är känd.",
              es: "Cómo se identifica o conoce a alguien.",
              it: "Come qualcuno viene identificato o conosciuto.",
              fr: "Comment quelqu'un est identifié ou connu."
          },
          emoji: "Maria ➡️ 👧 (el meu nom és Maria)"
      },
      {
          word: "el mirall",
          translations: { 
              en: "the mirror", 
              sv: "spegeln", 
              es: "el espejo", 
              it: "lo specchio", 
              fr: "le miroir" 
          },
          description: {
              ca: "Una superfície que reflecteix imatges.",
              en: "A surface that reflects images.",
              sv: "En yta som reflekterar bilder.",
              es: "Una superficie que refleja imágenes.",
              it: "Una superficie che riflette immagini.",
              fr: "Une surface qui reflète des images."
          },
          emoji: "🪞"
      },
      {
          word: "el teu dit",
          translations: { 
              en: "your finger", 
              sv: "din finger", 
              es: "tu dedo", 
              it: "il tuo dito", 
              fr: "ton doigt" 
          },
          description: {
              ca: "Part allargada de la mà que s’utilitza per tocar o assenyalar.",
              en: "An elongated part of the hand used to touch or point.",
              sv: "En förlängd del av handen som används för att röra eller peka.",
              es: "Parte alargada de la mano que se utiliza para tocar o señalar.",
              it: "Parte allungata della mano usata per toccare o indicare.",
              fr: "Partie allongée de la main utilisée pour toucher ou pointer."
          },
          emoji: "☝️"
      },
      {
          word: "quan escrius",
          translations: { 
              en: "when you write", 
              sv: "när du skriver", 
              es: "cuando escribes", 
              it: "quando scrivi", 
              fr: "quand tu écris" 
          },
          description: {
              ca: "El moment en què poses paraules sobre paper o una superfície.",
              en: "The moment when you put words on paper or a surface.",
              sv: "När du sätter ord på papper eller en yta.",
              es: "El momento en que pones palabras en papel o una superficie.",
              it: "Il momento in cui metti parole su carta o su una superficie.",
              fr: "Le moment où tu mets des mots sur papier ou sur une surface."
          },
          emoji: "✍️"
      },
      {
          word: "s'uneixen",
          translations: { 
              en: "come together", 
              sv: "förenas", 
              es: "se unen", 
              it: "si uniscono", 
              fr: "s'unissent" 
          },
          description: {
              ca: "Quan dues o més coses es combinen o s'ajunten.",
              en: "When two or more things combine or come together.",
              sv: "När två eller flera saker kombineras eller förenas.",
              es: "Cuando dos o más cosas se combinan o juntan.",
              it: "Quando due o più cose si combinano o si uniscono.",
              fr: "Quand deux ou plusieurs choses se combinent ou se rejoignent."
          },
          emoji: "🤝"
      },
      {
          word: "el meu cor",
          translations: { 
              en: "my heart", 
              sv: "mitt hjärta", 
              es: "mi corazón", 
              it: "il mio cuore", 
              fr: "mon cœur" 
          },
          description: {
              ca: "L'òrgan del cos que bombeja sang i simbolitza els sentiments.",
              en: "The body organ that pumps blood and symbolizes feelings.",
              sv: "Kroppsorganet som pumpar blod och symboliserar känslor.",
              es: "El órgano del cuerpo que bombea sangre y simboliza los sentimientos.",
              it: "L'organo del corpo che pompa sangue e simboleggia i sentimenti.",
              fr: "L'organe du corps qui pompe le sang et symbolise les sentiments."
          },
          emoji: "❤️"
      },
      {
          word: "fer pampallugues",
          translations: { 
              en: "to twinkle", 
              sv: "blinka", 
              es: "parpadear", 
              it: "scintillare", 
              fr: "clignoter" 
          },
          description: {
              ca: "Quan una llum o objecte fa intermitències de brillantor.",
              en: "When a light or object flickers with brightness.",
              sv: "När ett ljus eller föremål blinkar med ljusstyrka.",
              es: "Cuando una luz u objeto parpadea con brillo.",
              it: "Quando una luce o un oggetto scintilla con luminosità.",
              fr: "Quand une lumière ou un objet clignote avec éclat."
          },
          emoji: "✨"
      },,
      {
          word: "no deixar de ballar",
          translations: { 
              en: "to keep dancing", 
              sv: "fortsätta dansa", 
              es: "no dejar de bailar", 
              it: "non smettere di ballare", 
              fr: "ne pas arrêter de danser" 
          },
          description: {
              ca: "Continuar movent-se amb ritme, sense aturar-se.",
              en: "To keep moving rhythmically without stopping.",
              sv: "Att fortsätta röra sig rytmiskt utan att stanna.",
              es: "Continuar moviéndose rítmicamente sin detenerse.",
              it: "Continuare a muoversi ritmicamente senza fermarsi.",
              fr: "Continuer à bouger rythmiquement sans s'arrêter."
          },
          emoji: "💃"
      },
      {
          word: "bombetes",
          translations: { 
              en: "light bulbs", 
              sv: "glödlampor", 
              es: "bombillas", 
              it: "lampadine", 
              fr: "ampoules" 
          },
          description: {
              ca: "Objectes que emeten llum quan s'encenen.",
              en: "Objects that emit light when turned on.",
              sv: "Föremål som avger ljus när de är tända.",
              es: "Objetos que emiten luz cuando se encienden.",
              it: "Oggetti che emettono luce quando sono accesi.",
              fr: "Objets qui émettent de la lumière lorsqu'ils sont allumés."
          },
          emoji: "💡💡💡"
      },
      {
          word: "riure fort",
          translations: { 
              en: "laugh loudly", 
              sv: "skratta högt", 
              es: "reír fuerte", 
              it: "ridere forte", 
              fr: "rire fort" 
          },
          description: {
              ca: "Produir un so fort amb la boca quan alguna cosa fa gràcia.",
              en: "To produce a loud sound with your mouth when something is funny.",
              sv: "Att skapa ett högt ljud med munnen när något är roligt.",
              es: "Producir un sonido fuerte con la boca cuando algo es gracioso.",
              it: "Fare un suono forte con la bocca quando qualcosa è divertente.",
              fr: "Produire un son fort avec la bouche quand quelque chose est drôle."
          },
          emoji: "😂"
      },
      {
        word: "fins a una posició",
        translations: { 
            en: "up to a position", 
            sv: "upp till en position", 
            es: "hasta una posición", 
            it: "fino a una posizione", 
            fr: "jusqu'à une position" 
        },
        description: {
            ca: "Indica un punt final o límit que pot ser físic, abstracte o temporal.",
            en: "Indicates a final point or limit, which can be physical, abstract, or temporal.",
            sv: "Indikerar en slutpunkt eller gräns, som kan vara fysisk, abstrakt eller tidsmässig.",
            es: "Indica un punto final o límite, que puede ser físico, abstracto o temporal.",
            it: "Indica un punto finale o un limite, che può essere fisico, astratto o temporale.",
            fr: "Indique un point final ou une limite, qui peut être physique, abstrait ou temporel."
        },
        emoji: "🏁➡️⏳"
    },{
        word: "donar canya",
        translations: { 
            en: "push harder / turn it up", 
            sv: "köra hårdare / höja volymen", 
            es: "dar caña", 
            it: "spingere di più / alzare il volume", 
            fr: "se donner à fond / monter le son" 
        },
        description: {
            ca: "Una expressió polivalent per intensificar l’esforç, l’energia o l’acció en diverses situacions. Pot significar 'animar-se' o 'fer-ho amb més intensitat', com accelerar, esforçar-se més o fins i tot pujar el volum de la música.",
            en: "A versatile expression to intensify effort, energy, or action in various situations. It can mean 'to push harder' or 'to do something with more intensity,' such as speeding up, working harder, or even turning up the music volume.",
            sv: "Ett mångsidigt uttryck för att intensifiera ansträngning, energi eller handling i olika situationer. Det kan betyda att 'ge järnet', 'öka intensiteten' eller 'höja volymen på musiken'.",
            es: "Una expresión polivalente para intensificar el esfuerzo, la energía o la acción en diversas situaciones. Puede significar 'animarse' o 'hacerlo con más intensidad', como acelerar, esforzarse más o incluso subir el volumen de la música.",
            it: "Un'espressione versatile per intensificare lo sforzo, l'energia o l'azione in diverse situazioni. Può significare 'spingere di più' o 'fare qualcosa con maggiore intensità', come accelerare, lavorare di più o persino alzare il volume della musica.",
            fr: "Une expression polyvalente pour intensifier l'effort, l'énergie ou l'action dans diverses situations. Elle peut signifier 'se donner à fond' ou 'faire quelque chose avec plus d'intensité', comme accélérer, travailler plus dur ou même monter le volume de la musique."
        },
        emoji: "💪🚗🎶"
    },{
        word: "si estàs amb mi",
        translations: { 
            en: "if you're with me", 
            sv: "om du är med mig", 
            es: "si estás conmigo", 
            it: "se sei con me", 
            fr: "si tu es avec moi" 
        },
        description: {
            ca: "Una frase per expressar una condició de proximitat o companyia.",
            en: "A phrase to express a condition of closeness or companionship.",
            sv: "En fras som uttrycker ett villkor för närhet eller sällskap.",
            es: "Una frase para expresar una condición de cercanía o compañía.",
            it: "Una frase per esprimere una condizione di vicinanza o compagnia.",
            fr: "Une phrase pour exprimer une condition de proximité ou de compagnie."
        },
        emoji: "🤝💞"
    },
    {
        word: "et crido",
        translations: { 
            en: "I call you", 
            sv: "jag ropar på dig", 
            es: "te llamo", 
            it: "ti chiamo", 
            fr: "je t'appelle" 
        },
        description: {
            ca: "Dir el nom d'una persona o fer un crit per atraure la seva atenció.",
            en: "To say someone's name or make a call to get their attention.",
            sv: "Att säga någons namn eller ropa för att få deras uppmärksamhet.",
            es: "Decir el nombre de alguien o llamarlo para captar su atención.",
            it: "Dire il nome di qualcuno o chiamarlo per attirare la sua attenzione.",
            fr: "Dire le nom de quelqu'un ou l'appeler pour attirer son attention."
        },
        emoji: "📣👋"
    },
    {
        word: "la muntanya",
        translations: { 
            en: "the mountain", 
            sv: "berget", 
            es: "la montaña", 
            it: "la montagna", 
            fr: "la montagne" 
        },
        description: {
            ca: "Una elevació natural del terreny més alta que un turó.",
            en: "A natural elevation of the terrain, higher than a hill.",
            sv: "En naturlig höjning av terrängen, högre än en kulle.",
            es: "Una elevación natural del terreno, más alta que una colina.",
            it: "Un'elevazione naturale del terreno, più alta di una collina.",
            fr: "Une élévation naturelle du terrain, plus haute qu'une colline."
        },
        emoji: "⛰️"
    },
    {
        word: "una cançó",
        translations: { 
            en: "a song", 
            sv: "en låt", 
            es: "una canción", 
            it: "una canzone", 
            fr: "une chanson" 
        },
        description: {
            ca: "Composició musical que es canta o escolta.",
            en: "A musical composition that is sung or listened to.",
            sv: "En musikalisk komposition som sjungs eller lyssnas på.",
            es: "Una composición musical que se canta o escucha.",
            it: "Una composizione musicale che viene cantata o ascoltata.",
            fr: "Une composition musicale qui est chantée ou écoutée."
        },
        emoji: "🎵🎤"
    },
    {
        word: "tot i que",
        translations: { 
            en: "even though", 
            sv: "även om", 
            es: "aunque", 
            it: "anche se", 
            fr: "même si" 
        },
        description: {
            ca: "Una expressió per indicar una concessió o contradicció.",
            en: "An expression to indicate a concession or contradiction.",
            sv: "Ett uttryck för att indikera en medgivelse eller motsägelse.",
            es: "Una expresión para indicar una concesión o contradicción.",
            it: "Un'espressione per indicare una concessione o contraddizione.",
            fr: "Une expression pour indiquer une concession ou une contradiction."
        },
        emoji: "🤔"
    }    
      
  ]
    },
    "jaNoFaMalFumiga": {
      videoId: "20Gfy5KuO5s",
      phrases: [
        { text: "Estava pensant-te després de molts ____. Semblava que no estaves, no recorde els teus besos.", answer: "mesos", startTime: 27, endTime: 35 },
        { text: "El nostre ____ no va ser molt amable. Vaig decidir guardar tan sols allò inoblidable.", answer: "final", startTime: 34, endTime: 41 },
        { text: "I tantes nits em vas ____, tantes vas sobrar, que unes coses per altres no queda res de nosaltres. ", answer: "faltar", startTime: 40, endTime: 47 },
        { text: "Jo volia ____ d'eixe laberint. No és per tu, és per mi. Però t'he de dir...", answer: "eixir", startTime: 46, endTime: 52 },
        { text: "Que sigues ____ feliç. Vaig aprendre tantes coses que no he tingut temps de recordar.", answer: "molt", startTime: 52, endTime: 63 },
        { text: "Curiós aprenentatge d'un fracàs. Passen els ____, ja no em fa mal. El temps ho havia de curar. Que tinguem sort i no oblidar tot el que ens va marcar.", answer: "anys", startTime: 62, endTime: 79 },
        { text: "Segur que estàs bé, que has ____ on quedar-te. Voldria que em contares i em fa por preguntar-te.", answer: "trobat", startTime: 79, endTime: 86 },
        { text: "No vull molestar, no ____ ratllar-te. &quot;Lo nuestro ya pasó&quot; però parlem de nosaltres. ", answer: "voldria", startTime: 86, endTime: 92 },
        { text: "I ara que ____ la cançó que ens molava als dos, no li trobe el sentit que tenia quan la cantàvem. ", answer: "sona", startTime: 91, endTime: 99 },
        { text: "Jo volia ____ d'eixe laberint. No és per tu, és per mi. Però t'he de dir...", answer: "eixir", startTime: 98, endTime: 104},
        { text: "Que sigues molt feliç. Vaig aprendre tantes ____ que no he tingut temps de recordar.", answer: "coses", startTime: 103, endTime: 114 },
        { text: "Curiós aprenentatge d'un fracàs. Passen els anys, ja no em fa ____. El temps ho havia de curar. Que tinguem sort i no oblidar tot el que ens va marcar.", answer: "mal", startTime: 114, endTime: 130 },
        { text: "Que sigues molt feliç. Vaig aprendre ____ coses que no he tingut temps de recordar.", answer: "tantes", startTime: 140, endTime: 151 },
        { text: "Curiós aprenentatge d'un fracàs. ____ els anys, ja no em fa mal. El temps ho havia de curar. Que tinguem sort i no oblidar tot el que ens va marcar.", answer: "passen", startTime: 174, endTime: 205 },
        
      ],
      keyWords: [
        {
            word: "estava pensant-te",
            translations: { 
                en: "I was thinking of you", 
                sv: "jag tänkte på dig", 
                es: "estaba pensándote", 
                it: "stavo pensando a te", 
                fr: "je te pensais" 
            },
            description: {
                ca: "Expressa el fet de tenir algú en ment de manera reflexiva o emocional.",
                en: "Expresses having someone in mind in a reflective or emotional way.",
                sv: "Uttrycker att ha någon i tankarna på ett reflekterande eller känslomässigt sätt.",
                es: "Expresa tener a alguien en mente de manera reflexiva o emocional.",
                it: "Esprime l'avere qualcuno in mente in modo riflessivo o emotivo.",
                fr: "Exprime avoir quelqu'un en tête de manière réfléchie ou émotionnelle."
            },
            emoji: "🤔❤️"
        },
        {
            word: "semblava",
            translations: { 
                en: "it seemed", 
                sv: "det verkade", 
                es: "parecía", 
                it: "sembrava", 
                fr: "ça semblait" 
            },
            description: {
                ca: "Indica una aparença o impressió que podria no ser real.",
                en: "Indicates an appearance or impression that might not be real.",
                sv: "Indikerar ett utseende eller intryck som kanske inte är verkligt.",
                es: "Indica una apariencia o impresión que podría no ser real.",
                it: "Indica un'apparenza o impressione che potrebbe non essere reale.",
                fr: "Indique une apparence ou une impression qui pourrait ne pas être réelle."
            },
            emoji: "🤔"
        },
        {
            word: "no estaves",
            translations: { 
                en: "you weren’t", 
                sv: "du var inte", 
                es: "no estabas", 
                it: "non eri", 
                fr: "tu n'étais pas" 
            },
            description: {
                ca: "Expressa l'absència d'algú en un moment o lloc determinat.",
                en: "Expresses someone's absence at a specific time or place.",
                sv: "Uttrycker någons frånvaro vid en viss tidpunkt eller plats.",
                es: "Expresa la ausencia de alguien en un momento o lugar específico.",
                it: "Esprime l'assenza di qualcuno in un momento o luogo specifico.",
                fr: "Exprime l'absence de quelqu'un à un moment ou à un endroit précis."
            },
            emoji: "🚫👤"
        },
        {
            word: "no recorde",
            translations: { 
                en: "I don’t remember", 
                sv: "jag minns inte", 
                es: "no recuerdo", 
                it: "non ricordo", 
                fr: "je ne me souviens pas" 
            },
            description: {
                ca: "Indica la incapacitat de rememorar alguna cosa del passat.",
                en: "Indicates the inability to recall something from the past.",
                sv: "Indikerar oförmågan att minnas något från det förflutna.",
                es: "Indica la incapacidad de recordar algo del pasado.",
                it: "Indica l'incapacità di ricordare qualcosa del passato.",
                fr: "Indique l'incapacité de se souvenir de quelque chose du passé."
            },
            emoji: "🤷‍♂️🧠"
        },
        {
            word: "els teus besos",
            translations: { 
                en: "your kisses", 
                sv: "dina kyssar", 
                es: "tus besos", 
                it: "i tuoi baci", 
                fr: "tes baisers" 
            },
            description: {
                ca: "Una mostra física d'afecte, sovint romàntica.",
                en: "A physical display of affection, often romantic.",
                sv: "En fysisk visning av tillgivenhet, ofta romantisk.",
                es: "Una muestra física de afecto, a menudo romántica.",
                it: "Una manifestazione fisica di affetto, spesso romantica.",
                fr: "Une démonstration physique d'affection, souvent romantique."
            },
            emoji: "💋"
        },
        {
            word: "molt amable",
            translations: { 
                en: "very kind", 
                sv: "väldigt snäll", 
                es: "muy amable", 
                it: "molto gentile", 
                fr: "très gentil" 
            },
            description: {
                ca: "Indica una actitud educada i considerada cap als altres.",
                en: "Indicates a polite and considerate attitude towards others.",
                sv: "Indikerar en artig och hänsynsfull attityd gentemot andra.",
                es: "Indica una actitud educada y considerada hacia los demás.",
                it: "Indica un atteggiamento educato e premuroso verso gli altri.",
                fr: "Indique une attitude polie et attentionnée envers les autres."
            },
            emoji: "😊🤝"
        },
        {
            word: "inoblidable",
            translations: { 
                en: "unforgettable", 
                sv: "oförglömlig", 
                es: "inolvidable", 
                it: "indimenticabile", 
                fr: "inoubliable" 
            },
            description: {
                ca: "Alguna cosa que deixa una impressió molt forta i duradora.",
                en: "Something that leaves a very strong and lasting impression.",
                sv: "Något som lämnar ett mycket starkt och bestående intryck.",
                es: "Algo que deja una impresión muy fuerte y duradera.",
                it: "Qualcosa che lascia un'impressione molto forte e duratura.",
                fr: "Quelque chose qui laisse une impression très forte et durable."
            },
            emoji: "🌟"
        },
        {
            word: "el nostre final",
            translations: { 
                en: "our ending", 
                sv: "vår slut", 
                es: "nuestro final", 
                it: "il nostro finale", 
                fr: "notre fin" 
            },
            description: {
                ca: "El punt on alguna cosa entre dues persones acaba.",
                en: "The point where something between two people ends.",
                sv: "Punkten där något mellan två personer slutar.",
                es: "El punto donde algo entre dos personas termina.",
                it: "Il punto in cui qualcosa tra due persone finisce.",
                fr: "Le point où quelque chose entre deux personnes se termine."
            },
            emoji: "🔚"
        },
        {
            word: "jo volia eixir",
            translations: { 
                en: "I wanted to leave", 
                sv: "jag ville lämna", 
                es: "yo quería salir", 
                it: "volevo uscire", 
                fr: "je voulais partir" 
            },
            description: {
                ca: "Expressa el desig de marxar d'un lloc o situació.",
                en: "Expresses the desire to leave a place or situation.",
                sv: "Uttrycker önskan att lämna en plats eller situation.",
                es: "Expresa el deseo de irse de un lugar o situación.",
                it: "Esprime il desiderio di lasciare un luogo o una situazione.",
                fr: "Exprime le désir de quitter un lieu ou une situation."
            },
            emoji: "🚪➡️"
        },
        {
            word: "eixe laberint",
            translations: { 
                en: "that labyrinth", 
                sv: "den där labyrinten", 
                es: "ese laberinto", 
                it: "quel labirinto", 
                fr: "ce labyrinthe" 
            },
            description: {
                ca: "Un camí complicat amb múltiples opcions o confusions.",
                en: "A complicated path with multiple choices or confusions.",
                sv: "En komplicerad väg med flera val eller förvirringar.",
                es: "Un camino complicado con múltiples opciones o confusiones.",
                it: "Un percorso complicato con molteplici scelte o confusioni.",
                fr: "Un chemin compliqué avec de multiples choix ou confusions."
            },
            emoji: "🌀"
        },
        {
            word: "vaig aprendre",
            translations: { 
                en: "I learned", 
                sv: "jag lärde mig", 
                es: "aprendí", 
                it: "ho imparato", 
                fr: "j'ai appris" 
            },
            description: {
                ca: "El fet d'assimilar coneixements o experiències noves.",
                en: "The act of gaining new knowledge or experiences.",
                sv: "Att få ny kunskap eller erfarenheter.",
                es: "El acto de adquirir nuevos conocimientos o experiencias.",
                it: "L'atto di acquisire nuove conoscenze o esperienze.",
                fr: "L'acte d'acquérir de nouvelles connaissances ou expériences."
            },
            emoji: "📚✨"
        },
        {
            word: "tantes coses",
            translations: { 
                en: "so many things", 
                sv: "så många saker", 
                es: "tantas cosas", 
                it: "tante cose", 
                fr: "tant de choses" 
            },
            description: {
                ca: "Un gran nombre d'elements o experiències.",
                en: "A large number of elements or experiences.",
                sv: "Ett stort antal element eller erfarenheter.",
                es: "Un gran número de elementos o experiencias.",
                it: "Un gran numero di elementi o esperienze.",
                fr: "Un grand nombre d'éléments ou d'expériences."
            },
            emoji: "🌀"
        },{
            word: "curiós aprenentatge",
            translations: { 
                en: "curious learning", 
                sv: "nyfiken lärdom", 
                es: "curioso aprendizaje", 
                it: "curioso apprendimento", 
                fr: "apprentissage curieux" 
            },
            description: {
                ca: "Un aprenentatge que sorprèn o que no és el que s’esperava.",
                en: "A learning experience that is surprising or unexpected.",
                sv: "En lärdom som är överraskande eller oväntad.",
                es: "Un aprendizaje que sorprende o que no es lo que se esperaba.",
                it: "Un apprendimento che sorprende o non è quello che ci si aspettava.",
                fr: "Un apprentissage qui surprend ou qui n'est pas ce qu'on attendait."
            },
            emoji: "🤔📘"
        },
        {
            word: "un fracàs",
            translations: { 
                en: "a failure", 
                sv: "ett misslyckande", 
                es: "un fracaso", 
                it: "un fallimento", 
                fr: "un échec" 
            },
            description: {
                ca: "Un resultat negatiu d'un esforç o acció.",
                en: "A negative outcome of an effort or action.",
                sv: "Ett negativt resultat av en ansträngning eller handling.",
                es: "Un resultado negativo de un esfuerzo o acción.",
                it: "Un risultato negativo di uno sforzo o di un'azione.",
                fr: "Un résultat négatif d'un effort ou d'une action."
            },
            emoji: "❌"
        },
        {
            word: "passen els anys",
            translations: { 
                en: "the years go by", 
                sv: "åren går", 
                es: "pasan los años", 
                it: "passano gli anni", 
                fr: "les années passent" 
            },
            description: {
                ca: "Expressa el transcurs del temps a llarg termini.",
                en: "Expresses the passage of time over a long period.",
                sv: "Uttrycker tidens gång under en lång period.",
                es: "Expresa el paso del tiempo a largo plazo.",
                it: "Esprime il passare del tempo su un lungo periodo.",
                fr: "Exprime le passage du temps sur une longue période."
            },
            emoji: "⏳"
        },
        {
            word: "tantes nits",
            translations: { 
                en: "so many nights", 
                sv: "så många nätter", 
                es: "tantas noches", 
                it: "tante notti", 
                fr: "tant de nuits" 
            },
            description: {
                ca: "Una gran quantitat de nits, sovint associades a records o emocions.",
                en: "A large number of nights, often associated with memories or emotions.",
                sv: "Ett stort antal nätter, ofta kopplade till minnen eller känslor.",
                es: "Un gran número de noches, a menudo asociadas a recuerdos o emociones.",
                it: "Un gran numero di notti, spesso associate a ricordi o emozioni.",
                fr: "Un grand nombre de nuits, souvent associées à des souvenirs ou des émotions."
            },
            emoji: "🌌🕰️"
        },
        {
            word: "el temps ho cura",
            translations: { 
                en: "time heals it", 
                sv: "tiden läker det", 
                es: "el tiempo lo cura", 
                it: "il tempo lo guarisce", 
                fr: "le temps le guérit" 
            },
            description: {
                ca: "Expressa la idea que el pas del temps pot sanar ferides emocionals.",
                en: "Expresses the idea that time can heal emotional wounds.",
                sv: "Uttrycker tanken att tiden kan läka känslomässiga sår.",
                es: "Expresa la idea de que el paso del tiempo puede sanar heridas emocionales.",
                it: "Esprime l'idea che il tempo può guarire le ferite emotive.",
                fr: "Exprime l'idée que le temps peut guérir les blessures émotionnelles."
            },
            emoji: "⏳💔➡️❤️"
        },
        {
            word: "tan sols",
            translations: { 
                en: "only", 
                sv: "bara", 
                es: "solo", 
                it: "soltanto", 
                fr: "seulement" 
            },
            description: {
                ca: "Indica exclusivitat o limitació a una cosa.",
                en: "Indicates exclusivity or limitation to one thing.",
                sv: "Indikerar exklusivitet eller begränsning till en sak.",
                es: "Indica exclusividad o limitación a una cosa.",
                it: "Indica esclusività o limitazione a una cosa.",
                fr: "Indique l'exclusivité ou la limitation à une chose."
            },
            emoji: "☝️"
        },
        {
            word: "guardar",
            translations: { 
                en: "to keep", 
                sv: "att behålla", 
                es: "guardar", 
                it: "conservare", 
                fr: "garder" 
            },
            description: {
                ca: "Conservar alguna cosa per a ús futur o pel seu valor emocional.",
                en: "To preserve something for future use or its emotional value.",
                sv: "Att bevara något för framtida användning eller dess känslomässiga värde.",
                es: "Conservar algo para un uso futuro o por su valor emocional.",
                it: "Conservare qualcosa per un uso futuro o per il suo valore emotivo.",
                fr: "Conserver quelque chose pour un usage futur ou pour sa valeur émotionnelle."
            },
            emoji: "📦"
        },
        {
            word: "sigues feliç",
            translations: { 
                en: "be happy", 
                sv: "var lycklig", 
                es: "sé feliz", 
                it: "sii felice", 
                fr: "sois heureux" 
            },
            description: {
                ca: "Una expressió desitjant alegria i benestar a algú.",
                en: "An expression wishing joy and well-being to someone.",
                sv: "Ett uttryck som önskar glädje och välmående till någon.",
                es: "Una expresión que desea alegría y bienestar a alguien.",
                it: "Un'espressione che augura gioia e benessere a qualcuno.",
                fr: "Une expression souhaitant de la joie et du bien-être à quelqu'un."
            },
            emoji: "😊✨"
        }
        
    ]
    
    },
    "culturaLosDraps": {
      videoId: "rCb8bFVYwA0",
      phrases: [
        { text: "I diran los més vells, que parlàvem abans, una ____ molt vella, de fa més de mil anys.", answer: "llengua", startTime: 4, endTime: 12 },
        { text: "Que no es podia ____, ho tenien vedat, i si algú l'escrivia, estava mal mirat.", answer: "escriure", startTime: 12, endTime: 18 },
        { text: "I diran los més ____, que parlàvem abans, una llengua molt vella, de fa més de mil anys.", answer: "vells", startTime: 18, endTime: 25 },
        { text: "Que no es podia escriure, ho tenien vedat, i si algú l'____, estava mal mirat.", answer: "escrivia", startTime: 25, endTime: 31 },
        { text: "Veus la ____ passar quan te n'acates que la vida és una injustícia social.", answer: "vida", startTime: 48, endTime: 55 },
        { text: "Que per la llengua te toque ____, a Galiza, Euskal Herria i als Països Catalans, i per què?", answer: "lluitar", startTime: 55, endTime: 63 },
        { text: "Perquè s'aproven les ____ des de les corts espanyoles. Te pressionen i t'imposen l'espanyol a les escoles.", answer: "normes", startTime: 63, endTime: 70 },
        { text: "Les llengües minoritzades no ____ fan resistència. Català, asturià, gallec, aragonès i euskera.", answer: "moren", startTime: 70, endTime: 78 },
        { text: "Hi ha ____ més alarmants, que l'asturià i l'aragonès encara no són oficials.", answer: "coses", startTime: 91, endTime: 98 },
        { text: "I que a la Franja poc adelantat està lo ____ ensenyament, l'educació en català, i per què?", answer: "nostre", startTime: 98, endTime: 106 },
        { text: "Perquè s'____ les normes des de les corts espanyoles. Te pressionen i t'imposen l'espanyol a les escoles.", answer: "aproven", startTime: 105, endTime: 113 },
        { text: "Les llengües minoritzades no moren ____ resistència. Català, asturià, gallec, aragonès i euskera.", answer: "fan", startTime: 113, endTime: 121 },
        { text: "Oh... cultura popular, les llengües ____ resistint la invasió cultural.", answer: "mortes", startTime: 147, endTime: 155 },
        { text: "Oh... cultura popular, la ____ llengua és una peça d'unitat.", answer: "nostra", startTime: 155, endTime: 163 },
        { text: "Oh... cultura popular, les llengües mortes resistint la invasió ____.", answer: "cultural", startTime: 163, endTime: 170 },
        { text: "Oh... cultura popular, la nostra llengua és una peça d'____. I per què?", answer: "unitat", startTime: 170, endTime: 177 },
        { text: "Perquè s'aproven les normes des de les corts espanyoles. Te pressionen i t'____ l'espanyol a les escoles.", answer: "imposen", startTime: 176, endTime: 184 },
        { text: "Les llengües ____ no moren fan resistència. Català, asturià, gallec, aragonès i euskera.", answer: "minoritzades", startTime: 183, endTime: 200 },
      ],
      keyWords: [
        {
            word: "llengua",
            translations: { 
                en: "language", 
                sv: "språk", 
                es: "lengua", 
                it: "lingua", 
                fr: "langue" 
            },
            description: {
                ca: "El sistema de comunicació propi d'una comunitat o poble.",
                en: "A system of communication unique to a community or people.",
                sv: "Ett kommunikationssystem som är unikt för en gemenskap eller ett folk.",
                es: "Un sistema de comunicación propio de una comunidad o pueblo.",
                it: "Un sistema di comunicazione unico per una comunità o un popolo.",
                fr: "Un système de communication propre à une communauté ou un peuple."
            },
            emoji: "🗣️🌍"
        },
        {
            word: "escriure",
            translations: { 
                en: "to write", 
                sv: "att skriva", 
                es: "escribir", 
                it: "scrivere", 
                fr: "écrire" 
            },
            description: {
                ca: "Representar paraules o idees amb lletres o signes sobre una superfície.",
                en: "To represent words or ideas with letters or signs on a surface.",
                sv: "Att representera ord eller idéer med bokstäver eller tecken på en yta.",
                es: "Representar palabras o ideas con letras o signos sobre una superficie.",
                it: "Rappresentare parole o idee con lettere o segni su una superficie.",
                fr: "Représenter des mots ou des idées avec des lettres ou des signes sur une surface."
            },
            emoji: "✍️📝"
        },
        {
            word: "vells",
            translations: { 
                en: "elders", 
                sv: "äldre", 
                es: "mayores", 
                it: "anziani", 
                fr: "aînés" 
            },
            description: {
                ca: "Persones d’edat avançada, sovint amb molta experiència o saviesa.",
                en: "People of advanced age, often with a lot of experience or wisdom.",
                sv: "Personer i hög ålder, ofta med mycket erfarenhet eller visdom.",
                es: "Personas de edad avanzada, a menudo con mucha experiencia o sabiduría.",
                it: "Persone di età avanzata, spesso con molta esperienza o saggezza.",
                fr: "Personnes d'âge avancé, souvent avec beaucoup d'expérience ou de sagesse."
            },
            emoji: "👴👵"
        },
        {
            word: "vida",
            translations: { 
                en: "life", 
                sv: "liv", 
                es: "vida", 
                it: "vita", 
                fr: "vie" 
            },
            description: {
                ca: "L’existència d’un ésser viu, des del naixement fins a la mort.",
                en: "The existence of a living being, from birth to death.",
                sv: "Existensen av en levande varelse, från födsel till död.",
                es: "La existencia de un ser vivo, desde el nacimiento hasta la muerte.",
                it: "L'esistenza di un essere vivente, dalla nascita alla morte.",
                fr: "L'existence d'un être vivant, de la naissance à la mort."
            },
            emoji: "🌱💫"
        },
        {
            word: "lluitar",
            translations: { 
                en: "to fight", 
                sv: "att kämpa", 
                es: "luchar", 
                it: "combattere", 
                fr: "lutter" 
            },
            description: {
                ca: "Enfrontar-se a dificultats o adversaris per aconseguir un objectiu.",
                en: "To confront difficulties or opponents to achieve a goal.",
                sv: "Att konfrontera svårigheter eller motståndare för att nå ett mål.",
                es: "Enfrentarse a dificultades o adversarios para alcanzar un objetivo.",
                it: "Affrontare difficoltà o avversari per raggiungere un obiettivo.",
                fr: "Affronter des difficultés ou des adversaires pour atteindre un objectif."
            },
            emoji: "⚔️✊"
        },
        {
            word: "normes",
            translations: { 
                en: "rules", 
                sv: "regler", 
                es: "normas", 
                it: "regole", 
                fr: "règles" 
            },
            description: {
                ca: "Directrius o lleis que determinen com actuar o procedir.",
                en: "Guidelines or laws that determine how to act or proceed.",
                sv: "Riktlinjer eller lagar som bestämmer hur man ska agera eller gå till väga.",
                es: "Directrices o leyes que determinan cómo actuar o proceder.",
                it: "Linee guida o leggi che determinano come agire o procedere.",
                fr: "Directives ou lois qui déterminent comment agir ou procéder."
            },
            emoji: "📜"
        },
        {
            word: "moren",
            translations: { 
                en: "die", 
                sv: "dör", 
                es: "mueren", 
                it: "muoiono", 
                fr: "meurent" 
            },
            description: {
                ca: "Cessar d’existir o perdre la vida.",
                en: "To cease to exist or lose life.",
                sv: "Att sluta existera eller förlora livet.",
                es: "Cesar de existir o perder la vida.",
                it: "Cessare di esistere o perdere la vita.",
                fr: "Cesser d'exister ou perdre la vie."
            },
            emoji: "💀"
        },
        {
            word: "coses",
            translations: { 
                en: "things", 
                sv: "saker", 
                es: "cosas", 
                it: "cose", 
                fr: "choses" 
            },
            description: {
                ca: "Objectes, idees o conceptes diversos.",
                en: "Objects, ideas, or various concepts.",
                sv: "Föremål, idéer eller olika begrepp.",
                es: "Objetos, ideas o conceptos diversos.",
                it: "Oggetti, idee o concetti vari.",
                fr: "Objets, idées ou concepts divers."
            },
            emoji: "🛠️💡"
        },
        {
            word: "nostre",
            translations: { 
                en: "our", 
                sv: "vår", 
                es: "nuestro", 
                it: "nostro", 
                fr: "notre" 
            },
            description: {
                ca: "Pertanyent o relacionat amb nosaltres.",
                en: "Belonging to or related to us.",
                sv: "Som tillhör eller är relaterat till oss.",
                es: "Perteneciente o relacionado con nosotros.",
                it: "Appartenente o relativo a noi.",
                fr: "Appartenant ou lié à nous."
            },
            emoji: "🤝"
        },
        {
            word: "imposen",
            translations: { 
                en: "impose", 
                sv: "tvingar på", 
                es: "imponen", 
                it: "impongono", 
                fr: "imposent" 
            },
            description: {
                ca: "Forçar algú a acceptar una cosa sense el seu consentiment.",
                en: "To force someone to accept something without their consent.",
                sv: "Att tvinga någon att acceptera något utan deras samtycke.",
                es: "Forzar a alguien a aceptar algo sin su consentimiento.",
                it: "Costringere qualcuno ad accettare qualcosa senza il suo consenso.",
                fr: "Forcer quelqu'un à accepter quelque chose sans son consentement."
            },
            emoji: "✋❌"
        },
        {
            word: "llengües minoritzades",
            translations: { 
                en: "minorized languages", 
                sv: "minoritetsförtryckta språk", 
                es: "lenguas minorizadas", 
                it: "lingue marginalizzate", 
                fr: "langues minorisées" 
            },
            description: {
                ca: "Llengües que han estat deliberadament desplaçades o reduïdes a una situació de desavantatge polític, social o cultural, sovint per polítiques d’imposició lingüística. És diferent de &quot;llengua minoritària&quot;, que es refereix a idiomes amb pocs parlants, independentment de la seua situació política o social.",
                en: "Languages that have been deliberately displaced or reduced to a politically, socially, or culturally disadvantaged position, often due to linguistic imposition policies. This is different from &quot;minority language&quot;, which refers to languages with few speakers, regardless of their political or social situation.",
                sv: "Språk som avsiktligt har trängts undan eller reducerats till en politisk, social eller kulturell nackdel, ofta på grund av språkliga påtvingningspolitik. Detta skiljer sig från &quot;minoritetspråk&quot;, som hänvisar till språk med få talare, oavsett deras politiska eller sociala situation.",
                es: "Lenguas que han sido deliberadamente desplazadas o reducidas a una situación de desventaja política, social o cultural, a menudo debido a políticas de imposición lingüística. Es diferente del término &quot;lengua minoritaria&quot;, que se refiere a un idioma con pocos hablantes, independientemente de su situación política o social.",
                it: "Lingue che sono state deliberatamente emarginate o ridotte a una posizione di svantaggio politico, sociale o culturale, spesso a causa di politiche di imposizione linguistica. È diverso dal termine &quot;lingua minoritaria&quot;, che si riferisce a lingue con pochi parlanti, indipendentemente dalla loro situazione politica o sociale.",
                fr: "Langues qui ont été délibérément marginalisées ou réduites à une position désavantagée sur le plan politique, social ou culturel, souvent à cause de politiques d'imposition linguistique. Cela diffère de 'langue minoritaire', qui fait référence à un idiome avec peu de locuteurs, indépendamment de sa situation politique ou sociale."
            },
            emoji: "🧑‍🤝‍🧑⬇️🗣️🚫"
        },
        {
            word: "encara no són",
            translations: { 
                en: "they are not yet", 
                sv: "de är inte ännu", 
                es: "aún no son", 
                it: "non sono ancora", 
                fr: "ils ne sont pas encore" 
            },
            description: {
                ca: "Expressa que una situació o estat encara no s'ha aconseguit.",
                en: "Expresses that a situation or state has not yet been achieved.",
                sv: "Uttrycker att en situation eller ett tillstånd ännu inte har uppnåtts.",
                es: "Expresa que una situación o estado aún no se ha logrado.",
                it: "Esprime che una situazione o uno stato non è ancora stato raggiunto.",
                fr: "Exprime qu'une situation ou un état n'a pas encore été atteint."
            },
            emoji: "⏳"
        },
        {
            word: "cultura popular",
            translations: { 
                en: "popular culture", 
                sv: "folkkultur", 
                es: "cultura popular", 
                it: "cultura popolare", 
                fr: "culture populaire" 
            },
            description: {
                ca: "Conjunt de tradicions, costums i creacions culturals pròpies del poble.",
                en: "A set of traditions, customs, and cultural creations belonging to the people.",
                sv: "En uppsättning traditioner, seder och kulturella skapelser som tillhör folket.",
                es: "Conjunto de tradiciones, costumbres y creaciones culturales propias del pueblo.",
                it: "Insieme di tradizioni, usanze e creazioni culturali proprie del popolo.",
                fr: "Ensemble de traditions, coutumes et créations culturelles propres au peuple."
            },
            emoji: "🎭🌍"
        },
        {
            word: "peça d'unitat",
            translations: { 
                en: "a piece of unity", 
                sv: "en enhetsdel", 
                es: "una pieza de unidad", 
                it: "un pezzo di unità", 
                fr: "un élément d'unité" 
            },
            description: {
                ca: "Una cosa que contribueix a unir o cohesionar un col·lectiu.",
                en: "Something that helps to unite or bring cohesion to a group.",
                sv: "Något som hjälper till att förena eller skapa sammanhållning i en grupp.",
                es: "Algo que contribuye a unir o cohesionar un colectivo.",
                it: "Qualcosa che aiuta a unire o portare coesione a un gruppo.",
                fr: "Quelque chose qui aide à unir ou à apporter de la cohésion à un groupe."
            },
            emoji: "🧩🤝"
        },
        {
            word: "resistir",
            translations: { 
                en: "to resist", 
                sv: "att motstå", 
                es: "resistir", 
                it: "resistere", 
                fr: "résister" 
            },
            description: {
                ca: "Mantenir-se ferm davant d'una adversitat o opressió.",
                en: "To remain firm in the face of adversity or oppression.",
                sv: "Att stå fast inför motgång eller förtryck.",
                es: "Mantenerse firme ante una adversidad u opresión.",
                it: "Rimanere fermi di fronte a un'avversità o oppressione.",
                fr: "Rester ferme face à l'adversité ou à l'oppression."
            },
            emoji: "✊💪"
        },
        {
            word: "ells fan resistència",
            translations: { 
                en: "they resist", 
                sv: "de gör motstånd", 
                es: "ellos hacen resistencia", 
                it: "loro resistono", 
                fr: "ils font résistance" 
            },
            description: {
                ca: "Indica l'acció col·lectiva de resistir davant d'una adversitat.",
                en: "Indicates the collective act of resisting adversity.",
                sv: "Indikerar den kollektiva handlingen att göra motstånd mot motgångar.",
                es: "Indica la acción colectiva de resistir ante una adversidad.",
                it: "Indica l'atto collettivo di resistere davanti a un'avversità.",
                fr: "Indique l'acte collectif de résister à l'adversité."
            },
            emoji: "🛡️"
        },
        {
            word: "les escoles",
            translations: { 
                en: "the schools", 
                sv: "skolorna", 
                es: "las escuelas", 
                it: "le scuole", 
                fr: "les écoles" 
            },
            description: {
                ca: "Institucions educatives on els alumnes aprenen i es formen.",
                en: "Educational institutions where students learn and are trained.",
                sv: "Utbildningsinstitutioner där elever lär sig och utbildas.",
                es: "Instituciones educativas donde los estudiantes aprenden y se forman.",
                it: "Istituzioni educative dove gli studenti imparano e si formano.",
                fr: "Institutions éducatives où les élèves apprennent et se forment."
            },
            emoji: "🏫🎓📚✍🏻"
        },
        {
            word: "invasió cultural",
            translations: { 
                en: "cultural invasion", 
                sv: "kulturell invasion", 
                es: "invasión cultural", 
                it: "invasione culturale", 
                fr: "invasion culturelle" 
            },
            description: {
                ca: "La substitució o dominació d’una cultura per una altra més poderosa.",
                en: "The replacement or domination of one culture by a more powerful one.",
                sv: "Ersättningen eller domineringen av en kultur av en starkare.",
                es: "El reemplazo o dominación de una cultura por otra más poderosa.",
                it: "La sostituzione o dominazione di una cultura da parte di una più potente.",
                fr: "Le remplacement ou la domination d'une culture par une autre plus puissante."
            },
            emoji: "🌍➡️🎭"
        },
        {
            word: "llengües mortes",
            translations: { 
                en: "dead languages", 
                sv: "döda språk", 
                es: "lenguas muertas", 
                it: "lingue morte", 
                fr: "langues mortes" 
            },
            description: {
                ca: "Idiomes que ja no tenen parlants actius com a llengua nativa.",
                en: "Languages that no longer have active native speakers.",
                sv: "Språk som inte längre har aktiva modersmålstalare.",
                es: "Idiomas que ya no tienen hablantes activos como lengua nativa.",
                it: "Lingue che non hanno più parlanti attivi come lingua nativa.",
                fr: "Langues qui n'ont plus de locuteurs actifs comme langue maternelle."
            },
            emoji: "⚰️🗣️"
        },
        {
            word: "te pressionen",
            translations: { 
                en: "they pressure you", 
                sv: "de pressar dig", 
                es: "te presionan", 
                it: "ti mettono pressione", 
                fr: "ils te mettent la pression" 
            },
            description: {
                ca: "Forçar o influir algú per aconseguir que faci alguna cosa.",
                en: "To force or influence someone to do something.",
                sv: "Att tvinga eller påverka någon att göra något.",
                es: "Forzar o influir en alguien para que haga algo.",
                it: "Costringere o influenzare qualcuno a fare qualcosa.",
                fr: "Forcer ou influencer quelqu'un à faire quelque chose."
            },
            emoji: "💪➡️😟"
        }
    ]
    
    },
    
    "somOest": {
        videoId: "eZpeD0l9cCc",
        phrases: [
          { text: "M'he criat ____ pagesos i carrinclons, homes que s'aferren a les seves tradicions.", answer: "entre", startTime: 16, endTime: 24 },
          { text: "Gent de terra, gent de ____, en una frontera on la mentida no hi té lloc.", answer: "foc", startTime: 24, endTime: 32 },
          { text: "On es creuen els ____ dels odis i els rancors i els destins de les nacions.", answer: "camins", startTime: 32, endTime: 38 },
          { text: "Soc de l'oest de Catalunya, la ____ on es pon el sol, més enllà de les muntanyes, entre les valls i els aiguamolls.", answer: "terra", startTime: 38, endTime: 55 },
          { text: "On la botifarra ____ es fa de ceba i sang, i la bota plena fa el camí del vianant per indrets de pedra i fang.", answer: "encara", startTime: 56, endTime: 67 },
          { text: "On el blau del ____ és tot el que tenim de mar penjat en l'horitzó un estel brillarà en la fosca nit si el cel és clar.", answer: "cel", startTime: 67, endTime: 78 },
          { text: "Soc de l'oest de Catalunya, la terra on es pon el ____, més enllà de les muntanyes, entre les valls i els aiguamolls.", answer: "sol", startTime: 78, endTime: 95 },
          { text: "Regadius, hortes i terra de secà ____ quan Déu vol i tempesta sobre el pla i la boira cobrint la vall.", answer: "pluja", startTime: 110, endTime: 121 },
          { text: "Històries contades a la ____ de la llar quan la nit és llarga i les hores cal matar, esperant l'endemà.", answer: "vora", startTime: 121, endTime: 132 },
          { text: "Soc de l'oest de Catalunya, la terra on es ____ el sol, més enllà de les muntanyes, entre les valls i els aiguamolls.", answer: "pon", startTime: 132, endTime: 149 },
          { text: "De l'oest de Catalunya, la terra on es pon el sol, més enllà de les muntanyes, entre les ____ i els aiguamolls...", answer: "valls", startTime: 158, endTime: 179 },
         
        ],
      keyWords: [
        {
            word: "aiguamolls",
            translations: { 
                en: "wetlands", 
                sv: "våtmarker", 
                es: "humedales", 
                it: "zone umide", 
                fr: "zones humides" 
            },
            description: {
                ca: "Zones de terra amb alta humitat, sovint prop de rius o mars.",
                en: "Areas of land with high moisture, often near rivers or seas.",
                sv: "Områden med hög fuktighet, ofta nära floder eller hav.",
                es: "Áreas de tierra con alta humedad, a menudo cerca de ríos o mares.",
                it: "Aree di terra con alta umidità, spesso vicino a fiumi o mari.",
                fr: "Zones de terre avec une forte humidité, souvent près de rivières ou de mers."
            },
            emoji: "🌾🌊"
        },
        {
            word: "m'he criat",
            translations: { 
                en: "I was raised", 
                sv: "jag växte upp", 
                es: "me crié", 
                it: "sono cresciuto", 
                fr: "j'ai grandi" 
            },
            description: {
                ca: "Parla del lloc i ambient on una persona ha crescut.",
                en: "Refers to the place and environment where someone grew up.",
                sv: "Syftar på platsen och miljön där någon växte upp.",
                es: "Se refiere al lugar y entorno donde alguien creció.",
                it: "Si riferisce al luogo e all'ambiente in cui qualcuno è cresciuto.",
                fr: "Fait référence à l'endroit et à l'environnement où quelqu'un a grandi."
            },
            emoji: "👶🏡"
        },
        {
            word: "entre",
            translations: { 
                en: "between", 
                sv: "mellan", 
                es: "entre", 
                it: "tra", 
                fr: "entre" 
            },
            description: {
                ca: "Indica que alguna cosa està situada en el mig de dues o més.",
                en: "Indicates that something is situated in the middle of two or more.",
                sv: "Indikerar att något är beläget mitt emellan två eller fler.",
                es: "Indica que algo está situado en medio de dos o más.",
                it: "Indica che qualcosa è situato in mezzo a due o più.",
                fr: "Indique que quelque chose est situé entre deux ou plusieurs."
            },
            emoji: "↔️"
        },
        {
            word: "carrinclons",
            translations: { 
                en: "old-fashioned", 
                sv: "gammalmodig", 
                es: "anticuados", 
                it: "all'antica", 
                fr: "démodés" 
            },
            description: {
                ca: "Es diu de persones o coses que semblen antiquades o poc modernes.",
                en: "Refers to people or things that seem outdated or not modern.",
                sv: "Syftar på personer eller saker som verkar föråldrade eller omoderna.",
                es: "Se refiere a personas o cosas que parecen anticuadas o poco modernas.",
                it: "Si riferisce a persone o cose che sembrano antiquate o non moderne.",
                fr: "Se dit de personnes ou de choses qui semblent dépassées ou pas modernes."
            },
            emoji: "🎩📜"
        },
        {
            word: "pagesos",
            translations: { 
                en: "farmers", 
                sv: "bönder", 
                es: "campesinos", 
                it: "contadini", 
                fr: "paysans" 
            },
            description: {
                ca: "Persones que treballen la terra o crien animals per viure.",
                en: "People who work the land or raise animals for a living.",
                sv: "Personer som arbetar med jordbruk eller djuruppfödning.",
                es: "Personas que trabajan la tierra o crían animales para vivir.",
                it: "Persone che lavorano la terra o allevano animali per vivere.",
                fr: "Personnes qui travaillent la terre ou élèvent des animaux pour vivre."
            },
            emoji: "👩‍🌾🌾"
        },
        {
            word: "l'endemà",
            translations: { 
                en: "the next day", 
                sv: "nästa dag", 
                es: "el día siguiente", 
                it: "il giorno dopo", 
                fr: "le lendemain" 
            },
            description: {
                ca: "Es refereix al dia que ve després d’avui.",
                en: "Refers to the day after today.",
                sv: "Syftar på dagen efter idag.",
                es: "Se refiere al día después de hoy.",
                it: "Si riferisce al giorno dopo oggi.",
                fr: "Fait référence au jour après aujourd'hui."
            },
            emoji: "📅➡️"
        },
        {
            word: "les hores cal matar",
            translations: { 
                en: "the hours must be killed", 
                sv: "timmarna måste dödas", 
                es: "las horas hay que matarlas", 
                it: "le ore vanno uccise", 
                fr: "il faut tuer les heures" 
            },
            description: {
                ca: "Una expressió que significa passar el temps en espera.",
                en: "An expression meaning to pass the time while waiting.",
                sv: "Ett uttryck som betyder att fördriva tiden medan man väntar.",
                es: "Una expresión que significa pasar el tiempo mientras se espera.",
                it: "Un'espressione che significa passare il tempo aspettando.",
                fr: "Une expression qui signifie passer le temps en attendant."
            },
            emoji: "⏳😴"
        },
        {
            word: "caldre",
            translations: { 
                en: "to be necessary", 
                sv: "att vara nödvändigt", 
                es: "ser necesario", 
                it: "essere necessario", 
                fr: "être nécessaire" 
            },
            description: {
                ca: "Indica obligació o necessitat de fer una cosa.",
                en: "Indicates an obligation or need to do something.",
                sv: "Indikerar en skyldighet eller ett behov av att göra något.",
                es: "Indica obligación o necesidad de hacer algo.",
                it: "Indica un'obbligazione o una necessità di fare qualcosa.",
                fr: "Indique une obligation ou un besoin de faire quelque chose."
            },
            emoji: "✔️"
        },
        {
            word: "es pon el sol",
            translations: { 
                en: "the sun sets", 
                sv: "solen går ner", 
                es: "se pone el sol", 
                it: "il sole tramonta", 
                fr: "le soleil se couche" 
            },
            description: {
                ca: "Moment del dia en què el sol baixa per sota de l’horitzó.",
                en: "The time of day when the sun goes below the horizon.",
                sv: "Den tid på dagen när solen går under horisonten.",
                es: "El momento del día en que el sol baja por debajo del horizonte.",
                it: "Il momento della giornata in cui il sole scende sotto l'orizzonte.",
                fr: "Le moment de la journée où le soleil descend sous l'horizon."
            },
            emoji: "🌅"
        },
        {
            word: "les valls",
            translations: { 
                en: "the valleys", 
                sv: "dalarna", 
                es: "los valles", 
                it: "le valli", 
                fr: "les vallées" 
            },
            description: {
                ca: "Terreny baix entre muntanyes o turons.",
                en: "Low land between mountains or hills.",
                sv: "Låg mark mellan berg eller kullar.",
                es: "Terreno bajo entre montañas o colinas.",
                it: "Terreno basso tra montagne o colline.",
                fr: "Terrain bas entre montagnes ou collines."
            },
            emoji: "🏞️"
        },
        {
            word: "vora de la llar",
            translations: { 
                en: "by the hearth", 
                sv: "vid härden", 
                es: "junto al hogar", 
                it: "vicino al focolare", 
                fr: "près du foyer" 
            },
            description: {
                ca: "A prop del foc de la casa, un lloc tradicionalment acollidor.",
                en: "Near the home's fire, a traditionally cozy place.",
                sv: "Nära hemmets eld, en traditionellt mysig plats.",
                es: "Cerca del fuego de la casa, un lugar tradicionalmente acogedor.",
                it: "Vicino al fuoco della casa, un luogo tradizionalmente accogliente.",
                fr: "Près du feu de la maison, un endroit traditionnellement chaleureux."
            },
            emoji: "🔥🏠"
        },
        {
            word: "terra de secà",
            translations: { 
                en: "dryland", 
                sv: "torr mark", 
                es: "tierra de secano", 
                it: "terra arida", 
                fr: "terre sèche" 
            },
            description: {
                ca: "Territori agrícola que no es rega i depèn de la pluja.",
                en: "Agricultural land that is not irrigated and depends on rain.",
                sv: "Jordbruksmark som inte bevattnas och är beroende av regn.",
                es: "Terreno agrícola que no se riega y depende de la lluvia.",
                it: "Terreno agricolo che non viene irrigato e dipende dalla pioggia.",
                fr: "Terre agricole non irriguée qui dépend de la pluie."
            },
            emoji: "🌾☀️"
        },
        {
            word: "oest",
            translations: { 
                en: "west", 
                sv: "väst", 
                es: "oeste", 
                it: "ovest", 
                fr: "ouest" 
            },
            description: {
                ca: "Un dels quatre punts cardinals, oposat a l'est.",
                en: "One of the four cardinal points, opposite of east.",
                sv: "En av de fyra väderstrecken, motsatsen till öst.",
                es: "Uno de los cuatro puntos cardinales, opuesto al este.",
                it: "Uno dei quattro punti cardinali, opposto all'est.",
                fr: "Un des quatre points cardinaux, opposé à l'est."
            },
            emoji: "⬅️"
        },
        {
            word: "esperant",
            translations: { 
                en: "waiting", 
                sv: "väntar", 
                es: "esperando", 
                it: "aspettando", 
                fr: "en attendant" 
            },
            description: {
                ca: "Acció de mantenir-se en pausa fins que passi alguna cosa.",
                en: "The act of staying in pause until something happens.",
                sv: "Handlingen att stanna i väntan tills något händer.",
                es: "La acción de permanecer en pausa hasta que ocurra algo.",
                it: "L'atto di rimanere in attesa fino a che succeda qualcosa.",
                fr: "L'acte de rester en pause jusqu'à ce que quelque chose se passe."
            },
            emoji: "⏳"
        }
        
      ]
        
      },
         
    "tantComMeQuedara": {
        videoId: "YNLKeVxUNDw",
        phrases: [
          { text: "Tant com me quedarà un alè de ____, tant com me quedarà una gota de sang, jo te cantaré, dolça terra ferida, jo te cantaré amb els sanglots d'un amant.", answer: "vida", startTime: 12, endTime: 36 },
          { text: "Tant com me quedarà un alè de vida, tant com me quedarà un fileret de ____. Jo te cantaré, dolça pàtria ferida, jo te cantaré malaguanyat país meu.", answer: "veu", startTime: 36, endTime: 60 },
          { text: "M'és igual si ja mil ____, m'és igual si ja mil pintors han contat tes amoretes, han glorificat tos colors.", answer: "poetes", startTime: 60, endTime: 73 },
          { text: "Amorosos de Cotlliure, ____ del Canigó, alabant el plaer de viure sota el cel blau de Rosselló.", answer: "embadalits", startTime: 73, endTime: 85 },
          { text: "Banyant la ufanosa Albera dins l'ona ____ d'Argelers i fent-se l'aspra Corbera guardiana del Barcarès.", answer: "calma", startTime: 85, endTime: 97 },
          { text: "Tant com me quedarà un alè de vida, tant com me quedarà una ____ de sang, jo te cantaré, dolça terra ferida, jo te cantaré amb els sanglots d'un amant.", answer: "gota", startTime: 97, endTime: 120 },
          { text: "Tant com me quedarà un alè de vida, tant com me quedarà un fileret de veu. Jo te cantaré, dolça pàtria ____, jo te cantaré malaguanyat país meu.", answer: "ferida", startTime: 120, endTime: 144 },
          { text: "M'és igual si ja mil poetes, m'és igual si ja mil ____ han contat tes amoretes, han glorificat tos colors.", answer: "pintors", startTime: 144, endTime: 156 },
          { text: "M'és igual si ja ____ teles s'han emprat del Castellet i si les teves esteles, ja han ballat dins d'un sonet.", answer: "mil", startTime: 156, endTime: 168 },
          { text: "Si mil cops la tramuntana ha fet ____ tota una nit, si s'ha pintat la sardana com un ball d'amor infinit", answer: "sarau", startTime: 168, endTime: 180 },
          { text: "Tant com me quedarà un alè de vida, tant com me quedarà una gota de sang, jo te cantaré, dolça ____ ferida, jo te cantaré amb els sanglots d'un amant.", answer: "terra", startTime: 180, endTime: 204 },
          { text: "Tant com me quedarà un alè de vida, tant com me quedarà un fileret de ____. Jo te cantaré, dolça pàtria ferida, jo te cantaré malaguanyat país meu.", answer: "veu", startTime: 204, endTime: 228 },
          { text: "M'és ____ si la ginesta ja ha llorejat mil cançons. Si els esclats de nostra festa il·luminen els horitzons.", answer: "igual", startTime: 228, endTime: 241 },
          { text: "Si se sap que la ____ que jo tinc arrelada al cor. Sola, última i primera va ser feta de sang i d'or.", answer: "bandera", startTime: 240, endTime: 253 },
          { text: "M'és igual si ja mil poetes, m'és igual si ja mil pintors han contat tes ____, han glorificat tos colors.", answer: "amoretes", startTime: 252, endTime: 265 },
          { text: "Tant com me quedarà un alè de vida, tant com me quedarà un fileret de ____. Jo te cantaré, dolça pàtria ferida, jo te cantaré malaguanyat país meu.", answer: "veu", startTime: 265, endTime: 287 },
          { text: "Tant com me quedarà un alè de ____, tant com me quedarà un fileret de veu.", answer: "vida", startTime: 287, endTime: 317 },
        ],
        keyWords: [
            {
                word: "sanglots",
                translations: { 
                    en: "sobs", 
                    sv: "snyftningar", 
                    es: "sollozos", 
                    it: "singhiozzi", 
                    fr: "sanglots" 
                },
                description: {
                    ca: "Plor amb espasmes, sovint associat a una emoció intensa.",
                    en: "Crying with spasms, often associated with intense emotion.",
                    sv: "Gråt med spasmer, ofta förknippat med starka känslor.",
                    es: "Llorar con espasmos, a menudo asociado con emociones intensas.",
                    it: "Piangere con spasmi, spesso associato a emozioni intense.",
                    fr: "Pleurer avec des spasmes, souvent associé à une émotion intense."
                },
                emoji: "😢💔"
            },
            {
                word: "dolça pàtria",
                translations: { 
                    en: "sweet homeland", 
                    sv: "söta hemland", 
                    es: "dulce patria", 
                    it: "dolce patria", 
                    fr: "douce patrie" 
                },
                description: {
                    ca: "Un terme afectuós per descriure el país natal amb amor i nostàlgia.",
                    en: "An affectionate term to describe one's homeland with love and nostalgia.",
                    sv: "Ett kärleksfullt uttryck för att beskriva sitt hemland med kärlek och nostalgi.",
                    es: "Un término afectuoso para describir la patria con amor y nostalgia.",
                    it: "Un termine affettuoso per descrivere la propria patria con amore e nostalgia.",
                    fr: "Un terme affectueux pour décrire sa patrie avec amour et nostalgie."
                },
                emoji: "🏠💖"
            },
            {
                word: "amoretes",
                translations: { 
                    en: "flirtations", 
                    sv: "flirtar", 
                    es: "coqueteos", 
                    it: "flirt", 
                    fr: "flirts" 
                },
                description: {
                    ca: "Amors lleugers o petits gestos d’afecte romàntic.",
                    en: "Light romances or small gestures of romantic affection.",
                    sv: "Lätta romanser eller små gester av romantisk tillgivenhet.",
                    es: "Amores ligeros o pequeños gestos de afecto romántico.",
                    it: "Amori leggeri o piccoli gesti di affetto romantico.",
                    fr: "Petites romances ou gestes d'affection romantique."
                },
                emoji: "💕✨"
            },
            {
                word: "arrelada al cor",
                translations: { 
                    en: "rooted in the heart", 
                    sv: "rotad i hjärtat", 
                    es: "arraigada en el corazón", 
                    it: "radicata nel cuore", 
                    fr: "enracinée dans le cœur" 
                },
                description: {
                    ca: "Una expressió que simbolitza un vincle profund i indestructible.",
                    en: "An expression symbolizing a deep and unbreakable bond.",
                    sv: "Ett uttryck som symboliserar en djup och obruten förbindelse.",
                    es: "Una expresión que simboliza un vínculo profundo e indestructible.",
                    it: "Un'espressione che simboleggia un legame profondo e indistruttibile.",
                    fr: "Une expression symbolisant un lien profond et indestructible."
                },
                emoji: "🌱❤️"
            },
            {
                word: "Rosselló",
                translations: { 
                    en: "Roussillon", 
                    sv: "Roussillon", 
                    es: "Rosellón", 
                    it: "Rossiglione", 
                    fr: "Roussillon" 
                },
                description: {
                    ca: "Una comarca històrica del nord de Catalunya, situada a França.",
                    en: "A historic region in northern Catalonia, located in France.",
                    sv: "En historisk region i norra Katalonien, belägen i Frankrike.",
                    es: "Una comarca histórica del norte de Cataluña, situada en Francia.",
                    it: "Una regione storica del nord della Catalogna, situata in Francia.",
                    fr: "Une région historique du nord de la Catalogne, située en France."
                },
                emoji: "🗺️"
            },
            {
                word: "tramuntana",
                translations: { 
                    en: "north wind", 
                    sv: "nordanvind", 
                    es: "tramontana", 
                    it: "tramontana", 
                    fr: "tramontane" 
                },
                description: {
                    ca: "Un vent fred que bufa des del nord, característic del Rosselló.",
                    en: "A cold wind blowing from the north, characteristic of Rosselló.",
                    sv: "En kall vind som blåser från norr, typisk för Rosselló.",
                    es: "Un viento frío que sopla del norte, característico del Rosselló.",
                    it: "Un vento freddo che soffia da nord, caratteristico del Rosselló.",
                    fr: "Un vent froid soufflant du nord, caractéristique du Rosselló."
                },
                emoji: "🌬️❄️"
            },
            {
                word: "malaguanyat",
                translations: { 
                    en: "wasted", 
                    sv: "förlorat", 
                    es: "malogrado", 
                    it: "sprecato", 
                    fr: "gâché" 
                },
                description: {
                    ca: "Una expressió per descriure alguna cosa amb potencial perdut.",
                    en: "An expression to describe something with lost potential.",
                    sv: "Ett uttryck för att beskriva något med förlorad potential.",
                    es: "Una expresión para describir algo con potencial perdido.",
                    it: "Un'espressione per descrivere qualcosa con potenziale perso.",
                    fr: "Une expression pour décrire quelque chose au potentiel perdu."
                },
                emoji: "💔⚡"
            },
            {
                word: "sardana",
                translations: { 
                    en: "sardana", 
                    sv: "sardana", 
                    es: "sardana", 
                    it: "sardana", 
                    fr: "sardane" 
                },
                description: {
                    ca: "Una dansa tradicional catalana que es balla en cercle.",
                    en: "A traditional Catalan dance performed in a circle.",
                    sv: "En traditionell katalansk dans som dansas i en cirkel.",
                    es: "Un baile tradicional catalán que se baila en círculo.",
                    it: "Una danza tradizionale catalana eseguita in cerchio.",
                    fr: "Une danse traditionnelle catalane effectuée en cercle."
                },
                emoji: "💃🕺"
            },
            {
                word: "sarau",
                translations: { 
                    en: "party", 
                    sv: "fest", 
                    es: "fiesta", 
                    it: "festa", 
                    fr: "fête" 
                },
                description: {
                    ca: "Un terme informal per referir-se a una celebració alegre.",
                    en: "An informal term to refer to a joyful celebration.",
                    sv: "Ett informellt uttryck för att beskriva en glad fest.",
                    es: "Un término informal para referirse a una celebración alegre.",
                    it: "Un termine informale per riferirsi a una celebrazione gioiosa.",
                    fr: "Un terme informel pour désigner une célébration joyeuse."
                },
                emoji: "🎉✨"
            },
            {
                word: "ginesta",
                translations: { 
                    en: "broom plant", 
                    sv: "ginst", 
                    es: "retama", 
                    it: "ginestra", 
                    fr: "genêt" 
                },
                description: {
                    ca: "Una planta amb flors grogues sovint associada a Catalunya.",
                    en: "A plant with yellow flowers often associated with Catalonia.",
                    sv: "En växt med gula blommor som ofta förknippas med Katalonien.",
                    es: "Una planta con flores amarillas a menudo asociada con Cataluña.",
                    it: "Una pianta con fiori gialli spesso associata alla Catalogna.",
                    fr: "Une plante aux fleurs jaunes souvent associée à la Catalogne."
                },
                emoji: "🌼"
            },
            {
                word: "han glorificat",
                translations: { 
                    en: "have glorified", 
                    sv: "har glorifierat", 
                    es: "han glorificado", 
                    it: "hanno glorificato", 
                    fr: "ont glorifié" 
                },
                description: {
                    ca: "Expressa l'acte d'exaltar o elogiar alguna cosa amb admiració.",
                    en: "Expresses the act of exalting or praising something with admiration.",
                    sv: "Uttrycker handlingen att upphöja eller lovorda något med beundran.",
                    es: "Expresa el acto de exaltar o elogiar algo con admiración.",
                    it: "Esprime l'atto di esaltare o elogiare qualcosa con ammirazione.",
                    fr: "Exprime l'acte d'exalter ou de louer quelque chose avec admiration."
                },
                emoji: "✨📜"
            },
            {
                word: "tos colors",
                translations: { 
                    en: "your colors", 
                    sv: "dina färger", 
                    es: "tus colores", 
                    it: "i tuoi colori", 
                    fr: "tes couleurs" 
                },
                description: {
                    ca: "Una referència poètica als tons i matisos visuals que representen la terra o el paisatge.",
                    en: "A poetic reference to the tones and hues representing the land or landscape.",
                    sv: "En poetisk referens till tonerna och nyanserna som representerar landet eller landskapet.",
                    es: "Una referencia poética a los tonos y matices que representan la tierra o el paisaje.",
                    it: "Un riferimento poetico ai toni e alle sfumature che rappresentano la terra o il paesaggio.",
                    fr: "Une référence poétique aux tons et nuances représentant la terre ou le paysage."
                },
                emoji: "🎨🌄"
            },
            {
                word: "Argelers",
                translations: { 
                    en: "Argelers", 
                    sv: "Argelers", 
                    es: "Argelès", 
                    it: "Argelers ", 
                    fr: "Argelès-sur-mer" 
                },
                description: {
                    ca: "Una localitat de la Catalunya del Nord, coneguda per les seues platges i la seua història.",
                    en: "A town in Northern Catalonia, known for its beaches and history.",
                    sv: "En stad i norra Katalonien, känd för sina stränder och sin historia.",
                    es: "Una localidad de la Cataluña del Norte, conocida por sus playas e historia.",
                    it: "Una città della Catalogna settentrionale, nota per le sue spiagge e la sua storia.",
                    fr: "Une ville du Roussillon en Pays Catalan connue pour ses plages et son histoire."
                },
                emoji: "🏖️🏘️"
            },
            {
                word: "Castellet",
                translations: { 
                    en: "Small castle", 
                    sv: "Litet slott", 
                    es: "Castillito", 
                    it: "Castellitto", 
                    fr: "Castellet (petit château)" 
                },
                description: {
                    ca: "Un símbol del patrimoni cultural de la ciutat de Perpinyà.",
                    en: "A symbol of the cultural heritage of the city of Perpinyà.",
                    sv: "En symbol för kulturarvet i staden Perpinyà.",
                    es: "Un símbolo del patrimonio cultural de la ciudad de Perpinyà.",
                    it: "Un simbolo del patrimonio culturale della città di Perpinyà.",
                    fr: "Un symbole du patrimoine culturel de la ville de Perpignan."
                },
                emoji: "🏰"
            },
            {
                word: "han ballat",
                translations: { 
                    en: "have danced", 
                    sv: "har dansat", 
                    es: "han bailado", 
                    it: "hanno ballato", 
                    fr: "ont dansé" 
                },
                description: {
                    ca: "Una acció associada a expressar alegria o art mitjançant el moviment.",
                    en: "An action associated with expressing joy or art through movement.",
                    sv: "En handling som förknippas med att uttrycka glädje eller konst genom rörelse.",
                    es: "Una acción asociada a expresar alegría o arte mediante el movimiento.",
                    it: "Un'azione associata all'esprimere gioia o arte attraverso il movimento.",
                    fr: "Une action associée à l'expression de la joie ou de l'art par le mouvement."
                },
                emoji: "💃🕺"
            },
            {
                word: "m'és igual",
                translations: { 
                    en: "I don't mind", 
                    sv: "det spelar ingen roll", 
                    es: "me da igual", 
                    it: "non mi importa", 
                    fr: "ça m'est égal" 
                },
                description: {
                    ca: "Una expressió per indicar indiferència o acceptació.",
                    en: "An expression to indicate indifference or acceptance.",
                    sv: "Ett uttryck för att indikera likgiltighet eller acceptans.",
                    es: "Una expresión para indicar indiferencia o aceptación.",
                    it: "Un'espressione per indicare indifferenza o accettazione.",
                    fr: "Une expression pour indiquer l'indifférence ou l'acceptation."
                },
                emoji: "🤷"
            },
            {
                word: "va ser feta de sang i d'or",
                translations: { 
                    en: "it was made of blood and gold", 
                    sv: "den gjordes av blod och guld", 
                    es: "fue hecha de sangre y oro", 
                    it: "è stata fatta di sangue e d'oro", 
                    fr: "elle fut faite de sang et d'or" 
                },
                description: {
                    ca: "Es refereix a la llegenda de la creació de la senyera, on Guifré el Pelós, ferit, va traçar amb la sua sang les quatre barres sobre un escut d'or.",
                    en: "Refers to the legend of the creation of the Catalan flag, where Wilfred the Hairy, wounded, drew the four stripes with his blood on a gold shield.",
                    sv: "Syftar på legenden om Kataloniens flagga, där Wilfred den Hårige, sårad, ritade de fyra ränderna med sitt blod på en guldschild.",
                    es: "Se refiere a la leyenda de la creación de la senyera, donde Guifré el Pilós, herido, trazó con su sangre las cuatro barras sobre un escudo de oro.",
                    it: "Si riferisce alla leggenda della creazione della bandiera catalana, dove Guifré il Pelós, ferito, tracciò le quattro strisce con il suo sangue su uno scudo d'oro.",
                    fr: "Fait référence à la légende de la création du drapeau catalan, où Guifré le Velu, blessé, traça les quatre bandes avec son sang sur un bouclier doré."
                },
                emoji: "🟡🩸"
            },
            {
                word: "s'han emprat",
                translations: { 
                    en: "have been used", 
                    sv: "har använts", 
                    es: "se han usado", 
                    it: "sono stati usati", 
                    fr: "ont été utilisés" 
                },
                description: {
                    ca: "Fa referència a coses que han estat utilitzades amb un propòsit específic.",
                    en: "Refers to things that have been used for a specific purpose.",
                    sv: "Avser saker som har använts för ett specifikt syfte.",
                    es: "Se refiere a cosas que se han usado con un propósito específico.",
                    it: "Si riferisce a cose che sono state utilizzate per uno scopo specifico.",
                    fr: "Fait référence à des choses qui ont été utilisées à des fins spécifiques."
                },
                emoji: "🛠️"
            },
            {
                word: "han contat",
                translations: { 
                    en: "have told", 
                    sv: "har berättat", 
                    es: "han contado", 
                    it: "hanno raccontato", 
                    fr: "ont raconté" 
                },
                description: {
                    ca: "Es refereix a persones que han explicat històries o vivències.",
                    en: "Refers to people who have shared stories or experiences.",
                    sv: "Syftar på personer som har delat berättelser eller erfarenheter.",
                    es: "Se refiere a personas que han contado historias o experiencias.",
                    it: "Si riferisce a persone che hanno raccontato storie o esperienze.",
                    fr: "Fait référence à des personnes qui ont raconté des histoires ou des expériences."
                },
                emoji: "🗣️📖"
            },{
                word: "jo te cantaré",
                translations: { 
                    en: "I will sing to you", 
                    sv: "jag ska sjunga för dig", 
                    es: "yo te cantaré", 
                    it: "io ti canterò", 
                    fr: "je te chanterai" 
                },
                description: {
                    ca: "Una expressió d'amor o devoció en forma de cant.",
                    en: "An expression of love or devotion through song.",
                    sv: "Ett uttryck för kärlek eller hängivenhet genom sång.",
                    es: "Una expresión de amor o devoción en forma de canto.",
                    it: "Un'espressione di amore o devozione attraverso il canto.",
                    fr: "Une expression d'amour ou de dévotion par le chant."
                },
                emoji: "🎶❤️"
            },
            {
                word: "un alè de vida",
                translations: { 
                    en: "a breath of life", 
                    sv: "ett andetag av liv", 
                    es: "un aliento de vida", 
                    it: "un soffio di vita", 
                    fr: "un souffle de vie" 
                },
                description: {
                    ca: "Una metàfora que simbolitza l’energia vital que queda en una persona.",
                    en: "A metaphor symbolizing the vital energy remaining in a person.",
                    sv: "En metafor som symboliserar den livsenergi som finns kvar i en person.",
                    es: "Una metáfora que simboliza la energía vital que queda en una persona.",
                    it: "Una metafora che simboleggia l'energia vitale rimanente in una persona.",
                    fr: "Une métaphore symbolisant l'énergie vitale qui reste chez une personne."
                },
                emoji: "💨❤️"
            },
            {
                word: "un fileret de veu",
                translations: { 
                    en: "a thin thread of voice", 
                    sv: "en tunn rösttråd", 
                    es: "un hilito de voz", 
                    it: "un filo di voce", 
                    fr: "un filet de voix" 
                },
                description: {
                    ca: "Es refereix a una veu molt feble, com si fos un fil prim.",
                    en: "Refers to a very weak voice, like a thin thread.",
                    sv: "Syftar på en mycket svag röst, som en tunn tråd.",
                    es: "Se refiere a una voz muy débil, como si fuera un hilo fino.",
                    it: "Si riferisce a una voce molto debole, come un filo sottile.",
                    fr: "Fait référence à une voix très faible, comme un fil fin."
                },
                emoji: "🗣️🧵"
            },
            {
                word: "embadalits del Canigó",
                translations: { 
                    en: "entranced by Canigó", 
                    sv: "förhäxade av Canigó", 
                    es: "embelesados por el Canigó", 
                    it: "incantati dal Canigó", 
                    fr: "envoûtés par le Canigó" 
                },
                description: {
                    ca: "Referència poètica a persones captivades per la bellesa de la muntanya Canigó, un símbol de la cultura catalana.",
                    en: "A poetic reference to people captivated by the beauty of Mount Canigó, a symbol of Catalan culture.",
                    sv: "En poetisk referens till människor som är fängslade av skönheten i berget Canigó, en symbol för katalansk kultur.",
                    es: "Una referencia poética a personas cautivadas por la belleza del monte Canigó, un símbolo de la cultura catalana.",
                    it: "Un riferimento poetico a persone incantate dalla bellezza del Monte Canigó, un simbolo della cultura catalana.",
                    fr: "Une référence poétique à des personnes captivées par la beauté du mont Canigó, symbole de la culture catalane."
                },
                emoji: "⛰️✨"
            },
            {
                word: "amorosos de Cotlliure",
                translations: { 
                    en: "lovers of Cotlliure", 
                    sv: "älskare av Cotlliure", 
                    es: "amantes de Cotlliure", 
                    it: "amanti di Cotlliure", 
                    fr: "amoureux de Collioure" 
                },
                description: {
                    ca: "Cotlliure és una ciutat encantadora de la Catalunya del Nord, coneguda per la seua bellesa i inspiració artística.",
                    en: "Cotlliure is a charming town in Northern Catalonia, known for its beauty and artistic inspiration.",
                    sv: "Cotlliure är en charmig stad i norra Katalonien, känd för sin skönhet och konstnärliga inspiration.",
                    es: "Cotlliure es una ciudad encantadora de la Cataluña del Norte, conocida por su belleza e inspiración artística.",
                    it: "Cotlliure è una città incantevole della Catalogna settentrionale, nota per la sua bellezza e ispirazione artistica.",
                    fr: "Cotlliure est une ville charmante du Roussillon en Pays Catalan, connue pour sa beauté et son inspiration artistique."
                },
                emoji: "🏘️🎨"
            },
            {
                word: "alabant",
                translations: { 
                    en: "praising", 
                    sv: "prisande", 
                    es: "alabando", 
                    it: "lodando", 
                    fr: "louant" 
                },
                description: {
                    ca: "Expressió d’admiració o reconeixement envers algú o alguna cosa.",
                    en: "An expression of admiration or recognition toward someone or something.",
                    sv: "Ett uttryck för beundran eller erkännande mot någon eller något.",
                    es: "Expresión de admiración o reconocimiento hacia alguien o algo.",
                    it: "Un'espressione di ammirazione o riconoscimento verso qualcuno o qualcosa.",
                    fr: "Une expression d'admiration ou de reconnaissance envers quelqu'un ou quelque chose."
                },
                emoji: "👏✨"
            },
            {
                word: "la ufanosa Albera",
                translations: { 
                    en: "the lush Albera", 
                    sv: "den frodiga Albera", 
                    es: "la exuberante Albera", 
                    it: "l'Albera rigogliosa", 
                    fr: "l'Albera luxuriante" 
                },
                description: {
                    ca: "Referència a les muntanyes de l'Albera, conegudes per la seua bellesa i vegetació.",
                    en: "Refers to the Albera mountains, known for their beauty and lush vegetation.",
                    sv: "Syftar på Albera-bergen, kända för sin skönhet och frodiga vegetation.",
                    es: "Se refiere a las montañas de Albera, conocidas por su belleza y vegetación exuberante.",
                    it: "Si riferisce ai monti Albera, noti per la loro bellezza e vegetazione rigogliosa.",
                    fr: "Fait référence aux montagnes de l'Albera, connues pour leur beauté et leur végétation luxuriante."
                },
                emoji: "⛰️🌿"
            },
            {
                word: "banyant",
                translations: { 
                    en: "bathing", 
                    sv: "badande", 
                    es: "bañando", 
                    it: "bagnando", 
                    fr: "baignant" 
                },
                description: {
                    ca: "Estar submergit en aigua o envoltat per un líquid.",
                    en: "To be submerged in water or surrounded by a liquid.",
                    sv: "Att vara nedsänkt i vatten eller omgiven av en vätska.",
                    es: "Estar sumergido en agua o rodeado por un líquido.",
                    it: "Essere immersi nell'acqua o circondati da un liquido.",
                    fr: "Être immergé dans l'eau ou entouré par un liquide."
                },
                emoji: "💦🌊"
            },
            {
                word: "guardiana del Barcarès",
                translations: { 
                    en: "guardian of Barcarès", 
                    sv: "väktare av Barcarès", 
                    es: "guardiana de Barcarès", 
                    it: "guardiana di Barcarès", 
                    fr: "gardienne du Barcarès" 
                },
                description: {
                    ca: "Barcarès és una localitat costanera al Rosselló. Ser-ne guardiana simbolitza protecció i vinculació amb el lloc.",
                    en: "Barcarès is a coastal town in Rosselló. Being its guardian symbolizes protection and connection to the place.",
                    sv: "Barcarès är en kuststad i Rosselló. Att vara dess väktare symboliserar skydd och koppling till platsen.",
                    es: "Barcarès es una localidad costera en el Rosellón. Ser su guardiana simboliza protección y conexión con el lugar.",
                    it: "Barcarès è una città costiera del Rossiglione. Esserne guardiana simboleggia protezione e legame con il luogo.",
                    fr: "Barcarès est une ville côtière du Roussillon. En être la gardienne symbolise la protection et le lien avec le lieu."
                },
                emoji: "🌊🛡️"
            }
            
            
        ]
      },
      "alguerBella": {
        videoId: "r4PELymBL5k",
        phrases: [
          { text: "En illeta de Sardenya hi ha un país que és un ____, d'un valor de més de l'or, de diamants i de dobletes.", answer: "tresor", startTime: 10, endTime: 25 },
          { text: "I la ____, qui fortuna, català és lo que parlem, que ningú no mos comprèn, solament en Catalunya.", answer: "llengua", startTime: 25, endTime: 40 },
          { text: "Oh, bella Alguer, per tots bella, de ____ lo món tu ses l'estrella.", answer: "tot", startTime: 41, endTime: 50 },
          { text: "A dins del ____ ses encarnada, tu ses la vida, tu ses la mar.", answer: "cor", startTime: 49, endTime: 56 },
          { text: "Oh, bella gruta de Cap de (la) Caça que tots de ____ venen per veure,", answer: "lluny", startTime: 56, endTime: 63 },
          { text: "i costejant la tua ____, d'una Alguer bella, oh Alguer bella.", answer: "costera", startTime: 63, endTime: 71 },
  
          { text: "Un bell ____, especialment lo bell sol dóna calor, més la mar no fa remor, tot calm i sense vent.", answer: "estiu", startTime: 72, endTime: 87 },
          { text: "Les nitades estrellades, totes ____ d'estrelletes. Qui passeja la costera, canta tu la serenada.", answer: "plenes", startTime: 87, endTime: 104 },
          { text: "Oh, bella gruta, de Cap de (la) Caça, que tots de lluny venen per ____, i costejant la tua costera, d'un Alguer bella.", answer: "veure", startTime: 119, endTime: 132 },
          { text: "Oh Alguer ____, d'una Alguer __, oh Alguer __.", answer: "bella", startTime: 132, endTime: 143 },

         
        ],
        keyWords: [
            {
                word: "gruta",
                translations: {
                    en: "grotto",
                    es: "gruta",
                    it: "grotta",
                    fr: "grotte",
                    sv: "grotta"
                },
                description: {
                    ca: "Cavitat en la roca o la terra que fa de refugi.",
                    en: "A cavity in the rock or earth serving as a shelter.",
                    es: "Una cavidad en la roca o la tierra que sirve de refugio.",
                    it: "Una cavità nella roccia o nel terreno che funge da rifugio.",
                    fr: "Une cavité dans la roche ou la terre servant de refuge.",
                    sv: "En hålighet i berg eller jord som fungerar som ett skydd."
                },
                emoji: "🕳️"
            },
            {
                word: "illeta",
                translations: {
                    en: "small island",
                    es: "islita",
                    it: "isolotto",
                    fr: "petite île",
                    sv: "liten ö"
                },
                description: {
                    ca: "Petit fragment de terra envoltat d'aigua.",
                    en: "A small piece of land surrounded by water. ",
                    es: "Un pequeño fragmento de tierra rodeado de agua.",
                    it: "Un piccolo pezzo di terra circondato dall'acqua.",
                    fr: "Un petit fragment de terre entouré d'eau.",
                    sv: "Ett litet landstycke omgivet av vatten."
                },
                emoji: "🏝️"
            },
            {
                word: "mia, tua, sua",
                translations: {
                    en: "my, your, his/her",
                    es: "mía, tuya, suya",
                    it: "mia, tua, sua",
                    fr: "ma, ta, sa",
                    sv: "min, din, hans/hennes"
                },
                description: {
                    ca: "Formes femenines dels possessius singulars en alguerès. També usades en català antic. En altres variants &quot;meva, teva, seva&quot; i &quot;meua, teua, seua&quot;",
                    en: "Forms of singular possessives in Alguerès. Also used in Old Catalan.",
                    es: "Formas de los posesivos singulares en alguerés. También usadas en catalán antiguo.",
                    it: "Forme dei possessivi singolari in algherese. Usate anche in catalano antico.",
                    fr: "Formes des possessifs singuliers en alguerès. Aussi utilisées en vieux catalan.",
                    sv: "Former av singulara possessiv på alguerès. Användes också på gammalkatalanska."
                },
                emoji: ""
            },
            {
                word: "mies, tues, sues",
                translations: {
                    en: "mine, yours, his/hers",
                    es: "mías, tuyas, suyas",
                    it: "mie, tue, sue",
                    fr: "miennes, tiennes, siennes",
                    sv: "mina, dina, hans/hennes"
                },
                description: {
                    ca: "Formes femenines dels possessius plurals en alguerès. També usades en català antic. En altres variants &quot;meves, teves, seves&quot; i &quot;meues, teues, seues&quot;",
                    en: "Forms of plural possessives in Alguerès. Also used in Old Catalan.",
                    es: "Formas de los posesivos plurales en alguerés. También usadas en catalán antiguo.",
                    it: "Forme dei possessivi plurali in algherese. Usate anche in catalano antico.",
                    fr: "Formes des possessifs pluriels en alguerès. Aussi utilisées en vieux catalan.",
                    sv: "Former av plurala possessiv på alguerès. Användes också på gammalkatalanska."
                },
                emoji: "🔗"
            },
            {
                word: "tu ses la vida",
                translations: {
                    en: "you are life",
                    es: "tú eres la vida",
                    it: "tu sei la vita",
                    fr: "tu es la vie",
                    sv: "du är livet"
                },
                description: {
                    ca: "Significa que algú és essencial o molt estimat. Equivalent a 'tu ets la vida' o 'tu eres la vida' en altres variants del català.",
                    en: "Means someone is essential or cherished. Equivalent to 'tu ets la vida' or 'tu eres la vida' in other Catalan variants.",
                    es: "Significa que alguien es esencial o muy querido. Equivalente a 'tu ets la vida' o 'tu eres la vida' en otras variantes del catalán.",
                    it: "Significa che qualcuno è essenziale o molto caro. Equivalente a 'tu ets la vida' o 'tu eres la vida' in altre varianti catalane.",
                    fr: "Signifie que quelqu'un est essentiel ou très cher. Équivalent à 'tu ets la vida' ou 'tu eres la vida' dans d'autres variantes du catalan.",
                    sv: "Betyder att någon är viktig eller omtyckt. Motsvarar 'tu ets la vida' eller 'tu eres la vida' på andra katalanska dialekter."
                },
                emoji: "❤️"
            },
            {
                word: "qui fortuna!",
                translations: {
                    en: "what luck!",
                    es: "¡qué suerte!",
                    it: "che fortuna!",
                    fr: "quelle chance !",
                    sv: "vilken tur!"
                },
                description: {
                    ca: "Exclamació d'alegria per un fet afortunat. Equivalent a &quot;quina sort!&quot; en altres variants del català.",
                    en: "An exclamation of joy for a fortunate event. Equivalent to &quot;quina sort!&quot; in other Catalan variants.",
                    es: "Exclamación de alegría por un hecho afortunado. Equivalente a &quot;quina sort!&quot; en otras variantes del catalán.",
                    it: "Esclamazione di gioia per un evento fortunato. Equivalente a &quot;quina sort!&quot; in altre varianti catalane.",
                    fr: "Exclamation de joie pour un événement chanceux. Équivalent à &quot;quina sort!&quot; dans d'autres variantes catalanes.",
                    sv: "Ett utrop av glädje för en lyckosam händelse. Motsvarar &quot;quina sort!&quot; på andra katalanska dialekter."
                },
                emoji: "🍀✨"
            },
            {
                word: "la tua costera",
                translations: {
                    en: "your coast",
                    es: "tu costa",
                    it: "la tua costa",
                    fr: "ta côte",
                    sv: "din kust"
                },
                description: {
                    ca: "Fa referència a la costa d'algú o un lloc.",
                    en: "Refers to someone's coast.",
                    es: "Se refiere a la costa de alguien.",
                    it: "Si riferisce alla costa di qualcuno.",
                    fr: "Fait référence à la côte de quelqu'un.",
                    sv: "Syftar på någons kust."
                },
                emoji: "🏖️"
            },
            {
                word: "dobletes",
                translations: {
                    en: "gold coins",
                    es: "monedas de oro",
                    it: "monete d'oro",
                    fr: "pièces d'or",
                    sv: "guldmynt"
                },
                description: {
                    ca: "Moneda antiga d'or, emprada a Sardenya al segle XVIII.",
                    en: "An ancient gold coin, used in Sardinia in the 18th century.",
                    es: "Moneda antigua de oro, utilizada en Cerdeña en el siglo XVIII.",
                    it: "Una moneta d'oro antica, usata in Sardegna nel XVIII secolo.",
                    fr: "Une pièce d'or ancienne, utilisée en Sardaigne au XVIIIe siècle.",
                    sv: "Ett gammalt guldmynt som användes på Sardinien under 1700-talet."
                },
                emoji: "💰"
            },
            {
                word: "la mar",
                translations: {
                    en: "the sea",
                    es: "el mar",
                    it: "il mare",
                    fr: "la mer",
                    sv: "havet"
                },
                description: {
                    ca: "Una massa d’aigua salada que cobreix gran part de la superfície de la Terra.",
                    en: "A body of salty water that covers much of the Earth's surface.",
                    es: "Una masa de agua salada que cubre gran parte de la superficie de la Tierra.",
                    it: "Una massa d'acqua salata che copre gran parte della superficie terrestre.",
                    fr: "Une masse d'eau salée qui recouvre une grande partie de la surface de la Terre.",
                    sv: "En kropp av saltvatten som täcker en stor del av jordens yta."
                },
                emoji: "🌊"
            },
            {
                word: "remor",
                translations: {
                    en: "murmur",
                    es: "murmullo",
                    it: "rumore",
                    fr: "murmure",
                    sv: "sorl"
                },
                description: {
                    ca: "So produït de qualsevol cosa: porta que s'obri o tanca, cadira que cau, vidre que se talla, persona que camina, etc.",
                    en: "Sound produced by anything: a door opening or closing, a chair falling, glass breaking, or someone walking.",
                    es: "Sonido producido por cualquier cosa: una puerta que se abre o cierra, una silla que cae, un cristal que se rompe, o alguien caminando.",
                    it: "Suono prodotto da qualsiasi cosa: una porta che si apre o chiude, una sedia che cade, un vetro che si rompe, o qualcuno che cammina.",
                    fr: "Son produit par n'importe quoi : une porte qui s'ouvre ou se ferme, une chaise qui tombe, un verre qui se casse, ou quelqu'un qui marche.",
                    sv: "Ljud som orsakas av vad som helst: en dörr som öppnas eller stängs, en stol som faller, glas som går sönder eller någon som går."
                },
                emoji: "🎵🤫"
            },
            {
                word: "no fa remor",
                translations: {
                    en: "makes no noise",
                    es: "no hace ruido",
                    it: "non fa rumore",
                    fr: "ne fait pas de bruit",
                    sv: "låter inget"
                },
                description: {
                    ca: "Expressió que indica absència de bordell o soroll.",
                    en: "An expression indicating the absence of noise.",
                    es: "Una expresión que indica la ausencia de ruido.",
                    it: "Un'espressione che indica l'assenza di rumore.",
                    fr: "Une expression qui indique l'absence de bruit.",
                    sv: "Ett uttryck som indikerar frånvaron av ljud."
                },
                emoji: "🤫"
            },
            {
                word: "lo món",
                translations: {
                    en: "the world",
                    es: "el mundo",
                    it: "il mondo",
                    fr: "le monde",
                    sv: "världen"
                },
                description: {
                    ca: "El planeta Terra i tot el que inclou, tant físic com cultural.",
                    en: "The planet Earth and all it includes, both physical and cultural.",
                    sv: "Planeten jorden och allt den inkluderar, både fysiskt och kulturellt.",
                    es: "El planeta Tierra y todo lo que incluye, tanto físico como cultural.",
                    it: "Il pianeta Terra e tutto ciò che include, sia fisico che culturale.",
                    fr: "La planète Terre et tout ce qu'elle inclut, à la fois physique et culturel."
                },
                emoji: "🌍"
            },
            {
                word: "qui bella minyona!",
                translations: {
                    en: "what a beautiful young woman!",
                    es: "¡qué hermosa joven!",
                    it: "che bella ragazza!",
                    fr: "quelle belle jeune femme!",
                    sv: "vilken vacker ung kvinna!"
                },
                description: {
                    ca: "Exclamació que elogia la bellesa d'una jove.",
                    en: "An exclamation praising the beauty of a young woman.",
                    es: "Una exclamación que elogia la belleza de una joven.",
                    it: "Un'esclamazione che elogia la bellezza di una giovane donna.",
                    fr: "Une exclamation qui loue la beauté d'une jeune femme.",
                    sv: "Ett utrop som berömmer skönheten hos en ung kvinna."
                },
                emoji: "👩🌹"
            },
            {
                word: "les nitades",
                translations: {
                    en: "the nights",
                    es: "las noches",
                    it: "le nottate",
                    fr: "les nuits",
                    sv: "nätterna"
                },
                description: {
                    ca: "Durada d'una nit. Equivalent a 'les nits' en altres variants catalanes.",
                    en: "The duration of a night. Equivalent to 'les nits' in other Catalan variants.",
                    es: "La duración de una noche. Equivalente a 'les nits' en otras variantes del catalán.",
                    it: "La durata di una notte. Equivalente a 'les nits' in altre varianti catalane.",
                    fr: "La durée d'une nuit. Équivalent à 'les nits' dans d'autres variantes catalanes.",
                    sv: "Nattens varaktighet. Motsvarar 'les nits' på andra katalanska dialekter."
                },
                emoji: "🌌"
            },
            {
                word: "encarnada",
                translations: {
                    en: "incarnated",
                    es: "encarnada",
                    it: "incarnata",
                    fr: "incarnée",
                    sv: "inkarnerad"
                },
                description: {
                    ca: "Representada o feta visible en una forma tangible.",
                    en: "Represented or made visible in a tangible form.",
                    es: "Representada o hecha visible en una forma tangible.",
                    it: "Rappresentata o resa visibile in una forma tangibile.",
                    fr: "Représentée ou rendue visible sous une forme tangible.",
                    sv: "Representerad eller synliggjord i en påtaglig form."
                },
                emoji: "🖼️"
            },
            {
                word: "plenes d'estrelletes",
                translations: {
                    en: "full of little stars",
                    es: "llenas de estrellitas",
                    it: "piene di stelline",
                    fr: "pleines de petites étoiles",
                    sv: "full av små stjärnor"
                },
                description: {
                    ca: "Que conté una gran quantitat d'estreles xicotetes.",
                    en: "Containing a large number of small stars.",
                    es: "Que contiene una gran cantidad de pequeñas estrellas.",
                    it: "Che contiene un gran numero di piccole stelle.",
                    fr: "Qui contient un grand nombre de petites étoiles.",
                    sv: "Som innehåller ett stort antal små stjärnor."
                },
                emoji: "✨⭐"
            },
            {
                word: "la serenada",
                translations: {
                    en: "the serenade",
                    es: "la serenata",
                    it: "la serenata",
                    fr: "la sérénade",
                    sv: "serenaden"
                },
                description: {
                    ca: "Cançó romàntica tradicionalment interpretada a la nit per declarar amor.",
                    en: "A romantic song traditionally performed at night to declare love.",
                    es: "Una canción romántica tradicionalmente interpretada por la noche para declarar amor.",
                    it: "Una canzone romantica tradizionalmente eseguita di notte per dichiarare amore.",
                    fr: "Une chanson romantique traditionnellement interprétée la nuit pour déclarer l'amour.",
                    sv: "En romantisk sång som traditionellt framförs på natten för att förklara kärlek."
                },
                emoji: "🎶❤️"
            },
            {
                word: "cantar",
                translations: {
                    en: "to sing",
                    es: "cantar",
                    it: "cantare",
                    fr: "chanter",
                    sv: "att sjunga"
                },
                description: {
                    ca: "Emetre sons melòdics amb la veu.",
                    en: "To produce melodic sounds with the voice.",
                    es: "Emitir sonidos melódicos con la voz.",
                    it: "Emettere suoni melodiosi con la voce.",
                    fr: "Produire des sons mélodiques avec la voix.",
                    sv: "Att framföra melodiska ljud med rösten."
                },
                emoji: "🎤"
            },{
                word: "hi ha un país",
                translations: {
                    en: "there is a country",
                    es: "hay un país",
                    it: "c'è un paese",
                    fr: "il y a un pays",
                    sv: "det finns ett land"
                },
                description: {
                    ca: "Expressió que indica l'existència d'un territori o nació.",
                    en: "An expression indicating the existence of a territory or nation.",
                    es: "Una expresión que indica la existencia de un territorio o nación.",
                    it: "Un'espressione che indica l'esistenza di un territorio o di una nazione.",
                    fr: "Une expression indiquant l'existence d'un territoire ou d'une nation.",
                    sv: "Ett uttryck som anger att ett territorium eller land existerar."
                },
                emoji: "🏞️"
            },
            {
                word: "d'un valor",
                translations: {
                    en: "of a value",
                    es: "de un valor",
                    it: "di un valore",
                    fr: "d'une valeur",
                    sv: "av ett värde"
                },
                description: {
                    ca: "Expressió que descriu el significat o importància d'alguna cosa.",
                    en: "An expression describing the meaning or importance of something.",
                    es: "Una expresión que describe el significado o la importancia de algo.",
                    it: "Un'espressione che descrive il significato o l'importanza di qualcosa.",
                    fr: "Une expression décrivant la signification ou l'importance de quelque chose.",
                    sv: "Ett uttryck som beskriver betydelsen eller vikten av något."
                },
                emoji: "💎"
            },
            {
                word: "diamants",
                translations: {
                    en: "diamonds",
                    es: "diamantes",
                    it: "diamanti",
                    fr: "diamants",
                    sv: "diamanter"
                },
                description: {
                    ca: "Pedres precioses molt dures i brillants, sovint usades en joieria.",
                    en: "Precious stones that are very hard and shiny, often used in jewelry.",
                    es: "Piedras preciosas muy duras y brillantes, a menudo utilizadas en joyería.",
                    it: "Pietre preziose molto dure e brillanti, spesso usate in gioielleria.",
                    fr: "Pierres précieuses très dures et brillantes, souvent utilisées en joaillerie.",
                    sv: "Ädelstenar som är mycket hårda och glänsande, ofta använda i smycken."
                },
                emoji: "💎"
            },
            {
                word: "solament en Catalunya",
                translations: {
                    en: "only in Catalonia",
                    es: "solamente en Cataluña",
                    it: "solo in Catalogna",
                    fr: "seulement en Catalogne",
                    sv: "endast i Katalonien"
                },
                description: {
                    ca: "Indica que alguna cosa o idea està limitada exclusivament a Catalunya.",
                    en: "Indicates that something or an idea is exclusive to Catalonia.",
                    es: "Indica que algo o una idea es exclusivo de Cataluña.",
                    it: "Indica che qualcosa o un'idea è esclusiva della Catalogna.",
                    fr: "Indique que quelque chose ou une idée est exclusif à la Catalogne.",
                    sv: "Anger att något eller en idé endast förekommer i Katalonien."
                },
                emoji: "📍"
            },
            {
                word: "un tresor",
                translations: {
                    en: "a treasure",
                    es: "un tesoro",
                    it: "un tesoro",
                    fr: "un trésor",
                    sv: "en skatt"
                },
                description: {
                    ca: "Cosa molt valuosa, física o simbòlica, que es guarda amb molta estima.",
                    en: "Something very valuable, physical or symbolic, that is kept with great care.",
                    es: "Algo muy valioso, físico o simbólico, que se guarda con mucho aprecio.",
                    it: "Qualcosa di molto prezioso, fisico o simbolico, che viene custodito con cura.",
                    fr: "Quelque chose de très précieux, physique ou symbolique, qui est gardé avec soin.",
                    sv: "Något mycket värdefullt, fysiskt eller symboliskt, som bevaras med omsorg."
                },
                emoji: "💰🎁👑"
            },
            {
                word: "la llengua",
                translations: {
                    en: "the language",
                    es: "la lengua",
                    it: "la lingua",
                    fr: "la langue",
                    sv: "språket"
                },
                description: {
                    ca: "Sistema de comunicació propi d'una comunitat, com el català.",
                    en: "A communication system belonging to a community, like Catalan.",
                    es: "Un sistema de comunicación propio de una comunidad, como el catalán.",
                    it: "Un sistema di comunicazione proprio di una comunità, come il catalano.",
                    fr: "Un système de communication propre à une communauté, comme le catalan.",
                    sv: "Ett kommunikationssystem som tillhör en gemenskap, som katalanska."
                },
                emoji: "🗣️"
            },
            {
                word: "especialment",
                translations: {
                    en: "especially",
                    es: "especialmente",
                    it: "specialmente",
                    fr: "surtout",
                    sv: "särskilt"
                },
                description: {
                    ca: "Indica una importància particular d'alguna cosa o situació.",
                    en: "Indicates a particular importance of something or a situation.",
                    es: "Indica una importancia particular de algo o una situación.",
                    it: "Indica un'importanza particolare di qualcosa o di una situazione.",
                    fr: "Indique une importance particulière d'une chose ou d'une situation.",
                    sv: "Anger en särskild betydelse av något eller en situation."
                },
                emoji: "✨"
            },
            {
                word: "plenes d'estrelletes",
                translations: {
                    en: "full of little stars",
                    es: "llenas de estrellitas",
                    it: "piene di stelline",
                    fr: "pleines de petites étoiles",
                    sv: "fulla av små stjärnor"
                },
                description: {
                    ca: "Amb moltes estrelles petites que bril·len al cel de nit.",
                    en: "With many small stars shining in the sky.",
                    es: "Con muchas estrellas pequeñas que brillan en el cielo.",
                    it: "Con molte piccole stelle che brillano nel cielo.",
                    fr: "Avec de nombreuses petites étoiles brillantes dans le ciel.",
                    sv: "Med många små stjärnor som lyser på himlen."
                },
                emoji: "⭐✨"
            },
            {
                word: "la serenada",
                translations: {
                    en: "the serenade",
                    es: "la serenata",
                    it: "la serenata",
                    fr: "la sérénade",
                    sv: "serenaden"
                },
                description: {
                    ca: "Cançó interpretada de nit, sovint per expressar sentiments romàntics.",
                    en: "A song performed at night, often to express romantic feelings.",
                    es: "Canción interpretada por la noche, a menudo para expresar sentimientos románticos.",
                    it: "Una canzone eseguita di notte, spesso per esprimere sentimenti romantici.",
                    fr: "Une chanson interprétée la nuit, souvent pour exprimer des sentiments romantiques.",
                    sv: "En sång som framförs på natten, ofta för att uttrycka romantiska känslor."
                },
                emoji: "🧑🏽🎶🥰"
            }
            
            
            
        ]
        
      },
      "anemAnemAnant": {
        videoId: "-SLbALBU3M4",
        phrases: [
          { text: "Anem, anem anant al camí de Vallverd, ____ les de Morando acollint junivert;", answer: "trobem", startTime: 14, endTime: 22 },
          { text: "en mig del junivert hi havia un ____, fugi senyora Càrmina i n'hi fugi lo pardal.", answer: "animal", startTime: 22, endTime: 30 },
          { text: "Lo pardal se n'és fugit i la ____ se l'ha menjat. La duenya me n'ha catxat que he tallat l'orinal.", answer: "gata", startTime: 30, endTime: 38 },
          { text: "Iel·lo, iel·lo, iel·lo ____ ja és així! Iel·lo, iel·lo, iel·lo __ ja és així!", answer: "que", startTime: 38, endTime: 46 },
          { text: "Anem, anem ____ al camí de la Puceta, trobem les de Morando acollint carabasseta;", answer: "anant", startTime: 55, endTime: 64 },
          { text: "en mig del junivert hi havia un ____, fugi senyora Càrmina i n'hi fugi lo pardal.", answer: "animal", startTime: 63, endTime: 71 },
          { text: "Lo pardal se n'és fugit i la ____ se l'ha menjat. La duenya me n'ha catxat que he tallat l'orinal.", answer: "gata", startTime: 71, endTime: 79},
          { text: "Iel·lo, iel·lo, iel·lo que ____ és així! Iel·lo, iel·lo, iel·lo que __ és així!", answer: "ja", startTime: 79, endTime: 87 },
          { text: "Anem, anem anant al camí de Vilanova trobem ____ de Morando acollint oliva nova;", answer: "les", startTime: 110, endTime: 118 },
          { text: "en mig del junivert hi ____ un animal, fugi senyora Càrmina i n'hi fugi lo pardal.", answer: "havia", startTime: 118, endTime: 125 },
          { text: "Lo pardal se n'és fugit i la gata se l'ha ____. La duenya me n'ha catxat que he tallat l'orinal.", answer: "menjat", startTime: 125, endTime: 133 },
          { text: "Iel·lo, iel·lo, iel·lo que ____ és així! Iel·lo, iel·lo, iel·lo que __ és així!", answer: "ja", startTime: 155, endTime: 165 },
         
        ],
        keyWords: [
            {
                word: "(nosaltres) trobem",
                translations: {
                    en: "we find",
                    es: "encontramos",
                    it: "troviamo",
                    fr: "nous trouvons",
                    sv: "vi hittar"
                },
                description: {
                    ca: "Descobrir, saber una cosa que no se sabiva; conèixer l'existència d'un objecte; prendre un objecte que és estat deixat o perdut.",
                    en: "Indicates the action of discovering or seeing something while walking or searching.",
                    es: "Indica la acción de descubrir o ver algo mientras se camina o busca.",
                    it: "Indica l'azione di scoprire o vedere qualcosa mentre si cammina o si cerca.",
                    fr: "Indique l'action de découvrir ou de voir quelque chose en marchant ou en cherchant.",
                    sv: "Indikerar handlingen att upptäcka eller se något medan man går eller letar."
                },
                emoji: "🔍👀"
            },
            {
                word: "junivert",
                translations: {
                    en: "parsley",
                    es: "perejil",
                    it: "prezzemolo",
                    fr: "persil",
                    sv: "persilja"
                },
                description: {
                    ca: "Nom alguerès per a una planta aromàtica usada en cuina. En altres variants catalanes es diu &quot;julivert&quot;.",
                    en: "Alguerès term for an aromatic herb used in cooking. In other Catalan variants, it's called &quot;julivert&quot;.",
                    es: "Término alguerés para una planta aromática usada en la cocina. En otras variantes del catalán se dice &quot;julivert&quot;.",
                    it: "Termine algherese per un'erba aromatica usata in cucina. In altre varianti del catalano si chiama &quot;julivert&quot;.",
                    fr: "Terme alguerès pour une plante aromatique utilisée en cuisine. Dans d'autres variantes catalanes, on dit &quot;julivert&quot;.'",
                    sv: "Alguerès namn för en aromatisk ört som används i matlagning. I andra katalanska varianter kallas det &quot;julivert&quot;."
                },
                emoji: "🌿"
            },
            {
                word: "lo pardal",
                translations: {
                    en: "the bird",
                    es: "el pájaro",
                    it: "l'uccello",
                    fr: "l'oiseau",
                    sv: "fågeln"
                },
                description: {
                    ca: "Animal vertebrat que té el cos cobert de plomes i dues ales a la part de dalt del cos. Sinònims: au, mixó, moixó, ocell",
                    en: "An animal whose body is covered with feathers and has two wings.  ",
                    es: "Un animal vertebrado con el cuerpo cubierto de plumas y dos alas. ",
                    it: "Un animale vertebrato con il corpo coperto di piume e due ali. ",
                    fr: "Un animal vertébré dont le corps est couvert de plumes et doté de deux ailes.",
                    sv: "En djur vars kropp är täckt med fjädrar och har två vingar."
                },
                emoji: "🐦"
            }
,            
            {
                word: "iel·lo",
                translations: {
                    en: "well then!",
                    es: "¡vaya pues!",
                    it: "ebbene!",
                    fr: "eh bien!",
                    sv: "nåväl!"
                },
                description: {
                    ca: "Exclamació algueresa d'incredulitat o de no acceptació.",
                    en: "An Alguerès exclamation of disbelief or non-acceptance.",
                    es: "Exclamación algueresa de incredulidad o no aceptación.",
                    it: "Esclamazione algherese di incredulità o di rifiuto.",
                    fr: "Exclamation alguerèse d'incrédulité ou de refus.",
                    sv: "Ett alguerès uttryck för misstro eller avslag."
                },
                emoji: "🤨"
            },
            {
                word: "acollir",
                translations: {
                    en: "to pick up",
                    es: "recoger",
                    it: "raccogliere",
                    fr: "ramasser",
                    sv: "plocka upp"
                },
                description: {
                    ca: "En alguerès, significa prendre alguna cosa d'en terra o d'una planta.",
                    en: "In Alguerès, it means to pick something up from the ground or a plant.",
                    es: "En alguerés, significa tomar algo del suelo o de una planta.",
                    it: "In algherese, significa raccogliere qualcosa da terra o da una pianta.",
                    fr: "En alguerès, cela signifie ramasser quelque chose par terre ou sur une plante.",
                    sv: "På alguerès betyder det att plocka upp något från marken eller från en växt."
                },
                emoji: "🌾"
            },
            {
                word: "catxar",
                translations: {
                    en: "to throw out",
                    es: "echar fuera",
                    it: "buttare fuori",
                    fr: "jeter dehors",
                    sv: "kasta ut"
                },
                description: {
                    ca: "En alguerès, significa treure fora o allunyar algú o alguna cosa.",
                    en: "In Alguerès, it means to throw something or someone out.",
                    es: "En alguerés, significa echar fuera a alguien o algo.",
                    it: "In algherese, significa buttare fuori qualcuno o qualcosa.",
                    fr: "En alguerès, cela signifie mettre quelqu'un ou quelque chose dehors.",
                    sv: "På alguerès betyder det att kasta ut något eller någon."
                },
                emoji: "🚪❌"
            },
            {
                word: "la gata",
                translations: {
                    en: "the cat (female)",
                    es: "la gata",
                    it: "la gatta",
                    fr: "la chatte",
                    sv: "katten (hona)"
                },
                description: {
                    ca: "Animal felí femella.",
                    en: "A female feline.",
                    es: "Un felino hembra.",
                    it: "Un felino femmina.",
                    fr: "Un félin femelle.",
                    sv: "En honkatt."
                },
                emoji: "🐱"
            },
            {
                word: "que és així!",
                translations: {
                    en: "that's how it is!",
                    es: "¡así es!",
                    it: "è così!",
                    fr: "c'est ainsi!",
                    sv: "så är det!"
                },
                description: {
                    ca: "Expressió d'acceptació o resignació davant un fet.",
                    en: "An expression of acceptance or resignation to a fact.",
                    es: "Expresión de aceptación o resignación ante un hecho.",
                    it: "Espressione di accettazione o rassegnazione a un fatto.",
                    fr: "Expression d'acceptation ou de résignation devant un fait.",
                    sv: "Ett uttryck för acceptans eller resignation inför ett faktum."
                },
                emoji: "🤷‍♂️"
            },
            {
                word: "oliva nova",
                translations: {
                    en: "fresh olive",
                    es: "aceituna nueva",
                    it: "oliva nuova",
                    fr: "olive nouvelle",
                    sv: "färsk oliv"
                },
                description: {
                    ca: "Oliva recent acollida.",
                    en: "An olive recently picked.",
                    es: "Una aceituna recién recogida.",
                    it: "Un'oliva appena raccolta.",
                    fr: "Une olive récemment cueillie.",
                    sv: "En nyligen plockad oliv."
                },
                emoji: "🟢"
            },
            {
                word: "ja",
                translations: {
                    en: "already",
                    es: "ya",
                    it: "già",
                    fr: "déjà",
                    sv: "redan"
                },
                description: {
                    ca: "Expressió que presenta una acció com a complida.",
                    en: "An expression that presents an action as completed.",
                    es: "Expresión que presenta una acción como completada.",
                    it: "Un'espressione che presenta un'azione come compiuta.",
                    fr: "Une expression qui présente une action comme accomplie.",
                    sv: "Ett uttryck som beskriver en handling som avslutad."
                },
                emoji: "✔️"
            },
            {
                word: "fugir",
                translations: {
                    en: "to flee",
                    es: "huir",
                    it: "fuggire",
                    fr: "fuir",
                    sv: "fly"
                },
                description: {
                    ca: "Allunyar-se ràpidament d'un lloc per evitar un perill o problema.",
                    en: "To move quickly away from a place to avoid danger or trouble.",
                    es: "Alejarse rápidamente de un lugar para evitar un peligro o problema.",
                    it: "Allontanarsi rapidamente da un luogo per evitare un pericolo o un problema.",
                    fr: "S'éloigner rapidement d'un endroit pour éviter un danger ou un problème.",
                    sv: "Att snabbt lämna en plats för att undvika fara eller problem."
                },
                emoji: "🏃‍♂️💨"
            },
            {
                word: "se l'ha menjat",
                translations: {
                    en: "has eaten it",
                    es: "se lo ha comido",
                    it: "se l'ha mangiato",
                    fr: "l'a mangé",
                    sv: "har ätit den"
                },
                description: {
                    ca: "Frase que indica que algú o alguna cosa ha consumit completament una altra cosa.",
                    en: "A phrase indicating that someone or something has completely consumed another thing.",
                    es: "Frase que indica que alguien o algo ha consumido completamente otra cosa.",
                    it: "Frase che indica che qualcuno o qualcosa ha completamente consumato un'altra cosa.",
                    fr: "Phrase indiquant que quelqu'un ou quelque chose a complètement consommé une autre chose.",
                    sv: "En fras som anger att någon eller något har helt konsumerat något annat."
                },
                emoji: "🍴"
            },
            {
                word: "l'orinal",
                translations: {
                    en: "the chamber pot",
                    es: "el orinal",
                    it: "il vaso da notte",
                    fr: "le pot de chambre",
                    sv: "pottan"
                },
                description: {
                    ca: "Un recipient utilitzat per a necessitats fisiològiques, especialment abans de banys interiors.",
                    en: "A container used for physiological needs, especially before indoor plumbing.",
                    es: "Un recipiente usado para necesidades fisiológicas, especialmente antes de baños interiores.",
                    it: "Un contenitore utilizzato per i bisogni fisiologici, specialmente prima della presenza di bagni interni.",
                    fr: "Un récipient utilisé pour les besoins physiologiques, notamment avant les toilettes intérieures.",
                    sv: "En behållare som används för fysiologiska behov, särskilt innan inomhusbadrum fanns."
                },
                emoji: "🚽"
            },
            {
                word: "hi havia",
                translations: {
                    en: "there was",
                    es: "había",
                    it: "c'era",
                    fr: "il y avait",
                    sv: "det fanns"
                },
                description: {
                    ca: "Expressió que indica l'existència d'alguna cosa en el passat.",
                    en: "An expression indicating the existence of something in the past.",
                    es: "Expresión que indica la existencia de algo en el pasado.",
                    it: "Un'espressione che indica l'esistenza di qualcosa nel passato.",
                    fr: "Une expression indiquant l'existence de quelque chose dans le passé.",
                    sv: "Ett uttryck som anger att något existerade tidigare."
                },
                emoji: "🕰️"
            },
            {
                word: "lo camí",
                translations: {
                    en: "the path",
                    es: "el camino",
                    it: "il sentiero",
                    fr: "le chemin",
                    sv: "vägen"
                },
                description: {
                    ca: "Via per on es transita.",
                    en: "A route used for transit. ",
                    es: "Ruta por donde se transita.",
                    it: "Percorso utilizzato per transitare.",
                    fr: "Une route utilisée pour transiter.",
                    sv: "En väg som används för passage."
                },
                emoji: "🏞"
            },
            {
                word: "en mig",
                translations: {
                    en: "in the middle",
                    es: "en medio",
                    it: "in mezzo",
                    fr: "au milieu",
                    sv: "i mitten"
                },
                description: {
                    ca: "Situat en la part central d'alguna cosa.",
                    en: "Located in the central part of something.",
                    es: "Situado en la parte central de algo.",
                    it: "Situato nella parte centrale di qualcosa.",
                    fr: "Situé dans la partie centrale de quelque chose.",
                    sv: "Befinner sig i mitten av något."
                },
                emoji: "🎯"
            }
            
        ]
        
        
      },
      "sardanaPenBerto": {
        videoId: "4hXSqJz_NSM",
        phrases: [
          
          { text: "Al ____ de l'havanera. Al timó del meu veler. Navegant entre sirenes i cantant als quatre vents.", answer: "ritme", startTime: 17, endTime: 36 },
          { text: "Deixem anar les amarres, i tot a mercè dels ____, amb l'ànima dels pirates, forjats pel mateix cel.", answer: "rems", startTime: 35, endTime: 54 },
          { text: "I seguim a mar obert per ____ la llibertat. Tant si ens porta per aquí com si ens envolta a tots per allà.", answer: "perseguir", startTime: 54, endTime: 63 },
          { text: "No deixem ____ de buscar la força que ens farà trobar per fi, la felicitat. Agafem-nos de les mans i fem un gest per la igualtat.", answer: "mai", startTime: 63, endTime: 76 },
          { text: "Sentiment de ____ que es noti que som catalans. Abracem la llum que ens guia que és la que ens farà ballar, al ritme de la sardana.", answer: "germanor", startTime: 76, endTime: 90 },
          { text: "Agafem-nos de les ____ i fem un gest per la igualtat. Sentiment de germanor que es noti que som catalans.", answer: "mans", startTime: 122, endTime: 133 },
          { text: "Abracem la ____ que ens guia que és la que ens farà ballar, al ritme de la sardana.", answer: "llum", startTime: 132, endTime: 178 },
        ],
        keyWords: [
            {
                word: "ritme",
                translations: { 
                    en: "rhythm", 
                    sv: "rytm", 
                    es: "ritmo", 
                    it: "ritmo", 
                    fr: "rythme" 
                },
                description: {
                    ca: "El compàs o patró d'una música o ball.",
                    en: "The beat or pattern of music or dance.",
                    sv: "Takten eller mönstret i musik eller dans.",
                    es: "El compás o patrón de una música o baile.",
                    it: "Il ritmo o schema di una musica o danza.",
                    fr: "Le rythme ou modèle d'une musique ou danse."
                },
                emoji: "🎵💃"
            },
            {
                word: "rems",
                translations: { 
                    en: "oars", 
                    sv: "åror", 
                    es: "remos", 
                    it: "remi", 
                    fr: "rames" 
                },
                description: {
                    ca: "Eines llargues per impulsar un vaixell a través de l'aigua.",
                    en: "Long tools used to propel a boat through water.",
                    sv: "Långa verktyg som används för att driva en båt genom vattnet.",
                    es: "Herramientas largas utilizadas para impulsar un barco a través del agua.",
                    it: "Strumenti lunghi usati per spingere una barca sull'acqua.",
                    fr: "Outils longs utilisés pour propulser un bateau sur l'eau."
                },
                emoji: "🚣‍♂️🌊"
            },
            {
                word: "perseguir",
                translations: { 
                    en: "to pursue", 
                    sv: "att jaga", 
                    es: "perseguir", 
                    it: "inseguire", 
                    fr: "poursuivre" 
                },
                description: {
                    ca: "Buscar amb insistència un objectiu o somni.",
                    en: "To persistently seek a goal or dream.",
                    sv: "Att ihärdigt söka ett mål eller en dröm.",
                    es: "Buscar insistentemente un objetivo o sueño.",
                    it: "Cercare con insistenza un obiettivo o sogno.",
                    fr: "Rechercher avec persistance un objectif ou un rêve."
                },
                emoji: "🏃‍♀️⭐"
            },
            {
                word: "mai",
                translations: { 
                    en: "never", 
                    sv: "aldrig", 
                    es: "nunca", 
                    it: "mai", 
                    fr: "jamais" 
                },
                description: {
                    ca: "Indica que alguna cosa no passa en cap moment.",
                    en: "Indicates that something does not happen at any time.",
                    sv: "Indikerar att något aldrig händer.",
                    es: "Indica que algo no ocurre en ningún momento.",
                    it: "Indica che qualcosa non accade mai.",
                    fr: "Indique que quelque chose ne se produit jamais."
                },
                emoji: "🚫"
            },
            {
                word: "germanor",
                translations: { 
                    en: "brotherhood", 
                    sv: "broderskap", 
                    es: "hermandad", 
                    it: "fratellanza", 
                    fr: "fraternité" 
                },
                description: {
                    ca: "Unió i harmonia entre persones.",
                    en: "Unity and harmony among people.",
                    sv: "Enhet och harmoni mellan människor.",
                    es: "Unidad y armonía entre personas.",
                    it: "Unità e armonia tra le persone.",
                    fr: "Unité et harmonie entre les personnes."
                },
                emoji: "🤝🌍"
            },
            {
                word: "mans",
                translations: { 
                    en: "hands", 
                    sv: "händer", 
                    es: "manos", 
                    it: "mani", 
                    fr: "mains" 
                },
                description: {
                    ca: "Part del cos que s'utilitza per agafar, crear o expressar.",
                    en: "Part of the body used to grasp, create, or express.",
                    sv: "Del av kroppen som används för att greppa, skapa eller uttrycka.",
                    es: "Parte del cuerpo que se utiliza para agarrar, crear o expresar.",
                    it: "Parte del corpo usata per afferrare, creare o esprimere.",
                    fr: "Partie du corps utilisée pour saisir, créer ou exprimer."
                },
                emoji: "👐"
            },
            {
                word: "llum",
                translations: { 
                    en: "light", 
                    sv: "ljus", 
                    es: "luz", 
                    it: "luce", 
                    fr: "lumière" 
                },
                description: {
                    ca: "Un símbol d’esperança i guia.",
                    en: "A symbol of hope and guidance.",
                    sv: "En symbol för hopp och vägledning.",
                    es: "Un símbolo de esperanza y guía.",
                    it: "Un simbolo di speranza e guida.",
                    fr: "Un symbole d'espoir et de guidance."
                },
                emoji: "💡✨"
            },
            {
                word: "timó",
                translations: { 
                    en: "rudder", 
                    sv: "roder", 
                    es: "timón", 
                    it: "timone", 
                    fr: "gouvernail" 
                },
                description: {
                    ca: "Instrument que s’utilitza per dirigir una embarcació.",
                    en: "An instrument used to steer a boat.",
                    sv: "Ett instrument som används för att styra en båt.",
                    es: "Instrumento que se utiliza para dirigir una embarcación.",
                    it: "Strumento utilizzato per dirigere un'imbarcazione.",
                    fr: "Instrument utilisé pour diriger un bateau."
                },
                emoji: "⛵"
            },
            {
                word: "igualtat",
                translations: { 
                    en: "equality", 
                    sv: "jämlikhet", 
                    es: "igualdad", 
                    it: "uguaglianza", 
                    fr: "égalité" 
                },
                description: {
                    ca: "Estat en què totes les persones tenen els mateixos drets.",
                    en: "A state where all people have the same rights.",
                    sv: "Ett tillstånd där alla människor har samma rättigheter.",
                    es: "Un estado donde todas las personas tienen los mismos derechos.",
                    it: "Uno stato in cui tutte le persone hanno gli stessi diritti.",
                    fr: "Un état où toutes les personnes ont les mêmes droits."
                },
                emoji: "⚖️"
            },
            {
                word: "mar obert",
                translations: { 
                    en: "open sea", 
                    sv: "öppet hav", 
                    es: "mar abierto", 
                    it: "mare aperto", 
                    fr: "mer ouverte" 
                },
                description: {
                    ca: "Una àrea del mar allunyada de la costa.",
                    en: "An area of the sea far from the coast.",
                    sv: "Ett havsområde långt från kusten.",
                    es: "Un área del mar lejos de la costa.",
                    it: "Un'area di mare lontana dalla costa.",
                    fr: "Une zone de mer loin de la côte."
                },
                emoji: "🌊"
            },
            {
                word: "pirates",
                translations: { 
                    en: "pirates", 
                    sv: "pirater", 
                    es: "piratas", 
                    it: "pirati", 
                    fr: "pirates" 
                },
                description: {
                    ca: "Històricament, persones que atacaven vaixells al mar.",
                    en: "Historically, people who attacked ships at sea.",
                    sv: "Historiskt sett människor som attackerade fartyg på havet.",
                    es: "Históricamente, personas que atacaban barcos en el mar.",
                    it: "Storicamente, persone che attaccavano le navi in mare.",
                    fr: "Historiquement, des personnes qui attaquaient des navires en mer."
                },
                emoji: "🏴‍☠️"
            },
            {
                word: "sardana",
                translations: { 
                    en: "sardana", 
                    sv: "sardana", 
                    es: "sardana", 
                    it: "sardana", 
                    fr: "sardane" 
                },
                description: {
                    ca: "Una dansa tradicional catalana que es balla en cercle.",
                    en: "A traditional Catalan dance performed in a circle.",
                    sv: "En traditionell katalansk dans som dansas i en cirkel.",
                    es: "Un baile tradicional catalán que se baila en círculo.",
                    it: "Una danza tradizionale catalana eseguita in cerchio.",
                    fr: "Une danse traditionnelle catalane effectuée en cercle."
                },
                emoji: "💃🕺"
            },
            {
                word: "havanera",
                translations: { 
                    en: "havanera", 
                    sv: "havanera", 
                    es: "habanera", 
                    it: "habanera", 
                    fr: "habanera" 
                },
                description: {
                    ca: "Un estil musical d'origen cubà, popular a Catalunya i sovint cantat al costat del mar.",
                    en: "A musical style of Cuban origin, popular in Catalonia and often sung by the sea.",
                    sv: "En musikstil av kubanskt ursprung, populär i Katalonien och ofta sjungen vid havet.",
                    es: "Un estilo musical de origen cubano, popular en Cataluña y a menudo cantado junto al mar.",
                    it: "Uno stile musicale di origine cubana, popolare in Catalogna e spesso cantato vicino al mare.",
                    fr: "Un style musical d'origine cubaine, populaire en Catalogne et souvent chanté au bord de la mer."
                },
                emoji: "🎶🏖️"
            },
            {
                word: "quatre vents",
                translations: { 
                    en: "four winds", 
                    sv: "fyra vindar", 
                    es: "cuatro vientos", 
                    it: "quattro venti", 
                    fr: "quatre vents" 
                },
                description: {
                    ca: "Un símbol d'expansió i llibertat, sovint usat en poesia.",
                    en: "A symbol of expansion and freedom, often used in poetry.",
                    sv: "En symbol för expansion och frihet, ofta använd i poesi.",
                    es: "Un símbolo de expansión y libertad, a menudo usado en poesía.",
                    it: "Un simbolo di espansione e libertà, spesso usato in poesia.",
                    fr: "Un symbole d'expansion et de liberté, souvent utilisé en poésie."
                },
                emoji: "4🌬️"
            },
            {
                word: "amarres",
                translations: { 
                    en: "moorings", 
                    sv: "förtöjningar", 
                    es: "amarras", 
                    it: "ormeggi", 
                    fr: "amarres" 
                },
                description: {
                    ca: "Cordes o cables que mantenen un vaixell fixat al moll.",
                    en: "Ropes or cables that keep a ship secured to the dock.",
                    sv: "Rep eller kablar som håller ett fartyg förtöjt vid bryggan.",
                    es: "Cuerdas o cables que mantienen un barco fijo al muelle.",
                    it: "Corde o cavi che tengono una nave ancorata al molo.",
                    fr: "Cordes ou câbles qui maintiennent un bateau amarré au quai."
                },
                emoji: "⚓🛳️"
            },
            {
                word: "ànima dels pirates",
                translations: { 
                    en: "soul of pirates", 
                    sv: "piraternas själ", 
                    es: "alma de piratas", 
                    it: "anima dei pirati", 
                    fr: "âme des pirates" 
                },
                description: {
                    ca: "Un esperit aventurer i lliure associat als pirates.",
                    en: "An adventurous and free spirit associated with pirates.",
                    sv: "En äventyrlig och fri anda förknippad med pirater.",
                    es: "Un espíritu aventurero y libre asociado a los piratas.",
                    it: "Uno spirito avventuroso e libero associato ai pirati.",
                    fr: "Un esprit aventurier et libre associé aux pirates."
                },
                emoji: "🏴‍☠️🌊"
            },
            {
                word: "abraçar",
                translations: { 
                    en: "to embrace / to hug", 
                    sv: "att omfamna / att krama", 
                    es: "abrazar", 
                    it: "abbracciare", 
                    fr: "embrasser" 
                },
                description: {
                    ca: "Agafar algú o alguna cosa amb els braços per mostrar afecte o acceptació.",
                    en: "To hold someone or something with the arms to show affection or acceptance.",
                    sv: "Att hålla någon eller något med armarna för att visa tillgivenhet eller acceptans.",
                    es: "Sujetar a alguien o algo con los brazos para mostrar afecto o aceptación.",
                    it: "Tenere qualcuno o qualcosa con le braccia per mostrare affetto o accettazione.",
                    fr: "Tenir quelqu'un ou quelque chose avec les bras pour montrer de l'affection ou de l'acceptation."
                },
                emoji: "🤗❤️"
            },
            {
                word: "llum que ens guia",
                translations: { 
                    en: "light that guides us", 
                    sv: "ljuset som vägleder oss", 
                    es: "luz que nos guía", 
                    it: "luce che ci guida", 
                    fr: "lumière qui nous guide" 
                },
                description: {
                    ca: "Una metàfora per descriure una força o idea que inspira i dirigeix.",
                    en: "A metaphor to describe a force or idea that inspires and leads.",
                    sv: "En metafor för att beskriva en kraft eller idé som inspirerar och leder.",
                    es: "Una metáfora para describir una fuerza o idea que inspira y dirige.",
                    it: "Una metafora per descrivere una forza o idea che ispira e guida.",
                    fr: "Une métaphore pour décrire une force ou une idée qui inspire et dirige."
                },
                emoji: "✨➡️"
            },
            {
                word: "llibertat",
                translations: { 
                    en: "freedom", 
                    sv: "frihet", 
                    es: "libertad", 
                    it: "libertà", 
                    fr: "liberté" 
                },
                description: {
                    ca: "El dret o capacitat de decidir i actuar sense opressió.",
                    en: "The right or ability to decide and act without oppression.",
                    sv: "Rätten eller förmågan att bestämma och agera utan förtryck.",
                    es: "El derecho o capacidad de decidir y actuar sin opresión.",
                    it: "Il diritto o la capacità di decidere e agire senza oppressione.",
                    fr: "Le droit ou la capacité de décider et d'agir sans oppression."
                },
                emoji: "🕊️✊"
            },
            {
                word: "mar obert",
                translations: { 
                    en: "open sea", 
                    sv: "öppet hav", 
                    es: "mar abierto", 
                    it: "mare aperto", 
                    fr: "mer ouverte" 
                },
                description: {
                    ca: "Una extensió d’aigua salada lluny de la costa.",
                    en: "A body of saltwater far from the coast.",
                    sv: "En vattenmassa långt från kusten.",
                    es: "Una extensión de agua salada lejos de la costa.",
                    it: "Un corpo d'acqua salata lontano dalla costa.",
                    fr: "Une étendue d'eau salée loin de la côte."
                },
                emoji: "🌊⚓"
            },
            {
                word: "sentiment de germanor",
                translations: { 
                    en: "sense of brotherhood", 
                    sv: "känsla av gemenskap", 
                    es: "sentimiento de hermandad", 
                    it: "senso di fratellanza", 
                    fr: "sentiment de fraternité" 
                },
                description: {
                    ca: "Unió entre persones basada en l'amistat i la solidaritat.",
                    en: "Unity among people based on friendship and solidarity.",
                    sv: "Enhet bland människor baserad på vänskap och solidaritet.",
                    es: "Unidad entre personas basada en la amistad y la solidaridad.",
                    it: "Unità tra le persone basata sull'amicizia e la solidarietà.",
                    fr: "Unité entre les personnes basée sur l'amitié et la solidarité."
                },
                emoji: "🤝🌍"
            },{
                word: "que es noti",
                translations: { 
                    en: "let it be noticed", 
                    sv: "låt det märkas", 
                    es: "que se note", 
                    it: "che si noti", 
                    fr: "que cela se remarque" 
                },
                description: {
                    ca: "Una expressió per demanar que alguna cosa sigui evident o visible.",
                    en: "An expression to ask for something to be evident or visible.",
                    sv: "Ett uttryck för att be om att något ska vara tydligt eller synligt.",
                    es: "Una expresión para pedir que algo sea evidente o visible.",
                    it: "Un'espressione per chiedere che qualcosa sia evidente o visibile.",
                    fr: "Une expression pour demander que quelque chose soit évident ou visible."
                },
                emoji: "👀✨"
            },
            {
                word: "som catalans",
                translations: { 
                    en: "we are Catalans", 
                    sv: "vi är katalaner", 
                    es: "somos catalanes", 
                    it: "siamo catalani", 
                    fr: "nous sommes catalans" 
                },
                description: {
                    ca: "Una declaració d’identitat i orgull cultural.",
                    en: "A declaration of identity and cultural pride.",
                    sv: "Ett uttalande om identitet och kulturell stolthet.",
                    es: "Una declaración de identidad y orgullo cultural.",
                    it: "Una dichiarazione di identità e orgoglio culturale.",
                    fr: "Une déclaration d'identité et de fierté culturelle."
                },
                emoji: "🇨🇦✨"
            },
            {
                word: "agafem-nos",
                translations: { 
                    en: "let's hold hands", 
                    sv: "låt oss hålla händerna", 
                    es: "agarrémonos", 
                    it: "teniamoci", 
                    fr: "tenons-nous la main" 
                },
                description: {
                    ca: "Una invitació a unir-se i connectar físicament o emocionalment.",
                    en: "An invitation to unite and connect physically or emotionally.",
                    sv: "En inbjudan att förenas och knyta an fysiskt eller känslomässigt.",
                    es: "Una invitación a unirse y conectar física o emocionalmente.",
                    it: "Un invito a unirsi e connettersi fisicamente o emotivamente.",
                    fr: "Une invitation à s'unir et à se connecter physiquement ou émotionnellement."
                },
                emoji: "🤝"
            },
            {
                word: "un gest",
                translations: { 
                    en: "a gesture", 
                    sv: "en gest", 
                    es: "un gesto", 
                    it: "un gesto", 
                    fr: "un geste" 
                },
                description: {
                    ca: "Una acció simbòlica per expressar emoció o significat.",
                    en: "A symbolic action to express emotion or meaning.",
                    sv: "En symbolisk handling för att uttrycka känsla eller innebörd.",
                    es: "Una acción simbólica para expresar emoción o significado.",
                    it: "Un'azione simbolica per esprimere emozione o significato.",
                    fr: "Une action symbolique pour exprimer une émotion ou un sens."
                },
                emoji: "✋🌍"
            },
            {
                word: "a mercè",
                translations: { 
                    en: "at the mercy", 
                    sv: "på nåd", 
                    es: "a merced", 
                    it: "alla mercé", 
                    fr: "à la merci" 
                },
                description: {
                    ca: "Estar sota el control o influència d’una altra força.",
                    en: "To be under the control or influence of another force.",
                    sv: "Att vara under kontroll eller påverkan av en annan kraft.",
                    es: "Estar bajo el control o influencia de otra fuerza.",
                    it: "Essere sotto il controllo o l'influenza di un'altra forza.",
                    fr: "Être sous le contrôle ou l'influence d'une autre force."
                },
                emoji: "⚓🤲"
            },
            {
                word: "sirenes",
                translations: { 
                    en: "sirens", 
                    sv: "sirener", 
                    es: "sirenas", 
                    it: "sirene", 
                    fr: "sirènes" 
                },
                description: {
                    ca: "Criatures mitològiques que atreien mariners amb el seu cant.",
                    en: "Mythological creatures that lured sailors with their singing.",
                    sv: "Mytologiska varelser som lockade sjömän med sin sång.",
                    es: "Criaturas mitológicas que atraían a los marineros con su canto.",
                    it: "Creature mitologiche che attiravano i marinai con il loro canto.",
                    fr: "Créatures mythologiques qui attiraient les marins avec leur chant."
                },
                emoji: "🧜‍♀️🧜‍♀️"
            }
            
            
            
        ]
      },
      "lokuraJulieta": {
        videoId: "SzX6ab5-4RI",
        phrases: [
          
          { text: "Me'n ____ de tu només quan tanco els ulls, els ulls.", answer: "recordo", startTime: 8, endTime: 16 },
          { text: "Ballant ____ les llums, els nostres cossos junts.", answer: "sota", startTime: 16, endTime: 23 },
          { text: "Vull ____ una altra vegada, a la nit en què ens vam conèixer. Jo portava una  &quot;hoodie&quot; blava, i tu em vas picar l'esquena.", answer: "tornar", startTime: 24, endTime: 41 },
          { text: "&quot;Baby&quot;, tu ____ una &quot;lokura&quot;. T'ho dic de veritat.", answer: "ets", startTime: 40, endTime: 45 },
          { text: "Et miro, el cor se m'____, i em quedo a la meitat. Jo que anava tan de dura, i no sé què m'ha passat.", answer: "atura", startTime: 44, endTime: 53 },
          { text: "&quot;Baby&quot;, tu ets una &quot;lokura&quot;. T'ho ____ de veritat.", answer: "dic", startTime: 52, endTime: 56 },
          { text: "I ja no estàs, i ja no estàs, i ja no estàs, a ____ esperant-me. Flors🌼 a les mans, flors🌺 a les mans, flors🌷 a les mans, torno cap a casa.", answer: "baix", startTime: 56, endTime: 64 },
          { text: "I ja no estàs, i ja no estàs, i ja no estàs, als ____ on anàvem. Eren tan macos, però ara em fan plorar.", answer: "llocs", startTime: 64, endTime: 72 },
          { text: "No sé si ara estàs més feliç, ni amb ____ vas a dormir. Però avui m'has escrit, dient que has pensat en mi.", answer: "qui", startTime: 71, endTime: 80 },
          { text: "No sé si vols ____ com em va o si ja t'he oblidat. Però jo no t'he oblidat, perquè:", answer: "saber", startTime: 80, endTime: 88 },
          { text: "&quot;Baby&quot;, tu ets una &quot;lokura&quot;. T'ho ____ de veritat.", answer: "dic", startTime: 88, endTime: 93 },
          { text: "Et miro, el cor se m'atura, i em quedo a la ____. Jo que anava tan de dura, i no sé què m'ha passat.", answer: "meitat", startTime: 93, endTime: 101 },
          { text: "&quot;Baby&quot;, tu ets ____ &quot;lokura&quot;. T'ho dic de veritat.", answer: "una", startTime: 100, endTime: 105 },
          { text: "I ja no estàs, i ja no estàs, i ja no estàs, a baix esperant-me. ____ 🌼 a les mans, 🌺🌼 a les mans, 🌷🌼 a les mans, torno cap a casa.", answer: "flors", startTime: 104, endTime: 112 },
          { text: "I ja no estàs, i ja no estàs, i ja no estàs, als ____ on anàvem. Eren tan macos, però ara em fan plorar.", answer: "llocs", startTime: 112, endTime: 120 },
          { text: "T'ho ____, la Ju-", answer: "juro", startTime: 121, endTime: 138 },

         
        ],
        keyWords: [
            {
                word: "me'n recordo",
                translations: { 
                    en: "I remember", 
                    sv: "jag kommer ihåg", 
                    es: "me acuerdo", 
                    it: "mi ricordo", 
                    fr: "je me souviens" 
                },
                description: {
                    ca: "Es diu quan una cosa del passat ve a la memòria.",
                    en: "Used when something from the past comes to memory.",
                    sv: "Används när något från det förflutna kommer ihåg.",
                    es: "Se usa cuando algo del pasado viene a la memoria.",
                    it: "Si usa quando qualcosa del passato viene in mente.",
                    fr: "Se dit lorsque quelque chose du passé revient en mémoire."
                },
                emoji: "💭📅"
            },
            {
                word: "t'ho juro",
                translations: { 
                    en: "I swear it to you", 
                    sv: "jag svär det för dig", 
                    es: "te lo juro", 
                    it: "te lo giuro", 
                    fr: "je te le jure" 
                },
                description: {
                    ca: "Una manera d'expressar sinceritat o una promesa.",
                    en: "A way to express sincerity or a promise.",
                    sv: "Ett sätt att uttrycka uppriktighet eller ett löfte.",
                    es: "Una forma de expresar sinceridad o una promesa.",
                    it: "Un modo per esprimere sincerità o una promessa.",
                    fr: "Une manière d'exprimer sa sincérité ou une promesse."
                },
                emoji: "🤞✨"
            },
            {
                word: "ja no estàs",
                translations: { 
                    en: "you're no longer here", 
                    sv: "du är inte längre här", 
                    es: "ya no estás", 
                    it: "non ci sei più", 
                    fr: "tu n'es plus là" 
                },
                description: {
                    ca: "Es refereix a l'absència d'una persona o cosa.",
                    en: "Refers to the absence of a person or thing.",
                    sv: "Syftar på en persons eller saks frånvaro.",
                    es: "Se refiere a la ausencia de una persona o cosa.",
                    it: "Si riferisce all'assenza di una persona o cosa.",
                    fr: "Fait référence à l'absence d'une personne ou d'une chose."
                },
                emoji: "💔🚪"
            },
            {
                word: "eren tan macos",
                translations: { 
                    en: "they were so beautiful", 
                    sv: "de var så vackra", 
                    es: "eran tan bonitos", 
                    it: "erano così belli", 
                    fr: "ils étaient si beaux" 
                },
                description: {
                    ca: "Una expressió per descriure alguna cosa agradable o bonica.",
                    en: "An expression to describe something pleasant or beautiful.",
                    sv: "Ett uttryck för att beskriva något trevligt eller vackert.",
                    es: "Una expresión para describir algo agradable o bonito.",
                    it: "Un'espressione per descrivere qualcosa di piacevole o bello.",
                    fr: "Une expression pour décrire quelque chose d'agréable ou de beau."
                },
                emoji: "✨🌸"
            },
            {
                word: "em fan plorar",
                translations: { 
                    en: "they make me cry", 
                    sv: "de får mig att gråta", 
                    es: "me hacen llorar", 
                    it: "mi fanno piangere", 
                    fr: "ils me font pleurer" 
                },
                description: {
                    ca: "Es diu quan alguna cosa provoca tristesa o emoció.",
                    en: "Said when something causes sadness or emotion.",
                    sv: "Sägs när något orsakar sorg eller känsla.",
                    es: "Se dice cuando algo provoca tristeza o emoción.",
                    it: "Si dice quando qualcosa provoca tristezza o emozione.",
                    fr: "Dit lorsque quelque chose provoque de la tristesse ou de l'émotion."
                },
                emoji: "😢💧"
            },
            {
                word: "llocs",
                translations: { 
                    en: "places", 
                    sv: "platser", 
                    es: "lugares", 
                    it: "luoghi", 
                    fr: "lieux" 
                },
                description: {
                    ca: "Espais físics o simbòlics on passen experiències.",
                    en: "Physical or symbolic spaces where experiences occur.",
                    sv: "Fysiska eller symboliska platser där upplevelser sker.",
                    es: "Espacios físicos o simbólicos donde ocurren experiencias.",
                    it: "Spazi fisici o simbolici dove avvengono esperienze.",
                    fr: "Espaces physiques ou symboliques où se produisent des expériences."
                },
                emoji: "📍🏠"
            },
            {
                word: "flors a les mans",
                translations: { 
                    en: "flowers in hand", 
                    sv: "blommor i handen", 
                    es: "flores en las manos", 
                    it: "fiori nelle mani", 
                    fr: "des fleurs à la main" 
                },
                description: {
                    ca: "Un gest simbòlic sovint associat amb amor o record.",
                    en: "A symbolic gesture often associated with love or remembrance.",
                    sv: "En symbolisk gest ofta förknippad med kärlek eller minne.",
                    es: "Un gesto simbólico a menudo asociado con el amor o el recuerdo.",
                    it: "Un gesto simbolico spesso associato all'amore o al ricordo.",
                    fr: "Un geste symbolique souvent associé à l'amour ou au souvenir."
                },
                emoji: "🌼🌺✋"
            },
            {
                word: "torno cap a casa",
                translations: { 
                    en: "I return home", 
                    sv: "jag återvänder hem", 
                    es: "vuelvo a casa", 
                    it: "torno a casa", 
                    fr: "je rentre chez moi" 
                },
                description: {
                    ca: "Indica el final d’un trajecte cap al lloc d’origen.",
                    en: "Indicates the end of a journey back to the place of origin.",
                    sv: "Indikerar slutet på en resa tillbaka till ursprungsplatsen.",
                    es: "Indica el final de un trayecto hacia el lugar de origen.",
                    it: "Indica la fine di un viaggio verso il luogo d'origine.",
                    fr: "Indique la fin d'un voyage vers le lieu d'origine."
                },
                emoji: "🏡🚶"
            },
            {
                word: "tanco els ulls",
                translations: { 
                    en: "I close my eyes", 
                    sv: "jag stänger mina ögon", 
                    es: "cierro los ojos", 
                    it: "chiudo gli occhi", 
                    fr: "je ferme les yeux" 
                },
                description: {
                    ca: "Acció per descansar o imaginar, sovint associada amb la memòria.",
                    en: "An action to rest or imagine, often associated with memory.",
                    sv: "En handling för att vila eller föreställa sig, ofta kopplad till minnen.",
                    es: "Una acción para descansar o imaginar, a menudo asociada con la memoria.",
                    it: "Un'azione per riposare o immaginare, spesso associata alla memoria.",
                    fr: "Une action pour se reposer ou imaginer, souvent associée à la mémoire."
                },
                emoji: "🙈💭"
            },
            {
                word: "a baix esperant-me",
                translations: { 
                    en: "downstairs waiting for me", 
                    sv: "där nere och väntar på mig", 
                    es: "abajo esperándome", 
                    it: "giù ad aspettarmi", 
                    fr: "en bas à m'attendre" 
                },
                description: {
                    ca: "Es refereix a algú que està esperant en una posició inferior.",
                    en: "Refers to someone waiting in a lower position.",
                    sv: "Syftar på någon som väntar i en lägre position.",
                    es: "Se refiere a alguien que está esperando en una posición inferior.",
                    it: "Si riferisce a qualcuno che aspetta in una posizione inferiore.",
                    fr: "Fait référence à quelqu'un qui attend dans une position inférieure."
                },
                emoji: "⬇️🚪"
            },
            {
                word: "el cor se m'atura",
                translations: { 
                    en: "my heart stops", 
                    sv: "mitt hjärta stannar", 
                    es: "mi corazón se detiene", 
                    it: "il mio cuore si ferma", 
                    fr: "mon cœur s'arrête" 
                },
                description: {
                    ca: "Expressió per indicar un moment d’impacte emocional intens.",
                    en: "An expression to indicate a moment of intense emotional impact.",
                    sv: "Ett uttryck för att indikera ett ögonblick av stark känslomässig påverkan.",
                    es: "Una expresión para indicar un momento de impacto emocional intenso.",
                    it: "Un'espressione per indicare un momento di forte impatto emotivo.",
                    fr: "Une expression pour indiquer un moment d'impact émotionnel intense."
                },
                emoji: "💓⏸️"
            },
            {
                word: "ballant sota les llums",
                translations: { 
                    en: "dancing under the lights", 
                    sv: "dansar under ljusen", 
                    es: "bailando bajo las luces", 
                    it: "ballando sotto le luci", 
                    fr: "dansant sous les lumières" 
                },
                description: {
                    ca: "Una imatge dinàmica i vibrant d'alegria o autoexpressió sota les llums.",
                    en: "A dynamic and vibrant image of joy or self-expression under the lights.",
                    sv: "En dynamisk och levande bild av glädje eller självuttryck under ljusen.",
                    es: "Una imagen dinámica y vibrante de alegría o autoexpresión bajo las luces.",
                    it: "Un'immagine dinamica e vibrante di gioia o auto-espressione sotto le luci.",
                    fr: "Une image dynamique et vibrante de joie ou d'auto-expression sous les lumières."
                },
                emoji: "💃✨"
            },
            {
                word: "vull tornar",
                translations: { 
                    en: "I want to return", 
                    sv: "jag vill återvända", 
                    es: "quiero volver", 
                    it: "voglio tornare", 
                    fr: "je veux revenir" 
                },
                description: {
                    ca: "Expressa el desig de repetir una experiència o tornar a un lloc.",
                    en: "Expresses the desire to repeat an experience or return to a place.",
                    sv: "Uttrycker en önskan att upprepa en upplevelse eller återvända till en plats.",
                    es: "Expresa el deseo de repetir una experiencia o volver a un lugar.",
                    it: "Esprime il desiderio di ripetere un'esperienza o tornare in un luogo.",
                    fr: "Exprime le désir de répéter une expérience ou de retourner à un endroit."
                },
                emoji: "🔄🏠"
            },
            {
                word: "et miro",
                translations: { 
                    en: "I look at you", 
                    sv: "jag tittar på dig", 
                    es: "te miro", 
                    it: "ti guardo", 
                    fr: "je te regarde" 
                },
                description: {
                    ca: "Una acció de dirigir la vista cap a algú, sovint amb afecte.",
                    en: "An action of directing the gaze at someone, often with affection.",
                    sv: "En handling att rikta blicken mot någon, ofta med tillgivenhet.",
                    es: "Una acción de dirigir la vista hacia alguien, a menudo con afecto.",
                    it: "Un'azione di dirigere lo sguardo verso qualcuno, spesso con affetto.",
                    fr: "Une action de diriger son regard vers quelqu'un, souvent avec affection."
                },
                emoji: "👀❤️"
            },
            {
                word: "esperant-me",
                translations: { 
                    en: "waiting for me", 
                    sv: "väntar på mig", 
                    es: "esperándome", 
                    it: "aspettandomi", 
                    fr: "en m'attendant" 
                },
                description: {
                    ca: "Es refereix a algú que està dedicant temps a esperar una altra persona.",
                    en: "Refers to someone spending time waiting for another person.",
                    sv: "Syftar på någon som tillbringar tid med att vänta på en annan person.",
                    es: "Se refiere a alguien que dedica tiempo a esperar a otra persona.",
                    it: "Si riferisce a qualcuno che dedica tempo ad aspettare un'altra persona.",
                    fr: "Fait référence à quelqu'un qui consacre du temps à attendre une autre personne."
                },
                emoji: "⏳👤"
            },
            {
                word: "picant l'esquena",
                translations: { 
                    en: "tapping the back", 
                    sv: "knackar på ryggen", 
                    es: "tocando la espalda", 
                    it: "picchiettando la schiena", 
                    fr: "tapoter le dos" 
                },
                description: {
                    ca: "Una acció física per cridar l'atenció d'algú.",
                    en: "A physical action to get someone's attention.",
                    sv: "En fysisk handling för att få någons uppmärksamhet.",
                    es: "Una acción física para llamar la atención de alguien.",
                    it: "Un'azione fisica per attirare l'attenzione di qualcuno.",
                    fr: "Une action physique pour attirer l'attention de quelqu'un."
                },
                emoji: "👋"
            },
            {
                word: "ja t'he oblidat",
                translations: { 
                    en: "I've already forgotten you", 
                    sv: "jag har redan glömt dig", 
                    es: "ya te he olvidado", 
                    it: "ti ho già dimenticato", 
                    fr: "je t'ai déjà oublié" 
                },
                description: {
                    ca: "Expressa que algú ha deixat de pensar en una altra persona.",
                    en: "Expresses that someone has stopped thinking about another person.",
                    sv: "Uttrycker att någon har slutat tänka på en annan person.",
                    es: "Expresa que alguien ha dejado de pensar en otra persona.",
                    it: "Esprime che qualcuno ha smesso di pensare a un'altra persona.",
                    fr: "Exprime que quelqu'un a cessé de penser à une autre personne."
                },
                emoji: "🧠❌"
            },
            {
                word: "et miro",
                translations: { 
                    en: "I look at you", 
                    sv: "jag tittar på dig", 
                    es: "te miro", 
                    it: "ti guardo", 
                    fr: "je te regarde" 
                },
                description: {
                    ca: "Una acció de dirigir la vista cap a algú, sovint amb afecte.",
                    en: "An action of directing the gaze at someone, often with affection.",
                    sv: "En handling att rikta blicken mot någon, ofta med tillgivenhet.",
                    es: "Una acción de dirigir la vista hacia alguien, a menudo con afecto.",
                    it: "Un'azione di dirigere lo sguardo verso qualcuno, spesso con affetto.",
                    fr: "Une action de diriger son regard vers quelqu'un, souvent avec affection."
                },
                emoji: "👀❤️"
            },{
                word: "penso en tu",
                translations: { 
                    en: "I think of you", 
                    sv: "jag tänker på dig", 
                    es: "pienso en ti", 
                    it: "penso a te", 
                    fr: "je pense à toi" 
                },
                description: {
                    ca: "Es refereix al fet de tenir algú present a la ment o als pensaments.",
                    en: "Refers to having someone present in one's mind or thoughts.",
                    sv: "Syftar på att ha någon närvarande i ens tankar.",
                    es: "Se refiere a tener a alguien presente en la mente o pensamientos.",
                    it: "Si riferisce ad avere qualcuno presente nella mente o nei pensieri.",
                    fr: "Fait référence à avoir quelqu'un présent dans l'esprit ou les pensées."
                },
                emoji: "💭❤️"
            },
            {
                word: "vull saber",
                translations: { 
                    en: "I want to know", 
                    sv: "jag vill veta", 
                    es: "quiero saber", 
                    it: "voglio sapere", 
                    fr: "je veux savoir" 
                },
                description: {
                    ca: "Expressa el desig d'obtenir informació o comprendre alguna cosa.",
                    en: "Expresses the desire to obtain information or understand something.",
                    sv: "Uttrycker önskan att få information eller förstå något.",
                    es: "Expresa el deseo de obtener información o comprender algo.",
                    it: "Esprime il desiderio di ottenere informazioni o comprendere qualcosa.",
                    fr: "Exprime le désir d'obtenir des informations ou de comprendre quelque chose."
                },
                emoji: "❓🤔"
            },
            {
                word: "no t’he oblidat",
                translations: { 
                    en: "I haven’t forgotten you", 
                    sv: "jag har inte glömt dig", 
                    es: "no te he olvidado", 
                    it: "non ti ho dimenticato", 
                    fr: "je ne t'ai pas oublié" 
                },
                description: {
                    ca: "Indica que encara es recorda algú amb claredat o afecte.",
                    en: "Indicates that someone is still remembered clearly or affectionately.",
                    sv: "Indikerar att någon fortfarande kommer ihåg tydligt eller med tillgivenhet.",
                    es: "Indica que alguien todavía es recordado con claridad o afecto.",
                    it: "Indica che qualcuno è ancora ricordato con chiarezza o affetto.",
                    fr: "Indique que quelqu'un est encore clairement ou affectueusement dans les souvenirs."
                },
                emoji: "🧠💞"
            },
            {
                word: "els llocs on anàvem",
                translations: { 
                    en: "the places we used to go", 
                    sv: "platserna vi brukade gå till", 
                    es: "los lugares a los que íbamos", 
                    it: "i luoghi in cui andavamo", 
                    fr: "les endroits où nous allions" 
                },
                description: {
                    ca: "Es refereix a espais compartits que tenen un valor emocional.",
                    en: "Refers to shared spaces that hold emotional value.",
                    sv: "Syftar på delade platser som har ett emotionellt värde.",
                    es: "Se refiere a lugares compartidos que tienen un valor emocional.",
                    it: "Si riferisce a spazi condivisi che hanno un valore emotivo.",
                    fr: "Fait référence à des lieux partagés qui ont une valeur émotionnelle."
                },
                emoji: "📍💔"
            },
            {
                word: "tornar cap a casa",
                translations: { 
                    en: "to return home", 
                    sv: "att återvända hem", 
                    es: "volver a casa", 
                    it: "tornare a casa", 
                    fr: "rentrer chez soi" 
                },
                description: {
                    ca: "Indica el fet de tornar a un lloc d'origen o de confort.",
                    en: "Indicates returning to a place of origin or comfort.",
                    sv: "Indikerar att återvända till en plats av ursprung eller komfort.",
                    es: "Indica volver a un lugar de origen o comodidad.",
                    it: "Indica il ritorno a un luogo d'origine o comfort.",
                    fr: "Indique le retour à un lieu d'origine ou de confort."
                },
                emoji: "🏡🚶‍♂️"
            },
            {
                word: "els teus ulls",
                translations: { 
                    en: "your eyes", 
                    sv: "dina ögon", 
                    es: "tus ojos", 
                    it: "i tuoi occhi", 
                    fr: "tes yeux" 
                },
                description: {
                    ca: "Un element poètic que sovint simbolitza l'expressió o les emocions.",
                    en: "A poetic element often symbolizing expression or emotions.",
                    sv: "Ett poetiskt element som ofta symboliserar uttryck eller känslor.",
                    es: "Un elemento poético que a menudo simboliza la expresión o las emociones.",
                    it: "Un elemento poetico che spesso simboleggia l'espressione o le emozioni.",
                    fr: "Un élément poétique symbolisant souvent l'expression ou les émotions."
                },
                emoji: "👁️❤️"
            },
            {
                word: "a la meitat",
                translations: { 
                    en: "in the middle", 
                    sv: "i mitten", 
                    es: "a la mitad", 
                    it: "a metà", 
                    fr: "au milieu" 
                },
                description: {
                    ca: "Indica un punt intermedi d’una situació o emoció.",
                    en: "Indicates an intermediate point of a situation or emotion.",
                    sv: "Indikerar en mellanpunkt i en situation eller känsla.",
                    es: "Indica un punto intermedio de una situación o emoción.",
                    it: "Indica un punto intermedio di una situazione o emozione.",
                    fr: "Indique un point intermédiaire d'une situation ou d'une émotion."
                },
                emoji: "⚖️💔"
            },
            {
                word: "no sé què m’ha passat",
                translations: { 
                    en: "I don’t know what happened to me", 
                    sv: "jag vet inte vad som hände med mig", 
                    es: "no sé qué me pasó", 
                    it: "non so cosa mi è successo", 
                    fr: "je ne sais pas ce qui m'est arrivé" 
                },
                description: {
                    ca: "Expressa confusió o sorpresa sobre un canvi emocional.",
                    en: "Expresses confusion or surprise about an emotional change.",
                    sv: "Uttrycker förvirring eller förvåning över en känslomässig förändring.",
                    es: "Expresa confusión o sorpresa sobre un cambio emocional.",
                    it: "Esprime confusione o sorpresa per un cambiamento emotivo.",
                    fr: "Exprime une confusion ou une surprise à propos d'un changement émotionnel."
                },
                emoji: "😵💔"
            }
            
            
            

        ]
      },
      
      "elBoleroChoriza": {
        videoId: "mvWv6XDpYzo",
        phrases: [
          
          { text: "Ja fa ____ moreneta que t'ho vaig dir.", answer: "temps", startTime: 46, endTime: 52 },
          { text: "Ai, ____ quant t'ha costat de decidir!", answer: "filla", startTime: 52, endTime: 57 },
          { text: "Ella s'ho calla, calla i ____.", answer: "somriu", startTime: 57, endTime: 63 },
          { text: "Que més ____ sang de palla, si en la cara t'ho dic.", answer: "vols", startTime: 62, endTime: 67},
          { text: "Les ____ d'olivera són com la fel.", answer: "fulles", startTime: 100, endTime: 106 },
          { text: "Ai, les ____ del meu nòvio com la mel!", answer: "paraules", startTime: 105, endTime: 111 },
          { text: "____ s'ho calla, calla i somriu.", answer: "ella", startTime: 111, endTime: 116 },
          { text: "Que més vols sang de ____, si en la cara t'ho dic.", answer: "palla", startTime: 115, endTime: 122 },
          { text: "La ____ alzirenya de tot somriu", answer: "fadrina", startTime: 120, endTime: 127 },
          { text: "Ai, si es ____ l'espardenya se n'ix el riu!", answer: "trenca", startTime: 127, endTime: 132 },
          { text: "Ella s'____ calla, calla i somriu.", answer: "ho", startTime: 132, endTime: 137 },
          { text: "Que més ____ sang de palla, si en la cara t'ho dic.", answer: "vols", startTime: 137, endTime: 143 },
          { text: "Visca l'accent de ____! Visca la tradició!", answer: "poble", startTime: 165, endTime: 169 },
      
          { text: "I visca la ____ que vos va parir!", answer: "mare", startTime: 169, endTime: 176 },
         
        ],
        keyWords:[
            {
                word: "temps",
                translations: { 
                    en: "time", 
                    sv: "tid", 
                    es: "tiempo", 
                    it: "tempo", 
                    fr: "temps" 
                },
                description: {
                    ca: "Durada o període en què ocorren els esdeveniments.",
                    en: "Duration or period during which events occur.",
                    sv: "Varaktighet eller period under vilken händelser inträffar.",
                    es: "Duración o período en el que ocurren los eventos.",
                    it: "Durata o periodo durante il quale si verificano gli eventi.",
                    fr: "Durée ou période pendant laquelle les événements se produisent."
                },
                emoji: "⏳"
            },
            {
                word: "filla",
                translations: { 
                    en: "daughter", 
                    sv: "dotter", 
                    es: "hija", 
                    it: "figlia", 
                    fr: "fille" 
                },
                description: {
                    ca: "Una persona que forma part de la descendència familiar.",
                    en: "A person who is part of the family lineage.",
                    sv: "En person som är en del av familjens härkomst.",
                    es: "Una persona que forma parte de la descendencia familiar.",
                    it: "Una persona che fa parte della discendenza familiare.",
                    fr: "Une personne faisant partie de la descendance familiale."
                },
                emoji: "🧒❤️"
            },
            {
                word: "somriu",
                translations: { 
                    en: "smiles", 
                    sv: "ler", 
                    es: "sonríe", 
                    it: "sorride", 
                    fr: "sourit" 
                },
                description: {
                    ca: "Expressió facial que mostra alegria o amabilitat.",
                    en: "A facial expression showing happiness or friendliness.",
                    sv: "Ett ansiktsuttryck som visar glädje eller vänlighet.",
                    es: "Una expresión facial que muestra alegría o amabilidad.",
                    it: "Un'espressione facciale che mostra felicità o cordialità.",
                    fr: "Une expression faciale montrant la joie ou l'amabilité."
                },
                emoji: "😊"
            },
            {
                word: "mare",
                translations: { 
                    en: "mother", 
                    sv: "mamma", 
                    es: "madre", 
                    it: "madre", 
                    fr: "mère" 
                },
                description: {
                    ca: "Una figura familiar que cuida i guia amb estima.",
                    en: "A family figure who cares for and guides with love.",
                    sv: "En familjefigur som tar hand om och vägleder med kärlek.",
                    es: "Una figura familiar que cuida y guía con cariño.",
                    it: "Una figura familiare che si prende cura e guida con amore.",
                    fr: "Une figure familiale qui prend soin et guide avec amour."
                },
                emoji: "👩‍👧‍👦❤️"
            },
            {
                word: "fulles d'olivera",
                translations: { 
                    en: "olive leaves", 
                    sv: "olivblad", 
                    es: "hojas de olivo", 
                    it: "foglie d'ulivo", 
                    fr: "feuilles d'olivier" 
                },
                description: {
                    ca: "Les fulles de l'arbre de l'olivera, sovint associades amb la pau.",
                    en: "The leaves of the olive tree, often associated with peace.",
                    sv: "Bladen från olivträdet, ofta förknippade med fred.",
                    es: "Las hojas del olivo, a menudo asociadas con la paz.",
                    it: "Le foglie dell'ulivo, spesso associate alla pace.",
                    fr: "Les feuilles de l'olivier, souvent associées à la paix."
                },
                emoji: "🌿🕊️"
            },
            {
                word: "paraules",
                translations: { 
                    en: "words", 
                    sv: "ord", 
                    es: "palabras", 
                    it: "parole", 
                    fr: "mots" 
                },
                description: {
                    ca: "Unitats de llenguatge que transmeten significats.",
                    en: "Units of language that convey meaning.",
                    sv: "Språkenheter som förmedlar betydelse.",
                    es: "Unidades de lenguaje que transmiten significado.",
                    it: "Unità linguistiche che trasmettono significati.",
                    fr: "Unités de langage qui transmettent un sens."
                },
                emoji: "📝"
            },
            {
                word: "fadrina alzirenya",
                translations: { 
                    en: "young woman from Alzira", 
                    sv: "ung kvinna från Alzira", 
                    es: "moza de Alzira", 
                    it: "giovane donna di Alzira", 
                    fr: "jeune femme d'Alzira" 
                },
                description: {
                    ca: "Una dona jove i soltera de la ciutat d'Alzira.",
                    en: "A young, unmarried woman from the city of Alzira.",
                    sv: "En ung, ogift kvinna från staden Alzira.",
                    es: "Una joven soltera de la ciudad de Alzira.",
                    it: "Una giovane donna non sposata della città di Alzira.",
                    fr: "Une jeune femme non mariée de la ville d'Alzira."
                },
                emoji: "👩‍🌾🌴"
            },
            {
                word: "espardenya",
                translations: { 
                    en: "espadrille", 
                    sv: "espadrill", 
                    es: "alpargata", 
                    it: "espadrilla", 
                    fr: "espadrille" 
                },
                description: {
                    ca: "Calçat tradicional de corda i lona, típic de la Mediterrània.",
                    en: "Traditional footwear made of rope and canvas, typical of the Mediterranean.",
                    sv: "Traditionella skor av rep och tyg, typiska för Medelhavet.",
                    es: "Calzado tradicional de cuerda y lona, típico del Mediterráneo.",
                    it: "Calzature tradizionali fatte di corda e tela, tipiche del Mediterraneo.",
                    fr: "Chaussures traditionnelles en corde et toile, typiques de la Méditerranée."
                },
                emoji: "👟🌞"
            },
            {
                word: "accent de poble",
                translations: { 
                    en: "village accent", 
                    sv: "bydialekt", 
                    es: "acento de pueblo", 
                    it: "accento del villaggio", 
                    fr: "accent de village" 
                },
                description: {
                    ca: "Manera de parlar que reflecteix la regió o el poble d'una persona.",
                    en: "Way of speaking that reflects a person's region or village.",
                    sv: "Sätt att tala som återspeglar en persons region eller by.",
                    es: "Manera de hablar que refleja la región o pueblo de una persona.",
                    it: "Modo di parlare che riflette la regione o il villaggio di una persona.",
                    fr: "Façon de parler qui reflète la région ou le village d'une personne."
                },
                emoji: "🗣️🏡"
            },
            {
                word: "visca la tradició",
                translations: { 
                    en: "long live tradition", 
                    sv: "leve traditionen", 
                    es: "viva la tradición", 
                    it: "viva la tradizione", 
                    fr: "vive la tradition" 
                },
                description: {
                    ca: "Crida per a celebrar i mantindre les tradicions culturals.",
                    en: "A call to celebrate and preserve cultural traditions.",
                    sv: "En uppmaning att fira och bevara kulturella traditioner.",
                    es: "Un llamado a celebrar y preservar las tradiciones culturales.",
                    it: "Un invito a celebrare e preservare le tradizioni culturali.",
                    fr: "Un appel à célébrer et préserver les traditions culturelles."
                },
                emoji: "🎉✨"
            },
            {
                word: "trenca",
                translations: { 
                    en: "breaks", 
                    sv: "bryter", 
                    es: "rompe", 
                    it: "rompe", 
                    fr: "casse" 
                },
                description: {
                    ca: "Acció de dividir o separar una cosa per força.",
                    en: "The act of dividing or separating something by force.",
                    sv: "Handling att dela eller separera något med kraft.",
                    es: "La acción de dividir o separar algo por fuerza.",
                    it: "L'atto di dividere o separare qualcosa con forza.",
                    fr: "L'action de diviser ou de séparer quelque chose par la force."
                },
                emoji: "🪓"
            },
            {
                word: "temps passat",
                translations: { 
                    en: "time passed", 
                    sv: "tid som gått", 
                    es: "tiempo pasado", 
                    it: "tempo passato", 
                    fr: "temps passé" 
                },
                description: {
                    ca: "Període de temps que ja ha transcorregut i no torna.",
                    en: "A period of time that has already passed and will not return.",
                    sv: "En tidsperiod som redan har passerat och inte återvänder.",
                    es: "Un período de tiempo que ya pasó y no volverá.",
                    it: "Un periodo di tempo che è già passato e non tornerà.",
                    fr: "Une période de temps qui est déjà passée et ne reviendra pas."
                },
                emoji: "⏳❌"
            },
            {
                word: "en la cara t’ho dic",
                translations: { 
                    en: "I tell you to your face", 
                    sv: "jag säger det rakt till dig", 
                    es: "te lo digo en la cara", 
                    it: "te lo dico in faccia", 
                    fr: "je te le dis en face" 
                },
                description: {
                    ca: "Expressió per a indicar que s'és directe i clar en una conversa.",
                    en: "An expression to indicate being direct and clear in a conversation.",
                    sv: "Ett uttryck för att indikera att man är direkt och tydlig i en konversation.",
                    es: "Una expresión para indicar ser directo y claro en una conversación.",
                    it: "Un'espressione per indicare di essere diretti e chiari in una conversazione.",
                    fr: "Une expression pour indiquer qu'on est direct et clair dans une conversation."
                },
                emoji: "💬👤"
            },
            {
                word: "les paraules dolces",
                translations: { 
                    en: "sweet words", 
                    sv: "söta ord", 
                    es: "palabras dulces", 
                    it: "parole dolci", 
                    fr: "mots doux" 
                },
                description: {
                    ca: "Paraules amables o afectuoses, sovint usades per a demostrar estima.",
                    en: "Kind or affectionate words, often used to show affection.",
                    sv: "Snälla eller kärleksfulla ord, ofta använda för att visa tillgivenhet.",
                    es: "Palabras amables o cariñosas, a menudo usadas para demostrar afecto.",
                    it: "Parole gentili o affettuose, spesso usate per dimostrare affetto.",
                    fr: "Mots gentils ou affectueux, souvent utilisés pour montrer de l'affection."
                },
                emoji: "📝❤️"
            }
            
        ]
        
      },   
      "furtadoraSangtrait": {
        videoId: "AoW-xr4I2PE",
        phrases: [
          { text: "La sang dels innocents, ____ la seva copa d'or. Segut al tron dels manaments, mentre el món s'omple d'horrors.", answer: "omple", startTime: 11, endTime: 32 },
          { text: "Els ____ no surten ja dels pits, la terra s'obre sota els peus.", answer: "cants", startTime: 32, endTime: 43 },
          { text: "No hi ha qui el ____! No té nom. Rostre del fred. No hi ha qui el pari! És la mort!", answer: "pari", startTime: 43, endTime: 63 },
          { text: "L'ombra estesa sobre els ____, fa que l'acer perdi calor.", answer: "camps", startTime: 63, endTime: 72 },
          { text: "Anells que lliguen el seu ____, encès de ràbia com un gos", answer: "cos", startTime: 72, endTime: 83 },
          { text: "Mentre els laments ____ llunyans, és l'agonia dels mortals.", answer: "sonen", startTime: 83, endTime: 95 },
          { text: "🎸(Solo de guitarra)🎸 No hi ha qui el pari! No té ____. Rostre del fred. No hi ha qui el pari! És la mort!", answer: "nom", startTime: 126, endTime: 146 },
          { text: "La ballarina ____ cos, despulla d'ànimes el món, deixant les armes en el camp, com creus mal fetes sense nom.", answer: "sense", startTime: 146, endTime: 166 },
          { text: "I així no quedarà un ____, només les llances i un vell tron.", answer: "record", startTime: 166, endTime: 177 },
          { text: "No hi ha qui el pari! No té ____. No hi ha qui el pari! És la mort!", answer: "nom", startTime: 177, endTime: 191 },
        ],
        keyWords: [
            {
                word: "la ballarina",
                translations: { 
                    en: "the dancer", 
                    sv: "dansaren", 
                    es: "la bailarina", 
                    it: "la ballerina", 
                    fr: "la danseuse" 
                },
                description: {
                    ca: "Una persona que balla com a forma d’expressió artística o física.",
                    en: "A person who dances as a form of artistic or physical expression.",
                    sv: "En person som dansar som en form av konstnärligt eller fysiskt uttryck.",
                    es: "Una persona que baila como forma de expresión artística o física.",
                    it: "Una persona che balla come forma di espressione artistica o fisica.",
                    fr: "Une personne qui danse comme forme d'expression artistique ou physique."
                },
                emoji: "💃🎶"
            },
            {
                word: "sense cos",
                translations: { 
                    en: "without a body", 
                    sv: "utan kropp", 
                    es: "sin cuerpo", 
                    it: "senza corpo", 
                    fr: "sans corps" 
                },
                description: {
                    ca: "Indica l'absència d'un cos físic, literalment o metafòricament.",
                    en: "Indicates the absence of a physical body, literally or metaphorically.",
                    sv: "Indikerar frånvaron av en fysisk kropp, bokstavligt eller metaforiskt.",
                    es: "Indica la ausencia de un cuerpo físico, literal o metafóricamente.",
                    it: "Indica l'assenza di un corpo fisico, letteralmente o metaforicamente.",
                    fr: "Indique l'absence d'un corps physique, littéralement ou métaphoriquement."
                },
                emoji: "👻"
            },
            {
                word: "sense nom",
                translations: { 
                    en: "without a name", 
                    sv: "utan namn", 
                    es: "sin nombre", 
                    it: "senza nome", 
                    fr: "sans nom" 
                },
                description: {
                    ca: "Una cosa o persona que no ha estat identificada amb un nom.",
                    en: "Something or someone that has not been identified with a name.",
                    sv: "Något eller någon som inte har identifierats med ett namn.",
                    es: "Algo o alguien que no ha sido identificado con un nombre.",
                    it: "Qualcosa o qualcuno che non è stato identificato con un nome.",
                    fr: "Quelque chose ou quelqu'un qui n'a pas été identifié par un nom."
                },
                emoji: "❓🚫"
            },
            {
                word: "no hi ha qui el pari",
                translations: { 
                    en: "no one can stop him", 
                    sv: "ingen kan stoppa honom", 
                    es: "nadie puede detenerlo", 
                    it: "nessuno può fermarlo", 
                    fr: "personne ne peut l'arrêter" 
                },
                description: {
                    ca: "Indica que una persona o cosa és imparable o inevitable.",
                    en: "Indicates that a person or thing is unstoppable or inevitable.",
                    sv: "Indikerar att en person eller sak är ostoppbar eller oundviklig.",
                    es: "Indica que una persona o cosa es imparable o inevitable.",
                    it: "Indica che una persona o cosa è inarrestabile o inevitabile.",
                    fr: "Indique qu'une personne ou une chose est imparable ou inévitable."
                },
                emoji: "🛑❌"
            },            
            {
                word: "és la mort",
                translations: { 
                    en: "it is death", 
                    sv: "det är döden", 
                    es: "es la muerte", 
                    it: "è la morte", 
                    fr: "c'est la mort" 
                },
                description: {
                    ca: "Una declaració que descriu una condició o concepte final i definitiu.",
                    en: "A declaration describing a final and definitive condition or concept.",
                    sv: "Ett uttalande som beskriver ett slutgiltigt och definitivt tillstånd eller koncept.",
                    es: "Una declaración que describe una condición o concepto final y definitivo.",
                    it: "Una dichiarazione che descrive una condizione o concetto finale e definitivo.",
                    fr: "Une déclaration décrivant une condition ou un concept final et définitif."
                },
                emoji: "💀⚰️"
            },
            {
                word: "un vell tron",
                translations: { 
                    en: "an old throne", 
                    sv: "en gammal tron", 
                    es: "un viejo trono", 
                    it: "un vecchio trono", 
                    fr: "un vieux trône" 
                },
                description: {
                    ca: "Un seient majestuós que simbolitza poder o reialesa.",
                    en: "A majestic seat symbolizing power or royalty.",
                    sv: "En majestätisk stol som symboliserar makt eller kunglighet.",
                    es: "Un asiento majestuoso que simboliza poder o realeza.",
                    it: "Un sedile maestoso che simboleggia potere o regalità.",
                    fr: "Un siège majestueux symbolisant le pouvoir ou la royauté."
                },
                emoji: "👑🪑"
            },
            {
                word: "els innocents",
                translations: { 
                    en: "the innocents", 
                    sv: "de oskyldiga", 
                    es: "los inocentes", 
                    it: "gli innocenti", 
                    fr: "les innocents" 
                },
                description: {
                    ca: "Persones o éssers sense culpa ni malícia.",
                    en: "People or beings without guilt or malice.",
                    sv: "Människor eller varelser utan skuld eller ondska.",
                    es: "Personas o seres sin culpa ni malicia.",
                    it: "Persone o esseri senza colpa o malizia.",
                    fr: "Personnes ou êtres sans culpabilité ni malveillance."
                },
                emoji: "👶🕊️"
            },
            {
                word: "la sang",
                translations: { 
                    en: "the blood", 
                    sv: "blodet", 
                    es: "la sangre", 
                    it: "il sangue", 
                    fr: "le sang" 
                },
                description: {
                    ca: "Líquid vital que circula pel cos dels éssers vius.",
                    en: "Vital fluid that circulates through the bodies of living beings.",
                    sv: "Livsviktig vätska som cirkulerar i levande varelser.",
                    es: "Líquido vital que circula por el cuerpo de los seres vivos.",
                    it: "Fluido vitale che circola nei corpi degli esseri viventi.",
                    fr: "Liquide vital qui circule dans le corps des êtres vivants."
                },
                emoji: "🩸"
            },
            {
                word: "deixant les armes",
                translations: { 
                    en: "leaving the weapons", 
                    sv: "lämnar vapnen", 
                    es: "dejando las armas", 
                    it: "lasciando le armi", 
                    fr: "laissant les armes" 
                },
                description: {
                    ca: "Acció de desarmar-se o abandonar l'ús de la violència.",
                    en: "Action of disarming or abandoning the use of violence.",
                    sv: "Handlingen att avväpna sig eller överge användningen av våld.",
                    es: "Acción de desarmarse o abandonar el uso de la violencia.",
                    it: "Azione di disarmarsi o abbandonare l'uso della violenza.",
                    fr: "Action de se désarmer ou d'abandonner l'usage de la violence."
                },
                emoji: "🔫❌"
            },
            {
                word: "el món",
                translations: { 
                    en: "the world", 
                    sv: "världen", 
                    es: "el mundo", 
                    it: "il mondo", 
                    fr: "le monde" 
                },
                description: {
                    ca: "El planeta Terra i tot el que inclou, tant físic com cultural.",
                    en: "The planet Earth and all it includes, both physical and cultural.",
                    sv: "Planeten jorden och allt den inkluderar, både fysiskt och kulturellt.",
                    es: "El planeta Tierra y todo lo que incluye, tanto físico como cultural.",
                    it: "Il pianeta Terra e tutto ciò che include, sia fisico che culturale.",
                    fr: "La planète Terre et tout ce qu'elle inclut, à la fois physique et culturel."
                },
                emoji: "🌍"
            },{
                word: "la furtadora",
                translations: { 
                    en: "the thief", 
                    sv: "tjuven", 
                    es: "la ladrona", 
                    it: "la ladra", 
                    fr: "la voleuse" 
                },
                description: {
                    ca: "Es refereix a algú que pren coses que no li pertanyen, especialment de manera secreta.",
                    en: "Refers to someone who takes things that don’t belong to them, especially secretly.",
                    sv: "Syftar på någon som tar saker som inte tillhör dem, särskilt i hemlighet.",
                    es: "Se refiere a alguien que toma cosas que no le pertenecen, especialmente de forma secreta.",
                    it: "Si riferisce a qualcuno che prende cose che non gli appartengono, specialmente in segreto.",
                    fr: "Désigne quelqu'un qui prend des choses qui ne lui appartiennent pas, surtout en secret."
                },
                emoji: "🕵️‍♀️💼"
            },
            {
                word: "els cants",
                translations: { 
                    en: "the songs", 
                    sv: "sångerna", 
                    es: "los cantos", 
                    it: "i canti", 
                    fr: "les chants" 
                },
                description: {
                    ca: "Sons o melodies produïts per la veu, sovint associats a emocions o rituals.",
                    en: "Sounds or melodies produced by the voice, often associated with emotions or rituals.",
                    sv: "Ljud eller melodier som produceras av rösten, ofta kopplade till känslor eller ritualer.",
                    es: "Sonidos o melodías producidos por la voz, a menudo asociados con emociones o rituales.",
                    it: "Suoni o melodie prodotte dalla voce, spesso associate a emozioni o rituali.",
                    fr: "Sons ou mélodies produits par la voix, souvent associés à des émotions ou des rituels."
                },
                emoji: "🎵🗣️"
            },
            {
                word: "els pits",
                translations: { 
                    en: "the breasts", 
                    sv: "brösten", 
                    es: "los pechos", 
                    it: "i seni", 
                    fr: "les seins" 
                },
                description: {
                    ca: "Part del cos humà, sovint associada amb la nutrició i la feminitat.",
                    en: "Part of the human body, often associated with nourishment and femininity.",
                    sv: "Del av människokroppen, ofta förknippad med näring och kvinnlighet.",
                    es: "Parte del cuerpo humano, a menudo asociada con la nutrición y la feminidad.",
                    it: "Parte del corpo umano, spesso associata alla nutrizione e alla femminilità.",
                    fr: "Partie du corps humain, souvent associée à la nutrition et à la féminité."
                },
                emoji: "🤱"
            },
            {
                word: "els peus",
                translations: { 
                    en: "the feet", 
                    sv: "fötterna", 
                    es: "los pies", 
                    it: "i piedi", 
                    fr: "les pieds" 
                },
                description: {
                    ca: "Extremitats inferiors del cos humà que permeten caminar i mantenir l'equilibri.",
                    en: "Lower extremities of the human body that enable walking and balance.",
                    sv: "De nedre extremiteterna av människokroppen som möjliggör gång och balans.",
                    es: "Extremidades inferiores del cuerpo humano que permiten caminar y mantener el equilibrio.",
                    it: "Estremità inferiori del corpo umano che permettono di camminare e mantenere l'equilibrio.",
                    fr: "Extrémités inférieures du corps humain permettant de marcher et de maintenir l'équilibre."
                },
                emoji: "🦶"
            },
            {
                word: "la seva copa",
                translations: { 
                    en: "his/her cup", 
                    sv: "hans/hennes kopp", 
                    es: "su copa", 
                    it: "la sua coppa", 
                    fr: "sa coupe" 
                },
                description: {
                    ca: "Un recipient que s'utilitza per beure, sovint associat amb cerimònies o símbols.",
                    en: "A container used for drinking, often associated with ceremonies or symbols.",
                    sv: "En behållare som används för att dricka, ofta förknippad med ceremonier eller symboler.",
                    es: "Un recipiente que se utiliza para beber, a menudo asociado con ceremonias o símbolos.",
                    it: "Un contenitore usato per bere, spesso associato a cerimonie o simboli.",
                    fr: "Un récipient utilisé pour boire, souvent associé à des cérémonies ou des symboles."
                },
                emoji: "🍷"
            },
            {
                word: "or",
                translations: { 
                    en: "gold", 
                    sv: "guld", 
                    es: "oro", 
                    it: "oro", 
                    fr: "or" 
                },
                description: {
                    ca: "Un metall preciós utilitzat com a símbol de riquesa o poder.",
                    en: "A precious metal used as a symbol of wealth or power.",
                    sv: "En ädelmetall som används som en symbol för rikedom eller makt.",
                    es: "Un metal precioso utilizado como símbolo de riqueza o poder.",
                    it: "Un metallo prezioso usato come simbolo di ricchezza o potere.",
                    fr: "Un métal précieux utilisé comme symbole de richesse ou de pouvoir."
                },
                emoji: "🥇"
            },
            {
                word: "la terra",
                translations: { 
                    en: "the earth", 
                    sv: "jorden", 
                    es: "la tierra", 
                    it: "la terra", 
                    fr: "la terre" 
                },
                description: {
                    ca: "El sòl on vivim i cultivem, o el planeta en general.",
                    en: "The ground we live and cultivate on, or the planet in general.",
                    sv: "Marken vi bor och odlar på, eller planeten i allmänhet.",
                    es: "El suelo donde vivimos y cultivamos, o el planeta en general.",
                    it: "Il suolo su cui viviamo e coltiviamo, o il pianeta in generale.",
                    fr: "Le sol sur lequel nous vivons et cultivons, ou la planète en général."
                },
                emoji: "🌍"
            },
            {
                word: "manaments",
                translations: { 
                    en: "commandments", 
                    sv: "budord", 
                    es: "mandamientos", 
                    it: "comandamenti", 
                    fr: "commandements" 
                },
                description: {
                    ca: "Normes o regles establertes per guiar el comportament de les persones.",
                    en: "Rules or laws established to guide people's behavior.",
                    sv: "Regler eller lagar som är etablerade för att vägleda människors beteende.",
                    es: "Normas o leyes establecidas para guiar el comportamiento de las personas.",
                    it: "Regole o leggi stabilite per guidare il comportamento delle persone.",
                    fr: "Règles ou lois établies pour guider le comportement des personnes."
                },
                emoji: "📜✒️"
            },
            {
                word: "anells",
                translations: { 
                    en: "rings", 
                    sv: "ringar", 
                    es: "anillos", 
                    it: "anelli", 
                    fr: "anneaux" 
                },
                description: {
                    ca: "Cèrcols petits de metall o altres materials, sovint utilitzats com a joies.",
                    en: "Small circles made of metal or other materials, often used as jewelry.",
                    sv: "Små cirklar av metall eller andra material, ofta använda som smycken.",
                    es: "Pequeños círculos de metal u otros materiales, a menudo utilizados como joyas.",
                    it: "Piccoli cerchi di metallo o altri materiali, spesso usati come gioielli.",
                    fr: "Petits cercles en métal ou autres matériaux, souvent utilisés comme bijoux."
                },
                emoji: "💍"
            },
            {
                word: "un record",
                translations: { 
                    en: "a memory", 
                    sv: "ett minne", 
                    es: "un recuerdo", 
                    it: "un ricordo", 
                    fr: "un souvenir" 
                },
                description: {
                    ca: "Una cosa o experiència que es manté a la memòria.",
                    en: "Something or an experience that remains in memory.",
                    sv: "Något eller en upplevelse som stannar kvar i minnet.",
                    es: "Algo o una experiencia que permanece en la memoria.",
                    it: "Qualcosa o un'esperienza che rimane nella memoria.",
                    fr: "Quelque chose ou une expérience qui reste dans la mémoire."
                },
                emoji: "🧠💭"
            },{
                word: "els horrors",
                translations: { 
                    en: "the horrors", 
                    sv: "fasorna", 
                    es: "los horrores", 
                    it: "gli orrori", 
                    fr: "les horreurs" 
                },
                description: {
                    ca: "Esdeveniments o situacions terribles que causen por o xoc.",
                    en: "Terrible events or situations that cause fear or shock.",
                    sv: "Fruktansvärda händelser eller situationer som orsakar rädsla eller chock.",
                    es: "Eventos o situaciones terribles que causan miedo o conmoción.",
                    it: "Eventi o situazioni terribili che causano paura o shock.",
                    fr: "Événements ou situations terribles qui provoquent la peur ou le choc."
                },
                emoji: "😱💥"
            },
            {
                word: "el fred",
                translations: { 
                    en: "the cold", 
                    sv: "kylan", 
                    es: "el frío", 
                    it: "il freddo", 
                    fr: "le froid" 
                },
                description: {
                    ca: "Una condició de baixa temperatura que sovint genera incomoditat.",
                    en: "A condition of low temperature that often causes discomfort.",
                    sv: "Ett tillstånd av låg temperatur som ofta orsakar obehag.",
                    es: "Una condición de baja temperatura que a menudo genera incomodidad.",
                    it: "Una condizione di bassa temperatura che spesso genera disagio.",
                    fr: "Une condition de basse température qui provoque souvent de l'inconfort."
                },
                emoji: "❄️🧥"
            },
            {
                word: "una creu mal feta",
                translations: { 
                    en: "a poorly made cross", 
                    sv: "ett dåligt gjort kors", 
                    es: "una cruz mal hecha", 
                    it: "una croce mal fatta", 
                    fr: "une croix mal faite" 
                },
                description: {
                    ca: "Un símbol religiós o decoratiu que s'ha creat de manera defectuosa.",
                    en: "A religious or decorative symbol that has been made poorly.",
                    sv: "En religiös eller dekorativ symbol som har gjorts dåligt.",
                    es: "Un símbolo religioso o decorativo que se ha hecho de manera defectuosa.",
                    it: "Un simbolo religioso o decorativo realizzato male.",
                    fr: "Un symbole religieux ou décoratif qui a été mal fait."
                },
                emoji: "✝️❌"
            },
            {
                word: "un vell record",
                translations: { 
                    en: "an old memory", 
                    sv: "ett gammalt minne", 
                    es: "un viejo recuerdo", 
                    it: "un vecchio ricordo", 
                    fr: "un vieux souvenir" 
                },
                description: {
                    ca: "Un pensament o imatge del passat que persisteix a la memòria.",
                    en: "A thought or image from the past that lingers in memory.",
                    sv: "En tanke eller bild från det förflutna som dröjer sig kvar i minnet.",
                    es: "Un pensamiento o imagen del pasado que persiste en la memoria.",
                    it: "Un pensiero o immagine del passato che persiste nella memoria.",
                    fr: "Une pensée ou image du passé qui reste dans la mémoire."
                },
                emoji: "💭📜"
            },
            {
                word: "el tron dels manaments",
                translations: { 
                    en: "the throne of commandments", 
                    sv: "budordens tron", 
                    es: "el trono de los mandamientos", 
                    it: "il trono dei comandamenti", 
                    fr: "le trône des commandements" 
                },
                description: {
                    ca: "Un seient simbòlic que representa l'autoritat sobre les normes o lleis.",
                    en: "A symbolic seat representing authority over rules or laws.",
                    sv: "En symbolisk stol som representerar auktoritet över regler eller lagar.",
                    es: "Un asiento simbólico que representa la autoridad sobre normas o leyes.",
                    it: "Un seggio simbolico che rappresenta l'autorità sulle regole o leggi.",
                    fr: "Un siège symbolique représentant l'autorité sur les règles ou les lois."
                },
                emoji: "👑📜"
            },
            {
                word: "els laments",
                translations: { 
                    en: "the laments", 
                    sv: "klagoropen", 
                    es: "los lamentos", 
                    it: "i lamenti", 
                    fr: "les lamentations" 
                },
                description: {
                    ca: "Expressions de dolor, tristesa o descontentament.",
                    en: "Expressions of pain, sadness, or dissatisfaction.",
                    sv: "Uttryck för smärta, sorg eller missnöje.",
                    es: "Expresiones de dolor, tristeza o descontento.",
                    it: "Espressioni di dolore, tristezza o insoddisfazione.",
                    fr: "Expressions de douleur, tristesse ou mécontentement."
                },
                emoji: "😭💔"
            },
            {
                word: "anells que lliguen",
                translations: { 
                    en: "rings that bind", 
                    sv: "ringar som binder", 
                    es: "anillos que atan", 
                    it: "anelli che legano", 
                    fr: "anneaux qui lient" 
                },
                description: {
                    ca: "Cèrcols simbòlics o físics que uneixen o constrenyen.",
                    en: "Symbolic or physical circles that unite or constrain.",
                    sv: "Symboliska eller fysiska ringar som förenar eller begränsar.",
                    es: "Círculos simbólicos o físicos que unen o constriñen.",
                    it: "Cerchi simbolici o fisici che uniscono o costringono.",
                    fr: "Cercles symboliques ou physiques qui unissent ou contraignent."
                },
                emoji: "🔗💍"
            },
            {
                word: "la seva copa d’or",
                translations: { 
                    en: "his/her cup of gold", 
                    sv: "hans/hennes kopp av guld", 
                    es: "su copa de oro", 
                    it: "la sua coppa d'oro", 
                    fr: "sa coupe d'or" 
                },
                description: {
                    ca: "Un recipient de gran valor fet d’or, sovint associat amb luxe o poder.",
                    en: "A valuable container made of gold, often associated with luxury or power.",
                    sv: "En värdefull behållare gjord av guld, ofta förknippad med lyx eller makt.",
                    es: "Un recipiente valioso hecho de oro, a menudo asociado con lujo o poder.",
                    it: "Un contenitore prezioso fatto d'oro, spesso associato al lusso o al potere.",
                    fr: "Un récipient précieux fait d'or, souvent associé au luxe ou au pouvoir."
                },
                emoji: "🏆✨"
            },
            {
                word: "el camp",
                translations: { 
                    en: "the field", 
                    sv: "fältet", 
                    es: "el campo", 
                    it: "il campo", 
                    fr: "le champ" 
                },
                description: {
                    ca: "Una extensió de terreny obert sovint utilitzada per cultius o batalles.",
                    en: "An open stretch of land often used for crops or battles.",
                    sv: "Ett öppet landområde som ofta används för grödor eller strider.",
                    es: "Una extensión de terreno abierto, a menudo utilizado para cultivos o batallas.",
                    it: "Un'area di terra aperta spesso utilizzata per coltivazioni o battaglie.",
                    fr: "Une étendue de terre ouverte souvent utilisée pour les cultures ou les batailles."
                },
                emoji: "🌾⚔️"
            },
            {
                word: "les ànimes",
                translations: { 
                    en: "the souls", 
                    sv: "själarna", 
                    es: "las almas", 
                    it: "le anime", 
                    fr: "les âmes" 
                },
                description: {
                    ca: "Part immaterial d’una persona, sovint associada amb espiritualitat o emocions.",
                    en: "The immaterial part of a person, often associated with spirituality or emotions.",
                    sv: "Den immateriella delen av en person, ofta förknippad med andlighet eller känslor.",
                    es: "La parte inmaterial de una persona, a menudo asociada con espiritualidad o emociones.",
                    it: "La parte immateriale di una persona, spesso associata alla spiritualità o alle emozioni.",
                    fr: "La partie immatérielle d'une personne, souvent associée à la spiritualité ou aux émotions."
                },
                emoji: "🕊️✨"
            }
            
            
            
        ]
      },
      "NoPucParar": {
        videoId: "3CtOWGnRH7A",
        phrases: [
          { text: "Sent el ____ que no para que no acaba mai", answer: "ritme", startTime: 8, endTime: 15 },
          { text: "Com et ____ per les cames fins arribar al cap. No puc parar", answer: "puja", startTime: 15, endTime: 19 },
          { text: "No puc parar. ____, balla, crida i canta, sent el moviment", answer: "salta", startTime: 20, endTime: 29 },
          { text: "Que t'abraça i t'____, que et crema sa pell", answer: "enganxa", startTime: 29, endTime: 34 },
          { text: "Es ____ no em deixen estar quiet. Això és tot el que sé. ", answer: "peus", startTime: 33, endTime: 39 },
          { text: "No puc ____. (x5)", answer: "parar", startTime: 50, endTime: 55 },
          { text: "Sent el ritme que s'____, que ompli els racons. I sa música tan forta que et colpeja al cos. No puc parar. No puc parar", answer: "escapa", startTime: 55, endTime: 69},
          { text: "Avui ses ____ em cremen es peus. Ses llums m'enlluernen molt més que altres dies.", answer: "sabates", startTime: 70, endTime: 78 },
          { text: "No sé ____ bé per què, però la corrent va cresquent.", answer: "ben", startTime: 78, endTime: 87 },
          { text: "No ____ parar. x5", answer: "puc", startTime: 90, endTime: 98 },
          { text: "Ses senyals em ____ que tot anirà bé. La nit és jove encara i avui no sé què em passa.", answer: "diuen", startTime: 115, endTime: 122 },
          { text: "No tenc pressa per ____, no tenc ganes de marxar. Avui esperaré que el sol em vengui a buscar.", answer: "partir", startTime: 122, endTime: 132},
          { text: "____ puc, 🙅‍♀️ puc parar!... ", answer: "no", startTime: 157, endTime: 178},
         
        ]
      },
      "LaMiradaInterior": {
        videoId: "-RJS79sbMLc",
        phrases: [
          { text: "Si el que vols és ____ la bellesa de la vida. Ves i busca dins el teu cor, abans de girar-te cap al món.", answer: "trobar", startTime: 24, endTime: 34 },
          { text: "Si el que vols és trobar el ____ de la vida. Ves i busca dins el teu cor, a través de la mirada interior.", answer: "misteri", startTime: 34, endTime: 47 },
          { text: "Hi ha molt més del que ____ veure. Ves i explora dins del teu univers interior.", answer: "pots", startTime: 54, endTime: 64 },
          { text: "Allà veuràs que hi ha una força ____ és el que fa que tot sigui allà on està.", answer: "que", startTime: 64, endTime: 76 },
          { text: "Irradia ____, irradia llum, irradia harmonia, sigues tu.", answer: "pau", startTime:76, endTime: 87 },
          { text: "Si el que ____ és trobar la bellesa de la vida. Ves i busca dins el teu cor, abans de girar-te cap al món.", answer: "vols", startTime: 87, endTime: 97 },
          { text: "Si el que vols és trobar el misteri de la ____. Ves i busca dins el teu cor, a través de la mirada interior.", answer: "vida", startTime: 97, endTime: 109},
          { text: "Obre de bat a bat les ____ del tresor que s'amaga a dintre del teu cor. No dubtis!", answer: "portes", startTime: 108, endTime: 118 },
          { text: "Banya't en la quietud de l'____ clara, on trobaràs l'essència d'aquell que vols ser tu.", answer: "aigua", startTime: 118, endTime: 133 },
          { text: "____ l'interior!", answer: "mira", startTime: 147, endTime: 154 },
          { text: "Si el que vols és trobar la ____ de la vida. Ves i busca dins el teu cor, abans de girar-te cap al món.", answer: "bellesa", startTime: 154, endTime: 164 },
          { text: "Si el que vols és trobar el misteri de la vida. ____ i busca dins el teu cor, a través de la mirada interior.", answer: "ves", startTime: 163, endTime: 175 },
          { text: "Obre el teu ____ al món, veuràs que tot ho pot la mirada interior.", answer: "cor", startTime: 174, endTime: 185 },
         
        ]
      },

  };