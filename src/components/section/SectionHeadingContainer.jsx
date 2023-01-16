import React from 'react'
import SectionHeading from './SectionHeading';
import SectionTestimonials from './SectionTestimonials';

const SectionHeadingContainer = () => {
  return (
    <div className='flex flex-col items-center justify-center sm:flex-row'>
      <SectionHeading />
      <SectionTestimonials />
    </div>
  )
}

export default SectionHeadingContainer;