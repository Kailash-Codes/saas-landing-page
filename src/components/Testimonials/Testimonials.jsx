import React from 'react'
import Testimonial from './Testimonial'

const Testimonials = () => {
  return (
    <div className='grid grid-cols-1 gap-10 md:grid-cols-2 mt-5'>
        <Testimonial />
        <Testimonial />
    </div>
  )
}

export default Testimonials