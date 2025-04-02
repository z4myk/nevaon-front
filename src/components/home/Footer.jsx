import React from 'react'
import {Link} from 'react-router-dom'
import neveaonnegro from '../../assets/nevaonnegro.png'
import paypal from '../../assets/paypal.png'
import mastercard from '../../assets/mastercard.png'
import visa from '../../assets/visa.png'
import transferencia from '../../assets/transferencia.png'
import oxxopay from '../../assets/oxxopay.png'
export const Footer = () => {
    return (
        <footer class="bg-dark p-5 text-light">
        <div class="container">
            <div class="row text-center text-light">
                
                <div class="col-sm-12 col-md-4">
                    <h5 class="text-primary">Legal</h5>
                    <ul class="list-unstyled">
                        <li><a href="/legal-notice" class="text-light text-decoration-none small link-hover">Aviso legal</a></li>
                        
                        <li><a href="/privacy" class="text-light text-decoration-none small link-hover">Política de privacidad</a></li>
                        
                        <li><a href="/terms-and-conditions" class="text-light text-decoration-none small link-hover">Términos y condiciones</a></li>
                    </ul>
                </div>
    
                <div class="col-sm-12 col-md-4">
                    <h5 class="text-primary">Empresa</h5>
                    <ul class="list-unstyled">
                        <li><a href="https://wa.me/+5217831243833" class="text-light text-decoration-none small link-hover">Contáctanos</a></li>
                        <li><a href="#" class="text-light text-decoration-none small link-hover">Sobre Nevaon</a></li>
                        <li><a href="https://billing.nevaon.com/index.php?rp=/knowledgebase" class="text-light text-decoration-none small link-hover">Blog</a></li>
                        <li><a href="https://www.linkedin.com/in/nevaon-39677b34b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" class="text-light text-decoration-none small link-hover">Trabaja con nosotros</a></li>
                    </ul>
                </div>
    
               
                <div class="col-sm-12 col-md-4">
                    <h5 class="text-primary">Redes Sociales</h5>
                    <ul class="list-unstyled">
                        <li><a href="https://www.instagram.com/nevaon1920?igsh=eWJ0Y2d5bWI1bmRi" target="_blank" class="text-light text-decoration-none small link-hover"><i class="fi fi-brands-instagram"></i> Instagram</a></li>
                        <li><a href="https://www.facebook.com/share/15iCW2cwAV/" target="_blank" class="text-light text-decoration-none small link-hover"><i class="fi fi-brands-facebook"></i> Facebook</a></li>
                        <li><a href="https://youtube.com/@nevaon?si=7ABXxoU_fhJXdVZo " target="_blank" class="text-light text-decoration-none small link-hover"><i class="fi fi-brands-youtube"></i> YouTube</a></li>
                        <li><a href="https://www.tiktok.com/@_nevaon_?_t=ZM-8uHlXdCwiMn&_r=1" target="_blank" class="text-light text-decoration-none small link-hover">TikTok</a></li>
                        <li><a href="https://x.com/nevaonbusiness?t=Dma9DNlvUor5Q5oaTfTYrQ&s=09"  target="_blank" class="text-light text-decoration-none small link-hover"><i class="fi fi-brands-twitter-alt-circle"></i> X</a></li>
                        <li><a href="https://www.linkedin.com/in/nevaon-39677b34b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" class="text-light text-decoration-none small link-hover"><i class="fi fi-brands-linkedin"></i> LinkedIn</a></li>
                    </ul>
                </div>
            </div>
    
            <hr class="bg-light" />
    
            <div class="text-center mt-3">
                <img src={neveaonnegro}  className="mb-3 logoNevaon" alt="Nevaon" />
                <p class="mb-0 small ">© 2025 Nevaon | Parte de Vemox Soluciones Tecnológicas Empresariales S.A de C.V.</p>
                <div className="d-flex justify-content-center flex-wrap mt-4 gap-4">
            <div>
            <img  src={paypal} className="iconFooter" alt="Paypal" />
            </div>

            <div>
            <img  src={mastercard} className="iconFooter" alt="Master Card" />
            </div>

            <div>
            <img  src={oxxopay} className="iconFooterGrande"  alt="Oxxo Pay" />
            </div>

            <div>
            <img  src={transferencia} className="iconFooter" alt="Transferencia Bancaria" />
            </div>

            <div>
            <img  src={visa} className="iconFooter" alt="Visa" />
            </div>
        </div>
        <p className="small text-secondary text-center mt-4">
       Desarrollado por <a href="https://www.aintech.com.ar" target="_blank" className="text-primary">aintech.com.ar</a>.
      </p>
            </div>
        </div>
    </footer>
    
    
    )
}
