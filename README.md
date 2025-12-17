# LoadView - Professionell Lastplaneringsapplikation
**LoadView** är ett examensprojekt som görs i slutskedet av min utbildning till JavaScript-utvecklare.  
Mitt mål är att skapa en avancerad webbapplikation för professionell lastplanering med fokus på säkerhet, effektivitet och efterlevnad av svenska trafikregler.  
Applikationen kommer att erbjuda en visuell planering i både 2D och 3D, automatisk viktbalansering, laglig viktgränskontroll och professionella rapporter med streckkoder.

# Teknisk Stack
Next.js - Hanterar både Frontend och Backend.  
TypeScript - Typsäker utveckling  
MongoDB - Databas  
Tailwind CSS - Utility-first styling  
dnd-kit - Drag-and-drop funktionalitet  
Lucide-react - Ikonbibliotek  
Three.js - 3D-visualisering  

# User Stories som arbetas med just nu  
*(alla user stories genom hela projektet kommer att ligga i ett .md dokument)*
## Se landningssida med features  
*Som besökare vill jag se en attraktiv landningssida med alla funktioner för att förstå vad LoadView kan göra.*

Acceptanskriterier:
- Om jag besöker LoadView utan att vara inloggad
- Då ser jag:  
         - Logo och tagline  
         - Huvudbudskap om lastplanering  
         - 8 feature-kort med ikoner:  
         - Flexibla layouter  
         - Drag & drop  
         - Vikthantering & laglig kontroll  
         - Fordonstyper  
         - Detaljerad statistik  
         - Automatisk färgkodning  
         - Spara & ladda  
         - Professionella rapporter  
         - Call-to-action: "Logga in eller Registrera dig"  
         - Footer med Om och Kontakt  

## Navigera till registrering från landningssida
*Som besökare vill jag enkelt kunna klicka mig vidare till registrering för att snabbt komma igång.*

Acceptanskriterier:
- Om jag är på landningssidan
- När jag klickar CTA-knappen
- Då hamnar jag på auth-sidan med registreringsfliken aktiv

## Registrera nytt konto  
*Som besökare vill jag kunna registrera ett konto med namn, e-post och lösenord för att få tillgång till lastplaneringsverktyget.*  

Acceptanskriterier:
- Om jag är på registreringssidan
- När jag fyller i namn, e-post och lösenord (minst 6 tecken)
- Och bekräftar lösenordet
- Då skapas ett konto med rollen "user"
- Och jag loggas in automatiskt

## Logga in på befintligt konto
*Som registrerad användare vill jag kunna logga in med e-post och lösenord för att få tillgång till lastplaneringsverktyget.*

Acceptanskriterier:
- Om jag har ett registrerat konto
- Och  jag anger korrekt e-post och lösenord
- Då loggas jag in
- Och ser mitt namn i användarinterfacet
- Och kan komma åt alla mina sparade lastningar













