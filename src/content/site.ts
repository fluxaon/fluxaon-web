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

/** Rutas absolutas para que el menú funcione también dentro de /soluciones */
export const nav = [
  { href: "/#que-hacemos", label: "Qué hacemos" },
  { href: "/#metodologia", label: "Metodología" },
  { href: "/soluciones", label: "Soluciones" },
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
 * Soluciones. Cada tarjeta del inicio lleva a /soluciones#slug, donde está el detalle.
 * REVISAR `herramientas` con el equipo antes del lanzamiento: no nombrar ninguna que no usemos.
 */
export const soluciones = [
  {
    icon: "gauge",
    slug: "dashboards",
    title: "Dashboards de indicadores",
    body: "La operación en una sola vista, con datos al día para decidir a tiempo.",
    herramientas: ["Power BI", "Qlik", "Python", "SQL"],
    resumen:
      "Reunimos los datos que hoy viven en el ERP, en hojas de cálculo y en sistemas sueltos, y los convertimos en un tablero que responde las preguntas de cada área: cómo vamos contra la meta, dónde se está perdiendo margen, qué pedido está atrasado. Se actualiza solo, para que la reunión se dedique a decidir y no a cuadrar cifras.",
    incluye: [
      "Definición de los indicadores con cada responsable, antes de construir nada",
      "Conexión automática a tus fuentes: ERP, base de datos, archivos o servicios en línea",
      "Tableros por área y una vista de dirección con lo esencial",
      "Alertas cuando un indicador se sale del rango acordado",
      "Capacitación al equipo para que lo use sin depender de nosotros",
    ],
    senales: [
      "El informe mensual se arma a mano y llega tarde",
      "Cada área presenta cifras distintas sobre lo mismo",
      "Nadie sabe con certeza cuánto cuesta un proceso o un producto",
    ],
  },
  {
    icon: "app",
    slug: "aplicaciones-web",
    title: "Aplicaciones web",
    body: "Herramientas hechas para tu proceso, no procesos forzados a una herramienta.",
    herramientas: ["Python", "HTML y JavaScript", "PostgreSQL"],
    resumen:
      "Cuando el proceso ya está rediseñado y ninguna herramienta del mercado lo acompaña, construimos la aplicación que hace falta: la que reemplaza el archivo compartido, el cuaderno o los correos con los que hoy se sostiene la operación. Funciona en el navegador, en computadora y en celular, sin instalar nada.",
    incluye: [
      "Diseño de las pantallas a partir del proceso real, con la gente que lo ejecuta",
      "Perfiles y permisos por rol, con registro de quién hizo cada cosa",
      "Aplicación responsiva: se usa igual en oficina, en planta o en ruta",
      "Puesta en marcha, migración de los datos actuales y acompañamiento",
    ],
    senales: [
      "El proceso vive en un Excel compartido que se traba o se sobrescribe",
      "Compraron un sistema y terminaron llevando el control por fuera",
      "Cada persona registra la información a su manera",
    ],
  },
  {
    icon: "portal",
    slug: "portales-de-clientes",
    title: "Portales de clientes",
    body: "Pedidos, estados y documentos en autoservicio, sin llamadas ni correos de ida y vuelta.",
    herramientas: ["Odoo", "Aplicación web a la medida"],
    resumen:
      "Un espacio propio donde tu cliente entra con su usuario y resuelve solo lo que hoy le pide por teléfono a tu equipo: en qué va su pedido, qué facturas tiene pendientes, dónde descargar un certificado o un documento. Baja la carga de atención y mejora la experiencia, porque la respuesta está disponible a cualquier hora.",
    incluye: [
      "Acceso por cliente, con su información y sus documentos",
      "Estado de pedidos, despachos y cuenta corriente, conectado a tus sistemas",
      "Carga y descarga de documentos, con historial",
      "Avisos automáticos por correo o WhatsApp ante cada cambio de estado",
    ],
    senales: [
      "El equipo dedica horas a responder las mismas preguntas",
      "Los documentos se piden por correo y se pierden en las bandejas",
      "El cliente se entera tarde de un atraso o un cambio",
    ],
  },
  {
    icon: "workflow",
    slug: "automatizacion",
    title: "Automatización",
    body: "Menos digitación y reprocesos; más tiempo del equipo para lo que importa.",
    herramientas: ["Power Automate", "n8n", "Python", "Odoo"],
    resumen:
      "Identificamos las tareas repetitivas que consumen horas del equipo (copiar datos de un sistema a otro, armar el mismo informe cada semana, revisar correos para registrar pedidos) y las dejamos corriendo solas. La persona pasa de ejecutar la tarea a revisar las excepciones.",
    incluye: [
      "Inventario de tareas repetitivas y cuánto tiempo consume cada una",
      "Automatización de las que más pesan, empezando por la de mayor impacto",
      "Reglas claras de qué pasa cuando algo falla y a quién se avisa",
      "Tablero de seguimiento: qué corrió, qué no y por qué",
    ],
    senales: [
      "Alguien dedica horas a pasar información de un sistema a otro",
      "Los errores de digitación se detectan tarde y cuestan caro",
      "El cierre de mes depende de que una persona específica esté disponible",
    ],
  },
  {
    icon: "plug",
    slug: "integraciones",
    title: "Integraciones y APIs",
    body: "Sistemas que hablan entre sí y un solo dato confiable en toda la empresa.",
    herramientas: ["APIs REST", "Python", "SQL"],
    resumen:
      "Conectamos los sistemas que ya usas —ERP, facturación electrónica, comercio en línea, logística, banca— para que la información viaje sola entre ellos. El dato se registra una vez y aparece donde tiene que aparecer, sin que nadie lo copie a mano.",
    incluye: [
      "Mapa de qué sistema es dueño de cada dato, para evitar versiones en conflicto",
      "Integraciones con los servicios que ya tienes y con los de tus socios",
      "APIs propias cuando otros necesitan consumir tu información de forma segura",
      "Monitoreo: si una conexión falla, alguien se entera el mismo día",
    ],
    senales: [
      "El mismo dato se digita en dos o tres sistemas distintos",
      "Conciliar entre sistemas toma días al cierre",
      "Un proveedor o cliente pide conectarse contigo y no hay por dónde",
    ],
  },
  {
    icon: "sparkles",
    slug: "inteligencia-artificial",
    title: "Inteligencia artificial",
    body: "Análisis y asistentes que aceleran tareas donde la IA realmente aporta.",
    herramientas: ["Claude", "OpenAI", "Python"],
    resumen:
      "Sumamos IA donde cambia el resultado, no como adorno: leer y clasificar documentos, extraer datos de facturas o guías, redactar borradores, responder preguntas sobre tus propios manuales y políticas. Siempre con una persona revisando lo que importa y con reglas claras sobre qué información se comparte.",
    incluye: [
      "Selección de los casos donde la IA aporta y descarte de los que no",
      "Asistentes conectados a tu información, no respuestas genéricas",
      "Lectura automática de documentos: facturas, órdenes, guías, contratos",
      "Definición de controles: qué revisa una persona y qué queda registrado",
    ],
    senales: [
      "Hay personas leyendo y clasificando documentos todo el día",
      "El conocimiento de la empresa está disperso en carpetas y correos",
      "Quieren usar IA pero no saben por dónde empezar sin arriesgar datos",
    ],
  },
  {
    icon: "chat",
    slug: "chatbots",
    title: "Chatbots",
    body: "Respuestas inmediatas a clientes y equipos, integradas con tus datos.",
    herramientas: ["WhatsApp", "Web", "Teams"],
    resumen:
      "Un asistente que atiende por WhatsApp, por la web o por Teams y responde con información real de tus sistemas: el estado de un pedido, el saldo de una cuenta, el horario de una sucursal. Cuando la consulta se sale de lo previsto, pasa la conversación a una persona con todo el contexto.",
    incluye: [
      "Definición de qué debe resolver solo y qué debe derivar a una persona",
      "Conexión a tus sistemas para responder con datos, no con frases armadas",
      "Atención en el canal que ya usan tus clientes",
      "Reporte de las preguntas más frecuentes, útil para mejorar el proceso",
    ],
    senales: [
      "El mismo tipo de consulta se repite decenas de veces al día",
      "Fuera de horario nadie responde y se pierden oportunidades",
      "El equipo de atención no da abasto en los picos",
    ],
  },
  {
    icon: "chart",
    slug: "analitica",
    title: "Analítica de datos",
    body: "Del dato disperso a respuestas claras sobre costos, tiempos y rentabilidad.",
    herramientas: ["SQL", "Python", "Power BI"],
    resumen:
      "Trabajo de fondo sobre los datos: ordenarlos, limpiarlos y cruzarlos para responder preguntas que hoy nadie puede contestar con certeza. Qué producto deja margen y cuál no, dónde se va el tiempo del proceso, qué clientes se están enfriando, cuánto cuesta realmente atender un pedido.",
    incluye: [
      "Revisión de la calidad de los datos actuales y qué falta capturar",
      "Modelo de datos ordenado, con definiciones acordadas entre áreas",
      "Análisis de costos, tiempos, rentabilidad y comportamiento de clientes",
      "Entrega de hallazgos en lenguaje de negocio, con recomendaciones concretas",
    ],
    senales: [
      "Las decisiones se toman por intuición porque los datos no son confiables",
      "Nadie sabe el costo real por producto, ruta o cliente",
      "Hay mucha información guardada y ningún uso claro de ella",
    ],
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
