import React from 'react'
import nevaonblanco from '../../assets/nevaonblanco.png'
import nevaonnegro from '../../assets/nevaonnegro.png'
import {Link} from 'react-router-dom'
export const Navbar = () => {
    return (



      <nav class="navbar navbar-light bg-light p-3">
      <div class="container-fluid">
       
      <div>
  
  <button
    class="btn"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasMenu"
    aria-controls="offcanvasMenu"
  >
    <i class="fi fi-br-menu-burger p-1"></i>
  </button>
  <a className="text-decoration-none " href="/">
  <img src={nevaonnegro} className="brand-logo" alt="Nevaon" /></a>


  <div
    class="offcanvas offcanvas-start"
    data-bs-scroll="true"
    tabindex="-1"
    id="offcanvasMenu"
    aria-labelledby="offcanvasMenuLabel"
  >
    <div class="offcanvas-header">
      <a className="text-decoration-none " href="/">
      <h5 class="offcanvas-title" id="offcanvasMenuLabel">  <img src={nevaonnegro} className="brand-logo" alt="Nevaon" /></h5></a>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>

   
    <div class="offcanvas-body">
     
      <ul class="list-group list-group-flush text-center">
        
        <li class="list-group-item">
          <a href="https://billing.nevaon.com/login.php" class="text-decoration-none text-dark"><i class="fi fi-br-sign-in-alt"></i> Iniciar Sesión</a>
        </li>
        
        <li class="list-group-item">
          <a href="https://billing.nevaon.com/register.php" class="text-decoration-none text-dark"><i class="fi fi-br-enter"></i> Registrarse</a>
        </li>
      </ul>

    
      <hr className="text-primary"/>

      <ul class="list-group list-group-flush text-center">
        <li class="list-group-item">
          <a href="/virtual-desktops" class="text-decoration-none text-dark"><i class="fi fi-rs-desktop-arrow-down"></i> Escritorios Virtuales</a>
        </li>
        
        <li class="list-group-item">
          <a href="/webhosting" class="text-decoration-none text-dark"><i class="fi fi-ts-browser"></i> Web Hosting</a>
        </li>
        
        <li class="list-group-item">
          <a href="/vps" class="text-decoration-none text-dark"><i class="fi fi-tr-database"></i> Servidores</a>
        </li>
        <li class="list-group-item">
            <a href="/software" class="text-decoration-none"><i class="fi fi-rs-display-code"></i> Desarrollo Web</a>
          </li>
        <li class="list-group-item">
          <a href="https://billing.nevaon.com/cart.php?a=add&domain=register" class="text-decoration-none text-dark"><i class="fi fi-rs-site-browser"></i> Dominios</a>
        </li>
        <li class="list-group-item">
          <a href="/business-email" class="text-decoration-none text-dark"><i class="fi fi-rr-envelope-plus"></i> Correo Empresarial</a>
        </li>
        <li class="list-group-item">
          <a href=" https://billing.nevaon.com/index.php?rp=/store/ssl-certificates" class="text-decoration-none text-dark"><i class="fi fi-rs-shield-check"></i> SSL</a>
        </li>
        <li class="list-group-item">
          <a href="/reseller" class="text-decoration-none text-dark"><i class="fi fi-ts-selling"></i> Reseller</a>
        </li>
      </ul>

   
      <hr />

      
      <div>
       
     
      </div>
    </div>
  </div>
</div>

   
        
        <form class="d-flex gap-5">
          <div className="mt-3">
            <a href="https://billing.nevaon.com/contact.php" className="text-decoration-none text-dark">
        <i className="fi fi-rr-user-headset iconsNavbar "><span className="d-none">.</span></i>
            </a>
          </div>

          

          <div className="mt-3">
            <a href="https://billing.nevaon.com/cart.php?a=view" className="text-decoration-none text-dark">
          <i className="fi fi-rr-shopping-cart-add iconsNavbar"><span className="d-none">.</span></i>
            </a>
          </div>
          {/* <div className="mt-3">
          <i class="fi fi-brands-whatsapp iconsNavbar btn btn-success redondel"></i>
          </div> */}
        </form>
      </div>
    </nav>





    )
}
