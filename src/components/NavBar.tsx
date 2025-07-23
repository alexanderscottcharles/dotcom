'use client'

import React, {useState} from 'react'
import HamburgerMenu from './HamburgerMenu'
import Link from 'next/link'
import Signature from './Signature'
import Image from 'next/image'

const NavBar = () => {
  const [mobileNav, openMobileNav] = useState(false)
  return (
    
        <div>
      <div className="hidden md:block w-full">
 <div className="flex justify-between items-start p-8">

  <Link href="/">
    <div className="hover:bg-gray-300 rounded-xl">
      <Signature />
    </div>
  </Link>

 
  <div className="flex items-baseline space-x-8">
    <Link href="/newsletter">
      <Image src="/newsletter.png" width={190} height={25} alt="Newsletter" className="hover:bg-gray-300 rounded-xl"/>
    </Link>

    <Link href="/events">
      <Image src="/events.png" width={115} height={25} alt="Events" className="hover:bg-gray-300 rounded-xl" />
    </Link>

    <Link href="/titles">
      <Image src="/titles.png" width={100} height={25} alt="Titles" className="hover:bg-gray-300 rounded-xl" />
    </Link>

    <Link href="/connect">
      <Image src="/socialmedia.png" width={225} height={25} alt="Social Media" className="hover:bg-gray-300 rounded-xl" />
    </Link>
  </div>
</div>
</div>


<div className="block w-full md:hidden">
  <div className="flex justify-between items-center px-4 ">
<div className="flex items-center h-24">
  <Image
    src="/signature-static.png"
    width={200}
    height={200}
    alt="signature"
    className="hover:bg-gray-300"
  />
</div>
    <div className="hover:bg-gray-300" onClick={() => openMobileNav(prev => !prev)}>
      <HamburgerMenu />
    </div>
  </div>
  
  <div className={mobileNav ? 'block' : 'hidden'}>
    <ul>
       <li><Link href="/newsletter" onClick={() => openMobileNav(false)}><p className="text-center text-2xl hover:bg-gray-300">Newsletter</p></Link></li>
    <li><Link href="/titles" onClick={() => openMobileNav(false)}><p className="text-center text-2xl hover:bg-gray-300">Titles</p></Link></li>
    <li><Link href="/events" onClick={() => openMobileNav(false)}><p className="text-center text-2xl hover:bg-gray-300">Events</p></Link></li>
   <li> <Link href="/connect" onClick={() => openMobileNav(false)}><p className="text-center text-2xl hover:bg-gray-300">Connect</p></Link> </li></ul>
  </div>
</div>
</div>

  )
}

export default NavBar
