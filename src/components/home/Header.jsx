import React from "react";

import escritoriosvirtuales from '../../assets/escritoriosvirtuales.webp'
import wwebhosting from '../../assets/wwebhosting.webp'
import dominio from '../../assets/dominio.jpg'
import reseller from '../../assets/reseller.webp'

import {Link} from 'react-router-dom'
export const Header = () => {
  return (
    <header className=" ">
       
      <div >
        <div
          id="carouselExampleIndicators"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active d-item">
              <img src={escritoriosvirtuales} class="imagenCarousel " alt="..." />
              <div className="carousel-caption top-0  pt-5  pb-5 ">
                <div className="row contenidoCarrousel">
                  <div className="col-sm-12 col-md-12 mt-5">
                    <h2 className="text-light">
                    Potencia tu trabajo con escritorios virtuales en la nube☁️
                    </h2>
                    <p className="text-light">
                      {" "}
                      Accede a tu oficina desde cualquier lugar con nuestros <b>escritorios virtuales.</b>
                    </p>
                <div className="d-flex justify-content-center">

                      <a href="/virtual-desktops" className="text-decoration-none">
                    <div class="button-borders">
                      {/* <button class="btn btn-primary"> CONFIGURA TU ESCRITORIO</button> */}
                      <button class="button">
  CONFIGURA TU ESCRITORIO
  <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
    <path
      fill-rule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
      clip-rule="evenodd"
    ></path>
  </svg>
</button>
                    </div>
                    </a>
                     
                </div>
                <div className="text-center">
                          {/* <img src={nube} className="w-25" /> */}
                      </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <img src={wwebhosting} class="imagenCarousel" alt="..." />
              <div className="carousel-caption top-0 pb-5 ">
                <div className="row contenidoCarrousel">
                  <div className="col-sm-12 col-md-12 mt-5 pt-5">
                    <h2 className="text-light"> Hostea tu página web con nosotros🖥️</h2>
                    <p> Precios más accesibles que en la competencia sin sacrificar tecnología ni rendimiento. Descubre nuestras opciones de hosting con <b>Directadmin, CPanel y Wordpress</b>.</p>

                <div className="d-flex justify-content-center">
                  <a href="/webhosting" className="text-decoration-none"> 
                    <div class="button-borders">
                    <button class="button">
  VER PLANES
  <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
    <path
      fill-rule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
      clip-rule="evenodd"
    ></path>
  </svg>
</button>
                    </div>
                    </a>
                </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img src={dominio} class="imagenCarousel" alt="..." />
              <div className="carousel-caption top-0 pb-5 ">
                <div className="row contenidoCarrousel">
                  <div className="col-sm-12 col-md-12 mt-5 pt-5">
                    <h2 className="text-light"> Encuentra el dominio perfecto para tu negocio🌍</h2>
                    <p> Registra <b>tu dominio ideal con Nevaon</b>. Protege tu marca y posiciona tu negocio con extensiones  populares como <b>.com, .mx y muchas más</b>. ¡Empieza tu presencia online ahora mismo!</p>

                <div className="d-flex justify-content-center">
               
                <a href="https://billing.nevaon.com/cart.php?a=add&domain=register" target="_blank" className="text-decoration-none">
                 
                    <div class="button-borders">
                    <button class="button">
  BUSCAR DOMINIO
  <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
    <path
      fill-rule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
      clip-rule="evenodd"
    ></path>
  </svg>
</button>
                    </div>
                    </a>
                   
               
                </div>
                <div className="text-center">
                          {/* <img src={dominio1} className=" mt-3 w-25" /> */}
                      </div>
                  </div>
                </div>
              </div>
            </div>



            
            <div class="carousel-item">
              <img src={reseller} class="imagenCarousel" alt="..." />
              <div className="carousel-caption top-0 pb-5 ">
                <div className="row contenidoCarrousel">
                  <div className="col-sm-12 col-md-12 mt-5 pt-5">
                    <h2 className="text-light">Conviértete en proveedor con nuestro Reseller Hosting 🛍️</h2>
                    <p>  Inicia tu negocio de hosting con nuestras soluciones de <b>reseller</b>.</p>

                <div className="d-flex justify-content-center">
                  <a href="/reseller">
                    <div class="button-borders">
                    <button class="button">
  EMPIEZA TU NEGOCIO
  <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
    <path
      fill-rule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
      clip-rule="evenodd"
    ></path>
  </svg>
</button>
                    </div>
                    </a>
                </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

        
    </header>
  );
};