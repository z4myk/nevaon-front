import React from 'react'

export const SchemaMarkup = () => {
    return (
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Nevaon",
              "url": "https://nevaon.com/",
              "logo": "https://res.cloudinary.com/dxc0vxy8m/image/upload/v1743577197/nevaonnegro_dgofzf.png",
              "description": "Infraestructura en la nube: VPS, hosting, servidores dedicados y escritorios virtuales. Potencia tu plataforma con tecnología segura y escalable.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+5217831243833",
                "contactType": "customer service"
              },
              "email": "contact@nevaon.com",
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61572950011499&rdid=C6ncyIUDlgoIcErk&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15iCW2cwAV%2F#",
                "https://www.instagram.com/nevaon1920?igsh=eWJ0Y2d5bWI1bmRi",
                "https://www.youtube.com/@nevaon?si=7ABXxoU_fhJXdVZo"
              ]
            }
          `}
        </script>
      );
}