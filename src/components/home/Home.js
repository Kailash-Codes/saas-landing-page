import React from 'react';
import HeroContainer from './HeroContainer';
import Navbar from './Navbar';
const Home = () => {
  return (
    <div className='pt-5 lg:px-28 md:px-5 px-3 min-h-screen min-h-screen min-w-screen bg-gradient-to-r to-[#62BADA] from-[#C9E7F2]'>
        <Navbar />
        <HeroContainer />
    </div>
  )
}

export default Home