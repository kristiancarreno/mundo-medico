import React from 'react'
import { Button } from '../ui/button'

interface ContactButtonProps {
  title: string
  subtitle: string
}

const ContactButton: React.FC<ContactButtonProps> = ({ title, subtitle }) => {
  return (
    <Button className='flex border-primary-100 border-2 flex-col w-full h-full px-16 py-5 text-lg justify-center p-1 bg-primary-100 duration-300 hover:bg-primary-50 rounded-[59px] max-md:px-5'>
      <span className='font-medium'>{title}</span>
      <span className='font-bold'>{subtitle}</span>
    </Button>
  )
}

export default ContactButton
