import React from 'react'

const BlogHeading = ({text}) => {
  return (
    <h1 className='text-[29px]
     font-black
     px-[1%]
     sm:px-0
     sm:text-start
     text-center
     
     lg:w-[90%]
     my-4
     '
     >{text}</h1>
  )
}

export default BlogHeading