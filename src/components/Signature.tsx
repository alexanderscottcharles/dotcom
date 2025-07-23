'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Signature() {
  const [showStatic, setShowStatic] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowStatic(true)
    }, 3810) // 3.81 seconds

    return () => clearTimeout(timeout)
  }, [])

  return (
    <Image
      src={showStatic ? '/signature-static.png' : '/signature.gif'}
      alt="Animated Signature"
      width={512}
      height={87}
      priority
    />
  )
}
