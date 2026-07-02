/*
  ============================================================
  SAINTE-ANGÈLE CHATBOT — CONTENT FILE
  ============================================================
  This is the ONLY file you need to edit to update what the
  chatbot knows and says. No coding experience needed.

  HOW TO ADD OR EDIT AN ANSWER:
  Find the "faqs" list below. Each entry looks like this:

  {
    questions: [
      "what time is mass",
      "mass schedule",
      "when is mass"
    ],
    answer: "Sunday Masses are at 9:00 AM (Italian) and 11:00 AM (French)..."
  }

  - "questions" is a list of different ways someone might ask
    the same thing. Add as many phrasings as you want — more
    phrasings = the bot understands more people. Separate each
    with a comma, and keep the quotation marks " " around each one.
  - "answer" is exactly what the bot will reply with. You can
    write it however you like.
  - To add a brand new topic, copy an entire { ... } block
    (including the curly braces) and paste it before the closing
    bracket, then edit the text inside.
  - To remove a topic, delete its whole { ... } block.
  - Don't forget the comma "," between entries.

  When you're done editing, save this file and re-upload it to
  the website (or send it to whoever manages the site).
  ============================================================
*/

const SAINTE_ANGELE_CONTENT = {

  // Basic info shown in the chat header and used as fallback contact info
  church: {
    name: "Église Sainte-Angèle",
    shortName: "Sainte-Angèle",
    address: "5275 Boulevard Lavoisier, Montréal, Québec",
    phone: "514-321-3644",
    email: "angelemerici@videotron.ca",
    officeHours: "Monday, Tuesday & Thursday: 1:00 PM – 5:00 PM",
    website: "https://www.sainteangele.ca"
  },

  // Greeting shown when the chat first opens
  greeting: "Bonjour! I'm the Sainte-Angèle parish assistant. Ask me about Mass times, events, the hall, volunteering, or how to reach the parish office.",

  // Shown when the bot doesn't understand or has no good answer
  fallback: "I'm not sure about that one. For anything I can't answer, please contact the parish office at 514-321-3644 or angelemerici@videotron.ca (office hours: Monday, Tuesday & Thursday, 1:00 PM – 5:00 PM).",

  // Suggested questions shown as quick-tap buttons when chat opens
  suggestedQuestions: [
    "What time is Mass?",
    "Where is the church located?",
    "How do I rent the hall?",
    "How can I volunteer?",
    "How do I donate?"
  ],

  faqs: [
    {
      questions: [
        "what time is mass", "mass schedule", "mass times", "when is mass",
        "sunday mass", "when is the next mass", "service times", "what time is church"
      ],
      answer: "Weekly Mass schedule:\n\nSunday — 9:00 AM (Italian), 11:00 AM (French)\nMonday — 7:00 PM (Italian)\nTuesday — 8:30 AM (French)\nWednesday — 7:00 PM (Italian)\nThursday — 8:30 AM (French)\nFriday — 8:30 AM (Italian)\nSaturday — 4:00 PM Vigil (Italian), 5:00 PM Vigil (French)"
    },
    {
      questions: [
        "what languages is mass in", "italian mass", "french mass", "is mass in english",
        "what language do you speak at church"
      ],
      answer: "Mass is celebrated in Italian and French throughout the week. Sunday Masses are 9:00 AM in Italian and 11:00 AM in French."
    },
    {
      questions: [
        "where is the church", "church address", "location", "where are you located",
        "how do i get there", "directions", "what is the address"
      ],
      answer: "Église Sainte-Angèle is located at 5275 Boulevard Lavoisier, Montréal, Québec, in Saint-Léonard."
    },
    {
      questions: [
        "phone number", "how do i call the church", "contact number", "church phone"
      ],
      answer: "You can reach the parish office at 514-321-3644."
    },
    {
      questions: [
        "email address", "how do i email the church", "church email", "contact email"
      ],
      answer: "You can reach the parish by email at angelemerici@videotron.ca."
    },
    {
      questions: [
        "office hours", "when is the office open", "when can i visit the office",
        "parish office hours"
      ],
      answer: "The parish office is open Monday, Tuesday and Thursday, 1:00 PM – 5:00 PM."
    },
    {
      questions: [
        "history of the church", "when was the church founded", "who founded the church",
        "how old is the church", "church history"
      ],
      answer: "Église Sainte-Angèle was founded in 1962 by Cardinal Paul-Émile Léger to serve the growing Catholic community of Saint-Léonard. The church building was completed in the late 1960s and remains an important spiritual and community gathering place today."
    },
    {
      questions: [
        "who is the priest", "who is the pastor", "parish priest", "who leads the church"
      ],
      answer: "Father Aleksander Dudik is the priest who serves the Sainte-Angèle parish community."
    },
    {
      questions: [
        "who is on the parish team", "parish staff", "who works at the church",
        "who runs the parish"
      ],
      answer: "The parish team includes Father Aleksander Dudik (Priest), Sylvie Selesse (Secretary), Andrea Manganelli (Treasurer), members of the Parish and Pastoral Council, several Church Wardens, and ministry leaders such as the choir director."
    },
    {
      questions: [
        "can i rent the hall", "hall rental", "how much does the hall cost",
        "book the hall", "rent a room", "hall capacity", "how many people can the hall hold",
        "renting the hall for a party", "baptism reception venue", "birthday party venue"
      ],
      answer: "Yes! The parish hall can be rented for private and community gatherings such as birthdays, baptisms, family gatherings, and community events. It holds up to 100 people, with tables, chairs, and a stage area available. For availability and pricing, please contact the parish office at 514-321-3644."
    },
    {
      questions: [
        "upcoming events", "what events are coming up", "parish events", "any events",
        "fete de marie", "feast of mary", "garage sale"
      ],
      answer: "Upcoming parish events include the Fête de Marie on Saturday, August 15, 2026 (time to be confirmed), celebrating the Feast of Mary with prayer, community, and a Marian procession, as well as a Parish Garage Sale (date to be confirmed). See the Events page on the website for the latest updates."
    },
    {
      questions: [
        "how can i volunteer", "volunteering", "become a volunteer", "help at the church",
        "join the choir", "who do i contact to volunteer"
      ],
      answer: "Volunteers help with event and fundraiser support, choir and music, altar and liturgy support, hospitality, and community outreach. To get involved, contact Volunteer Coordinator Maria Pia DeLuca at 514-323-9092 (French, Italian)."
    },
    {
      questions: [
        "how do i donate", "how can i give money", "make a donation", "donate online",
        "tax receipt", "give to the church"
      ],
      answer: "Donations can be made securely online through CanadaHelps at canadahelps.org (search 'Fabrique de la Paroisse de Ste-Angele de Merici'). Official tax receipts are issued through CanadaHelps. For questions about giving, contact the parish office at 514-321-3644."
    },
    {
      questions: [
        "is this a catholic church", "what denomination", "what religion",
        "roman catholic"
      ],
      answer: "Église Sainte-Angèle is a Roman Catholic parish located in Saint-Léonard, Montréal."
    },
    {
      questions: [
        "hello", "hi", "hey", "good morning", "good afternoon"
      ],
      answer: "Hello! Welcome to Église Sainte-Angèle. How can I help you today? You can ask me about Mass times, events, the hall, volunteering, or how to contact the parish."
    },
    {
      questions: [
        "thank you", "thanks", "merci", "grazie"
      ],
      answer: "You're welcome! If you have any other questions about the parish, feel free to ask."
    }
  ]
};

// Makes the content available to widget.js — do not remove this line
window.SAINTE_ANGELE_CONTENT = SAINTE_ANGELE_CONTENT;
