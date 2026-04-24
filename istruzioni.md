# Specifiche di Sviluppo: Sito Web Personale

## 1. Visione Generale
* **Proprietario:** Alberto Lillo
* **Ruolo:** PhD Candidate
* **Obiettivo del sito:** Mostrare i miei progetti di ricerca e i miei paper scientifici

## 2. Tech Stack Predefinito
* **Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS
* **Componenti:** Lucide React (Icone), Framer Motion (Animazioni)
* **Deploy:** Vercel

## 3. Struttura delle Pagine
1.  **Home:** Hero section con bio breve, call-to-action principale.
2.  **Portfolio:** Griglia di progetti con immagini, descrizione, tag tecnologici e link GitHub/Live.
3.  **About:** Esperienza lavorativa (formato timeline) e competenze tecniche.
4.  **Contatti:** Form semplice e link ai social (LinkedIn, GitHub).

## 4. Design & UI/UX
* **Stile:** Minimalista e pulito, ampio uso dello spazio bianco, accademico, con un pizzico di stile computer science.
* **Tema:** Supporto nativo per Dark Mode (basato sulle preferenze di sistema).
* **Tipografia:** Font Sans-serif moderno (es. Inter o Geist).
* **Interazioni:** Micro-interazioni al passaggio del mouse sui progetti e transizioni fluide tra le pagine.

## 5. Istruzioni per Claude (Prompt di Sviluppo)
Quando scrivi il codice, segui queste linee guida:
1.  **Componenti:** Crea componenti React piccoli, riutilizzabili e atomici nella cartella `/components`.
2.  **Clean Code:** Usa nomi di variabili descrittivi e commenta le logiche complesse.
3.  **Accessibilità:** Assicurati che il sito sia navigabile tramite tastiera e che le immagini abbiano tag `alt`.
4.  **Responsive:** Il design deve essere "mobile-first".
5.  **SEO:** Includi meta tag di base per ogni pagina.
6.  **Dati:** Tutti le mie informazioni le trovi nel file `curriculum.pdf`.
