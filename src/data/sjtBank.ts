import type { SjtScenario } from '@/types';

export const masterSjtBank: SjtScenario[] = [
  {
    scenario:
      "El gerente de la tienda te aborda alterado porque recibirá una inspección de sus directivos en 20 minutos. Te exige que pongas en exhibición tres pallets de bebidas que acaban de llegar al muelle, sin esperar a revisarlos ni registrar la entrada en el sistema, prometiendo que 'él firma la recepción después'.",
    options: [
      { id: 1, text: "Explicas con firmeza y amabilidad que el protocolo de Swire exige cotejar el albarán antes de liberar producto para evitar discrepancias de inventario, pero ofreces inspeccionar a máxima prioridad las marcas líderes que irán al frente de la tienda.", isBest: true, isWorst: false },
      { id: 2, text: "Aceptas la orden del gerente inmediatamente y vuelcas el producto a la sala de ventas sin revisar, para evitar que se moleste con la compañía.", isBest: false, isWorst: true },
      { id: 3, text: "Pides que te dé 5 minutos para revisar la carga mientras el gerente firma de forma verbal, confiando en la memoria del día.", isBest: false, isWorst: false },
      { id: 4, text: "No dices nada y comienzas a mover cajas, porque la prioridad es cumplir el cierre del turno en la tienda.", isBest: false, isWorst: false },
    ],
  },
  {
    scenario:
      'Al retirar la envoltura plástica de un pallet mixto, una botella de vidrio de Topo Chico en el nivel medio estalla por presión acumulada, cortándote levemente un guante y dejando cristales y líquido mezclados con cajas de cartón inferiores.',
    options: [
      { id: 1, text: "Suspende de inmediato la manipulación, bloqueas el acceso del pallet con señalética, revisas tu mano para asegurar que no haya lesión cutánea, reportas el incidente al supervisor y limpias los vidrios con pala y escoba antes de evaluar las cajas mojadas.", isBest: true, isWorst: false },
      { id: 2, text: "Sacudes rápidamente las cajas para tirar los cristales al piso del depósito y continúas la descarga manual para no perder el turno asignado.", isBest: false, isWorst: true },
      { id: 3, text: "Te escondes detrás del pallet y esperas a que alguien más se haga cargo de la limpieza.", isBest: false, isWorst: false },
      { id: 4, text: "Dejas la botella rota y sigues enviando cajas porque el daño ya ocurrió y no lo puedes revertir.", isBest: false, isWorst: false },
    ],
  },
  {
    scenario:
      'Al acomodar Coca-Cola Original 2L, notas que la góndola tiene producto con fecha de vencimiento a 60 días, el pallet que trajiste tiene producto con fecha a 90 días, pero en el fondo del depósito de la tienda encuentras dos cajas olvidadas con fecha a 15 días.',
    options: [
      { id: 1, text: "Sacas el producto de 15 días, lo colocas en el frente de la góndola, dejas el de 60 días detrás y el de 90 días en reserva, y avisas al encargado de sección sobre el lote corto para monitorear su salida.", isBest: true, isWorst: false },
      { id: 2, text: "Dejas las cajas de 15 días en el depósito para que el personal de la tienda decida qué hacer con ellas y llenas la góndola únicamente con el producto nuevo del pallet.", isBest: false, isWorst: true },
      { id: 3, text: "Colocas las cajas viejas detrás de las nuevas para que la góndola parezca más abastecida.", isBest: false, isWorst: false },
      { id: 4, text: "Retiras todo el producto para no correr riesgo de vender un lote vencido.", isBest: false, isWorst: false },
    ],
  },
  {
    scenario:
      'La rampa de ingreso a la bodega tiene una inclinación pronunciada. Para evitar hacer tres viajes con la carretilla manual bajo la lluvia, el chofer del camión te sugiere subir toda la carga pesada en un solo viaje empujando entre los dos.',
    options: [
      { id: 1, text: "Rechazas la sugerencia, realizas los viajes fraccionados respetando el límite de carga por viaje y utilizas el calzado antideslizante con paso firme.", isBest: true, isWorst: false },
      { id: 2, text: "Aceptas la ayuda del chofer para subir la carretilla sobrecargada entre ambos con fuerza física, porque el tiempo es la mayor prioridad.", isBest: false, isWorst: true },
      { id: 3, text: "Preguntas si hay otra ruta menos inclinada y esperas a que el almacén te asigne otra carretilla.", isBest: false, isWorst: false },
      { id: 4, text: "Empujas a máxima velocidad para no retrasar el reparto aunque el piso esté mojado.", isBest: false, isWorst: false },
    ],
  },
  {
    scenario:
      'Estás reponiendo botellas familiares en el pasillo principal. Un cliente apurado tropieza accidentalmente con tu carretilla y se queja en voz alta de que estás estorbando el paso de mala manera.',
    options: [
      { id: 1, text: "Le pides disculpas cortésmente por el inconveniente, mueves de inmediato la carretilla pegada a la góndola dejando el pasillo despejado y continúas con serenidad.", isBest: true, isWorst: false },
      { id: 2, text: "Le señalas al cliente que la carretilla estaba visible y que debería caminar prestando más atención por su propia seguridad.", isBest: false, isWorst: true },
      { id: 3, text: "Ignoras el comentario por completo, no haces contacto visual y sigues apilando botellas como si nada hubiera pasado.", isBest: false, isWorst: false },
      { id: 4, text: "Dejas tu carretilla en el pasillo y vas a buscar al gerente de la tienda para quejarte de la actitud del cliente.", isBest: false, isWorst: false },
    ],
  },
  {
    scenario:
      'Llegas a tu segunda tienda y encuentras que la exhibición de cabecera que armaste ayer fue desarmada por el encargado del supermercado para poner producto de otra marca competidora.',
    options: [
      { id: 1, text: "Confrontas de inmediato al encargado exigiéndole que vuelva a poner los productos de Coca-Cola porque ese espacio está pagado por contrato.", isBest: false, isWorst: true },
      { id: 2, text: "Desarmas silenciosamente la exhibición de la competencia y vuelves a colocar las bebidas de Coca-Cola en su lugar original.", isBest: false, isWorst: false },
      { id: 3, text: "Hablas calmadamente con el encargado para comprender el motivo del cambio, tomas fotografías de la cabecera y notificas de inmediato a tu supervisor de Swire con la evidencia.", isBest: true, isWorst: false },
      { id: 4, text: "No dices nada, dejas el producto en el piso del depósito y te vas a tu siguiente tienda asignada en la ruta.", isBest: false, isWorst: false },
    ],
  },
  {
    scenario:
      'Estás retrasada 30 minutos respecto a tu itinerario diario. Para ganar tiempo, te das cuenta de que podrías cargar 4 cajas pesadas a la vez en lugar de las 2 recomendadas por el protocolo ergonómico.',
    options: [
      { id: 1, text: "Cargas las 4 cajas a la vez solo durante esta tienda para recuperar el tiempo perdido y luego vuelves a la técnica normal.", isBest: false, isWorst: true },
      { id: 2, text: "Mantienes el levantamiento seguro de a 2 cajas utilizando las piernas, optimizas el orden de descarga y avisas a tu supervisor que tu ruta lleva un leve retraso justificado.", isBest: true, isWorst: false },
      { id: 3, text: "Le pides a un cliente del supermercado que te ayude a cargar dos cajas para terminar más rápido.", isBest: false, isWorst: false },
      { id: 4, text: "Decides reponer solo la mitad de las bebidas en góndola para marcharte a tiempo a la próxima parada.", isBest: false, isWorst: false },
    ],
  },
  {
    scenario:
      'Durante la reposición, una caja de vidrio se cae de la parte superior del pallet y un cliente se acerca curioso para ver qué pasó. Te pide que le des una botella antes de que el carrito se mueva.',
    options: [
      { id: 1, text: "Aplicas protocolo: se retira el producto dañado, te aseguras de que nadie se haga daño, reubicas la zona y explicas con cortesía que no se puede abrir ni entregar producto del pallet dañado.", isBest: true, isWorst: false },
      { id: 2, text: "Entregas una botella para evitar conflicto con el cliente, sin verificar qué producto es ni si está en condiciones.", isBest: false, isWorst: true },
      { id: 3, text: "Pides que se aleje, sin explicar la política ni evaluar la caja rota.", isBest: false, isWorst: false },
      { id: 4, text: "Vuelves a guardar la caja y sigues sin reportar el incidente porque ya se resolvió.", isBest: false, isWorst: false },
    ],
  },
  {
    scenario:
      'Al ubicar tu pallet en el depósito del supermercado, el único espacio despejado está justo delante del gabinete de mangueras contra incendios.',
    options: [
      { id: 1, text: "Dejar el pallet allí temporalmente asegurando que lo moverás apenas termines de vaciar la mitad de las cajas.", isBest: false, isWorst: true },
      { id: 2, text: "Despejar un área segura en la bodega moviendo pallets vacíos o consultar al jefe de patio dónde reubicar la carga sin obstruir salidas ni equipos contra incendios.", isBest: true, isWorst: false },
      { id: 3, text: "Apilar las cajas directamente en el suelo del pasillo de acceso peatonal para no tapar la manguera.", isBest: false, isWorst: false },
    ],
  },
  {
    scenario:
      'Un paquete de 12 latas de Coca-Cola Zero tiene el plástico termoencogible desgarrado a la mitad, pero las latas no tienen golpes, fugas ni suciedad.',
    options: [
      { id: 1, text: "Ponerlo a la venta en góndola con el lado roto hacia atrás para que no se note.", isBest: false, isWorst: true },
      { id: 2, text: "Romper el plástico por completo y colocar las 12 latas sueltas en la bandeja de unidades individuales de la heladera.", isBest: false, isWorst: false },
      { id: 3, text: "Retirar el paquete, separarlo en el área de merma/reempaque de Swire y notificar la unidad para su correcta regularización.", isBest: true, isWorst: false },
    ],
  },
  {
    scenario:
      'El operador del montacargas de la tienda baja un pallet de botellas de 2L al que se le rompió el plástico protector superior y te pide que lo recibas así para no demorarse.',
    options: [
      { id: 1, text: "Aceptar la carga para no tener roces con el personal de la tienda y sostener las cajas con las manos mientras te mueves.", isBest: false, isWorst: false },
      { id: 2, text: "Negarte a recibir el pallet en esas condiciones hasta que sea reasegurado con film plástico o bajado a piso de forma estable.", isBest: true, isWorst: false },
      { id: 3, text: "Subirte a una escalera para acomodar las cajas sueltas mientras el montacargas sigue en movimiento.", isBest: false, isWorst: true },
    ],
  },
  {
    scenario:
      'Al retirar las botellas viejas para rotar el producto, notas que la base metálica del estante tiene restos pegajosos secos de un refresco roto hace días.',
    options: [
      { id: 1, text: "Colocar el cartón de las cajas nuevas sobre la mancha y acomodar las botellas encima.", isBest: false, isWorst: true },
      { id: 2, text: "Limpiar la bandeja con un paño y sanitizante antes de colocar el producto rotado.", isBest: true, isWorst: false },
      { id: 3, text: "Llenar la góndola normalmente ya que la suciedad quedó debajo de las botellas y nadie la verá.", isBest: false, isWorst: false },
    ],
  },
  {
    scenario:
      'Mientras repones latas en el pasillo, un cliente te exige que abras con tu cúter un paquete cerrado de 24 latas porque solo quiere comprar 2 unidades.',
    options: [
      { id: 1, text: "Abrir el paquete con el cúter para complacer al cliente y evitar que se enoje.", isBest: false, isWorst: true },
      { id: 2, text: "Explicarle cordialmente que ese SKU se vende exclusivamente como unidad sellada y acompañarlo al sector de latas individuales.", isBest: true, isWorst: false },
      { id: 3, text: "Ignorarlo y decirle secamente que tú no trabajas para el supermercado.", isBest: false, isWorst: false },
    ],
  },
  {
    scenario:
      'Al llegar a tu última parada del día, descubres que tienes en la carretilla 3 cajas de Powerade que pertenecían a la tienda anterior y olvidaste descargar.',
    options: [
      { id: 1, text: "Dejarlas en la tienda actual como 'mercancía extra' para no tener que regresar.", isBest: false, isWorst: false },
      { id: 2, text: "Comunicarte con tu supervisor de ruta, registrar el error y acordar si regresas a entregarlas o se reasignan en el sistema.", isBest: true, isWorst: false },
      { id: 3, text: "Guardar las cajas en tu vehículo personal para entregarlas al día siguiente sin avisar a nadie.", isBest: false, isWorst: true },
    ],
  },
  {
    scenario:
      'Está lloviendo intensamente y el área de descarga no tiene techo. Las cajas de cartón de latas corren riesgo de mojarse y desfondarse en el trayecto de la rampa.',
    options: [
      { id: 1, text: "Cubrir la carretilla con un plástico protector, reducir la cantidad de cajas por viaje para mayor control y avanzar a paso seguro con calzado antideslizante.", isBest: true, isWorst: false },
      { id: 2, text: "Correr por la rampa cargando 5 cajas a la vez para reducir el tiempo bajo la lluvia.", isBest: false, isWorst: true },
      { id: 3, text: "Suspender el trabajo, quedarte en el vehículo y omitir la tienda sin reportarlo a despacho.", isBest: false, isWorst: false },
    ],
  },
  {
    scenario:
      'Tu teléfono móvil o terminal de registro pierde señal y la aplicación de Swire se congela al ingresar a una tienda con depósito subterráneo.',
    options: [
      { id: 1, text: "Salir a la superficie a un lugar con señal, reiniciar la app para registrar la entrada y continuar el trabajo anotando físicamente cualquier cambio en caso de reconexión tardía.", isBest: true, isWorst: false },
      { id: 2, text: "Marcharte a la siguiente tienda porque 'sin sistema no se puede trabajar'.", isBest: false, isWorst: true },
      { id: 3, text: "Esperar en el depósito sentado sin hacer nada hasta que la señal vuelva por sí sola.", isBest: false, isWorst: false },
    ],
  },
  {
    scenario:
      "Un repositor de otra zona te llama por teléfono pidiéndote que cubras dos de sus supermercados porque 'se siente cansado y se quiere ir temprano', ofreciéndote invitarte a almorzar después.",
    options: [
      { id: 1, text: "Aceptar para ser buena compañera y apresurarte en tus propias tiendas.", isBest: false, isWorst: true },
      { id: 2, text: "Explicarle con respeto que no puedes alterar tu ruta asignada sin la aprobación directa del supervisor y sugerirle que reporte su estado al centro de despacho.", isBest: true, isWorst: false },
      { id: 3, text: "Decirle que sí, pero no ir a ninguna de sus tiendas.", isBest: false, isWorst: false },
    ],
  },
  {
    scenario:
      'Al colocar las botellas de 3L en el estante intermedio de la góndola, notas que la chapa metálica se flecta hacia abajo y los enganches laterales crujen.',
    options: [
      { id: 1, text: "Seguir llenando el estante hasta el fondo para que el peso se distribuya solo.", isBest: false, isWorst: true },
      { id: 2, text: "Retirar inmediatamente el exceso de producto, reubicar las botellas pesadas en el nivel base del suelo y avisar al jefe de piso de la tienda sobre el estante dañado.", isBest: true, isWorst: false },
      { id: 3, text: "Poner una caja de cartón debajo del estante como soporte improvisado.", isBest: false, isWorst: false },
    ],
  },
  {
    scenario:
      'Una botella de vidrio resbala de la góndola y se revienta en el suelo del pasillo principal mientras varias familias hacen sus compras.',
    options: [
      { id: 1, text: "Quedarte custodiando el área, advertir a las personas que no se acerquen, solicitar apoyo de limpieza de la tienda y usar escoba y pala para retirar los cristales.", isBest: true, isWorst: false },
      { id: 2, text: "Ir al cuarto de limpieza a buscar un trapeador, dejando el vidrio roto solo en el pasillo.", isBest: false, isWorst: false },
      { id: 3, text: "Empujar los vidrios con el zapato debajo de la góndola para que no estorben el paso.", isBest: false, isWorst: true },
    ],
  },
  {
    scenario:
      'El encargado de bodega del supermercado te acusa agresivamente de haber reventado una caja de latas que tú encontraste aplastada desde que llegaste.',
    options: [
      { id: 1, text: "Gritarle y exigirle que revise las cámaras de seguridad para que aprenda a respetar.", isBest: false, isWorst: true },
      { id: 2, text: "Mantener el tono calmo, explicarle que el daño venía de origen, mostrarle las fotos de recepción tomadas al inicio y ofrecerte a procesar la boleta de merma según el protocolo.", isBest: true, isWorst: false },
      { id: 3, text: "Asumir la culpa y pagar la caja de tu propio bolsillo para no tener problemas.", isBest: false, isWorst: false },
    ],
  },
  {
    scenario:
      'Llegas a colocar una edición limitada navideña, pero el cajero de prueba te informa que el código no pasa por el escáner del supermercado.',
    options: [
      { id: 1, text: "Colocar todo el producto en góndola de todos modos para que la gente lo tome.", isBest: false, isWorst: false },
      { id: 2, text: "Guardar el producto en bodega, avisar al encargado de recepción para que den de alta el SKU en el sistema y notificar a tu supervisor comercial de Swire.", isBest: true, isWorst: false },
      { id: 3, text: "Cambiar las etiquetas pegando encima códigos de barras de Coca-Cola Original regular.", isBest: false, isWorst: true },
    ],
  },
  {
    scenario:
      'Terminas de abrir las cajas en un pasillo concurrido y te das cuenta de que no tienes tu cuchilla retráctil (cúter) en el cinturón de herramientas.',
    options: [
      { id: 1, text: "Seguir trabajando y asumir que aparecerá al barrer al final del turno.", isBest: false, isWorst: true },
      { id: 2, text: "Detener la reposición de inmediato y rastrear paso a paso las cajas y estantes donde estuviste manipulando hasta encontrarla y asegurarla.", isBest: true, isWorst: false },
      { id: 3, text: "Tomar otro cúter nuevo de la camioneta sin buscar el anterior.", isBest: false, isWorst: false },
    ],
  },
  {
    scenario:
      'La puntera de góndola contratada por Coca-Cola está bloqueada por tarimas de madera vacías dejadas por los empleados nocturnos del supermercado.',
    options: [
      { id: 1, text: "No colocar el producto y poner en el reporte que la tienda no tenía espacio.", isBest: false, isWorst: false },
      { id: 2, text: "Solicitar cordialmente al jefe de pasillo que autorice el traslado de las tarimas al área de acopio y, con su visto bueno, despejar el espacio para montar la exhibición.", isBest: true, isWorst: false },
      { id: 3, text: "Arrastrar con rabia las tarimas al medio del pasillo para que los clientes se quejen con la tienda.", isBest: false, isWorst: true },
    ],
  },
  {
    scenario:
      'Suena la alarma de incendios del supermercado mientras estás a mitad de la descarga de un pallet en la bodega.',
    options: [
      { id: 1, text: "Seguir trabajando porque probablemente sea solo un simulacro y tienes el tiempo justo de ruta.", isBest: false, isWorst: true },
      { id: 2, text: "Detener la tarea de inmediato, dejar la carretilla pegada a la pared sin obstruir pasos de salida y dirigirte con calma hacia el punto de encuentro exterior.", isBest: true, isWorst: false },
      { id: 3, text: "Intentar sacar tus cosas y la carretilla hacia el estacionamiento antes de salir.", isBest: false, isWorst: false },
    ],
  },
  {
    scenario:
      'El camión entregó 20 cajas de Sprite, pero en góndola solo entran 8 botellas tras realizar la correcta rotación FIFO.',
    options: [
      { id: 1, text: "Forzar las botellas en huecos de otras marcas para que no sobre nada.", isBest: false, isWorst: true },
      { id: 2, text: "Ubicar el excedente en la zona aérea o bodega designada para 'sobrestock' (backstock), rotulado con fecha y ordenado según las reglas de la tienda.", isBest: true, isWorst: false },
      { id: 3, text: "Dejar las cajas sobrantes tiradas en el piso junto a la cabecera.", isBest: false, isWorst: false },
    ],
  },
  {
    scenario:
      'El dueño de una tienda pequeña te ofrece dinero en efectivo o mercancía gratis a cambio de que le dejes material publicitario exclusivo (hieleras, toldos) asignado a otra tienda.',
    options: [
      { id: 1, text: "Aceptar el dinero porque el material publicitario 'es solo plástico promocional'.", isBest: false, isWorst: true },
      { id: 2, text: "Aclarar con profesionalismo que los activos promocionales están auditados y asignados por sistema, rechazando la oferta y notificando el hecho al supervisor comercial.", isBest: true, isWorst: false },
      { id: 3, text: "Prometerle que se lo traerás mañana para que no insista, sabiendo que no lo harás.", isBest: false, isWorst: false },
    ],
  },
  {
    scenario:
      'La carretilla manual de reparto tiene un neumático desinflado, lo que hace que el carro tire hacia un lado y requiera el doble de fuerza en la espalda.',
    options: [
      { id: 1, text: "Forzar el cuerpo inclinándote con peso muerto para empujar la carretilla torcida todo el día.", isBest: false, isWorst: true },
      { id: 2, text: "Detener el uso del equipo averiado, utilizar la bomba de aire del kit de vehículo o solicitar un reemplazo en base/tienda antes de mover cargas mayores.", isBest: true, isWorst: false },
      { id: 3, text: "Descargar todo a mano llevando 3 cajas sobre los hombros.", isBest: false, isWorst: false },
    ],
  },
  {
    scenario:
      'Un cliente se acerca con una Coca-Cola Sin Azúcar y te pregunta detalladamente si el producto contiene fenilalanina o si es seguro para un diabético.',
    options: [
      { id: 1, text: "Asegurarle con total confianza que no tiene ningún peligro y que lo puede tomar en cualquier cantidad.", isBest: false, isWorst: true },
      { id: 2, text: "Indicarle amablemente dónde leer la tabla nutricional y la lista de alérgenos/ingredientes en el envase, sugiriéndole consultar a su médico ante cualquier condición de salud puntual.", isBest: true, isWorst: false },
      { id: 3, text: "Decirle que no tienes idea porque tú solo acomodas botellas.", isBest: false, isWorst: false },
    ],
  },
];
