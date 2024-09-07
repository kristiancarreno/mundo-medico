import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import HospitalModalDetails from './hospital-modal-details'

type Props = {
  title: string
  text: string
  image: string
}

function HospitalCard({ title, text, image }: Props) {
  return (
    <div className='flex justify-between p-5 gap-3 items-center px-6 bg-white w-full h-full lg:w-[603px] lg:h-[298px] rounded-[15px]'>
      <div className='w-full lg:w-[254px] h-[258px] bg-primary-100 rounded-[15px]'>
        <Image src={image} alt='facial-surgery' width={254} height={300} className='w-fit object-cover h-[258px]' />
      </div>
      <div className='flex flex-col gap-2 text-black w-[254px]'>
        <h2 className='text-xl font-semibold'>{title}</h2>
        <p className='text-xs font-medium'>{text}</p>
        <HospitalModalDetails />
      </div>
    </div>
  )
}

export default HospitalCard
