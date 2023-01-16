import React from 'react'
import SectionHeadingContainer from './SectionHeadingContainer'
import ValueContainer from './ValueContainer'

const SectionContainer = () => {
  return (
    <div className='lg:px-28 px-5 my-10'>
        <SectionHeadingContainer />
        <ValueContainer />
    </div>
  )
}

export default SectionContainer