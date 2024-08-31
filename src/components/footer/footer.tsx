import React from 'react'
import ColoredLogo from '../../../public/icons/colored-logo'
import Link from 'next/link'
import { Button } from '../ui/button'
import FacebookIco from '../../../public/icons/facebook'
import LinkedinIco from '../../../public/icons/linkedin'
import WhatsappIco from '../../../public/icons/whatsapp'
import MailIco from '../../../public/icons/mail'
import PhoneIco from '../../../public/icons/phone'
import { TreatmentSolicitude } from '../modals/treatment-solicitude'

function Footer() {
  return (
    <div className='footer flex flex-col lg:flex-row justify-center items-center gap-14 py-6 px-18'>
      <div className='bg-white flex justify-center items-center rounded-[15px] shadow-2xl w-[209px] h-[146px]'>
        <ColoredLogo width={115} height={115} />
      </div>
      <div>
        <div className='flex flex-col lg:flex-row gap-14 items-center mb-2'>
          <ul>
            <li>
              <Link className='font-bold text-lg underline text-white' href={'#'}>
                Pago Online
              </Link>
            </li>
            <li>
              <Link className='font-bold text-lg underline text-white' href={'#'}>
                Seguro de salud o viaje
              </Link>
            </li>
            <li>
              <Link className='font-bold text-lg underline text-white' href={'#'}>
                Informacion sobre Cuba
              </Link>
            </li>
            <li>
              <Link className='font-bold text-lg underline text-white' href={'#'}>
                Consulta Online
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link className='font-bold text-lg underline text-white' href={'#'}>
                Pago Online
              </Link>
            </li>
            <li>
              <Link className='font-bold text-lg underline text-white' href={'#'}>
                Seguro de salud o viaje
              </Link>
            </li>
            <li>
              <Link className='font-bold text-lg underline text-white' href={'#'}>
                Informacion sobre Cuba
              </Link>
            </li>
            <li>
              <Link className='font-bold text-lg underline text-white' href={'#'}>
                Consulta Online
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link className='font-bold text-lg underline text-white' href={'#'}>
                Pago Online
              </Link>
            </li>
            <li>
              <Link className='font-bold text-lg underline text-white' href={'#'}>
                Seguro de salud o viaje
              </Link>
            </li>
            <li>
              <Link className='font-bold text-lg underline text-white' href={'#'}>
                Informacion sobre Cuba
              </Link>
            </li>
            <li>
              <Link className='font-bold text-lg underline text-white' href={'#'}>
                Consulta Online
              </Link>
            </li>
          </ul>
          <TreatmentSolicitude />
        </div>
        <div className='hidden lg:flex gap-4'>
          <div className='w-[60px] h-1 bg-white rounded-[3px]' />
          <div className='w-[980px] h-1 bg-white rounded-[3px]' />
        </div>
        <div className='flex flex-col lg:flex-row justify-between mt-4'>
          <p className='font-semibold text-white text-lg text-wrap'>
            No dude en contactarnos por cualquier inquietud Equipo CUBAMUNDOMEDICO
          </p>
          <div className='flex flex-col lg:flex-row items-center gap-8'>
            <FacebookIco />
            <LinkedinIco />
            <WhatsappIco />
            <MailIco />
            <PhoneIco />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
