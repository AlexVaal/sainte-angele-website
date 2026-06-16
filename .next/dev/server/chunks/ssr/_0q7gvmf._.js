module.exports = [
"[project]/content/site-content-it.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "itContent",
    ()=>itContent
]);
const itContent = {
    site: {
        name: "Église Sainte-Angèle",
        address: "5275 Boulevard Lavoisier, Montréal, Québec",
        phone: "514-321-3644",
        email: "angelemerici@videotron.ca",
        officeHours: "Lunedì: 1:00 PM – 5:00 PM\nMartedì: 1:00 PM – 5:00 PM\nGiovedì: 1:00 PM – 5:00 PM",
        nextGathering: {
            day: "Messe domenicali",
            time: "9:00 AM (Italiano) • 11:00 AM (Francese)"
        }
    },
    common: {
        donateNow: "Dona",
        planVisit: "Pianifica la visita",
        learnMore: "Scopri di più",
        volunteerNow: "Volontariato",
        contactTeam: "Contatta il team",
        viewAllEvents: "Vedi tutti gli eventi",
        exploreSermons: "Vedi gli orari delle Messe",
        nextGathering: "Prossimo incontro"
    },
    navigation: [
        {
            href: "",
            label: "Home"
        },
        {
            href: "/about",
            label: "Chi siamo"
        },
        {
            href: "/hall-rental",
            label: "Affitto sala"
        },
        {
            href: "/team",
            label: "Equipe parrocchiale"
        },
        {
            href: "/events",
            label: "Eventi"
        },
        {
            href: "/sermons",
            label: "Messe"
        },
        {
            href: "/volunteer",
            label: "Volontariato"
        },
        {
            href: "/donate",
            label: "Dona"
        },
        {
            href: "/contact",
            label: "Contatti"
        }
    ],
    footer: {
        description: "Église Sainte-Angèle è una calorosa parrocchia cattolica romana di Saint-Léonard dove preghiera, liturgia e vita comunitaria si vivono in un clima sereno e accogliente.",
        contactHeading: "Contatti",
        linksHeading: "Esplora",
        links: [
            {
                href: "/about",
                label: "Storia della parrocchia"
            },
            {
                href: "/hall-rental",
                label: "Affitto sala"
            },
            {
                href: "/events",
                label: "Prossimi eventi"
            },
            {
                href: "/sermons",
                label: "Orario delle Messe"
            },
            {
                href: "/contact",
                label: "Visita la parrocchia"
            }
        ]
    },
    home: {
        hero: {
            eyebrow: "Parrocchia cattolica romana a Saint-Léonard",
            description: "Église Sainte-Angèle accoglie parrocchiani, vicini e visitatori in un luogo sereno di preghiera, celebrazione e vita comunitaria. Unisciti a noi per la Messa, il raccoglimento e una presenza parrocchiale calorosa radicata nella fede.",
            panelTitle: "Orario delle Messe",
            image: {
                src: "/home/hero-church.jpg",
                alt: "Interno della chiesa di Sainte-Angèle"
            },
            actions: [
                {
                    href: "/about",
                    label: "Scopri la parrocchia",
                    variant: "primary"
                },
                {
                    href: "/events",
                    label: "Prossimi eventi",
                    variant: "secondary"
                },
                {
                    href: "/contact",
                    label: "Contatta la parrocchia",
                    variant: "secondary"
                }
            ]
        },
        sections: {
            eyebrow: "Esplora",
            title: "Trova il tuo posto nella vita della parrocchia",
            description: "Scopri la vita parrocchiale, gli eventi in arrivo, gli orari delle Messe e le informazioni utili per visitare Sainte-Angèle.",
            cards: [
                {
                    href: "/about",
                    title: "Chi siamo",
                    description: "Leggi la storia di Sainte-Angèle e scopri di più sulla vita della parrocchia.",
                    image: {
                        src: "/home/about-thumb.jpg",
                        alt: "Vista accogliente dell'interno della chiesa di Sainte-Angèle"
                    }
                },
                {
                    href: "/events",
                    title: "Eventi",
                    description: "Consulta le prossime attività parrocchiali e gli avvisi preparati per la comunità.",
                    image: {
                        src: "/home/events-thumb.jpg",
                        alt: "Spazio parrocchiale preparato per un evento comunitario"
                    }
                },
                {
                    href: "/sermons",
                    title: "Orari delle Messe",
                    description: "Trova in un unico posto l'orario settimanale delle Messe in italiano e in francese.",
                    image: {
                        src: "/home/service-thumb.jpg",
                        alt: "Altare e ambiente liturgico della parrocchia Sainte-Angèle"
                    }
                },
                {
                    href: "/contact",
                    title: "Contatti",
                    description: "Trova l'indirizzo della chiesa, il numero di telefono e le informazioni pratiche per la tua visita.",
                    image: {
                        src: "/home/contact-thumb.jpg",
                        alt: "Ingresso esterno della parrocchia Sainte-Angèle"
                    }
                }
            ]
        },
        events: {
            eyebrow: "Prossimi eventi",
            title: "Incontri parrocchiali in evidenza",
            description: "",
            featured: {
                eyebrow: "Evento in evidenza",
                title: "Festa del Corpus Domini",
                date: "June 7",
                time: "Messa bilingue alle 10:00 AM",
                description: "Unisciti alla parrocchia per una celebrazione bilingue a Sainte-Angèle, con una processione nel parcheggio da confermare.",
                cta: "Apri la pagina degli eventi",
                image: {
                    src: "/home/featured-event.jpg",
                    alt: "Immagine di una celebrazione parrocchiale per l'evento in evidenza"
                }
            }
        },
        schedule: {
            eyebrow: "Orario delle Messe",
            title: "Messe settimanali e orari delle celebrazioni",
            description: ""
        },
        volunteer: {
            eyebrow: "Servire insieme",
            title: "Volontariato e aiuto alla comunità",
            description: "I parrocchiani possono contribuire con la musica, l'accoglienza, le attività di raccolta fondi, gli incontri comunitari e altre forme di servizio durante l'anno."
        },
        donate: {
            eyebrow: "Dona con uno scopo",
            title: "Sostieni la liturgia, l'aiuto al prossimo e la vita della comunità",
            description: "Sostieni la vita parrocchiale, le opere caritative, le attività comunitarie e la missione continua della parrocchia Sainte-Angèle."
        }
    },
    about: {
        eyebrow: "Chi siamo",
        title: "Una parrocchia radicata nella preghiera, nella memoria e nel servizio fedele",
        description: "La parrocchia Sainte-Angèle serve la comunità di Saint-Léonard dal 1962. Attraverso la preghiera, la Messa, gli eventi comunitari, il volontariato e le iniziative caritative, la parrocchia continua ad accogliere persone di ogni età e provenienza.",
        story: {
            eyebrow: "Storia della chiesa",
            title: "Una presenza parrocchiale a Saint-Léonard dal 1962",
            description: "",
            image: {
                src: "/home/about-thumb.jpg",
                alt: "Spazio di incontro parrocchiale a Sainte-Angèle"
            },
            paragraphs: [
                "Fondata nel 1962 dal cardinale Paul-Émile Léger, la parrocchia Sainte-Angèle è nata per servire la crescente comunità cattolica di Saint-Léonard. L'edificio della chiesa fu completato alla fine degli anni 1960 e continua ancora oggi a essere un importante luogo di incontro spirituale e comunitario."
            ]
        },
        values: [
            {
                eyebrow: "Fede",
                title: "Preghiera e liturgia",
                description: "La Messa, la preghiera e la vita liturgica della Chiesa restano al cuore della parrocchia Sainte-Angèle durante tutto l'anno."
            },
            {
                eyebrow: "Comunità",
                title: "Una comunità parrocchiale attiva",
                description: "Cene parrocchiali, attività di raccolta fondi, celebrazioni stagionali, volontariato, iniziative caritative e incontri comunitari continuano a unire i parrocchiani in modo accogliente e concreto."
            },
            {
                eyebrow: "Servizio",
                title: "Fede, servizio e comunità",
                description: "La vita parrocchiale va oltre la Messa grazie al volontariato, alle cene comunitarie, alle attività di raccolta fondi, al sostegno reciproco e alle celebrazioni stagionali."
            }
        ],
        expect: {
            eyebrow: "Preparare la visita",
            title: "Cosa possono aspettarsi i visitatori",
            description: "",
            items: [
                {
                    eyebrow: "Arrivo",
                    title: "Un'accoglienza serena",
                    description: "I visitatori sono accolti in un ambiente tranquillo e raccolto, pensato per la preghiera, il silenzio e il senso di appartenenza."
                },
                {
                    eyebrow: "Lingue",
                    title: "Messe in italiano e in francese",
                    description: "La parrocchia propone orari regolari di Messe in italiano e in francese durante la settimana e nel fine settimana."
                },
                {
                    eyebrow: "Vita comunitaria",
                    title: "Un ritmo parrocchiale vivo",
                    description: "Eventi parrocchiali, servizio volontario, cene comunitarie e celebrazioni stagionali contribuiscono a creare una comunità accogliente."
                }
            ]
        }
    },
    teamPage: {
        eyebrow: "Responsabili parrocchiali",
        title: "Equipe parrocchiale",
        description: "Conosci le persone che sostengono e accompagnano la comunità parrocchiale di Sainte-Angèle.",
        placeholderLabel: "Foto in arrivo",
        sections: [
            {
                id: "clergy",
                eyebrow: "Clero",
                title: "Clero",
                description: "Il sacerdote che serve la parrocchia nella liturgia, nella cura pastorale e nella vita comunitaria.",
                members: [
                    {
                        name: "Father Aleksander Dudik",
                        role: "Parroco",
                        photo: "/team/father-aleksander-dudik.jpg"
                    }
                ]
            },
            {
                id: "administration",
                eyebrow: "Amministrazione",
                title: "Amministrazione",
                description: "Le persone che sostengono la comunicazione quotidiana, la gestione e la vita dell'ufficio parrocchiale.",
                members: [
                    {
                        name: "Sylvie Selesse",
                        role: "Segretaria",
                        photo: "/team/placeholder.jpg"
                    },
                    {
                        name: "Andrea Manganelli",
                        role: "Tesoriere",
                        photo: "/team/placeholder.jpg"
                    }
                ]
            },
            {
                id: "council",
                eyebrow: "Consiglio parrocchiale e pastorale",
                title: "Consiglio parrocchiale e pastorale",
                description: "Le persone che aiutano a orientare la missione, la pianificazione e la vita pastorale della parrocchia.",
                members: [
                    {
                        name: "Maria Pia DeLuca",
                        role: "Consigliere parrocchiale",
                        photo: "/team/placeholder.jpg"
                    },
                    {
                        name: "Lina Saracino",
                        role: "Consigliere pastorale",
                        photo: "/team/placeholder.jpg"
                    }
                ]
            },
            {
                id: "wardens",
                eyebrow: "Fabbricieri",
                title: "Fabbricieri",
                description: "I fabbricieri che sostengono l'amministrazione pratica e la buona gestione della comunità parrocchiale.",
                members: [
                    {
                        name: "Carmela Pepe",
                        role: "Fabbriciera",
                        photo: "/team/carmela-pepe.jpg"
                    },
                    {
                        name: "Angelina Romano",
                        role: "Fabbriciera",
                        photo: "/team/placeholder.jpg"
                    },
                    {
                        name: "Lucie Corrente",
                        role: "Fabbriciera",
                        photo: "/team/lucie-corrente.jpg"
                    },
                    {
                        name: "Amide Fidèle",
                        role: "Fabbriciere",
                        photo: "/team/placeholder.jpg"
                    },
                    {
                        name: "Nick Sbarra",
                        role: "Fabbriciere",
                        photo: "/team/placeholder.jpg"
                    },
                    {
                        name: "Vincent Poulin",
                        role: "Fabbriciere",
                        photo: "/team/placeholder.jpg"
                    }
                ]
            },
            {
                id: "ministries",
                eyebrow: "Ministeri",
                title: "Ministeri",
                description: "I responsabili dei ministeri che arricchiscono la liturgia e la partecipazione parrocchiale durante tutto l'anno.",
                members: [
                    {
                        name: "Jacquelin Deranne",
                        role: "Direttore del coro",
                        photo: "/team/placeholder.jpg"
                    }
                ]
            }
        ]
    },
    hallRentalPage: {
        eyebrow: "Sala parrocchiale",
        title: "Affitto sala",
        description: "La parrocchia Sainte-Angèle mette a disposizione una sala che può essere affittata per incontri privati e comunitari.",
        heroNote: "Disponibile per incontri privati e comunitari",
        placeholderLabel: "Foto della sala in arrivo",
        heroImage: {
            src: "/hall/hall-1.jpg",
            alt: "Sala parrocchiale di Sainte-Angèle"
        },
        gallery: [
            {
                src: "/hall/hall-1.jpg",
                alt: "Vista ampia della sala parrocchiale di Sainte-Angèle"
            },
            {
                src: "/hall/hall-2.jpg",
                alt: "Allestimento per un evento nella sala parrocchiale di Sainte-Angèle"
            },
            {
                src: "/hall/hall-3.jpg",
                alt: "Zona luminosa con posti a sedere nella sala parrocchiale di Sainte-Angèle"
            },
            {
                src: "/hall/hall-4.jpg",
                alt: "Un'altra vista della sala parrocchiale di Sainte-Angèle"
            },
            {
                src: "/hall/hall-5.jpg",
                alt: "Allestimento della sala per incontri a Sainte-Angèle"
            }
        ],
        cards: {
            capacity: {
                eyebrow: "Capienza",
                title: "Fino a 100 persone",
                description: "La sala può accogliere fino a 100 persone."
            },
            suitable: {
                eyebrow: "Adatta per",
                title: "Incontri privati e comunitari",
                description: "La sala è disponibile per compleanni, battesimi, riunioni familiari, eventi comunitari e altri incontri approvati dalla parrocchia.",
                items: [
                    "Compleanni",
                    "Battesimi",
                    "Riunioni familiari",
                    "Eventi comunitari",
                    "Altri incontri approvati dalla parrocchia"
                ]
            },
            contact: {
                eyebrow: "Contatti",
                title: "Prenotazioni e informazioni",
                description: "Per disponibilità, tariffe e dettagli sulla prenotazione, contatta l'ufficio parrocchiale.",
                phoneLabel: "Telefono",
                phone: "514-321-3644"
            }
        },
        features: {
            eyebrow: "Caratteristiche della sala",
            title: "Caratteristiche della sala",
            items: [
                "Capienza: Fino a 100 persone",
                "Tavoli e sedie disponibili",
                "Spazio con palco disponibile",
                "Sala luminosa con grandi finestre",
                "Adatta per compleanni, battesimi, riunioni familiari, eventi comunitari e celebrazioni"
            ]
        },
        photosSection: {
            eyebrow: "Galleria",
            title: "Galleria della sala",
            description: ""
        },
        cta: {
            eyebrow: "Contatti",
            title: "Informazioni per l'affitto della sala",
            description: "Vuoi affittare la sala parrocchiale per il tuo prossimo evento? Contatta l'ufficio parrocchiale per disponibilità e tariffe.",
            phone: "514-321-3644"
        }
    },
    events: [
        {
            title: "Veglia di Pentecoste",
            date: "Saturday, May 23",
            time: "7:00 PM",
            location: "Église Sainte-Angèle",
            description: "Celebrazione speciale della Veglia di Pentecoste presso la chiesa Sainte-Angèle.",
            notes: []
        },
        {
            title: "Forum International des Leaders Charismatiques 2026",
            date: "June 5 to June 7",
            time: "To be confirmed",
            location: "Cathédrale Marie-Reine-du-Monde",
            description: "Incontro internazionale dei leader carismatici.",
            notes: [
                "Il trasporto in autobus potrà essere organizzato in base alla partecipazione dopo la Messa del 7 giugno. Rivolgersi al parroco per ulteriori informazioni."
            ]
        },
        {
            title: "Festa del Corpus Domini",
            date: "June 7",
            time: "10:00 AM",
            location: "Église Sainte-Angèle",
            description: "Celebrazione di una Messa bilingue.",
            notes: [
                "Processione nel parcheggio da confermare."
            ]
        },
        {
            title: "Vendita di garage parrocchiale",
            date: "To be confirmed",
            time: "To be confirmed",
            location: "Église Sainte-Angèle",
            description: "Prossima vendita di garage parrocchiale. Maggiori dettagli seguiranno.",
            notes: []
        },
        {
            title: "Festa di Maria",
            date: "Saturday, August 15",
            time: "To be confirmed",
            location: "Église Sainte-Angèle",
            description: "Celebrazione in onore di Maria.",
            notes: [
                "Processione con la statua di Maria nel parcheggio da confermare."
            ]
        }
    ],
    eventsPage: {
        eyebrow: "Eventi parrocchiali",
        title: "Eventi e attività parrocchiali",
        description: "Consulta i prossimi eventi parrocchiali, le celebrazioni e gli incontri comunitari di Sainte-Angèle.",
        calendar: {
            eyebrow: "Prossimamente",
            title: "Attività parrocchiali",
            description: ""
        },
        labels: {
            date: "Data",
            time: "Orario",
            location: "Luogo",
            notes: "Note / conferme"
        },
        callout: {
            eyebrow: "Aggiornamenti",
            title: "Gli eventi possono essere aggiornati secondo le conferme",
            description: "Usa il contenuto condiviso per modificare facilmente una data, una nota, una processione o un dettaglio sul trasporto.",
            cta: "Contatta la parrocchia"
        }
    },
    schedule: [
        {
            name: "Messa domenicale",
            time: "Sunday — 9:00 AM",
            description: "Italiano"
        },
        {
            name: "Messa domenicale",
            time: "Sunday — 11:00 AM",
            description: "Francese"
        },
        {
            name: "Messa feriale",
            time: "Monday — 7:00 PM",
            description: "Italiano"
        },
        {
            name: "Messa feriale",
            time: "Tuesday — 8:30 AM",
            description: "Francese"
        },
        {
            name: "Messa feriale",
            time: "Wednesday — 7:00 PM",
            description: "Italiano"
        },
        {
            name: "Messa feriale",
            time: "Thursday — 8:30 AM",
            description: "Francese"
        },
        {
            name: "Messa feriale",
            time: "Friday — 8:30 AM",
            description: "Italiano"
        },
        {
            name: "Messa prefestiva",
            time: "Saturday — 4:00 PM",
            description: "Italiano"
        },
        {
            name: "Messa prefestiva",
            time: "Saturday — 5:00 PM",
            description: "Francese"
        }
    ],
    sermons: {
        eyebrow: "Orari delle Messe e celebrazioni",
        title: "Orario settimanale delle Messe",
        description: "",
        schedule: {
            eyebrow: "Ritmo settimanale",
            title: "Orario attuale delle celebrazioni",
            description: "L'orario qui sotto riporta gli attuali orari delle Messe settimanali in italiano e in francese a Sainte-Angèle."
        },
        library: {
            eyebrow: "Note parrocchiali",
            title: "Spazio per futuri aggiornamenti pastorali",
            description: "Questi spazi potranno in futuro accogliere sintesi di omelie, riflessioni stagionali o avvisi liturgici importanti.",
            items: [
                {
                    eyebrow: "Spazio riservato",
                    title: "Note dell'omelia domenicale",
                    description: "Usa questo spazio in futuro per brevi riassunti, spunti di riflessione o messaggi principali del parroco.",
                    detail: "Contenuto modificabile"
                },
                {
                    eyebrow: "Spazio riservato",
                    title: "Aggiornamenti liturgici stagionali",
                    description: "Uno spazio flessibile per note sulle feste, iniziative di preghiera o promemoria di celebrazioni particolari.",
                    detail: "Contenuto modificabile"
                },
                {
                    eyebrow: "Spazio riservato",
                    title: "Archivio di riflessioni parrocchiali",
                    description: "Riserva questa scheda per note di omelie archiviate, riflessioni pastorali o risorse di fede.",
                    detail: "Contenuto modificabile"
                }
            ]
        }
    },
    volunteerRoles: [
        {
            title: "Supporto a eventi e raccolte fondi",
            commitment: "Secondo la stagione e durante l'anno",
            description: "Aiuta a preparare e sostenere gli eventi parrocchiali, le attività di raccolta fondi e gli incontri comunitari durante l'anno.",
            detail: "Un ruolo pratico per chi ama dare una mano dietro le quinte."
        },
        {
            title: "Coro e musica",
            commitment: "Ogni settimana o secondo la stagione",
            description: "Sostieni le celebrazioni liturgiche, le feste e gli incontri parrocchiali attraverso il canto, la musica e il servizio del coro.",
            detail: "Adatto sia a musicisti esperti sia a nuovi volontari."
        },
        {
            title: "Supporto all'altare e alla liturgia",
            commitment: "Turnazione programmata",
            description: "Aiuta nella preparazione dell'altare, nelle letture, nella preghiera e negli altri bisogni pratici legati alle celebrazioni parrocchiali.",
            detail: "Un bel modo per servire la vita di preghiera della parrocchia."
        },
        {
            title: "Accoglienza e incontri parrocchiali",
            commitment: "Flessibile",
            description: "Aiuta ad accogliere i parrocchiani, a organizzare i rinfreschi e a sostenere cene, ricevimenti e incontri comunitari.",
            detail: "Ideale per persone calorose e affidabili."
        },
        {
            title: "Supporto alla comunità",
            commitment: "Ogni mese",
            description: "Offri un aiuto concreto ai bisogni della parrocchia, alle opere caritative e alle attività che rafforzano la comunità.",
            detail: "Un'opportunità significativa per i parrocchiani desiderosi di servire."
        }
    ],
    volunteerPage: {
        eyebrow: "Servi con noi",
        title: "Volontariato nella vita parrocchiale di Sainte-Angèle",
        description: "I volontari sostengono la vita parrocchiale, gli eventi comunitari, le attività di raccolta fondi, le celebrazioni liturgiche, il coro e la musica, così come i bisogni pratici della parrocchia Sainte-Angèle.",
        primaryCta: "Contatta Maria Pia",
        roles: {
            eyebrow: "Opportunità di volontariato",
            title: "Modi per aiutare nella parrocchia",
            description: "Scopri alcuni dei modi concreti in cui i volontari sostengono la liturgia, la vita comunitaria e le attività parrocchiali."
        },
        contact: {
            eyebrow: "Coordinatrice del volontariato",
            title: "Coordinatrice del volontariato",
            description: "Vuoi fare volontariato con la parrocchia Sainte-Angèle? I volontari aiutano negli eventi parrocchiali, nelle cene comunitarie, nelle attività di raccolta fondi, nell'accoglienza e in altre iniziative della comunità durante tutto l'anno. Contatta Maria Pia DeLuca per maggiori informazioni e per conoscere le attuali opportunità di volontariato.",
            name: "Maria Pia DeLuca",
            phoneLabel: "Telefono",
            phone: "514-323-9092",
            languagesLabel: "Lingue",
            languages: "Francese, italiano"
        }
    },
    donate: {
        eyebrow: "Donazione online",
        title: "Sostieni la parrocchia Sainte-Angèle",
        description: "La tua generosità aiuta a sostenere la vita parrocchiale, le celebrazioni liturgiche, le attività comunitarie, le opere di carità e la cura costante dei nostri locali.",
        primaryCta: "Dona tramite CanadaHelps",
        canadaHelpsUrl: "https://www.canadahelps.org/en/charities/fabrique-de-la-paroisse-de-ste-angele-de-merici-archidiocese/",
        support: {
            eyebrow: "Perché il tuo sostegno è importante",
            title: "Perché il tuo sostegno è importante",
            description: "",
            items: [
                {
                    eyebrow: "Vita parrocchiale",
                    title: "Vita parrocchiale",
                    description: "Le donazioni sostengono le celebrazioni liturgiche, la preghiera, la musica, l'accoglienza e la vita quotidiana della comunità parrocchiale."
                },
                {
                    eyebrow: "Eventi comunitari",
                    title: "Eventi comunitari",
                    description: "Il tuo sostegno rende possibili cene parrocchiali, celebrazioni stagionali, incontri e altre attività che uniscono la comunità."
                },
                {
                    eyebrow: "Manutenzione della chiesa",
                    title: "Manutenzione della chiesa",
                    description: "Le offerte aiutano anche a prenderci cura della chiesa e degli spazi parrocchiali perché restino accoglienti, sicuri e ben mantenuti."
                }
            ]
        },
        online: {
            eyebrow: "Donazione online",
            title: "Dona in sicurezza tramite CanadaHelps",
            description: "Le donazioni online alla parrocchia Sainte-Angèle sono elaborate in modo sicuro tramite CanadaHelps.",
            cta: "Dona tramite CanadaHelps"
        },
        receipt: {
            eyebrow: "Ricevuta fiscale",
            title: "Ricevute fiscali ufficiali",
            description: "Le ricevute fiscali ufficiali sono emesse tramite CanadaHelps."
        },
        contact: {
            eyebrow: "Ufficio parrocchiale",
            title: "Ufficio parrocchiale",
            description: "Per domande sulle donazioni alla parrocchia, contatta l'ufficio parrocchiale.",
            phone: "514-321-3644"
        }
    },
    contact: {
        eyebrow: "Contattaci",
        title: "Aiutare i visitatori a contattare la chiesa con semplicità",
        description: "Questa pagina rimane volutamente semplice e chiara, così chi visita per la prima volta trova subito le informazioni essenziali.",
        details: {
            eyebrow: "Informazioni",
            title: "Tutto il necessario per una prima visita",
            description: "Le schede di contatto presentano le informazioni essenziali con chiarezza, senza appesantire la pagina."
        },
        cards: {
            address: {
                title: "Indirizzo",
                eyebrow: "Raggiungere la chiesa"
            },
            phone: {
                title: "Telefono",
                eyebrow: "Chiamare l'ufficio"
            },
            email: {
                title: "Email",
                eyebrow: "Contatto parrocchiale"
            },
            office: {
                title: "Orari dell'ufficio",
                eyebrow: "Pianificare"
            }
        },
        visit: {
            eyebrow: "Prima di venire",
            title: "Alcuni riferimenti utili",
            description: "Questa sezione può in futuro accogliere informazioni su parcheggio, accessibilità, trasporto, famiglie o un modulo di contatto.",
            items: [
                {
                    eyebrow: "Parcheggio",
                    title: "Un arrivo semplice",
                    description: "Uno spazio da usare in futuro per note sul parcheggio nelle vicinanze, l'ingresso principale o la zona di discesa."
                },
                {
                    eyebrow: "Accessibilità",
                    title: "Un accesso attento",
                    description: "Uno spazio da usare in futuro per informazioni su rampe, posti accessibili, supporto uditivo o altre necessità."
                },
                {
                    eyebrow: "Famiglie",
                    title: "Un'atmosfera accogliente",
                    description: "Uno spazio da usare in futuro per note sui bambini, sugli spazi tranquilli e sulla partecipazione delle famiglie."
                },
                {
                    eyebrow: "Domande",
                    title: "Un riscontro cordiale",
                    description: "Uno spazio da usare in futuro per tempi di risposta, accoglienza in ufficio o un futuro modulo di contatto."
                }
            ]
        }
    }
};
}),
"[project]/content/site-content.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "siteContent",
    ()=>siteContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$site$2d$content$2d$it$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/site-content-it.ts [app-rsc] (ecmascript)");
