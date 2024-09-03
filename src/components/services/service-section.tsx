'use client'
import React from 'react'
import { ServiceCarousel } from './service-container'
import { useTranslationClient } from '@/locales/client'

function ServiceSection() {
  const { t } = useTranslationClient()
  return (
    <section className='flex flex-col gap-4 items-center justify-center h-[100vh]  snap-always snap-center'>
      <h1 className='text-3xl font-semibold pb-14 text-primary-100'>{t('sections.programs_services')}</h1>
      <ServiceCarousel />
    </section>
  )
}

export default ServiceSection
