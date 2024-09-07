'use client'
import HospitalContainer from '@/components/hospitals/hospitals-container'
import { useTranslationClient } from '@/locales/client'
import { Hospital } from 'lucide-react'
import React from 'react'

function HospitalPage() {
  const { t } = useTranslationClient()
  return (
    <div className='flex flex-col  snap-always snap-center'>
      <div className='flex items-center justify-center bg-white p-6'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-3xl font-bold text-primary-100 uppercase'> {t('general.hospitals')}</h1>
          <div className='bg-primary-100 p-6 rounded-full w-[102px] h-[102px] flex items-center justify-center'>
            <Hospital width={45} height={45} color='white' />
          </div>
        </div>
      </div>
      <div className='flex justify-center bg-primary-100 '>
        <HospitalContainer />
      </div>
    </div>
  )
}

export default HospitalPage
