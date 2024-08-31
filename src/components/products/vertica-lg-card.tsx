import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
type Props = {
  title: string
  text: string
}
function VerticalLgCard({ title, text }: Props) {
  return (
    <div className='flex flex-col justify-center gap-6 w-[294px] h-[611px] bg-white rounded-[15px] p-6'>
      <div className='w-[254px] h-[258px] bg-primary-100 rounded-[15px]'>
        <Image
          src={'/facial-surgery.png'}
          alt='facial-surgery'
          width={300}
          height={300}
          className='w-fit object-cover h-[258px]'
        />
      </div>
      <div className='flex flex-col items-center lg:items-start gap-2 text-black w-[254px]'>
        <h2 className='text-xl font-semibold'>{title}</h2>
        <p className='text-xs font-medium'>{text} </p>
        <Button
          className='border-primary-100 border-2 rounded-3xl text-primary-100 w-[151px] h-[38px]'
          variant={'outline'}
        >
          ver mas
        </Button>
      </div>
    </div>
  )
}

export default VerticalLgCard
