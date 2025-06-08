import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  isEnglish: boolean = true;

  setLanguage(lang: string): void {
    this.isEnglish = lang === 'en';
  }

  get currentLang() {
    return this.isEnglish ? 'en' : 'de';
  }

  get translationsMap() {
    return this.translations[this.currentLang];
  }

  toggleLanguage(): void {
    this.isEnglish = !this.isEnglish;
    const newLang = this.isEnglish ? 'en' : 'de';
    this.setLanguage(newLang);
    localStorage.setItem('language', newLang);
  }

  getLanguage(): string {
    return this.isEnglish ? 'en' : 'de';
  }
  private translations = {
    en: {
      header: {
        aboutMe: 'About me',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact',
      },
      hero: {
        defaultText: "Hello world",
        hoverText: "I'm Edgar Stroh",
        buttonText: "Get in Touch",
      },
      about: {
        location: 'Based in Cologne',
        relocation: 'Open to relocate',
        remote: 'Open to work remote',
        aboutTitle: 'About me',
        aboutHeader: "WHO'S EDGAR",
        aboutText: `Hey, I'm Edgar, a 30-year-old from Cologne currently training to become a frontend developer.  
        I made a conscious shift in my career and lifestyle after realizing I wasn't happy with where I was - now I'm focused on growth, both in tech and fitness.  
        I'm passionate about coding, strength training, health, and stock exchange market.  
        Always curious, always learning - and excited about what's next.`,
        aboutBottom: "Let's collaborate and build something remarkable together!",
        talkButton: "Let's talk"
      },
      skills: {
        title: 'My Stack',
        skillSet: 'Skill set',
        Text: ` I have hands-on experience with HTML, CSS, JavaScript, and Angular to create dynamic and
                responsive web interfaces.
                I use Git for version control, Visual Studio Code as my main development environment, and Figma
                for UI planning.`,
        stickerText: 'Also, i`m interested in diving into:',
      },
      projects: {
        titleH3: 'My Craft',
        titleH2: 'Projects',
        projectDetailsButton: 'Project details',
        description: `Check out some of the projects I've built to sharpen my frontend skills and explore real-world use cases.  
                      I focus on writing clean, efficient code and designing responsive, user-friendly interfaces that feel good on any device.  
                      Whether it's a game, a productivity tool, or an interactive web app – each project taught me something new and pushed me further.`,
        joinDescription: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
        pokedexDescription: 'An interactive Pokédex web app to browse and view Pokémon stats, evolutions, and abilities using real-time data from a public API.',
        elpollolocoDescription: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      },
      singleproject: {
        back: 'Go Back',
        details: 'Implementation Details',
        duration: 'Duration:',
        next: 'Next Project',
        join: {
          description: 'Task manager inspired by the Kanban system. Create and organize tasks using drag-and-drop functionality, assign users and categories.',
          details: 'Developed with JavaScript, the app features a modular architecture, dynamic task management, and intuitive drag-and-drop interactions. Users can create, edit, and assign tasks to categories and team members, enhancing workflow efficiency.',
          duration: '6 weeks',
        },
        pokedex: {
          description: 'Pokedex is a web application that lets you explore and search for Pokémon, displaying detailed information like stats, evolutions, and abilities in a clean and interactive interface.',
          details: 'Powered by a public Pokémon API, the app fetches and renders data in real-time using JavaScript, offering users an engaging and responsive browsing experience.',
          duration: '2 weeks',
        },
        elpolloloco: {
          description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
          details: 'The game is built using object-oriented JavaScript, with a modular structure for characters, enemies, and game mechanics. It includes collision detection, animation handling, sound effects, and a well-organized game loop for real-time interactions.',
          duration: '5 weeks',
        }
      },
      testimonials: {
        headerSmall: "in Their Words:",
        headerLarge: "Colleagues' Thoughts",

        person1: {
          text: "Edgar impresses with his structured and precise work style. Thanks to his technical understanding, he solves complex tasks efficiently and reliably. He is also a good team player who actively supports colleagues.",
          job: "Production Manager"
        },

        person2: {
          text: "With his practical knowledge from the industry, Edgar brings a solution-oriented approach that optimizes processes and improves the quality of results. He finds efficient ways to overcome challenges.",
          job: "Industrial Mechanic"
        },

        person3: {
          text: "Edgar is a dedicated and technically skilled employee who approaches challenges analytically and delivers convincing results through his methodical work. His reliability makes him a valuable asset.",
          job: "Equipment Owner"
        }
      },
      contact: {
        titleH3: 'Contact me',
        titleH2: 'Ready to work <br>together?',
        text: `I'm always up for a new challenge where I can bring in both my hands-on experience from the industrial world
        and my growing frontend expertise. I love building user-friendly, clean interfaces and enjoy solving problems
        with a mix of logic and creativity.
        <br><br>
        If you're looking for someone who knows what it means to work hard, stay
        curious, and keep improving - let's connect and make it happen.`,
      },
      contactformular: {
        nameLabel: "What's your name?",
        namePlaceholder: "Your name goes here",
        namePlaceholderError: "Oops! it seems your name is missing",

        emailLabel: "What's your e-mail?",
        emailPlaceholder: "youremail@email.com",
        emailPlaceholderError: "Hoppla! your email is required",

        subjectLabel: "How can I help you?",
        subjectPlaceholder: "Hello Edgar, I am interested in...",
        subjectPlaceholderError: "What do you need to develop?",

        privacyTextBefore: "I've read the",
        privacyPolicy: "Privacy Policy",
        privacyTextAfter: "and agree to the processing of my data as outlined.",
        privacyError: "Please accept the privacy policy.",

        emailError: "Check your E-Mail again.",

        subjectError: "Text is too short.",

        submitButton: "Submit",

        messageSuccess: "Message sent successfully!"
      },
      imprint: {
        title: "Imprint",
        infoLine: "Information in accordance with § 5 TMG",
        name: "Edgar Stroh",
        addressLine1: "Huhnsgasse 34",
        addressLine2: "50676 Cologne",
        representedByTitle: "Represented by:",
        representedByName: "Edgar Stroh",
        contactTitle: "Contact:",
        phoneLabel: "Phone",
        emailLabel: "Email",
        phone: "Phone: +49 179 4396015",
        email: "Email:",
        emailAddress: "edgarstroh@googlemail.com",
        disclaimerTitle: "Disclaimer:",
        liabilityContentTitle: "Liability for content",
        liabilityContentText: `The contents of our pages were created with the greatest care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content. As a service provider, we are responsible for our own content on these pages according to § 7 para. 1 TMG under general laws. According to §§ 8 to 10 TMG, we, as a service provider, are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information according to general laws remain unaffected. However, liability in this regard is only possible from the point in time at which we become aware of a specific legal violation. Upon becoming aware of such violations, we will remove these contents immediately.`,
        liabilityLinksTitle: "Liability for links",
        liabilityLinksText: `Our offer contains links to external websites of third parties, on whose content we have no influence. Therefore, we cannot assume any liability for these foreign contents. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not identifiable at the time of linking. A permanent content control of the linked pages is, however, unreasonable without concrete evidence of a legal violation. Upon becoming aware of legal violations, we will remove such links immediately.`,
        copyrightTitle: "Copyright",
        copyrightText: `The contents and works created by the site operators on these pages are subject to German copyright law. The reproduction, editing, distribution, and any kind of utilization outside the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use. As far as the content on this page was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. If you still become aware of a copyright infringement, we ask for an appropriate notice. Upon becoming aware of legal violations, we will remove such content immediately.`,
        dataProtectionTitle: "Data Protection",
        dataProtectionText: `The use of our website is generally possible without providing personal data. As far as personal data (e.g. name, address, or email addresses) is collected on our pages, this is always done on a voluntary basis, if possible. This data will not be passed on to third parties without your explicit consent. We point out that data transmission over the internet (e.g., when communicating by email) can have security gaps. A complete protection of the data from access by third parties is not possible. The use of contact data published in the context of the imprint obligation by third parties for the purpose of sending unsolicited advertisements and information materials is hereby expressly rejected. The operators of the pages expressly reserve the right to take legal action in the case of unsolicited sending of advertising information, e.g., by spam emails.`,
        imprintByText: `Imprint by`,
        imprintByLinkText: `WebsiteWissen.com`,
        imprintByLinkUrl: `https://websitewissen.com`,
        imprintByGuideText: `the guide for WordPress Websites`,
        imprintByGuideUrl: `https://websitewissen.com/wordpress-website-erstellen`,
        imprintByHostingText: `WordPress Hosting`,
        imprintByHostingUrl: `https://websitewissen.com/wordpress-hosting-vergleich`,
        imprintByCostsText: `Website Costs`,
        imprintByCostsUrl: `https://websitewissen.com/website-kosten`,
        imprintByTemplateText: `based on a template from Kanzlei Hasselbach Rechtsanwälte`,
        imprintByTemplateUrl: `https://www.kanzlei-hasselbach.de/`

      },
      privacyPolicy: {
        title: 'Privacy Policy',
        point1Title: '1. Privacy at a Glance',
        point1Text: 'The following notes provide a simple overview of what happens with your personal data when you visit our website. Personal data is all data with which you can be personally identified.',
        point2Title: '2. Responsible Party',
        point2Name: 'Edgar Stroh',
        point2Street: 'Huhnsgasse 34',
        point2City: '50676 Cologne',
        point2Email: 'edgarstroh@googlemail.com',
        point3Title: '3. Hosting',
        point3HostingInfo: 'This website is hosted on GitHub Pages. The provider is GitHub Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA.',
        point3HostingProvider: 'GitHub automatically stores logfiles (e.g., IP address, date and time, browser type) when the website is accessed to ensure technical security.',
        point3LogfileInfo: 'Further information can be found in GitHub\'s privacy policy:',
        point3PrivacyPolicyLink: 'https://docs.github.com/de/site-policy/privacy-policies/github-privacy-statement',
        point4Title: '4. Collection and Use of Personal Data',
        point4Text: 'If you contact us via the contact form or register for a project, your data (e.g., name, email address, password) will be stored to process your request or to use the project. We do not share this data without your consent.',
        point5Title: '5. Registration and Login',
        point5Text: 'Certain features of this website (e.g., a project in the portfolio) require registration. The personal data collected during this process will be used solely for the provision of this service. Data transfer during registration or login is encrypted.',
        point6Title: '6. Google Fonts',
        point6GoogleFontsUsage: 'This website may use fonts from Google Fonts. If these are embedded via external links, your browser loads the required fonts directly from Google\'s servers when you visit the page.',
        point6Provider: 'The provider is Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland.',
        point6MoreInfo: 'Further information can be found at:',
        point6FAQLink: 'https://developers.google.com/fonts/faq',
        point6FAQLinkText: 'https://developers.google.com/fonts/faq',
        andText: 'and in Google\'s privacy policy:',
        point6GooglePrivacyLink: 'https://policies.google.com/privacy',
        point6GooglePrivacyLinkText: 'https://policies.google.com/privacy',
        point7Title: '7. Your Rights',
        point7Text: 'You have the right to request information about the origin, recipient, and purpose of your stored personal data at any time, free of charge. You also have the right to request the correction or deletion of this data. For these and further questions regarding data protection, you can contact us at any time.',
        point8Title: '8. Objection to Advertising Emails',
        point8Text: 'The use of contact data published in the context of the imprint obligation for the purpose of sending unsolicited advertising is hereby expressly rejected.'
      },

      footer: {
        legalNotice: 'Legal Notice',
      },
    },

    de: {
      header: {
        aboutMe: 'Über mich',
        skills: 'Skills',
        projects: 'Projekte',
        contact: 'Kontakt',
      },
      hero: {
        defaultText: "Hallo Welt",
        hoverText: "Ich heiße Edgar Stroh",
        buttonText: "In Kontakt kommen",
      },
      about: {
        location: 'Wohnhaft in Köln',
        relocation: 'Offen für Umzug',
        remote: 'Offen für Remote-Arbeit',
        aboutTitle: 'Über mich',
        aboutHeader: "Wer ist EDGAR",
        aboutText: `Hey, ich bin Edgar, 30 aus Köln, und mache aktuell eine Weiterbildung zum Frontend-Entwickler.
        Nach einem bewussten Neustart liegt mein Fokus jetzt voll auf Tech, Fitness und persönlichem Wachstum.
        Ich liebe Code, Krafttraining, Gesundheit und die Börse.
        Ich bin Neugierig, motiviert und bereit für alles, was kommt.`,
        aboutBottom: 'Lass uns gemeinsam etwas Großartiges erschaffen!',
        talkButton: 'Lass uns reden'
      },
      skills: {
        title: 'Mein Stack',
        skillSet: 'Skill set',
        Text: `Ich habe praktische Erfahrung mit HTML, CSS, JavaScript und Angular zur Entwicklung dynamischer, responsiver Web-Oberflächen.
                Git nutze ich für Versionskontrolle, VS Code als Haupt-Editor und Figma für UI-Design.`,
        stickerText: 'Ich interessiere mich für:',

      },
      projects: {
        titleH3: 'Mein Handwerk',
        titleH2: 'Projekte',
        projectDetailsButton: 'Projektdetails',
        description: `Hier findest du Projekte, mit denen ich meine Frontend-Skills geschärft und echte Use Cases umgesetzt habe.  
                      Mein Fokus liegt auf sauberem, effizientem Code und responsivem Design – benutzerfreundlich auf jedem Gerät.  
                      Ob Spiel, Produktivitätstool oder interaktive Web-App – jedes Projekt hat mich weitergebracht und mir etwas Neues beigebracht.`,
        joinDescription: 'Task-Manager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben mit Drag-and-Drop-Funktionen, weise Benutzer und Kategorien zu.',
        pokedexDescription: 'Eine interaktive Pokédex-Web-App, um Pokémon-Statistiken, Entwicklungen und Fähigkeiten in Echtzeit über eine öffentliche API zu durchsuchen und anzusehen.',
        elpollolocoDescription: 'Spring-, Lauf- und Wurfspiel basierend auf einem objektorientierten Ansatz. Hilf Pepe dabei, Münzen und Tabasco-Salsa zu finden, um gegen das verrückte Huhn zu kämpfen.',
      },
      singleproject: {
        back: 'Zurück',
        details: 'Durchführungsdetails',
        duration: 'Dauer:',
        next: 'Nächstes Projekt',
        join: {
          description: 'Ein Aufgabenmanager, inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben per Drag-and-Drop, weise Nutzer und Kategorien zu.',
          details: 'Entwickelt mit JavaScript, bietet die App eine modulare Architektur, dynamisches Aufgabenmanagement und eine intuitive Drag-and-Drop-Bedienung. Nutzer können Aufgaben erstellen, bearbeiten und Kategorien oder Teammitgliedern zuweisen – für eine effizientere Zusammenarbeit.',
          duration: '6 Wochen',
        },
        pokedex: {
          description: 'Eine Webanwendung zum Durchstöbern und Suchen von Pokémon – mit übersichtlicher Darstellung von Werten, Entwicklungen und Fähigkeiten.',
          details: 'Basierend auf einer öffentlichen Pokémon-API lädt die App Daten in Echtzeit per JavaScript und stellt sie in einer responsiven, interaktiven Benutzeroberfläche dar. Das sorgt für ein spannendes und reaktionsschnelles Nutzungserlebnis.',
          duration: '2 Wochen',
        },
        elpolloloco: {
          description: 'Jump-&-Run-Spiel mit Wurfmechanik, basierend auf objektorientierter Programmierung. Hilf Pepe dabei, Münzen und Tabasco zu sammeln, um gegen das verrückte Huhn zu kämpfen.',
          details: 'Das Spiel wurde mit objektorientiertem JavaScript entwickelt. Es besitzt eine modulare Struktur für Figuren, Gegner und Spielmechaniken. Es beinhaltet Kollisionserkennung, Animationen, Soundeffekte und eine klar strukturierte Game Loop für flüssige Echtzeit-Interaktionen.',
          duration: '5 Wochen',
        }
      },
      testimonials: {
        headerSmall: "in Ihren Worten:",
        headerLarge: "Gedanken der Kollegen",

        person1: {
          text: "Edgar überzeugt durch seine strukturierte und präzise Arbeitsweise. Dank seines technischen Verständnisses löst er komplexe Aufgaben effizient und zuverlässig. Außerdem ist er ein guter Teamplayer, der Kollegen aktiv unterstützt.",
          job: "Produktionsleiter"
        },

        person2: {
          text: "Mit seinem praxisnahen Wissen aus der Industrie bringt Edgar einen lösungsorientierten Ansatz ein, der Prozesse optimiert und die Qualität der Ergebnisse verbessert. Er findet effiziente Wege, Herausforderungen zu meistern.",
          job: "Industriemechaniker"
        },

        person3: {
          text: "Edgar ist ein engagierter und technikaffiner Mitarbeiter, der Herausforderungen analytisch angeht und durch sein methodisches Vorgehen überzeugende Resultate erzielt. Seine Zuverlässigkeit macht ihn zu einer wertvollen Unterstützung.",
          job: "Maschinenbesitzer "
        }
      },
      contact: {
        titleH3: 'Schreib mir',
        titleH2: 'Lust, gemeinsam <br> loszulegen?',
        text: `Ich freue mich auf neue Herausforderungen, in denen ich sowohl meine praktische Erfahrung aus der Industrie
        als auch meine wachsenden Frontend-Kenntnisse einbringen kann. Ich liebe es, benutzerfreundliche, saubere Oberflächen zu bauen
        und Probleme mit einer Mischung aus Logik und Kreativität zu lösen.
        <br><br>
        Wenn du jemanden suchst, der weiß, was es heißt, hart zu arbeiten, neugierig zu bleiben und sich ständig weiterzuentwickeln – lass uns verbinden und gemeinsam etwas bewegen.`,
      },
      contactformular: {
        nameLabel: "Wie heißt du?",
        namePlaceholder: "Dein Name hier",
        namePlaceholderError: "Ups! Dein Name fehlt",

        emailLabel: "Wie lautet deine E-Mail?",
        emailPlaceholder: "deine@email.com",
        emailPlaceholderError: "Hoppla! Deine E-Mail wird benötigt",

        subjectLabel: "Wie kann ich dir helfen?",
        subjectPlaceholder: "Hallo Edgar, ich interessiere mich für...",
        subjectPlaceholderError: "Was möchtest du entwickelt haben?",

        privacyTextBefore: "Ich habe die",
        privacyPolicy: "Datenschutzerklärung",
        privacyTextAfter: "gelesen und stimme der Verarbeitung meiner Daten zu.",
        privacyError: "Bitte akzeptiere die Datenschutzerklärung.",


        subjectError: "Der Text ist zu kurz.",

        emailError: "Überprüfe nochmal deine E-Mail.",

        submitButton: "Absenden",

        messageSuccess: "Nachricht erfolgreich gesendet!"

      },
      imprint: {
        title: "Impressum",
        infoLine: "Information gemäß § 5 TMG",
        name: "Edgar Stroh",
        addressLine1: "Huhnsgasse 34",
        addressLine2: "50676 Köln",
        representedByTitle: "Vertreten durch:",
        representedByName: "Edgar Stroh",
        contactTitle: "Kontakt:",
        phoneLabel: "Phone",
        emailLabel: "Email",
        phone: "Telefon: +49 179 4396015",
        email: "E-Mail:",
        emailAddress: "edgarstroh@googlemail.com",
        disclaimerTitle: "Haftungsausschluss:",
        liabilityContentTitle: "Haftung für Inhalte",
        liabilityContentText: `Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.`,
        liabilityLinksTitle: "Haftung für Links",
        liabilityLinksText: `Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.`,
        copyrightTitle: "Urheberrecht",
        copyrightText: `Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.`,
        dataProtectionTitle: "Datenschutz",
        dataProtectionText: `Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. Die Nutzung von im Rahmen des Impressums veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.`,
        imprintByText: `Impressum von`,
        imprintByLinkText: `WebsiteWissen.com`,
        imprintByLinkUrl: `https://websitewissen.com`,
        imprintByGuideText: `dem Ratgeber für WordPress-Websites`,
        imprintByGuideUrl: `https://websitewissen.com/wordpress-website-erstellen`,
        imprintByHostingText: `WordPress Hosting`,
        imprintByHostingUrl: `https://websitewissen.com/wordpress-hosting-vergleich`,
        imprintByCostsText: `Website Kosten`,
        imprintByCostsUrl: `https://websitewissen.com/website-kosten`,
        imprintByTemplateText: `basierend auf einer Vorlage von Kanzlei Hasselbach Rechtsanwälte`,
        imprintByTemplateUrl: `https://www.kanzlei-hasselbach.de/`
      },
      privacyPolicy: {
        title: 'Datenschutzerklärung',
        point1Title: '1. Datenschutz auf einen Blick',
        point1Text: 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.',
        point2Title: '2. Verantwortliche Stelle',
        point2Name: 'Edgar Stroh',
        point2Street: 'Huhnsgasse 34',
        point2City: '50676 Köln',
        point2Email: 'edgarstroh@googlemail.com',
        point3Title: '3. Hosting',
        point3HostingInfo: 'Diese Website wird bei GitHub Pages gehostet. Anbieter ist die GitHub Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA.',
        point3HostingProvider: 'GitHub speichert automatisch Logfiles (z. B. IP-Adresse, Datum und Uhrzeit, Browsertyp), wenn auf die Website zugegriffen wird, um die technische Sicherheit zu gewährleisten.',
        point3LogfileInfo: 'Weitere Informationen finden Sie in der Datenschutzerklärung von GitHub:',
        point3PrivacyPolicyLink: 'https://docs.github.com/de/site-policy/privacy-policies/github-privacy-statement',
        point4Title: '4. Erhebung und Verarbeitung personenbezogener Daten',
        point4Text: 'Wenn Sie uns über das Kontaktformular kontaktieren oder sich für ein Projekt registrieren, werden Ihre Daten (z. B. Name, E-Mail-Adresse, Passwort) gespeichert, um Ihre Anfrage zu bearbeiten oder das Projekt zu nutzen. Wir geben diese Daten ohne Ihre Einwilligung nicht weiter.',
        point5Title: '5. Registrierung und Anmeldung',
        point5Text: 'Für bestimmte Funktionen dieser Website (z. B. ein Projekt im Portfolio) ist eine Registrierung erforderlich. Die bei diesem Vorgang erhobenen personenbezogenen Daten werden ausschließlich zur Bereitstellung dieses Dienstes verwendet. Die Datenübertragung bei Registrierung oder Anmeldung ist verschlüsselt.',
        point6Title: '6. Google Fonts',
        point6GoogleFontsUsage: 'Diese Website verwendet möglicherweise Schriftarten von Google Fonts. Wenn diese über externe Links eingebunden sind, lädt Ihr Browser die benötigten Schriftarten direkt von den Servern von Google, wenn Sie die Seite besuchen.',
        point6Provider: 'Anbieter ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.',
        point6MoreInfo: 'Weitere Informationen finden Sie unter:',
        point6FAQLink: 'https://developers.google.com/fonts/faq',
        point6FAQLinkText: 'https://developers.google.com/fonts/faq',
        andText: 'und in der Datenschutzerklärung von Google:',
        point6GooglePrivacyLink: 'https://policies.google.com/privacy',
        point6GooglePrivacyLinkText: 'https://policies.google.com/privacy',
        point7Title: '7. Ihre Rechte',
        point7Text: 'Sie haben das Recht, jederzeit unentgeltlich Auskunft über die Herkunft, Empfänger und den Zweck Ihrer gespeicherten personenbezogenen Daten zu verlangen. Außerdem haben Sie das Recht auf Berichtigung oder Löschung dieser Daten. Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden.',
        point8Title: '8. Widerspruch gegen Werbe-E-Mails',
        point8Text: 'Die Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung wird hiermit ausdrücklich widersprochen.'
      },
      footer: {
        legalNotice: 'Impressum',
      },
    },
  };

}
