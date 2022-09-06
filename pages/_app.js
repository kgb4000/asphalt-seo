import { useState } from 'react'
import '../styles/globals.scss'
import SEO from '../next-seo.config'
import { DefaultSeo } from 'next-seo'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import Sidebar from '../components/Sidebar'

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <DefaultSeo {...SEO} />
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
