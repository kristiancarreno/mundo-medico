import React from 'react'
import FacebookIco from '../../../public/icons/facebook'
import { Linkedin } from 'lucide-react'
import LinkedinIco from '../../../public/icons/linkedin'
import WhatsappIco from '../../../public/icons/whatsapp'
import MailIco from '../../../public/icons/mail'
import PhoneIco from '../../../public/icons/phone'
import Image from 'next/image'

export const ContactBar = (): JSX.Element => {
  return (
    <div className='flex justify-between gap-6 items-center w-full h-[89px] px-8 bg-white shadow-xl relative'>
      <div className='flex gap-6 items-center'>
        <div className='flex items-center justify-center   w-[58px] h-[58px] top-[17px] bg-primary-100 rounded-[29px]'>
          <FacebookIco className='z-50' />
        </div>
        <div className='flex items-center justify-center   w-[58px] h-[58px] top-[17px] bg-primary-100 rounded-[29px]'>
          <LinkedinIco className='z-50' />
        </div>
        <div className='flex items-center justify-center   w-[58px] h-[58px] top-[17px] bg-primary-100 rounded-[29px]'>
          <WhatsappIco className='z-50' />
        </div>
        <div className='flex items-center justify-center   w-[58px] h-[58px] top-[17px] bg-primary-100 rounded-[29px]'>
          <MailIco className='z-50' />
        </div>
        <div className='flex items-center justify-center   w-[58px] h-[58px] top-[17px] bg-primary-100 rounded-[29px]'>
          <PhoneIco className='z-50' />
        </div>
      </div>
      <Image src='/doctors.png' alt='hero-slide' className='absolute right-0 bottom-0 ' width={740} height={609} />
    </div>
  )
}
