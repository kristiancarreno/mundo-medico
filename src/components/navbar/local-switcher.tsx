'use client'
import * as React from 'react'

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import SpainFlag from '../../../public/icons/spain-flag'
import UnitedKingDom from '../../../public/icons/united-kingdom-flag'
import FranceFlag from '../../../public/icons/france-flag'
import ItalyFlag from '../../../public/icons/italy-flag'
import PortugalFlag from '../../../public/icons/portugal-flag'
import { useI18NContext } from '@/locales'
import { useTranslationClient } from '@/locales/client'

const otherLocales = [
  {
    code: 'es',
    name: 'esp',
    icon: <SpainFlag />
  },
  {
    code: 'en',
    name: 'eng',
    icon: <UnitedKingDom />
  },
  {
    code: 'fr',
    name: 'fra',
    icon: <FranceFlag />
  },
  {
    code: 'it',
    name: 'ita',
    icon: <ItalyFlag />
  },
  {
    code: 'po',
    name: 'por',
    icon: <PortugalFlag />
  }
]

export function LocalSwitcher() {
  const { language: lang } = useI18NContext()
  const { onChangeLang } = useTranslationClient()
  React.useEffect(() => {
    console.log(lang)
  }, [lang])
  const currentLang = otherLocales.find((option) => option.code === lang) ?? otherLocales[0]

  const onHandleChangeLang = (newLang: string) => {
    onChangeLang(newLang)
  }

  return (
    <div className='hidden lg:flex'>
      <Select onValueChange={(value: string) => onHandleChangeLang(value)} defaultValue={currentLang.code}>
        <SelectTrigger>
          <SelectValue placeholder='Select a Language' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {otherLocales.map((locale) => (
              <SelectItem onClick={() => onHandleChangeLang(locale.code)} key={locale.code} value={locale.code}>
                <div className='flex items-center gap-2'>
                  {locale.name} {locale.icon}
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
