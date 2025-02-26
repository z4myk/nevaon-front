import React, { useState } from "react";
import vpss from '../../assets/vpss.png'

import { CharactersComponent } from "./CharactersComponent";
const vps_basic = [
  { nombre: "CLOUD VPS 1 BASIC", vCPU: 4, RAM: "4 GB DDR5", almacenamiento: "50 GB NVMe", bandwidth: "1 Gbps", trafico: "32 GB", DDoS_protection: true, link: "https://billing.nevaon.com/index.php?rp=/store/vps/vps-1-basic", precio_mensual: 10, precio_anual: 100 },
  { nombre: "CLOUD VPS 2 BASIC", vCPU: 8, RAM: "8 GB DDR5", almacenamiento: "200 GB NVMe", bandwidth: "1 Gbps", trafico: "32 GB", DDoS_protection: true, link: "https://billing.nevaon.com/index.php?rp=/store/vps/vps-2-basic", precio_mensual: 20, precio_anual: 200 },
  { nombre: "CLOUD VPS 3 BASIC", vCPU: 16, RAM: "16 GB DDR5", almacenamiento: "300 GB NVMe", bandwidth: "1 Gbps", trafico: "32 GB", DDoS_protection: true, link: "https://billing.nevaon.com/index.php?rp=/store/vps/vps-3-basic", precio_mensual: 54, precio_anual: 540 }
];

const vps_performance = [
  { nombre: "CLOUD VPS 1 PERFORMANCE", vCPU: 4, RAM: "4 GB DDR5", almacenamiento: "50 GB NVMe", bandwidth: "1 Gbps", trafico: "32 GB", DDoS_protection: true, link: "https://billing.nevaon.com/index.php?rp=/store/vps-performance/vps-1-performance", precio_mensual: 16, precio_anual: 160 },
  { nombre: "CLOUD VPS 2 PERFORMANCE", vCPU: 8, RAM: "8 GB DDR5", almacenamiento: "200 GB NVMe", bandwidth: "1 Gbps", trafico: "32 GB", DDoS_protection: true, link: "https://billing.nevaon.com/index.php?rp=/store/vps-performance/vps-2-performance", precio_mensual: 30, precio_anual: 300 },
  { nombre: "CLOUD VPS 3 PERFORMANCE", vCPU: 16, RAM: "16 GB DDR5", almacenamiento: "300 GB NVMe", bandwidth: "1 Gbps", trafico: "32 GB", DDoS_protection: true, link: "https://billing.nevaon.com/index.php?rp=/store/vps-performance/vps-3-performance", precio_mensual: 72, precio_anual: 720 }
];

const vps_performance_plus = [
  { nombre: "CLOUD VPS 1 PERFORMANCE +", vCPU: 4, RAM: "4 GB DDR5", almacenamiento: "100 GB NVMe", bandwidth: "1 Gbps", trafico: "32 GB", DDoS_protection: true, link: "https://billing.nevaon.com/index.php?rp=/store/vps-performance-plus/vps-1-performance-1", precio_mensual: 34, precio_anual: 340 },
  { nombre: "CLOUD VPS 2 PERFORMANCE +", vCPU: 8, RAM: "8 GB DDR5", almacenamiento: "200 GB NVMe", bandwidth: "1 Gbps", trafico: "32 GB", DDoS_protection: true, link: "https://billing.nevaon.com/index.php?rp=/store/vps-performance-plus/vps-2-performance-1", precio_mensual: 82, precio_anual: 820 },
  { nombre: "CLOUD VPS 3 PERFORMANCE +", vCPU: 16, RAM: "16 GB DDR5", almacenamiento: "300 GB NVMe", bandwidth: "1 Gbps", trafico: "32 GB", DDoS_protection: true, link: "https://billing.nevaon.com/index.php?rp=/store/vps-performance-plus/vps-3-performance-2", precio_mensual: 170, precio_anual: 1700 }
];

