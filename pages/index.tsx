import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Home from '@/components/Home'
import About from '@/components/About'
import Services from '@/components/Services'
import useSmoothScroll from '@/components/useSmoothScroll'
import Skills from '@/components/Skiils'
import Contact from '@/components/Contact'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'
import Down from '@/components/Down'


const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  // useSmoothScroll();
  return (
    <main className='text-white'>
      <header className={`border-b-4 border-lst sticky  bg-bg   top-0   z-50 `}>
        <Header />
      </header>
      
        <Home />
        <About />
        <Services />
        <Skills />
        <Projects/>
        <Contact />
        <Footer/>
        <Down/>
    
    </main>
  )
}
