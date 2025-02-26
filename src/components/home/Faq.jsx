import React from 'react';

export const Faq = () => {
    return (
        <>
        <div className="d-flex justify-content-center container px-0 pt-5"> 
            <div className="text-center p-4 w-100 rounded">
            <h2 className="text-center text-dark mb-3">PREGUNTAS FRECUENTES</h2>
            </div>
        </div>

        <section className="pb-5 container pt-4 cardFqa rounded">
            <div className="accordion accordion-flush row px-4" id="accordionFlushExample">
                
                {/* Primer módulo de preguntas */}
                <div className="col-sm-12 col-md-6">
                    <div className="accordion-item rounded-lg mb-3 shadow-lg ">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed text-dark rounded-top"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne"
                                aria-expanded="false"
                                aria-controls="flush-collapseOne"
                            >
                                <i className="fi fi-br-question mx-1 p-3"></i> <b>¿Qué es un Escritorio Virtual?</b>
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse text-dark" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body text-dark">
                                <p className="small text-dark">Un escritorio virtual es una solución de trabajo en la nube que permite acceder a un entorno completo desde cualquier dispositivo con conexión a internet. Todo tu software, archivos y datos están disponibles de manera remota, lo que te brinda flexibilidad y seguridad.</p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item rounded-lg mb-3 shadow-lg  ">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed text-dark rounded-top"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo"
                                aria-expanded="false"
                                aria-controls="flush-collapseTwo"
                            >
                                <i className="fi fi-br-question mx-1 p-3"></i> <b>¿Qué es el Hosting Web y por qué lo necesito?</b>
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse text-dark" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body text-dark">
                                <p>El hosting web es el servicio que permite almacenar y publicar tu sitio web en internet. Es esencial para cualquier proyecto online, ya que garantiza que tu página esté disponible 24/7. Un hosting confiable mejora el rendimiento, la seguridad y la accesibilidad de tu sitio web.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Segundo módulo de preguntas */}
                <div className="col-sm-12 col-md-6">
                    <div className="accordion-item rounded-lg mb-3 shadow-lg">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed text-dark rounded-top"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseThree"
                                aria-expanded="false"
                                aria-controls="flush-collapseThree"
                            >
                                <i className="fi fi-br-question mx-1 p-3"></i> <b>¿Ofrecen soporte en español?</b>
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse text-dark" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body text-dark">
                                <p className="small text-dark">Sí, ofrecemos soporte nativo en español 24/7/365. Nuestro equipo está siempre disponible para resolver tus dudas y ayudarte con cualquier problema técnico relacionado con nuestros servicios.</p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item rounded-lg mb-3 shadow-lg">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed text-dark rounded-top"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseFour"
                                aria-expanded="false"
                                aria-controls="flush-collapseFour"
                            >
                                <i className="fi fi-br-question mx-1 p-3"></i><b>¿El servicio de hosting incluye SSL?</b>
                            </button>
                        </h2>
                        <div id="flush-collapseFour" className="accordion-collapse collapse text-dark" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body text-dark">
                                <p>Sí, todos nuestros planes de hosting incluyen un certificado SSL gratuito, lo que garantiza que tu sitio web esté protegido con encriptación avanzada, protegiendo tanto a tus usuarios como a tu empresa.</p>
                            </div>
                        </div>
                    </div>


                </div>

                {/* Tercer módulo de preguntas */}
                <div className="col-sm-12 col-md-6">
                    <div className="accordion-item rounded-lg mb-3 shadow-lg">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed text-dark rounded-top"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseFive"
                                aria-expanded="false"
                                aria-controls="flush-collapseFive"
                            >
                                <i className="fi fi-br-question mx-1 p-3"></i><b>¿Puedo acceder a mi Escritorio Virtual desde cualquier dispositivo?</b>
                            </button>
                        </h2>
                        <div id="flush-collapseFive" className="accordion-collapse collapse text-dark" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body text-dark">
                                <p>Sí, puedes acceder a tu escritorio virtual desde cualquier dispositivo, ya sea una computadora de escritorio, laptop, tablet o móvil, siempre que tengas conexión a internet. Esto te permite trabajar de manera flexible desde cualquier lugar.</p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item rounded-lg mb-3 shadow-lg">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed text-dark rounded-top"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseSix"
                                aria-expanded="false"
                                aria-controls="flush-collapseSix"
                            >
                                <i className="fi fi-br-question mx-1 p-3"></i><b>¿Cuáles son las ventajas de usar un Escritorio Virtual para mi empresa?</b>
                            </button>
                        </h2>
                        <div id="flush-collapseSix" className="accordion-collapse collapse text-dark" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body text-dark">
                                <p>Un escritorio virtual te permite centralizar todos tus datos y aplicaciones en la nube, lo que facilita la colaboración en tiempo real, mejora la seguridad de tus datos y reduce los costos en infraestructura tecnológica, ya que no es necesario mantener equipos físicos costosos.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cuarto módulo de preguntas */}
                <div className="col-sm-12 col-md-6">
                    <div className="accordion-item rounded-lg mb-3 shadow-lg">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed text-dark rounded-top"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseSeven"
                                aria-expanded="false"
                                aria-controls="flush-collapseSeven"
                            >
                                <i className="fi fi-br-question mx-1 p-3"></i> <b>¿Qué diferencia hay entre un hosting compartido y un servidor dedicado?</b>
                            </button>
                        </h2>
                        <div id="flush-collapseSeven" className="accordion-collapse collapse text-dark" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body text-dark">
                                <p>En un hosting compartido, varios sitios web comparten los mismos recursos del servidor, lo que puede afectar el rendimiento si hay mucho tráfico. Un servidor dedicado te ofrece recursos exclusivos, mejor rendimiento, mayor seguridad y control total sobre tu servidor, siendo ideal para sitios web de alto tráfico.
</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item rounded-lg mb-3 shadow-lg ">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed text-dark rounded-top"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseEight"
                                aria-expanded="false"
                                aria-controls="flush-collapseEight"
                            >
                                <i className="fi fi-br-question mx-1 p-3" ></i><b>¿Ofrecen garantía de tiempo de actividad?</b>
                            </button>
                        </h2>
                        <div id="flush-collapseEight" className="accordion-collapse collapse text-dark" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body text-dark">
                                <p>Sí, ofrecemos una garantía de tiempo de actividad del 99.99%. Nuestro sistema avanzado de protección contra DDoS y monitoreo constante asegura que tu sitio web se mantenga operativo sin interrupciones, brindándote la máxima confiabilidad.
</p>
                            </div>
                        </div>
                    </div>

                    
                    
                </div>
              

            </div>
        </section>

        </>
    );
}
