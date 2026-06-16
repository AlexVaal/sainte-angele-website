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
                title: "Festa di Maria",
                date: "Sabato 15 agosto 2026",
                time: "Da confermare",
                description: "Unitevi a noi per celebrare la Festa di Maria con un momento di preghiera, comunità e una speciale processione mariana. Tutti sono benvenuti.",
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
            title: "Festa di Maria",
            date: "Sabato 15 agosto 2026",
            time: "Da confermare",
            location: "Église Sainte-Angèle",
            description: "Unitevi a noi per celebrare la Festa di Maria con un momento di preghiera, comunità e una speciale processione mariana. Tutti sono benvenuti.",
            notes: []
        },
        {
            title: "Vendita di garage parrocchiale",
            date: "To be confirmed",
            time: "To be confirmed",
            location: "Église Sainte-Angèle",
            description: "Prossima vendita di garage parrocchiale. Maggiori dettagli seguiranno.",
            notes: []
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
                    title: "Fête de Marie",
                    date: "Saturday, August 15, 2026",
                    time: "To be confirmed",
                    description: "Join us as we celebrate the Feast of Mary with prayer, community, and a special Marian procession. All parishioners and visitors are welcome.",
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
                title: "Fête de Marie",
                date: "Saturday, August 15, 2026",
                time: "To be confirmed",
                location: "Église Sainte-Angèle",
                description: "Join us as we celebrate the Feast of Mary with prayer, community, and a special Marian procession. All parishioners and visitors are welcome.",
                notes: []
            },
            {
                title: "Parish Garage Sale",
                date: "To be confirmed",
                time: "To be confirmed",
                location: "Église Sainte-Angèle",
                description: "Upcoming parish garage sale. More details to come.",
                notes: []
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
                    title: "Fête de Marie",
                    date: "Samedi 15 août 2026",
                    time: "À confirmer",
                    description: "Joignez-vous à nous pour célébrer la Fête de Marie avec un temps de prière, de rassemblement et une procession mariale spéciale. Tous sont les bienvenus.",
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
                title: "Fête de Marie",
                date: "Samedi 15 août 2026",
                time: "À confirmer",
                location: "Église Sainte-Angèle",
                description: "Joignez-vous à nous pour célébrer la Fête de Marie avec un temps de prière, de rassemblement et une procession mariale spéciale. Tous sont les bienvenus.",
                notes: []
            },
            {
                title: "Vente de garage paroissiale",
                date: "À confirmer",
                time: "À confirmer",
                location: "Église Sainte-Angèle",
                description: "Vente de garage paroissiale à venir. Plus de détails suivront.",
                notes: []
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
"[project]/node_modules/next/dist/client/components/readonly-url-search-params.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * ReadonlyURLSearchParams implementation shared between client and server.
 * This file is intentionally not marked as 'use client' or 'use server'
 * so it can be imported by both environments.
 */ /** @internal */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReadonlyURLSearchParams", {
    enumerable: true,
    get: function() {
        return ReadonlyURLSearchParams;
    }
});
class ReadonlyURLSearchParamsError extends Error {
    constructor(){
        super('Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams');
    }
}
class ReadonlyURLSearchParams extends URLSearchParams {
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ append() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ delete() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ set() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ sort() {
        throw new ReadonlyURLSearchParamsError();
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/redirect-status-code.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RedirectStatusCode", {
    enumerable: true,
    get: function() {
        return RedirectStatusCode;
    }
});
var RedirectStatusCode = /*#__PURE__*/ function(RedirectStatusCode) {
    RedirectStatusCode[RedirectStatusCode["SeeOther"] = 303] = "SeeOther";
    RedirectStatusCode[RedirectStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    RedirectStatusCode[RedirectStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
    return RedirectStatusCode;
}({});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/redirect-error.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    REDIRECT_ERROR_CODE: null,
    isRedirectError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    REDIRECT_ERROR_CODE: function() {
        return REDIRECT_ERROR_CODE;
    },
    isRedirectError: function() {
        return isRedirectError;
    }
});
const _redirectstatuscode = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/redirect-status-code.js [app-rsc] (ecmascript)");
const REDIRECT_ERROR_CODE = 'NEXT_REDIRECT';
function isRedirectError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const digest = error.digest.split(';');
    const [errorCode, type] = digest;
    const destination = digest.slice(2, -2).join(';');
    const status = digest.at(-2);
    const statusCode = Number(status);
    return errorCode === REDIRECT_ERROR_CODE && (type === 'replace' || type === 'push') && typeof destination === 'string' && !isNaN(statusCode) && statusCode in _redirectstatuscode.RedirectStatusCode;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/redirect.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getRedirectError: null,
    getRedirectStatusCodeFromError: null,
    getRedirectTypeFromError: null,
    getURLFromRedirectError: null,
    permanentRedirect: null,
    redirect: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getRedirectError: function() {
        return getRedirectError;
    },
    getRedirectStatusCodeFromError: function() {
        return getRedirectStatusCodeFromError;
    },
    getRedirectTypeFromError: function() {
        return getRedirectTypeFromError;
    },
    getURLFromRedirectError: function() {
        return getURLFromRedirectError;
    },
    permanentRedirect: function() {
        return permanentRedirect;
    },
    redirect: function() {
        return redirect;
    }
});
const _redirectstatuscode = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/redirect-status-code.js [app-rsc] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/redirect-error.js [app-rsc] (ecmascript)");
const actionAsyncStorage = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)").actionAsyncStorage : "TURBOPACK unreachable";
function getRedirectError(url, type, statusCode = _redirectstatuscode.RedirectStatusCode.TemporaryRedirect) {
    const error = Object.defineProperty(new Error(_redirecterror.REDIRECT_ERROR_CODE), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = `${_redirecterror.REDIRECT_ERROR_CODE};${type};${url};${statusCode};`;
    return error;
}
function redirect(/** The URL to redirect to */ url, type) {
    type ??= actionAsyncStorage?.getStore()?.isAction ? 'push' : 'replace';
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.TemporaryRedirect);
}
function permanentRedirect(/** The URL to redirect to */ url, type = 'replace') {
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.PermanentRedirect);
}
function getURLFromRedirectError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) return null;
    // Slices off the beginning of the digest that contains the code and the
    // separating ';'.
    return error.digest.split(';').slice(2, -2).join(';');
}
function getRedirectTypeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false,
            configurable: true
        });
    }
    return error.digest.split(';', 2)[1];
}
function getRedirectStatusCodeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false,
            configurable: true
        });
    }
    return Number(error.digest.split(';').at(-2));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    HTTPAccessErrorStatus: null,
    HTTP_ERROR_FALLBACK_ERROR_CODE: null,
    getAccessFallbackErrorTypeByStatus: null,
    getAccessFallbackHTTPStatus: null,
    isHTTPAccessFallbackError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HTTPAccessErrorStatus: function() {
        return HTTPAccessErrorStatus;
    },
    HTTP_ERROR_FALLBACK_ERROR_CODE: function() {
        return HTTP_ERROR_FALLBACK_ERROR_CODE;
    },
    getAccessFallbackErrorTypeByStatus: function() {
        return getAccessFallbackErrorTypeByStatus;
    },
    getAccessFallbackHTTPStatus: function() {
        return getAccessFallbackHTTPStatus;
    },
    isHTTPAccessFallbackError: function() {
        return isHTTPAccessFallbackError;
    }
});
const HTTPAccessErrorStatus = {
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    UNAUTHORIZED: 401
};
const ALLOWED_CODES = new Set(Object.values(HTTPAccessErrorStatus));
const HTTP_ERROR_FALLBACK_ERROR_CODE = 'NEXT_HTTP_ERROR_FALLBACK';
function isHTTPAccessFallbackError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const [prefix, httpStatus] = error.digest.split(';');
    return prefix === HTTP_ERROR_FALLBACK_ERROR_CODE && ALLOWED_CODES.has(Number(httpStatus));
}
function getAccessFallbackHTTPStatus(error) {
    const httpStatus = error.digest.split(';')[1];
    return Number(httpStatus);
}
function getAccessFallbackErrorTypeByStatus(status) {
    switch(status){
        case 401:
            return 'unauthorized';
        case 403:
            return 'forbidden';
        case 404:
            return 'not-found';
        default:
            return;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/not-found.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "notFound", {
    enumerable: true,
    get: function() {
        return notFound;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-rsc] (ecmascript)");
/**
 * This function allows you to render the [not-found.js file](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)
 * within a route segment as well as inject a tag.
 *
 * `notFound()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * - In a Server Component, this will insert a `<meta name="robots" content="noindex" />` meta tag and set the status code to 404.
 * - In a Route Handler or Server Action, it will serve a 404 to the caller.
 *
 * Read more: [Next.js Docs: `notFound`](https://nextjs.org/docs/app/api-reference/functions/not-found)
 */ const DIGEST = `${_httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE};404`;
function notFound() {
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E1041",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/forbidden.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "forbidden", {
    enumerable: true,
    get: function() {
        return forbidden;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-rsc] (ecmascript)");
// TODO: Add `forbidden` docs
/**
 * @experimental
 * This function allows you to render the [forbidden.js file](https://nextjs.org/docs/app/api-reference/file-conventions/forbidden)
 * within a route segment as well as inject a tag.
 *
 * `forbidden()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * Read more: [Next.js Docs: `forbidden`](https://nextjs.org/docs/app/api-reference/functions/forbidden)
 */ const DIGEST = `${_httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE};403`;
function forbidden() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error(`\`forbidden()\` is experimental and only allowed to be enabled when \`experimental.authInterrupts\` is enabled.`), "__NEXT_ERROR_CODE", {
            value: "E488",
            enumerable: false,
            configurable: true
        });
    }
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E1019",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/unauthorized.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unauthorized", {
    enumerable: true,
    get: function() {
        return unauthorized;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-rsc] (ecmascript)");
// TODO: Add `unauthorized` docs
/**
 * @experimental
 * This function allows you to render the [unauthorized.js file](https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized)
 * within a route segment as well as inject a tag.
 *
 * `unauthorized()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 *
 * Read more: [Next.js Docs: `unauthorized`](https://nextjs.org/docs/app/api-reference/functions/unauthorized)
 */ const DIGEST = `${_httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE};401`;
function unauthorized() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error(`\`unauthorized()\` is experimental and only allowed to be used when \`experimental.authInterrupts\` is enabled.`), "__NEXT_ERROR_CODE", {
            value: "E411",
            enumerable: false,
            configurable: true
        });
    }
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E1002",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/shared/lib/invariant-error.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "InvariantError", {
    enumerable: true,
    get: function() {
        return InvariantError;
    }
});
class InvariantError extends Error {
    constructor(message, options){
        super(`Invariant: ${message.endsWith('.') ? message : message + '.'} This is a bug in Next.js.`, options);
        this.name = 'InvariantError';
    }
}
}),
"[project]/node_modules/next/dist/shared/lib/promise-with-resolvers.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createPromiseWithResolvers", {
    enumerable: true,
    get: function() {
        return createPromiseWithResolvers;
    }
});
function createPromiseWithResolvers() {
    // Shim of Stage 4 Promise.withResolvers proposal
    let resolve;
    let reject;
    const promise = new Promise((res, rej)=>{
        resolve = res;
        reject = rej;
    });
    return {
        resolve: resolve,
        reject: reject,
        promise
    };
}
}),
"[project]/node_modules/next/dist/server/app-render/staged-rendering.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RenderStage: null,
    StagedRenderingController: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RenderStage: function() {
        return RenderStage;
    },
    StagedRenderingController: function() {
        return StagedRenderingController;
    }
});
const _invarianterror = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
const _promisewithresolvers = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/promise-with-resolvers.js [app-rsc] (ecmascript)");
var RenderStage = /*#__PURE__*/ function(RenderStage) {
    RenderStage[RenderStage["Before"] = 1] = "Before";
    RenderStage[RenderStage["EarlyStatic"] = 2] = "EarlyStatic";
    RenderStage[RenderStage["Static"] = 3] = "Static";
    RenderStage[RenderStage["EarlyRuntime"] = 4] = "EarlyRuntime";
    RenderStage[RenderStage["Runtime"] = 5] = "Runtime";
    RenderStage[RenderStage["Dynamic"] = 6] = "Dynamic";
    RenderStage[RenderStage["Abandoned"] = 7] = "Abandoned";
    return RenderStage;
}({});
class StagedRenderingController {
    constructor(abortSignal, abandonController, shouldTrackSyncIO){
        this.abortSignal = abortSignal;
        this.abandonController = abandonController;
        this.shouldTrackSyncIO = shouldTrackSyncIO;
        this.currentStage = 1;
        this.syncInterruptReason = null;
        this.staticStageEndTime = Infinity;
        this.runtimeStageEndTime = Infinity;
        this.staticStageListeners = [];
        this.earlyRuntimeStageListeners = [];
        this.runtimeStageListeners = [];
        this.dynamicStageListeners = [];
        this.staticStagePromise = (0, _promisewithresolvers.createPromiseWithResolvers)();
        this.earlyRuntimeStagePromise = (0, _promisewithresolvers.createPromiseWithResolvers)();
        this.runtimeStagePromise = (0, _promisewithresolvers.createPromiseWithResolvers)();
        this.dynamicStagePromise = (0, _promisewithresolvers.createPromiseWithResolvers)();
        if (abortSignal) {
            abortSignal.addEventListener('abort', ()=>{
                // Reject all stage promises that haven't already been resolved.
                // If a promise was already resolved via advanceStage, the reject
                // is a no-op. The ignoreReject handler suppresses unhandled
                // rejection warnings for promises that no one is awaiting.
                const { reason } = abortSignal;
                this.staticStagePromise.promise.catch(ignoreReject);
                this.staticStagePromise.reject(reason);
                this.earlyRuntimeStagePromise.promise.catch(ignoreReject);
                this.earlyRuntimeStagePromise.reject(reason);
                this.runtimeStagePromise.promise.catch(ignoreReject);
                this.runtimeStagePromise.reject(reason);
                this.dynamicStagePromise.promise.catch(ignoreReject);
                this.dynamicStagePromise.reject(reason);
            }, {
                once: true
            });
        }
        if (abandonController) {
            abandonController.signal.addEventListener('abort', ()=>{
                this.abandonRender();
            }, {
                once: true
            });
        }
    }
    onStage(stage, callback) {
        if (this.currentStage >= stage) {
            callback();
        } else if (stage === 3) {
            this.staticStageListeners.push(callback);
        } else if (stage === 4) {
            this.earlyRuntimeStageListeners.push(callback);
        } else if (stage === 5) {
            this.runtimeStageListeners.push(callback);
        } else if (stage === 6) {
            this.dynamicStageListeners.push(callback);
        } else {
            // This should never happen
            throw Object.defineProperty(new _invarianterror.InvariantError(`Invalid render stage: ${stage}`), "__NEXT_ERROR_CODE", {
                value: "E881",
                enumerable: false,
                configurable: true
            });
        }
    }
    shouldTrackSyncInterrupt() {
        if (!this.shouldTrackSyncIO) {
            return false;
        }
        switch(this.currentStage){
            case 1:
                // If we haven't started the render yet, it can't be interrupted.
                return false;
            case 2:
            case 3:
                return true;
            case 4:
                // EarlyRuntime is for runtime-prefetchable segments. Sync IO
                // should error because it would abort a runtime prefetch.
                return true;
            case 5:
                // Runtime is for non-prefetchable segments. Sync IO is fine there
                // because in practice this segment will never be runtime prefetched
                return false;
            case 6:
            case 7:
                return false;
            default:
                return false;
        }
    }
    syncInterruptCurrentStageWithReason(reason) {
        if (this.currentStage === 1) {
            return;
        }
        // If the render has already been abandoned, there's nothing to interrupt.
        if (this.currentStage === 7) {
            return;
        }
        // If Sync IO occurs during an abandonable render, we trigger the abandon.
        // The abandon listener will call abandonRender which advances through
        // stages to let caches fill before marking as Abandoned.
        if (this.abandonController) {
            this.abandonController.abort();
            return;
        }
        if (this.abortSignal) {
            // If this is an abortable render, we capture the interruption reason and stop advancing.
            // We don't release any more promises.
            // The caller is expected to abort the signal.
            this.syncInterruptReason = reason;
            this.currentStage = 7;
            return;
        }
        // If we're in a non-abandonable & non-abortable render,
        // we need to advance to the Dynamic stage and capture the interruption reason.
        // (in dev, this will be the restarted render)
        switch(this.currentStage){
            case 2:
            case 3:
            case 4:
                {
                    // EarlyRuntime is for runtime-prefetchable segments. Sync IO here
                    // means the prefetch would be aborted too early.
                    this.syncInterruptReason = reason;
                    this.advanceStage(6);
                    return;
                }
            case 5:
                {
                    // canSyncInterrupt returns false for Runtime, so we should
                    // never get here. Defensive no-op.
                    return;
                }
            case 6:
            default:
        }
    }
    getSyncInterruptReason() {
        return this.syncInterruptReason;
    }
    getStaticStageEndTime() {
        return this.staticStageEndTime;
    }
    getRuntimeStageEndTime() {
        return this.runtimeStageEndTime;
    }
    abandonRender() {
        // In staged rendering, only the initial render is abandonable.
        // We can abandon the initial render if
        //   1. We notice a cache miss, and need to wait for caches to fill
        //   2. A sync IO error occurs, and the render should be interrupted
        //      (this might be a lazy intitialization of a module,
        //       so we still want to restart in this case and see if it still occurs)
        // In either case, we'll be doing another render after this one,
        // so we only want to unblock the next stage, not Dynamic, because
        // unblocking the dynamic stage would likely lead to wasted (uncached) IO.
        const { currentStage } = this;
        switch(currentStage){
            case 2:
                {
                    this.resolveStaticStage();
                }
            // intentional fallthrough
            case 3:
                {
                    this.resolveEarlyRuntimeStage();
                }
            // intentional fallthrough
            case 4:
                {
                    this.resolveRuntimeStage();
                }
            // intentional fallthrough
            case 5:
                {
                    this.currentStage = 7;
                    return;
                }
            case 6:
            case 1:
            case 7:
                break;
            default:
                {
                    currentStage;
                }
        }
    }
    advanceStage(stage) {
        // If we're already at the target stage or beyond, do nothing.
        // (this can happen e.g. if sync IO advanced us to the dynamic stage)
        if (stage <= this.currentStage) {
            return;
        }
        let currentStage = this.currentStage;
        this.currentStage = stage;
        if (currentStage < 3 && stage >= 3) {
            this.resolveStaticStage();
        }
        if (currentStage < 4 && stage >= 4) {
            this.resolveEarlyRuntimeStage();
        }
        if (currentStage < 5 && stage >= 5) {
            this.staticStageEndTime = performance.now() + performance.timeOrigin;
            this.resolveRuntimeStage();
        }
        if (currentStage < 6 && stage >= 6) {
            this.runtimeStageEndTime = performance.now() + performance.timeOrigin;
            this.resolveDynamicStage();
            return;
        }
    }
    /** Fire the `onStage` listeners for the static stage and unblock any promises waiting for it. */ resolveStaticStage() {
        const staticListeners = this.staticStageListeners;
        for(let i = 0; i < staticListeners.length; i++){
            staticListeners[i]();
        }
        staticListeners.length = 0;
        this.staticStagePromise.resolve();
    }
    /** Fire the `onStage` listeners for the early runtime stage and unblock any promises waiting for it. */ resolveEarlyRuntimeStage() {
        const earlyRuntimeListeners = this.earlyRuntimeStageListeners;
        for(let i = 0; i < earlyRuntimeListeners.length; i++){
            earlyRuntimeListeners[i]();
        }
        earlyRuntimeListeners.length = 0;
        this.earlyRuntimeStagePromise.resolve();
    }
    /** Fire the `onStage` listeners for the runtime stage and unblock any promises waiting for it. */ resolveRuntimeStage() {
        const runtimeListeners = this.runtimeStageListeners;
        for(let i = 0; i < runtimeListeners.length; i++){
            runtimeListeners[i]();
        }
        runtimeListeners.length = 0;
        this.runtimeStagePromise.resolve();
    }
    /** Fire the `onStage` listeners for the dynamic stage and unblock any promises waiting for it. */ resolveDynamicStage() {
        const dynamicListeners = this.dynamicStageListeners;
        for(let i = 0; i < dynamicListeners.length; i++){
            dynamicListeners[i]();
        }
        dynamicListeners.length = 0;
        this.dynamicStagePromise.resolve();
    }
    getStagePromise(stage) {
        switch(stage){
            case 3:
                {
                    return this.staticStagePromise.promise;
                }
            case 4:
                {
                    return this.earlyRuntimeStagePromise.promise;
                }
            case 5:
                {
                    return this.runtimeStagePromise.promise;
                }
            case 6:
                {
                    return this.dynamicStagePromise.promise;
                }
            default:
                {
                    stage;
                    throw Object.defineProperty(new _invarianterror.InvariantError(`Invalid render stage: ${stage}`), "__NEXT_ERROR_CODE", {
                        value: "E881",
                        enumerable: false,
                        configurable: true
                    });
                }
        }
    }
    waitForStage(stage) {
        return this.getStagePromise(stage);
    }
    delayUntilStage(stage, displayName, resolvedValue) {
        const ioTriggerPromise = this.getStagePromise(stage);
        const promise = makeDevtoolsIOPromiseFromIOTrigger(ioTriggerPromise, displayName, resolvedValue);
        // Analogously to `makeHangingPromise`, we might reject this promise if the signal is invoked.
        // (e.g. in the case where we don't want want the render to proceed to the dynamic stage and abort it).
        // We shouldn't consider this an unhandled rejection, so we attach a noop catch handler here to suppress this warning.
        if (this.abortSignal) {
            promise.catch(ignoreReject);
        }
        return promise;
    }
}
function ignoreReject() {}
// TODO(restart-on-cache-miss): the layering of `delayUntilStage`,
// `makeDevtoolsIOPromiseFromIOTrigger` and and `makeDevtoolsIOAwarePromise`
// is confusing, we should clean it up.
function makeDevtoolsIOPromiseFromIOTrigger(ioTrigger, displayName, resolvedValue) {
    // If we create a `new Promise` and give it a displayName
    // (with no userspace code above us in the stack)
    // React Devtools will use it as the IO cause when determining "suspended by".
    // In particular, it should shadow any inner IO that resolved/rejected the promise
    // (in case of staged rendering, this will be the `setTimeout` that triggers the relevant stage)
    const promise = new Promise((resolve, reject)=>{
        ioTrigger.then(resolve.bind(null, resolvedValue), reject);
    });
    if (displayName !== undefined) {
        // @ts-expect-error
        promise.displayName = displayName;
    }
    return promise;
}
}),
"[project]/node_modules/next/dist/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    delayUntilRuntimeStage: null,
    getRuntimeStage: null,
    isHangingPromiseRejectionError: null,
    makeDevtoolsIOAwarePromise: null,
    makeHangingPromise: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    delayUntilRuntimeStage: function() {
        return delayUntilRuntimeStage;
    },
    getRuntimeStage: function() {
        return getRuntimeStage;
    },
    isHangingPromiseRejectionError: function() {
        return isHangingPromiseRejectionError;
    },
    makeDevtoolsIOAwarePromise: function() {
        return makeDevtoolsIOAwarePromise;
    },
    makeHangingPromise: function() {
        return makeHangingPromise;
    }
});
const _stagedrendering = __turbopack_context__.r("[project]/node_modules/next/dist/server/app-render/staged-rendering.js [app-rsc] (ecmascript)");
function isHangingPromiseRejectionError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === HANGING_PROMISE_REJECTION;
}
const HANGING_PROMISE_REJECTION = 'HANGING_PROMISE_REJECTION';
class HangingPromiseRejectionError extends Error {
    constructor(route, expression){
        super(`During prerendering, ${expression} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${expression} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${route}".`), this.route = route, this.expression = expression, this.digest = HANGING_PROMISE_REJECTION;
    }
}
const abortListenersBySignal = new WeakMap();
function makeHangingPromise(signal, route, expression) {
    if (signal.aborted) {
        return Promise.reject(new HangingPromiseRejectionError(route, expression));
    } else {
        const hangingPromise = new Promise((_, reject)=>{
            const boundRejection = reject.bind(null, new HangingPromiseRejectionError(route, expression));
            let currentListeners = abortListenersBySignal.get(signal);
            if (currentListeners) {
                currentListeners.push(boundRejection);
            } else {
                const listeners = [
                    boundRejection
                ];
                abortListenersBySignal.set(signal, listeners);
                signal.addEventListener('abort', ()=>{
                    for(let i = 0; i < listeners.length; i++){
                        listeners[i]();
                    }
                }, {
                    once: true
                });
            }
        });
        // We are fine if no one actually awaits this promise. We shouldn't consider this an unhandled rejection so
        // we attach a noop catch handler here to suppress this warning. If you actually await somewhere or construct
        // your own promise out of it you'll need to ensure you handle the error when it rejects.
        hangingPromise.catch(ignoreReject);
        return hangingPromise;
    }
}
function ignoreReject() {}
function makeDevtoolsIOAwarePromise(underlying, requestStore, stage) {
    if (requestStore.stagedRendering) {
        // We resolve each stage in a timeout, so React DevTools will pick this up as IO.
        return requestStore.stagedRendering.delayUntilStage(stage, undefined, underlying);
    }
    // in React DevTools if we resolve in a setTimeout we will observe
    // the promise resolution as something that can suspend a boundary or root.
    return new Promise((resolve)=>{
        // Must use setTimeout to be considered IO React DevTools. setImmediate will not work.
        setTimeout(()=>{
            resolve(underlying);
        }, 0);
    });
}
function getRuntimeStage(stagedRendering) {
    if (stagedRendering.currentStage === _stagedrendering.RenderStage.EarlyStatic || stagedRendering.currentStage === _stagedrendering.RenderStage.EarlyRuntime) {
        return _stagedrendering.RenderStage.EarlyRuntime;
    }
    return _stagedrendering.RenderStage.Runtime;
}
function delayUntilRuntimeStage(prerenderStore, result) {
    const { stagedRendering } = prerenderStore;
    if (!stagedRendering) {
        return result;
    }
    return stagedRendering.waitForStage(getRuntimeStage(stagedRendering)).then(()=>result);
}
}),
"[project]/node_modules/next/dist/server/lib/router-utils/is-postpone.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isPostpone", {
    enumerable: true,
    get: function() {
        return isPostpone;
    }
});
const REACT_POSTPONE_TYPE = Symbol.for('react.postpone');
function isPostpone(error) {
    return typeof error === 'object' && error !== null && error.$$typeof === REACT_POSTPONE_TYPE;
}
}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This has to be a shared module which is shared between client component error boundary and dynamic component
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    BailoutToCSRError: null,
    isBailoutToCSRError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BailoutToCSRError: function() {
        return BailoutToCSRError;
    },
    isBailoutToCSRError: function() {
        return isBailoutToCSRError;
    }
});
const BAILOUT_TO_CSR = 'BAILOUT_TO_CLIENT_SIDE_RENDERING';
class BailoutToCSRError extends Error {
    constructor(reason){
        super(`Bail out to client-side rendering: ${reason}`), this.reason = reason, this.digest = BAILOUT_TO_CSR;
    }
}
function isBailoutToCSRError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === BAILOUT_TO_CSR;
}
}),
"[project]/node_modules/next/dist/client/components/is-next-router-error.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isNextRouterError", {
    enumerable: true,
    get: function() {
        return isNextRouterError;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-rsc] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/redirect-error.js [app-rsc] (ecmascript)");
function isNextRouterError(error) {
    return (0, _redirecterror.isRedirectError)(error) || (0, _httpaccessfallback.isHTTPAccessFallbackError)(error);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/hooks-server-context.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DynamicServerError: null,
    isDynamicServerError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DynamicServerError: function() {
        return DynamicServerError;
    },
    isDynamicServerError: function() {
        return isDynamicServerError;
    }
});
const DYNAMIC_ERROR_CODE = 'DYNAMIC_SERVER_USAGE';
class DynamicServerError extends Error {
    constructor(description){
        super(`Dynamic server usage: ${description}`), this.description = description, this.digest = DYNAMIC_ERROR_CODE;
    }
}
function isDynamicServerError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err) || typeof err.digest !== 'string') {
        return false;
    }
    return err.digest === DYNAMIC_ERROR_CODE;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/static-generation-bailout.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    StaticGenBailoutError: null,
    isStaticGenBailoutError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    StaticGenBailoutError: function() {
        return StaticGenBailoutError;
    },
    isStaticGenBailoutError: function() {
        return isStaticGenBailoutError;
    }
});
const NEXT_STATIC_GEN_BAILOUT = 'NEXT_STATIC_GEN_BAILOUT';
class StaticGenBailoutError extends Error {
    constructor(...args){
        super(...args), this.code = NEXT_STATIC_GEN_BAILOUT;
    }
}
function isStaticGenBailoutError(error) {
    if (typeof error !== 'object' || error === null || !('code' in error)) {
        return false;
    }
    return error.code === NEXT_STATIC_GEN_BAILOUT;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/lib/framework/boundary-constants.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    METADATA_BOUNDARY_NAME: null,
    OUTLET_BOUNDARY_NAME: null,
    ROOT_LAYOUT_BOUNDARY_NAME: null,
    VIEWPORT_BOUNDARY_NAME: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    METADATA_BOUNDARY_NAME: function() {
        return METADATA_BOUNDARY_NAME;
    },
    OUTLET_BOUNDARY_NAME: function() {
        return OUTLET_BOUNDARY_NAME;
    },
    ROOT_LAYOUT_BOUNDARY_NAME: function() {
        return ROOT_LAYOUT_BOUNDARY_NAME;
    },
    VIEWPORT_BOUNDARY_NAME: function() {
        return VIEWPORT_BOUNDARY_NAME;
    }
});
const METADATA_BOUNDARY_NAME = '__next_metadata_boundary__';
const VIEWPORT_BOUNDARY_NAME = '__next_viewport_boundary__';
const OUTLET_BOUNDARY_NAME = '__next_outlet_boundary__';
const ROOT_LAYOUT_BOUNDARY_NAME = '__next_root_layout_boundary__';
}),
"[project]/node_modules/next/dist/lib/scheduler.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    atLeastOneTask: null,
    scheduleImmediate: null,
    scheduleOnNextTick: null,
    waitAtLeastOneReactRenderTask: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    atLeastOneTask: function() {
        return atLeastOneTask;
    },
    scheduleImmediate: function() {
        return scheduleImmediate;
    },
    scheduleOnNextTick: function() {
        return scheduleOnNextTick;
    },
    waitAtLeastOneReactRenderTask: function() {
        return waitAtLeastOneReactRenderTask;
    }
});
const scheduleOnNextTick = (cb)=>{
    // We use Promise.resolve().then() here so that the operation is scheduled at
    // the end of the promise job queue, we then add it to the next process tick
    // to ensure it's evaluated afterwards.
    //
    // This was inspired by the implementation of the DataLoader interface: https://github.com/graphql/dataloader/blob/d336bd15282664e0be4b4a657cb796f09bafbc6b/src/index.js#L213-L255
    //
    Promise.resolve().then(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            process.nextTick(cb);
        }
    });
};
const scheduleImmediate = (cb)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        setImmediate(cb);
    }
};
function atLeastOneTask() {
    return new Promise((resolve)=>scheduleImmediate(resolve));
}
function waitAtLeastOneReactRenderTask() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return new Promise((r)=>setImmediate(r));
    }
}
}),
"[project]/node_modules/next/dist/server/app-render/instant-validation/boundary-constants.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "INSTANT_VALIDATION_BOUNDARY_NAME", {
    enumerable: true,
    get: function() {
        return INSTANT_VALIDATION_BOUNDARY_NAME;
    }
});
const INSTANT_VALIDATION_BOUNDARY_NAME = '__next_instant_validation_boundary__';
}),
"[project]/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * The functions provided by this module are used to communicate certain properties
 * about the currently running code so that Next.js can make decisions on how to handle
 * the current execution in different rendering modes such as pre-rendering, resuming, and SSR.
 *
 * Today Next.js treats all code as potentially static. Certain APIs may only make sense when dynamically rendering.
 * Traditionally this meant deopting the entire render to dynamic however with PPR we can now deopt parts
 * of a React tree as dynamic while still keeping other parts static. There are really two different kinds of
 * Dynamic indications.
 *
 * The first is simply an intention to be dynamic. unstable_noStore is an example of this where
 * the currently executing code simply declares that the current scope is dynamic but if you use it
 * inside unstable_cache it can still be cached. This type of indication can be removed if we ever
 * make the default dynamic to begin with because the only way you would ever be static is inside
 * a cache scope which this indication does not affect.
 *
 * The second is an indication that a dynamic data source was read. This is a stronger form of dynamic
 * because it means that it is inappropriate to cache this at all. using a dynamic data source inside
 * unstable_cache should error. If you want to use some dynamic data inside unstable_cache you should
 * read that data outside the cache and pass it in as an argument to the cached function.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DynamicHoleKind: null,
    Postpone: null,
    PreludeState: null,
    abortAndThrowOnSynchronousRequestDataAccess: null,
    abortOnSynchronousPlatformIOAccess: null,
    accessedDynamicData: null,
    annotateDynamicAccess: null,
    consumeDynamicAccess: null,
    createDynamicTrackingState: null,
    createDynamicValidationState: null,
    createHangingInputAbortSignal: null,
    createInstantValidationState: null,
    createRenderInBrowserAbortSignal: null,
    formatDynamicAPIAccesses: null,
    getFirstDynamicReason: null,
    getNavigationDisallowedDynamicReasons: null,
    getStaticShellDisallowedDynamicReasons: null,
    isDynamicPostpone: null,
    isPrerenderInterruptedError: null,
    logDisallowedDynamicError: null,
    markCurrentScopeAsDynamic: null,
    postponeWithTracking: null,
    throwIfDisallowedDynamic: null,
    throwToInterruptStaticGeneration: null,
    trackAllowedDynamicAccess: null,
    trackDynamicDataInDynamicRender: null,
    trackDynamicHoleInNavigation: null,
    trackDynamicHoleInRuntimeShell: null,
    trackDynamicHoleInStaticShell: null,
    trackThrownErrorInNavigation: null,
    useDynamicRouteParams: null,
    useDynamicSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DynamicHoleKind: function() {
        return DynamicHoleKind;
    },
    Postpone: function() {
        return Postpone;
    },
    PreludeState: function() {
        return PreludeState;
    },
    abortAndThrowOnSynchronousRequestDataAccess: function() {
        return abortAndThrowOnSynchronousRequestDataAccess;
    },
    abortOnSynchronousPlatformIOAccess: function() {
        return abortOnSynchronousPlatformIOAccess;
    },
    accessedDynamicData: function() {
        return accessedDynamicData;
    },
    annotateDynamicAccess: function() {
        return annotateDynamicAccess;
    },
    consumeDynamicAccess: function() {
        return consumeDynamicAccess;
    },
    createDynamicTrackingState: function() {
        return createDynamicTrackingState;
    },
    createDynamicValidationState: function() {
        return createDynamicValidationState;
    },
    createHangingInputAbortSignal: function() {
        return createHangingInputAbortSignal;
    },
    createInstantValidationState: function() {
        return createInstantValidationState;
    },
    createRenderInBrowserAbortSignal: function() {
        return createRenderInBrowserAbortSignal;
    },
    formatDynamicAPIAccesses: function() {
        return formatDynamicAPIAccesses;
    },
    getFirstDynamicReason: function() {
        return getFirstDynamicReason;
    },
    getNavigationDisallowedDynamicReasons: function() {
        return getNavigationDisallowedDynamicReasons;
    },
    getStaticShellDisallowedDynamicReasons: function() {
        return getStaticShellDisallowedDynamicReasons;
    },
    isDynamicPostpone: function() {
        return isDynamicPostpone;
    },
    isPrerenderInterruptedError: function() {
        return isPrerenderInterruptedError;
    },
    logDisallowedDynamicError: function() {
        return logDisallowedDynamicError;
    },
    markCurrentScopeAsDynamic: function() {
        return markCurrentScopeAsDynamic;
    },
    postponeWithTracking: function() {
        return postponeWithTracking;
    },
    throwIfDisallowedDynamic: function() {
        return throwIfDisallowedDynamic;
    },
    throwToInterruptStaticGeneration: function() {
        return throwToInterruptStaticGeneration;
    },
    trackAllowedDynamicAccess: function() {
        return trackAllowedDynamicAccess;
    },
    trackDynamicDataInDynamicRender: function() {
        return trackDynamicDataInDynamicRender;
    },
    trackDynamicHoleInNavigation: function() {
        return trackDynamicHoleInNavigation;
    },
    trackDynamicHoleInRuntimeShell: function() {
        return trackDynamicHoleInRuntimeShell;
    },
    trackDynamicHoleInStaticShell: function() {
        return trackDynamicHoleInStaticShell;
    },
    trackThrownErrorInNavigation: function() {
        return trackThrownErrorInNavigation;
    },
    useDynamicRouteParams: function() {
        return useDynamicRouteParams;
    },
    useDynamicSearchParams: function() {
        return useDynamicSearchParams;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)"));
