import React from 'react'
import FooterHeading from '../common/FooterHeading'
import NavList from '../common/NavList';
const lists = [
    {
        link:"Proposal template"
    },
    {
        link:"Invoice template"
    },
    {
        link:"Tutorial"
    },
    {
        link:"How to write a contract"
    },
]

const ResourceContainer = () => {
  return (
    <div className='lg:col-span-1'>
        <FooterHeading heading="Resources" />
        {lists.map((link)=><NavList item={link.link} />)} 
    </div>
  )
}

export default ResourceContainer