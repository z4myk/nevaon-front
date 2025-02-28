import React from 'react';
// import maquinavirtual from '../../assets/maquinavirtual.webp'
import webhost from '../../assets/webhost.webp'
import cloud from '../../assets/cloud.png'
import nube from '../../assets/nube.jpg'
export const Information = () => {
    return (
        <section className="information-section py-5">
        <div className="container">
            <h2 className="text-center text-dark mb-3">Todo lo que necesitas saber sobre Tecnología en la Nube</h2>
            <div className="text-center mb-3">
                <img src={cloud} className="imagenNube" />
            </div>
    
            {/* Escritorio Virtual */}
            <div className="row align-items-center mb-5">
                <div className="col-md-6 text-center">
                    <img src={nube} alt="Escritorio Virtual" className="img-fluid rounded shadow-sm w-75" />
                </div>
                <div className="col-md-6">
                    <h3 className="text-primary mt-3">¿Qué es un Escritorio Virtual?</h3>
                    <p className="text-muted">
                        Un entorno de trabajo accesible desde cualquier dispositivo con internet. Brinda seguridad, flexibilidad y alto rendimiento sin depender de hardware físico.
                    </p>
                    <h4 className="text-secondary mt-3">Beneficios:</h4>
                    <ul className="mt-3">
                        <li><strong>Acceso remoto:</strong> Trabaja desde cualquier lugar.</li>
                        <li><strong>Seguridad:</strong> Protege tus datos en la nube.</li>
                        <li><strong>Colaboración:</strong> Facilita el trabajo en equipo.</li>
                        <li><strong>Escalabilidad:</strong> Adapta los recursos según tus necesidades.</li>
                    </ul>
                    
                </div>
            </div>
    
            {/* Hosting Web */}
            <div className="row align-items-center">
                <div className="col-md-6 order-md-2">
                    <img src={webhost} alt="Hosting Web" className="img-fluid rounded shadow-sm" />
                </div>
                <div className="col-md-6 order-md-1">
                    <h3 className="text-primary mt-3">¿Qué es un Hosting Web?</h3>
                    <p className="text-muted">
                        Es el servicio que permite almacenar y publicar tu sitio web en internet, asegurando estabilidad, rendimiento y seguridad.
                    </p>
                    <h4 className="text-secondary mt-3">Beneficios:</h4>
                    <ul className="mt-3">
                        <li><strong>Disponibilidad 24/7:</strong> Accesible en todo momento.</li>
                        <li><strong>Velocidad y rendimiento:</strong> Optimiza tiempos de carga.</li>
                        <li><strong>Seguridad avanzada:</strong> Protección de datos con firewalls y copias de seguridad.</li>
                        <li><strong>Escalabilidad:</strong> Desde pequeños blogs hasta grandes ecommerces.</li>
                    </ul>
                    
                </div>
            </div>
        </div>
    </section>
    
    );
};
