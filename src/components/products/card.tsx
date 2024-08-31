import React from 'react'
import { Button } from '../ui/button'

type Props = {
  title: string
  text: string
}

function Card({ title, text }: Props) {
  return (
    <div className='flex text-black p-6 flex-col justify-between items-center w-[177px] lg:w-[191px] h-[229px] bg-white rounded-[15px]'>
      <h1 className='text-xl font-semibold'>{title}</h1>
      <p className='text-xs font-medium'>{text}</p>
      <Button
        className='border-primary-100 border-2 rounded-3xl text-primary-100 w-[151px] h-[38px]'
        variant={'outline'}
      >
        ver mas
      </Button>
    </div>
  )
}

export default Card
