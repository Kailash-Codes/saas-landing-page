import React from 'react'

const DeclarerPhoto = ({src}) => {
  return (
    <div className='flex justify-center w-full'>
      <img src={src} className="
      rounded-[100%]
      sm:rounded-none
      sm:w-screen
      h-[250px]
      w-[250px]
      md:w-[250px]
      md:h-[250px]
      md:rounded-[100%]
      lg:rounded-none
      lg:w-[65vw]
      " 
        alt="DeclarerPhoto"/>
    </div>
  )
}

export default DeclarerPhoto;