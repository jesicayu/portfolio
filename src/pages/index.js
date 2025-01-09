import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import About  from '../components/About'
import Projects from '../components/Projects'
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
    <Projects/>
    <Skills/>
    <Contact/>
    <Footer/>
    </>
  )
}
