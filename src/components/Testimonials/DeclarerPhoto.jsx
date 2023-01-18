import React from 'react'

const DeclarerPhoto = ({src}) => {
  return (
    <div>
      <img src={src} className="w-[100vw] lg:w-[800px] h-[250px]" alt="DeclarerPhoto"/>
    </div>
  )
}

export default DeclarerPhoto;