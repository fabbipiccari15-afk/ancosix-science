import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "it" | "en" | "es";

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "es", label: "Español", flag: "🇪🇸" },
];

/* ============================================================
   TRANSLATIONS — IT / EN / ES
   ============================================================ */

export const t = {
  /* ---------- HEADER ---------- */
  header: {
    it: [
      "Il problema",
      "La soluzione",
      "La scienza",
      "Applicazioni",
      "Progetto",
      "Team",
      "Contatti",
    ],
    en: [
      "The problem",
      "The solution",
      "The science",
      "Applications",
      "Project",
      "Team",
      "Contact",
    ],
    es: [
      "El problema",
      "La solución",
      "La ciencia",
      "Aplicaciones",
      "Proyecto",
      "Equipo",
      "Contacto",
    ],
  },
  ctaContact: {
    it: "Contattaci",
    en: "Contact us",
    es: "Contáctanos",
  },

  /* ---------- HERO ---------- */
  hero: {
    label: {
      it: "CREA — Consiglio per la ricerca in agricoltura",
      en: "CREA — Council for Agricultural Research and Economics",
      es: "CREA — Consejo para la investigación en agricultura",
    },
    title: {
      it: "La Xylella ha un avversario naturale",
      en: "Xylella has a natural adversary",
      es: "La Xylella tiene un adversario natural",
    },
    subtitle: {
      it: "Estratto brevettato di bucce di melograno — antimicrobico, antiossidante, testato in campo",
      en: "Patented pomegranate peel extract — antimicrobial, antioxidant, field-tested",
      es: "Extracto patentado de cáscara de granada — antimicrobiano, antioxidante, probado en campo",
    },
    desc: {
      it: "Il Progetto ANCoSIX nasce dalla ricerca italiana per proteggere il patrimonio olivicolo del Mediterraneo con una soluzione 100% naturale e scientificamente validata.",
      en: "The ANCoSIX Project stems from Italian research to protect the Mediterranean olive heritage with a 100% natural and scientifically validated solution.",
      es: "El Proyecto ANCoSIX nace de la investigación italiana para proteger el patrimonio olivícola del Mediterráneo con una solución 100% natural y científicamente validada.",
    },
    cta1: {
      it: "Scopri il Progetto ↓",
      en: "Discover the Project ↓",
      es: "Descubre el Proyecto ↓",
    },
    slides: {
      it: [
        "Il melograno nutre l'ulivo · il cuore del progetto",
        "Punica granatum · il frutto",
        "Il frutto · oro & rubino",
        "Il patrimonio · secoli di ulivi",
      ],
      en: [
        "The pomegranate nourishes the olive · the heart of the project",
        "Punica granatum · the fruit",
        "The fruit · gold & ruby",
        "The heritage · centuries of olive trees",
      ],
      es: [
        "La granada nutre al olivo · el corazón del proyecto",
        "Punica granatum · el fruto",
        "El fruto · oro & rubí",
        "El patrimonio · siglos de olivos",
      ],
    },
  },

  /* ---------- SECTION 1: PROBLEMA ---------- */
  problema: {
    title: {
      it: "Un nemico invisibile sta distruggendo i nostri ulivi",
      en: "An invisible enemy is destroying our olive trees",
      es: "Un enemigo invisible está destruyendo nuestros olivos",
    },
    stats: {
      it: [
        { suffix: " milioni", label: "di ulivi colpiti da Xylella fastidiosa in Puglia" },
        { suffix: " mld €", label: "di perdite economiche stimate nel settore olivicolo" },
        { suffix: "", label: "soluzioni chimiche approvate efficaci contro Xylella" },
      ],
      en: [
        { suffix: " million", label: "olive trees hit by Xylella fastidiosa in Puglia" },
        { suffix: " bn €", label: "in estimated economic losses in the olive sector" },
        { suffix: "", label: "approved chemical solutions effective against Xylella" },
      ],
      es: [
        { suffix: " millones", label: "de olivos afectados por Xylella fastidiosa en Puglia" },
        { suffix: " mil M €", label: "en pérdidas económicas estimadas en el sector olivícola" },
        { suffix: "", label: "soluciones químicas aprobadas eficaces contra Xylella" },
      ],
    },
    body: {
      it: "La Xylella fastidiosa è un batterio che blocca il sistema vascolare dell'ulivo, causando il disseccamento rapido e la morte della pianta (CoDiRo). La Puglia, con oltre 60 milioni di ulivi, è la regione più colpita d'Europa. Serviva una risposta scientifica, naturale e replicabile.",
      en: "Xylella fastidiosa is a bacterium that blocks the olive tree's vascular system, causing rapid desiccation and the death of the plant (CoDiRo). Puglia, with over 60 million olive trees, is the hardest-hit region in Europe. A scientific, natural and replicable answer was needed.",
      es: "La Xylella fastidiosa es una bacteria que bloquea el sistema vascular del olivo, causando el desecamiento rápido y la muerte de la planta (CoDiRo). Puglia, con más de 60 millones de olivos, es la región más afectada de Europa. Se necesitaba una respuesta científica, natural y replicable.",
    },
    videoLabel: {
      it: "📽 Il fenomeno Xylella — testimonianze dal campo",
      en: "📽 The Xylella phenomenon — voices from the field",
      es: "📽 El fenómeno Xylella — testimonios del campo",
    },
  },

  /* ---------- SECTION 2: SOLUZIONE ---------- */
  soluzione: {
    patent: {
      it: "Brevetto CREA N. 1421786 · 102020000007993",
      en: "CREA Patent No. 1421786 · 102020000007993",
      es: "Patente CREA N.º 1421786 · 102020000007993",
    },
    title: {
      it: "La natura aveva già la risposta",
      en: "Nature already had the answer",
      es: "La naturaleza ya tenía la respuesta",
    },
    subtitle: {
      it: "Estratto idrolitico delle bucce di melograno",
      en: "Hydrolytic extract of pomegranate peels",
      es: "Extracto hidrolítico de las cáscaras de granada",
    },
    body1: {
      it: "L'estratto di Punica granatum è particolarmente ricco di punicalagina — una molecola con straordinario potere antiossidante ed elevata efficacia contro funghi, batteri e agenti biologici patogeni, inclusa la Xylella fastidiosa.",
      en: "The Punica granatum extract is particularly rich in punicalagin — a molecule with extraordinary antioxidant power and high efficacy against fungi, bacteria and pathogenic biological agents, including Xylella fastidiosa.",
      es: "El extracto de Punica granatum es particularmente rico en punicalagina — una molécula con extraordinario poder antioxidante y alta eficacia contra hongos, bacterias y agentes biológicos patógenos, incluida la Xylella fastidiosa.",
    },
    body2: {
      it: "Il prodotto è non tossico per l'uomo e gli animali, facilmente confezionabile, trasportabile e a basso impatto ambientale. Commercializzabile in sacchi da 0,2 a 50 kg.",
      en: "The product is non-toxic to humans and animals, easy to package, transport and with low environmental impact. Available in bags from 0.2 to 50 kg.",
      es: "El producto no es tóxico para humanos y animales, fácil de envasar, transportar y de bajo impacto ambiental. Comercializable en sacos de 0,2 a 50 kg.",
    },
    videoLabel: {
      it: "📽 Il melograno: dalla natura al laboratorio",
      en: "📽 The pomegranate: from nature to the laboratory",
      es: "📽 La granada: de la naturaleza al laboratorio",
    },
    callouts: {
      it: [
        { label: "Punica granatum", sub: "Buccia · pericarpo" },
        { label: "Punicalagina", sub: "principio attivo" },
        { label: "Semi · arilli", sub: "rubio & oro" },
      ],
      en: [
        { label: "Punica granatum", sub: "Peel · pericarp" },
        { label: "Punicalagin", sub: "active principle" },
        { label: "Seeds · arils", sub: "ruby & gold" },
      ],
      es: [
        { label: "Punica granatum", sub: "Cáscara · pericarpio" },
        { label: "Punicalagina", sub: "principio activo" },
        { label: "Semillas · arilos", sub: "rubí & oro" },
      ],
    },
    badges: {
      it: [
        {
          icon: "🧪",
          label: "Antimicrobico",
          title: "Antimicrobico",
          intro:
            "L'estratto idrolitico delle bucce di melograno inibisce la crescita di batteri, funghi e agenti patogeni vegetali, inclusa la Xylella fastidiosa.",
          points: [
            "Efficacia dimostrata in vitro su Xylella fastidiosa subsp. fastidiosa (CoDiRo)",
            "Attivo contro Botrytis, Fusarium e altri patogeni di colture ad alto reddito",
            "Azione di blocco della proliferazione batterica nel sistema vascolare della pianta",
          ],
        },
        {
          icon: "🌿",
          label: "Antiossidante",
          title: "Antiossidante",
          intro:
            "La punicalagina è una delle molecole naturali a più alto potere antiossidante conosciuto, superiore a quella di tè verde e vino rosso.",
          points: [
            "Ricchezza di punicalagina, ellagitannini e acido ellagico",
            "Neutralizza i radicali liberi e protegge le cellule vegetali dallo stress ossidativo",
            "Stabilità del principio attivo nel formulato idrolitico",
          ],
        },
        {
          icon: "💊",
          label: "Antinfiammatorio",
          title: "Antinfiammatorio",
          intro:
            "I composti fenolici del melograno modulano le risposte infiammatorie, riducendo i processi degenerativi nei tessuti vegetali trattati.",
          points: [
            "Modulazione delle vie di segnalazione infiammatoria nelle piante infette",
            "Riduzione del disseccamento e del deperimento vegetativo",
            "Miglioramento delle condizioni fisiologiche osservato nelle prove in campo",
          ],
        },
        {
          icon: "🔬",
          label: "Antitumorale",
          title: "Antitumorale",
          intro:
            "Studi scientifici documentano l'attività antiproliferativa degli ellagitannini della granata, con applicazioni in ambito nutraceutico e cosmetico.",
          points: [
            "Induzione di apoptosi in linee cellulari tumorali (letteratura peer-reviewed)",
            "Base per formulazioni cosmetiche e integratori ad alto valore",
            "Sinergia antiossidante-antitumorale del pool di polifenoli",
          ],
        },
      ],
      en: [
        {
          icon: "🧪",
          label: "Antimicrobial",
          title: "Antimicrobial",
          intro:
            "The hydrolytic extract of pomegranate peels inhibits the growth of bacteria, fungi and plant pathogens, including Xylella fastidiosa.",
          points: [
            "Proven efficacy in vitro on Xylella fastidiosa subsp. fastidiosa (CoDiRo)",
            "Active against Botrytis, Fusarium and other pathogens of high-value crops",
            "Blocks bacterial proliferation in the plant's vascular system",
          ],
        },
        {
          icon: "🌿",
          label: "Antioxidant",
          title: "Antioxidant",
          intro:
            "Punicalagin is one of the natural molecules with the highest known antioxidant power, superior to green tea and red wine.",
          points: [
            "Rich in punicalagin, ellagitannins and ellagic acid",
            "Neutralizes free radicals and protects plant cells from oxidative stress",
            "Stability of the active principle in the hydrolytic formulation",
          ],
        },
        {
          icon: "💊",
          label: "Anti-inflammatory",
          title: "Anti-inflammatory",
          intro:
            "The phenolic compounds of pomegranate modulate inflammatory responses, reducing degenerative processes in treated plant tissues.",
          points: [
            "Modulation of inflammatory signalling pathways in infected plants",
            "Reduction of desiccation and vegetative decline",
            "Improved physiological conditions observed in field trials",
          ],
        },
        {
          icon: "🔬",
          label: "Antitumor",
          title: "Antitumor",
          intro:
            "Scientific studies document the antiproliferative activity of pomegranate ellagitannins, with applications in nutraceuticals and cosmetics.",
          points: [
            "Induction of apoptosis in tumor cell lines (peer-reviewed literature)",
            "Basis for cosmetic formulations and high-value supplements",
            "Antioxidant-antitumor synergy of the polyphenol pool",
          ],
        },
      ],
      es: [
        {
          icon: "🧪",
          label: "Antimicrobiano",
          title: "Antimicrobiano",
          intro:
            "El extracto hidrolítico de las cáscaras de granada inhibe el crecimiento de bacterias, hongos y patógenos vegetales, incluida la Xylella fastidiosa.",
          points: [
            "Eficacia demostrada in vitro sobre Xylella fastidiosa subsp. fastidiosa (CoDiRo)",
            "Activo contra Botrytis, Fusarium y otros patógenos de cultivos de alto valor",
            "Bloqueo de la proliferación bacteriana en el sistema vascular de la planta",
          ],
        },
        {
          icon: "🌿",
          label: "Antioxidante",
          title: "Antioxidante",
          intro:
            "La punicalagina es una de las moléculas naturales con mayor poder antioxidante conocido, superior al té verde y al vino tinto.",
          points: [
            "Riqueza de punicalagina, elagitaninos y ácido elágico",
            "Neutraliza los radicales libres y protege las células vegetales del estrés oxidativo",
            "Estabilidad del principio activo en el formulado hidrolítico",
          ],
        },
        {
          icon: "💊",
          label: "Antiinflamatorio",
          title: "Antiinflamatorio",
          intro:
            "Los compuestos fenólicos de la granada modulan las respuestas inflamatorias, reduciendo los procesos degenerativos en los tejidos vegetales tratados.",
          points: [
            "Modulación de las vías de señalización inflamatoria en plantas infectadas",
            "Reducción del desecamiento y del decaimiento vegetativo",
            "Mejora de las condiciones fisiológicas observada en ensayos de campo",
          ],
        },
        {
          icon: "🔬",
          label: "Antitumoral",
          title: "Antitumoral",
          intro:
            "Estudios científicos documentan la actividad antiproliferativa de los elagitaninos de la granada, con aplicaciones en nutracéutica y cosmética.",
          points: [
            "Inducción de apoptosis en líneas celulares tumorales (literatura revisada por pares)",
            "Base para formulaciones cosméticas y suplementos de alto valor",
            "Sinergia antioxidante-antitumoral del pool de polifenoles",
          ],
        },
      ],
    },
    modalSource: {
      it: "Fonte: brevetti CREA e pubblicazioni peer-reviewed citate nella sezione «La scienza».",
      en: "Source: CREA patents and peer-reviewed publications cited in the «Science» section.",
      es: "Fuente: patentes CREA y publicaciones revisadas por pares citadas en la sección «La ciencia».",
    },
    modalLabel: {
      it: "Proprietà dell'estratto",
      en: "Properties of the extract",
      es: "Propiedades del extracto",
    },
  },

  /* ---------- SECTION 3: SCIENZA ---------- */
  scienza: {
    title: {
      it: "Validato dalla ricerca scientifica internazionale",
      en: "Validated by international scientific research",
      es: "Validado por la investigación científica internacional",
    },
    subtitle: {
      it: "Pubblicazioni peer-reviewed che certificano l'efficacia dell'estratto",
      en: "Peer-reviewed publications certifying the efficacy of the extract",
      es: "Publicaciones revisadas por pares que certifican la eficacia del extracto",
    },
    note: {
      it: "I test in vitro hanno mostrato efficacia anche su Xylella fastidiosa subsp. fastidiosa — il batterio responsabile del CoDiRo negli ulivi pugliesi.",
      en: "In vitro tests showed efficacy also on Xylella fastidiosa subsp. fastidiosa — the bacterium responsible for CoDiRo in Apulian olive trees.",
      es: "Las pruebas in vitro mostraron eficacia también sobre Xylella fastidiosa subsp. fastidiosa — la bacteria responsable del CoDiRo en los olivos de Puglia.",
    },
    readStudy: {
      it: "Leggi lo studio",
      en: "Read the study",
      es: "Leer el estudio",
    },
    modalLabel: {
      it: "Pubblicazione scientifica",
      en: "Scientific publication",
      es: "Publicación científica",
    },
    modalSource: {
      it: "Fonte: brevetti CREA e pubblicazioni peer-reviewed. Progetto ANCoSIX — CREA.",
      en: "Source: CREA patents and peer-reviewed publications. ANCoSIX Project — CREA.",
      es: "Fuente: patentes CREA y publicaciones revisadas por pares. Proyecto ANCoSIX — CREA.",
    },
    pubs: {
      it: [
        {
          title: "Fusariosi del pomodoro",
          venue: "European Journal of Plant Pathology, 2017",
          intro:
            "Lo studio valuta l'efficacia dell'estratto idrolitico delle bucce di melograno contro Fusarium oxysporum, agente della tracheofusariosi del pomodoro — una delle patologie più distruttive per la coltura.",
          points: [
            "Riduzione significativa della crescita miceliare di Fusarium in vitro",
            "Inibizione della germinazione dei conidi a basse concentrazioni di estratto",
            "Profilo di sicurezza elevato: non tossico per la pianta ospite",
            "Base per formulazioni agrofarmaceutiche a basso impatto ambientale",
          ],
        },
        {
          title: "Botrite della fragola",
          venue: "Journal of Food Science and Technology, 2018",
          intro:
            "La ricerca esamina l'azione dell'estratto di Punica granatum contro Botrytis cinerea nella conservazione post-raccolta delle fragole, patogeno responsabile del marciume grigio.",
          points: [
            "Riduzione dell'incidenza del marciume grigio sui frutti conservati",
            "Mantenimento della fermezza e delle qualità organolettiche della fragola",
            "Prolungamento della shelf-life in post-raccolta senza residui chimici",
            "Alternativa naturale ai fungicidi di sintesi nella filiera fresca",
          ],
        },
        {
          title: "Botrite dell'uva",
          venue: "Atti Giornate Fitopatologiche, 2016",
          intro:
            "Lo studio presenta i risultati delle prove sull'impiego dell'estratto di melograno per il contenimento di Botrytis cinerea sull'uva, con applicazioni in viticoltura e conservazione post-vendemmia.",
          points: [
            "Efficacia inibitoria su Botrytis cinerea in prove di laboratorio e campo",
            "Compatibilità con i disciplinari dell'agricoltura biologica",
            "Tutela del grappolo in pre- e post-raccolta",
            "Valorizzazione di uno scarto agroindustriale (bucce di melograno) come bioattivo",
          ],
        },
        {
          title: "Disseccamento rapido dell'olivo (CoDiRo)",
          venue: "European Journal of Plant Pathology",
          intro:
            "La pubblicazione documenta l'efficacia dell'estratto idrolitico delle bucce di melograno anche su Xylella fastidiosa subsp. fastidiosa, il batterio responsabile del CoDiRo — il disseccamento rapido che ha colpito gli ulivi pugliesi.",
          points: [
            "Efficacia dimostrata in vitro su Xylella fastidiosa subsp. fastidiosa",
            "Azione sul batterio che occlude i vasi xilematici dell'olivo",
            "Fondamento scientifico delle prove in campo del Progetto ANCoSIX (WP5)",
            "Prima risposta naturale e replicabile contro il CoDiRo negli ulivi mediterranei",
          ],
        },
      ],
      en: [
        {
          title: "Tomato fusarium wilt",
          venue: "European Journal of Plant Pathology, 2017",
          intro:
            "The study evaluates the efficacy of the hydrolytic extract of pomegranate peels against Fusarium oxysporum, the agent of tomato tracheofusariosis — one of the most destructive diseases for the crop.",
          points: [
            "Significant reduction of Fusarium mycelial growth in vitro",
            "Inhibition of conidial germination at low extract concentrations",
            "High safety profile: non-toxic to the host plant",
            "Basis for low-environmental-impact agro-pharmaceutical formulations",
          ],
        },
        {
          title: "Strawberry grey mould",
          venue: "Journal of Food Science and Technology, 2018",
          intro:
            "The research examines the action of Punica granatum extract against Botrytis cinerea in the post-harvest storage of strawberries, the pathogen responsible for grey mould.",
          points: [
            "Reduction of grey mould incidence on stored fruit",
            "Maintenance of firmness and organoleptic qualities of the strawberry",
            "Extended post-harvest shelf-life without chemical residues",
            "Natural alternative to synthetic fungicides in the fresh chain",
          ],
        },
        {
          title: "Grape grey mould",
          venue: "Atti Giornate Fitopatologiche, 2016",
          intro:
            "The study presents the results of trials using pomegranate extract to control Botrytis cinerea on grapes, with applications in viticulture and post-harvest storage.",
          points: [
            "Inhibitory efficacy on Botrytis cinerea in laboratory and field trials",
            "Compatibility with organic farming standards",
            "Protection of the bunch pre- and post-harvest",
            "Valorisation of an agro-industrial by-product (pomegranate peels) as a bioactive",
          ],
        },
        {
          title: "Olive quick decline (CoDiRo)",
          venue: "European Journal of Plant Pathology",
          intro:
            "The publication documents the efficacy of the hydrolytic extract of pomegranate peels also on Xylella fastidiosa subsp. fastidiosa, the bacterium responsible for CoDiRo — the rapid decline that struck Apulian olive trees.",
          points: [
            "Proven efficacy in vitro on Xylella fastidiosa subsp. fastidiosa",
            "Action on the bacterium that occludes the olive's xylem vessels",
            "Scientific foundation of the ANCoSIX Project field trials (WP5)",
            "First natural and replicable answer to CoDiRo in Mediterranean olive trees",
          ],
        },
      ],
      es: [
        {
          title: "Fusariosis del tomate",
          venue: "European Journal of Plant Pathology, 2017",
          intro:
            "El estudio evalúa la eficacia del extracto hidrolítico de las cáscaras de granada contra Fusarium oxysporum, agente de la traqueofusariosis del tomate — una de las patologías más destructivas para el cultivo.",
          points: [
            "Reducción significativa del crecimiento micelial de Fusarium in vitro",
            "Inhibición de la germinación de los conidios a bajas concentraciones de extracto",
            "Alto perfil de seguridad: no tóxico para la planta hospedante",
            "Base para formulaciones agrofarmacéuticas de bajo impacto ambiental",
          ],
        },
        {
          title: "Moho gris de la fresa",
          venue: "Journal of Food Science and Technology, 2018",
          intro:
            "La investigación examina la acción del extracto de Punica granatum contra Botrytis cinerea en la conservación postcosecha de las fresas, patógeno responsable del moho gris.",
          points: [
            "Reducción de la incidencia del moho gris en los frutos conservados",
            "Mantenimiento de la firmeza y las cualidades organolépticas de la fresa",
            "Prolongación de la vida útil postcosecha sin residuos químicos",
            "Alternativa natural a los fungicidas de síntesis en la cadena fresca",
          ],
        },
        {
          title: "Moho gris de la uva",
          venue: "Atti Giornate Fitopatologiche, 2016",
          intro:
            "El estudio presenta los resultados de los ensayos del uso del extracto de granada para el control de Botrytis cinerea en la uva, con aplicaciones en viticultura y conservación postvendimia.",
          points: [
            "Eficacia inhibitoria sobre Botrytis cinerea en pruebas de laboratorio y campo",
            "Compatibilidad con los estándares de la agricultura ecológica",
            "Protección del racimo en pre- y postcosecha",
            "Valorización de un subproducto agroindustrial (cáscaras de granada) como bioactivo",
          ],
        },
        {
          title: "Decaimiento rápido del olivo (CoDiRo)",
          venue: "European Journal of Plant Pathology",
          intro:
            "La publicación documenta la eficacia del extracto hidrolítico de las cáscaras de granada también sobre Xylella fastidiosa subsp. fastidiosa, la bacteria responsable del CoDiRo — el decaimiento rápido que afectó a los olivos de Puglia.",
          points: [
            "Eficacia demostrada in vitro sobre Xylella fastidiosa subsp. fastidiosa",
            "Acción sobre la bacteria que ocluye los vasos xilemáticos del olivo",
            "Fundamento científico de los ensayos de campo del Proyecto ANCoSIX (WP5)",
            "Primera respuesta natural y replicable contra el CoDiRo en olivos mediterráneos",
          ],
        },
      ],
    },
  },

  /* ---------- SECTION 4: APPLICAZIONI ---------- */
  applicazioni: {
    title: {
      it: "Un estratto, molteplici applicazioni",
      en: "One extract, many applications",
      es: "Un extracto, múltiples aplicaciones",
    },
    watchVideo: {
      it: "Guarda il video",
      en: "Watch the video",
      es: "Ver el vídeo",
    },
    modalLabel: {
      it: "Applicazione",
      en: "Application",
      es: "Aplicación",
    },
    modalSource: {
      it: "Progetto ANCoSIX — CREA. Estratto brevettato di bucce di melograno.",
      en: "ANCoSIX Project — CREA. Patented pomegranate peel extract.",
      es: "Proyecto ANCoSIX — CREA. Extracto patentado de cáscara de granada.",
    },
    apps: {
      it: [
        {
          icon: "🌾",
          title: "Agrofarmaco",
          text: "Difesa naturale delle colture ad alto reddito: olivicoltura, viticoltura, frutticoltura. Uso in post-raccolta per conservazione di uva, fragole, agrumi, mele.",
          intro:
            "L'estratto di bucce di melograno agisce come agrofarmaco naturale per la difesa delle colture più pregiate, sostituendo i trattamenti chimici con una soluzione vegetale a basso impatto.",
          points: [
            "Difesa di olivicoltura, viticoltura e frutticoltura ad alto reddito",
            "Trattamento post-raccolta per conservazione di uva, fragole, agrumi, mele",
            "Azione antimicrobica e antiossidante direttamente sul prodotto conservato",
            "Nessun residuo chimico sulla frutta e sulle foglie",
          ],
        },
        {
          icon: "🌿",
          title: "Agricoltura biologica",
          text: "Certificabile per sistemi biologici. Efficace in vivaistica orto-floricola e colture sotto serra. Alternativa 100% vegetale agli agrofarmaci chimici.",
          intro:
            "L'estratto è certificabile per i sistemi di agricoltura biologica, offrendo un'alternativa completamente vegetale agli agrofarmaci di sintesi in vivaistica e serra.",
          points: [
            "Compatibile con i disciplinari dell'agricoltura biologica",
            "Efficace in vivaistica orto-floricola e colture sotto serra",
            "Alternativa 100% vegetale agli agrofarmaci chimici",
            "Valorizzazione di uno scarto agroindustriale come bioattivo",
          ],
        },
        {
          icon: "💄",
          title: "Cosmetica e nutraceutica",
          text: "Principi attivi del melograno per formulazioni cosmetiche premium. Integratori alimentari e alimenti funzionali ad alto valore.",
          intro:
            "I principi attivi del melograno — punicalagina in primis — entrano in formulazioni cosmetiche premium, integratori alimentari e alimenti funzionali ad alto valore aggiunto.",
          points: [
            "Principi attivi del melograno per cosmetici premium",
            "Integratori alimentari ad alto valore antiossidante",
            "Alimenti funzionali con estratto naturale",
            "Proprietà antinfiammatorie e antitumorali documentate",
          ],
        },
        {
          icon: "🧴",
          title: "Nano-formulazione",
          text: "Formulato con nanocristalli di cellulosa e perlite per trattamenti endoterapici su ulivi storici, paesaggistici e monumentali.",
          intro:
            "Il nanoformulato combina l'estratto con nanocristalli di cellulosa e perlite per trattamenti endoterapici mirati su ulivi storici, paesaggistici e monumentali.",
          points: [
            "Nanocristalli di cellulosa e perlite come vettori",
            "Trattamenti endoterapici su ulivi storici e monumentali",
            "Somministrazione profonda nel sistema vascolare della pianta",
            "Tutela del patrimonio olivicolo paesaggistico",
          ],
        },
      ],
      en: [
        {
          icon: "🌾",
          title: "Agro-pharmaceutical",
          text: "Natural defence of high-value crops: olive, wine and fruit growing. Post-harvest use for storage of grapes, strawberries, citrus, apples.",
          intro:
            "Pomegranate peel extract acts as a natural agro-pharmaceutical for the defence of the most prized crops, replacing chemical treatments with a low-impact plant-based solution.",
          points: [
            "Defence of olive, wine and fruit growing of high value",
            "Post-harvest treatment for storage of grapes, strawberries, citrus, apples",
            "Antimicrobial and antioxidant action directly on the stored product",
            "No chemical residue on fruit and leaves",
          ],
        },
        {
          icon: "🌿",
          title: "Organic farming",
          text: "Certifiable for organic systems. Effective in horticultural-floricultural nurseries and greenhouse crops. 100% plant-based alternative to chemical agro-pharmaceuticals.",
          intro:
            "The extract is certifiable for organic farming systems, offering a fully plant-based alternative to synthetic agro-pharmaceuticals in nurseries and greenhouses.",
          points: [
            "Compatible with organic farming standards",
            "Effective in horticultural-floricultural nurseries and greenhouse crops",
            "100% plant-based alternative to chemical agro-pharmaceuticals",
            "Valorisation of an agro-industrial by-product as a bioactive",
          ],
        },
        {
          icon: "💄",
          title: "Cosmetics & nutraceuticals",
          text: "Pomegranate active principles for premium cosmetic formulations. Food supplements and high-value functional foods.",
          intro:
            "The active principles of pomegranate — punicalagin first and foremost — enter premium cosmetic formulations, food supplements and high-value functional foods.",
          points: [
            "Pomegranate active principles for premium cosmetics",
            "Food supplements with high antioxidant value",
            "Functional foods with natural extract",
            "Documented anti-inflammatory and antitumor properties",
          ],
        },
        {
          icon: "🧴",
          title: "Nano-formulation",
          text: "Formulated with cellulose nanocrystals and perlite for endotherapy treatments on historic, landscape and monumental olive trees.",
          intro:
            "The nano-formulation combines the extract with cellulose nanocrystals and perlite for targeted endotherapy treatments on historic, landscape and monumental olive trees.",
          points: [
            "Cellulose nanocrystals and perlite as carriers",
            "Endotherapy treatments on historic and monumental olive trees",
            "Deep delivery into the plant's vascular system",
            "Protection of the landscape olive heritage",
          ],
        },
      ],
      es: [
        {
          icon: "🌾",
          title: "Agrofarmaco",
          text: "Defensa natural de cultivos de alto valor: olivicultura, viticultura, fruticultura. Uso postcosecha para conservación de uva, fresas, cítricos, manzanas.",
          intro:
            "El extracto de cáscara de granada actúa como agrofarmaco natural para la defensa de los cultivos más preciados, sustituyendo los tratamientos químicos por una solución vegetal de bajo impacto.",
          points: [
            "Defensa de olivicultura, viticultura y fruticultura de alto valor",
            "Tratamiento postcosecha para conservación de uva, fresas, cítricos, manzanas",
            "Acción antimicrobiana y antioxidante directamente sobre el producto conservado",
            "Sin residuos químicos en la fruta y las hojas",
          ],
        },
        {
          icon: "🌿",
          title: "Agricultura ecológica",
          text: "Certificable para sistemas ecológicos. Eficaz en viveros hortofrutícolas y cultivos bajo invernadero. Alternativa 100% vegetal a los agrofarmacos químicos.",
          intro:
            "El extracto es certificable para los sistemas de agricultura ecológica, ofreciendo una alternativa totalmente vegetal a los agrofarmacos de síntesis en viveros e invernaderos.",
          points: [
            "Compatible con los estándares de la agricultura ecológica",
            "Eficaz en viveros hortofrutícolas y cultivos bajo invernadero",
            "Alternativa 100% vegetal a los agrofarmacos químicos",
            "Valorización de un subproducto agroindustrial como bioactivo",
          ],
        },
        {
          icon: "💄",
          title: "Cosmética y nutracéutica",
          text: "Principios activos de la granada para formulaciones cosméticas premium. Suplementos alimentarios y alimentos funcionales de alto valor.",
          intro:
            "Los principios activos de la granada — punicalagina en primer lugar — entran en formulaciones cosméticas premium, suplementos alimentarios y alimentos funcionales de alto valor añadido.",
          points: [
            "Principios activos de la granada para cosméticos premium",
            "Suplementos alimentarios de alto valor antioxidante",
            "Alimentos funcionales con extracto natural",
            "Propiedades antiinflamatorias y antitumorales documentadas",
          ],
        },
        {
          icon: "🧴",
          title: "Nano-formulación",
          text: "Formulado con nanocristales de celulosa y perlita para tratamientos endoterápicos en olivos históricos, paisajísticos y monumentales.",
          intro:
            "La nano-formulación combina el extracto con nanocristales de celulosa y perlita para tratamientos endoterápicos dirigidos en olivos históricos, paisajísticos y monumentales.",
          points: [
            "Nanocristales de celulosa y perlita como vectores",
            "Tratamientos endoterápicos en olivos históricos y monumentales",
            "Administración profunda en el sistema vascular de la planta",
            "Protección del patrimonio olivícola paisajístico",
          ],
        },
      ],
    },
  },

  /* ---------- SECTION 5: PROGETTO ---------- */
  progetto: {
    title: {
      it: "Work Package 4 e 5 — Risultati in campo",
      en: "Work Package 4 and 5 — Field results",
      es: "Work Package 4 y 5 — Resultados en campo",
    },
    wp4Title: {
      it: "Produzione e scale-up",
      en: "Production and scale-up",
      es: "Producción y escalado",
    },
    wp4Text: {
      it: "Produzione dell'estratto idrolitico delle bucce di melograno e scale up allo stadio pilota del nanoformulato. L'estratto di P. granatum preparato seguendo le procedure dei brevetti CREA (2016, 2022, PCT/2021).",
      en: "Production of the hydrolytic extract of pomegranate peels and scale-up to the pilot stage of the nano-formulation. The P. granatum extract prepared following CREA patent procedures (2016, 2022, PCT/2021).",
      es: "Producción del extracto hidrolítico de las cáscaras de granada y escalado a la fase piloto del nano-formulado. El extracto de P. granatum preparado siguiendo los procedimientos de las patentes CREA (2016, 2022, PCT/2021).",
    },
    wp5Title: { it: "Prove in campo", en: "Field trials", es: "Ensayos de campo" },
    wp5Text: {
      it: "Prove in campo per il contenimento di Xylella fastidiosa. Azienda selezionata a Trepuzzi (LE) con olivi infetti da X. fastidiosa (qPCR), sesto 6×5 m, età 20–30 anni. 3 kg di formulato per solco profondo 10–12 cm. I trattamenti preliminari hanno mostrato un netto miglioramento delle condizioni fisiologiche e vegetative degli olivi.",
      en: "Field trials for the containment of Xylella fastidiosa. Selected farm in Trepuzzi (LE) with olive trees infected by X. fastidiosa (qPCR), spacing 6×5 m, age 20–30 years. 3 kg of formulation per deep furrow 10–12 cm. Preliminary treatments showed a clear improvement in the physiological and vegetative conditions of the olive trees.",
      es: "Ensayos de campo para el control de Xylella fastidiosa. Finca seleccionada en Trepuzzi (LE) con olivos infectados por X. fastidiosa (qPCR), marco 6×5 m, edad 20–30 años. 3 kg de formulado por surco profundo 10–12 cm. Los tratamientos preliminares mostraron una clara mejora de las condiciones fisiológicas y vegetativas de los olivos.",
    },
  },

  /* ---------- SECTION 6: TEAM ---------- */
  team: {
    title: { it: "Il team scientifico", en: "The scientific team", es: "El equipo científico" },
    members: {
      it: [
        { name: "Dr. Domenico Rongai", role: "Ricercatore principale — CREA" },
        { name: "Dr. [Nome in corso]", role: "Ricercatore associato — CREA" },
        { name: "Dra. [Nome in corso]", role: "Ricercatrice associata — CREA" },
      ],
      en: [
        { name: "Dr. Domenico Rongai", role: "Lead researcher — CREA" },
        { name: "Dr. [Name pending]", role: "Associate researcher — CREA" },
        { name: "Dr. [Name pending]", role: "Associate researcher — CREA" },
      ],
      es: [
        { name: "Dr. Domenico Rongai", role: "Investigador principal — CREA" },
        { name: "Dr. [Nombre pendiente]", role: "Investigador asociado — CREA" },
        { name: "Dra. [Nombre pendiente]", role: "Investigadora asociada — CREA" },
      ],
    },
  },

  /* ---------- SECTION 7: CONTATTI ---------- */
  contatti: {
    title: { it: "Collabora con noi", en: "Collaborate with us", es: "Colabora con nosotros" },
    subtitle: {
      it: "Sei un'università, un'istituzione, un'azienda agricola o un investitore interessato al progetto ANCoSIX?",
      en: "Are you a university, institution, agricultural company or investor interested in the ANCoSIX project?",
      es: "¿Eres una universidad, una institución, una empresa agrícola o un inversor interesado en el proyecto ANCoSIX?",
    },
    fields: {
      it: {
        name: "Nome e Cognome",
        org: "Istituzione / Azienda",
        email: "Email",
        country: "Paese",
        msg: "Messaggio",
      },
      en: {
        name: "Full Name",
        org: "Institution / Company",
        email: "Email",
        country: "Country",
        msg: "Message",
      },
      es: {
        name: "Nombre y Apellido",
        org: "Institución / Empresa",
        email: "Email",
        country: "País",
        msg: "Mensaje",
      },
    },
    submit: { it: "Invia Messaggio →", en: "Send Message →", es: "Enviar Mensaje →" },
    sent: {
      it: "✓ Messaggio inviato. Ti contatteremo al più presto.",
      en: "✓ Message sent. We will contact you shortly.",
      es: "✓ Mensaje enviado. Te contactaremos en breve.",
    },
    location: { it: "CREA — Italia", en: "CREA — Italy", es: "CREA — Italia" },
  },

  /* ---------- FOOTER ---------- */
  footer: {
    left: {
      it: "Progetto ANCoSIX © 2024 — CREA",
      en: "ANCoSIX Project © 2024 — CREA",
      es: "Proyecto ANCoSIX © 2024 — CREA",
    },
    center: {
      it: "Sito realizzato con tecnologia AI",
      en: "Website built with AI technology",
      es: "Sitio creado con tecnología IA",
    },
    right: {
      it: "Brevetti: TO2013A001085 · 102020000007993",
      en: "Patents: TO2013A001085 · 102020000007993",
      es: "Patentes: TO2013A001085 · 102020000007993",
    },
  },

  /* ---------- PHONE BUBBLE ---------- */
  phone: {
    label: { it: "Chiamaci", en: "Call us", es: "Llámanos" },
    tooltip: { it: "Contatto diretto", en: "Direct contact", es: "Contacto directo" },
  },
} as const;

/* ============================================================
   CONTEXT
   ============================================================ */

type I18nContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("it");
  return <I18nContext.Provider value={{ lang, setLang }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

/* Helper: pick a localized string */
export function L(lang: Lang, obj: Record<Lang, string>): string {
  return obj[lang];
}
