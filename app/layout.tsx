import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/modals/RegisterModal'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'
import ToasterProvider from './providers/ToasterProvider'
import LoginModal from './components/modals/LoginModal'

export const metadata = {
  title: 'Telehome',
  description: 'Airbnb clone',
}

const font = Nunito({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <RegisterModal />
          <LoginModal />
          <Navbar />
          <ToasterProvider />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
