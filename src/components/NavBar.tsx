import React from 'react'
import HamburgerMenu from './HamburgerMenu'

const NavBar = () => {
  return (
    <div>
     

  
        
      <div className="hidden md:block w-full">
  <div className="flex justify-between items-center px-8"> 

    <div className="p-8"> <p className="text-4xl"> Alexander Scott Charles</p></div>


    <div className="flex space-x-8 p-8">
      <div><p className="text-4xl hover:bg-gray-300">Books</p></div>
      <div><p className="text-4xl hover:bg-gray-300">Film/TV</p></div>
      <div><p className="text-4xl hover:bg-gray-300">Social Media</p></div>
      <div></div>
    </div>
  </div>
</div>

      <div className="block w-full md:hidden">
        <div>ASC</div>
        <HamburgerMenu />
      </div>
    </div>
  )
}

export default NavBar
