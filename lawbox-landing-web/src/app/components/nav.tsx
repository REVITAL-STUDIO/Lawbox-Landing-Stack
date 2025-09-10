'use client'

import gsap from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Contact from './Contact'
import WaitlistModal from './WaitlistModal'

export default function Nav() {
  const [wait, setWait] = useState(false)
  const [contact, setContact] = useState(false)

  const openWaitList = () => {
    setWait((e) => !e)
  }

  const openContactPage = () => {
    setContact((e) => !e)
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.nav',
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: 'power1.in', z: 100 },
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="nav flex items-center justify-between pt-8 px-8 ">
      <Link href="/" className="z-40 w-fit h-fit ">
        <Image
          src="/case0.png"
          alt="lawbox"
          width={100}
          height={100}
          className=" w-full h-full object-contain"
        />
      </Link>
      <div className="flex text-white gap-x-8 text-xs">
        <button
          onClick={openWaitList}
          className="uppercase px-6 py-3 h-fit bg-black cursor-pointer rounded-full shadow-lg [filter:drop-shadow(0_0_8px_#FF5E00)]"
        >
          Reserve
        </button>
        <button
          onClick={openContactPage}
          className="text-black uppercase px-6 py-3 h-fit cursor-pointer bg-white rounded-full shadow-lg hidden xl:block
           [filter:drop-shadow(0_0_8px_#FF5E00)]"
        >
          Contact Us
        </button>
      </div>

      <WaitlistModal wait={wait} openList={openWaitList} />
      <Contact contact={contact} openContact={openContactPage} />
    </section>
  )
}
