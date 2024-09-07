import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '../ui/dialog'
import { Button } from '../ui/button'
import Image from 'next/image'

function HospitalModalDetails() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className=' border-primary-100 border-2  w-[151px] h-[38px] rounded-3xl text-primary-100 font-semibold text-md'
          variant='outline'
        >
          ver mas
        </Button>
      </DialogTrigger>
      <DialogContent className='w-full h-[92%] lg:w-[935px] lg:h-[600px] overflow-y-auto max-w-none '>
        <DialogHeader>
          <div className='flex flex-col lg:flex-row justify-between gap-5'>
            <div className='w-full h-full lg:w-[254px] lg:h-[258px] bg-primary-100 rounded-[15px]'>
              <Image
                src={'/facial-surgery.png'}
                alt='facial-surgery'
                width={254}
                height={300}
                className='w-fit object-cover h-[258px]'
              />
            </div>
            <div className='flex flex-col gap-9 w-full lg:w-[570px]'>
              <h2>Instituto Cubano de Oftalmología</h2>
              <p>Calle 76 #3104 e/ 31 y 41 Marianao, La Habana</p>
              <p>
                Se encuentra equipado con una tecnología de punta donde se realizan los exámenes más modernos para el
                diagnóstico de las diferentes afecciones oftalmológicas así como la aplicación de novedosas técnicas
                quirúrgicas.
              </p>
            </div>
          </div>
        </DialogHeader>
        <p>
          Debido a la experiencia alcanzada en Cuba con más de dos siglos de prestaciones médicas, los servicios de
          salud cubanos y especialmente la oftalmología, han ganado un prestigio nacional e internacional, no solo por
          la alta calidad científica y técnica del capital humano que participa sino por la confiablidad y ética de los
          mismos que basándose en el método clínico prescriben los medios indispensables para un diagnóstico veraz,
          exento de lucros a expensas de servicios médicos innecesarios. Instituto Cubano de Oftalmología Ramón Pando
          Ferrer constituye el centro de referencia tanto nacional como internacional de la especialidad
          de Oftalmología y el centro rector de la docencia contando con prestigiosos especialistas y profesores cuyos
          conocimientos y experiencias pueden intercambiarse con especialistas nacionales e internacionales. La atención
          médica incluye diagnóstico, tratamiento y soluciones quirúrgicas. Se ofrecen servicios de urgencia,
          ambulatorios y hospitalizados. Como centro rector de la especialidad el hospital constituye la base del
          intercambio con proyectos internacionales como ORBIS y los cuales colaboran en el Programa Nacional de
          Prevención de Ceguera, rectorado por especialistas del centro y que forma parte de la iniciativa internacional
          para la prevención y control de la ceguera conocida como Visión 20/20 El Derecho de Ver impulsado por la OMS.
          Las causas de ceguera se ajustan por su frecuencia de aparición a las reportadas como más frecuentes por la
          OMS para países en vías del desarrollo. La catarata constituye la principal causa de ceguera seguida del
          glaucoma, la retinopatía diabética y la degeneración macular asociada a la edad.
        </p>

        <DialogFooter>
          <DialogTrigger asChild>
            <Button
              className=' border-primary-100 border-2  w-[151px] h-[38px] rounded-3xl bg-primary-100 hover:bg-primary-50 text-white font-semibold text-md'
              type='reset'
            >
              ver menos
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default HospitalModalDetails