const categories = [
  { name: "CLOUD VPS BASIC", plans: vps_basic },
  { name: "CLOUD VPS PERFORMANCE", plans: vps_performance },
  { name: "CLOUD VPS PERFORMANCE +", plans: vps_performance_plus }
];



export const Vps = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <>
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-8 col-sm-12">
            <h2 className="fw-bold">Servidores VPS de Alto Rendimiento</h2>
            <p className="text-primary fs-5">🚀 Potencia, Seguridad y Flexibilidad para tus proyectos</p>
            <p>En <strong>Nevaon</strong> ofrecemos servidores VPS diseñados para garantizar el mejor rendimiento y estabilidad. Con nuestros planes obtienes:</p>
            <ul className="list-unstyled">
              <li><i className="fi fi-rr-badge-check text-success"></i> <strong>Almacenamiento NVMe ultrarrápido</strong> para máxima velocidad</li>
              <li><i className="fi fi-rr-badge-check text-success"></i> <strong>Conectividad de 1 Gbps</strong> para una experiencia sin interrupciones</li>
              <li><i className="fi fi-rr-badge-check text-success"></i> <strong>Protección DDoS</strong> incluida en todos los planes</li>
              <li><i className="fi fi-rr-badge-check text-success"></i> <strong>Infraestructura escalable</strong> para cualquier necesidad</li>
              <li><i className="fi fi-rr-badge-check text-success"></i> <strong>Rendimiento optimizado</strong> con procesadores de última generación</li>
            </ul>
            <p className="fw-bold text-dark">⚡ Elige el plan ideal y lleva tu proyecto al siguiente nivel con nuestros servidores VPS.</p>
          </div>
          <div className="col-sm-12 col-md-4">
            <img src={vpss} className="w-100  img-cortada"/>
          </div>
        </div>
      </div>
      
      <div className="d-flex justify-content-center mb-4 flex-wrap border p-3 container rounded container-category shadow-lg   ">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`btn mx-2${selectedCategory === index ? "btn-primary border textSelected" : "btn-outline-primary"}`}
            onClick={() => setSelectedCategory(index)}
          >
            <b>{category.name}</b>
          </button>
        ))}
      </div>

      <div className="container d-flex flex-wrap justify-content-center mb-5">
        {categories[selectedCategory].plans.map((plan, index) => (
          <div className="card m-3 p-3 shadow " style={{ width: "18rem" }} key={index}>
            <h3>{plan.nombre}</h3>
            <p className="price-container">
              <span className="price">${plan.precio_mensual}</span>
              <span className="small-price"><b>00USD</b></span>
              <span className="per-month"><b>/mes</b></span>
            </p>
            <p className="annual-price small">${plan.precio_anual} /ANUAL</p>
                <a href={plan.link} target="_blank" className="btn btn-primary mb-4 buttonSelect ">Seleccionar <i class="fi fi-rr-arrow-small-right"></i></a>
            <ul >
              <li className=" parrafo"><i className="fi fi-rr-badge-check text-success "></i> {plan.vCPU} vCPU</li>
              <li className=" parrafo"><i className="fi fi-rr-badge-check text-success"></i> {plan.RAM} RAM</li>
              <li className=" parrafo"><i className="fi fi-rr-badge-check text-success"></i> {plan.almacenamiento} NVMe</li>
              <li className=" parrafo"><i className="fi fi-rr-badge-check text-success"></i> {plan.bandwidth} de conexión</li>
              <li className=" parrafo"><i className="fi fi-rr-badge-check text-success"></i> {plan.trafico} de tráfico mensual</li>
              {plan.DDoS_protection && (
                <li className=" parrafo"><i className="fi fi-rr-badge-check text-success"></i> Protección DDoS incluida</li>
              )}
            </ul>
          </div>
        ))}
      </div>

  
      <CharactersComponent />
    </>
  );
};
