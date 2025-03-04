import React from 'react'
import vps from '../../assets/vps.png'
import { CharactersComponent } from './CharactersComponent';
const escritoriosPlans = [
    {
      "nombre": "Basic",
      "vCPU": 4,
      "RAM": "4 GB DDR5",
      "almacenamiento": "100 GB NVMe",
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
      "almacenamiento": "150 GB NVMe",
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
      "almacenamiento": "200 GB NVMe",
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
                        <h2 className="fw-bold">Escritorios Virtuales de Alto Rendimiento</h2>
                        <p className="text-primary fs-5">💻 Potencia, Seguridad y Flexibilidad para tu trabajo remoto</p>
                        <p>En <strong>Nevaon</strong> ofrecemos soluciones de escritorios virtuales optimizados para garantizar el mejor rendimiento y estabilidad. Con nuestros planes obtienes:</p>
                        <ul className="list-unstyled">
                            <li><i className="fi fi-rr-badge-check text-success"></i> <strong>Acceso remoto seguro</strong> desde cualquier dispositivo</li>
                            <li><i className="fi fi-rr-badge-check text-success"></i> <strong>Almacenamiento NVMe ultrarrápido</strong> para máxima velocidad</li>
                            <li><i className="fi fi-rr-badge-check text-success"></i> <strong>Conectividad de 1 Gbps</strong> para una experiencia sin interrupciones</li>
                            <li><i className="fi fi-rr-badge-check text-success"></i> <strong>Soporte para múltiples usuarios</strong> según el plan elegido</li>
                            <li><i className="fi fi-rr-badge-check text-success"></i> <strong>Infraestructura segura y escalable</strong> para cualquier tipo de empresa</li>
                        </ul>
                        <p className="fw-bold text-dark">🚀 Elige el plan ideal y mejora tu productividad con un escritorio virtual a la medida.</p>
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
                            <span className="small-price"><b>00USD</b></span>
                            <span className="per-month"><b>/mes</b></span>
                        </p>
                        <p className="annual-price small">${plan.precio_anual} /ANUAL</p>
                        <a href={plan.link} target="_blank" className="btn buttonSelect mb-4 ">Seleccionar <i class="fi fi-rr-arrow-small-right"></i></a>
                        <ul>
                            <li className="parrafo"><i className="fi fi-rr-badge-check text-success"></i> {plan.vCPU} vCPU</li>
                            <li className="parrafo"><i className="fi fi-rr-badge-check text-success"></i> {plan.RAM} RAM</li>
                            <li className="parrafo"><i className="fi fi-rr-badge-check text-success"></i> {plan.almacenamiento} de almacenamiento NVMe</li>
                            <li className="parrafo"><i className="fi fi-rr-badge-check text-success"></i> {plan.bandwidth} de conexión</li>
                            <li className="parrafo"><i className="fi fi-rr-badge-check text-success"></i> {plan.trafico} de tráfico mensual</li>
                            <li className="parrafo"><i className="fi fi-rr-badge-check text-success"></i> Hasta {plan.limite_usuarios} usuarios</li>
                            {plan.DDoS_protection && (
                                <li className="parrafo"><i className="fi fi-rr-badge-check text-success"></i> Protección DDoS incluida</li>
                            )}
                            <li className=" mt-3 small text-secondary parrafo">*No incluye impuestos</li>
                        </ul>
                       
                    </div>
                ))}
            </div>

            <CharactersComponent />
        </>
    );
                            }
