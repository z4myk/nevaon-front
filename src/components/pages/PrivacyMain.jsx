import React from 'react'

export const PrivacyMain = () => {
    return (
        <div className="container mt-4">
        <div className="row">
          {/* Sidebar */}
          <nav className="col-md-4 d-none d-md-block bg-light sidebar p-3 border">
            <ul className="nav flex-column">
              <li className="nav-item p-1">
                <a className="nav-link" href="#1">1. Responsable del tratamiento de datos</a>
              </li>
              
              <li className="nav-item p-1">
                <a className="nav-link" href="#2">2. Alcance y servicios cubiertos</a>
              </li>
              <li className="nav-item p-1" >
                <a className="nav-link" href="#3">3. Datos recopilados por tipo de servicio</a>
              </li>
              <li className="nav-item  p-1">
                <a className="nav-link" href="#4">4. Finalidades y bases legales</a>
              </li>
              <li className="nav-item p-1">
                <a className="nav-link" href="#5">5. Derechos del usuario por jurisdicción</a>
              </li>
              <li className="nav-item p-1">
                <a className="nav-link" href="#6">6. Seguridad y protección de datos</a>
              </li>
              <li className="nav-item p-1">
                <a className="nav-link" href="#7">7. Cookies y tecnologías de rastreo</a>
              </li>
              <li className="nav-item p-1">
                <a className="nav-link" href="#8">8. Retención y eliminación de datos</a>
              </li>
              <li className="nav-item p-1">
                <a className="nav-link" href="#9">9. Menores de edad</a>
              </li>
              <li className="nav-item p-1">
                <a className="nav-link" href="#10">10. Cambios y actualizaciones</a>
              </li>
              <li className="nav-item p-1">
                <a className="nav-link" href="#11">11. Contacto y autoridades</a>
              </li>
              <li className="nav-item p-1">
                <a className="nav-link" href="#12">12. Exención de responsabilidad general</a>
              </li>
            </ul>
          </nav>
  
          {/* Main Content */}
          <main className="col-md-8">
          <div className="container my-5">
            <h1 className="text-center">Política de Privacidad de Nevaon</h1>
            <p className="text-center">(Vemox Soluciones Tecnológicas Empresariales S.A. de C.V.)</p>
            <p className="text-muted text-center">Última actualización: 01/02/2024</p>

            <h2 id="1">1. Responsable del tratamiento de datos</h2>
            <h3>1.1 Identidad Legal:</h3>
            <p>
                La entidad responsable del tratamiento de sus datos personales es <strong>Vemox Soluciones Tecnológicas Empresariales S.A. de C.V.</strong> ("Nevaon"), con RFC XXXXXXXXXXXXX, domicilio fiscal en Olga Breenskin 30, Colonia Loma Linda, C.P. 92840, Tuxpan de Rodríguez Cano, Tuxpan, Veracruz de Ignacio de la Llave, México. 
                Para consultas generales, puede contactarnos por teléfono al <strong>+52 7831243833</strong> o por correo electrónico a <a href="mailto:privacy@nevaon.com">privacy@nevaon.com</a>.
            </p>

            <h2 id="2">2. Alcance y servicios cubiertos</h2>
            <h3>2.1 Cobertura de la política:</h3>
            <p>
                Esta política se aplica a todos los servicios operados por Nevaon a través de sus datacenters, incluyendo:
            </p>
            <ul>
                <li>Infraestructura en la nube (escritorios virtuales, servidores Bare Metal, VPS y VDS)</li>
                <li>Hosting y dominios (alojamiento web, registro de dominios y certificados SSL)</li>
                <li>Soluciones empresariales (correo corporativo y desarrollo de software a medida)</li>
                <li>Programas especializados (Programa Reseller y creación de páginas web)</li>
            </ul>
            <p>
                Sin embargo, no cubre servicios de terceros integrados, como pasarelas de pago externas, ya que estos están sujetos a sus propias políticas de privacidad. Los servicios personalizados requieren acuerdos específicos que detallan el tratamiento de datos.

            </p>
            <p>Además, esta política abarca el tratamiento de datos recopilados a través de diversas fuentes, como información de pasarelas de pago, datos de registro de usuarios, datos recolectados por nuestra página web, datos laborales de nuestros trabajadores y postulantes, así como información obtenida a través de nuestros canales de atención al cliente, incluyendo chat en vivo, tickets de soporte, WhatsApp, Messenger, Instagram y grabaciones de llamadas. Todos estos datos se gestionan conforme a las normativas vigentes y con medidas de seguridad adecuadas para garantizar su protección.</p>

            <h2 id="3">3. Datos recopilados por tipo de servicio</h2>
            <h3>3.1 Hosting web:</h3>
            <p>Recopilamos datos técnicos (IP, logs de acceso) y de registro (nombre, RFC, dirección) para operar el servicio.</p>

            <h3>3.2 Certificados SSL:</h3>
            <p>Validamos información empresarial (actas constitutivas) para certificados OV/EV, en colaboración con autoridades certificadoras.</p>

            <h3>3.3 Correo empresarial:</h3>
            <p>Procesamos direcciones de correo, metadatos de mensajes y registros anti-spam para garantizar seguridad.</p>

            <h3>3.4 Escritorios virtuales:</h3>
            <p>
               
Para la prestación de servicios de escritorios virtuales, recopilamos datos como la configuración del entorno virtual (sistema operativo, aplicaciones instaladas y personalizaciones), direcciones IP asignadas, uso de recursos (CPU, memoria RAM, almacenamiento y ancho de banda), logs de actividad (inicios de sesión, tiempos de conexión y eventos de seguridad), y datos de monitoreo para identificar problemas de rendimiento o actividades sospechosas, como intentos de acceso no autorizados. 

            </p>

            <h3>3.5 Servidores virtuales privados (VPS) y servidores dedicados:</h3>
            <p>
            Recolectamos datos como direcciones IP asignadas, configuración del sistema operativo (tipo, versión y personalizaciones), uso de recursos (CPU, RAM, almacenamiento y ancho de banda), logs de actividad (accesos SSH/FTP, instalación de software y eventos de seguridad), y datos de monitoreo para detectar alertas de rendimiento o actividades sospechosas, como intentos de acceso no autorizados o tráfico inusual. Además, recopilamos información de facturación, como métodos de pago e historial de transacciones, así como datos de contacto y registro del cliente, como nombre, correo electrónico y dirección. Nos reservamos el derecho de recopilar otros datos no mencionados expresamente aquí, siempre que sean necesarios para garantizar el correcto funcionamiento de los servicios, cumplir con obligaciones legales o proteger nuestros intereses legítimos, lo que puede incluir datos relacionados con la seguridad, auditorías técnicas o requerimientos regulatorios.
            </p>

            <h3>3.6 Datos sensibles:</h3>
            <p>No recopilamos información biométrica, médica, religiosa o política, salvo excepciones legales.</p>

            <h3>3.7 Sitio web (nevaon.com y subdominios):</h3>
            <p>
            Para operar y garantizar la seguridad de nuestro sitio web, procesamos datos técnicos que su navegador transmite automáticamente, como direcciones IP, hora de acceso, información del navegador, sistema operativo, configuración de idioma, resolución de pantalla, páginas solicitadas y códigos de estado. Adicionalmente, para proteger nuestra infraestructura frente a ataques (ej. denegación de servicio o intrusiones), procesamos datos como identificadores, información de conexión, ubicación (incluidas direcciones IP) y registros de actividad. Utilizamos la red CDN de Cloudflare Inc., con quien tenemos un acuerdo de tratamiento de datos bajo el Art. 28 del RGPD, lo que implica que ciertos datos puedan almacenarse en sus registros. Más detalles sobre las prácticas de privacidad de Cloudflare están disponibles en: <a href="https://www.cloudflare.com/privacypolicy/" target="_blank">https://www.cloudflare.com/privacypolicy/</a>
            </p>

            <h3>3.8 Datos de registro:</h3>
            <p>
            Para utilizar las funcionalidades de nuestra página web que requieren registro, como el portal de usuarios y clientes, es necesario proporcionar datos personales con el fin de crear una cuenta y verificar su identidad. Procesamos la siguiente información: direcciones IP, nombre de pila, apellido, género, dirección física, país, dirección de correo electrónico, condición (particular o empresarial), contraseñas (almacenadas de forma segura y cifrada) y, en caso de clientes comerciales, nombre de la empresa, número de identificación fiscal (RFC o equivalente), número de teléfono y datos de identificación empresarial pertinentes. Estos datos nos permiten gestionar su acceso, garantizar la seguridad de la plataforma y cumplir con obligaciones legales o contractuales. La información proporcionada se trata bajo medidas técnicas y organizativas conforme al Art. 28 del RGPD, asegurando la confidencialidad y protección de sus datos en todo momento.
            </p>

            <h3>3.9 Datos del sistema de tickets:</h3>
            <p>
            Recolectamos datos como la información de contacto del usuario (nombre, correo electrónico, número de teléfono), detalles de la solicitud o incidencia (descripción del problema, categoría del ticket, archivos adjuntos relevantes), historial de interacciones (respuestas, soluciones proporcionadas y seguimientos), y datos técnicos asociados (dirección IP, navegador y sistema operativo utilizados). También recopilamos información sobre el estado del ticket (abierto, en progreso, resuelto) y el tiempo de respuesta. Además, almacenamos datos de facturación o contratos relacionados con la solicitud, si aplica, para brindar un soporte más preciso. Nos reservamos el derecho de recopilar otros datos no mencionados expresamente aquí, siempre que sean necesarios para garantizar la calidad del servicio, cumplir con obligaciones legales o proteger nuestros intereses legítimos, lo que puede incluir datos relacionados con auditorías, seguridad o requerimientos regulatorios.
            </p>

            <h3>Canales de atención a través de software externo (WhatsApp, Instagram, Messenger u otros):</h3>
            <p>
            Recopilamos datos como la información de contacto del usuario (nombre, número de teléfono, dirección de correo electrónico o identificador de perfil en la plataforma), detalles de la consulta o solicitud (mensajes enviados y recibidos, archivos adjuntos, capturas de pantalla), y el historial de interacciones (respuestas proporcionadas, soluciones ofrecidas y seguimientos realizados). También registramos datos técnicos, como la dirección IP, el dispositivo utilizado y la hora de la interacción. En algunos casos, dependiendo de la plataforma, podemos acceder a información adicional proporcionada por el usuario en su perfil (por ejemplo, nombre de usuario, foto de perfil o ubicación). Nos reservamos el derecho de recopilar otros datos no mencionados expresamente aquí, siempre que sean necesarios para garantizar una atención eficiente, cumplir con obligaciones legales o proteger nuestros intereses legítimos, lo que puede incluir datos relacionados con auditorías, seguridad o requerimientos regulatorios. Es importante destacar que el tratamiento de estos datos también está sujeto a las políticas de privacidad de las plataformas externas utilizadas (WhatsApp, Instagram y Messenger).

            </p>

            <h3>3.11 Chat en vivo:</h3>
            <p>
            Recolectamos datos como la información de contacto del usuario (nombre, correo electrónico, número de teléfono), detalles de la consulta o solicitud (mensajes enviados y recibidos, archivos adjuntos, capturas de pantalla), y el historial de interacciones (respuestas proporcionadas, soluciones ofrecidas y seguimientos realizados). Además, recopilamos información técnica, como la dirección IP, el país de origen, el tipo de dispositivo utilizado (móvil, tableta, computadora), el sistema operativo, el navegador web y la resolución de pantalla. También registramos la duración de la sesión, la hora de conexión y desconexión, y cualquier acción realizada durante la interacción. Nos reservamos el derecho de recopilar otros datos no mencionados expresamente aquí, siempre que sean necesarios para garantizar una atención eficiente, cumplir con obligaciones legales o proteger nuestros intereses legítimos, lo que puede incluir datos relacionados con auditorías, seguridad o requerimientos regulatorios. Estos datos nos permiten mejorar la calidad del servicio y ofrecer una experiencia de soporte más personalizada y efectiva.

            </p>

            <h3>3.12 Llamadas telefónicas:</h3>
            <p>
            Durante las llamadas telefónicas, recopilamos información como el número de teléfono desde el que nos contacta, el nombre del usuario (si lo proporciona), el motivo de la llamada y los detalles de la consulta o solicitud. Además, registramos la duración de la llamada, la hora de inicio y finalización, y, en algunos casos, la ubicación aproximada basada en el código de área. Le informamos que su llamada puede ser grabada con el objetivo de mejorar la calidad del servicio, capacitar a nuestro equipo y garantizar la precisión en la atención brindada. Estas grabaciones se almacenan de forma segura y se eliminan después de un período determinado, a menos que sea necesario conservarlas por motivos legales, contractuales o de seguridad. Nos reservamos el derecho de recopilar otros datos no mencionados expresamente aquí, siempre que sean necesarios para cumplir con obligaciones legales, proteger nuestros intereses legítimos o mejorar la eficiencia del servicio.
            </p>

            <h3>3.13 Datos laborales:</h3>
            <p>
            Recopilamos información relacionada con los candidatos y empleados, como currículos (CVs), perfiles de LinkedIn, historial laboral (experiencia previa, puestos ocupados, duración en cada empleo), cartas de recomendación y referencias profesionales. Además, recogemos otros datos laborales, como certificaciones académicas, habilidades técnicas, disponibilidad horaria, expectativas salariales, y resultados de pruebas o evaluaciones realizadas durante el proceso de selección. En el caso de los empleados, también gestionamos información contractual, datos de nómina, desempeño laboral, asistencia, y cualquier otro dato necesario para la gestión de la relación laboral. Nos reservamos el derecho de recopilar otros datos no mencionados expresamente aquí, siempre que sean necesarios para cumplir con obligaciones legales, gestionar procesos de selección, administrar la relación laboral o proteger nuestros intereses legítimos. Estos datos se tratan con estrictas medidas de seguridad y confidencialidad, en cumplimiento de las normativas aplicables en materia de protección de datos y privacidad.

            </p>
            <h3>3.14 Datos de pasarelas de pago externas:</h3>
            <p>
            Para gestionar los pagos de productos y servicios, procesamos los datos personales proporcionados durante el registro, como direcciones IP, nombre, apellido, género, dirección, país, correo electrónico, condición (particular o empresarial), y, en caso de clientes comerciales, nombre de la empresa y número de identificación fiscal. También tratamos datos de pago, transacciones y los productos o servicios solicitados. Si el cliente no paga por adelantado el importe total del contrato, estos datos se transmiten al proveedor de servicios de pago seleccionado, como PayPal (Europe) S.à.rl & Cie, SCA, 22-24 Boulevard Royal, L-2449 Luxemburgo; Stripe Payments Europe Ltd, 1 Grand Canal Street Lower, Dublín 2, Irlanda; o Skrill (Paysafe Payment Solutions Limited, 70 Sir John Rogerson's Quay, Dublín 2, D02 R296, Irlanda). Estos proveedores también pueden recopilar la información si el cliente tiene una cuenta con ellos, requiriendo que inicie sesión con sus credenciales durante el proceso de pago. En estos casos, se aplica la política de privacidad del proveedor correspondiente. Durante el proceso de pago, se comparten detalles como el nombre del destinatario de la factura, dirección de envío, número de orden, datos de tarjeta o cuenta bancaria, importe, divisa y número de transacción con el proveedor de servicios de pago y las entidades de crédito involucradas.


            </p>
            <h3>3.15 Datos de dominios:</h3>
            <p>
            Recopilamos y tratamos datos relacionados con el registro y gestión de dominios, incluyendo información del titular del dominio (nombre, dirección, correo electrónico, número de teléfono), datos técnicos (servidores DNS, fecha de registro y expiración), y detalles de facturación (métodos de pago, historial de transacciones). Además, almacenamos información requerida por registradores oficiales, como el nombre de la empresa (en caso de clientes comerciales) y datos de contacto administrativos, técnicos y de facturación. Estos datos podrán ser almacenados y procesados por nuestros proveedores externos asociados, en el marco de la prestación de servicios necesarios para la gestión de dominios.</p>
            <p>Estos datos son necesarios para cumplir con las normativas de ICANN y otros organismos reguladores, así como para garantizar la correcta gestión y renovación de los dominios. Nos reservamos el derecho de determinar el uso que dichos proveedores puedan dar a los datos, garantizando que su tratamiento se ajuste a nuestras políticas y a los acuerdos contractuales vigentes.</p>
            <p>Nos reservamos el derecho de conservar esta información durante el tiempo necesario para cumplir con obligaciones legales, resolver disputas o proteger nuestros intereses legítimos. En caso de suspensión o cancelación del servicio, los datos se eliminarán conforme a lo establecido en nuestra cláusula de eliminación de datos. Cualquier proveedor externo que intervenga en el proceso estará obligado a respetar los mismos estándares de confidencialidad y seguridad que aplicamos internamente, sin perjuicio de nuestra responsabilidad última sobre el cumplimiento normativo.</p>
            <h3>3.16 Servicios adicionales:</h3>
            <p>
            Para la prestación de servicios adicionales, como la gestión de servicios personalizados, creación de páginas web, desarrollo de software a medida y otros servicios que podamos ofrecer, recopilamos y tratamos datos específicos necesarios para su ejecución. Esto incluye información proporcionada por el cliente, como requisitos del proyecto, especificaciones técnicas, contenido para la página web (textos, imágenes, videos), datos de acceso a servidores o plataformas, y detalles de facturación. También podemos recopilar datos de contacto, historial de comunicaciones y cualquier otra información relevante para garantizar la correcta entrega del servicio. Nos comprometemos a tratar estos datos con estrictas medidas de seguridad y confidencialidad, utilizándolos únicamente para los fines acordados con el cliente. En caso de que el servicio incluya la integración de herramientas o plataformas de terceros, el tratamiento de datos estará sujeto también a las políticas de privacidad de dichos proveedores. Nos reservamos el derecho de conservar esta información durante el tiempo necesario para cumplir con obligaciones contractuales, legales o de seguridad, y su eliminación se realizará conforme a lo establecido en nuestra cláusula de eliminación de datos.

            </p>
            <h3>3.17 Exención de responsabilidad: </h3>
            <p>
            Usted es responsable de los datos que almacene. Le recomendamos implementar medidas de seguridad adicionales, como cifrado de datos y copias de seguridad periódicas. No accedemos al contenido de su servidor, excepto en casos de incidencias técnicas reportadas, sospechas de mal uso o por requerimiento legal.

            </p>


            <h2 id="4">4. Finalidades y bases legales</h2>

            <h3>4.1 Bases jurídicas:</h3>
            <p>
            Ejecución de Contrato (Art. 6(1)(b) GDPR): Para servicios como registro, procesamiento de pedidos y pagos.
Cumplimiento Legal (Art. 6(1)(c) GDPR): Verificación contra listas de sanciones (ej: Refinitiv).
Consentimiento (Art. 6(1)(a) GDPR): Newsletter y cookies no esenciales.
Intereses Legítimos (Art. 6(1)(f) GDPR): Prevención de fraude (Maxmind) y mejora de servicios.


            </p>
            <h3>4.2 Transferencias internacionales:</h3>
            <p>
            Utilizamos cláusulas contractuales estándar (SCCs) y cifrado AES-256/TLS 1.3 para transferencias a EE.UU. y UE.
            </p>

            <h2 id="5">5. Derechos del usuario por jurisdicción</h2>

            <h3>
5.1 México (LFPDPPP):
</h3>
            <p>
            Derechos ARCO (Acceso, Rectificación, Cancelación, Oposición). Ejercicio mediante solicitud a arco@nevaon.com.
            </p>
            <h3>
            5.2 UE (GDPR):
</h3>
            <p>
            Derecho al olvido, portabilidad y limitación. Ejercicio mediante solicitud a gdpr@nevaon.com.
            </p>
            <h3>
            5.3 EE.UU. (CCPA):
</h3>
            <p>
            Opt-out de venta de datos enviando solicitud a optout@nevaon.com.

            </p>
            <h3>
            5.4 Latinoamérica:
</h3>
            <p>
            Brasil (LGPD): lgpd@nevaon.com | Resto de latam: datos@nevaon.com

            </p>

            <h2 id="6">6. Seguridad y protección de datos</h2>

            <h3>
            6.1 Medidas técnicas:
</h3>
            <p>
            Cifrado AES-256 para datos en reposo y TLS 1.3 en tránsito.
Autenticación biométrica en datacenters.
Monitoreo 24/7 con sistemas SIEM.


            </p>
            <h3>
            6.2 Certificaciones:
</h3>
            <p>
            ISO/IEC 27001:2022 para gestión de riesgos.
PCI DSS Nivel 1 para procesamiento de pagos.



            </p>
            <h3>
            
6.3 Respuesta a incidentes:

</h3>
            <p>
            Notificación a autoridades en 72 horas (UE) o 48 horas (México) tras detección de brechas.


            </p>
        <h2 id="7">7. Cookies y tecnologías de rastreo</h2>

        <h3>7.1 Tipos de cookies:</h3>
        <p>Esenciales: PHPSESSID (sesión). <br/>
Analíticas: Google Analytics (12 meses). <br />
Marketing: Facebook Pixel (6 meses). <br />
</p>

<h3>
7.2 Gestión:
</h3>
<p>Configuración de preferencias en nevaon.com/cookie-settings.</p>

<h2 id="8">8. Retención y eliminación de datos</h2>

<h3>8.1 Plazos:</h3>
<p>Datos fiscales: 5 años (México), 7 años (EE.UU.). <br/>
Registros de acceso: 12 meses. <br/>
Solicitudes de soporte: Hasta 10 años si existen obligaciones legales. <br/>
Servicios suspendidos: 20 dias. <br/>
Servicios cancelados: 10 dias. <br/>
Datos de registro del usuario/cliente inactivo (Más de 12 meses sin iniciar sesión):  12 meses. <br/>
Datos laborales: 12 meses <br/>
Datos de nuestro sistema de tickets de soporte: 12 meses <br/>
Otros: 1 a 12 meses <br/>
</p>

<h3>
8.2 Métodos de eliminación:
</h3>

<p>Digital: Sobrescritura NIST 800-88. <br />
Física: Trituración de discos (certificado DIN 66399). <br/>
</p>

<h3>8.3 Cancelación del registro/eliminación de la cuenta de usuario:</h3>
<p>Como usuario registrado, usted tiene la opción de cancelar su cuenta en cualquier momento. Además, puede actualizar o modificar la información personal almacenada en su perfil accediendo a la configuración de su cuenta. No obstante, si los datos procesados son esenciales para la ejecución o finalización de un contrato vigente, no será posible eliminarlos antes de que dicho contrato concluya. En el caso de representantes de empresas cuyos datos se traten conforme al Art. 6 (1) letra f del RGPD, estos tienen derecho a oponerse al tratamiento de sus datos personales bajo lo establecido en el Art. 21 del RGPD, tal como se detalla en la sección 10 de nuestra política.</p>

<h3>
8.4 Eliminación de datos:
</h3>
<p>Eliminaremos todos los datos asociados a los servicios suspendidos después de un período de 20 días a partir de la fecha de suspensión. Sin embargo, nos reservamos el derecho de eliminar dichos datos antes de este plazo si consideramos que es necesario por motivos de seguridad, cumplimiento legal o protección de nuestros intereses legítimos. Además, podremos proceder a la eliminación de cualquier dato, con o sin previo aviso, en cumplimiento de solicitudes de autoridades competentes o cuando lo determine nuestra política interna, incluso si dicha eliminación no está expresamente mencionada en esta política de privacidad. Esta acción se realizará siempre en conformidad con las normativas aplicables y sin perjuicio de nuestras obligaciones legales o contractuales.</p>

<h2 id="9">9. Menores de edad</h2>
<h3>9.1 Requisitos:</h3>
<p>Edad mínima: 16 años (UE), 13 años (EE.UU.), 18 años (México).</p>

<h2 id="10">10. Cambios y actualizaciones</h2>

<h3>10.1 Modificaciones a la Política de Privacidad:</h3>
<p>Nevaon se reserva el derecho de modificar o actualizar esta Política de Privacidad en cualquier momento, con el fin de reflejar cambios en nuestras prácticas de tratamiento de datos, actualizaciones normativas o mejoras en nuestros servicios. Cualquier cambio significativo en la forma en que tratamos tus datos personales será notificado a través de nuestros canales de comunicación habituales, como nuestro sitio web, correo electrónico o notificaciones dentro de nuestros servicios.</p>

<h3>10.2 Consentimiento y vigencia de los cambios:</h3>
<p>En caso de que los cambios requieran tu consentimiento conforme a la normativa aplicable, te proporcionaremos una opción clara para aceptar o rechazar las modificaciones. Si continúas utilizando nuestros servicios después de la entrada en vigor de los cambios, se entenderá que aceptas la Política de Privacidad actualizada.</p>

<h2 id="11">11. Contacto y autoridades</h2>

<h3>11.1 Consultas:</h3>
<p>México y Latinoamerica: privacidad@nevaon.com <br/>
UE: dpo@nevaon.com | AEPD (España). <br/>
EE.UU.: privacy-us@nevaon.com | CPPA (California). <br/>
</p>

<h3>11.2 Denuncias:</h3>
<p>Presente reclamos ante autoridades locales antes de contactarnos. Plazo de respuesta: 15 días hábiles.</p>

<h2 id="12">12. Exención de responsabilidad general:</h2>

<h3>
12.1 Recopilación de datos adicionales:
</h3>

<p>Nos reservamos el derecho de recopilar otros datos no mencionados expresamente en esta política, siempre que dicha recopilación sea necesaria para garantizar el correcto funcionamiento de nuestros servicios, cumplir con obligaciones legales o regulatorias, proteger nuestros intereses legítimos, o mejorar la calidad y seguridad de nuestras operaciones. Esto puede incluir, pero no limitarse a, datos relacionados con auditorías técnicas, investigaciones de seguridad, requerimientos de autoridades competentes, o situaciones excepcionales que justifiquen la recopilación de información adicional. En tales casos, nos comprometemos a tratar estos datos con el mismo nivel de protección y confidencialidad que aplicamos a la información descrita en esta política, siempre en cumplimiento de las normativas vigentes en materia de protección de datos y privacidad.</p>

<h3>12.2 Aceptación de términos:</h3>
<p>Al contratar nuestros servicios, usted acepta de manera expresa e irrevocable los términos de esta política de privacidad en su totalidad, desde el inicio hasta el final, independientemente de que haya leído o no su contenido, o de que haya tenido conocimiento previo de su existencia. La contratación de nuestros servicios implica su consentimiento pleno y consciente para el tratamiento de sus datos personales conforme a lo establecido en esta política. Si no está de acuerdo con alguno de los términos aquí descritos, le recomendamos no utilizar nuestros servicios o contactarnos para aclarar cualquier duda antes de proceder con la contratación. Su continuidad en el uso de nuestros servicios se considerará como una aceptación tácita de esta política y sus actualizaciones futuras.</p>

        </div>
          </main>
        </div>
      </div>
    )
}
