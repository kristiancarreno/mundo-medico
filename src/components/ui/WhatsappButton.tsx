import Image from 'next/image'
import Link from 'next/link'

const WhatsappImage = () => (
  <Image src={`/whatsapp.png`} alt='Contact Us' width={50} height={50} className='fixed right-4 bottom-12 z-20' />
)

const WhatsAppButton = () => {
  return (
    <Link href={'https://wa.me/5350749555'} target='_blank'>
      <WhatsappImage />
    </Link>
  )
}

export default WhatsAppButton
