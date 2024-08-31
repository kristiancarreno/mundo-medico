import React from 'react'

interface ContactTitleProps {}

const ContactTitle: React.FC<ContactTitleProps> = () => {
  return (
    <div className='flex flex-col items-center w-full max-md:mt-10'>
      <h2 className='text-3xl font-extrabold text-center text-teal-500 uppercase'>Contáctenos</h2>
      <div className='flex gap-1.5 self-stretch mt-2.5'>
        <div className='flex shrink-0 max-w-full bg-teal-500 rounded h-[5px] w-[398px]' />
        <div className='flex shrink-0 w-10 bg-teal-500 rounded h-[5px]' />
      </div>
      <p className='mt-4 text-sm font-medium text-center text-black'>
        ELEGIRNOS PARA ORGANIZAR SU ATENCIÓN MÉDICA Y VIAJE A CUBA, ES TENER LA OPCIÓN DE SER GUIADO POR FACILITADORES
        PROFESIONALES PARA TRAMITAR SU CASO CON LOS MEJORES ESPECIALISTAS
      </p>
    </div>
  )
}

export default ContactTitle
