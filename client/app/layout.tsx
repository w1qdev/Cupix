import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'


export const metadata: Metadata = {
  title: 'Cupix messenger',
  description: 'Cupix messenger',
}

const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={montserrat.className} >{children}</body>
    </html>
  )
}
