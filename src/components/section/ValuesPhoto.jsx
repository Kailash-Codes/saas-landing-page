import React from 'react'

const ValuesPhoto = (props) => {
  return (
    <div className='flex justify-center'>
        <img src={props.photo} />
    </div>
  )
}

export default ValuesPhoto;