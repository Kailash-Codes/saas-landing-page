import React from 'react'
import play from '../../static/images/play.png';
const SeeVideo = () => {
  return (
    <span className='flex gap-3'>
    <span>
        <img src={play}/>
    </span>
        <button className='text-[#3734A9]'>See how it works</button>
    </span>
  )
}

export default SeeVideo