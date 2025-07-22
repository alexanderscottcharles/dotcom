import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
        <div className="flex justify-around w-full px-4 py-2 bg-gray-100">
      <Link href="/PrivacyPolicy" className="hover:bg-white">Privacy Policy</Link>
      <Link href="/TermsandConditions" className="hover:bg-white ">Terms and Conditions</Link>
      <Link href="/Accessibility" className="hover:bg-white ">Accessibility</Link>
    </div>
    </div>
  )
}

export default Footer
