'use client'

import React, {useState} from 'react'
import HamburgerMenu from './HamburgerMenu'
import Link from 'next/link'

const NavBar = () => {
  const [mobileNav, openMobileNav] = useState(false)
  return (
    <div>
        
      <div className="hidden md:block w-full">
  <div className="flex justify-between items-center px-8"> 

    <div className="p-8"> <p className="text-4xl hover:bg-gray-300 rounded-xl"> <Link href="/">Alexander Scott Charles</Link></p></div>
    <div className="flex space-x-8 p-8">
          <div><p className="text-4xl hover:bg-gray-300 rounded-xl"><Link href="/newsletter" > Newsletter</Link></p></div>
      <div><p className="text-4xl hover:bg-gray-300 rounded-xl"><Link href="/titles" > Titles</Link></p></div>
      <div><p className="text-4xl hover:bg-gray-300 rounded-xl"><Link href="/events"> Events</Link></p></div>
      <div><p className="text-4xl hover:bg-gray-300 rounded-xl"><Link href="/connect">Connect</Link></p></div>
      <div></div>
    </div>
  </div>
</div>

<div className="block w-full md:hidden">
  <div className="flex justify-between items-center px-4 py-2">
    <div>ASC</div>
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
