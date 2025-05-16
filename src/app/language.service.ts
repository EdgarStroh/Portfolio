import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LanguageService {

  isEnglish = true;

  private translations = {
    en: {
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
        description: `Check out some of the projects I've built to sharpen my frontend skills and explore real-world use cases.  
      I focus on writing clean, efficient code and designing responsive, user-friendly interfaces that feel good on any device.  
      Whether it's a game, a productivity tool, or an interactive web app – each project taught me something new and pushed me further.`
      },
    },
    de: {
      about: {
        location: 'Wohnhaft in Köln',
        relocation: 'Offen für Umzug',
        remote: 'Offen für Remote-Arbeit',
        aboutTitle: 'About me',
        aboutHeader: "WHO'S EDGAR",
        aboutText: `Hey, ich bin Edgar, 30 aus Köln, und mache aktuell eine Weiterbildung zum Frontend-Entwickler.
        Nach einem bewussten Neustart liegt mein Fokus jetzt voll auf Tech, Fitness und persönlichem Wachstum.
        Ich liebe Code, Krafttraining, Gesundheit – und die Börse.
        Neugierig, motiviert und bereit für alles, was kommt.`,
        aboutBottom: 'Lass uns gemeinsam etwas Großartiges erschaffen!',
        talkButton: 'Lass uns reden'
      },
      skills: {
        title: 'My Stack',
        skillSet: 'Skill set',
        Text: `Ich habe praktische Erfahrung mit HTML, CSS, JavaScript und Angular zur Entwicklung dynamischer, responsiver Web-Oberflächen.
                Git nutze ich für Versionskontrolle, VS Code als Haupt-Editor und Figma für UI-Design.`,
        stickerText: 'Worauf ich Lust hätte, mehr zu lernen:',

      }, 
      projects: {
          description: `Hier findest du Projekte, mit denen ich meine Frontend-Skills geschärft und echte Use Cases umgesetzt habe.  
      Mein Fokus liegt auf sauberem, effizientem Code und responsivem Design – benutzerfreundlich auf jedem Gerät.  
      Ob Spiel, Produktivitätstool oder interaktive Web-App – jedes Projekt hat mich weitergebracht und mir etwas Neues beigebracht.`
      },
    },
  };

  toggleLanguage() {
    this.isEnglish = !this.isEnglish;
  }

  get currentLang() {
    return this.isEnglish ? 'en' : 'de';
  }

  get translationsMap() {
    return this.translations[this.currentLang];
  }
}
