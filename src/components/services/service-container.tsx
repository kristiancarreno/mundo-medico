import * as React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { Stethoscope } from 'lucide-react'
import Service from './service'

const services = [
  {
    title: 'Programas Medicos',
    description: 'Conoce sobre los servicios médicos que se ofrecen en Cuba y como acceder a ellos.',
    icon: <Stethoscope width={45} height={52} color='white' />
  },
  {
    title: 'Medicamentos cubanos',
    description: 'Aprende sobre los medicamentos producidos en Cuba y sus aplicaciones.',
    icon: <Stethoscope width={45} height={52} color='white' />
  },
  {
    title: 'Hospitales',
    description: 'Conoce nuestros hospitales, sus respectivas especialidades y su localización.',
    icon: <Stethoscope width={45} height={52} color='white' />
  },
  {
    title: 'Programas Medicos',
    description: 'Conoce sobre los servicios médicos que se ofrecen en Cuba y como acceder a ellos.',
    icon: <Stethoscope width={45} height={52} color='white' />
  },
  {
    title: 'Programas Medicos',
    description: 'Conoce sobre los servicios médicos que se ofrecen en Cuba y como acceder a ellos.',
    icon: <Stethoscope width={45} height={52} color='white' />
  },
  {
    title: 'Programas Medicos',
    description: 'Conoce sobre los servicios médicos que se ofrecen en Cuba y como acceder a ellos.',
    icon: <Stethoscope width={45} height={52} color='white' />
  }
]

export function ServiceCarousel() {
  return (
    <Carousel
      opts={{
        align: 'start'
      }}
      className='w-full max-w-[1340px]'
    >
      <CarouselContent>
        {services.map((service, index) => (
          <CarouselItem key={index} className='md:basis-1/3 lg:basis-1/4'>
            <Service title={service.title} icon={service.icon} description={service.description} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
