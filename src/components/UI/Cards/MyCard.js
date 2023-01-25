import Image from 'next/image'
import React from 'react'

const MyCard = ({img, children}) => {
  return (
    <div className='card_content'>
      <Image
        src={img}
        alt="Picture of the author"
        className="img_content thumbnail"
        width={200}
        height={300}
      />
      {children}
    </div>
  )
}

export default MyCard