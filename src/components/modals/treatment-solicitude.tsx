import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

export function TreatmentSolicitude() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className=' border-primary-100 border-2 rounded-3xl text-primary-100 w-[252px] h-[45px] font-semibold text-lg'
          variant='outline'
        >
          Solicitar Tratamiento
        </Button>
      </DialogTrigger>
      <DialogContent className='w-[935px] max-w-none '>
        <DialogHeader>
          <DialogTitle>Solicitud de Tratamiento</DialogTitle>
          <DialogDescription>
            Por favor llene el siguiente formulario para solicitar el tratamiento medico que desee
          </DialogDescription>
        </DialogHeader>
        <p>
          Llenar este formulario es importante porque le permite a los especialistas hacer una evaluación previa de su
          caso y emitir un criterio sobre sus posibilidades de tratamiento en Cuba.
        </p>
        Lea el siguiente contenido y apliquelo segun sea su caso
        <ul>
          <li>
            Para solicitudes de tratamiento contra el vitiligo, psoriasis y alopecia no necesita enviar resumen de su
            historia clínica, solo basta que usted haya sido diagnosticado por un especialistas, no necesita presentar
            documento alguno.
          </li>
          <li>
            Para las solicitudes de Programa de Cirugía Estética usted debe enviar una foto de frente y de perfil del
            área que desea tratarse, peso, estatura, si fuma.
          </li>
          <li>
            Para las solicitudes de atención a paciente con úlceras del pie en diabéticos, debe enviarnos una foto de
            las lesiones.
          </li>
          <li>
            Las solicitudes de Tratamiento para las adicciones se debe especificar si el paciente ingresa de forma
            voluntaria.
          </li>
        </ul>
        La evaluación de otros Programas Médicos requieren que usted nos envíe un resumen de su historia clínica
        actualizada y los resultados de exámenes médicos realizados con anterioridad. Si fuera necesario alguna
        información adicional se le solicitará oportunamente.
        <p>
          Si tiene alguna duda puede contactar con alguno de nuestros asesores +53 5 2730507 / +53 5 0136680 GRACIAS POR
          CONFIAR EN NOSOTROS
        </p>
        <DialogFooter>
          <Button type='submit'>Salir</Button>
          <Button type='submit'>Llenar Formulario</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
