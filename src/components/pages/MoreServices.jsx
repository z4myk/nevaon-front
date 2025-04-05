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
export const MoreServices = () => {
    return (
        <div>

        <section className="p-5 bg-primary">
            <div className="row">
                    <h1 className="text-center mb-2 text-light">Catálogo de Servicios de Desarrollo de Software</h1>
                <div className="col-md-7 col-sm-12 mt-5 text-center">
                    <h5 className="text-light">Con un equipo experimentado en desarrollo y diseño web, ayudamos a emprendedores, pymes y grandes empresas a dar el salto digital que necesitan. Nos enfocamos en crear soluciones efectivas, escalables y adaptadas a cada cliente. Conocé nuestros principales servicios</h5>
                </div>
                <div className="col-md-5 col-sm-12 mt-5">
                <img src={team} className="w-100" />
                </div>

                
            </div>

        </section>

        <section className="container text-center">
  <div className="d-flex flex-wrap justify-content-center gap-4 my-5">
    <div className="p-3 border rounded border-primary shadow-sm" style={{ width: "250px" }}>
      <img src={tpv} className="w-100 mb-3" alt="TPV" />
      <h6><b>TPV (Terminal Punto de Venta)</b></h6>
      <p className="small">Sistema de ventas con integración de pagos y gestión de productos.</p>
    </div>
    <div className="p-3 border rounded border-primary shadow-sm" style={{ width: "250px" }}>
      <img src={inventario} className="w-100 mb-3" alt="Inventario" />
      <h6><b>Sistemas de Inventario</b></h6>
      <p className="small">Control y administración de stock, alertas de bajo inventario, reportes de movimientos.</p>
    </div>
    <div className="p-3 border rounded border-primary  shadow-sm" style={{ width: "250px" }}>
      <img src={landing} className="w-100 mb-3" alt="Landing Page" />
      <h6><b>Landing Pages</b></h6>
      <p className="small">Diseño web optimizado para conversión con formularios y análisis de datos.</p>
    </div>
    <div className="p-3 border rounded border-primary shadow-sm" style={{ width: "250px" }}>
      <img src={crm} className="w-100 mb-3" alt="CRM" />
      <h6><b>CRM (Customer Relationship Management)</b></h6>
      <p className="small">Gestión de clientes, seguimiento de interacciones y automatización de procesos.</p>
    </div>
    <div className="p-3 border rounded border-primary shadow-sm" style={{ width: "250px" }}>
      <img src={gestion} className="w-100 mb-3" alt="Gestión" />
      <h6><b>Sistemas de Gestión</b></h6>
      <p className="small">Soluciones personalizadas para la administración interna de empresas.</p>
    </div>
    <div className="p-3 border rounded border-primary shadow-sm" style={{ width: "250px" }}>
      <img src={reserva} className="w-100 mb-3" alt="Reserva" />
      <h6><b>Sistemas de Reserva</b></h6>
      <p className="small">Plataformas para agendamiento de citas, reservas y pagos en línea.</p>
    </div>
    <div className="p-3 border rounded border-primary shadow-sm" style={{ width: "250px" }}>
      <img src={cursos} className="w-100 mb-3" alt="Cursos" />
      <h6><b>Plataforma de Cursos</b></h6>
      <p className="small">LMS (Learning Management System) con videos, pruebas y certificados.</p>
    </div>
    <div className="p-3 border rounded border-primary shadow-sm" style={{ width: "250px" }}>
      <img src={tienda} className="w-100 mb-3" alt="E-commerce" />
      <h6><b>E-commerce</b></h6>
      <p className="small">Tienda en línea con catálogo de productos, carrito de compras y pagos en línea.</p>
    </div>
  </div>
</section>

        </div>
    )
}
