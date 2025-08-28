import React, { useState, useEffect } from "react";
import { ArrowRight, Github, Linkedin, Mail, Menu, X, ExternalLink } from "lucide-react";
import logo from "../public/logo_white.png";
import foto from "../public/Foto.png"
import Loader from './components/Loader';

// Tailwind helpers
const Section: React.FC<{ id: string; className?: string; children: React.ReactNode; full?: boolean }>
  = ({ id, className = "", children, full = false }) => (
  <section id={id} className={`scroll-mt-24 w-full ${className}`}>
    <div className={`${full ? "w-full" : "mx-auto max-w-screen-2xl"} px-4 sm:px-6 lg:px-8`}>
      {children}
    </div>
  </section>
);

const Chip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium shadow-sm">
    {children}
  </span>
);



const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { href: "#inicio", label: "Inicio" },
    { href: "#sobre-mi", label: "Sobre mí" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#habilidades", label: "Habilidades" },
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-sm" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
      <a href="#inicio" className="flex items-center gap-2 font-extrabold tracking-tight text-xl md:text-2xl">
        <img src={logo} alt="Logo" className="h-8 w-8 md:h-10 md:w-10 rounded-full" />
        
      </a>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map(n => (
            <a key={n.href} href={n.href} className="text-sm font-medium hover:text-sky-600 transition-colors">
              {n.label}
            </a>
          ))}
          <a href="#contacto" className="inline-flex items-center gap-2 rounded-2xl bg-sky-600 px-4 py-2 text-white hover:bg-sky-700 transition-colors">
            Contáctame <ArrowRight size={16} />
          </a>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(v => !v)} aria-label="Abrir menú">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="mx-auto max-w-screen-2xl px-6 py-4 flex flex-col gap-3">
            {nav.map(n => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-2 font-medium">
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

// Hero
const Hero: React.FC = () => (
  <Section id="inicio" className="min-h-screen pt-28 md:pt-32">
    <div className="flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] xl:grid-cols-[1.3fr_1fr] items-end gap-6 w-full">
        <div className="text-center lg:text-left">
          <div className="mb-4 flex flex-wrap justify-center lg:justify-start gap-2">
            <Chip>UI/UX · Full‑Stack</Chip>
            <Chip>IA aplicada</Chip>
            <Chip>TypeScript · React</Chip>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Ingeniero en <span className="text-sky-600">Tecnologías Computacionales</span>
          </h1>
          <p className="mt-4 text-slate-600 text-lg md:text-xl max-w-3xl mx-auto lg:mx-0">
            Portafolio one‑page hecho con React + Tailwind + TypeScript.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
            <a href="#proyectos" className="inline-flex items-center gap-2 rounded-2xl bg-sky-600 px-5 py-3 text-white hover:bg-sky-700 transition-colors">
              Ver proyectos <ArrowRight size={18} />
            </a>
            <a href="#contacto" className="inline-flex items-center gap-2 rounded-2xl border px-5 py-3 hover:bg-slate-50">
              Contacto
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-xl md:max-w-none order-first lg:order-last group cursor-pointer">
          <img
              src={foto}
              alt="Foto de José Roberto Garduño"
              className="aspect-[5/5] w-full rounded-3xl border shadow-inner object-cover object-top transition-opacity duration-300 group-hover:opacity-60"
            />
          <div className="absolute inset-0 rounded-3xl bg-black bg-opacity-60 flex items-center justify-center px-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h1 className="text-white text-lg md:text-4xl font-medium leading-relaxed">
              “La verdadera fuerza de un sistema radica en la conexión entre quienes lo usan, quienes lo diseñan y quienes lo programan.”
            </h1>
          </div>
        </div>
      </div>
    </div>
  </Section>
);



const About: React.FC = () => (
  <Section id="sobre-mi" className="pt-20">
    <div className="grid md:grid-cols-2 gap-10">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Hola, soy <span className="text-sky-700">José Roberto Garduño Cerecedo</span></h2>
        <p className="text-lg mt-4 text-slate-700 leading-relaxed">
        Me considero una persona con una alta capacidad para trabajar en equipo, ya que disfruto colaborar con otros y aprender de sus diferentes perspectivas. Valoro mucho la escucha activa y la inclusión de ideas diversas, porque estoy convencido de que la riqueza de un proyecto nace de la suma de aportes individuales. Esta misma visión me ha llevado a adoptar con frecuencia el rol de mediador dentro de los equipos de trabajo, facilitando la comunicación, fomentando un ambiente de respeto y analizando las distintas formas de pensar para llegar a consensos que beneficien al grupo en su conjunto.

        Además, me caracterizo por ser resiliente, lo que me permite mantener la calma y la objetividad en situaciones de presión o conflicto. Trato siempre de asumir una actitud positiva frente a los desafíos, entendiendo que cada dificultad es también una oportunidad de aprendizaje y crecimiento personal. Creo firmemente que la combinación de trabajo colaborativo, apertura al diálogo y resiliencia son cualidades esenciales para construir soluciones sólidas. 
        </p>
      </div>
      <div className="rounded-3xl border p-6 shadow-sm bg-white self-start">
        <h1 className="font-semibold text-slate-900">Experiencia destacada</h1>
        <div className="mt-4 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-medium">Optimización de logística en centros de distribución (CEDIS) con inteligencia artificial</p>
              <p className="text-sm text-slate-600">Aplicación móvil con AppSheet + sistema de visión artificial + dashboard web</p>
            </div>
            <span className="text-xs text-slate-500">2024</span>
          </div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-medium">Panoptimize (Optimización de Contact Centers con Amazon Connect)</p>
              <p className="text-sm text-slate-600">Plataforma web para gestión utilizando KPIs</p>
            </div>
            <span className="text-xs text-slate-500">2024</span>
          </div>
        </div>
      </div>
    </div>
  </Section>
);



const PROJECTS = [
  {
    title: "Patrones Hermosos | 9va edición",
    year: "2025",
    description: "Sistema web desarrollado para registrar participantes del evento “Patrones Hermosos 2025”. Incluye formularios responsivos, almacenamiento en MySQL y notificaciones personalizadas tipo toast,",
    tags: ["React", "MySQL", "TypeScript", "Tailwind CSS", "React Context API", "react-toastify"],
    href: "https://github.com/JoseRobertoGC",
    video: "https://drive.google.com/file/d/1GmOq1cToFMkDLHvu2ZW7FQRu81loEiF8/preview",
  },
  {
    title: "Panoptimize",
    year: "2024",
    description: "Desarrollo de una plataforma web para optimizar la gestión de contact centers mediante la integración de Amazon Connect. La plataforma permite a los supervisores monitorear el desempeño de los agentes en tiempo real, utilizando KPIs y modelos predictivos basados en inteligencia artificial.",
    tags: ["React", "TypeScript", "Amazon Connect", "Tailwind CCS", "Jest"],
    href: "https://github.com/JoseRobertoGC",
    video: "https://www.youtube.com/embed/PssbuJywpwg",
  },
  {
    title: "CEDIS",
    year: "2024",
    description: "Desarrollo de una solución tecnológica para mejorar la gestión logística en los patios de distribución de Grupo Bimbo, enfocada en la localización y administración de remolques y camiones mediante inteligencia artificial y sistemas de geolocalización interactivos.",
    tags: ["Next.js", "Flask", "MySQL", "Appsheet", "API Google Maps"],
    href: "https://github.com/JoseRobertoGC",
    video: "https://www.youtube.com/embed/zgaQ-Kyj1ms",
  },
  {
    title: "Patrones Hermosos | 8va edición",
    year: "2024",
    description: "Coordinador de TI, a cargo de 2 personas en el desarrollo del proyecto. Sistema de asistencia y salidas de las participantes a través de una applicaión movil.",
    tags: ["Appsheet", "MySQL"],
    href: "https://github.com/JoseRobertoGC",
    video: "https://drive.google.com/file/d/1LL3bYu9WqCfSQGEsP7MKK87vn4r3OJfV/preview",
  },
  {
    title: "BazarTEC",
    year: "2024",
    description: "Creación de una aplicación móvil en AppSheet para optimizar la gestión de asistencia de vendedores en un bazar, utilizando un sistema basado en códigos QR para registrar y organizar la participación de los mismos.",
    tags: ["Appsheet", "MySQL"],
    href: "https://github.com/JoseRobertoGC",
    video: "https://drive.google.com/file/d/1qGPK31FnAv5SxGjXsCZEqu6JCMyr4OH2/preview",
  },
  {
    title: "SEL4C",
    year: "2023",
    description: "Desarrollo de una aplicación móvil en Swift integrada con un dashboard en Django, para gestionar competencias en emprendimiento social y pensamiento complejo siguiendo la metodología SEL4C.",
    tags: ["Django", "MySQL", "Swift"],
    href: "https://github.com/JoseRobertoGC",
    video: "https://drive.google.com/file/d/1cOFeUdadiXJBuJEqlE5zCVSxOscwxkZb/preview",
  },
];

const Projects: React.FC = () => (
  <Section id="proyectos" className="pt-20">
    <div className="flex items-end justify-between">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Proyectos</h2>
      <a href="/JoseRobertoGarduñoCerecedo.pdf" className="text-sky-700 inline-flex items-center gap-2" target="_blank" rel="noopener noreferrer">
        Ver CV <ExternalLink size={16} />
      </a>
    </div>
    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {PROJECTS.map((project, i) => (
        <a
          key={i}
          href={project.href}
          className="group rounded-3xl border overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.video ? (
            <div className="aspect-video w-full">
              <iframe
                src={project.video}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading = "lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="aspect-video bg-slate-100" />
          )}
          <div className="p-4">
            <div className="flex items-center justify-between">
              <p className="font-semibold">{project.title}</p>
              <span className="text-xs text-slate-500">{project.year}</span>
            </div>
            <p className="mt-1 text-sm text-slate-600">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-slate-50 border px-2.5 py-1 text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  </Section>
);


const Skills: React.FC = () => (
  <Section id="habilidades" className="pt-20">
    <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Habilidades</h2>
    <div className="mt-6 grid gap-4 md:grid-cols-4">
      <div className="rounded-2xl border p-6 shadow-sm">
        <h3 className="font-semibold">UI/UX</h3>
        <ul className="mt-3 space-y-2 text-slate-700 text-sm">
          <li>Figma (wireframes, prototipos interactivos, design systems)</li>
          <li>Research, entrevistas y JTBD</li>
          <li>Pruebas de usabilidad y accesibilidad</li>
          <li>Diseño de dashboards y experiencias de datos</li>
        </ul>
      </div>
      <div className="rounded-2xl border p-6 shadow-sm">
        <h3 className="font-semibold">Frontend & Full-Stack</h3>
        <ul className="mt-3 space-y-2 text-slate-700 text-sm">
          <li>React, TypeScript, Tailwind CSS, Next.js</li>
          <li>State management, routing, formularios dinámicos</li>
          <li>Optimización de rendimiento y testing (Jest, Cypress)</li>
          <li>Integración con APIs REST y WebSockets</li>
        </ul>
      </div>
      <div className="rounded-2xl border p-6 shadow-sm">
        <h3 className="font-semibold">IA & Datos</h3>
        <ul className="mt-3 space-y-2 text-slate-700 text-sm">
          <li>Procesamiento de lenguaje natural (NLP): clasificación de emociones (BETO), ironía (Robertuito)</li>
          <li>RAG con LLaMA y Ollama, embeddings y búsqueda semántica</li>
          <li>Analítica avanzada: métricas, funnels, A/B testing</li>
          <li>Dashboards interactivos con datos en tiempo real</li>
        </ul>
      </div>
      <div className="rounded-2xl border p-6 shadow-sm">
        <h3 className="font-semibold">Arquitectura & Cloud</h3>
        <ul className="mt-3 space-y-2 text-slate-700 text-sm">
          <li>AWS (EC2, S3, Lambda), Microsoft Azure Fundamentals</li>
          <li>Integración de APIs externas (Google Maps, Amazon Connect, Oracle Vision AI)</li>
          <li>MySQL y Firebase para gestión de datos</li>
          <li>Arquitecturas híbridas (backend en Spring Boot/Flask + frontend en React)</li>
        </ul>
      </div>
    </div>
  </Section>
);

const Contact: React.FC = () => (
  <Section id="contacto" className="pt-20 pb-24">
    <div className="rounded-3xl border p-8 shadow-sm bg-white">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Construyamos algo</h2>
      <p className="mt-2 text-slate-700 max-w-4xl">
        ¿Te interesa mi trabajo? Escríbeme y con gusto te comparto casos de estudio detallados, proceso y artefactos.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <a href="mailto:jroberto.gace@gmail.com" className="inline-flex items-center gap-2 rounded-2xl bg-sky-600 px-5 py-3 text-white hover:bg-sky-700 transition-colors">
          <Mail size={18}/> Enviar correo
        </a>
        <a href="https://www.linkedin.com/in/josé-roberto-garduño-cerecedo-b2b571253" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border px-5 py-3 hover:bg-slate-50">
          <Linkedin size={18}/> LinkedIn
        </a>
        <a href="https://github.com/JoseRobertoGC" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border px-5 py-3 hover:bg-slate-50">
          <Github size={18}/> GitHub
        </a>
      </div>
    </div>
    <footer className="mt-10 flex items-center justify-between text-sm text-slate-500">
      <p>© {new Date().getFullYear()} José Roberto Garduño Cerecedo</p>
      <a href="#inicio" className="hover:text-slate-700">Volver arriba ↑</a>
    </footer>
  </Section>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Smooth scroll (mantén esto dentro del App también)
  useEffect(() => {
    const handler = (e: any) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      const id = target.getAttribute('href');
      if (!id || id === '#') return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  useEffect(() => {
    // solo muestra Loader al principio
    const timer = setTimeout(() => setIsLoading(false), 2100);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    // Aquí pasas la prop onFinish al Loader
    return <Loader onFinish={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-sky-200 overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

