import React from 'react'
import team from '../../assets/team.svg'
import tpv from '../../assets/tpv.png'
import inventario from '../../assets/inventario.png'
import landing from '../../assets/landing.png'
import crm from '../../assets/crm.png'
import gestion from '../../assets/gestion.png'
import reserva from '../../assets/reserva.png'
import cursos from '../../assets/cursos.png'
import tienda from '../../assets/tienda.png'
import aintechonline from '../../assets/aintechonline.png'
import chaos from '../../assets/chaos.png'
import vemox from '../../assets/vemox.png'
import goreboosting from '../../assets/goreboosting.png'
import odoo from '../../assets/odoo.png'
import zukalogo from '../../assets/zukalogo.png'
import rappi from '../../assets/rappi.webp'
export const MoreServices = () => {
    return (
        <div>

        <section className="p-5 bg-primary">
            <div className="row">
                    <h1 className="text-center mb-2 text-light">Catálogo de Servicios de Desarrollo de Software</h1>
                <div className="col-md-7 col-sm-12 mt-5">
                    <h4 className="text-light">Ofrecemos soluciones tecnológicas personalizadas para negocios de todos los tamaños. A continuación, presentamos nuestros principales servicios. </h4>
                </div>
                <div className="col-md-5 col-sm-12 mt-5">
                <img src={team} className="w-100" />
                </div>
 
                
            </div>
            <div className="d-flex justify-content-center mb-5 pt-5 ">

<div class="scrolldown bgScroll " >
<div class="chevrons">
<div class="chevrondown"></div>
<div class="chevrondown"></div>
</div>
</div>
</div>
        </section>

        <section className="container text-center">
  <div className="d-flex flex-wrap justify-content-center gap-4 my-5">
    <div className="p-3 border rounded border-primary shadow-sm card-hover-zoom" style={{ width: "250px" }}>
      <img src={tpv} className="w-50 mb-3" alt="TPV" />
      <h6><b>TPV (Terminal Punto de Venta)</b></h6>
      <p className="small">Sistema de ventas con integración de pagos y gestión de productos.</p>
    </div>
    <div className="p-3 border rounded border-primary shadow-sm card-hover-zoom" style={{ width: "250px" }}>
      <img src={inventario} className="w-50 mb-3" alt="Inventario" />
      <h6><b>Sistemas de Inventario</b></h6>
      <p className="small">Control y administración de stock, alertas de bajo inventario, reportes de movimientos.</p>
    </div>
    <div className="p-3 border rounded border-primary shadow-sm card-hover-zoom" style={{ width: "250px" }}>
      <img src={landing} className="w-50 mb-3" alt="Landing Page" />
      <h6><b>Landing Pages</b></h6>
      <p className="small">Diseño web optimizado para conversión con formularios y análisis de datos.</p>
    </div>
    <div className="p-3 border rounded border-primary shadow-sm card-hover-zoom" style={{ width: "250px" }}>
      <img src={crm} className="w-50 mb-3" alt="CRM" />
      <h6><b>CRM (Customer Relationship Management)</b></h6>
      <p className="small">Gestión de clientes, seguimiento de interacciones y automatización de procesos.</p>
    </div>
    <div className="p-3 border rounded border-primary shadow-sm card-hover-zoom" style={{ width: "250px" }}>
      <img src={gestion} className="w-50 mb-3" alt="Gestión" />
      <h6><b>Sistemas de Gestión</b></h6>
      <p className="small">Soluciones personalizadas para la administración interna de empresas.</p>
    </div>
    <div className="p-3 border rounded border-primary shadow-sm card-hover-zoom" style={{ width: "250px" }}>
      <img src={reserva} className="w-50 mb-3" alt="Reserva" />
      <h6><b>Sistemas de Reserva</b></h6>
      <p className="small">Plataformas para agendamiento de citas, reservas y pagos en línea.</p>
    </div>
    <div className="p-3 border rounded border-primary shadow-sm card-hover-zoom" style={{ width: "250px" }}>
      <img src={cursos} className="w-50 mb-3" alt="Cursos" />
      <h6><b>Plataforma de Cursos</b></h6>
      <p className="small">LMS (Learning Management System) con videos, pruebas y certificados.</p>
    </div>
    <div className="p-3 border rounded border-primary shadow-sm card-hover-zoom" style={{ width: "250px" }}>
      <img src={tienda} className="w-50 mb-3" alt="E-commerce" />
      <h6><b>E-commerce</b></h6>
      <p className="small">Tienda en línea con catálogo de productos, carrito de compras y pagos en línea.</p>
    </div>
  </div>
</section>




<section className="mt-5 text-center bg-primary  text-light">
        <h3 className=" pt-5">Empresas que ya confían en nosotros</h3>
       
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
 
  

    <img src={chaos} className="logoCliente mx-5 " alt="Chaos" />
     
    <img src={zukalogo} className="logoCliente mx-5" alt="Zuka" />



    <img src={aintechonline} className="logoCliente mx-5 " alt="Aintech" />
      
    <img src={goreboosting} className="logoCliente mx-5 " alt="Gore Boosting" />
     
    <img src={rappi} className="logoCliente mx-5" alt="Rappi" />
      
  </marquee>
</div>

        <div className="pb-5">
            
         
            <h3>¿Tenés una idea en mente o querés llevar tu negocio al próximo nivel?</h3>
            <p><b>Nosotros te ayudamos a hacerlo realidad.</b></p>
            
<button className="shadow__btn border">
    CONTACTANOS
</button>
        </div>

</section>
        </div>
    )
}
