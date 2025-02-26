import React from 'react'
import ssl from '../../assets/ssl.png'
import support from '../../assets/support.png'
import garantia from '../../assets/garantia.png'
import proteccion from '../../assets/proteccion.png'
import cpanel from '../../assets/cpanel.png'
import backup from '../../assets/backup.png'
import nvme from '../../assets/nvme.png'
import conexion from '../../assets/conexion.png'
import on from '../../assets/on.png'
export const CharactersComponent = () => {


    const featureIcons = {
        "Protección DDoS": proteccion,
        "Uptime 99.99%": on,
        "Soporte activo": support,
        "Almacenamiento NVMe": nvme,
        "Conexión de alta velocidad": conexion,
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
          title: "Conexión de alta velocidad",
          description: "Obtén un ancho de banda de 1 Gbps, que aseguran transferencia de datos rápidas y sin interrupciones."
        },
        {
          icon: "📂",
          title: "Backups automáticos",
          description: "Protege la información de tu sitio con copias de seguridad programadas y automáticas."
        }
      ];


    return (
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
    
    

    
    )
}