;
const siteContent = {
    en: {
        site: {
            name: "Église Sainte-Angèle",
            address: "5275 Boulevard Lavoisier, Montréal, Québec",
            phone: "514-321-3644",
            email: "angelemerici@videotron.ca",
            officeHours: "Monday: 1:00 PM – 5:00 PM\nTuesday: 1:00 PM – 5:00 PM\nThursday: 1:00 PM – 5:00 PM",
            nextGathering: {
                day: "Sunday Masses",
                time: "9:00 AM (Italian) • 11:00 AM (French)"
            }
        },
        common: {
            donateNow: "Donate",
            planVisit: "Plan a visit",
            learnMore: "Learn more",
            volunteerNow: "Volunteer",
            contactTeam: "Contact the team",
            viewAllEvents: "View all events",
            exploreSermons: "See service times",
            nextGathering: "Next gathering"
        },
        navigation: [
            {
                href: "",
                label: "Home"
            },
            {
                href: "/about",
                label: "About"
            },
            {
                href: "/hall-rental",
                label: "Hall Rental"
            },
            {
                href: "/team",
                label: "Parish Team"
            },
            {
                href: "/events",
                label: "Events"
            },
            {
                href: "/sermons",
                label: "Sermons"
            },
            {
                href: "/volunteer",
                label: "Volunteer"
            },
            {
                href: "/donate",
                label: "Donate"
            },
            {
                href: "/contact",
                label: "Contact"
            }
        ],
        footer: {
            description: "Église Sainte-Angèle is a warm Roman Catholic parish in Saint-Léonard where worship, prayer, and community life are shared in a calm and welcoming atmosphere.",
            contactHeading: "Contact",
            linksHeading: "Explore",
            links: [
                {
                    href: "/about",
                    label: "Church history"
                },
                {
                    href: "/hall-rental",
                    label: "Hall rental"
                },
                {
                    href: "/events",
                    label: "Upcoming events"
                },
                {
                    href: "/sermons",
                    label: "Mass schedule"
                },
                {
                    href: "/contact",
                    label: "Visit the parish"
                }
            ]
        },
        home: {
            hero: {
                eyebrow: "Roman Catholic parish in Saint-Leonard",
                description: "Église Sainte-Angèle welcomes parishioners, neighbors, and visitors into a peaceful place of prayer, worship, and community life. Join us for Mass, reflection, and a warm parish presence rooted in faith.",
                panelTitle: "Mass schedule",
                image: {
                    src: "/home/hero-church.jpg",
                    alt: "Church interior at Sainte-Angèle Parish"
                },
                actions: [
                    {
                        href: "/about",
                        label: "Discover the parish",
                        variant: "primary"
                    },
                    {
                        href: "/events",
                        label: "Upcoming events",
                        variant: "secondary"
                    },
                    {
                        href: "/contact",
                        label: "Contact the parish",
                        variant: "secondary"
                    }
                ]
            },
            sections: {
                eyebrow: "Explore",
                title: "Find your place in the life of the parish",
                description: "Explore parish life, upcoming events, Mass times, and practical information for visiting Sainte-Angèle.",
                cards: [
                    {
                        href: "/about",
                        title: "About",
                        description: "Read the history of Sainte-Angèle and learn more about the life of the parish.",
                        image: {
                            src: "/home/about-thumb.jpg",
                            alt: "Warm view of the Sainte-Angèle church interior"
                        }
                    },
                    {
                        href: "/events",
                        title: "Events",
                        description: "See upcoming parish activities and the latest notices prepared for the community.",
                        image: {
                            src: "/home/events-thumb.jpg",
                            alt: "Parish gathering space prepared for a community event"
                        }
                    },
                    {
                        href: "/sermons",
                        title: "Service Times",
                        description: "Find the weekly Mass schedule in Italian and French in one clear place.",
                        image: {
                            src: "/home/service-thumb.jpg",
                            alt: "Altar and liturgical setting at Sainte-Angèle Parish"
                        }
                    },
                    {
                        href: "/contact",
                        title: "Contact",
                        description: "Find the church address, phone number, and practical details for your next visit.",
                        image: {
                            src: "/home/contact-thumb.jpg",
                            alt: "Exterior entrance area of Sainte-Angèle Parish"
                        }
                    }
                ]
            },
            events: {
                eyebrow: "Upcoming events",
                title: "Featured Parish Gatherings",
                description: "",
                featured: {
                    eyebrow: "Featured event",
                    title: "Fête de Dieu",
                    date: "June 7",
                    time: "Bilingual Mass at 10:00 AM",
                    description: "Join the parish for a bilingual Mass celebration at Sainte-Angèle, with a procession in the parking lot to be confirmed.",
                    cta: "Open the events page",
                    image: {
                        src: "/home/featured-event.jpg",
                        alt: "Parish celebration image for the featured event"
                    }
                }
            },
            schedule: {
                eyebrow: "Mass schedule",
                title: "Weekly Masses and Service Times",
                description: ""
            },
            volunteer: {
                eyebrow: "Serve together",
                title: "Volunteer and Help the Community",
                description: "Parishioners can contribute through music, hospitality, fundraising, community gatherings, outreach, and other forms of service throughout the year."
            },
            donate: {
                eyebrow: "Give with purpose",
                title: "Support worship, outreach, and care in the community",
                description: "Support parish life, charitable outreach, community activities, and the ongoing mission of Sainte-Angèle Parish."
            }
        },
        about: {
            eyebrow: "About Sainte-Angèle",
            title: "A parish rooted in prayer, memory, and faithful service",
            description: "Sainte-Angèle Parish has served the Saint-Léonard community since 1962. Through prayer, Mass, community events, volunteer activities, and charitable initiatives, the parish continues to welcome people of all ages and backgrounds.",
            story: {
                eyebrow: "Church history",
                title: "A parish presence in Saint-Leonard since 1962",
                description: "",
                image: {
                    src: "/home/about-thumb.jpg",
                    alt: "Parish gathering space at Sainte-Angèle"
                },
                paragraphs: [
                    "Founded in 1962 by Cardinal Paul-Émile Léger, Sainte-Angèle Parish was established to serve the growing Catholic community of Saint-Léonard. The church building was completed in the late 1960s and remains an important spiritual and community gathering place today."
                ]
            },
            values: [
                {
                    eyebrow: "Faith",
                    title: "Prayer and Worship",
                    description: "Mass, prayer, and the liturgical life of the Church remain at the heart of Sainte-Angèle Parish throughout the year."
                },
                {
                    eyebrow: "Community",
                    title: "An Active Parish Community",
                    description: "Parish dinners, fundraising events, seasonal celebrations, volunteer work, charitable initiatives, and community gatherings continue to bring parishioners together in a welcoming and practical way."
                },
                {
                    eyebrow: "Service",
                    title: "Faith, Service and Community",
                    description: "Parish life extends beyond Mass through volunteer involvement, community dinners, fundraising activities, outreach, and seasonal celebrations that bring people together."
                }
            ],
            expect: {
                eyebrow: "Plan your visit",
                title: "What visitors can expect",
                description: "",
                items: [
                    {
                        eyebrow: "Arrival",
                        title: "A peaceful welcome",
                        description: "Visitors are welcomed into a calm church setting designed for prayer, reflection, and a sense of belonging."
                    },
                    {
                        eyebrow: "Languages",
                        title: "Italian and French Masses",
                        description: "The parish offers regular Mass times in both Italian and French throughout the week and on weekends."
                    },
                    {
                        eyebrow: "Community life",
                        title: "A living parish rhythm",
                        description: "Parish events, volunteer service, community dinners, and seasonal celebrations help shape a welcoming church community."
                    }
                ]
            }
        },
        teamPage: {
            eyebrow: "Parish leadership",
            title: "Parish Team",
            description: "Meet the people who help serve and support the Sainte-Angèle parish community.",
            placeholderLabel: "Photo coming soon",
            sections: [
                {
                    id: "clergy",
                    eyebrow: "Clergy",
                    title: "Clergy",
                    description: "The priest who serves the parish in worship, pastoral care, and community life.",
                    members: [
                        {
                            name: "Father Aleksander Dudik",
                            role: "Priest",
                            photo: "/team/father-aleksander-dudik.jpg"
                        }
                    ]
                },
                {
                    id: "administration",
                    eyebrow: "Administration",
                    title: "Administration",
                    description: "The parish staff members who help support daily communication, stewardship, and office life.",
                    members: [
                        {
                            name: "Sylvie Selesse",
                            role: "Secretary",
                            photo: "/team/placeholder.jpg"
                        },
                        {
                            name: "Andrea Manganelli",
                            role: "Treasurer",
                            photo: "/team/placeholder.jpg"
                        }
                    ]
                },
                {
                    id: "council",
                    eyebrow: "Parish and Pastoral Council",
                    title: "Parish and Pastoral Council",
                    description: "Leadership members who help guide parish planning, mission, and pastoral life.",
                    members: [
                        {
                            name: "Maria Pia DeLuca",
                            role: "Parish Councillor",
                            photo: "/team/placeholder.jpg"
                        },
                        {
                            name: "Lina Saracino",
                            role: "Pastoral Councillor",
                            photo: "/team/placeholder.jpg"
                        }
                    ]
                },
                {
                    id: "wardens",
                    eyebrow: "Church Wardens",
                    title: "Church Wardens",
                    description: "Wardens who help support the practical and financial stewardship of the parish community.",
                    members: [
                        {
                            name: "Carmela Pepe",
                            role: "Church Warden",
                            photo: "/team/carmela-pepe.jpg"
                        },
                        {
                            name: "Angelina Romano",
                            role: "Church Warden",
                            photo: "/team/placeholder.jpg"
                        },
                        {
                            name: "Lucie Corrente",
                            role: "Church Warden",
                            photo: "/team/lucie-corrente.jpg"
                        },
                        {
                            name: "Amide Fidèle",
                            role: "Church Warden",
                            photo: "/team/placeholder.jpg"
                        },
                        {
                            name: "Nick Sbarra",
                            role: "Church Warden",
                            photo: "/team/placeholder.jpg"
                        },
                        {
                            name: "Vincent Poulin",
                            role: "Church Warden",
                            photo: "/team/placeholder.jpg"
                        }
                    ]
                },
                {
                    id: "ministries",
                    eyebrow: "Ministries",
                    title: "Ministries",
                    description: "Key ministry leaders who enrich worship and parish participation throughout the year.",
                    members: [
                        {
                            name: "Jacquelin Deranne",
                            role: "Choir Director",
                            photo: "/team/placeholder.jpg"
                        }
                    ]
                }
            ]
        },
        hallRentalPage: {
            eyebrow: "Parish hall",
            title: "Hall Rental",
            description: "Sainte-Angèle Parish offers a church hall that can be rented for private and community gatherings.",
            heroNote: "Available for private and community gatherings",
            placeholderLabel: "Hall photos coming soon",
            heroImage: {
                src: "/hall/hall-1.jpg",
                alt: "Sainte-Angèle parish hall"
            },
            gallery: [
                {
                    src: "/hall/hall-1.jpg",
                    alt: "Wide view of the Sainte-Angèle parish hall"
                },
                {
                    src: "/hall/hall-2.jpg",
                    alt: "Event setup inside the Sainte-Angèle parish hall"
                },
                {
                    src: "/hall/hall-3.jpg",
                    alt: "Bright seating area in the Sainte-Angèle parish hall"
                },
                {
                    src: "/hall/hall-4.jpg",
                    alt: "Additional view of the Sainte-Angèle parish hall"
                },
                {
                    src: "/hall/hall-5.jpg",
                    alt: "Hall setup for gatherings at Sainte-Angèle"
                }
            ],
            cards: {
                capacity: {
                    eyebrow: "Capacity",
                    title: "Up to 100 people",
                    description: "The hall can accommodate up to 100 people."
                },
                suitable: {
                    eyebrow: "Suitable for",
                    title: "Private and community gatherings",
                    description: "The hall is available for birthdays, baptisms, family gatherings, community events, and other parish-approved gatherings.",
                    items: [
                        "Birthdays",
                        "Baptisms",
                        "Family gatherings",
                        "Community events",
                        "Other parish-approved gatherings"
                    ]
                },
                contact: {
                    eyebrow: "Contact",
                    title: "Reservations and information",
                    description: "For availability, pricing, and reservation details, please contact the parish office.",
                    phoneLabel: "Phone",
                    phone: "514-321-3644"
                }
            },
            features: {
                eyebrow: "Hall Features",
                title: "Hall Features",
                items: [
                    "Capacity: Up to 100 guests",
                    "Tables and chairs available",
                    "Stage area available",
                    "Bright room with large windows",
                    "Suitable for birthdays, baptisms, family gatherings, community events and celebrations"
                ]
            },
            photosSection: {
                eyebrow: "Gallery",
                title: "Hall gallery",
                description: ""
            },
            cta: {
                eyebrow: "Contact",
                title: "Hall Rental Information",
                description: "Interested in renting the parish hall for your next event? Contact the parish office for availability and pricing.",
                phone: "514-321-3644"
            }
        },
        events: [
            {
                title: "Pentecost Vigil",
                date: "Saturday, May 23",
                time: "7:00 PM",
                location: "Église Sainte-Angèle",
                description: "Special Pentecost Vigil celebration at Sainte-Angèle Church.",
                notes: []
            },
            {
                title: "Forum International des Leaders Charismatiques 2026",
                date: "June 5 to June 7",
                time: "To be confirmed",
                location: "Cathédrale Marie-Reine-du-Monde",
                description: "International charismatic leadership gathering.",
                notes: [
                    "Bus transportation may be organized depending on participation after Mass on June 7. See the parish priest for more information."
                ]
            },
            {
                title: "Fête de Dieu",
                date: "June 7",
                time: "10:00 AM",
                location: "Église Sainte-Angèle",
                description: "Bilingual Mass celebration.",
                notes: [
                    "Procession in the parking lot to be confirmed."
                ]
            },
            {
                title: "Parish Garage Sale",
                date: "To be confirmed",
                time: "To be confirmed",
                location: "Église Sainte-Angèle",
                description: "Upcoming parish garage sale. More details to come.",
                notes: []
            },
            {
                title: "Fête de Marie",
                date: "Saturday, August 15",
                time: "To be confirmed",
                location: "Église Sainte-Angèle",
                description: "Celebration in honor of Mary.",
                notes: [
                    "Procession with the statue of Mary in the parking lot to be confirmed."
                ]
            }
        ],
        eventsPage: {
            eyebrow: "Parish events",
            title: "Parish events and activities",
            description: "Find upcoming parish activities, celebrations, and community gatherings at Sainte-Angèle.",
            calendar: {
                eyebrow: "Upcoming schedule",
                title: "Parish Activities",
                description: ""
            },
            labels: {
                date: "Date",
                time: "Time",
                location: "Location",
                notes: "Notes / confirmations"
            }
        },
        schedule: [
            {
                name: "Sunday Mass",
                time: "Sunday — 9:00 AM",
                description: "Italian"
            },
            {
                name: "Sunday Mass",
                time: "Sunday — 11:00 AM",
                description: "French"
            },
            {
                name: "Weekday Mass",
                time: "Monday — 7:00 PM",
                description: "Italian"
            },
            {
                name: "Weekday Mass",
                time: "Tuesday — 8:30 AM",
                description: "French"
            },
            {
                name: "Weekday Mass",
                time: "Wednesday — 7:00 PM",
                description: "Italian"
            },
            {
                name: "Weekday Mass",
                time: "Thursday — 8:30 AM",
                description: "French"
            },
            {
                name: "Weekday Mass",
                time: "Friday — 8:30 AM",
                description: "Italian"
            },
            {
                name: "Vigil Mass",
                time: "Saturday — 4:00 PM",
                description: "Italian"
            },
            {
                name: "Vigil Mass",
                time: "Saturday — 5:00 PM",
                description: "French"
            }
        ],
        sermons: {
            eyebrow: "Mass times and worship",
            title: "Weekly Mass schedule",
            description: "",
            schedule: {
                eyebrow: "Weekly rhythm",
                title: "Current service schedule",
                description: "The schedule below reflects the current weekly Mass times in Italian and French at Sainte-Angèle."
            }
        },
        volunteerRoles: [
            {
                title: "Event and fundraiser support",
                commitment: "Seasonal and ongoing",
                description: "Help prepare and support parish events, fundraising activities, and special community gatherings throughout the year.",
                detail: "A practical role for volunteers who enjoy helping behind the scenes."
            },
            {
                title: "Choir and music",
                commitment: "Weekly or seasonal",
                description: "Support liturgical celebrations, feast days, and parish gatherings through singing, music, and choir service.",
                detail: "Welcoming to experienced musicians and new volunteers alike."
            },
            {
                title: "Altar and liturgy support",
                commitment: "Scheduled rotation",
                description: "Assist with altar preparation, readings, prayer, and other practical needs connected to parish liturgies and celebrations.",
                detail: "A thoughtful way to serve the prayer life of the parish."
            },
            {
                title: "Hospitality and parish gatherings",
                commitment: "Flexible",
                description: "Help welcome parishioners, organize refreshments, and support parish dinners, receptions, and community gatherings.",
                detail: "Well suited for warm and dependable helpers."
            },
            {
                title: "Community support",
                commitment: "Monthly",
                description: "Offer practical support for parish needs, charitable efforts, and activities that strengthen the wider community.",
                detail: "A meaningful opportunity for service-minded parishioners."
            }
        ],
        volunteerPage: {
            eyebrow: "Serve with us",
            title: "Volunteer in parish life at Sainte-Angèle",
            description: "Volunteers help support parish life, community events, fundraising activities, liturgical celebrations, choir and music, and the practical needs of Sainte-Angèle Parish.",
            primaryCta: "Contact Maria Pia",
            roles: {
                eyebrow: "Volunteer opportunities",
                title: "Ways to help in the parish",
                description: "Discover some of the practical ways volunteers help support worship, community life, and parish activities."
            },
            contact: {
                eyebrow: "Volunteer Coordinator",
                title: "Volunteer Coordinator",
                description: "Interested in volunteering with Sainte-Angèle Parish? Volunteers help with parish events, community dinners, fundraising activities, hospitality, and other community initiatives throughout the year. Contact Maria Pia DeLuca for more information and current volunteer opportunities.",
                name: "Maria Pia DeLuca",
                phoneLabel: "Phone",
                phone: "514-323-9092",
                languagesLabel: "Languages",
                languages: "French, Italian"
            }
        },
        donate: {
            eyebrow: "Online giving",
            title: "Support Sainte-Angèle Parish",
            description: "Your generosity helps support parish life, liturgical celebrations, community activities, charitable outreach, and the ongoing care of our church facilities.",
            primaryCta: "Donate Through CanadaHelps",
            canadaHelpsUrl: "https://www.canadahelps.org/en/charities/fabrique-de-la-paroisse-de-ste-angele-de-merici-archidiocese/",
            support: {
                eyebrow: "Why Your Support Matters",
                title: "Why Your Support Matters",
                description: "",
                items: [
                    {
                        eyebrow: "Parish life",
                        title: "Parish Life",
                        description: "Donations help sustain liturgical celebrations, prayer, music, hospitality, and the daily life of the parish community."
                    },
                    {
                        eyebrow: "Community events",
                        title: "Community Events",
                        description: "Your support helps make possible parish dinners, seasonal celebrations, gatherings, and other activities that bring people together."
                    },
                    {
                        eyebrow: "Church maintenance",
                        title: "Church Maintenance",
                        description: "Gifts also help care for our church building and parish spaces so they remain welcoming, safe, and well maintained."
                    }
                ]
            },
            online: {
                eyebrow: "Online Donation",
                title: "Give securely through CanadaHelps",
                description: "Online donations to Sainte-Angèle Parish are securely processed through CanadaHelps.",
                cta: "Donate Through CanadaHelps"
            },
            receipt: {
                eyebrow: "Tax Receipt",
                title: "Official tax receipts",
                description: "Official tax receipts are issued through CanadaHelps."
            },
            contact: {
                eyebrow: "Parish Office",
                title: "Parish Office",
                description: "For questions about parish giving, please contact the parish office.",
                phone: "514-321-3644"
            }
        },
        contact: {
            eyebrow: "Get in touch",
            title: "Help visitors contact the church with confidence",
            description: "This page is intentionally simple and clear so newcomers can find the essentials quickly and know what to expect.",
            details: {
                eyebrow: "Church details",
                title: "Everything a first-time visitor needs",
                description: "Contact cards are a clean way to present the basics without overwhelming people."
            },
            cards: {
                address: {
                    title: "Address",
                    eyebrow: "Visit us"
                },
                phone: {
                    title: "Phone",
                    eyebrow: "Call the office"
                },
                email: {
                    title: "Email",
                    eyebrow: "Parish contact"
                },
                office: {
                    title: "Office hours",
                    eyebrow: "Plan ahead"
                }
            },
            visit: {
                eyebrow: "Before you come",
                title: "Helpful visiting notes",
                description: "Use this section later for parking, accessibility, public transit, children's ministry, or contact form instructions.",
                items: [
                    {
                        eyebrow: "Parking",
                        title: "Simple arrival",
                        description: "A placeholder note for nearby parking, entrance access, or drop-off information."
                    },
                    {
                        eyebrow: "Accessibility",
                        title: "Thoughtful access",
                        description: "A placeholder note for ramps, seating, hearing support, or other accommodations."
                    },
                    {
                        eyebrow: "Families",
                        title: "Welcoming atmosphere",
                        description: "A placeholder note for children, quiet spaces, and what family participation looks like."
                    },
                    {
                        eyebrow: "Questions",
                        title: "Friendly follow-up",
                        description: "A placeholder note for response time, office contact flow, or a future contact form."
                    }
                ]
            }
        }
    },
    fr: {
        site: {
            name: "Église Sainte-Angèle",
            address: "5275 Boulevard Lavoisier, Montréal, Québec",
            phone: "514-321-3644",
            email: "angelemerici@videotron.ca",
            officeHours: "Lundi : 13 h 00 – 17 h 00\nMardi : 13 h 00 – 17 h 00\nJeudi : 13 h 00 – 17 h 00",
            nextGathering: {
                day: "Messes du dimanche",
                time: "9 h (italien) • 11 h (français)"
            }
        },
        common: {
            donateNow: "Faire un don",
            planVisit: "Planifier une visite",
            learnMore: "En savoir plus",
            volunteerNow: "Devenir bénévole",
            contactTeam: "Contacter l'équipe",
            viewAllEvents: "Voir les événements",
            exploreSermons: "Voir les horaires",
            nextGathering: "Prochain rassemblement"
        },
        navigation: [
            {
                href: "",
                label: "Accueil"
            },
            {
                href: "/about",
                label: "À propos"
            },
            {
                href: "/location-de-salle",
                label: "Salle"
            },
            {
                href: "/team",
                label: "Équipe"
            },
            {
                href: "/events",
                label: "Événements"
            },
            {
                href: "/sermons",
                label: "Sermons"
            },
            {
                href: "/volunteer",
                label: "Bénévolat"
            },
            {
                href: "/donate",
                label: "Dons"
            },
            {
                href: "/contact",
                label: "Contact"
            }
        ],
        footer: {
            description: "L'Église Sainte-Angèle est une paroisse catholique chaleureuse de Saint-Léonard où le culte, la prière et la vie communautaire sont vécus dans une atmosphère paisible et accueillante.",
            contactHeading: "Coordonnées",
            linksHeading: "Découvrir",
            links: [
                {
                    href: "/about",
                    label: "Histoire de l'église"
                },
                {
                    href: "/location-de-salle",
                    label: "Location de salle"
                },
                {
                    href: "/events",
                    label: "Événements à venir"
                },
                {
                    href: "/sermons",
                    label: "Horaire des messes"
                },
                {
                    href: "/contact",
                    label: "Visiter la paroisse"
                }
            ]
        },
        home: {
            hero: {
                eyebrow: "Paroisse catholique romaine à Saint-Léonard",
                description: "L'Église Sainte-Angèle accueille les paroissiens, les voisins et les visiteurs dans un lieu paisible de prière, de culte et de vie communautaire. Rejoignez-nous pour la messe, le recueillement et une présence paroissiale chaleureuse enracinée dans la foi.",
                panelTitle: "Horaire des messes",
                image: {
                    src: "/home/hero-church.jpg",
                    alt: "Intérieur de l'église Sainte-Angèle"
                },
                actions: [
                    {
                        href: "/about",
                        label: "Découvrir la paroisse",
                        variant: "primary"
                    },
                    {
                        href: "/events",
                        label: "Événements à venir",
                        variant: "secondary"
                    },
                    {
                        href: "/contact",
                        label: "Contacter la paroisse",
                        variant: "secondary"
                    }
                ]
            },
            sections: {
                eyebrow: "Explorer",
                title: "Trouver sa place dans la vie paroissiale",
                description: "Découvrez la vie paroissiale, les événements à venir, les horaires des messes et les renseignements utiles pour visiter Sainte-Angèle.",
                cards: [
                    {
                        href: "/about",
                        title: "À propos",
                        description: "Lisez l'histoire de Sainte-Angèle et découvrez davantage la vie de la paroisse.",
                        image: {
                            src: "/home/about-thumb.jpg",
                            alt: "Vue chaleureuse de l'intérieur de l'église Sainte-Angèle"
                        }
                    },
                    {
                        href: "/events",
                        title: "Événements",
                        description: "Consultez les activités paroissiales à venir et les avis préparés pour la communauté.",
                        image: {
                            src: "/home/events-thumb.jpg",
                            alt: "Espace paroissial préparé pour une activité communautaire"
                        }
                    },
                    {
                        href: "/sermons",
                        title: "Horaires des célébrations",
                        description: "Retrouvez les horaires hebdomadaires des messes en italien et en français en un seul endroit.",
                        image: {
                            src: "/home/service-thumb.jpg",
                            alt: "Autel et espace liturgique de la paroisse Sainte-Angèle"
                        }
                    },
                    {
                        href: "/contact",
                        title: "Contact",
                        description: "Trouvez l'adresse de l'église, le numéro de téléphone et les détails pratiques pour votre visite.",
                        image: {
                            src: "/home/contact-thumb.jpg",
                            alt: "Entrée extérieure de la paroisse Sainte-Angèle"
                        }
                    }
                ]
            },
            events: {
                eyebrow: "Événements à venir",
                title: "Rassemblements paroissiaux en vedette",
                description: "",
                featured: {
                    eyebrow: "Événement vedette",
                    title: "Fête de Dieu",
                    date: "7 juin",
                    time: "Messe bilingue à 10 h",
                    description: "Joignez-vous à la paroisse pour une messe bilingue à Sainte-Angèle, avec une procession dans le stationnement à confirmer.",
                    cta: "Ouvrir la page des événements",
                    image: {
                        src: "/home/featured-event.jpg",
                        alt: "Image de célébration paroissiale pour l'événement vedette"
                    }
                }
            },
            schedule: {
                eyebrow: "Horaire des messes",
                title: "Messes hebdomadaires et horaires des célébrations",
                description: ""
            },
            volunteer: {
                eyebrow: "Servir ensemble",
                title: "Bénévolat et entraide dans la communauté",
                description: "Les paroissiens peuvent contribuer par la musique, l'accueil, les activités communautaires, les levées de fonds, l'entraide et d'autres formes de service tout au long de l'année."
            },
            donate: {
                eyebrow: "Donner avec intention",
                title: "Soutenir le culte, l'entraide et la présence dans le quartier",
                description: "Soutenez la vie paroissiale, les actions caritatives, les activités communautaires et la mission continue de la paroisse Sainte-Angèle."
            }
        },
        about: {
            eyebrow: "À propos de Sainte-Angèle",
            title: "Une paroisse enracinée dans la prière, la mémoire et le service fidèle",
            description: "La paroisse Sainte-Angèle sert la communauté de Saint-Léonard depuis 1962. Par la prière, la messe, les activités communautaires, le bénévolat et les initiatives caritatives, la paroisse continue d'accueillir des personnes de tous âges et de tous horizons.",
            story: {
                eyebrow: "Histoire de l'église",
                title: "Une présence paroissiale à Saint-Léonard depuis 1962",
                description: "",
                image: {
                    src: "/home/about-thumb.jpg",
                    alt: "Espace de rassemblement paroissial à Sainte-Angèle"
                },
                paragraphs: [
                    "Fondée en 1962 par le cardinal Paul-Émile Léger, la paroisse Sainte-Angèle a été établie pour servir la communauté catholique grandissante de Saint-Léonard. L'église, construite à la fin des années 1960, demeure aujourd'hui un important lieu de rassemblement spirituel et communautaire."
                ]
            },
            values: [
                {
                    eyebrow: "Foi",
                    title: "Prière et célébration",
                    description: "La messe, la prière et la vie liturgique de l'Église demeurent au cœur de la paroisse Sainte-Angèle tout au long de l'année."
                },
                {
                    eyebrow: "Communauté",
                    title: "Une communauté paroissiale active",
                    description: "Soupers paroissiaux, activités de financement, célébrations saisonnières, bénévolat, initiatives caritatives et rassemblements communautaires font vivre la paroisse au quotidien."
                },
                {
                    eyebrow: "Service",
                    title: "Foi, service et communauté",
                    description: "La vie paroissiale va au-delà de la messe grâce au bénévolat, aux soupers communautaires, aux activités de financement, à l'entraide et aux célébrations saisonnières."
                }
            ],
            expect: {
                eyebrow: "Préparer sa visite",
                title: "Ce que les visiteurs peuvent attendre",
                description: "",
                items: [
                    {
                        eyebrow: "Arrivée",
                        title: "Un accueil paisible",
                        description: "Les visiteurs sont accueillis dans un cadre calme et prière, propice au recueillement et au sentiment d'appartenance."
                    },
                    {
                        eyebrow: "Langues",
                        title: "Messes en italien et en français",
                        description: "La paroisse propose des horaires réguliers de messes en italien et en français pendant la semaine et la fin de semaine."
                    },
                    {
                        eyebrow: "Vie communautaire",
                        title: "Un rythme paroissial vivant",
                        description: "Les événements paroissiaux, le service bénévole, les soupers communautaires et les célébrations saisonnières font vivre une communauté chaleureuse."
                    }
                ]
            }
        },
        teamPage: {
            eyebrow: "Responsables paroissiaux",
            title: "Équipe paroissiale",
            description: "Découvrez les personnes qui contribuent au service et à la vie de la communauté paroissiale Sainte-Angèle.",
            placeholderLabel: "Photo à venir",
            sections: [
                {
                    id: "clergy",
                    eyebrow: "Clergé",
                    title: "Clergé",
                    description: "Le prêtre qui sert la paroisse par le culte, l'accompagnement pastoral et la vie communautaire.",
                    members: [
                        {
                            name: "Father Aleksander Dudik",
                            role: "Prêtre",
                            photo: "/team/father-aleksander-dudik.jpg"
                        }
                    ]
                },
                {
                    id: "administration",
                    eyebrow: "Administration",
                    title: "Administration",
                    description: "Les membres du personnel qui soutiennent la communication, la gestion et la vie quotidienne de la paroisse.",
                    members: [
                        {
                            name: "Sylvie Selesse",
                            role: "Secrétaire",
                            photo: "/team/placeholder.jpg"
                        },
                        {
                            name: "Andrea Manganelli",
                            role: "Trésorier",
                            photo: "/team/placeholder.jpg"
                        }
                    ]
                },
                {
                    id: "council",
                    eyebrow: "Conseil paroissial et pastoral",
                    title: "Conseil paroissial et pastoral",
                    description: "Les personnes qui contribuent à l'orientation de la mission, de la planification et de la vie pastorale de la paroisse.",
                    members: [
                        {
                            name: "Maria Pia DeLuca",
                            role: "Conseillère paroissiale",
                            photo: "/team/placeholder.jpg"
                        },
                        {
                            name: "Lina Saracino",
                            role: "Conseillère pastorale",
                            photo: "/team/placeholder.jpg"
                        }
                    ]
                },
                {
                    id: "wardens",
                    eyebrow: "Marguilliers",
                    title: "Marguilliers",
                    description: "Les marguilliers qui soutiennent l'administration pratique et la bonne gestion de la communauté paroissiale.",
                    members: [
                        {
                            name: "Carmela Pepe",
                            role: "Marguillière",
                            photo: "/team/carmela-pepe.jpg"
                        },
                        {
                            name: "Angelina Romano",
                            role: "Marguillière",
                            photo: "/team/placeholder.jpg"
                        },
                        {
                            name: "Lucie Corrente",
                            role: "Marguillière",
                            photo: "/team/lucie-corrente.jpg"
                        },
                        {
                            name: "Amide Fidèle",
                            role: "Marguillier",
                            photo: "/team/placeholder.jpg"
                        },
                        {
                            name: "Nick Sbarra",
                            role: "Marguillier",
                            photo: "/team/placeholder.jpg"
                        },
                        {
                            name: "Vincent Poulin",
                            role: "Marguillier",
                            photo: "/team/placeholder.jpg"
                        }
                    ]
                },
                {
                    id: "ministries",
                    eyebrow: "Ministères",
                    title: "Ministères",
                    description: "Les responsables de ministères qui enrichissent le culte et la participation paroissiale tout au long de l'année.",
                    members: [
                        {
                            name: "Jacquelin Deranne",
                            role: "Directrice de la chorale",
                            photo: "/team/placeholder.jpg"
                        }
                    ]
                }
            ]
        },
        hallRentalPage: {
            eyebrow: "Salle paroissiale",
            title: "Location de salle",
            description: "La paroisse Sainte-Angèle offre une salle qui peut être louée pour des événements privés et communautaires.",
            heroNote: "Disponible pour des événements privés et communautaires",
            placeholderLabel: "Photos à venir",
            heroImage: {
                src: "/hall/hall-1.jpg",
                alt: "Salle paroissiale Sainte-Angèle"
            },
            gallery: [
                {
                    src: "/hall/hall-1.jpg",
                    alt: "Vue générale de la salle paroissiale Sainte-Angèle"
                },
                {
                    src: "/hall/hall-2.jpg",
                    alt: "Aménagement pour événement dans la salle paroissiale Sainte-Angèle"
                },
                {
                    src: "/hall/hall-3.jpg",
                    alt: "Espace lumineux avec places assises dans la salle paroissiale Sainte-Angèle"
                },
                {
                    src: "/hall/hall-4.jpg",
                    alt: "Vue supplémentaire de la salle paroissiale Sainte-Angèle"
                },
                {
                    src: "/hall/hall-5.jpg",
                    alt: "Aménagement de la salle pour des rassemblements à Sainte-Angèle"
                }
            ],
            cards: {
                capacity: {
                    eyebrow: "Capacité",
                    title: "Jusqu'à 100 personnes",
                    description: "La salle peut accueillir jusqu’à 100 personnes."
                },
                suitable: {
                    eyebrow: "Convient pour",
                    title: "Événements privés et communautaires",
                    description: "La salle peut être utilisée pour des anniversaires, des baptêmes, des réunions familiales, des événements communautaires et d'autres rassemblements approuvés par la paroisse.",
                    items: [
                        "Anniversaires",
                        "Baptêmes",
                        "Réunions familiales",
                        "Événements communautaires",
                        "Autres événements approuvés par la paroisse"
                    ]
                },
                contact: {
                    eyebrow: "Contact",
                    title: "Réservations et renseignements",
                    description: "Pour connaître les disponibilités, les tarifs et les détails de réservation, veuillez communiquer avec le bureau de la paroisse.",
                    phoneLabel: "Téléphone",
                    phone: "514-321-3644"
                }
            },
            features: {
                eyebrow: "Caractéristiques de la salle",
                title: "Caractéristiques de la salle",
                items: [
                    "Capacité : Jusqu'à 100 personnes",
                    "Tables et chaises incluses",
                    "Espace avec scène disponible",
                    "Grande salle lumineuse avec de grandes fenêtres",
                    "Convient aux anniversaires, baptêmes, réunions familiales, événements communautaires et célébrations"
                ]
            },
            photosSection: {
                eyebrow: "Galerie",
                title: "Galerie de la salle",
                description: ""
            },
            cta: {
                eyebrow: "Contact",
                title: "Information pour la location de salle",
                description: "Vous souhaitez louer la salle paroissiale pour votre prochain événement? Communiquez avec le bureau de la paroisse pour connaître les disponibilités et les tarifs.",
                phone: "514-321-3644"
            }
        },
        events: [
            {
                title: "Veillée de la Pentecôte",
                date: "Samedi 23 mai",
                time: "19 h",
                location: "Église Sainte-Angèle",
                description: "Célébration spéciale de la vigile de la Pentecôte à l'Église Sainte-Angèle.",
                notes: []
            },
            {
                title: "Forum International des Leaders Charismatiques 2026",
                date: "Du 5 au 7 juin",
                time: "À confirmer",
                location: "Cathédrale Marie-Reine-du-Monde",
                description: "Rassemblement international des leaders charismatiques.",
                notes: [
                    "Le transport en autobus pourrait être organisé selon la participation après la messe du 7 juin. Voir le curé pour plus d'information."
                ]
            },
            {
                title: "Fête de Dieu",
                date: "7 juin",
                time: "10 h",
                location: "Église Sainte-Angèle",
                description: "Célébration d'une messe bilingue.",
                notes: [
                    "Procession dans le stationnement à confirmer."
                ]
            },
            {
                title: "Vente de garage paroissiale",
                date: "À confirmer",
                time: "À confirmer",
                location: "Église Sainte-Angèle",
                description: "Vente de garage paroissiale à venir. Plus de détails suivront.",
                notes: []
            },
            {
                title: "Fête de Marie",
                date: "Samedi 15 août",
                time: "À confirmer",
                location: "Église Sainte-Angèle",
                description: "Célébration en l'honneur de Marie.",
                notes: [
                    "Procession avec la statue de Marie dans le stationnement à confirmer."
                ]
            }
        ],
        eventsPage: {
            eyebrow: "Événements paroissiaux",
            title: "Événements et activités paroissiales",
            description: "Consultez les prochaines activités paroissiales, célébrations et rassemblements communautaires de Sainte-Angèle.",
            calendar: {
                eyebrow: "À venir",
                title: "Activités paroissiales",
                description: ""
            },
            labels: {
                date: "Date",
                time: "Heure",
                location: "Lieu",
                notes: "Notes / confirmations"
            },
            callout: {
                eyebrow: "Mises à jour manuelles",
                title: "Les événements peuvent être ajustés au fur et à mesure des confirmations",
                description: "Utilisez le fichier de contenu partagé pour modifier rapidement une date, une note, une procession ou un détail de transport.",
                cta: "Contacter la paroisse"
            }
        },
        schedule: [
            {
                name: "Messe du dimanche",
                time: "Dimanche — 9 h",
                description: "Italien"
            },
            {
                name: "Messe du dimanche",
                time: "Dimanche — 11 h",
                description: "Français"
            },
            {
                name: "Messe en semaine",
                time: "Lundi — 19 h",
                description: "Italien"
            },
            {
                name: "Messe en semaine",
                time: "Mardi — 8 h 30",
                description: "Français"
            },
            {
                name: "Messe en semaine",
                time: "Mercredi — 19 h",
                description: "Italien"
            },
            {
                name: "Messe en semaine",
                time: "Jeudi — 8 h 30",
                description: "Français"
            },
            {
                name: "Messe en semaine",
                time: "Vendredi — 8 h 30",
                description: "Italien"
            },
            {
                name: "Messe anticipée",
                time: "Samedi — 16 h",
                description: "Italien"
            },
            {
                name: "Messe anticipée",
                time: "Samedi — 17 h",
                description: "Français"
            }
        ],
        sermons: {
            eyebrow: "Horaires des messes et culte",
            title: "Horaire hebdomadaire des messes",
            description: "",
            schedule: {
                eyebrow: "Rythme hebdomadaire",
                title: "Horaire actuel des célébrations",
                description: "L'horaire ci-dessous reflète les heures actuelles des messes hebdomadaires en italien et en français à Sainte-Angèle."
            },
            library: {
                eyebrow: "Notes paroissiales",
                title: "Espace pour de futures mises à jour pastorales",
                description: "Ces espaces réservés peuvent plus tard accueillir des résumés d'homélies, des réflexions saisonnières ou des avis liturgiques importants.",
                items: [
                    {
                        eyebrow: "Espace réservé",
                        title: "Notes d'homélie du dimanche",
                        description: "Utilisez cet espace plus tard pour de courts résumés, des points de réflexion ou des messages clés du curé.",
                        detail: "Contenu modifiable"
                    },
                    {
                        eyebrow: "Espace réservé",
                        title: "Mises à jour liturgiques saisonnières",
                        description: "Un endroit flexible pour les notes de fêtes, les initiatives de prière ou les rappels de célébrations particulières.",
                        detail: "Contenu modifiable"
                    },
                    {
                        eyebrow: "Espace réservé",
                        title: "Archives de réflexion paroissiale",
                        description: "Réservez cette carte pour des notes d'homélies archivées, des réflexions pastorales ou des ressources de foi.",
                        detail: "Contenu modifiable"
                    }
                ]
            }
        },
        volunteerRoles: [
            {
                title: "Soutien aux événements et collectes de fonds",
                commitment: "Selon la saison et toute l'année",
                description: "Aidez à préparer et à soutenir les événements paroissiaux, les activités de financement et les rassemblements communautaires tout au long de l'année.",
                detail: "Un rôle pratique pour les bénévoles qui aiment aider en coulisses."
            },
            {
                title: "Chorale et musique",
                commitment: "Chaque semaine ou selon la saison",
                description: "Soutenez les célébrations liturgiques, les fêtes et les rassemblements paroissiaux par le chant, la musique et le service de la chorale.",
                detail: "Convient aux musiciens d'expérience comme aux nouveaux bénévoles."
            },
            {
                title: "Soutien à l’autel et à la liturgie",
                commitment: "Rotation planifiée",
                description: "Aidez à la préparation de l'autel, aux lectures, à la prière et aux autres besoins pratiques liés aux liturgies et célébrations paroissiales.",
                detail: "Une belle façon de servir la vie de prière de la paroisse."
            },
            {
                title: "Accueil et rassemblements paroissiaux",
                commitment: "Flexible",
                description: "Aidez à accueillir les paroissiens, à organiser les rafraîchissements et à soutenir les soupers paroissiaux, réceptions et rassemblements communautaires.",
                detail: "Parfait pour des personnes chaleureuses et fiables."
            },
            {
                title: "Soutien à la communauté",
                commitment: "Chaque mois",
                description: "Offrez un soutien concret aux besoins paroissiaux, aux œuvres de charité et aux activités qui renforcent la communauté au sens large.",
                detail: "Une occasion de service significative pour les paroissiens engagés."
            }
        ],
        volunteerPage: {
            eyebrow: "Servir avec nous",
            title: "Faire du bénévolat dans la vie paroissiale de Sainte-Angèle",
            description: "Les bénévoles soutiennent la vie paroissiale, les activités communautaires, les collectes de fonds, les célébrations liturgiques, la chorale et la musique, ainsi que les besoins pratiques de la paroisse Sainte-Angèle.",
            primaryCta: "Contacter Maria Pia",
            roles: {
                eyebrow: "Possibilités de bénévolat",
                title: "Façons d'aider dans la paroisse",
                description: "Découvrez quelques-unes des façons concrètes dont les bénévoles soutiennent le culte, la vie communautaire et les activités paroissiales."
            },
            contact: {
                eyebrow: "Coordonnatrice du bénévolat",
                title: "Coordonnatrice du bénévolat",
                description: "Vous souhaitez faire du bénévolat à la paroisse Sainte-Angèle? Les bénévoles aident lors des événements paroissiaux, des soupers communautaires, des activités de financement, de l'accueil et d'autres initiatives communautaires tout au long de l'année. Communiquez avec Maria Pia DeLuca pour plus d'information et pour connaître les possibilités de bénévolat actuelles.",
                name: "Maria Pia DeLuca",
                phoneLabel: "Téléphone",
                phone: "514-323-9092",
                languagesLabel: "Langues",
                languages: "Français, italien"
            }
        },
        donate: {
            eyebrow: "Don en ligne",
            title: "Soutenir la paroisse Sainte-Angèle",
            description: "Votre générosité aide à soutenir la vie paroissiale, les célébrations liturgiques, les activités communautaires, les œuvres de charité et l'entretien continu de nos installations.",
            primaryCta: "Donner par CanadaHelps",
            canadaHelpsUrl: "https://www.canadahelps.org/en/charities/fabrique-de-la-paroisse-de-ste-angele-de-merici-archidiocese/",
            support: {
                eyebrow: "Pourquoi votre soutien est important",
                title: "Pourquoi votre soutien est important",
                description: "",
                items: [
                    {
                        eyebrow: "Vie paroissiale",
                        title: "Vie paroissiale",
                        description: "Les dons soutiennent les célébrations liturgiques, la prière, la musique, l'accueil et la vie quotidienne de la communauté paroissiale."
                    },
                    {
                        eyebrow: "Activités communautaires",
                        title: "Activités communautaires",
                        description: "Votre soutien aide à rendre possibles les soupers paroissiaux, les célébrations saisonnières, les rassemblements et les activités qui unissent la communauté."
                    },
                    {
                        eyebrow: "Entretien de l'église",
                        title: "Entretien de l'église",
                        description: "Les contributions aident aussi à prendre soin de l'église et des espaces paroissiaux afin qu'ils demeurent accueillants, sécuritaires et bien entretenus."
                    }
                ]
            },
            online: {
                eyebrow: "Don en ligne",
                title: "Don sécurisé par CanadaHelps",
                description: "Les dons en ligne à la paroisse Sainte-Angèle sont traités de façon sécurisée par CanadaHelps.",
                cta: "Donner par CanadaHelps"
            },
            receipt: {
                eyebrow: "Reçu fiscal",
                title: "Reçus fiscaux officiels",
                description: "Les reçus fiscaux officiels sont émis par CanadaHelps."
            },
            contact: {
                eyebrow: "Bureau paroissial",
                title: "Bureau paroissial",
                description: "Pour toute question au sujet des dons à la paroisse, veuillez communiquer avec le bureau paroissial.",
                phone: "514-321-3644"
            }
        },
        contact: {
            eyebrow: "Nous joindre",
            title: "Aider les visiteurs à contacter l'église simplement",
            description: "Cette page reste volontairement sobre et claire afin que les nouveaux venus trouvent rapidement l'essentiel.",
            details: {
                eyebrow: "Informations",
                title: "Tout ce qu'il faut pour une première visite",
                description: "Les cartes de contact présentent les bases avec clarté, sans surcharger la page."
            },
            cards: {
                address: {
                    title: "Adresse",
                    eyebrow: "Venir à l'église"
                },
                phone: {
                    title: "Téléphone",
                    eyebrow: "Appeler le bureau"
                },
                email: {
                    title: "Courriel",
                    eyebrow: "Contact paroissial"
                },
                office: {
                    title: "Heures du bureau",
                    eyebrow: "Planifier"
                }
            },
            visit: {
                eyebrow: "Avant de venir",
                title: "Quelques repères utiles",
                description: "Utilisez cette section plus tard pour le stationnement, l'accessibilité, le transport, les enfants ou un formulaire de contact.",
                items: [
                    {
                        eyebrow: "Stationnement",
                        title: "Une arrivée simple",
                        description: "Une note provisoire pour le stationnement à proximité, l'entrée principale ou le débarcadère."
                    },
                    {
                        eyebrow: "Accessibilité",
                        title: "Un accès attentif",
                        description: "Une note provisoire pour les rampes, les places adaptées, l'aide auditive ou d'autres besoins."
                    },
                    {
                        eyebrow: "Familles",
                        title: "Une atmosphère accueillante",
                        description: "Une note provisoire sur la place des enfants, les espaces calmes et la participation en famille."
                    },
                    {
                        eyebrow: "Questions",
                        title: "Un suivi bienveillant",
                        description: "Une note provisoire sur le délai de réponse, l'accueil au bureau ou un futur formulaire."
                    }
                ]
            }
        }
    },
    it: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$site$2d$content$2d$it$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["itContent"]
};
}),
"[project]/lib/i18n.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildLocalizedHref",
    ()=>buildLocalizedHref,
    "generateLocaleParams",
    ()=>generateLocaleParams,
    "getDictionary",
    ()=>getDictionary,
    "isLocale",
    ()=>isLocale,
    "locales",
    ()=>locales,
    "localizePath",
    ()=>localizePath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$site$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/site-content.ts [app-rsc] (ecmascript)");
