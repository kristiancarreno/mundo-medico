import React, { ReactNode } from 'react'
import { Button } from '../ui/button'

interface CardProps {
  title: string
  description: string
  icon: ReactNode
}

const ServiceCard: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <article className='flex justify-center items-center gap-4 z-10 flex-col px-11 py-7 mb-0 w-full bg-white rounded-[15px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
      <h2 className='self-center w-full text-xl font-bold leading-5 uppercase'>{title}</h2>
      <div className='bg-primary-100 rounded-full w-[110px] h-[110px] flex items-center justify-center'>{icon}</div>
      <p className='mt-6 text-sm font-medium'>{description}</p>
      <Button className='rounded-3xl text-primary-100 w-full' variant={'outline'}>
        ver mas
      </Button>
    </article>
  )
}

export default ServiceCard
