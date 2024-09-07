import React from 'react'
import ContactTitle from './contact-title'
import ContactButton from './contact-button'

interface ContactSectionProps {}

const ContactSection: React.FC<ContactSectionProps> = () => {
  const contactButtons = [
    { title: 'Solicitud de', subtitle: 'Tratamientos Médicos' },
    { title: 'Solicitud de', subtitle: 'Estudios Médicos' }
  ]

  return (
    <div className='flex flex-col justify-center items-center  z-10 relative mt-3'>
      <div className='flex flex-col justify-center items-center px-16 py-6 w-full bg-white  max-md:px-5 max-md:max-w-full'>
        <div className='flex flex-col lg:flex-row w-full items-center justify-center '>
          <div className='flex gap-5 px-8 lg:px-0 flex-col lg:flex-row justify-center'>
            <div className='flex flex-col w-[28%] max-md:ml-0 max-md:w-full'>
              <ContactTitle />
            </div>
            <div className='flex flex-col ml-5 w-[72%] max-md:ml-0 max-md:w-full'>
              <div className='flex flex-col px-8 lg:px-0 gap-6 self-stretch my-auto w-auto text-xl font-semibold text-center text-white max-md:mt-10 max-md:max-w-full max-sm:gap-20 max-sm:mb-auto'>
                <div className='flex gap-5 max-md:flex-col justify-center items-center'>
                  {contactButtons.map((button, index) => (
                    <ContactButton key={index} title={button.title} subtitle={button.subtitle} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
