import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import About  from '../components/About'
import Work from '../components/Work'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
    <title>Jesica Yu | Fullstack Developer</title>
    </Head>
    <Navbar/>
    <Main/>
    <About/>
    <Work/>
    <Skills/>
    <Contact/>
    <Footer/>
    </>
  )
}
