import React from 'react';
import check from '../../static/images/section-contents/check.png';

const SectionRightCheck = (props) => {
  return (
    <div className='py-2'>
        <img src={check} className="inline h-[15px]" alt="image"/>&nbsp;
        <span>{props.text}</span>
    </div>
  )
}

export default SectionRightCheck