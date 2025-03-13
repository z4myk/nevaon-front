import React from 'react';
import webhosting from '../../assets/webhosting.png'
import support from '../../assets/support.png'
import garantia from '../../assets/garantia.png'
import proteccion from '../../assets/proteccion.png'
import cpanel from '../../assets/cpanel.png'
import backup from '../../assets/backup.png'
import nvme from '../../assets/nvme.png'
import on from '../../assets/on.png'

const hostingPlans = [
    {
        name: "Basic",
        price: "$8",
        annualPrice: "$80",
        caracter1: "6 sitios a alojar",
        caracter2: "50 GB de almacenamiento",
        caracter3: "Registro de dominio gratis",
        caracter4: "Hasta 150 cuentas de correo",
        caracter5: "Soporte 24/7",
        caracter6: "CPanel",
        caracter7: "Creador de sitios",
        caracter8: "Backups",
        caracter9: "Protección anti DDoS",
        caracter10: "Certificado SSL gratis ❌",
        caracter11: "Hardware premium ❌",
        caracter12: "Soporte prioritario ❌",
        link: "https://billing.nevaon.com/index.php?rp=/store/hosting-web/hosting-web-basic"
    },
    {
        name: "Performance",
        price: "$10",
        annualPrice: "$100",
        caracter1: "20 sitios a alojar",
        caracter2: "50 GB de almacenamiento",
        caracter3: "Registro de dominio gratis",
        caracter4: "Hasta 200 cuentas de correo",
        caracter5: "Soporte 24/7",
        caracter6: "CPanel",
        caracter7: "Creador de sitios",
        caracter8: "Backups",
        caracter9: "Protección anti DDoS",
        caracter10: "Certificado SSL gratis",
        caracter11: "Soporte prioritario",
        caracter12: "Hardware premium ❌",
        link: "https://billing.nevaon.com/index.php?rp=/store/hosting-web/hosting-web-performance"
    },
    {
        name: "Performance +",
        price: "$14",
        annualPrice: "$140",
        caracter1: "40 sitios a alojar",
        caracter2: "100 GB de almacenamiento",
        caracter3: "Registro de dominio gratis",
        caracter4: "Hasta 300 cuentas de correo",
        caracter5: "Soporte 24/7",
        caracter6: "CPanel",
        caracter7: "Creador de sitios",
        caracter8: "Backups",
        caracter9: "Protección anti DDoS",
        caracter10: "Certificado SSL gratis",
        caracter11: "Soporte prioritario",
        caracter12: "Hardware premium",
        link: "https://billing.nevaon.com/index.php?rp=/store/hosting-web/hosting-web-performance-1"
    }
];

const featureIcons = {
    "Protección DDoS": proteccion,
    "Uptime 99.99%": on,
    "Soporte activo": support,
    "Almacenamiento NVMe": nvme,
    "cPanel": cpanel,
    "Backups automáticos": backup
  };

  
const features = [
    {
      icon: {proteccion}, // Puedes cambiar estos emojis por iconos de FontAwesome u otra librería
      title: "Protección DDoS",
      description: "Defiende tu sitio contra ataques masivos con tecnología especializada que detecta y bloquea ataques antes de que afecte tu servicio."
    },
    {
        icon: "⚡",
        title: "Uptime 99.99%",
      description: "Garantiza la máxima disponibilidad para tu página con el mejor estándar del mercado, minimizando cualquier tiempo de inactividad."
    },
    {
        icon: "💬",
        title: "Soporte activo",
        description: "Recibe asistencia profesional en cualquier momento, asegurando una rápida solución a cualquier inconveniente o consulta."
    },
    {
        icon: "💾",
        title: "Almacenamiento NVMe",
        description: "Todos nuestros planes cuentan con almacenamiento de tipo NVMe, asegurando una gestión de archivos ultrarrápida y eficiente."
    },
                                                            {
                                                              icon: "🖥️",
                                                              title: "cPanel",
                                                              description: "Administra tu página web de manera sencilla y profesional con una herramienta líder en el mercado."
                                                            },
    {
      icon: "📂",
      title: "Backups automáticos",
      description: "Protege la información de tu sitio con copias de seguridad programadas y automáticas."
    }
  ];


