export interface Project {
  id: number;
  title: string;
  desc: string;
  descEn: string;
  descDe: string;
  detailDesc: string;
  detailDescEn: string;
  detailDescDe: string;
  tags: string[];
  code: string;
  live: string;
  image?: string;
  isPrivate?: boolean;
  backUrl?: string;
  frontUrl?: string;
  nvimScreenshots?: string[];
  status: string;
  statusEn: string;
  statusDe: string;
  year: number;
  category: string;
  categoryEn: string;
  categoryDe: string;
  teamSize: string;
  teamSizeEn: string;
  teamSizeDe: string;
}

export const projectData: Project[] = [
  {
    id: 0, title: 'Dashboard React',
    desc: 'Panel de administración con gráficos, calculadora, contador y TO-DO list. Construido con React y react-router-dom.',
    descEn: 'Admin panel with charts, calculator, counter and TO-DO list. Built with React and react-router-dom.',
    descDe: 'Admin-Panel mit Diagrammen, Rechner, Zähler und TO-DO-Liste. Erstellt mit React und react-router-dom.',
    detailDesc: `Este dashboard es una aplicación completa de administración que integra múltiples herramientas en una sola interfaz. Construido con React, demuestra el uso de componentes reutilizables, manejo de estado con hooks (useState, useEffect) y navegación entre vistas con react-router-dom.

La aplicación incluye gráficos interactivos para visualización de datos, una calculadora funcional, un sistema de contador y un TO-DO list persistente. Cada módulo es un componente independiente que se comunica con el estado global de la aplicación.

El diseño responsivo y la organización modular del código permiten escalar la aplicación añadiendo nuevas herramientas sin afectar las existentes. Los datos del TO-DO list se mantienen entre sesiones usando localStorage, demostrando persistencia en el cliente.`,
    detailDescDe: `Dieses Dashboard ist eine vollständige Verwaltungsanwendung, die mehrere Werkzeuge in einer einzigen Oberfläche integriert. Erstellt mit React, demonstriert es die Verwendung von wiederverwendbaren Komponenten, Zustandsverwaltung mit Hooks (useState, useEffect) und Navigation zwischen Ansichten mit react-router-dom.

Die App enthält interaktive Diagramme zur Datenvisualisierung, einen funktionalen Rechner, ein Zählsystem und eine persistente TO-DO-Liste. Jedes Modul ist eine unabhängige Komponente, die mit dem globalen App-Zustand kommuniziert.

Das responsive Design und die modulare Code-Organisation ermöglichen die Skalierung der App durch Hinzufügen neuer Werkzeuge, ohne bestehende zu beeinträchtigen. TO-DO-Liste-Daten bleiben dank localStorage zwischen Sitzungen erhalten.`,
    detailDescEn: `This dashboard is a complete administration application that integrates multiple tools in a single interface. Built with React, it demonstrates the use of reusable components, state management with hooks (useState, useEffect) and navigation between views with react-router-dom.

The app includes interactive charts for data visualization, a functional calculator, a counter system and a persistent TO-DO list. Each module is an independent component that communicates with the global application state.

The responsive design and modular code organization allow scaling the app by adding new tools without affecting existing ones. TO-DO list data persists between sessions using localStorage, demonstrating client-side persistence.`,
    tags: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
    code: 'https://github.com/dizzi1222/REACT-Diego-Dizzi-Dashboard',
    live: 'https://react-dashboard-ten-delta.vercel.app/',
    image: '/modal-tech-Dashboard-REACT.png',
    status: 'Completado',
    statusEn: 'Completed',
    statusDe: 'Abgeschlossen',
    year: 2024,
    category: 'Aplicación Web SPA',
    categoryEn: 'Single Page Application',
    categoryDe: 'Single-Page-Anwendung',
    teamSize: 'Solo',
    teamSizeEn: 'Solo',
    teamSizeDe: 'Allein'
  },
  {
    id: 1, title: 'Portfolio (dev.to)',
    desc: 'Portfolio profesional con Tailwind CSS, i18n en ES/EN/DE, modales interactivos, scroll-spy y temas claro/oscuro.',
    descEn: 'Professional portfolio with Tailwind CSS, i18n in ES/EN/DE, interactive modals, scroll-spy and light/dark themes.',
    descDe: 'Professionelles Portfolio mit Tailwind CSS, i18n in ES/EN/DE, interaktiven Modalen, Scroll-Spy und Hell/Dunkel-Modus.',
    detailDesc: `Este portfolio profesional fue diseñado para mostrar proyectos y habilidades como desarrollador. Construido con HTML, Tailwind CSS y JavaScript vanilla, implementa un sistema completo de internacionalización con soporte para español, inglés y alemán.

La página cuenta con modales interactivos para cada proyecto, navegación con scroll-spy que actualiza la sección activa automáticamente, y un sistema de temas claro/oscuro que recuerda la preferencia del usuario. Los datos de proyectos se cargan dinámicamente desde un archivo JSON.

El diseño prioriza la experiencia de usuario con animaciones suaves, transiciones entre secciones y una presentación visual limpia que pone el contenido en primer plano. Todo el código está organizado siguiendo principios de código limpio y mantenible.`,
    detailDescDe: `Dieses professionelle Portfolio wurde entwickelt, um Projekte und Fähigkeiten als Entwickler zu präsentieren. Erstellt mit HTML, Tailwind CSS und vanilla JavaScript, implementiert es ein vollständiges Internationalisierungssystem mit Unterstützung für Spanisch, Englisch und Deutsch.

Die Seite bietet interaktive Modale für jedes Projekt, Scroll-Spy-Navigation, die den aktiven Abschnitt automatisch aktualisiert, und ein Hell/Dunkel-Theme-System, das die Benutzereinstellung speichert. Projektdaten werden dynamisch aus einer JSON-Datei geladen.

Das Design priorisiert die Benutzererfahrung mit sanften Animationen, Abschnittsübergängen und einer sauberen visuellen Präsentation. Der gesamte Code folgt Prinzipien für sauberen und wartbaren Code.`,
    detailDescEn: `This professional portfolio was designed to showcase projects and skills as a developer. Built with HTML, Tailwind CSS and vanilla JavaScript, it implements a complete internationalization system with support for Spanish, English and German.

The page features interactive modals for each project, scroll-spy navigation that updates the active section automatically, and a light/dark theme system that remembers user preference. Project data is loaded dynamically from a JSON file.

The design prioritizes user experience with smooth animations, section transitions and a clean visual presentation that puts content first. All code is organized following clean code principles.`,
    tags: ['HTML', 'Tailwind', 'JavaScript', 'Astro'],
    code: 'https://github.com/dizzi1222/dhardi.dev',
    live: 'https://dhardidev.vercel.app/',
    image: '/modal-tech-devto.png',
    status: 'Completado',
    statusEn: 'Completed',
    statusDe: 'Abgeschlossen',
    year: 2024,
    category: 'Portfolio Web',
    categoryEn: 'Web Portfolio',
    categoryDe: 'Web-Portfolio',
    teamSize: 'Solo',
    teamSizeEn: 'Solo',
    teamSizeDe: 'Allein'
  },
  {
    id: 2, title: 'Dotfiles Config',
    desc: 'Configuración completa de Arch Linux con Hyprland, Neovim (LazyVim), Kitty, Zsh, Waybar, EWW widgets y Rofi.',
    descEn: 'Complete Arch Linux configuration with Hyprland, Neovim (LazyVim), Kitty, Zsh, Waybar, EWW widgets and Rofi.',
    descDe: 'Vollständige Arch-Linux-Konfiguration mit Hyprland, Neovim (LazyVim), Kitty, Zsh, Waybar, EWW-Widgets und Rofi.',
    detailDesc: `Este repositorio contiene mi configuración completa de Arch Linux, meticulosamente ajustada para un flujo de trabajo óptimo como desarrollador. Incluye configuración de Hyprland como gestor de ventanas, Neovim con LazyVim como editor principal, Kitty como terminal, Zsh con plugins como entorno shell, Waybar como barra de estado, EWW widgets para información del sistema y Rofi como lanzador de aplicaciones.

Cada componente está configurado para integrarse perfectamente con los demás, creando un entorno de escritorio cohesivo y altamente funcional. La configuración de Neovim incluye LSP para TypeScript y JavaScript, snippet engines y temas personalizados.

El proyecto también incluye scripts de instalación automatizada para facilitar la reproducción del entorno en nuevas máquinas, demostrando habilidades en automatización, scripting en Bash y gestión de sistemas Linux.`,
    detailDescDe: `Dieses Repository enthält meine vollständige Arch-Linux-Konfiguration, akribisch für einen optimalen Entwickler-Workflow abgestimmt. Es umfasst Hyprland als Fenstermanager, Neovim mit LazyVim als Haupteditor, Kitty als Terminal, Zsh mit Plugins als Shell-Umgebung, Waybar als Statusleiste, EWW-Widgets für Systeminformationen und Rofi als App-Starter.

Jede Komponente ist so konfiguriert, dass sie nahtlos mit den anderen integriert ist und eine zusammenhängende, hochfunktionale Desktop-Umgebung schafft. Die Neovim-Konfiguration umfasst LSP für TypeScript und JavaScript, Snippet-Engines und benutzerdefinierte Themes.

Das Projekt enthält auch automatisierte Installationsskripte, um die Umgebungsreproduktion auf neuen Maschinen zu erleichtern, und demonstriert Fähigkeiten in Automatisierung, Bash-Scripting und Linux-Systemverwaltung.`,
    detailDescEn: `This repository contains my complete Arch Linux configuration, meticulously tuned for an optimal developer workflow. It includes Hyprland as window manager, Neovim with LazyVim as main editor, Kitty as terminal, Zsh with plugins as shell environment, Waybar as status bar, EWW widgets for system info and Rofi as app launcher.

Each component is configured to integrate seamlessly with the others, creating a cohesive and highly functional desktop environment. The Neovim configuration includes LSP for TypeScript and JavaScript, snippet engines and custom themes.

The project also includes automated installation scripts to facilitate environment reproduction on new machines, demonstrating skills in automation, Bash scripting and Linux system management.`,
    tags: ['Lua', 'Shell', 'YAML', 'Python'],
    code: 'https://github.com/dizzi1222/dotfiles-wsl-dizzi',
    live: 'https://github.com/dizzi1222/dotfiles-dizzi',
    image: '/modal-tech-dotfiles.png',
    status: 'En desarrollo',
    statusEn: 'In development',
    statusDe: 'In Entwicklung',
    year: 2025,
    category: 'Configuración de Sistema',
    categoryEn: 'System Configuration',
    categoryDe: 'Systemkonfiguration',
    teamSize: 'Solo',
    teamSizeEn: 'Solo',
    teamSizeDe: 'Allein'
  },
  {
    id: 3, title: 'PTD-Talento',
    desc: 'Marketplace de talento para Cincinnatus Institute. MVP completo con autenticación, catálogo, watch list, panel admin.',
    descEn: 'Talent marketplace for Cincinnatus Institute. Full MVP with auth, catalog, recruiter watch list, admin panel.',
    descDe: 'Talentmarktplatz für das Cincinnatus Institute. Vollständiger MVP mit Authentifizierung, Katalog, Watch List, Admin-Panel.',
    detailDesc: `PTD-Talento es un marketplace de talento desarrollado para el Cincinnatus Institute of Craftsmanship, diseñado para conectar estudiantes con reclutadores. El MVP completo incluye un sistema de autenticación con Google OAuth, un catálogo de talentos con búsqueda y filtros avanzados, una lista de candidatos (watch list) para reclutadores, y un panel de administración completo.

El frontend está construido con React y TypeScript, con un design system propio (CIC-Styles) en Figma. El backend utiliza Node.js con Express, PostgreSQL como base de datos principal, y Docker para contenerización. La arquitectura sigue principios de código limpio y separación de responsabilidades.

El proyecto incluye integración con Google Cloud para despliegue, Cloud SQL Proxy para conexiones seguras a la base de datos, y un flujo completo de CI/CD. La gestión del proyecto se realiza con GitHub Projects siguiendo metodologías ágiles.`,
    detailDescDe: `PTD-Talento ist ein Talentmarktplatz, der für das Cincinnatus Institute of Craftsmanship entwickelt wurde, um Studenten mit Recruitern zu verbinden. Der vollständige MVP umfasst Google OAuth-Authentifizierung, einen Talentkatalog mit erweiterter Suche und Filtern, eine Recruiter-Watch-List und ein vollständiges Admin-Panel.

Das Frontend ist mit React und TypeScript erstellt, mit einem eigenen Designsystem (CIC-Styles) in Figma. Das Backend verwendet Node.js mit Express, PostgreSQL als Hauptdatenbank und Docker zur Containerisierung. Die Architektur folgt Clean-Code-Prinzipien und Trennung der Zuständigkeiten.

Das Projekt umfasst Google Cloud-Integration für Deployment, Cloud SQL Proxy für sichere Datenbankverbindungen und einen vollständigen CI/CD-Fluss. Das Projektmanagement erfolgt mit GitHub Projects nach agilen Methoden.`,
    detailDescEn: `PTD-Talento is a talent marketplace developed for the Cincinnatus Institute of Craftsmanship, designed to connect students with recruiters. The complete MVP includes Google OAuth authentication, a talent catalog with advanced search and filters, a recruiter watch list, and a full admin panel.

The frontend is built with React and TypeScript, with a custom design system (CIC-Styles) in Figma. The backend uses Node.js with Express, PostgreSQL as main database, and Docker for containerization. The architecture follows clean code principles and separation of concerns.

The project includes Google Cloud integration for deployment, Cloud SQL Proxy for secure database connections, and a complete CI/CD flow. Project management uses GitHub Projects following agile methodologies.`,
    tags: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Figma', 'TypeScript', 'Material UI'],
    code: 'https://github.com/Cincinnatus-Institute-of-Craftsmanship/ptd-talento-back',
    live: 'https://ptd-talento-frontend-dev-dot-cic-ptd-dev.ue.r.appspot.com/Inicio',
    image: '/modal-tech-ptd-talento.png',
    isPrivate: true,
    backUrl: 'https://github.com/Cincinnatus-Institute-of-Craftsmanship/ptd-talento-back',
    frontUrl: 'https://github.com/Cincinnatus-Institute-of-Craftsmanship/ptd-talento-front',
    status: 'En desarrollo',
    statusEn: 'In development',
    statusDe: 'In Entwicklung',
    year: 2025,
    category: 'Marketplace Web',
    categoryEn: 'Web Marketplace',
    categoryDe: 'Web-Marktplatz',
    teamSize: 'Equipo',
    teamSizeEn: 'Team',
    teamSizeDe: 'Team'
  },
  {
    id: 4, title: 'Nvim · WSL + Linux',
    desc: 'Configuración universal de Neovim con LazyVim para Windows (WSL) y Linux (Hyprland). Sincronización multiplataforma.',
    descEn: 'Universal Neovim config with LazyVim for Windows (WSL) and Linux (Hyprland). Cross-platform sync.',
    descDe: 'Universelle Neovim-Konfiguration mit LazyVim für Windows (WSL) und Linux (Hyprland). Plattformübergreifende Synchronisation.',
    detailDesc: `Esta configuración universal de Neovim está diseñada para funcionar sin problemas tanto en Windows (WSL) como en Linux (Hyprland), permitiendo una experiencia de edición consistente independientemente de la plataforma. Basada en LazyVim, incluye plugins cuidadosamente seleccionados para desarrollo web.

La configuración incluye LSP completo para TypeScript, JavaScript, Lua y otros lenguajes, integración con Telescope para búsqueda difusa, treesitter para resaltado sintáctico avanzado, y atajos de teclado personalizados optimizados para productividad. Los temas y colores están sincronizados entre ambas plataformas para mantener consistencia visual.

El proyecto demuestra habilidades en configuración de herramientas de desarrollo, gestión de dependencias multiplataforma y optimización del flujo de trabajo del desarrollador.`,
    detailDescDe: `Diese universelle Neovim-Konfiguration wurde entwickelt, um sowohl unter Windows (WSL) als auch unter Linux (Hyprland) nahtlos zu funktionieren und ein konsistentes Bearbeitungserlebnis unabhängig von der Plattform zu bieten. Basierend auf LazyVim, enthält sie sorgfältig ausgewählte Plugins für die Webentwicklung.

Die Konfiguration umfasst vollständige LSP-Unterstützung für TypeScript, JavaScript, Lua und andere Sprachen, Telescope-Integration für die Fuzzy-Suche, Treesitter für erweiterte Syntaxhervorhebung und benutzerdefinierte Tastenkombinationen, die für Produktivität optimiert sind. Themes und Farben sind plattformübergreifend für visuelle Konsistenz synchronisiert.

Das Projekt demonstriert Fähigkeiten in der Konfiguration von Entwicklerwerkzeugen, plattformübergreifendem Abhängigkeitsmanagement und Optimierung des Entwickler-Workflows.`,
    detailDescEn: `This universal Neovim configuration is designed to work seamlessly on both Windows (WSL) and Linux (Hyprland), providing a consistent editing experience regardless of platform. Based on LazyVim, it includes carefully selected plugins for web development.

The configuration includes full LSP support for TypeScript, JavaScript, Lua and other languages, Telescope integration for fuzzy search, treesitter for advanced syntax highlighting, and custom keybindings optimized for productivity. Themes and colors are synced across both platforms for visual consistency.

The project demonstrates skills in developer tool configuration, cross-platform dependency management and developer workflow optimization.`,
    tags: ['Lua', 'LazyVim', 'Neovim'],
    code: 'https://github.com/dizzi1222/nvim',
    live: 'https://github.com/dizzi1222/nvim/tree/termux',
    image: '/modal-tech-nvim.png',
    nvimScreenshots: [
      'https://github.com/user-attachments/assets/9144215e-6156-43c3-beba-4cca7f431337',
      'https://github.com/user-attachments/assets/8adb6f60-bb35-4704-b4ab-12bd587f3992'
    ],
    status: 'Completado',
    statusEn: 'Completed',
    statusDe: 'Abgeschlossen',
    year: 2025,
    category: 'Configuración de Editor',
    categoryEn: 'Editor Configuration',
    categoryDe: 'Editor-Konfiguration',
    teamSize: 'Solo',
    teamSizeEn: 'Solo',
    teamSizeDe: 'Allein'
  },
  {
    id: 5, title: 'PCE-Agencia',
    desc: 'App de finanzas y viajes — gestión de presupuestos, planificación de itinerarios y seguimiento de gastos.',
    descEn: 'Finance and travel app — budget management, itinerary planning and expense tracking.',
    descDe: 'Finanz- und Reise-App — Budgetverwaltung, Reiseplanung und Ausgabenverfolgung.',
    detailDesc: `PCE-Agencia es una aplicación web para gestión de finanzas y viajes que permite a los usuarios planificar itinerarios, gestionar presupuestos y realizar seguimiento de gastos en tiempo real. Construida con JavaScript vanilla, HTML semántico y CSS personalizado.

La aplicación incluye un sistema de cálculo automático de presupuestos, conversión de divisas, y visualización de gastos categorizados. Los datos se gestionan completamente en el frontend con persistencia local, demostrando capacidades de CRUD sin backend.

El diseño responsivo garantiza una experiencia óptima tanto en escritorio como en dispositivos móviles. La interfaz limpia y organizada facilita la navegación entre las diferentes secciones de la aplicación.`,
    detailDescDe: `PCE-Agencia ist eine Webanwendung für Finanz- und Reiseverwaltung, die es Benutzern ermöglicht, Reiserouten zu planen, Budgets zu verwalten und Ausgaben in Echtzeit zu verfolgen. Erstellt mit vanilla JavaScript, semantischem HTML und benutzerdefiniertem CSS.

Die App umfasst ein automatisches Budgetberechnungssystem, Währungsumrechnung und kategorisierte Ausgabenvisualisierung. Daten werden vollständig im Frontend mit lokaler Persistenz verwaltet und demonstrieren CRUD-Fähigkeiten ohne Backend.

Das responsive Design gewährleistet ein optimales Erlebnis sowohl auf Desktop- als auch auf Mobilgeräten. Die saubere und organisierte Oberfläche erleichtert die Navigation zwischen den verschiedenen Abschnitten der Anwendung.`,
    detailDescEn: `PCE-Agencia is a web application for finance and travel management that allows users to plan itineraries, manage budgets and track expenses in real time. Built with vanilla JavaScript, semantic HTML and custom CSS.

The app includes an automatic budget calculation system, currency conversion and categorized expense visualization. Data is managed entirely on the frontend with local persistence, demonstrating CRUD capabilities without a backend.

The responsive design ensures an optimal experience on both desktop and mobile devices. The clean and organized interface facilitates navigation between the different sections of the application.`,
    tags: ['JavaScript', 'HTML', 'CSS', 'TypeScript', 'Tailwind', 'Docker'],
    code: 'https://github.com/dhardi007/PCE-Agencia',
    live: 'https://pce-agencia.vercel.app/',
    image: '/modal-tech-pce-agencia-reskyt.png',
    status: 'Completado',
    statusEn: 'Completed',
    statusDe: 'Abgeschlossen',
    year: 2024,
    category: 'Aplicación Web',
    categoryEn: 'Web Application',
    categoryDe: 'Webanwendung',
    teamSize: 'Solo',
    teamSizeEn: 'Solo',
    teamSizeDe: 'Allein'
  },
  {
    id: 7, title: 'Tics Service',
    desc: 'Web corporativa para papelería y centro de internet. Diseño responsive con Bootstrap, galería de productos y servicios.',
    descEn: 'Corporate website for stationery store and internet center. Responsive design with Bootstrap, product and service gallery.',
    descDe: 'Unternehmenswebsite für Schreibwarengeschäft und Internetcafé. Responsives Design mit Bootstrap, Produkt- und Dienstleistungsgalerie.',
    detailDesc: `Sitio web profesional para Papelería Tics Service Centro de Internet, desarrollado durante mi pasantía como proyecto de grado en Jarabacoa, República Dominicana.

Fue mi primera experiencia real construyendo un sitio completo para un negocio local: catálogo de productos (memorias USB, cables HDMI/VGA, auriculares), servicios (fotografía, reparación de hardware, recargas), mapa de ubicación y formulario de contacto.

Aquí aprendí el uso de plantillas Bootstrap, componentes CSS reutilizables, drag scroll nativo con JavaScript y conceptos fundamentales de diseño web responsive. Una etapa prehistórica pero formativa donde cada línea de código era un descubrimiento.`,
    detailDescDe: `Professionelle Website für Schreibwarengeschäft Tics Service Internetcafé, entwickelt während meines Praktikums als Abschlussprojekt in Jarabacoa, Dominikanische Republik.

Es war meine erste echte Erfahrung beim Bau einer kompletten Website für ein lokales Unternehmen: Produktkatalog (USB-Sticks, HDMI/VGA-Kabel, Kopfhörer), Dienstleistungen (Fotografie, Hardware-Reparatur, Aufladungen), Standortkarte und Kontaktformular.

Hier lernte ich Bootstrap-Vorlagen, wiederverwendbare CSS-Komponenten, natives JavaScript-Drag-Scroll und grundlegende Konzepte des responsiven Webdesigns. Eine prähistorische, aber prägende Phase, in der jede Codezeile eine Entdeckung war.`,
    detailDescEn: `Professional website for Tics Service Stationery & Internet Center, developed during my internship as a graduation project in Jarabacoa, Dominican Republic.

It was my first real experience building a complete site for a local business: product catalog (USB drives, HDMI/VGA cables, headphones), services (photography, hardware repair, refills), location map and contact form.

Here I learned Bootstrap templates, reusable CSS components, native JavaScript drag scroll and fundamental responsive web design concepts. A prehistoric but formative stage where every line of code was a discovery.`,
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    code: 'https://github.com/dizzi1222/FCTicService.github.6c-Diego-05',
    live: 'https://fc-tic-service-github-6c-diego-05.vercel.app/',
    image: '/modal-ticservice.png',
    status: 'Completado',
    statusEn: 'Completed',
    statusDe: 'Abgeschlossen',
    year: 2024,
    category: 'Página Web',
    categoryEn: 'Web Page',
    categoryDe: 'Webseite',
    teamSize: 'Solo',
    teamSizeEn: 'Solo',
    teamSizeDe: 'Allein'
  },
  {
    id: 8, title: 'MCSD · Manual Conducción',
    desc: 'App educativa sobre conducción y seguridad vial dominicana. Proyecto final de grado con diseño moderno y glassmorphism.',
    descEn: 'Educational app about Dominican driving and road safety. Final degree project with modern design and glassmorphism.',
    descDe: 'Bildungs-App zum dominikanischen Fahr- und Verkehrssicherheitswesen. Abschlussprojekt mit modernem Design und Glassmorphismus.',
    detailDesc: `Manual de Conducción y Seguridad Dominicana — mi proyecto final para graduarme en Sistemas Informáticos.

Fue un proyecto en grupo donde, spoiler, terminé haciéndolo prácticamente solo. Mis compañeros aportaron con el diseño en Canvas de los mockups (un concepto que ni siquiera estaba bien definido en ese tiempo, pero que el profesor supo indicarnos correctamente).

Con nula experiencia y siendo un completo novato, fue una experiencia horrible para el inexperto Dieguito que no era Vibe Coder Pro. Aprobé, pero el proceso fue un dolor de cabeza.

Años después, modernicé el proyecto a Vite 5 + Tailwind CSS v4 + glassmorphism, con 8 páginas completas, splash screen, animaciones scroll-based y diseño responsive. El APK está disponible via Volt Build.`,
    detailDescDe: `Dominikanisches Fahr- und Sicherheitshandbuch — mein Abschlussprojekt, um in Computersystemen zu graduieren.

Es war ein Gruppenprojekt, bei dem ich, Spoiler, es praktisch alleine gemacht habe. Meine Klassenkameraden trugen mit Canvas-Mockup-Designs bei (ein Konzept, das damals nicht einmal gut definiert war, aber der Professor wusste, wie er uns richtig führen konnte).

Mit null Erfahrung und als kompletter Anfänger war es eine schreckliche Erfahrung für den unerfahrenen Dieguito, der kein Vibe Coder Pro war. Ich habe bestanden, aber der Prozess war eine Kopfschmerzen.

Jahre später modernisierte ich das Projekt auf Vite 5 + Tailwind CSS v4 + Glassmorphismus, mit 8 vollständigen Seiten, Splash-Screen, scroll-basierten Animationen und responsivem Design. Das APK ist via Volt Build verfügbar.`,
    detailDescEn: `Dominican Driving and Safety Manual — my final project to graduate in Computer Systems.

It was a group project where, spoiler, I ended up doing it practically alone. My classmates contributed with Canvas mockup designs (a concept that wasn't even well defined at the time, but the professor knew how to guide us correctly).

With zero experience and being a complete rookie, it was a horrible experience for inexperienced Dieguito who wasn't a Vibe Coder Pro. I passed, but the process was a headache.

Years later, I modernized the project to Vite 5 + Tailwind CSS v4 + glassmorphism, with 8 complete pages, splash screen, scroll-based animations and responsive design. The APK is available via Volt Build.`,
    tags: ['HTML', 'CSS', 'JavaScript', 'Canvas', 'VoltBuilder'],
    code: 'https://github.com/dizzi1222/Proyecto-App-MCSD',
    live: 'https://proyecto-app-mcsd.vercel.app/',
    image: '/modal-mcsd.png',
    status: 'Completado',
    statusEn: 'Completed',
    statusDe: 'Abgeschlossen',
    year: 2024,
    category: 'App Educativa',
    categoryEn: 'Educational App',
    categoryDe: 'Bildungs-App',
    teamSize: 'Equipo',
    teamSizeEn: 'Team',
    teamSizeDe: 'Team'
  },
  {
    id: 6, title: 'Proyección Astral',
    desc: 'Página melancólica y romántica dedicada a una persona especial. Tipografía cuidada, atmósfera onírica.',
    descEn: 'Melancholic and romantic page dedicated to a special person. Careful typography, dreamlike atmosphere.',
    descDe: 'Melancholische und romantische Seite, einer besonderen Person gewidmet. Sorgfältige Typografie, traumhafte Atmosphäre.',
    detailDesc: `Proyección Astral es una página web melancólica y romántica creada como un gesto personal dedicado a una persona especial. El diseño prioriza la atmósfera y la emoción sobre la funcionalidad, utilizando tipografía cuidada, paleta de colores suaves y animaciones sutiles para crear una experiencia onírica.

Construida con HTML, CSS y JavaScript vanilla, la página demuestra cómo las tecnologías web pueden usarse para expresar emociones y crear experiencias significativas más allá de las aplicaciones tradicionales. Las animaciones CSS y los efectos visuales contribuyen a la atmósfera sin sacrificar rendimiento.

El proyecto refleja sensibilidad artística y habilidad para crear interfaces con carga emocional, demostrando versatilidad más allá del desarrollo de aplicaciones convencionales.`,
    detailDescDe: `Proyección Astral ist eine melancholische und romantische Webseite, die als persönliche Geste einer besonderen Person gewidmet ist. Das Design priorisiert Atmosphäre und Emotion über Funktionalität, mit sorgfältiger Typografie, sanfter Farbpalette und subtilen Animationen, um eine traumhafte Erfahrung zu schaffen.

Erstellt mit HTML, CSS und vanilla JavaScript, zeigt die Seite, wie Webtechnologien verwendet werden können, um Emotionen auszudrücken und bedeutungsvolle Erfahrungen jenseits traditioneller Anwendungen zu schaffen. CSS-Animationen und visuelle Effekte tragen zur Atmosphäre bei, ohne die Leistung zu beeinträchtigen.

Das Projekt spiegelt künstlerische Sensibilität und die Fähigkeit wider, emotional aufgeladene Schnittstellen zu schaffen, und demonstriert Vielseitigkeit über die konventionelle Anwendungsentwicklung hinaus.`,
    detailDescEn: `Proyección Astral is a melancholic and romantic web page created as a personal gesture dedicated to a special person. The design prioritizes atmosphere and emotion over functionality, using careful typography, soft color palette and subtle animations to create a dreamlike experience.

Built with HTML, CSS and vanilla JavaScript, the page demonstrates how web technologies can be used to express emotions and create meaningful experiences beyond traditional applications. CSS animations and visual effects contribute to the atmosphere without sacrificing performance.

The project reflects artistic sensitivity and ability to create emotionally charged interfaces, demonstrating versatility beyond conventional application development.`,
    tags: ['TypeScript'],
    code: 'https://github.com/dizzi1222/proyeccion-astral-disculpa',
    live: 'https://proyeccion-astral.vercel.app/',
    image: '/modal-proyeccion-astral.png',
    status: 'Completado',
    statusEn: 'Completed',
    statusDe: 'Abgeschlossen',
    year: 2025,
    category: 'Página Web Personal',
    categoryEn: 'Personal Web Page',
    categoryDe: 'Persönliche Webseite',
    teamSize: 'Solo',
    teamSizeEn: 'Solo',
    teamSizeDe: 'Allein'
  }

];
