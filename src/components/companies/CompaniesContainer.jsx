import React from 'react'
import Company from './Company'
import Heading from './Heading'
import zeppelin from '../../static/images/companies/zeppelin.png';
import oracle from '../../static/images/companies/oracle.png';
import morpheus from '../../static/images/companies/morpheus.png';
import samsung from '../../static/images/companies/samsung.png';
import monday from '../../static/images/companies/monday.png';
import segment from '../../static/images/companies/segment.png';
import protonet from '../../static/images/companies/protonet.png';
const companyArr = [zeppelin,oracle,morpheus,samsung,monday,segment,protonet];


const CompaniesContainer = () => {
  return (
    <div className='bg-[#F5F6F8] py-5'>
        <Heading />
        <div className='flex gap-5 justify-center py-3 mt-4 px-10 items-center flex-wrap'>
        {companyArr.map((source,index)=><Company key={index} source={source}/>)}
        </div>
    </div>
  )
}

export default CompaniesContainer;