const _hooksservercontext = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/hooks-server-context.js [app-rsc] (ecmascript)");
const _staticgenerationbailout = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/static-generation-bailout.js [app-rsc] (ecmascript)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _dynamicrenderingutils = __turbopack_context__.r("[project]/node_modules/next/dist/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)");
const _boundaryconstants = __turbopack_context__.r("[project]/node_modules/next/dist/lib/framework/boundary-constants.js [app-rsc] (ecmascript)");
const _scheduler = __turbopack_context__.r("[project]/node_modules/next/dist/lib/scheduler.js [app-rsc] (ecmascript)");
const _bailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-rsc] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
const _boundaryconstants1 = __turbopack_context__.r("[project]/node_modules/next/dist/server/app-render/instant-validation/boundary-constants.js [app-rsc] (ecmascript)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const hasPostpone = typeof _react.default.unstable_postpone === 'function';
function createDynamicTrackingState(isDebugDynamicAccesses) {
    return {
        isDebugDynamicAccesses,
        dynamicAccesses: [],
        syncDynamicErrorWithStack: null
    };
}
function createDynamicValidationState() {
    return {
        hasSuspenseAboveBody: false,
        hasDynamicMetadata: false,
        dynamicMetadata: null,
        hasDynamicViewport: false,
        hasAllowedDynamic: false,
        dynamicErrors: []
    };
}
function getFirstDynamicReason(trackingState) {
    var _trackingState_dynamicAccesses_;
    return (_trackingState_dynamicAccesses_ = trackingState.dynamicAccesses[0]) == null ? void 0 : _trackingState_dynamicAccesses_.expression;
}
function markCurrentScopeAsDynamic(store, workUnitStore, expression) {
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'cache':
            case 'unstable-cache':
                // Inside cache scopes, marking a scope as dynamic has no effect,
                // because the outer cache scope creates a cache boundary. This is
                // subtly different from reading a dynamic data source, which is
                // forbidden inside a cache scope.
                return;
            case 'private-cache':
                // A private cache scope is already dynamic by definition.
                return;
            case 'prerender-legacy':
            case 'prerender-ppr':
            case 'request':
            case 'generate-static-params':
                break;
            default:
                workUnitStore;
        }
    }
    // If we're forcing dynamic rendering or we're forcing static rendering, we
    // don't need to do anything here because the entire page is already dynamic
    // or it's static and it should not throw or postpone here.
    if (store.forceDynamic || store.forceStatic) return;
    if (store.dynamicShouldError) {
        throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
            value: "E553",
            enumerable: false,
            configurable: true
        });
    }
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender-ppr':
                return postponeWithTracking(store.route, expression, workUnitStore.dynamicTracking);
            case 'prerender-legacy':
                workUnitStore.revalidate = 0;
                // We aren't prerendering, but we are generating a static page. We need
                // to bail out of static generation.
                const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
                    value: "E550",
                    enumerable: false,
                    configurable: true
                });
                store.dynamicUsageDescription = expression;
                store.dynamicUsageStack = err.stack;
                throw err;
            case 'request':
                if ("TURBOPACK compile-time truthy", 1) {
                    workUnitStore.usedDynamic = true;
                }
                break;
            case 'generate-static-params':
                break;
            default:
                workUnitStore;
        }
    }
}
function throwToInterruptStaticGeneration(expression, store, prerenderStore) {
    // We aren't prerendering but we are generating a static page. We need to bail out of static generation
    const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
        value: "E558",
        enumerable: false,
        configurable: true
    });
    prerenderStore.revalidate = 0;
    store.dynamicUsageDescription = expression;
    store.dynamicUsageStack = err.stack;
    throw err;
}
function trackDynamicDataInDynamicRender(workUnitStore) {
    switch(workUnitStore.type){
        case 'cache':
        case 'unstable-cache':
            // Inside cache scopes, marking a scope as dynamic has no effect,
            // because the outer cache scope creates a cache boundary. This is
            // subtly different from reading a dynamic data source, which is
            // forbidden inside a cache scope.
            return;
        case 'private-cache':
            // A private cache scope is already dynamic by definition.
            return;
        case 'prerender':
        case 'prerender-runtime':
        case 'prerender-legacy':
        case 'prerender-ppr':
        case 'prerender-client':
        case 'validation-client':
        case 'generate-static-params':
            break;
        case 'request':
            if ("TURBOPACK compile-time truthy", 1) {
                workUnitStore.usedDynamic = true;
            }
            break;
        default:
            workUnitStore;
    }
}
function abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore) {
    const reason = `Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`;
    const error = createPrerenderInterruptedError(reason);
    prerenderStore.controller.abort(error);
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function abortOnSynchronousPlatformIOAccess(route, expression, errorWithStack, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
    // It is important that we set this tracking value after aborting. Aborts are executed
    // synchronously except for the case where you abort during render itself. By setting this
    // value late we can use it to determine if any of the aborted tasks are the task that
    // called the sync IO expression in the first place.
    if (dynamicTracking) {
        if (dynamicTracking.syncDynamicErrorWithStack === null) {
            dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
        }
    }
}
function abortAndThrowOnSynchronousRequestDataAccess(route, expression, errorWithStack, prerenderStore) {
    const prerenderSignal = prerenderStore.controller.signal;
    if (prerenderSignal.aborted === false) {
        // TODO it would be better to move this aborted check into the callsite so we can avoid making
        // the error object when it isn't relevant to the aborting of the prerender however
        // since we need the throw semantics regardless of whether we abort it is easier to land
        // this way. See how this was handled with `abortOnSynchronousPlatformIOAccess` for a closer
        // to ideal implementation
        abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
        // It is important that we set this tracking value after aborting. Aborts are executed
        // synchronously except for the case where you abort during render itself. By setting this
        // value late we can use it to determine if any of the aborted tasks are the task that
        // called the sync IO expression in the first place.
        const dynamicTracking = prerenderStore.dynamicTracking;
        if (dynamicTracking) {
            if (dynamicTracking.syncDynamicErrorWithStack === null) {
                dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
            }
        }
    }
    throw createPrerenderInterruptedError(`Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`);
}
function Postpone({ reason, route }) {
    const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    const dynamicTracking = prerenderStore && prerenderStore.type === 'prerender-ppr' ? prerenderStore.dynamicTracking : null;
    postponeWithTracking(route, reason, dynamicTracking);
}
function postponeWithTracking(route, expression, dynamicTracking) {
    assertPostpone();
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
    _react.default.unstable_postpone(createPostponeReason(route, expression));
}
function createPostponeReason(route, expression) {
    return `Route ${route} needs to bail out of prerendering at this point because it used ${expression}. ` + `React throws this special object to indicate where. It should not be caught by ` + `your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
}
function isDynamicPostpone(err) {
    if (typeof err === 'object' && err !== null && typeof err.message === 'string') {
        return isDynamicPostponeReason(err.message);
    }
    return false;
}
function isDynamicPostponeReason(reason) {
    return reason.includes('needs to bail out of prerendering at this point because it used') && reason.includes('Learn more: https://nextjs.org/docs/messages/ppr-caught-error');
}
if (isDynamicPostponeReason(createPostponeReason('%%%', '^^^')) === false) {
    throw Object.defineProperty(new Error('Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js'), "__NEXT_ERROR_CODE", {
        value: "E296",
        enumerable: false,
        configurable: true
    });
}
const NEXT_PRERENDER_INTERRUPTED = 'NEXT_PRERENDER_INTERRUPTED';
function createPrerenderInterruptedError(message) {
    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = NEXT_PRERENDER_INTERRUPTED;
    return error;
}
function isPrerenderInterruptedError(error) {
    return typeof error === 'object' && error !== null && error.digest === NEXT_PRERENDER_INTERRUPTED && 'name' in error && 'message' in error && error instanceof Error;
}
function accessedDynamicData(dynamicAccesses) {
    return dynamicAccesses.length > 0;
}
function consumeDynamicAccess(serverDynamic, clientDynamic) {
    // We mutate because we only call this once we are no longer writing
    // to the dynamicTrackingState and it's more efficient than creating a new
    // array.
    serverDynamic.dynamicAccesses.push(...clientDynamic.dynamicAccesses);
    return serverDynamic.dynamicAccesses;
}
function formatDynamicAPIAccesses(dynamicAccesses) {
    return dynamicAccesses.filter((access)=>typeof access.stack === 'string' && access.stack.length > 0).map(({ expression, stack })=>{
        stack = stack.split('\n') // Remove the "Error: " prefix from the first line of the stack trace as
        // well as the first 4 lines of the stack trace which is the distance
        // from the user code and the `new Error().stack` call.
        .slice(4).filter((line)=>{
            // Exclude Next.js internals from the stack trace.
            if (line.includes('node_modules/next/')) {
                return false;
            }
            // Exclude anonymous functions from the stack trace.
            if (line.includes(' (<anonymous>)')) {
                return false;
            }
            // Exclude Node.js internals from the stack trace.
            if (line.includes(' (node:')) {
                return false;
            }
            return true;
        }).join('\n');
        return `Dynamic API Usage Debug - ${expression}:\n${stack}`;
    });
}
function assertPostpone() {
    if (!hasPostpone) {
        throw Object.defineProperty(new Error(`Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js`), "__NEXT_ERROR_CODE", {
            value: "E224",
            enumerable: false,
            configurable: true
        });
    }
}
function createRenderInBrowserAbortSignal() {
    const controller = new AbortController();
    controller.abort(Object.defineProperty(new _bailouttocsr.BailoutToCSRError('Render in Browser'), "__NEXT_ERROR_CODE", {
        value: "E721",
        enumerable: false,
        configurable: true
    }));
    return controller.signal;
}
function createHangingInputAbortSignal(workUnitStore) {
    switch(workUnitStore.type){
        case 'prerender':
        case 'prerender-runtime':
            const controller = new AbortController();
            if (workUnitStore.cacheSignal) {
                // If we have a cacheSignal it means we're in a prospective render. If
                // the input we're waiting on is coming from another cache, we do want
                // to wait for it so that we can resolve this cache entry too.
                workUnitStore.cacheSignal.inputReady().then(()=>{
                    controller.abort();
                });
            } else {
                // Otherwise we're in the final render and we should already have all
                // our caches filled.
                // If the prerender uses stages, we have wait until the runtime stage,
                // at which point all runtime inputs will be resolved.
                // (otherwise, a runtime prerender might consider `cookies()` hanging
                //  even though they'd resolve in the next task.)
                //
                // We might still be waiting on some microtasks so we
                // wait one tick before giving up. When we give up, we still want to
                // render the content of this cache as deeply as we can so that we can
                // suspend as deeply as possible in the tree or not at all if we don't
                // end up waiting for the input.
                if (workUnitStore.type === 'prerender-runtime' && workUnitStore.stagedRendering) {
                    const { stagedRendering } = workUnitStore;
                    stagedRendering.waitForStage((0, _dynamicrenderingutils.getRuntimeStage)(stagedRendering)).then(()=>(0, _scheduler.scheduleOnNextTick)(()=>controller.abort()));
                } else {
                    (0, _scheduler.scheduleOnNextTick)(()=>controller.abort());
                }
            }
            return controller.signal;
        case 'prerender-client':
        case 'validation-client':
        case 'prerender-ppr':
        case 'prerender-legacy':
        case 'request':
        case 'cache':
        case 'private-cache':
        case 'unstable-cache':
        case 'generate-static-params':
            return undefined;
        default:
            workUnitStore;
    }
}
function annotateDynamicAccess(expression, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function useDynamicRouteParams(expression) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workStore && workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender-client':
            case 'prerender':
                {
                    const fallbackParams = workUnitStore.fallbackRouteParams;
                    if (fallbackParams && fallbackParams.size > 0) {
                        // We are in a prerender with cacheComponents semantics. We are going to
                        // hang here and never resolve. This will cause the currently
                        // rendering component to effectively be a dynamic hole.
                        _react.default.use((0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, expression));
                    }
                    break;
                }
            case 'prerender-ppr':
                {
                    const fallbackParams = workUnitStore.fallbackRouteParams;
                    if (fallbackParams && fallbackParams.size > 0) {
                        return postponeWithTracking(workStore.route, expression, workUnitStore.dynamicTracking);
                    }
                    break;
                }
            case 'validation-client':
                {
                    break;
                }
            case 'prerender-runtime':
                throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called during a runtime prerender. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                    value: "E771",
                    enumerable: false,
                    configurable: true
                });
            case 'cache':
            case 'private-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called inside a cache scope. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                    value: "E745",
                    enumerable: false,
                    configurable: true
                });
            case 'generate-static-params':
                throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called in \`generateStaticParams\`. Next.js should be preventing ${expression} from being included in server component files statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                    value: "E1130",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-legacy':
            case 'request':
            case 'unstable-cache':
                break;
            default:
                workUnitStore;
        }
    }
}
function useDynamicSearchParams(expression) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (!workStore) {
        // We assume pages router context and just return
        return;
    }
    if (!workUnitStore) {
        (0, _workunitasyncstorageexternal.throwForMissingRequestStore)(expression);
    }
    switch(workUnitStore.type){
        case 'validation-client':
            // During instant validation we try to behave as close to client as possible,
            // so this shouldn't hang during SSR.
            return;
        case 'prerender-client':
            {
                _react.default.use((0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, expression));
                break;
            }
        case 'prerender-legacy':
        case 'prerender-ppr':
            {
                if (workStore.forceStatic) {
                    return;
                }
                throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(expression), "__NEXT_ERROR_CODE", {
                    value: "E394",
                    enumerable: false,
                    configurable: true
                });
            }
        case 'prerender':
        case 'prerender-runtime':
            throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called from a Server Component. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                value: "E795",
                enumerable: false,
                configurable: true
            });
        case 'cache':
        case 'unstable-cache':
        case 'private-cache':
            throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called inside a cache scope. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                value: "E745",
                enumerable: false,
                configurable: true
            });
        case 'generate-static-params':
            throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called in \`generateStaticParams\`. Next.js should be preventing ${expression} from being included in server component files statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                value: "E1130",
                enumerable: false,
                configurable: true
            });
        case 'request':
            return;
        default:
            workUnitStore;
    }
}
const hasSuspenseRegex = /\n\s+at Suspense \(<anonymous>\)/;
// Common implicit body tags that React will treat as body when placed directly in html
const bodyAndImplicitTags = 'body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6';
// Detects when RootLayoutBoundary (our framework marker component) appears
// after Suspense in the component stack, indicating the root layout is wrapped
// within a Suspense boundary. Ensures no body/html/implicit-body components are in between.
//
// Example matches:
//   at Suspense (<anonymous>)
//   at __next_root_layout_boundary__ (<anonymous>)
//
// Or with other components in between (but not body/html/implicit-body):
//   at Suspense (<anonymous>)
//   at SomeComponent (<anonymous>)
//   at __next_root_layout_boundary__ (<anonymous>)
const hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex = new RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:${bodyAndImplicitTags}) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at ${_boundaryconstants.ROOT_LAYOUT_BOUNDARY_NAME} \\([^\\n]*\\)`);
const hasMetadataRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.METADATA_BOUNDARY_NAME}[\\n\\s]`);
const hasViewportRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`);
const hasOutletRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.OUTLET_BOUNDARY_NAME}[\\n\\s]`);
const hasInstantValidationBoundaryRegex = new RegExp(`\\n\\s+at ${_boundaryconstants1.INSTANT_VALIDATION_BOUNDARY_NAME}[\\n\\s]`);
function trackAllowedDynamicAccess(workStore, componentStack, dynamicValidation, clientDynamic) {
    if (hasOutletRegex.test(componentStack)) {
        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
        return;
    } else if (hasMetadataRegex.test(componentStack)) {
        dynamicValidation.hasDynamicMetadata = true;
        return;
    } else if (hasViewportRegex.test(componentStack)) {
        dynamicValidation.hasDynamicViewport = true;
        return;
    } else if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        // For Suspense within body, the prelude wouldn't be empty so it wouldn't violate the empty static shells rule.
        // But if you have Suspense above body, the prelude is empty but we allow that because having Suspense
        // is an explicit signal from the user that they acknowledge the empty shell and want dynamic rendering.
        dynamicValidation.hasAllowedDynamic = true;
        dynamicValidation.hasSuspenseAboveBody = true;
        return;
    } else if (hasSuspenseRegex.test(componentStack)) {
        // this error had a Suspense boundary above it so we don't need to report it as a source
        // of disallowed
        dynamicValidation.hasAllowedDynamic = true;
        return;
    } else if (clientDynamic.syncDynamicErrorWithStack) {
        // This task was the task that called the sync error.
        dynamicValidation.dynamicErrors.push(clientDynamic.syncDynamicErrorWithStack);
        return;
    } else {
        const message = `Route "${workStore.route}": Uncached data was accessed outside of ` + '<Suspense>. This delays the entire page from rendering, resulting in a ' + 'slow user experience. Learn more: ' + 'https://nextjs.org/docs/messages/blocking-route';
        const error = addErrorContext(Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E1079",
            enumerable: false,
            configurable: true
        }), componentStack, null);
        dynamicValidation.dynamicErrors.push(error);
        return;
    }
}
var DynamicHoleKind = /*#__PURE__*/ function(DynamicHoleKind) {
    /** We know that this hole is caused by runtime data. */ DynamicHoleKind[DynamicHoleKind["Runtime"] = 1] = "Runtime";
    /** We know that this hole is caused by dynamic data. */ DynamicHoleKind[DynamicHoleKind["Dynamic"] = 2] = "Dynamic";
    return DynamicHoleKind;
}({});
function createInstantValidationState(createInstantStack) {
    return {
        hasDynamicMetadata: false,
        hasAllowedClientDynamicAboveBoundary: false,
        dynamicMetadata: null,
        hasDynamicViewport: false,
        hasAllowedDynamic: false,
        dynamicErrors: [],
        validationPreventingErrors: [],
        thrownErrorsOutsideBoundary: [],
        createInstantStack
    };
}
function trackDynamicHoleInNavigation(workStore, componentStack, dynamicValidation, clientDynamic, kind, boundaryState) {
    if (hasOutletRegex.test(componentStack)) {
        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
        return;
    }
    if (hasMetadataRegex.test(componentStack)) {
        const usageDescription = kind === 1 ? `Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateMetadata\` or you have file-based metadata such as icons that depend on dynamic params segments.` : `Uncached data or \`connection()\` was accessed inside \`generateMetadata\`.`;
        const message = `Route "${workStore.route}": ${usageDescription} Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`;
        const error = addErrorContext(Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E1076",
            enumerable: false,
            configurable: true
        }), componentStack, dynamicValidation.createInstantStack);
        dynamicValidation.dynamicMetadata = error;
        return;
    }
    if (hasViewportRegex.test(componentStack)) {
        const usageDescription = kind === 1 ? `Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateViewport\`.` : `Uncached data or \`connection()\` was accessed inside \`generateViewport\`.`;
        const message = `Route "${workStore.route}": ${usageDescription} This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`;
        const error = addErrorContext(Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E1086",
            enumerable: false,
            configurable: true
        }), componentStack, dynamicValidation.createInstantStack);
        dynamicValidation.dynamicErrors.push(error);
        return;
    }
    const boundaryLocation = hasInstantValidationBoundaryRegex.exec(componentStack);
    if (!boundaryLocation) {
        // We don't see the validation boundary in the component stack,
        // so this hole must be coming from a shared parent.
        // Shared parents are fully resolved and don't have RSC holes,
        // but they can still suspend in a client component during SSR.
        // If we managed to render all the validation boundaries, that means
        // that the client holes aren't blocking validation and we can disregard them.
        // Note that we don't even care whether they have suspense or not.
        if (boundaryState.expectedIds.size === boundaryState.renderedIds.size) {
            dynamicValidation.hasAllowedClientDynamicAboveBoundary = true;
            dynamicValidation.hasAllowedDynamic = true // Holes outside the boundary contribute to allowing dynamic metadata
            ;
            return;
        } else {
            // TODO(instant-validation) TODO(NAR-787)
            // If shared parents blocked us from validating, we should only log
            // the errors from the innermost (segments), i.e. omit layouts whose
            // slots managed to render (because clearly they didn't block validation)
            const message = `Route "${workStore.route}": Could not validate \`unstable_instant\` because a Client Component in a parent segment prevented the page from rendering.`;
            const error = addErrorContext(Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E1082",
                enumerable: false,
                configurable: true
            }), componentStack, dynamicValidation.createInstantStack);
            dynamicValidation.validationPreventingErrors.push(error);
            return;
        }
    } else {
        // The hole originates inside the validation boundary.
        //
        // Check if we have a Suspense above the hole, but below the validation boundary.
        // If we do, then this dynamic usage wouldn't block a navigation to this subtree.
        // Conversely, if the nearest suspense is above the validation boundary, then this subtree would block.
        //
        // Note that in the component stack, children come before parents.
        //
        // Valid:
        //   ...
        //   at Suspense
        //   ...
        //   at __next_prefetch_validation_boundary__
        //
        // Invalid:
        //   ...
        //   at __next_prefetch_validation_boundary__
        //   ...
        //   at Suspense
        //
        const suspenseLocation = hasSuspenseRegex.exec(componentStack);
        if (suspenseLocation) {
            if (suspenseLocation.index < boundaryLocation.index) {
                dynamicValidation.hasAllowedDynamic = true;
                return;
            } else {
            // invalid - fallthrough
            }
        }
    }
    if (clientDynamic.syncDynamicErrorWithStack) {
        // This task was the task that called the sync error.
        const syncError = clientDynamic.syncDynamicErrorWithStack;
        if (dynamicValidation.createInstantStack !== null && syncError.cause === undefined) {
            syncError.cause = dynamicValidation.createInstantStack();
        }
        dynamicValidation.dynamicErrors.push(syncError);
        return;
    }
    const usageDescription = kind === 1 ? `Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed outside of \`<Suspense>\`.` : `Uncached data or \`connection()\` was accessed outside of \`<Suspense>\`.`;
    const message = `Route "${workStore.route}": ${usageDescription} This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`;
    const error = addErrorContext(Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E1078",
        enumerable: false,
        configurable: true
    }), componentStack, dynamicValidation.createInstantStack);
    dynamicValidation.dynamicErrors.push(error);
    return;
}
function trackThrownErrorInNavigation(workStore, dynamicValidation, thrownValue, componentStack) {
    const boundaryLocation = hasInstantValidationBoundaryRegex.exec(componentStack);
    if (!boundaryLocation) {
        // There's no validation boundary on the component stack.
        // This error may have blocked a boundary from rendering.
        // Wrap the error to provide component context.
        // This helps for errors from node_modules which would otherwise
        // have no useful stack information due to ignore-listing,
        // e.g. next/dynamic with `ssr: false`.
        const error = addErrorContext(Object.defineProperty(new Error('An error occurred while attempting to validate instant UI. This error may be preventing the validation from completing.', {
            cause: thrownValue
        }), "__NEXT_ERROR_CODE", {
            value: "E1118",
            enumerable: false,
            configurable: true
        }), componentStack, null);
        dynamicValidation.thrownErrorsOutsideBoundary.push(error);
    } else {
        // There's validation boundary on the component stack,
        // so we know this error didn't block a validation boundary from rendering.
        // However, this error might be hiding be hiding dynamic content that would
        // cause validation to fail.
        const suspenseLocation = hasSuspenseRegex.exec(componentStack);
        if (suspenseLocation) {
            if (suspenseLocation.index < boundaryLocation.index) {
                // There's a Suspense below the validation boundary but above this error's location.
                // This subtree can't fail instant validation because any potential
                // dynamic holes would be guarded by the Suspense anyway,
                // so we can allow this.
                return;
            } else {
            // invalid - fallthrough
            }
        }
        const message = `Route "${workStore.route}": Could not validate \`unstable_instant\` because an error prevented the target segment from rendering.`;
        const error = addErrorContext(Object.defineProperty(new Error(message, {
            cause: thrownValue
        }), "__NEXT_ERROR_CODE", {
            value: "E1112",
            enumerable: false,
            configurable: true
        }), componentStack, null // TODO(instant-validation-build): conflicting use of cause
        );
        dynamicValidation.validationPreventingErrors.push(error);
    }
}
function trackDynamicHoleInRuntimeShell(workStore, componentStack, dynamicValidation, clientDynamic) {
    if (hasOutletRegex.test(componentStack)) {
        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
        return;
    } else if (hasMetadataRegex.test(componentStack)) {
        const message = `Route "${workStore.route}": Uncached data or \`connection()\` was accessed inside \`generateMetadata\`. Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`;
        const error = addErrorContext(Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E1080",
            enumerable: false,
            configurable: true
        }), componentStack, null);
        dynamicValidation.dynamicMetadata = error;
        return;
    } else if (hasViewportRegex.test(componentStack)) {
        // TODO(instant-validation): If the page only has holes caused by runtime data,
        // we won't find out if there's a suspense-above-body and error for dynamic viewport
        // even if there is in fact a suspense-above-body
        const message = `Route "${workStore.route}": Uncached data or \`connection()\` was accessed inside \`generateViewport\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`;
        const error = addErrorContext(Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E1077",
            enumerable: false,
            configurable: true
        }), componentStack, null);
        dynamicValidation.dynamicErrors.push(error);
        return;
    } else if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        // For Suspense within body, the prelude wouldn't be empty so it wouldn't violate the empty static shells rule.
        // But if you have Suspense above body, the prelude is empty but we allow that because having Suspense
        // is an explicit signal from the user that they acknowledge the empty shell and want dynamic rendering.
        dynamicValidation.hasAllowedDynamic = true;
        dynamicValidation.hasSuspenseAboveBody = true;
        return;
    } else if (hasSuspenseRegex.test(componentStack)) {
        // this error had a Suspense boundary above it so we don't need to report it as a source
        // of disallowed
        dynamicValidation.hasAllowedDynamic = true;
        return;
    } else if (clientDynamic.syncDynamicErrorWithStack) {
        // This task was the task that called the sync error.
        dynamicValidation.dynamicErrors.push(clientDynamic.syncDynamicErrorWithStack);
        return;
    }
    const message = `Route "${workStore.route}": Uncached data or \`connection()\` was accessed outside of \`<Suspense>\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`;
    const error = addErrorContext(Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E1084",
        enumerable: false,
        configurable: true
    }), componentStack, null);
    dynamicValidation.dynamicErrors.push(error);
    return;
}
function trackDynamicHoleInStaticShell(workStore, componentStack, dynamicValidation, clientDynamic) {
    if (hasOutletRegex.test(componentStack)) {
        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
        return;
    } else if (hasMetadataRegex.test(componentStack)) {
        const message = `Route "${workStore.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateMetadata\` or you have file-based metadata such as icons that depend on dynamic params segments. Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`;
        const error = addErrorContext(Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E1085",
            enumerable: false,
            configurable: true
        }), componentStack, null);
        dynamicValidation.dynamicMetadata = error;
        return;
    } else if (hasViewportRegex.test(componentStack)) {
        const message = `Route "${workStore.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateViewport\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`;
        const error = addErrorContext(Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E1081",
            enumerable: false,
            configurable: true
        }), componentStack, null);
        dynamicValidation.dynamicErrors.push(error);
        return;
    } else if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        // For Suspense within body, the prelude wouldn't be empty so it wouldn't violate the empty static shells rule.
        // But if you have Suspense above body, the prelude is empty but we allow that because having Suspense
        // is an explicit signal from the user that they acknowledge the empty shell and want dynamic rendering.
        dynamicValidation.hasAllowedDynamic = true;
        dynamicValidation.hasSuspenseAboveBody = true;
        return;
    } else if (hasSuspenseRegex.test(componentStack)) {
        // this error had a Suspense boundary above it so we don't need to report it as a source
        // of disallowed
        dynamicValidation.hasAllowedDynamic = true;
        return;
    } else if (clientDynamic.syncDynamicErrorWithStack) {
        // This task was the task that called the sync error.
        dynamicValidation.dynamicErrors.push(clientDynamic.syncDynamicErrorWithStack);
        return;
    } else {
        const message = `Route "${workStore.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed outside of \`<Suspense>\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`;
        const error = addErrorContext(Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E1083",
            enumerable: false,
            configurable: true
        }), componentStack, null);
        dynamicValidation.dynamicErrors.push(error);
        return;
    }
}
/**
 * In dev mode, we prefer using the owner stack, otherwise the provided
 * component stack is used.
 *
 * Accepts an already-created Error so the SWC error-code plugin can see the
 * `new Error(...)` call at each call site and auto-assign error codes.
 */ function addErrorContext(error, componentStack, createInstantStack) {
    const ownerStack = ("TURBOPACK compile-time value", "development") !== 'production' && _react.default.captureOwnerStack ? _react.default.captureOwnerStack() : null;
    if (createInstantStack !== null) {
        error.cause = createInstantStack();
    }
    // TODO go back to owner stack here if available. This is temporarily using componentStack to get the right
    //
    error.stack = error.name + ': ' + error.message + (ownerStack || componentStack);
    return error;
}
var PreludeState = /*#__PURE__*/ function(PreludeState) {
    PreludeState[PreludeState["Full"] = 0] = "Full";
    PreludeState[PreludeState["Empty"] = 1] = "Empty";
    PreludeState[PreludeState["Errored"] = 2] = "Errored";
    return PreludeState;
}({});
function logDisallowedDynamicError(workStore, error) {
    console.error(error);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
}
function throwIfDisallowedDynamic(workStore, prelude, dynamicValidation, serverDynamic) {
    if (serverDynamic.syncDynamicErrorWithStack) {
        logDisallowedDynamicError(workStore, serverDynamic.syncDynamicErrorWithStack);
        throw new _staticgenerationbailout.StaticGenBailoutError();
    }
    if (prelude !== 0) {
        if (dynamicValidation.hasSuspenseAboveBody) {
            // This route has opted into allowing fully dynamic rendering
            // by including a Suspense boundary above the body. In this case
            // a lack of a shell is not considered disallowed so we simply return
            return;
        }
        // We didn't have any sync bailouts but there may be user code which
        // blocked the root. We would have captured these during the prerender
        // and can log them here and then terminate the build/validating render
        const dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
            for(let i = 0; i < dynamicErrors.length; i++){
                logDisallowedDynamicError(workStore, dynamicErrors[i]);
            }
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        // If we got this far then the only other thing that could be blocking
        // the root is dynamic Viewport. If this is dynamic then
        // you need to opt into that by adding a Suspense boundary above the body
        // to indicate your are ok with fully dynamic rendering.
        if (dynamicValidation.hasDynamicViewport) {
            console.error(`Route "${workStore.route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) without explicitly allowing fully dynamic rendering. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        if (prelude === 1) {
            // If we ever get this far then we messed up the tracking of invalid dynamic.
            // We still adhere to the constraint that you must produce a shell but invite the
            // user to report this as a bug in Next.js.
            console.error(`Route "${workStore.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
    } else {
        if (dynamicValidation.hasAllowedDynamic === false && dynamicValidation.hasDynamicMetadata) {
            console.error(`Route "${workStore.route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) when the rest of the route does not. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
    }
}
function getStaticShellDisallowedDynamicReasons(workStore, prelude, dynamicValidation, configAllowsBlocking) {
    if (configAllowsBlocking || dynamicValidation.hasSuspenseAboveBody) {
        // This route has opted into allowing fully dynamic rendering
        // by including a Suspense boundary above the body. In this case
        // a lack of a shell is not considered disallowed so we simply return
        return [];
    }
    if (prelude !== 0) {
        // We didn't have any sync bailouts but there may be user code which
        // blocked the root. We would have captured these during the prerender
        // and can log them here and then terminate the build/validating render
        const dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
            return dynamicErrors;
        }
        if (prelude === 1) {
            // If we ever get this far then we messed up the tracking of invalid dynamic.
            // We still adhere to the constraint that you must produce a shell but invite the
            // user to report this as a bug in Next.js.
            return [
                Object.defineProperty(new _invarianterror.InvariantError(`Route "${workStore.route}" did not produce a static shell and Next.js was unable to determine a reason.`), "__NEXT_ERROR_CODE", {
                    value: "E936",
                    enumerable: false,
                    configurable: true
                })
            ];
        }
    } else {
        // We have a prelude but we might still have dynamic metadata without any other dynamic access
        if (dynamicValidation.hasAllowedDynamic === false && dynamicValidation.dynamicErrors.length === 0 && dynamicValidation.dynamicMetadata) {
            return [
                dynamicValidation.dynamicMetadata
            ];
        }
    }
    // We had a non-empty prelude and there are no dynamic holes
    return [];
}
function getNavigationDisallowedDynamicReasons(workStore, prelude, dynamicValidation, validationSampleTracking, boundaryState) {
    // If we have errors related to missing samples, those should take precedence over everything else.
    if (validationSampleTracking) {
        const { missingSampleErrors } = validationSampleTracking;
        if (missingSampleErrors.length > 0) {
            return missingSampleErrors;
        }
    }
    const { validationPreventingErrors } = dynamicValidation;
    if (validationPreventingErrors.length > 0) {
        return validationPreventingErrors;
    }
    if (boundaryState.renderedIds.size < boundaryState.expectedIds.size) {
        const { thrownErrorsOutsideBoundary, createInstantStack } = dynamicValidation;
        if (thrownErrorsOutsideBoundary.length === 0) {
            const message = `Route "${workStore.route}": Could not validate \`unstable_instant\` because the target segment was prevented from rendering for an unknown reason.`;
            const error = createInstantStack !== null ? createInstantStack() : new Error();
            error.name = 'Error';
            error.message = message;
            return [
                error
            ];
        } else if (thrownErrorsOutsideBoundary.length === 1) {
            const message = `Route "${workStore.route}": Could not validate \`unstable_instant\` because the target segment was prevented from rendering, likely due to the following error.`;
            const error = createInstantStack !== null ? createInstantStack() : new Error();
            error.name = 'Error';
            error.message = message;
            return [
                error,
                thrownErrorsOutsideBoundary[0]
            ];
        } else {
            const message = `Route "${workStore.route}": Could not validate \`unstable_instant\` because the target segment was prevented from rendering, likely due to one of the following errors.`;
            const error = createInstantStack !== null ? createInstantStack() : new Error();
            error.name = 'Error';
            error.message = message;
            return [
                error,
                ...thrownErrorsOutsideBoundary
            ];
        }
    }
    // NOTE: We don't care about Suspense above body here,
    // we're only concerned with the validation boundary
    if (prelude !== 0) {
        const dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
            return dynamicErrors;
        }
        if (prelude === 1) {
            // If a client component suspended prevented us from rendering a shell
            // but didn't block validation, we don't require a prelude.
            if (dynamicValidation.hasAllowedClientDynamicAboveBoundary) {
                return [];
            }
            // If we ever get this far then we messed up the tracking of invalid dynamic.
            return [
                Object.defineProperty(new _invarianterror.InvariantError(`Route "${workStore.route}" failed to render during instant validation and Next.js was unable to determine a reason.`), "__NEXT_ERROR_CODE", {
                    value: "E1055",
                    enumerable: false,
                    configurable: true
                })
            ];
        }
    } else {
        const dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
            return dynamicErrors;
        }
        if (dynamicValidation.hasAllowedDynamic === false && dynamicValidation.dynamicMetadata) {
            return [
                dynamicValidation.dynamicMetadata
            ];
        }
    }
    // We had a non-empty prelude and there are no dynamic holes
    return [];
}
}),
"[project]/node_modules/next/dist/client/components/unstable-rethrow.server.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
});
const _dynamicrenderingutils = __turbopack_context__.r("[project]/node_modules/next/dist/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)");
const _ispostpone = __turbopack_context__.r("[project]/node_modules/next/dist/server/lib/router-utils/is-postpone.js [app-rsc] (ecmascript)");
const _bailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-rsc] (ecmascript)");
const _isnextroutererror = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/is-next-router-error.js [app-rsc] (ecmascript)");
const _dynamicrendering = __turbopack_context__.r("[project]/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)");
const _hooksservercontext = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/hooks-server-context.js [app-rsc] (ecmascript)");
function unstable_rethrow(error) {
    if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error) || (0, _hooksservercontext.isDynamicServerError)(error) || (0, _dynamicrendering.isDynamicPostpone)(error) || (0, _ispostpone.isPostpone)(error) || (0, _dynamicrenderingutils.isHangingPromiseRejectionError)(error) || (0, _dynamicrendering.isPrerenderInterruptedError)(error)) {
        throw error;
    }
    if (error instanceof Error && 'cause' in error) {
        unstable_rethrow(error.cause);
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/unstable-rethrow.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * This function should be used to rethrow internal Next.js errors so that they can be handled by the framework.
 * When wrapping an API that uses errors to interrupt control flow, you should use this function before you do any error handling.
 * This function will rethrow the error if it is a Next.js error so it can be handled, otherwise it will do nothing.
 *
 * Read more: [Next.js Docs: `unstable_rethrow`](https://nextjs.org/docs/app/api-reference/functions/unstable_rethrow)
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
});
const unstable_rethrow = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/node_modules/next/dist/client/components/unstable-rethrow.server.js [app-rsc] (ecmascript)").unstable_rethrow : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ReadonlyURLSearchParams: null,
    RedirectType: null,
    forbidden: null,
    notFound: null,
    permanentRedirect: null,
    redirect: null,
    unauthorized: null,
    unstable_isUnrecognizedActionError: null,
    unstable_rethrow: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return _readonlyurlsearchparams.ReadonlyURLSearchParams;
    },
    RedirectType: function() {
        return RedirectType;
    },
    forbidden: function() {
        return _forbidden.forbidden;
    },
    notFound: function() {
        return _notfound.notFound;
    },
    permanentRedirect: function() {
        return _redirect.permanentRedirect;
    },
    redirect: function() {
        return _redirect.redirect;
    },
    unauthorized: function() {
        return _unauthorized.unauthorized;
    },
    unstable_isUnrecognizedActionError: function() {
        return unstable_isUnrecognizedActionError;
    },
    unstable_rethrow: function() {
        return _unstablerethrow.unstable_rethrow;
    }
});
const _readonlyurlsearchparams = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/readonly-url-search-params.js [app-rsc] (ecmascript)");
const _redirect = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/redirect.js [app-rsc] (ecmascript)");
const _notfound = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/not-found.js [app-rsc] (ecmascript)");
const _forbidden = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/forbidden.js [app-rsc] (ecmascript)");
const _unauthorized = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/unauthorized.js [app-rsc] (ecmascript)");
const _unstablerethrow = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/unstable-rethrow.js [app-rsc] (ecmascript)");
function unstable_isUnrecognizedActionError() {
    throw Object.defineProperty(new Error('`unstable_isUnrecognizedActionError` can only be used on the client.'), "__NEXT_ERROR_CODE", {
        value: "E776",
        enumerable: false,
        configurable: true
    });
}
const RedirectType = {
    push: 'push',
    replace: 'replace'
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
}),
"[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/node_modules/next/dist/client/app-dir/link.js <module evaluation>"));
}),
"[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy)", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/node_modules/next/dist/client/app-dir/link.js"));
}),
"[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return _link.useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-rsc] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
const _link = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)"));
function LinkComponent(props) {
    const isLegacyBehavior = props.legacyBehavior;
    const childIsHostComponent = typeof props.children === 'string' || typeof props.children === 'number' || typeof props.children?.type === 'string';
    const childIsClientComponent = props.children?.type?.$$typeof === Symbol.for('react.client.reference');
    if (isLegacyBehavior && !childIsHostComponent && !childIsClientComponent) {
        if (props.children?.type?.$$typeof === Symbol.for('react.lazy')) {
            console.error(`Using a Lazy Component as a direct child of \`<Link legacyBehavior>\` from a Server Component is not supported. If you need legacyBehavior, wrap your Lazy Component in a Client Component that renders the Link's \`<a>\` tag.`);
        } else {
            console.error(`Using a Server Component as a direct child of \`<Link legacyBehavior>\` is not supported. If you need legacyBehavior, wrap your Server Component in a Client Component that renders the Link's \`<a>\` tag.`);
        }
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_link.default, {
        ...props
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
];

//# sourceMappingURL=_0u9ak.m._.js.map