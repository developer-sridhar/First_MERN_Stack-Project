import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

//React Icons
import {FaStar} from "react-icons/fa6";

import { Avatar } from 'flowbite-react';
import MenProfileImage from '../assets/Books/MenProfile.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-5 leading-snug'>Our Happy Customers</h2>
        <div className=''> 
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
        className="mySwiper bottom-"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6 text-base text-black'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* Text */}
                <div className='mt-7 '>
                    <p className='mb-5'>
                    "Great Selection and Easy Checkout Process" I love shopping on this book store platform! They have a wide variety of books to choose from, and the checkout process is quick and straightforward. Highly recommended!
                    </p>
                    <div className='flex'>
                    <Avatar
                        alt='avatar of Sri'
                        img="https://media.licdn.com/dms/image/D5603AQFrBHPJ752a2g/profile-displayphoto-shrink_100_100/0/1710606299907?e=1717027200&v=beta&t=DCvA8Z0xQLVCL-X2bx861TwZQJuuU9wEkpM2ug8uNQ4"
                        rounded
                        className='w-14 mb-4 mt-2'
                    />
                    <div className='flex flex-col'>
                        <h5 className='text-lg font-base text-orange-500 '>Sridhar C</h5>
                        <p className='text-sm text-gray-500'>Chennai, India</p>
                    </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6 text-base text-black'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* Text */}
                <div className='mt-7 '>
                    <p className='mb-5'>
                    "Fast Shipping and Excellent Customer Service", I ordered a few books from this store, and I was impressed by how quickly they arrived. The customer service team was also very helpful when I had a question about my order. I'll definitely be shopping here again!                    </p>
                    <div className='flex'>
                    <Avatar
                        alt='avatar of Sri'
                        img="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        rounded
                        className='w-14 mb-4 mt-2'
                    />
                    <div className='flex flex-col'>
                        <h5 className='text-lg font-base text-orange-500 '>Yuvaraj J</h5>
                        <p className='text-sm text-gray-500'>Chennai, India</p>
                    </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6 text-base text-black'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* Text */}
                <div className='mt-7 '>
                    <p className='mb-5'>
                    "User-Friendly Interface and Smooth Navigation",Navigating through this book store website was a breeze! The interface is clean and intuitive, making it easy to find exactly what I was looking for. A fantastic online shopping experience.                    </p>
                    <div className='flex'>
                    <Avatar
                        alt='avatar of Sri'
                        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm7aAvSj7skLyw6VjPqWl0SOMU1Y8zms3Zyv6SCWdzn8BASC4s87yqAVeLdIDdj9g8DII&usqp=CAU"
                        rounded
                        className='w-14 mb-4 mt-2'
                    />
                    <div className='flex flex-col'>
                        <h5 className='text-lg font-base text-orange-500 '>Selvam S</h5>
                        <p className='text-sm text-gray-500'>Chennai, India</p>
                    </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6 text-base text-black'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* Text */}
                <div className='mt-7 '>
                    <p className='mb-5'>
                    "High-Quality Books at Affordable Prices", I've purchased several books from this platform, and I'm always impressed by the quality of the books and the reasonable prices. It's great to find a store that offers both affordability and quality.                    </p>
                    <div className='flex'>
                    <Avatar
                        alt='avatar of Sri'
                        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2SOsP71QCLCHotp4HRB12DumTYxAZMoKUo3L2mUSAk0Z1e6acrnQ949fURDfJKs5OwKs&usqp=CAU"
                        rounded
                        className='w-14 mb-4 mt-2'
                    />
                    <div className='flex flex-col'>
                        <h5 className='text-lg font-base text-orange-500 '>Lokesh N</h5>
                        <p className='text-sm text-gray-500'>Chennai, India</p>
                    </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6 text-base text-black'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* Text */}
                <div className='mt-7 '>
                    <p className='mb-5'>
                    "Convenient Wishlist Feature", I love being able to save books to my wishlist for later. It's a convenient way to keep track of the books I want to purchase in the future. This feature has saved me a lot of time and hassle.                    </p>
                    <div className='flex'>
                    <Avatar
                        alt='avatar of Sri'
                        img="https://rekhta.pc.cdn.bitgravity.com/Images/Shayar/Round/a-p-j-abdul-kalam.png"
                        rounded
                        className='w-14 mb-4 mt-2'
                    />
                    <div className='flex flex-col'>
                        <h5 className='text-lg font-base text-orange-500 '>APJ Abdul Kalam</h5>
                        <p className='text-sm text-gray-500'>Ramanathapuram, India</p>
                    </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6 text-base text-black'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* Text */}
                <div className='mt-7 '>
                    <p className='mb-5'>
                    "Responsive Mobile Experience", I often shop on my phone, and I'm pleased with how well this book store's website functions on mobile devices. It's responsive and easy to use, which makes shopping on the go a breeze.                    </p>
                    <div className='flex'>
                    <Avatar
                        alt='avatar of Sri'
                        img="https://toppng.com/uploads/preview/elon-musk-elon-musk-the-greatest-lessons-through-the-inspiri-11563214364zc3a6ogfn3.png"
                        rounded
                        className='w-14 mb-4 mt-2'
                    />
                    <div className='flex flex-col'>
                        <h5 className='text-lg font-base text-orange-500 '>Elan Musk</h5>
                        <p className='text-sm text-gray-500'>Pretoria, South Africa</p>
                    </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6 text-base text-black'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* Text */}
                <div className='mt-7 '>
                    <p className='mb-5'>
                    "Informative Book Descriptions", The book descriptions on this platform are detailed and informative, which helps me make informed purchasing decisions. It's great to have all the information I need right at my fingertips                    </p>
                    <div className='flex'>
                    <Avatar
                        alt='avatar of iyappan'
                        img="https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
                        rounded
                        className='w-14 mb-4 mt-2'
                    />
                    <div className='flex flex-col'>
                        <h5 className='text-lg font-base text-orange-500 '>Iyappan</h5>
                        <p className='text-sm text-gray-500'>Chennai, India</p>
                    </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        </Swiper>
        </div>
    </div>
  )
}

export default Review