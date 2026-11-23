document.addEventListener("DOMContentLoaded", () => {

  // =====================================================
  // DICTIONNAIRE DE TRADUCTION (FR / EN)
  // =====================================================
  const dict = {
    fr: {
      // Header
      post: "Annoncer",
      search: "Rechercher",
      daily: "Trajets quotidiens",
      new: "NOUVEAU",
      help: "Aide",
      faq: "Questions fréquentes",
      contact: "Contacter l'équipe",
      safety: "Conseils de sécurité",
      signup: "Inscription",
      login: "Connexion",
      langBtn: "English",
      // Hero
      h1a: "La référence en covoiturage depuis",
      h1b: "20 ans déjà",
      lead: "Notre équipe est là pour vous accompagner à chaque étape. Pas de robot, pas de menu interminable. Juste des humains.",
      onApp: "sur l'App Store",
      onPlay: "sur Google Play",
      reviews: "avis",
      reviews2: "avis",
      // Bande recherche
      depart: "Départ",
      destination: "Destination",
      date: "Date",
      btnRechercher: "Rechercher",
      btnAnnoncer: "+ Annoncer",
      // Cartes
      deuxFacons: "Deux façons de prendre la route avec Amigo",
      passager: "Passager",
      seFaireConduire: "Se faire conduire",
      textePassager: "Voyagez à petit prix, même à la dernière minute! Choisissez votre trajet et réservez une place en ligne. Nous sommes là pour vous accompagner.",
      reserverPlace: "Réserver une place",
      plusInfo: "plus d'info svp!",
      conducteur: "Conducteur",
      conduireAmigos: "Conduire des amigos",
      texteConducteur: "Faites des économies sur vos déplacements en offrant des places libres dans votre voiture. Vous allez aimer voyager encore plus.",
      donnerLift: "Donner un lift",
      commentMarche: "oui, mais comment ça marche?",
      // Carrousel
      pretPartir: "Prêt à partir?",
      trajetsPopulaires: "Nos trajets les plus populaires",
      // Statistiques
      vingtAnsImpact: "20 ans d'impact",
      communauteDifference: "La communauté a fait une différence, un trajet à la fois",
      annoncesAnnee: "Annonces par année",
      membresInscrits: "Membres inscrits",
      kmParcourus: "Kilomètres parcourus",
      succesMesure: "Le succès se mesure à l'impact, pas au bruit.",
      // Avis
      ilsReviennent: "Ils reviennent pour plus que le trajet.",
      avisSousTitre: "Des avis qui parlent de trajets fiables, de conducteurs vérifiés et d'une vraie équipe disponible quand il y a un imprévu.",
      satisfactionMoyenne: "SATISFACTION MOYENNE",
      plusAvis: "Plus de 12 000 avis de la communauté",
      texteSatisfaction: "Basé sur plus de 12 000 avis réels de membres qui utilisent AmigoExpress pour voyager entre les villes, publier des trajets et réserver en confiance.",
      equipeDispo: "Notre équipe est disponible 7 jours sur 7",
      conducteursVerifies: "Conducteurs vérifiés par l'équipe",
      trajetsPopulairesQc: "Trajets populaires partout au Québec",
      voirPlusAvis: "Voir plus d'avis +",
      // Support
      humainsRepondent: "Des humains qui vous répondent, vraiment.",
      heuresService: "HEURES DU SERVICE",
      lunVen: "Lun – Ven",
      samedi: "Samedi",
      dimanche: "Dimanche",
      // Contact
      sansFrais: "sans frais",
      rappelezMoi: "Rappelez-moi",
      courriel: "Courriel",
      // Garanties
      certitudeAttitude: "Certitude sans attitude. On s'occupe de vous.",
      encadrementPro: "Encadrement professionnel",
      verificationPermis: "Vérification de la validité des permis de conduire des conducteurs.",
      protectionDonnees: "Protection des données et de la confidentialité des utilisateurs.",
      surveillanceActivite: "Surveillance de l'activité des membres et des réservations.",
      oreillesOuvertes: "Nos oreilles sont toujours ouvertes",
      assistanceTelephonique: "Assistance téléphonique 7 jours sur 7, 365 jours par année.",
      vousDabord: "AmigoExpress, c'est vous d'abord, toujours à l'écoute de vos suggestions.",
      equipeHumaine: "Une vraie équipe humaine, sans robots ni bots, pour vous accompagner à chaque étape.",
      communauteFormidable: "Une communauté formidable",
      consultezEvaluations: "Consultez les évaluations des membres et leur profil.",
      voyagezRencontres: "Voyagez en faisant des rencontres enrichissantes.",
      economiesToutMonde: "Passagers et conducteurs réalisent des économies, tout le monde est gagnant.",
      // Bannière
      amigoLocal: "AmigoExpress local",
      nouveauService: "Un nouveau service pour les trajets du quotidien",
      economisezQuotidien: "Économisez au quotidien avec notre nouvelle plateforme de covoiturage local. Domicile, travail, école, etc. C'est entièrement gratuit!",
      creerFiche: "Créer ma fiche gratuitement",
      // Blog
      conseilsGuides: "Conseils, guides et actualités",
      liensUtiles: "Quelques liens utiles pour avoir des nouvelles d'AmigoExpress!",
      titreArticle1: "Combien coûte un trajet entre deux villes au Canada?",
      texteArticle1: "Autocar, train, avion, auto ou covoiturage : ce que coûte un trajet entre deux villes canadiennes, selon quand et comment vous réservez.",
      titreArticle2: "Transformer les trajets quotidiens",
      texteArticle2: "Infolettre AmigoExpress : covoiturage local, nouveautés et rappels.",
      titreArticle3: "Le moyen le moins cher pour aller de Montréal à Toronto",
      texteArticle3: "Autocar, train, avion ou covoiturage : le moyen le moins cher entre Montréal et Toronto dépend du délai de réservation et du temps disponible.",
      lire: "Lire",
      visiterBlogue: "Visiter le blogue",
      // App mobile
      appsMobiles: "Applications mobiles",
      disponibleIphone: "Disponible sur iPhone et Android",
      // Footer
      siJavaisAiles: "Si j'avais les ailes d'un ange, je partirais pour... Québec!",
      lesAilesAnge: "* Les ailes d'un ange",
      liensRapides: "liens rapides",
      consulterDeparts: "Consulter les départs",
      annoncerDepart: "Annoncer un départ",
      abonnement: "Abonnement",
      acheterCredits: "Acheter des crédits de réservation",
      monCompte: "Mon compte",
      amigoV1: "Amigo v1.0",
      ressources: "ressources",
      commentChauffeur: "Comment devenir chauffeur?",
      commentPassager: "Comment devenir passager?",
      conseilsPassagers: "Conseils aux passagers",
      conseilsConducteurs: "Conseils aux conducteurs",
      faqFooter: "FAQ",
      blogFooter: "blog",
      destinationFooter: "Destination",
      aProposNous: "à propos de nous",
      carrieres: "carrières",
      dossierPresse: "Dossier de presse",
      contactezNous: "Contactez-nous",
      conditionsUtilisation: "Conditions d'utilisation | Charte de responsabilité | Vie privée",
      sansFraisFooter: "1-877-264-4697 (sans frais)",
      copyright: "© 2026 covoiturage AmigoExpress tous droits réservés",
      // Chat
      chatTitle: "Une question ? Parlez à l'équipe",
      chatMsg: "Bonjour ! Comment pouvons-nous vous aider ?",
      ph: "Votre message…",
      send: "Envoyer"
    },
    en: {
      // Header
      post: "Post",
      search: "Search",
      daily: "Daily rides",
      new: "NEW",
      help: "Help",
      faq: "FAQ",
      contact: "Contact the team",
      safety: "Safety tips",
      signup: "Sign up",
      login: "Log in",
      langBtn: "Français",
      // Hero
      h1a: "The reference in ridesharing for",
      h1b: "20 years now",
      lead: "Our team is here to support you every step of the way. No robots, no endless menus. Just humans.",
      onApp: "on the App Store",
      onPlay: "on Google Play",
      reviews: "reviews",
      reviews2: "reviews",
      // Bande recherche
      depart: "From",
      destination: "To",
      date: "Date",
      btnRechercher: "Search",
      btnAnnoncer: "+ Post",
      // Cartes
      deuxFacons: "Two ways to hit the road with Amigo",
      passager: "Passenger",
      seFaireConduire: "Get a ride",
      textePassager: "Travel at low cost, even last minute! Choose your trip and book a seat online. We're here to help.",
      reserverPlace: "Book a seat",
      plusInfo: "more info please!",
      conducteur: "Driver",
      conduireAmigos: "Drive amigos",
      texteConducteur: "Save money on your trips by offering free seats in your car. You'll love traveling even more.",
      donnerLift: "Publish my route",
      commentMarche: "yes, but how does it work?",
      // Carrousel
      pretPartir: "Ready to go?",
      trajetsPopulaires: "Our most popular trips",
      // Statistiques
      vingtAnsImpact: "20 years of impact",
      communauteDifference: "The community made a difference, one trip at a time",
      annoncesAnnee: "Listings per year",
      membresInscrits: "Registered members",
      kmParcourus: "Kilometers traveled",
      succesMesure: "Success is measured by impact, not noise.",
      // Avis
      ilsReviennent: "They come back for more than the ride.",
      avisSousTitre: "Reviews about reliable trips, verified drivers and a real team available when something unexpected happens.",
      satisfactionMoyenne: "AVERAGE SATISFACTION",
      plusAvis: "More than 12,000 community reviews",
      texteSatisfaction: "Based on over 12,000 real reviews from members who use AmigoExpress to travel between cities, post trips and book with confidence.",
      equipeDispo: "Our team is available 7 days a week",
      conducteursVerifies: "Drivers verified by the team",
      trajetsPopulairesQc: "Popular trips across Quebec",
      voirPlusAvis: "See more reviews +",
      // Support
      humainsRepondent: "Humans who answer you, really.",
      heuresService: "SERVICE HOURS",
      lunVen: "Mon – Fri",
      samedi: "Saturday",
      dimanche: "Sunday",
      // Contact
      sansFrais: "toll-free",
      rappelezMoi: "Call me back",
      courriel: "Email",
      // Garanties
      certitudeAttitude: "Confidence without attitude. We take care of you.",
      encadrementPro: "Professional supervision",
      verificationPermis: "Verification of drivers' valid licenses.",
      protectionDonnees: "Protection of user data and privacy.",
      surveillanceActivite: "Monitoring of member activity and bookings.",
      oreillesOuvertes: "Our ears are always open",
      assistanceTelephonique: "Phone support 7 days a week, 365 days a year.",
      vousDabord: "AmigoExpress is you first, always listening to your suggestions.",
      equipeHumaine: "A real human team, no robots or bots, to support you every step of the way.",
      communauteFormidable: "A wonderful community",
      consultezEvaluations: "Check member reviews and profiles.",
      voyagezRencontres: "Travel while making enriching encounters.",
      economiesToutMonde: "Passengers and drivers save money, everyone wins.",
      // Bannière
      amigoLocal: "AmigoExpress local",
      nouveauService: "A new service for daily commutes",
      economisezQuotidien: "Save daily with our new local carpooling platform. Home, work, school, etc. It's completely free!",
      creerFiche: "Create my profile for free",
      // Blog
      conseilsGuides: "Tips, guides and news",
      liensUtiles: "Some useful links to get news from AmigoExpress!",
      titreArticle1: "How much does a trip between two Canadian cities cost?",
      texteArticle1: "Bus, train, plane, car or carpooling: what a trip between two Canadian cities costs, depending on when and how you book.",
      titreArticle2: "Transforming daily commutes",
      texteArticle2: "AmigoExpress newsletter: local carpooling, news and reminders.",
      titreArticle3: "The cheapest way to go from Montreal to Toronto",
      texteArticle3: "Bus, train, plane or carpooling: the cheapest way between Montreal and Toronto depends on booking time and available time.",
      lire: "Read",
      visiterBlogue: "Visit the blog",
      // App mobile
      appsMobiles: "Mobile apps",
      disponibleIphone: "Available on iPhone and Android",
      // Footer
      siJavaisAiles: "If I had the wings of an angel, I would leave for... Quebec!",
      lesAilesAnge: "* The wings of an angel",
      liensRapides: "quick links",
      consulterDeparts: "View departures",
      annoncerDepart: "Post a departure",
      abonnement: "Subscription",
      acheterCredits: "Buy booking credits",
      monCompte: "My account",
      amigoV1: "Amigo v1.0",
      ressources: "resources",
      commentChauffeur: "How to become a driver?",
      commentPassager: "How to become a passenger?",
      conseilsPassagers: "Passenger tips",
      conseilsConducteurs: "Driver tips",
      faqFooter: "FAQ",
      blogFooter: "blog",
      destinationFooter: "Destination",
      aProposNous: "about us",
      carrieres: "careers",
      dossierPresse: "Press kit",
      contactezNous: "Contact us",
      conditionsUtilisation: "Terms of use | Responsibility charter | Privacy",
      sansFraisFooter: "1-877-264-4697 (toll-free)",
      copyright: "© 2026 AmigoExpress carpooling all rights reserved",
      // Chat
      chatTitle: "Got a question? Talk to the team",
      chatMsg: "Hello! How can we help you?",
      ph: "Your message…",
      send: "Send"
    }
  };

  let currentLang = "fr";

  // =====================================================
  // FONCTION DE TRADUCTION
  // =====================================================
  function applyLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const value = dict[lang][key];
      if (value) {
        el.textContent = value;
      }
    });

    
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      const value = dict[lang][key];
      if (value) {
        el.placeholder = value;
      }
    });

    
    const langBtn = document.getElementById("lang");
    if (langBtn) {
      langBtn.textContent = dict[lang].langBtn;
    }

 
    const chatInput = document.getElementById("chatInput");
    if (chatInput) {
      chatInput.placeholder = dict[lang].ph;
    }

    const chatFormBtn = document.querySelector("#chatForm button");
    if (chatFormBtn) {
      chatFormBtn.textContent = dict[lang].send;
    }
  }

  
  const langBtn = document.getElementById("lang");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      applyLang(currentLang === "fr" ? "en" : "fr");
    });
  }

  // =====================================================
  // MENU DÉROULANT "AIDE"
  // =====================================================
  const helpDropdown = document.getElementById("help");
  if (helpDropdown) {
    const helpButton = helpDropdown.querySelector("button");
    const helpMenu = helpDropdown.querySelector(".menu");

    if (helpButton && helpMenu) {
      helpButton.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        const isOpen = helpDropdown.classList.toggle("open");
        
        if (isOpen) {
          helpMenu.style.display = "block";
          helpButton.setAttribute("aria-expanded", "true");
        } else {
          helpMenu.style.display = "none";
          helpButton.setAttribute("aria-expanded", "false");
        }
      });

      document.addEventListener("click", (e) => {
        if (!helpDropdown.contains(e.target)) {
          helpDropdown.classList.remove("open");
          helpMenu.style.display = "none";
          helpButton.setAttribute("aria-expanded", "false");
        }
      });
    }
  }

  // =====================================================
  // MENU MOBILE (BURGER)
  // =====================================================
  const burger = document.getElementById("burger");
  if (burger) {
    burger.addEventListener("click", () => {
      const header = document.getElementById("header");
      if (header) {
        header.classList.toggle("open");
      }
    });
  }

  // =====================================================
  // PANIER
  // =====================================================
  let cartCount = 0;
  const cart = document.getElementById("cart");
  if (cart) {
    cart.addEventListener("click", () => {
      const counter = document.getElementById("cartCount");
      if (counter) {
        cartCount = cartCount + 1;
        counter.textContent = cartCount;
        counter.classList.add("show");
      }
    });
  }

  // =====================================================
  // CHAT
  // =====================================================
  const chatBox = document.getElementById("chatBox");
  const chatBtn = document.getElementById("chatBtn");
  if (chatBtn && chatBox) {
    chatBtn.addEventListener("click", () => {
      chatBox.classList.toggle("open");
    });
  }

  const chatForm = document.getElementById("chatForm");
  if (chatForm) {
    chatForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("chatInput");
      if (!input || !input.value.trim()) return;

      const message = document.getElementById("chatMsg");
      if (message) {
        if (currentLang === "fr") {
          message.textContent = "Merci ! Un membre de l'équipe vous répond très vite.";
        } else {
          message.textContent = "Thanks! A team member will reply shortly.";
        }
      }
      input.value = "";
    });
  }

  // =====================================================
  // CHARGEMENT (LOADER)
  // =====================================================
 
const loader = document.getElementById("loader");
const content = document.getElementById("content");

if (loader && content) {
  const DUREE = 3000; // 3 secondes
  
  setTimeout(() => {
    loader.classList.add("hide"); 
    setTimeout(() => {
      loader.classList.add("gone"); 
      content.classList.remove("is-hidden");
    }, 400);
  }, DUREE);
}

  // =====================================================
  // BOUTON "LIRE PLUS" (AVIS)
  // =====================================================
  document.querySelectorAll(".lire-plus").forEach((btn) => {
    const texte = btn.previousElementSibling;
    if (texte) {
      btn.addEventListener("click", () => {
        const isOpen = texte.classList.toggle("ouvert");
        btn.classList.toggle("ouvert", isOpen);

        const textNode = Array.from(btn.childNodes).find(
          (node) => node.nodeType === 3
        );

        if (textNode) {
          textNode.textContent = isOpen ? "Lire moins " : "Lire plus ";
        }
      });
    }
  });

});