import type { StoryQuestion } from '@/types';

export const storyQuestions: StoryQuestion[] = [
  {
    q: 'Como Repositor/Merchandiser de Swire Coca-Cola pasarás la mayor parte de tu jornada manejando en ruta y trabajando en solitario. ¿Cómo manejas esta dinámica?',
    options: [
      { text: 'Me adapto muy bien al trabajo autónomo; soy metódica para seguir mi lista de tiendas y me automotivo para cumplir los estándares sin requerir supervisión continua.', score: 100 },
      { text: 'Prefiero trabajar en un equipo grande donde el supervisor esté presente para coordinar cada paso del turno.', score: 35 },
      { text: 'Hago las tareas lo más rápido posible para terminar temprano, dejando algunos detalles menores para el día siguiente.', score: 10 },
    ],
  },
  {
    q: 'Al rotar la mercancía en una exhibición encuentras botellas con vencimiento en 4 días y producto nuevo recién llegado con vencimiento en 6 meses. ¿Cuál es tu protocolo exacto?',
    options: [
      { text: 'Aplico rigurosamente la regla FIFO (First In, First Out): coloco el lote próximo a vencer al frente para facilitar su venta inmediata y el nuevo detrás; si está dentro de la ventana crítica de merma, lo segrego y notifico.', score: 100 },
      { text: 'Coloco el lote nuevo adelante porque las botellas lucen más limpias y llamativas para los clientes.', score: 0 },
      { text: 'Dejo las botellas mezcladas ya que el consumidor suele elegir al azar en góndola.', score: 15 },
    ],
  },
  {
    q: 'En tus empleos anteriores o actividades formativas, ¿con qué frecuencia tuviste que ausentarte sin previo aviso o llegar tarde a tu turno?',
    options: [
      { text: 'Nunca; siempre avisé con al menos 24 horas de antelación o llegué a tiempo todos los días.', score: 100 },
      { text: 'Rara vez (1 o 2 veces al año), únicamente por emergencias médicas de fuerza mayor debidamente justificadas.', score: 65 },
      { text: 'Algunas veces al mes, cuando el tráfico o el clima hicieron imposible llegar a la hora.', score: 15 },
    ],
  },
  {
    q: 'Este puesto requiere levantar continuamente paquetes de hasta 20-25 kg (45-50 lbs), agacharse y caminar entre 10,000 y 15,000 pasos diarios durante todo el turno. ¿Cómo te sientes respecto a este nivel de demanda física?',
    options: [
      { text: 'Me resulta indiferente, aunque prefiero tareas de oficina cuando sea posible.', score: 20 },
      { text: 'Muy cómoda; disfruto los trabajos activos que implican movimiento físico continuo y conozco las técnicas de postura para proteger mi columna.', score: 100 },
      { text: 'Puedo realizarlo si me conceden pausas regulares cada media hora para descansar la espalda.', score: 45 },
    ],
  },
  {
    q: '¿Cuál de los siguientes entornos describe mejor tu forma ideal de trabajar en el día a día?',
    options: [
      { text: 'Trabajar de manera autónoma, gestionando mi propio ritmo a partir de una lista clara de objetivos diarios sin necesidad de que alguien me supervise.', score: 100 },
      { text: 'Estar integrada en un equipo presencial donde el líder asigne tareas paso a paso a lo largo del turno.', score: 30 },
      { text: 'Trabajar en soledad únicamente si el trabajo es muy liviano.', score: 15 },
    ],
  },
  {
    q: 'La reposición comercial implica repetir a diario la misma secuencia: descargar, verificar fechas (FIFO), colocar botellas en el estante y limpiar. ¿Cómo manejas las labores altamente repetitivas?',
    options: [
      { text: 'Me aburro rápidamente si las tareas no cambian todos los días.', score: 10 },
      { text: 'Mantengo la atención y el rigor en cada repetición; encuentro satisfacción en dejar cada góndola ordenada y con el estándar de calidad impecable.', score: 100 },
      { text: 'Busco formas de omitir pasos secundarios (como la limpieza) para no sentir la jornada monótona.', score: 5 },
    ],
  },
  {
    q: 'Si mientras acomodas un estante en una bodega solitaria se te resbala una caja de botellas de vidrio y se rompe sin que nadie te haya visto, ¿cómo has procedido en situaciones similares?',
    options: [
      { text: 'Aseguré el área, limpié los vidrios de inmediato y registré formalmente la merma en el sistema para informar a mi supervisor.', score: 100 },
      { text: 'Limpié el piso y tiré los restos a la basura para que no pareciera que fui descuidada.', score: 10 },
      { text: 'Dejé la caja dañada al fondo de la tarima para que el personal de la tienda la procesara como rotura de transporte.', score: 0 },
    ],
  },
  {
    q: 'La mayoría de las rutas de reposición comienzan entre las 5:00 AM y las 6:00 AM para ingresar antes de que abran las tiendas al público. ¿Cuál es tu historial con jornadas de inicio temprano?',
    options: [
      { text: 'Me adapto con facilidad; organizo mi descanso la noche anterior y tengo un récord impecable de inicio puntual en turnos matutinos.', score: 100 },
      { text: 'Me cuesta levantarme temprano durante los primeros meses, pero con el tiempo me acostumbro.', score: 45 },
      { text: 'Prefiero turnos vespertinos o nocturnos porque el rendimiento de mañana suele ser menor.', score: 10 },
    ],
  },
  {
    q: 'Cuando un imprevisto fuera de tu control (tráfico pesado, demora de entrega del camión) te quita una hora de tu itinerario, ¿cómo sueles reaccionar?',
    options: [
      { text: 'Me altero y doy por perdida la jornada reduciendo el esfuerzo en las tiendas restantes.', score: 10 },
      { text: 'Mantengo la calma, recalculo los tiempos priorizando los locales de mayor volumen y notifico de inmediato a mi supervisor para coordinar el plan.', score: 100 },
      { text: 'Acelero en carretera y manejo por encima del límite de velocidad para recuperar el tiempo perdido a toda costa.', score: 0 },
    ],
  },
  {
    q: 'En tu experiencia laboral, ¿con qué frecuencia has utilizado los Equipos de Protección Personal (guantes, botas de casquillo/seguridad, faja si aplica) cuando no había un jefe supervisando?',
    options: [
      { text: 'Siempre, al 100%; la seguridad personal no depende de que alguien mire, sino de mi autocuidado y el de mis compañeros.', score: 100 },
      { text: 'Solo cuando el trabajo se pone verdaderamente peligroso o si hace mucho frío.', score: 35 },
      { text: 'Procuro evitarlos si me hacen transpirar o me hacen moverme más despacio.', score: 5 },
    ],
  },
  {
    q: '¿Cómo reaccionas cuando un auditor o supervisor revisa tu trabajo y te pide desarmar una cabecera porque no cumple estrictamente con el planograma oficial?',
    options: [
      { text: 'Defiendo mi criterio y le explico que mi forma de acomodarlo era visualmente más atractiva.', score: 15 },
      { text: 'Acepto la retroalimentación de manera constructiva, corrijo la exhibición según la guía de la marca y presto mayor atención en la siguiente tienda.', score: 100 },
      { text: 'Deshago el trabajo con frustración y evito hablar con el supervisor durante el resto de la semana.', score: 20 },
    ],
  },
  {
    q: 'Si por buena organización terminas tu ruta 45 minutos antes de que concluya oficialmente tu horario de salida, ¿qué haces?',
    options: [
      { text: 'Me marcho a casa discretamente aprovechando el tiempo libre ganado.', score: 20 },
      { text: 'Contacto a mi supervisor para avisar que mi ruta está completa y consultar si hay alguna tienda cercana con alta demanda que necesite refuerzo.', score: 100 },
      { text: 'Me quedo en el vehículo esperando a que el reloj marque la hora exacta de salida.', score: 30 },
    ],
  },
  {
    q: 'Cuando un cliente del supermercado te ha tratado de forma descortés o te ha gritado por la falta de un producto que no depende de ti, ¿cómo te has comportado?',
    options: [
      { text: 'Le respondí con el mismo tono para evitar que me falte al respeto.', score: 5 },
      { text: 'Escuché con serenidad, me disculpé por el malestar, le ofrecí revisar en bodega o consultar con un empleado de la tienda, manteniendo una postura profesional.', score: 100 },
      { text: 'Me di la vuelta y lo dejé hablando solo para no perder tiempo.', score: 30 },
    ],
  },
  {
    q: 'El rol exige el uso diario de aplicaciones móviles para registrar entrada/salida, cargar fotos de exhibiciones y escanear inventarios. ¿Cuál es tu nivel de familiaridad con estas tecnologías?',
    options: [
      { text: 'Aprendo muy rápido a utilizar aplicaciones nuevas y soy disciplinada para ingresar la información en tiempo real sin omitir registros.', score: 100 },
      { text: 'Prefiero el papel y el bolígrafo; la tecnología suele ralentizarme en el trabajo de campo.', score: 25 },
      { text: 'Uso la app solo cuando me lo recuerdan por mensaje.', score: 15 },
    ],
  },
  {
    q: 'Si descubres un método para apilar cajas que no sigue el manual pero te ahorra 15 minutos por parada, ¿qué harías?',
    options: [
      { text: 'Implementarlo de inmediato por mi cuenta sin consultar a nadie.', score: 5 },
      { text: 'Mantener el método estándar autorizado y consultar primero con mi supervisor o líder de seguridad antes de alterar cualquier técnica de estiba.', score: 100 },
      { text: 'Utilizarlo solo cuando esté atrasado y ocultarlo si viene una inspección.', score: 0 },
    ],
  },
  {
    q: 'En días de frío intenso, lluvia continua o calor extremo, ¿cómo suele ser tu nivel de rendimiento en tareas de almacén o intemperie?',
    options: [
      { text: 'Mantengo mi energía y productividad igual que en un día templado, vistiéndome adecuadamente e hidratándome de forma continua.', score: 100 },
      { text: 'Mi ritmo cae significativamente y busco posponer las tareas más pesadas para días soleados.', score: 20 },
      { text: 'Prefiero no trabajar en exteriores cuando el clima no es óptimo.', score: 10 },
    ],
  },
  {
    q: 'Si ves a otro repositor de la empresa consumiendo una bebida del pallet sin pagarla o escondiendo botellas dañadas detrás de la mercadería buena, ¿qué harías?',
    options: [
      { text: 'Quedarme callada porque no me gusta ser delatora ni meterme en problemas ajenos.', score: 5 },
      { text: 'Hablar con él en privado para advertirle del riesgo y, si la conducta persiste o causa perjuicio grave, reportarlo confidencialmente por los canales de ética de la compañía.', score: 100 },
      { text: 'Imitar su conducta si veo que nadie lo sanciona.', score: 0 },
    ],
  },
  {
    q: 'En relación con el manejo de vehículos o herramientas compartidas de la empresa, ¿cuál ha sido tu conducta habitual?',
    options: [
      { text: 'Realizar inspecciones visuales previas (aceite, neumáticos, luces), reportar cualquier anomalía mecánica a tiempo y mantener el habitáculo limpio.', score: 100 },
      { text: 'Usarlo sin revisar nada y esperar a que el vehículo falle para que el taller se haga cargo.', score: 10 },
      { text: 'Conducir rápido entre paradas para aprovechar el tiempo del turno.', score: 0 },
    ],
  },
  {
    q: 'Al llegar al quinto o sexto día consecutivo de esfuerzo físico y manejo en ruta, ¿cómo garantizas que tu atención al detalle no decaiga?',
    options: [
      { text: 'Es inevitable cometer errores los viernes debido al cansancio acumulado de la semana.', score: 15 },
      { text: 'Cuido mis hábitos de descanso fuera del trabajo, realizo estiramientos y mantengo el mismo chequeo sistemático en la última tienda que en la primera.', score: 100 },
      { text: 'Trabajo más lento para no cansarme tanto, aunque deje góndolas a medio llenar.', score: 35 },
    ],
  },
  {
    q: 'Aunque eres empleada de Swire Coca-Cola, trabajas dentro de las instalaciones de supermercados ajenos (Walmart, Kroger, etc.). ¿Cómo describes tu relación con el personal interno de esas tiendas?',
    options: [
      { text: 'Cordial, colaborativa y respetuosa; entiendo que somos socios comerciales y trato a sus encargados y repositores como parte de mi equipo de trabajo.', score: 100 },
      { text: 'Distante y fría; prefiero no hablar con nadie del supermercado para que no me asignen tareas que no me corresponden.', score: 25 },
      { text: 'Competitiva; siempre trato de imponer mi espacio de góndola sobre los empleados de la tienda.', score: 5 },
    ],
  },
  {
    q: '¿Cuál es tu estándar cuando colocas los productos en la nevera o góndola principal?',
    options: [
      { text: 'Me basta con que las botellas estén dentro del estante sin importar hacia dónde mira la marca.', score: 10 },
      { text: 'Me aseguro de que todas las etiquetas miren directamente hacia el frente (facing), con las filas alineadas al borde del estante y los productos más antiguos al frente.', score: 100 },
      { text: 'Ordeno bien solo las dos primeras filas delanteras para terminar rápido.', score: 30 },
    ],
  },
  {
    q: '¿Qué estás buscando en esta posición con Swire Coca-Cola?',
    options: [
      { text: 'Un empleo temporal de pocas semanas mientras consigo algo diferente en otro sector.', score: 10 },
      { text: 'Estabilidad laboral en una empresa sólida, donde pueda consolidarme en la ruta, demostrar mi valor operativo y buscar oportunidades de crecimiento a mediano y largo plazo.', score: 100 },
      { text: 'Un trabajo que no me exija mucho compromiso mental ni físico.', score: 5 },
    ],
  },
];
