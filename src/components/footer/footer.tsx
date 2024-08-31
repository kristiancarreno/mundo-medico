import React from 'react'
import ColoredLogo from '../../../public/icons/colored-logo'
import Link from 'next/link'
import { Button } from '../ui/button'
import FacebookIco from '../../../public/icons/facebook'
import LinkedinIco from '../../../public/icons/linkedin'
import WhatsappIco from '../../../public/icons/whatsapp'
import MailIco from '../../../public/icons/mail'
import PhoneIco from '../../../public/icons/phone'

function Footer() {
  return (
    <div className='footer flex justify-center items-center gap-24 py-6 px-28'>
      <div className='bg-white flex justify-center items-center rounded-[15px] shadow-2xl w-[209px] h-[146px]'>
        <ColoredLogo width={115} height={115} />
      </div>
      <div>
        <div className='flex gap-14 items-center mb-2'>
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
          <Button className='rounded-3xl text-primary-100 w-[252px] h-[45px] font-semibold text-lg' variant={'outline'}>
            Solicitar Tratamiento
          </Button>
        </div>
        <div className='flex gap-4'>
          <div className='w-[60px] h-1 bg-white rounded-[3px]' />
          <div className='w-[980px] h-1 bg-white rounded-[3px]' />
        </div>
        <div className='flex justify-between mt-4'>
          <p className='font-semibold text-white text-lg'>
            No dude en contactarnos por cualquier inquietud Equipo CUBAMUNDOMEDICO
          </p>
          <div className='flex gap-8'>
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