;
const locales = [
    "en",
    "fr",
    "it"
];
const localizedPathMap = {
    hallRental: {
        en: "/hall-rental",
        fr: "/location-de-salle",
        it: "/hall-rental"
    }
};
function isLocale(value) {
    return locales.includes(value);
}
function generateLocaleParams() {
    return locales.map((lang)=>({
            lang
        }));
}
function localizePath(pathname, locale) {
    if (pathname === localizedPathMap.hallRental.en || pathname === localizedPathMap.hallRental.fr) {
        return localizedPathMap.hallRental[locale];
    }
    return pathname;
}
function buildLocalizedHref(pathname, locale) {
    const normalizedPath = pathname || "/";
    const localizedSubPath = localizePath(normalizedPath, locale);
    return localizedSubPath === "/" ? `/${locale}` : `/${locale}${localizedSubPath}`;
}
function getDictionary(locale) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$site$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteContent"][locale];
}
}),
"[project]/components/site-footer.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteFooter",
    ()=>SiteFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-rsc] (ecmascript)");
;
;
;
function SiteFooter({ lang, dictionary }) {
    const { footer, site } = dictionary;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "mt-14 border-t border-[rgba(109,79,61,0.1)] bg-[rgba(255,249,242,0.82)]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "site-shell grid gap-8 py-10 lg:grid-cols-[1.1fr_0.9fr]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-3xl text-[var(--wood-deep)]",
                            children: site.name
                        }, void 0, false, {
                            fileName: "[project]/components/site-footer.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "max-w-xl text-sm leading-7 text-[var(--muted)]",
                            children: footer.description
                        }, void 0, false, {
                            fileName: "[project]/components/site-footer.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-[var(--muted)]",
                            children: site.address
                        }, void 0, false, {
                            fileName: "[project]/components/site-footer.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/site-footer.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 text-sm text-[var(--muted)] sm:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold uppercase tracking-[0.14em] text-[var(--wood-soft)]",
                                    children: footer.contactHeading
                                }, void 0, false, {
                                    fileName: "[project]/components/site-footer.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: site.phone
                                }, void 0, false, {
                                    fileName: "[project]/components/site-footer.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: site.email
                                }, void 0, false, {
                                    fileName: "[project]/components/site-footer.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: site.officeHours
                                }, void 0, false, {
                                    fileName: "[project]/components/site-footer.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/site-footer.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold uppercase tracking-[0.14em] text-[var(--wood-soft)]",
                                    children: footer.linksHeading
                                }, void 0, false, {
                                    fileName: "[project]/components/site-footer.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this),
                                footer.links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildLocalizedHref"])(link.href || "/", lang),
                                        className: "block hover:text-[var(--wood)]",
                                        children: link.label
                                    }, link.href, false, {
                                        fileName: "[project]/components/site-footer.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/site-footer.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/site-footer.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/site-footer.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/site-footer.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/site-header.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteHeader",
    ()=>SiteHeader
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const SiteHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SiteHeader() from the server but SiteHeader is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/site-header.tsx <module evaluation>", "SiteHeader");
}),
"[project]/components/site-header.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteHeader",
    ()=>SiteHeader
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const SiteHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SiteHeader() from the server but SiteHeader is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/site-header.tsx", "SiteHeader");
}),
"[project]/components/site-header.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2d$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/site-header.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2d$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/site-header.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2d$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/lib/page-metadata.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildPageMetadata",
    ()=>buildPageMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-rsc] (ecmascript)");
