'use client'

import React from 'react'
import Logo from '../../../public/icons/logo'
import Link from 'next/link'
import SearchBar from './search-bar'
import SideBar from './side-bar'
import { Button } from '../ui/button'
import { LocalSwitcher } from './local-switcher'
import { useTranslationClient } from '@/locales/client'

function NavBar() {
  const { t } = useTranslationClient()
  return (
    <div className='flex sticky top-0 z-[100] bg-white w-full items-center justify-between px-8 py-4 h-[63px] shadow-lg'>
      <Link href={'/'}>
        <Logo width={150} height={54} />
      </Link>
      <div className='flex items-center w-1/2 justify-end lg:justify-between gap-2'>
        <div className='hidden lg:flex'>
          <Button className='border-primary-100 border-2 rounded-3xl bg-primary-100 hover:bg-primary-50 duration-300 text-white'>
            {t('general.home')}
          </Button>
        </div>
        <LocalSwitcher />
        <SearchBar />
        <SideBar />
      </div>
    </div>
  )
}

export default NavBar
