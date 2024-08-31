import React from 'react'
import HorizontalLgCard from './horizontal-lg-card'
import VerticalLgCard from './vertica-lg-card'
import CardMd from './card-md'
import HorizontalXlCard from './horizontal-xl-card'
import Card from './card'

function ProductSection() {
  return (
    <div className='flex flex-col justify-start items-center gap-6 text-white bg-primary-100 pt-16 h-[1425px] shadow-xl z-10'>
      <h1 className='font-extrabold text-5xl'>Sitio Especializado en Turismo Medico en Cuba</h1>
      <div className='relative flex flex-wrap gap-4'>
        <div className='flex flex-col gap-4'>
          <div className='flex gap-4'>
            <HorizontalLgCard
              title='Programa de Cirugia Estetica'
              text='La cirugía plástica es la especialidad médica que mediante cirugía busca reconstruir las deformidades y corregir las deficiencias funcionales mediante la transformación del cuerpo humano. La palabra "plástica" es originaria del griego "plastikos" que significa moldear o transformar. La finalidad es que el paciente que ha nacido con un defecto congénito o ha sufrido un accidente...'
            />
            <CardMd
              title='OFTALMOLOGIA'
              text='Instituto Cubano de Oftalmología Ramón Pando Ferrer constituye el centro de referencia tanto nacional como internacional. Los resultados de las investigaciones de Cuba en la especialidad de oftalmología junto con la experiencia de los médicos cubanos...'
            />
            <VerticalLgCard
              title='Tratamiento contra las adicciones en Cuba'
              text='La adicción a las drogas es una enfermedad que, al igual que otras enfermedades, requiere atención médica y apoyo de los familiares del enfermo. Debido a razones sociales negativas que rodean la imagen del consumo de drogas, muchos pacientes y miembros de la familia prefieren ser tratados en un lugar distinto a su residencia, alejados de su entorno diario. I Es importante romper con la rutina y lo habitual...'
            />
          </div>
          <div className='absolute top-[316px] flex gap-4'>
            <VerticalLgCard
              title='Vidatox Tratamiento para cancer con productos naturales'
              text='La utilización de veneno del escorpión azul es un remedio contra el cáncer que médicos científicos cubanos por años, han trabajado en su investigación. El biólogo cubano Misael Bordier, descubrió, estudió y dirigió la investigación con la toxina del ALACRÁN O ESCORPIÓN AZUL (rhopaluris junceus), en el'
            />
            <div className='flex flex-col gap-4'>
              <HorizontalLgCard
                title='Cura para el Vitiligo'
                text='El Vitiligo es una enfermedad de la piel en la que se produce una pérdida progresiva de su color. Se caracteriza por la pérdida de las células productoras de la pigmentación de la piel o sea,  la pérdida de los melanocitos...'
              />
              <HorizontalXlCard
                title='Vacuna para cancer de pulmon'
                text='Las vacunas cubanas CIMAvax-EGFhr y Vaxira son productos del Centro de Inmunología Molecular (CIM) en La Habana, Cuba. Las vacunas para el cáncer de pulmón CIMAvax-EGFhr y Vaxira ofrecen la posibilidad de convertir el cáncer avanzado en una enfermedad crónica controlable, en tanto genera anticuerpos contra las proteínas desencadenantes del descontrol en los procesos de proliferación celular. El tratamiento para el cáncer de pulmón con las vacunas cubanas CIMAvax-EGFhr y Vaxira están indicados para los pacientes que ya se han sometido a quimioterapia o radioterapia y...'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='flex gap-4 pt-[316px]'>
        <Card
          title='Cirugia CardioVascular'
          text='- Sustitución de Válvula Aórtica
          - Revascularización Miocárdica
          - Sustitución Valvular Mitral'
        />
        <Card
          title='Cirugia de Columna'
          text='- Hernia Discal Cervical
          - Hernia Discal Torácica
          - Cirugía para la Escoliosis'
        />
        <Card
          title='Ortopedia'
          text='- Artroplastia de Rodilla
          - Artroplastia de cadera
          - Hallux Valgus Juanetes'
        />
        <Card
          title='Minimo Acceso'
          text='- Polipectomía Nasal
          - Ligaduras de Trompas
          - Resección de Próstata'
        />
        <Card
          title='Rehabilitacion'
          text='- Rehabilitacion de Hemiplejia
          - Lesiones Medulares
          - Enfermedades Degenerativas'
        />
        <Card
          title='Tercera Edad'
          text='- Evaluación del Adulto
          - Programa para Cuidadores
          - Riesgo Quirúrgico del Anciano'
        />
      </div>
    </div>
  )
}

export default ProductSection