;
function buildPageMetadata({ lang, pathname, title, description }) {
    const siteName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDictionary"])(lang).site.name;
    const languages = Object.fromEntries(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locales"].map((locale)=>[
            locale,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildLocalizedHref"])(pathname, locale)
        ]));
    return {
        title: `${title} | ${siteName}`,
        description,
        alternates: {
            canonical: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildLocalizedHref"])(pathname, lang),
            languages
        }
    };
}
}),
"[project]/app/[lang]/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LocaleLayout,
    "dynamicParams",
    ()=>dynamicParams,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2d$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/site-footer.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2d$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/site-header.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$page$2d$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/page-metadata.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
function generateStaticParams() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateLocaleParams"])();
}
const dynamicParams = false;
async function generateMetadata({ params }) {
    const { lang } = await params;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isLocale"])(lang)) {
        return {};
    }
    const dictionary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDictionary"])(lang);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$page$2d$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildPageMetadata"])({
        lang,
        pathname: "/",
        title: dictionary.site.name,
        description: dictionary.footer.description
    });
}
async function LocaleLayout({ children, params }) {
    const { lang } = await params;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isLocale"])(lang)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const dictionary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDictionary"])(lang);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2d$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SiteHeader"], {
                lang: lang,
                dictionary: dictionary
            }, void 0, false, {
                fileName: "[project]/app/[lang]/layout.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "pb-20 pt-6 sm:pt-8",
                children: children
            }, void 0, false, {
                fileName: "[project]/app/[lang]/layout.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2d$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SiteFooter"], {
                lang: lang,
                dictionary: dictionary
            }, void 0, false, {
                fileName: "[project]/app/[lang]/layout.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/app/[lang]/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/[lang]/layout.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=_0q7gvmf._.js.map