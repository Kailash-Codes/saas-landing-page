import React from 'react'
import SectionContentContainer from './SectionContentContainer'
import SectionHeadingContainer from './SectionHeadingContainer'
import ValueContainer from './ValueContainer'

const SectionContainer = () => {
  return (
    <div className=' lg:px-28 md:px-20 px-5 py-10 bg-[#FAFBFF]'>
        <SectionHeadingContainer />
        <ValueContainer />
        <SectionContentContainer />
    </div>
  )
}

export default SectionContainer