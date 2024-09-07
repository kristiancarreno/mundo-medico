import React from 'react'
import { ContactBar } from './contact-bar'
import { useTranslationServer } from '@/locales/server'

async function HeroBg() {
  const { t } = await useTranslationServer()
  return (
    <div className='flex flex-col'>
      <section className='hero-slide'>
        <div className='flex flex-col gap-1 lg:gap-5 relative p-8 ml-4 lg:ml-4 justify-center'>
          <div className=''>
            <span className='text-white text-xl lg:text-[58px] font-extrabold  uppercase leading-[73px]'>
              {t('general.cuba_travels')}
            </span>
          </div>
          <div className=''>
            <span className='text-white text-lg lg:text-[35px] font-semibold  leading-[51px]'>
              {t('general.welcome')}
            </span>
            <br />
            <span className='text-white text-base lg:text-[32px] font-light  leading-[51px]'>
              {t('general.priority')}
            </span>
          </div>
          <div className=' text-white text-base lg:text-[22px] font-light  leading-10'>
            <a href='mailto:solicitud@cubamundomédico.com'>solicitud@cubamundomédico.com</a>
            <br />
            +53 5 2730507
          </div>
        </div>
      </section>
      <ContactBar />
    </div>
  )
}

export default HeroBg
