import '@/styles/globals.css'
import { Archivo, Archivo_Narrow } from 'next/font/google'

const archivo = Archivo({
  weight: ['200','500','900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-archivo'
})

export default function App({ Component, pageProps }) {
  return (
    
  <main className={`${archivo.variable} font-sans `}>
  <Component {...pageProps} />
  </main>
  )
}
