import React from "react";
import Image from "next/image";

const Contacto = () => {
  const contactData = [
    {
      name: "Direccion",
      urlImage: "/assets/img/contacto/enfardadora_automatica.webp",
      content: `<p>Calle Hierro 71,</p><p>28850 Torrejón de Ardoz</p>`,
    },
    {
      name: "Teléfonos de contacto",
      urlImage: "/assets/img/contacto/enfardadora_automatica.webp",
      content: "<p>672 226 122</p><p>918 281 264</p>",
    },
    {
      name: "Email",
      urlImage: "/assets/img/contacto/enfardadora_automatica.webp",
      content: `<p className='text-sm'>administracion@partnerpack.es</p>`,
    },
  ];
  return (
    <div className='container mx-auto px-5 py-8'>
      <div className='text-center mb-6'>
        <h1 className='text-secondary'>Contacto</h1>
      </div>
      <div className='flex flex-col md:flex-row'>
        {contactData &&
          contactData.map((element, index) => {
            return (
              <div
                key={index}
                className='flex flex-cols-1 w-full md:w-1/3 mx-2 mt-10 md:mt-0 relative items-center justify-center'
              >
                <div className='max-w-sm rounded overflow-hidden shadow-lg'>
                  <Image
                    src={element.urlImage}
                    width={1042}
                    height={1038}
                    alt={element.name}
                  />
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: element.content }}
                  className='absolute text-white font-bold text-center z-50 text-xl block justify-center'
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Contacto;
