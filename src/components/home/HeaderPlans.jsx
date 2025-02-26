import React from 'react';
import google from '../../assets/google.svg';
import stars from '../../assets/stars.svg';


export const HeaderPlans = () => {
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
        link: "#"
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
        link: "#"
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
        link: "#"
    }
];

  return (
    <section>
      <div className="container text-center">
        <h2 className="mt-5 text-center">Confianza y calidad en cada solución</h2>
        <hr />
        <p>
          En Nevaon, nuestro servicio premium es sinónimo de excelencia, respaldado por la <b>confianza</b> y <b>satisfacción</b> de nuestros clientes.
        </p>
      </div>
      <div className="text-center mt-5">
        <img src={google} className="w-25" alt="Google logo" /> <br />
        <div className="d-flex justify-content-center mt-2">
        <span className="text-secondary textGoogle"  ><b><u>Valorados con 4.4</u></b></span>
        <img src={stars} className="estrellas" alt="Google logo " />
        </div>
        
      </div>

        <h2 className="text-center mt-5">Conoce las mejores soluciones para tu proyecto online</h2>
      <div className="cards-container mb-5 pb-5">
            {hostingPlans.map((plan, index) => (
                <div className="card" key={index}>
                    <h3>{plan.name}</h3>
                    <p className="price-container">
                        <span className="price">{plan.price}</span>
                        <span className="small-price"><b>00USD</b></span>
                        <span className="per-month"><b>/mes</b></span>
                    </p>
                    <p className="annual-price  small">{plan.annualPrice} /ANUAL</p>
                    <a href={plan.link} className="btn buttonSelect mb-4">Seleccionar <i class="fi fi-rr-arrow-small-right"></i></a>
                    <ul>
                        {[...Array(12).keys()].map(i => (
                            <li key={i} className="parrafo"><i className="fi fi-rr-badge-check text-success"></i> {plan[`caracter${i+1}`]}</li>
                        ))}
                    </ul>
                   
                </div>
            ))}
        </div>
    </section>
  );
};
