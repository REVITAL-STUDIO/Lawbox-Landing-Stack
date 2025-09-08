'use client'

import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import { Pathway_Extreme } from 'next/font/google'
import { useEffect, useRef } from 'react'
import Banner from './components/Banner'
import CTABanner from './components/CTABanner'
import Electric from './components/electric'
import Faq from './components/Faq'
import Features from './components/Features'
import Footer from './components/footer'
import Hero from './components/hero'
import Nav from './components/nav'

const pathwayExtreme = Pathway_Extreme({
  subsets: ['latin'],
  weight: ['100', '400', '500', '600'],
})

export default function Home() {
  const containerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // v5: no `el`, no `smooth` option
    const scroll = new LocomotiveScroll()

    return () => scroll.destroy()
  }, [])

  return (
    <section
      className={`bg-[#1a1a1a] min-h-screen ${pathwayExtreme.className}`}
    >
      <Electric />

      <main ref={containerRef} data-scroll-container className="relative z-20">
        <Nav />
        <Hero />
        <CTABanner />
        <Features />
        <Banner />
        <Faq />
        <Footer />
      </main>
    </section>
  )
}
