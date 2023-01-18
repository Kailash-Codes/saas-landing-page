import React from 'react';
import BoxDesc from './BoxDesc';
import BoxHeading from './BoxHeading';
import BoxPhoto from './BoxPhoto';

const Box = ({src,heading,desc}) => {
  return (
    <div className='bg-[#FFFFFF] py-5 px-5 pr-10 rounded-xl'>
        {(src) ? <BoxPhoto src={src} alt=""/> : null}
        <BoxHeading heading={heading} />
        <BoxDesc desc={desc} />
    </div>
  )
}

export default Box