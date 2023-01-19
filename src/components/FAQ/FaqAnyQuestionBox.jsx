import React from 'react'
import FaqHeading from './FaqHeading';
import SectionContentDesc from "../common/SectionContentDesc";
import DirectMail from './DirectMail';
import { FiMessageSquare } from 'react-icons/fi';


const FaqAnyQuestionBox = () => {
  return (
    <div className='flex lg:float-right bg-white md:w-[70%] md:float-right lg:w-[80%] rounded-xl h-full text-center gap-3 lg:gap-8 p-8 flex-col justify-center'>
        <div className='text-center flex justify-center' >
            <FiMessageSquare fill='black' size="50" />
        </div>
        <FaqHeading heading="Do you have more questions?" />
        <SectionContentDesc desc="End-to-end payments and financial management in a single solution. Meet the right platform to help realize." />
        <DirectMail />
    </div>
  )
}

export default FaqAnyQuestionBox