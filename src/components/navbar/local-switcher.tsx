import * as React from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import SpainFlag from '../../../public/icons/spain-flag'
import UnitedKingDom from '../../../public/icons/united-kingdom-flag'
import FranceFlag from '../../../public/icons/france-flag'
import ItalyFlag from '../../../public/icons/italy-flag'
import PortugalFlag from '../../../public/icons/portugal-flag'

export function LocalSwitcher() {
  return (
    <div className='hidden lg:flex'>
      <Select defaultValue='apple'>
        <SelectTrigger>
          <SelectValue placeholder='Select a Language' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem className='flex' value='apple'>
              <div className='flex items-center gap-2'>
                esp <SpainFlag />
              </div>
            </SelectItem>
            <SelectItem className='flex' value='banana'>
              <div className='flex items-center gap-2'>
                eng <UnitedKingDom />
              </div>
            </SelectItem>
            <SelectItem className='flex' value='blueberry'>
              <div className='flex items-center gap-2'>
                fra <FranceFlag />
              </div>
            </SelectItem>
            <SelectItem value='grapes'>
              <div className='flex items-center gap-2'>
                ita
                <ItalyFlag />
              </div>
            </SelectItem>
            <SelectItem className='flex' value='pineapple'>
              <div className='flex items-center gap-2'>
                por <PortugalFlag />
              </div>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
