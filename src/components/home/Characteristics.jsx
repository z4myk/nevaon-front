import React from 'react'
import php from '../../assets/php.png'
import cpanel from '../../assets/cpanel.png'
import encrypt from '../../assets/encrypt.png'
import wordpress from '../../assets/wordpress.png'
import directadmin from '../../assets/directadmin.jpg'
import ssl from '../../assets/ssl.png'
import support from '../../assets/support.png'
import garantia from '../../assets/garantia.png'
import proteccion from '../../assets/proteccion.png'
export const Characteristics = () => {
    return (
        <section className="text-center mb-5 mt-5 pt-5 ">
        <h2 className="mb-5">¿Por qué elegir nuestro hosting?</h2>
        

        <div className="d-flex flex-column flex-md-row justify-content-between container ">
  <div className="feature-card text-center">
    <img src={support} className="w-50 mb-3" alt="Soporte"/>
    <h5 className="text-primary">Soporte en español</h5>
    <p className="small">Atención personalizada en tu idioma, disponible en cualquier momento.</p>
  </div>
  <div className="feature-card text-center">
    <img src={ssl} className="w-50 mb-3 logoSsl"  alt="SSL" />
    <h5 className="text-primary">SSL Incluido</h5>
    <p className="small">Protege tu sitio web con certificados de seguridad avanzados sin costo adicional.</p>
  </div>
  <div className="feature-card text-center">
    <img src={garantia} className="w-50 mb-3 logoGarantia" alt="Garantia" />
    <h5 className="text-primary">Garantía de reembolso</h5>
    <p className="small">Si no estás satisfecho con nuestros servicios, te reembolsamos tu dinero sin límite de tiempo.</p>
  </div>
  <div className="feature-card text-center">
    <img src={proteccion} className="w-50 mb-3 logoCandado" alt="Proteccion DDoS" />
    <h5 className="text-primary">Protección DDoS</h5>
    <p className="small">Protegemos tu proyecto con nuestro avanzado sistema de seguridad, el cual te garantiza un tiempo de actividad del 99.99%.</p>
  </div>
</div>


        <marquee><img src={php} className="w-25 mt-5 logos mx-5" alt="PHP"/> <img src={wordpress} className="w-25 mt-5 logos mx-5" alt="WordPress" /> <img src={cpanel} className="w-25 mt-5 logos mx-5" alt="Cpanel" /> <img src={encrypt} className="w-25 mt-5 logos mx-5" alt="Encrypt" /> <img src={directadmin} className="w-25 mt-5 logos" alt="Direct Admin"/> </marquee>
        </section>
    )
}
