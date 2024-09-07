'use client'

import React from 'react'
import Logo from '../../../public/icons/logo'
import Link from 'next/link'
import SearchBar from './search-bar'
import SideBar from './side-bar'
import { LocalSwitcher } from './local-switcher'
import { useTranslationClient } from '@/locales/client'
import { ChartBar, HomeIcon, Hospital, Info } from 'lucide-react'

function NavBar() {
  const { t } = useTranslationClient()
  return (
    <div className='flex sticky top-0 z-[100] bg-white w-full items-center justify-between px-8 py-4 h-[63px] shadow-lg'>
      <Link href={'/'}>
        <Logo width={150} height={54} />
      </Link>
      <div className='hidden lg:flex items-center gap-10'>
        <Link href={'/'} className='flex text-sm gap-1 text-primary-100 hover:text-teal-700 duration-300'>
          <HomeIcon size={20} />
          {t('general.home')}
        </Link>
        <Link href={'/hospitals'} className='flex text-sm gap-1 text-primary-100 hover:text-teal-700 duration-300'>
          <Hospital size={20} />
          {t('general.hospitals')}
        </Link>{' '}
        <Link href={'/'} className='flex text-sm gap-1 text-primary-100 hover:text-teal-700 duration-300'>
          <Info size={20} />
          {t('general.about_us')}
        </Link>
        <Link href={'/'} className='flex text-sm gap-1 text-primary-100 hover:text-teal-700 duration-300'>
          <ChartBar size={20} />
          {t('general.programs')}
        </Link>
      </div>
      <div className='flex items-center  justify-end  gap-2'>
        <LocalSwitcher />
        <SearchBar />
        <SideBar />
      </div>
    </div>
  )
}

export default NavBar
