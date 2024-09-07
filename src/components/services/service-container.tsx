'use client'
import * as React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { Stethoscope, GraduationCap, Hospital, Syringe } from 'lucide-react'
import Service from './service'
import Autoplay from 'embla-carousel-autoplay'

const services = [
  {
    title: 'Programas Medicos',
    description: 'Conoce sobre los servicios médicos que se ofrecen en Cuba y como acceder a ellos.',
    icon: <Stethoscope width={45} height={52} color='white' />
  },
  {
    title: 'Estudios Médicos',
    description: 'Infórmate sobre todo lo relacionado a los estudios de medicina en Cuba.',
    icon: <GraduationCap width={45} height={52} color='white' />
  },
  {
    title: 'Medicamentos Cubanos',
    description: 'Aprende sobre los medicamentos producidos en Cuba y sus aplicaciones.',
    icon: <Syringe width={45} height={52} color='white' />
  },
  {
    title: 'Hospitales',
    description: 'Conoce nuestros hospitales, sus respectivas especialidades y su localización.',
    icon: <Hospital width={45} height={52} color='white' />
  },
  {
    title: 'Hospitales',
    description: 'Conoce nuestros hospitales, sus respectivas especialidades y su localización.',
    icon: <Hospital width={45} height={52} color='white' />
  }
]

export function ServiceCarousel() {
  return (
    <Carousel
      opts={{
        align: 'center',
        loop: true
      }}
      plugins={[
        Autoplay({
          delay: 4000
        })
      ]}
      className='w-full flex justify-center max-w-[1340px]'
    >
      <CarouselContent>
        {services.map((service, index) => (
          <CarouselItem key={index} className='md:basis-1/3 lg:basis-1/4'>
            <Service title={service.title} icon={service.icon} description={service.description} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className='hidden md:block'>
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  )
}
