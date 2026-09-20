export interface Experience {
  company: string;
  client?: string;
  careerNote?: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;

  summary: string;

  responsibilities: string[];
  achievements: string[];

  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "Santander Digital Services",
    careerNote:
      "Inicialmente participé en el proyecto como consultor externo a través de Talan y posteriormente fui internalizado como empleado de Santander Digital Services.",
    position: "Software Developer",
    startDate: "Abr. 2023",
    endDate: "Actualidad",
    location: "Málaga, España",

    summary:
      "Desarrollo y mantenimiento de procesos automatizados para transformar datos dispersos en información accesible para equipos funcionales, mediante pipelines y reportes.",

    responsibilities: [
      "Desarrollo y mantenimiento de procesos con Scala y Spark dentro de una arquitectura de datos previamente definida.",
      "Adaptación y creación de pipelines para incorporar nuevos reportes y necesidades de análisis.",
      "Orquestación de tareas y procesos mediante Apache Airflow.",
      "Preparación e ingesta de datos para su consulta y visualización mediante Elasticsearch y Kibana.",
      "Creación y mantenimiento de dashboards y reportes para equipos funcionales.",
    ],

    achievements: [
      "Automatización de un proceso de análisis que anteriormente requería combinar múltiples archivos Excel y realizar consultas SQL manualmente.",
      "Disponibilización de reportes y dashboards en Kibana para facilitar la consulta de información por parte de los equipos funcionales.",
    ],

    technologies: [
      "Scala",
      "Apache Spark",
      "Databricks",
      "Apache Airflow",
      "Kibana",
      "SQL",
      "Python",
    ],
  },

  {
    company: "VATES - Software",
    client: "Claro",
    position: "Software Developer",
    startDate: "Nov. 2022",
    endDate: "Abr. 2023",
    location: "Córdoba, Argentina",

    summary:
      "Desarrollo Backend para proyectos relacionados con gestión de mora e integración de sistemas de pago, incluyendo la creación de un MVP para explorar la integración con Mercado Pago.",

    responsibilities: [
      "Mantenimiento y adaptación de funcionalidades existentes en PL/SQL para procesos relacionados con la gestión de mora.",
      "Desarrollo de un MVP para explorar la integración de Mercado Pago y gestionar el flujo de pagos.",
      "Desarrollo de servicios con Spring Boot para recibir y procesar notificaciones de pago.",
      "Integración de microservicios mediante Apache Kafka para procesar eventos y comunicar el estado de las operaciones.",
    ],

    achievements: [
      "Desarrollo de un MVP que permitía recibir las notificaciones de pago, registrar las transacciones y actualizar automáticamente su estado.",
      "Optimización y adaptación de procesos existentes de gestión de mora mediante cambios en PL/SQL.",
    ],

    technologies: ["Java", "Spring Boot", "PL/SQL", "Microservicios", "Kafka"],
  },

  {
    company: "CDA Informática",
    client: "Prisma Medios de Pago",
    position: "Software Developer",
    startDate: "Ago. 2021",
    endDate: "Nov. 2022",
    location: "Buenos Aires, Argentina",

    summary:
      "Participación en la modernización de un sistema legacy para la gestión y visualización de resúmenes de liquidación para comercios.",

    responsibilities: [
      "Participación en la migración y modernización del sistema de resúmenes de liquidación para comercios.",
      "Migración progresiva de funcionalidades desde Java 7 y Scala hacia Java 8 y Spring Boot.",
      "Migración de funcionalidades hacia una arquitectura basada en APIs REST y servicios.",
      "Participación en la modernización de la interfaz web mediante el desarrollo de un prototipo con React.",
      "Contribución a la reorganización y documentación durante el proceso de modernización.",
    ],

    achievements: [
      "Contribución a la modernización tecnológica de un sistema legacy, estableciendo una base más mantenible y desacoplada.",
      "Migración de funcionalidades hacia APIs REST, facilitando la evolución y futuras integraciones del sistema.",
      "Desarrollo de un prototipo en React para modernizar la búsqueda y visualización de resúmenes de liquidación.",
    ],

    technologies: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "Scala",
      "JavaScript",
      "React",
      "REST",
    ],
  },

  {
    company: "Universidad Nacional del Centro de la Provincia de Buenos Aires",
    position: "Profesor Universitario Asistente",
    startDate: "Mar. 2021",
    endDate: "Ago. 2021",
    location: "Tandil, Argentina",

    summary:
      "Colaboración en la materia Programación 3 de la Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas.",

    responsibilities: [
      "Enseñanza de Programación Orientada a Objetos utilizando Java.",
      "Acompañamiento a estudiantes en la resolución de problemas algorítmicos y ejercicios prácticos.",
      "Evaluación y revisión de proyectos, promoviendo buenas prácticas de programación.",
    ],

    achievements: [
      "Acompañamiento de estudiantes en el aprendizaje y aplicación de conceptos de programación orientada a objetos, recursión, árboles y grafos.",
    ],

    technologies: [
      "Java",
      "Programación Orientada a Objetos",
      "Algoritmos",
      "Estructuras de Datos",
    ],
  },

  {
    company: "Iraunkorrenek",
    position: "Software Developer",
    startDate: "Dic. 2019",
    endDate: "Ago. 2021",
    location: "Tandil, Argentina",

    summary:
      "Desarrollo y evolución de RxTro, una plataforma orientada a simplificar la gestión de citas en el sector salud.",

    responsibilities: [
      "Desarrollo e implementación de nuevas funcionalidades para la plataforma.",
      "Participación en la migración del sistema de Liferay 6 a Liferay 7.",
      "Mantenimiento y evolución de funcionalidades existentes.",
      "Desarrollo y mantenimiento de componentes utilizando Java, JSP y JavaScript.",
    ],

    achievements: [
      "Contribución a la migración de la plataforma de Liferay 6 a Liferay 7, facilitando su evolución tecnológica.",
      "Participación en la evolución de RxTro mediante la incorporación de nuevas funcionalidades y mejoras sobre el sistema existente.",
    ],

    technologies: [
      "Java",
      "Liferay",
      "JSP",
      "JavaScript",
      "Hibernate",
      "SQL",
      "Git",
    ],
  },
];