export const WebHosting = () => {
    return (
        <>
        <div className="container my-5">
            <div className="row align-items-center">
            <div className="col-md-8 col-sm-12">
      <h2 className="fw-bold text-center">Hosting Web de Alto Rendimiento</h2>

     
      <p className="d-block d-md-none">
        <a className="btn btn-primary w-100" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          Ver más
        </a>
      </p>

    
      <div className="d-none d-md-block">
        <div className=" w-100">
          
          <p>En <strong>Nevaon</strong> ofrecemos soluciones de hosting web optimizadas para garantizar el mejor rendimiento y estabilidad. Con nuestros planes obtienes:</p>
          <ul className="list-unstyled">
            <li><i className="fi fi-rr-badge-check text-success"></i> <strong>Rendimiento optimo: </strong> Experimenta tiempos de carga ultrarrápidos y una operatividad fluida que garantiza una experiencia de usuario superior.</li>
            <li><i className="fi fi-rr-badge-check text-success"></i> <strong>Gestión intuitiva:</strong> Administra tu sitio web de forma sencilla mediante un panel de control amigable y herramientas integradas.</li>
            <li><i className="fi fi-rr-badge-check text-success"></i> <strong>Correos corporativos incluidos:</strong> Gestiona y aloja diversos sitios en una única solución, facilitando la expansión de tu presencia online.</li>
            <li><i className="fi fi-rr-badge-check text-success"></i> <strong>Seguridad robusta y monitoreo Continuo:</strong> Disfruta de cuentas de correo profesional integradas para fortalecer la comunicación y la imagen de tu empresa.</li>

          </ul>
          <p className="fw-bold text-dark">Elige el plan ideal y lleva tu proyecto al siguiente nivel con nuestros hosting WEB.</p>
        </div>
      </div>

     
      <div className="collapse" id="collapseExample">
        <div className="card card-body w-100">
        
          <p>En <strong>Nevaon</strong> ofrecemos soluciones de hosting web optimizadas para garantizar el mejor rendimiento y estabilidad. Con nuestros planes obtienes:</p>
          <ul className="list-unstyled">
            <li><i className="fi fi-rr-badge-check text-success"></i> <strong>Rendimiento optimo:</strong> Experimenta tiempos de carga ultrarrápidos y una operatividad fluida que garantiza una experiencia de usuario superior.</li>
            <li><i className="fi fi-rr-badge-check text-success"></i> <strong>Gestión intuitiva:</strong> Administra tu sitio web de forma sencilla mediante un panel de control amigable y herramientas integradas.</li>
            <li><i className="fi fi-rr-badge-check text-success"></i> <strong>Correos corporativos incluidos:</strong> Gestiona y aloja diversos sitios en una única solución, facilitando la expansión de tu presencia online.</li>
            <li><i className="fi fi-rr-badge-check text-success"></i> <strong>Seguridad robusta y monitoreo Continuo:</strong> Disfruta de cuentas de correo profesional integradas para fortalecer la comunicación y la imagen de tu empresa.</li>

          </ul>
          <p className="fw-bold text-dark">Elige el plan ideal y lleva tu proyecto al siguiente nivel con nuestros hosting WEB.</p>
        </div>
      </div>
    </div>

                <div className="col-md-4 col-sm-12 text-center">
                    <img src={webhosting} alt="Web Hosting" className="w-100"/>
                </div>
            </div>
        </div>
        
        <div className="cards-container mb-5 pb-5 d-flex flex-wrap justify-content-center ">
            {hostingPlans.map((plan, index) => (
                <div className="card" key={index}>
                    <h3>{plan.name}</h3>
                    <p className="price-container">
                        <span className="price">{plan.price}</span>
                        <span className="small-price"><b>USD</b></span>
                        <span className="per-month"><b>/mes</b></span>
                    </p>
                    <p className="annual-price rounded small">{plan.annualPrice} /ANUAL</p>
                    <a href={plan.link} target="_blank" className="btn buttonSelect mb-4">Seleccionar <i class="fi fi-rr-arrow-small-right"></i></a>
                    <ul className="list-unstyled">
  {[...Array(12).keys()].map(i => (
    <li key={i} className="d-flex align-items-center letrasLi">
      <i className="fi fi-rr-badge-check text-success me-2"></i> {plan[`caracter${i+1}`]}
    </li>
  ))}
  <li className="mt-3 small text-secondary">*No incluye impuestos</li>
</ul>

                   
                </div>
            ))}
        </div>
        <div className="container text-center">
  <h2 className="font-bold mb-6">Características</h2>
  <div className="row justify-content-center">
    {features.map((item, index) => (
      <div key={index} className="col-12 col-md-4 mb-4">
        <div className="feature-card text-center p-3">
          <img src={featureIcons[item.title]} alt={item.title} className="mb-3 w-50" />
          <h5 className="text-primary">{item.title}</h5>
          <p className="small">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>

      
        </>
    );
};
