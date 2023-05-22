import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='scroll-smooth'>
      <Head />
      <body className='h-screen scrollbar-thin 
      scrollbar-thumb-custom-orange scrollbar-track-custom-orange/50'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
