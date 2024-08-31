import Image from 'next/image'
import React from 'react'
type Props = {
  src: string
}
function Service({ src }: Props) {
  return (
    <div className='w-[198px] h-[100px]'>
      <Image src={src} alt='facial-surgery' width={198} height={100} />
    </div>
  )
}

export default Service
