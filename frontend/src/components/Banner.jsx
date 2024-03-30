import React from 'react'
import BannerCard from '../Home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
        {/* Left Side */}
        <div className='md:w-1/2 space-y-8'>
          <h2 className='text-4xl font-bold leading-snug text-B'>Buy Books <span className='text-violet-700'>for the Best Prices</span><br />Learn<span className='text-violet-700'> from Your Books</span><br /> Sell Your Books <span className='text-violet-700'>for the Best Prices</span></h2>
          <p>Explore a world of knowledge with our Buy Books platform, where avid readers can discover a diverse collection of titles. Elevate your understanding through our Learn Books feature, providing insightful resources for personal and academic growth. Join our Sell Books community to share your literary treasures and contribute to the cycle of knowledge exchange.</p>
          <div>
            <input type="search" name="search" id="search" placeholder='Search a Book' className='py-2 px-2 w-80 rounded-s-sm outline-none'/>
            <button className='bg-violet-700  px-6 py-2 text-white font-medium hover:bg-violet-900 transition-all ease-in duration-150'>Search</button>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <BannerCard></BannerCard>
        </div>
      </div>
    </div>
  )
}

export default Banner