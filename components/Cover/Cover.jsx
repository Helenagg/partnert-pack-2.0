import React from "react";
import Image from "next/image";

const Cover = (props) => {
  return (
    <div className='relative after:absolute after:inset-0 after:z-0 after:block w-full h-[600px] flex flex-col justify-center'>
      <Image
        src={props.urlCover}
        alt='Inicio'
        fill={true}
        priority={true}
        className='object-cover w-full h-full'
      />
      
        <div className='absolute bottom-6 left-6 flex flex-col md:flex-row items-start gap-4 p-4'>
          <a
            href=''
            className='btn-white'
          >
            Productos
          </a>
          <a
            href=''
            className='btn-white'
          >
            Contacto
          </a>
        </div>
     
    </div>
  );
};

export default Cover;
