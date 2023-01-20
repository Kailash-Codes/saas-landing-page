import React from "react";

const FooterDesc = ({desc,type}) => {
    let className='';
    if(type==="small"){
        className='w-[90%] opacity-50';
    }
    else if(type==="big"){
        className='w-[100%] opacity-50';
    }
  return <p className={className}>{desc}</p>;
};

export default FooterDesc;
