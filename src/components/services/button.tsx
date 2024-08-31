import React from 'react'

interface ButtonProps {
  text: string
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className='px-16 py-4 mt-6 text-base font-semibold text-teal-500 bg-white rounded-3xl border-2 border-teal-500 border-solid'>
      {text}
    </button>
  )
}

export default Button
