import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

//React Icons
import {FaStar} from "react-icons/fa6";

import { Avatar } from 'flowbite-react';
import {MenProfile} from "../assets/Books/MenProfile.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* Text */}
                <div className='mt-7 '>
                    <p className='mb-5'>
                    The moment you step through the creaky wooden door, you're transported into a world of literary charm. The warm lighting, the aroma of fresh coffee from the in-store café, and the gentle hum of hushed conversations create an ambiance that feels like a literary embrace. 
                    </p>
                    <Avatar
                        alt='avatar of Sri'
                        img={MenProfile}
                        rounded
                        className='w-10 mb-4'
                    />
                    <h5 className='text-lg font-medium '>Mark Red</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* Text */}
                <div className='mt-7 '>
                    <p className='mb-5'>
                    The moment you step through the creaky wooden door, you're transported into a world of literary charm. The warm lighting, the aroma of fresh coffee from the in-store café, and the gentle hum of hushed conversations create an ambiance that feels like a literary embrace. 
                    </p>
                    <Avatar
                        alt='avatar of Sri'
                        img={MenProfile}
                        rounded
                        className='w-10 mb-4'
                    />
                    <h5 className='text-lg font-medium '>Mark Red</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* Text */}
                <div className='mt-7 '>
                    <p className='mb-5'>
                    The moment you step through the creaky wooden door, you're transported into a world of literary charm. The warm lighting, the aroma of fresh coffee from the in-store café, and the gentle hum of hushed conversations create an ambiance that feels like a literary embrace. 
                    </p>
                    <Avatar
                        alt='avatar of Sri'
                        img={MenProfile}
                        rounded
                        className='w-10 mb-4'
                    />
                    <h5 className='text-lg font-medium '>Mark Red</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* Text */}
                <div className='mt-7 '>
                    <p className='mb-5'>
                    The moment you step through the creaky wooden door, you're transported into a world of literary charm. The warm lighting, the aroma of fresh coffee from the in-store café, and the gentle hum of hushed conversations create an ambiance that feels like a literary embrace. 
                    </p>
                    <Avatar
                        alt='avatar of Sri'
                        img={MenProfile}
                        rounded
                        className='w-10 mb-4'
                    />
                    <h5 className='text-lg font-medium '>Mark Red</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* Text */}
                <div className='mt-7 '>
                    <p className='mb-5'>
                    The moment you step through the creaky wooden door, you're transported into a world of literary charm. The warm lighting, the aroma of fresh coffee from the in-store café, and the gentle hum of hushed conversations create an ambiance that feels like a literary embrace. 
                    </p>
                    <Avatar
                        alt='avatar of Sri'
                        img={MenProfile}
                        rounded
                        className='w-10 mb-4'
                    />
                    <h5 className='text-lg font-medium '>Mark Red</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default Review