import React from 'react'
import { ContactBar } from './contact-bar'
import WhiteLogo from '../../../public/icons/white-logo'

function HeroBg() {
  return (
    <div className='flex flex-col'>
      <div className='hero-slide'>
        <div className='flex flex-col gap-1 lg:gap-5 relative mt-[73px] p-8'>
          <div className=''>
            <span className='text-white text-xl lg:text-[58px] font-extrabold  uppercase leading-[73px]'>
              Viajes Médicos
            </span>
            <span className='text-white text-xl lg:text-lg lg:text-[58px] font-bold  uppercase leading-[73px]'>
              {' '}
              a Cuba
            </span>
          </div>
          <div className=''>
            <span className='text-white text-lg lg:text-[35px] font-semibold  leading-[51px]'>Bienvenidos a</span>
            <span className='text-white text-lg lg:text-[35px] font-bold  leading-[51px]'>
              Cuba Mundo Médico
              <br />
            </span>
            <span className='text-white text-base lg:text-[32px] font-light  leading-[51px]'>
              Tu bienestar es nuestra prioridad
            </span>
          </div>
          <div className=' text-white text-base lg:text-[22px] font-light  leading-10'>
            solicitud@cubamundomédico.com
            <br />
            +53 5 2730507
          </div>
          <div>
            <WhiteLogo />
          </div>
        </div>
      </div>
      <ContactBar />
    </div>
  )
}

export default HeroBg
