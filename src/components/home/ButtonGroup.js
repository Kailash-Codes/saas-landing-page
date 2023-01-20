import React from 'react'
import SeeVideo from './SeeVideo'
import StartButton from './StartButton'

const ButtonGroup = () => {
  return (
    <div className='mt-4 home-btn items-center justify-center sm:justify-start flex gap-10'>
        <StartButton />
        <SeeVideo />
    </div>
  )
}

export default ButtonGroup