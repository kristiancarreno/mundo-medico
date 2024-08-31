import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

type Props = {
  title: string
  text: string
}

function HorizontalLgCard({ title, text }: Props) {
  return (
    <div className='flex justify-between  items-center px-6 bg-white w-[603px] h-[298px]  rounded-[15px]'>
      <div className='w-[254px] h-[258px] bg-primary-100 rounded-[15px]'>
        <Image
          src={'/facial-surgery.png'}
          alt='facial-surgery'
          width={300}
          height={300}
          className='w-fit object-cover h-[258px]'
        />
      </div>
      <div className='flex flex-col gap-2 text-black w-[254px]'>
        <h2 className='text-xl font-semibold'>{title}</h2>
        <p className='text-xs font-medium'>{text}</p>
        <Button className='rounded-3xl text-primary-100 w-[151px] h-[38px]' variant={'outline'}>
          ver mas
        </Button>
      </div>
    </div>
  )
}

export default HorizontalLgCard
