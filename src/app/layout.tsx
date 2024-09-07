import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/navbar/nav-bar'
import Footer from '@/components/footer/footer'
import HeroBg from '@/components/hero-slide/hero-bg'
import { cookies } from 'next/headers'
import { cookieI18Name, fallbackLng } from '@/locales/lang'
import { I18NProvider } from '@/locales'
import WhatsAppButton from '@/components/ui/WhatsappButton'
import ServiceProviderSection from '@/components/service-provider/service-provider-section'
import ContactSection from '@/components/contact-us/contact-section'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cuba Mundo Médico',
  description: 'Pagina de Turismo Medico Cubana',
  icons: { icon: '/favicon.svg' }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const lng = cookies().get(cookieI18Name)?.value || fallbackLng

  return (
    <html className='overflow-y-hidden'>
      <body className={inter.className}>
        <I18NProvider {...{ lng }}>
          <NavBar />
          <WhatsAppButton />
          <main className='snap-y snap-mandatory overflow-y-scroll h-[calc(100vh-63px)]'>
            <div className='snap-always snap-center'>
              <HeroBg />
            </div>
            {children}
            <div className='snap-always snap-center  flex flex-col justify-center'>
              <ServiceProviderSection />
            </div>
            <div className='snap-always snap-center'>
              <Footer />
            </div>
          </main>
        </I18NProvider>
      </body>
    </html>
  )
}
