import React from 'react'
import { Button } from '../ui/button'

type Props = {
  title: string
  text: string
}

function CardMd({ title, text }: Props) {
  return (
    <div className='flex flex-col justify-between w-[294px] h-[298px] bg-white text-black rounded-[15px] p-6'>
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

export default CardMd
