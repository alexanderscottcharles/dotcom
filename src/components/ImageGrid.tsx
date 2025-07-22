'use client'

import Image from 'next/image'

const ImageGrid = () => {
  const images = [
    '/AMTS.png',
    '/IDOLC.png',
   
  ]

  return (
    <div className="flex flex-wrap">
      {images.map((src, index) => (
        <div
          key={index}
          className="w-full md:w-1/4 p-2"
        >
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            width={500}
            height={500}
            className="w-full h-auto object-cover border-2 border-solid"
          />
        </div>
      ))}
    </div>
  )
}

export default ImageGrid
