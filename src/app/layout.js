
import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cookie web app',
  description: 'Join us on our blog journey where we share informative and engaging content on various subjects. From how-tos to deep dives, our articles have you covered.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className='container' >{children}</main>
        <Footer />
      </body>
    </html>
  )
}
