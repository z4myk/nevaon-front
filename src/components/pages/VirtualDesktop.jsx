import React from 'react'
import vps from '../../assets/vps.png'
import { CharactersComponent } from './CharactersComponent';
const escritoriosPlans = [
    {
      "nombre": "Basic",
      "vCPU": 4,
      "RAM": "4 GB DDR5",
      "almacenamiento": "100 GB",
      "bandwidth": "1 Gbps",
      "trafico": "32 GB",
      "limite_usuarios": 3,
      "link": "https://billing.nevaon.com/index.php?rp=/store/windows-virtual-desk/basic",
      "precio_mensual": 13,
      "precio_anual": 130
    },
    {
      "nombre": "Performance",
      "vCPU": 4,
      "RAM": "8 GB DDR5",
      "almacenamiento": "150 GB ",
      "bandwidth": "1 Gbps",
      "trafico": "32 GB",
      "limite_usuarios": 6,
      "link": "https://billing.nevaon.com/index.php?rp=/store/windows-virtual-desk/performance-remote-desktop",
      "precio_mensual": 19,
      "precio_anual": 190
    },
    {
      "nombre": "Performance +",
      "vCPU": 8,
      "RAM": "16 GB DDR5",
      "almacenamiento": "200 GB ",
      "bandwidth": "1 Gbps",
      "trafico": "32 GB",
      "DDoS_protection": true,
      "limite_usuarios": 10,
      "link": "https://billing.nevaon.com/index.php?rp=/store/windows-virtual-desk/performance-remote-desktop-1",
      "precio_mensual": 35,
      "precio_anual": 350
    }
  ]

export const VirtualDesktop = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row align-items-center">
                <div className="col-md-8 col-sm-12">
      <h1 className="fw-bold text-center">Escritorios Virtuales de Alto Rendimiento</h1>

     
      <p className="d-block d-md-none">
        <a className="btn btn-primary w-100" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          Ver más 
        </a>
      </p>

    
      <div className="d-none d-md-block">
        <div className=" w-100">
          
          <p>En <strong>Nevaon</strong> ofrecemos soluciones de escritorios virtuales optimizados para garantizar el mejor rendimiento y estabilidad. Con nuestros planes obtienes:</p>
          <ul className="list-unstyled">
            <li><i className="fi fi-rr-badge-check text-success"></i> <strong>Configuración personalizada: </strong>Adapta y optimiza el entorno virtual según las necesidades específicas de tu negocio.
</li>
            <li><i className="fi fi-rr-badge-check text-success"></i> <strong>Licencias compartidas:</strong> Permite el acceso simultáneo a múltiples usuarios sin incurrir en gastos adicionales por licencias innecesarias.</li>
            <li><i className="fi fi-rr-badge-check text-success"></i> <strong>Soporte multiusuario escalable:</strong> Gestiona usuarios de acuerdo con el plan contratado, asegurando eficiencia y adaptabilidad.</li>
            <li><i className="fi fi-rr-badge-check text-success"></i> <strong>Integración de software de terceros: </strong> Instala y utiliza aplicaciones y herramientas adicionales, replicando la experiencia de uso de un PC personal.
</li>

          </ul>
          <p className="fw-bold text-dark">Elige el plan ideal y mejora tu productividad con un escritorio virtual a la medida.</p>
        </div>
      </div>

     
      <div className="collapse" id="collapseExample">
        <div className="card card-body w-100">
       
          <p>En <strong>Nevaon</strong> ofrecemos soluciones de escritorios virtuales optimizados para garantizar el mejor rendimiento y estabilidad. Con nuestros planes obtienes:</p>
          <ul className="list-unstyled">
            <li><i className="fi fi-rr-badge-check text-success"></i> <strong>Configuración personalizada: </strong>Adapta y optimiza el entorno virtual según las necesidades específicas de tu negocio.
</li>
            <li><i className="fi fi-rr-badge-check text-success"></i> <strong>Licencias compartidas:</strong> Permite el acceso simultáneo a múltiples usuarios sin incurrir en gastos adicionales por licencias innecesarias.</li>
            <li><i className="fi fi-rr-badge-check text-success"></i> <strong>Soporte multiusuario escalable:</strong> Gestiona usuarios de acuerdo con el plan contratado, asegurando eficiencia y adaptabilidad.</li>
            <li><i className="fi fi-rr-badge-check text-success"></i> <strong>Integración de software de terceros: </strong> Instala y utiliza aplicaciones y herramientas adicionales, replicando la experiencia de uso de un PC personal.
</li>

          </ul>
          <p className="fw-bold text-dark">Elige el plan ideal y mejora tu productividad con un escritorio virtual a la medida.</p>
        </div>
      </div>
    </div>
                    <div className="col-md-4 col-sm-12 text-center">
                        <img src={vps} alt="Escritorios Virtuales" className="w-100"/>
                    </div>
                </div>
            </div>
    
            <div className="cards-container mb-5 pb-5 d-flex flex-wrap justify-content-center">
                {escritoriosPlans.map((plan, index) => (
                    <div className="card" key={index}>
                        <h3>{plan.nombre}</h3>
                        <p className="price-container">
                            <span className="price">${plan.precio_mensual}</span>
                            <span className="small-price"><b>USD</b></span>
                            <span className="per-month"><b>/mes</b></span>
                        </p>
                        <p className="annual-price small">${plan.precio_anual} /ANUAL</p>
                        <a href={plan.link} target="_blank" className="btn buttonSelect mb-4 ">Seleccionar <i class="fi fi-rr-arrow-small-right"></i></a>
                        <ul className="list-unstyled">
  <li className="d-flex align-items-center letrasLi">
    <i className="fi fi-rr-badge-check text-success"></i> {plan.vCPU} vCPU
  </li>
  <li className="d-flex align-items-center letrasLi">
    <i className="fi fi-rr-badge-check text-success"></i> {plan.RAM} RAM
  </li>
  <li className="d-flex align-items-center letrasLi">
    <i className="fi fi-rr-badge-check text-success"></i> {plan.almacenamiento} de almacenamiento NVMe
  </li>
  <li className="d-flex align-items-center letrasLi">
    <i className="fi fi-rr-badge-check text-success"></i> {plan.bandwidth} de conexión
  </li>
  <li className="d-flex align-items-center letrasLi">
    <i className="fi fi-rr-badge-check text-success"></i> {plan.trafico} de tráfico mensual
  </li>
  <li className="d-flex align-items-center letrasLi">
    <i className="fi fi-rr-badge-check text-success"></i> Hasta {plan.limite_usuarios} usuarios
  </li>
  {plan.DDoS_protection && (
    <li className="d-flex align-items-center ">
      <i className="fi fi-rr-badge-check text-success"></i> Protección DDoS incluida
    </li>
  )}
  <li className="mt-3 small text-secondary">*No incluye impuestos</li>
</ul>

                       
                    </div>
                ))}
            </div>

            <CharactersComponent />
        </>
    );
                            }
