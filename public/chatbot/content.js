/*
  ============================================================
  SAINTE-ANGÈLE CHATBOT — CONTENT FILE (EN / FR / IT)
  ============================================================
  This is the ONLY file you need to edit to update what the
  chatbot knows and says. No coding experience needed.

  The site has 3 languages, so this file has 3 separate
  sections: "en", "fr", and "it". The bot automatically picks
  the right one based on the page URL (/en/, /fr/, /it/).

  HOW TO ADD OR EDIT AN ANSWER:
  Find the language section you want to edit (en, fr, or it),
  then find its "faqs" list. Each entry looks like this:

  {
    questions: [
      "what time is mass",
      "mass schedule",
      "when is mass"
    ],
    answer: "Sunday Masses are at 9:00 AM (Italian) and 11:00 AM (French)..."
  }

  - "questions" is a list of different ways someone might ask
    the same thing, IN THAT LANGUAGE. Add as many as you want.
  - "answer" is exactly what the bot will reply with.
  - To add a topic, copy an entire { ... } block and paste it
    before the closing bracket of "faqs", then edit the text.
  - If you add a new topic, add the SAME topic to all 3
    language sections so it works no matter what language the
    visitor is on.
  - Don't forget the comma "," between entries.

  When you're done editing, save this file and re-upload it.
  ============================================================
*/

