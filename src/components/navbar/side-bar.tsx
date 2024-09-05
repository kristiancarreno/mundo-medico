import React from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '../ui/drawer'
import { Button } from '../ui/button'
import { MenuIcon } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { useTranslationClient } from '@/locales/client'

function SideBar() {
  const { t } = useTranslationClient()
  return (
    <div>
      <Drawer direction='left'>
        <DrawerTrigger>
          <MenuIcon />
        </DrawerTrigger>
        <DrawerContent className='h-full z-[200] text-primary-100 w-1/4'>
          <DrawerHeader className='text-center'>
            <DrawerTitle>{t('general.welcome')}</DrawerTitle>
          </DrawerHeader>
          <Accordion type='single' collapsible className='w-full p-5'>
            <AccordionItem value='item-1'>
              <AccordionTrigger>Programas médicos</AccordionTrigger>
              <AccordionContent>
                <div className='px-4 prose prose-sm prose-gray dark:prose-invert max-w-none'>
                  <p>Explora nuestros programas médicos de vanguardia que ofrecen atención integral a pacientes.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger>Hospitales</AccordionTrigger>
              <AccordionContent>
                <div className='px-4 prose prose-sm prose-gray dark:prose-invert max-w-none'>
                  <p>Conoce nuestra red de hospitales de excelencia que brindan servicios de salud de calidad.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3'>
              <AccordionTrigger>Estudios médicos</AccordionTrigger>
              <AccordionContent>
                <div className='px-4 prose prose-sm prose-gray dark:prose-invert max-w-none'>
                  <p>Explora nuestros estudios médicos de vanguardia que ofrecen diagnósticos precisos.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-4'>
              <AccordionTrigger>Contacto</AccordionTrigger>
              <AccordionContent>
                <div className='px-4 prose prose-sm prose-gray dark:prose-invert max-w-none'>
                  <p>Ponte en contacto con nosotros para obtener más información o programar una cita.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-5'>
              <AccordionTrigger>Informaciones útiles</AccordionTrigger>
              <AccordionContent>
                <div className='px-4 prose prose-sm prose-gray dark:prose-invert max-w-none'>
                  <p>Encuentra información relevante sobre temas de salud y bienestar.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-6'>
              <AccordionTrigger>Medicamentos cubanos</AccordionTrigger>
              <AccordionContent>
                <div className='px-4 prose prose-sm prose-gray dark:prose-invert max-w-none'>
                  <p>Descubre nuestra amplia gama de medicamentos cubanos de alta calidad.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <DrawerFooter>
            <div className='text-base font-medium  leading-10'>
              <a href='mailto:solicitud@cubamundomédico.com'>solicitud@cubamundomédico.com</a>
              <br />
              +53 5 2730507
            </div>
            <DrawerClose>
              <Button variant='outline'>Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default SideBar
