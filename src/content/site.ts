/**
 * Textos y datos del sitio. Todo el contenido editable vive aquí.
 * Los pendientes del brief (§6) están en `contacto` con valor null:
 * al completarlos, los botones aparecen solos.
 */

export const contacto = {
  email: "contacto@fluxaon.com",
  /** Número en formato internacional sin "+" ni espacios, p. ej. "593991234567" */
  whatsapp: null as string | null,
  /** URL de agenda (Calendly, Microsoft Bookings, etc.) */
  agenda: null as string | null,
};

export const nav = [
  { href: "#que-hacemos", label: "Qué hacemos" },
  { href: "#metodologia", label: "Metodología" },
  { href: "#soluciones", label: "Soluciones" },
];

export const hero = {
  eyebrow: "Procesos · Datos · Tecnología · IA",
  titleLead: "Transformamos procesos. Construimos",
  titleAccent: "soluciones.",
  body: "Diagnosticamos cómo funciona tu empresa, rediseñamos lo que frena el crecimiento y construimos la tecnología que lo sostiene: indicadores, automatización e inteligencia artificial.",
};

export const areas = [
  {
    number: "01",
    title: "Consultoría de procesos",
    body: "Levantamos cómo se trabaja hoy, detectamos cuellos de botella y oportunidades, rediseñamos los procesos y definimos los indicadores que permiten gestionarlos.",
    items: ["Diagnóstico operativo", "Rediseño de procesos", "Tableros de indicadores (KPI)"],
    tone: "light" as const,
  },
  {
    number: "02",
    title: "Desarrollo de soluciones",
    body: "Convertimos el proceso rediseñado en herramientas que la gente usa todos los días: aplicaciones, automatizaciones, integraciones e inteligencia artificial.",
    items: ["Apps web y portales", "Automatización e integraciones", "IA y chatbots"],
    tone: "dark" as const,
  },
];

export const pasos = [
  { title: "Diagnóstico", body: "Entendemos cómo opera la empresa hoy: personas, procesos, datos y sistemas." },
  { title: "Problemas y oportunidades", body: "Priorizamos lo que más impacta en tiempo, costo y control." },
  { title: "Rediseño", body: "Definimos el proceso objetivo, más simple y medible." },
  { title: "Indicadores", body: "Establecemos los KPI que dirán si el cambio funciona." },
  { title: "Automatización", body: "Eliminamos tareas manuales y repetitivas." },
  { title: "Software", body: "Construimos las aplicaciones, portales e integraciones necesarias." },
  { title: "Inteligencia artificial", body: "Sumamos IA donde aporta: análisis, asistentes y chatbots." },
  { title: "Implementación", body: "Acompañamos la puesta en marcha y la adopción del equipo." },
  { title: "Medición de resultados", body: "Medimos contra los indicadores y ajustamos." },
];

/**
 * Soluciones. `herramientas` son las que se muestran al pasar el mouse:
 * REVISAR con el equipo antes de publicar, para no nombrar ninguna que no usemos.
 * `vista` elige la maqueta animada: tablero · app · flujo · conversacion
 */
export const soluciones = [
  {
    icon: "gauge",
    vista: "tablero",
    title: "Dashboards de indicadores",
    body: "La operación en una sola vista, con datos al día para decidir a tiempo.",
    herramientas: ["Power BI", "Qlik", "Python", "SQL"],
  },
  {
    icon: "app",
    vista: "app",
    title: "Aplicaciones web",
    body: "Herramientas hechas para tu proceso, no procesos forzados a una herramienta.",
    herramientas: ["Python", "HTML y JavaScript", "PostgreSQL"],
  },
  {
    icon: "portal",
    vista: "app",
    title: "Portales de clientes",
    body: "Pedidos, estados y documentos en autoservicio, sin llamadas ni correos de ida y vuelta.",
    herramientas: ["Odoo", "Aplicación web a la medida"],
  },
  {
    icon: "workflow",
    vista: "flujo",
    title: "Automatización",
    body: "Menos digitación y reprocesos; más tiempo del equipo para lo que importa.",
    herramientas: ["Power Automate", "n8n", "Python", "Odoo"],
  },
  {
    icon: "plug",
    vista: "flujo",
    title: "Integraciones y APIs",
    body: "Sistemas que hablan entre sí y un solo dato confiable en toda la empresa.",
    herramientas: ["APIs REST", "Python", "SQL"],
  },
  {
    icon: "sparkles",
    vista: "conversacion",
    title: "Inteligencia artificial",
    body: "Análisis y asistentes que aceleran tareas donde la IA realmente aporta.",
    herramientas: ["Claude", "OpenAI", "Python"],
  },
  {
    icon: "chat",
    vista: "conversacion",
    title: "Chatbots",
    body: "Respuestas inmediatas a clientes y equipos, integradas con tus datos.",
    herramientas: ["WhatsApp", "Web", "Teams"],
  },
  {
    icon: "chart",
    vista: "tablero",
    title: "Analítica de datos",
    body: "Del dato disperso a respuestas claras sobre costos, tiempos y rentabilidad.",
    herramientas: ["SQL", "Python", "Power BI"],
  },
] as const;

export const razones = [
  { icon: "route", title: "Proceso antes que código", body: "Primero entendemos y simplificamos cómo se trabaja; solo después decidimos qué tecnología construir." },
  { icon: "target", title: "Resultados medibles", body: "Cada proyecto arranca con indicadores definidos, para saber con datos si el cambio funcionó." },
  {
    icon: "factory",
    title: "Experiencia en empresas de toda América Latina, en los sectores:",
    /** Sectores en los que hemos trabajado (editar aquí para sumar o quitar) */
    sectores: [
      "Manufactura",
      "Comercio y distribución",
      "Retail y cadenas de tiendas",
      "Transporte y logística",
      "Servicios financieros",
      "Seguros",
      "Alimentos y bebidas",
      "Restaurantes",
      "Agroindustria",
      "Construcción e inmobiliaria",
      "Salud y clínicas",
      "Educación",
      "Farmacéutica",
      "Minería y energía",
      "Telecomunicaciones",
      "Turismo y hotelería",
    ],
  },
] as const;