const SAINTE_ANGELE_CONTENT = {

  en: {
    church: {
      name: "Église Sainte-Angèle",
      shortName: "Sainte-Angèle",
      address: "5275 Boulevard Lavoisier, Montréal, Québec",
      phone: "514-321-3644",
      email: "angelemerici@videotron.ca",
      officeHours: "Monday, Tuesday & Thursday: 1:00 PM – 5:00 PM",
      website: "https://www.sainteangele.ca"
    },
    greeting: "Bonjour! I'm the Sainte-Angèle parish assistant. Ask me about Mass times, events, the hall, volunteering, or how to reach the parish office.",
    fallback: "I'm not sure about that one. For anything I can't answer, please contact the parish office at 514-321-3644 or angelemerici@videotron.ca (office hours: Monday, Tuesday & Thursday, 1:00 PM – 5:00 PM).",
    suggestedQuestions: [
      "What time is Mass?",
      "Where is the church located?",
      "How do I rent the hall?",
      "How can I volunteer?",
      "How do I donate?"
    ],
    faqs: [
      { questions: ["what time is mass", "mass schedule", "mass times", "when is mass", "sunday mass", "when is the next mass", "service times", "what time is church"],
        answer: "Weekly Mass schedule:\n\nSunday — 9:00 AM (Italian), 11:00 AM (French)\nMonday — 7:00 PM (Italian)\nTuesday — 8:30 AM (French)\nWednesday — 7:00 PM (Italian)\nThursday — 8:30 AM (French)\nFriday — 8:30 AM (Italian)\nSaturday — 4:00 PM Vigil (Italian), 5:00 PM Vigil (French)" },
      { questions: ["what languages is mass in", "italian mass", "french mass", "is mass in english", "what language do you speak at church"],
        answer: "Mass is celebrated in Italian and French throughout the week. Sunday Masses are 9:00 AM in Italian and 11:00 AM in French." },
      { questions: ["where is the church", "church address", "location", "where are you located", "how do i get there", "directions", "what is the address"],
        answer: "Église Sainte-Angèle is located at 5275 Boulevard Lavoisier, Montréal, Québec, in Saint-Léonard." },
      { questions: ["phone number", "how do i call the church", "contact number", "church phone"],
        answer: "You can reach the parish office at 514-321-3644." },
      { questions: ["email address", "how do i email the church", "church email", "contact email"],
        answer: "You can reach the parish by email at angelemerici@videotron.ca." },
      { questions: ["office hours", "when is the office open", "when can i visit the office", "parish office hours"],
        answer: "The parish office is open Monday, Tuesday and Thursday, 1:00 PM – 5:00 PM." },
      { questions: ["history of the church", "when was the church founded", "who founded the church", "how old is the church", "church history"],
        answer: "Église Sainte-Angèle was founded in 1962 by Cardinal Paul-Émile Léger to serve the growing Catholic community of Saint-Léonard. The church building was completed in the late 1960s and remains an important spiritual and community gathering place today." },
      { questions: ["who is the priest", "who is the pastor", "parish priest", "who leads the church"],
        answer: "Father Aleksander Dudik is the priest who serves the Sainte-Angèle parish community." },
      { questions: ["who is on the parish team", "parish staff", "who works at the church", "who runs the parish"],
        answer: "The parish team includes Father Aleksander Dudik (Priest), Sylvie Selesse (Secretary), Andrea Manganelli (Treasurer), members of the Parish and Pastoral Council, several Church Wardens, and ministry leaders such as the choir director." },
      { questions: ["can i rent the hall", "hall rental", "how much does the hall cost", "book the hall", "rent a room", "hall capacity", "how many people can the hall hold", "renting the hall for a party", "baptism reception venue", "birthday party venue"],
        answer: "Yes! The parish hall can be rented for private and community gatherings such as birthdays, baptisms, family gatherings, and community events. It holds up to 100 people, with tables, chairs, and a stage area available. For availability and pricing, please contact the parish office at 514-321-3644." },
      { questions: ["upcoming events", "what events are coming up", "parish events", "any events", "fete de marie", "feast of mary", "garage sale"],
        answer: "Upcoming parish events include the Fête de Marie on Saturday, August 15, 2026 (time to be confirmed), celebrating the Feast of Mary with prayer, community, and a Marian procession, as well as a Parish Garage Sale (date to be confirmed). See the Events page on the website for the latest updates." },
      { questions: ["how can i volunteer", "volunteering", "become a volunteer", "help at the church", "join the choir", "who do i contact to volunteer"],
        answer: "Volunteers help with event and fundraiser support, choir and music, altar and liturgy support, hospitality, and community outreach. To get involved, contact Volunteer Coordinator Maria Pia DeLuca at 514-323-9092 (French, Italian)." },
      { questions: ["how do i donate", "how can i give money", "make a donation", "donate online", "tax receipt", "give to the church"],
        answer: "Donations can be made securely online through CanadaHelps at canadahelps.org (search 'Fabrique de la Paroisse de Ste-Angele de Merici'). Official tax receipts are issued through CanadaHelps. For questions about giving, contact the parish office at 514-321-3644." },
      { questions: ["is this a catholic church", "what denomination", "what religion", "roman catholic"],
        answer: "Église Sainte-Angèle is a Roman Catholic parish located in Saint-Léonard, Montréal." },
      { questions: ["hello", "hi", "hey", "good morning", "good afternoon"],
        answer: "Hello! Welcome to Église Sainte-Angèle. How can I help you today? You can ask me about Mass times, events, the hall, volunteering, or how to contact the parish." },
      { questions: ["thank you", "thanks", "merci", "grazie"],
        answer: "You're welcome! If you have any other questions about the parish, feel free to ask." }
    ]
  },

  fr: {
    church: {
      name: "Église Sainte-Angèle",
      shortName: "Sainte-Angèle",
      address: "5275 Boulevard Lavoisier, Montréal, Québec",
      phone: "514-321-3644",
      email: "angelemerici@videotron.ca",
      officeHours: "Lundi, mardi et jeudi : 13 h à 17 h",
      website: "https://www.sainteangele.ca"
    },
    greeting: "Bonjour! Je suis l'assistant virtuel de la paroisse Sainte-Angèle. Posez-moi vos questions sur les heures de messe, les événements, la salle, le bénévolat, ou comment joindre le bureau paroissial.",
    fallback: "Je ne suis pas certain de la réponse à cette question. Pour toute question à laquelle je ne peux pas répondre, veuillez contacter le bureau paroissial au 514-321-3644 ou à angelemerici@videotron.ca (heures d'ouverture : lundi, mardi et jeudi, 13 h à 17 h).",
    suggestedQuestions: [
      "À quelle heure est la messe?",
      "Où se trouve l'église?",
      "Comment louer la salle?",
      "Comment devenir bénévole?",
      "Comment faire un don?"
    ],
    faqs: [
      { questions: ["quelle heure est la messe", "horaire des messes", "heures de messe", "quand est la messe", "messe du dimanche", "prochaine messe", "heures des services"],
        answer: "Horaire hebdomadaire des messes :\n\nDimanche — 9 h 00 (italien), 11 h 00 (français)\nLundi — 19 h 00 (italien)\nMardi — 8 h 30 (français)\nMercredi — 19 h 00 (italien)\nJeudi — 8 h 30 (français)\nVendredi — 8 h 30 (italien)\nSamedi — 16 h 00 messe anticipée (italien), 17 h 00 messe anticipée (français)" },
      { questions: ["quelles langues pour la messe", "messe en italien", "messe en français", "messe en anglais", "quelle langue parlez-vous à l'église"],
        answer: "La messe est célébrée en italien et en français tout au long de la semaine. Les messes du dimanche sont à 9 h 00 en italien et à 11 h 00 en français." },
      { questions: ["où se trouve l'église", "adresse de l'église", "emplacement", "où êtes-vous situés", "comment s'y rendre", "directions", "quelle est l'adresse"],
        answer: "L'église Sainte-Angèle est située au 5275 boulevard Lavoisier, Montréal, Québec, dans Saint-Léonard." },
      { questions: ["numéro de téléphone", "comment appeler l'église", "numéro de contact", "téléphone de l'église"],
        answer: "Vous pouvez joindre le bureau paroissial au 514-321-3644." },
      { questions: ["adresse courriel", "comment envoyer un courriel à l'église", "courriel de l'église", "adresse de contact"],
        answer: "Vous pouvez joindre la paroisse par courriel à angelemerici@videotron.ca." },
      { questions: ["heures d'ouverture", "quand le bureau est-il ouvert", "quand puis-je visiter le bureau", "heures du bureau paroissial"],
        answer: "Le bureau paroissial est ouvert le lundi, mardi et jeudi, de 13 h à 17 h." },
      { questions: ["histoire de l'église", "quand l'église a-t-elle été fondée", "qui a fondé l'église", "quel âge a l'église", "histoire de la paroisse"],
        answer: "L'église Sainte-Angèle a été fondée en 1962 par le cardinal Paul-Émile Léger pour desservir la communauté catholique grandissante de Saint-Léonard. La construction de l'église s'est terminée à la fin des années 1960 et elle demeure aujourd'hui un lieu important de rassemblement spirituel et communautaire." },
      { questions: ["qui est le prêtre", "qui est le curé", "prêtre de la paroisse", "qui dirige l'église"],
        answer: "Le père Aleksander Dudik est le prêtre qui dessert la communauté paroissiale de Sainte-Angèle." },
      { questions: ["qui fait partie de l'équipe paroissiale", "personnel de la paroisse", "qui travaille à l'église", "qui gère la paroisse"],
        answer: "L'équipe paroissiale comprend le père Aleksander Dudik (prêtre), Sylvie Selesse (secrétaire), Andrea Manganelli (trésorier), des membres du conseil paroissial et pastoral, plusieurs marguilliers, ainsi que des responsables de ministères comme la direction de la chorale." },
      { questions: ["puis-je louer la salle", "location de salle", "combien coûte la salle", "réserver la salle", "louer une salle", "capacité de la salle", "combien de personnes la salle peut accueillir", "louer la salle pour une fête", "salle pour un baptême", "salle pour anniversaire"],
        answer: "Oui! La salle paroissiale peut être louée pour des rassemblements privés et communautaires comme des anniversaires, des baptêmes, des réunions de famille et des événements communautaires. Elle peut accueillir jusqu'à 100 personnes, avec tables, chaises et une scène disponibles. Pour la disponibilité et les tarifs, veuillez contacter le bureau paroissial au 514-321-3644." },
      { questions: ["événements à venir", "quels événements s'en viennent", "événements paroissiaux", "des événements", "fête de marie", "vente de garage"],
        answer: "Les événements à venir incluent la Fête de Marie le samedi 15 août 2026 (heure à confirmer), célébrant la fête de Marie avec prière, communauté et procession mariale, ainsi qu'une vente de garage paroissiale (date à confirmer). Consultez la page Événements du site web pour les dernières mises à jour." },
      { questions: ["comment devenir bénévole", "bénévolat", "aider à l'église", "joindre la chorale", "qui contacter pour faire du bénévolat"],
        answer: "Les bénévoles aident lors des événements et collectes de fonds, à la chorale et à la musique, au soutien liturgique, à l'accueil et aux activités communautaires. Pour vous impliquer, contactez la coordonnatrice des bénévoles Maria Pia DeLuca au 514-323-9092 (français, italien)." },
      { questions: ["comment faire un don", "comment donner de l'argent", "faire un don", "don en ligne", "reçu d'impôt", "donner à l'église"],
        answer: "Les dons peuvent être faits en ligne de façon sécuritaire via CanadaHelps au canadahelps.org (recherchez « Fabrique de la Paroisse de Ste-Angele de Merici »). Les reçus officiels aux fins d'impôt sont émis par CanadaHelps. Pour toute question sur les dons, contactez le bureau paroissial au 514-321-3644." },
      { questions: ["est-ce une église catholique", "quelle confession", "quelle religion", "catholique romaine"],
        answer: "L'église Sainte-Angèle est une paroisse catholique romaine située à Saint-Léonard, Montréal." },
      { questions: ["bonjour", "salut", "allo", "bon matin", "bon après-midi"],
        answer: "Bonjour! Bienvenue à l'église Sainte-Angèle. Comment puis-je vous aider aujourd'hui? Vous pouvez me poser des questions sur les heures de messe, les événements, la salle, le bénévolat, ou comment contacter la paroisse." },
      { questions: ["merci", "je vous remercie"],
        answer: "Avec plaisir! N'hésitez pas à me poser d'autres questions sur la paroisse." }
    ]
  },

  it: {
    church: {
      name: "Église Sainte-Angèle",
      shortName: "Sainte-Angèle",
      address: "5275 Boulevard Lavoisier, Montréal, Québec",
      phone: "514-321-3644",
      email: "angelemerici@videotron.ca",
      officeHours: "Lunedì, martedì e giovedì: dalle 13:00 alle 17:00",
      website: "https://www.sainteangele.ca"
    },
    greeting: "Bonjour! Sono l'assistente virtuale della parrocchia Sainte-Angèle. Chiedimi pure gli orari delle Messe, gli eventi, la sala, il volontariato, o come contattare l'ufficio parrocchiale.",
    fallback: "Non sono sicuro della risposta a questa domanda. Per qualsiasi cosa a cui non posso rispondere, contatta l'ufficio parrocchiale al 514-321-3644 o scrivi a angelemerici@videotron.ca (orari ufficio: lunedì, martedì e giovedì, dalle 13:00 alle 17:00).",
    suggestedQuestions: [
      "A che ora è la Messa?",
      "Dove si trova la chiesa?",
      "Come affitto la sala?",
      "Come posso fare volontariato?",
      "Come posso fare una donazione?"
    ],
    faqs: [
      { questions: ["a che ora è la messa", "orario delle messe", "orari messa", "quando è la messa", "messa della domenica", "prossima messa", "orari delle funzioni"],
        answer: "Orario settimanale delle Messe:\n\nDomenica — 9:00 (italiano), 11:00 (francese)\nLunedì — 19:00 (italiano)\nMartedì — 8:30 (francese)\nMercoledì — 19:00 (italiano)\nGiovedì — 8:30 (francese)\nVenerdì — 8:30 (italiano)\nSabato — 16:00 Messa prefestiva (italiano), 17:00 Messa prefestiva (francese)" },
      { questions: ["in che lingua è la messa", "messa in italiano", "messa in francese", "messa in inglese", "che lingua si parla in chiesa"],
        answer: "La Messa viene celebrata in italiano e in francese durante tutta la settimana. Le Messe della domenica sono alle 9:00 in italiano e alle 11:00 in francese." },
      { questions: ["dove si trova la chiesa", "indirizzo della chiesa", "posizione", "dove siete situati", "come arrivare", "indicazioni", "qual è l'indirizzo"],
        answer: "La chiesa Sainte-Angèle si trova al 5275 Boulevard Lavoisier, Montréal, Québec, nel quartiere Saint-Léonard." },
      { questions: ["numero di telefono", "come chiamare la chiesa", "numero di contatto", "telefono della chiesa"],
        answer: "Puoi contattare l'ufficio parrocchiale al 514-321-3644." },
      { questions: ["indirizzo email", "come scrivere una email alla chiesa", "email della chiesa", "email di contatto"],
        answer: "Puoi contattare la parrocchia via email a angelemerici@videotron.ca." },
      { questions: ["orari ufficio", "quando è aperto l'ufficio", "quando posso visitare l'ufficio", "orari ufficio parrocchiale"],
        answer: "L'ufficio parrocchiale è aperto lunedì, martedì e giovedì, dalle 13:00 alle 17:00." },
      { questions: ["storia della chiesa", "quando è stata fondata la chiesa", "chi ha fondato la chiesa", "quanti anni ha la chiesa", "storia della parrocchia"],
        answer: "La chiesa Sainte-Angèle è stata fondata nel 1962 dal cardinale Paul-Émile Léger per servire la crescente comunità cattolica di Saint-Léonard. L'edificio della chiesa fu completato alla fine degli anni '60 e rimane oggi un importante luogo di incontro spirituale e comunitario." },
      { questions: ["chi è il sacerdote", "chi è il parroco", "sacerdote della parrocchia", "chi guida la chiesa"],
        answer: "Padre Aleksander Dudik è il sacerdote che serve la comunità parrocchiale di Sainte-Angèle." },
      { questions: ["chi fa parte del team parrocchiale", "personale della parrocchia", "chi lavora in chiesa", "chi gestisce la parrocchia"],
        answer: "Il team parrocchiale include padre Aleksander Dudik (sacerdote), Sylvie Selesse (segretaria), Andrea Manganelli (tesoriere), membri del consiglio parrocchiale e pastorale, diversi fabbricieri, e responsabili di ministeri come il direttore del coro." },
      { questions: ["posso affittare la sala", "affitto sala", "quanto costa la sala", "prenotare la sala", "affittare una sala", "capacità della sala", "quante persone può ospitare la sala", "affittare la sala per una festa", "sala per battesimo", "sala per compleanno"],
        answer: "Sì! La sala parrocchiale può essere affittata per raduni privati e comunitari come compleanni, battesimi, riunioni di famiglia ed eventi comunitari. Può ospitare fino a 100 persone, con tavoli, sedie e un palco disponibili. Per disponibilità e prezzi, contatta l'ufficio parrocchiale al 514-321-3644." },
      { questions: ["prossimi eventi", "quali eventi ci sono in programma", "eventi parrocchiali", "eventi", "festa di maria", "vendita di garage"],
        answer: "I prossimi eventi parrocchiali includono la Festa di Maria sabato 15 agosto 2026 (orario da confermare), che celebra la Festa di Maria con preghiera, comunità e una processione mariana, oltre a una vendita di garage parrocchiale (data da confermare). Consulta la pagina Eventi del sito web per gli ultimi aggiornamenti." },
      { questions: ["come posso fare volontariato", "volontariato", "aiutare in chiesa", "unirsi al coro", "chi contattare per fare volontariato"],
        answer: "I volontari aiutano con eventi e raccolte fondi, coro e musica, supporto liturgico e all'altare, accoglienza e attività comunitarie. Per partecipare, contatta la coordinatrice dei volontari Maria Pia DeLuca al 514-323-9092 (francese, italiano)." },
      { questions: ["come posso fare una donazione", "come donare denaro", "fare una donazione", "donazione online", "ricevuta fiscale", "donare alla chiesa"],
        answer: "Le donazioni possono essere fatte in modo sicuro online tramite CanadaHelps su canadahelps.org (cerca «Fabrique de la Paroisse de Ste-Angele de Merici»). Le ricevute fiscali ufficiali sono emesse da CanadaHelps. Per domande sulle donazioni, contatta l'ufficio parrocchiale al 514-321-3644." },
      { questions: ["è una chiesa cattolica", "che confessione", "che religione", "cattolica romana"],
        answer: "La chiesa Sainte-Angèle è una parrocchia cattolica romana situata a Saint-Léonard, Montréal." },
      { questions: ["ciao", "buongiorno", "buonasera", "salve"],
        answer: "Ciao! Benvenuto nella chiesa Sainte-Angèle. Come posso aiutarti oggi? Puoi chiedermi gli orari delle Messe, gli eventi, la sala, il volontariato, o come contattare la parrocchia." },
      { questions: ["grazie", "grazie mille"],
        answer: "Prego! Se hai altre domande sulla parrocchia, chiedi pure." }
    ]
  }
};

// Makes the content available to widget.js — do not remove this line
window.SAINTE_ANGELE_CONTENT = SAINTE_ANGELE_CONTENT;
