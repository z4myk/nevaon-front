import React, {useEffect} from 'react'
import team from '../../assets/team.svg'
import tpv from '../../assets/tpv.png'
import inventario from '../../assets/inventario.png'
import landing from '../../assets/landing.png'
import crm from '../../assets/crm.png'
import gestion from '../../assets/gestion.png'
import reserva from '../../assets/reserva.png'
import cursos from '../../assets/cursos.png'
import tienda from '../../assets/tienda.png'
import tpv1 from '../../assets/tpv1.png'
import inventario1 from '../../assets/inventario1.png'
import landing1 from '../../assets/landing1.png'
import crm1 from '../../assets/crm1.png'
import gestion1 from '../../assets/gestion1.png'
import reserva1 from '../../assets/reserva1.png'
import cursos1 from '../../assets/cursos1.png'
import tienda1 from '../../assets/tienda1.png'
import aintechonline from '../../assets/aintechonline.png'
import chaos from '../../assets/chaos.png'
import vemox from '../../assets/vemox.png'
import goreboosting from '../../assets/goreboosting.png'
import odoo from '../../assets/odoo.png'
import zukalogo from '../../assets/zukalogo.png'
import rappi from '../../assets/rappi.webp'
import AOS from 'aos'
import 'aos/dist/aos.css'
export const MoreServices = () => {


    useEffect(() => {
        AOS.init({
          duration: 2000,
          once: true
        });
      }, []);


    return (
        <div>

<section className="p-5 parallax-section">
  <div className="row">
    <div className="col-md-7 col-sm-12 mt-5 pt-5">
      <h4 className="mb-2 text-light fuenteHeder">Software Development</h4>
      <h1 className="text-light fuenteHeder">Creamos el futuro digital de tu empresa</h1>
      <h5 className="text-light textoHeader ">
        Desarrollamos soluciones escalables, flexibles y alineadas con los objetivos de tu negocio, adaptándonos a sus necesidades presentes y futuras.
      </h5>
      <a href="https://api.whatsapp.com/send/?phone=%2B5217831243833&text&type=phone_number&app_absent=0" target="_blank" className="text-decoration-none">
<button className="shadow__btn border ">
        CONTACTANOS
</button>
        </a>
    </div>
    <div className="col-md-5 col-sm-12 mt-5">
      <img src={team} className="w-100" />
    </div>
  </div>

  <div className="d-flex justify-content-center mb-5 pt-5">
    <div className="scrolldown bgScroll">
      <div className="chevrons">
        <div className="chevrondown"></div>
        <div className="chevrondown"></div>
      </div>
    </div>
  </div>
</section>

<section className=" p-5  text-dark  bg-luz">
    <h2 className="mt-1 text-center tituloGrande">Brindamos servicios integrales para tu empresa</h2>
      
    <div className="row text-center mt-1">
        <div className="col-sm-12 col-md-6">

            <div className="w-100 mb-5 mt-5 border  p-3 shadow cajas text-light " data-aos="fade-right" >
                <h2>Asesoria digital</h2>
                <p className="p-2"><span className="textosCaja">Identificamos las fallas y conectamos los puntos entre tu negocio y tu estrategia digital</span>. Nuestro equipo experto cuenta con años de experiencia en la definición de estrategias y hojas de ruta en función de tus objetivos específicos.</p>
            </div>
            <div  className="w-100  mb-5  border  p-3 shadow cajas text-light " data-aos="fade-right">
                <h2 className="">Experiencias múltiples conectadas</h2>
                <p className=" p-2"><span className="textosCaja">Creamos experiencias unificadas para los usuarios mediante aplicaciones web y móviles, interfaces conversacionales, gemelos digitales, IoT y realidad aumentada</span>. Diseñamos arquitecturas flexibles que se ajustan y evolucionan junto con los cambios de tu organización.</p>
            </div>
        </div>
        <div className="col-sm-12 col-md-6 ">

            <div  className="w-100 mb-5 mt-5 border  text-light p-3   shadow cajas " data-aos="fade-left" >
                <h2>Transformación de ecosistemas</h2>
                <p className="  p-2"><span className="textosCaja">Acompañamos a las organizaciones en la evolución y gestión eficiente de sus aplicaciones</span>, desplegando equipos expertos en modernización y soporte de sistemas tecnológicos, mediante soluciones sólidas basadas en tecnología de última generación.</p>
            </div>
            <div  className=" w-100 mb-5 border  text-light  p-3 shadow cajas " data-aos="fade-left">
                <h2>Innovación tecnológica </h2>
                <p className="p-2"><span className="textosCaja">Desarrollamos soluciones tecnológicas a medida que impulsan la innovación dentro de tu organización.</span> Integramos herramientas avanzadas, inteligencia artificial, automatización y metodologías ágiles para crear productos y servicios digitales con alta escalabilidad.</p>
            </div>
        </div>
    </div>


   
    
</section>
<h2 className="text-center">Nuestros servicios</h2>
        <section className="container text-center pb-3  " data-aos="fade-up"
     data-aos-duration="3000">
  <div className="d-flex flex-wrap justify-content-center gap-4 my-5">
    <div className="p-3 border-primary shadow-sm card-hover-zoom  border rounded"   style={{ width: "250px" }}>
      <img src={tpv1} className="w-50 mb-3" alt="TPV" />
      <h6 className="textoHeader"><b>TPV (Terminal Punto de Venta)</b></h6>
      <p className="small card-text-hover">Sistema de ventas con integración de pagos y gestión de productos.</p>
    </div>
    <div className="p-3 border rounded border-primary shadow-sm card-hover-zoom" style={{ width: "250px" }}>
      <img src={inventario1} className="w-50 mb-3" alt="Inventario" />
      <h6 className="textoHeader"><b>Sistemas de Inventario</b></h6>
      <p className="small card-text-hover">Control y administración de stock, alertas de bajo inventario, reportes de movimientos.</p>
    </div>
    <div className="p-3 border rounded border-primary shadow-sm card-hover-zoom" style={{ width: "250px" }}>
      <img src={landing1} className="w-50 mb-3" alt="Landing Page" />
      <h6 className="textoHeader"><b>Landing Pages</b></h6>
      <p className="small card-text-hover">Diseño web optimizado para conversión con formularios y análisis de datos.</p>
    </div>
    <div className="p-3 border rounded border-primary shadow-sm card-hover-zoom" style={{ width: "250px" }}>
      <img src={crm1} className="w-50 mb-3" alt="CRM" />
      <h6 className="textoHeader"><b>CRM (Customer Relationship Management)</b></h6>
      <p className="small card-text-hover">Gestión de clientes, seguimiento de interacciones y automatización de procesos.</p>
    </div>
    <div className="p-3 border rounded border-primary shadow-sm card-hover-zoom" style={{ width: "250px" }}>
      <img src={gestion1} className="w-50 mb-3" alt="Gestión" />
      <h6 className="textoHeader"><b>Sistemas de Gestión</b></h6>
      <p className="small card-text-hover">Soluciones personalizadas para la administración interna de empresas.</p>
    </div>
    <div className="p-3 border rounded border-primary shadow-sm card-hover-zoom" style={{ width: "250px" }}>
      <img src={reserva1} className="w-50 mb-3" alt="Reserva" />
      <h6 className="textoHeader"><b>Sistemas de Reserva</b></h6>
      <p className="small card-text-hover ">Plataformas para agendamiento de citas, reservas y pagos en línea.</p>
    </div>
    <div className="p-3 border rounded border-primary shadow-sm card-hover-zoom" style={{ width: "250px" }}>
      <img src={cursos1} className="w-50 mb-3" alt="Cursos" />
      <h6 className="textoHeader"><b>Plataforma de Cursos</b></h6>
      <p className="small card-text-hover">LMS (Learning Management System) con videos, pruebas y certificados.</p>
    </div>
    <div className="p-3 border rounded border-primary shadow-sm card-hover-zoom" style={{ width: "250px" }}>
      <img src={tienda1} className="w-50 mb-3" alt="E-commerce" />
      <h6 className="textoHeader"><b>E-commerce</b></h6>
      <p className="small card-text-hover">Tienda en línea con catálogo de productos, carrito de compras y pagos en línea.</p>
    </div>
  </div>
</section>

<section className="bgVentajas pt-5 pb-5" data-aos="fade-up"
     data-aos-duration="3000">
      <h2 className="text-center mb-5">Ventajas competitivas</h2>
      <div className="d-flex justify-content-center container boxMobile gap-5">
        <div>
          <h5>Soporte constante</h5>
          <p className="p-1">Brindamos mantenimiento y soporte continuo post-lanzamiento para asegurar que tu software esté siempre actualizado, funcional y alineado a tus objetivos. Nuestro equipo está disponible para resolver problemas, aplicar mejoras técnicas y asegurar el éxito y estabilidad a largo plazo.</p>
        </div>
        <div>
          <h5>Entrega rápida</h5>
          <p className="p-1">Trabajamos con metodologías ágiles para garantizar entregas veloces y eficientes, sin comprometer la calidad del producto ni la experiencia del usuario final. Nuestro enfoque permite validar ideas rápidamente, acelerar procesos y reducir el tiempo de salida al mercado de forma segura.</p>
        </div>
        <div>
          <h5>Código escalable</h5>
          <p className="p-1">Desarrollamos con estructuras limpias, ordenadas y escalables, listas para crecer contigo y facilitar la evolución constante del software. Utilizamos un enfoque modular que permite mantener o modificar cualquier componente con mayor facilidad, reduciendo costos y tiempos de desarrollo futuro.</p>
        </div>
     
      </div>
    </section>


<section className="text-center  backgrServices text-light">
        <h2 className=" pt-5">Empresas que ya confían en nosotros</h2>
       
        <div className="d-flex justify-content-center mb-5 pt-5 ">

<div class="scrolldown bgScroll " >
<div class="chevrons">
<div class="chevrondown"></div>
<div class="chevrondown"></div>
</div>
</div>
</div>


<div className="mb-5">
  <marquee className="d-flex flex-wrap justify-content-between gap-5 text-center ">
    
    <img src={vemox} className="logoCliente mx-5" alt="Vemox" />

  
    

    <img src={odoo} className="logoCliente mx-5" alt="Odoo" />
 
  

    <img src={chaos} className="logoCliente mx-5 " alt="femsa" />
     
    <img src={zukalogo} className="logoCliente mx-5" alt="Zuka" />



    <img src={aintechonline} className="logoCliente mx-5 " alt="Aintech" />
      
    <img src={goreboosting} className="logoCliente mx-5 " alt="Gore Boosting" />
     
    <img src={rappi} className="logoCliente mx-5" alt="Rappi" />
      
  </marquee>
</div>

        <div className="pb-5">
            
         
            <h3 className="textoHeader">¿Tiene una idea en mente o quiere llevar su negocio al próximo nivel?</h3>
            <p><b>Nosotros le ayudamos a hacerlo realidad.</b></p>
            
    <a href="https://api.whatsapp.com/send/?phone=%2B5217831243833&text&type=phone_number&app_absent=0" target="_blank" className="text-decoration-none">
<button className="shadow__btn border">
        CONTACTANOS
</button>
        </a>
        </div>

</section>
        </div>
    )
}
