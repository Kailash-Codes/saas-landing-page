import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center md:justify-between flex-wrap mt-4 py-3'> 
        <div className="navbar-brand text-xl font-bold"><a href="#" >AR SHAKIR</a></div>
        <div className="nav-links w-full md:w-auto ">
            <ul className='gap-5 md:flex'>
                <li><a href="#">Product</a></li>
                <li><a href="#">Template</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Pricing</a></li>
            </ul>
        </div>
        <div className="button-group text-black gap-3 flex block md:w-auto w-full ">
            <button className='px-3 py-2 hover:bg-[#4f46ba] hover:text-white'>Sign in</button>
            <button className='btn px-3 py-2 text-white bg-[#4F46BA]'>Start free</button>
        </div>
    </div>
  )
}

export default Navbar;