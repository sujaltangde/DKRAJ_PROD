import React from 'react';
import { Link } from 'react-router-dom';

export const NewCollectionJewelry = () => {
    return (
        <div className='relative overflow-hidden'>
            {/* Video Background */}
            <video autoPlay loop muted className='absolute inset-0 w-full h-full object-cover z-0'>
                <source src="/assets/beach.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay to darken the video */}
            <div className='absolute inset-0 bg-black opacity-10 z-5'></div>

            <div className='relative z-10 my-6 bg-none bg-opacity-90 md:px-16 px-8 py-8 '>
                <div className="md:mb-10 mb-5 md:pl-8 pl-4 text-center">
                    <p className="md:text-4xl text-xl font-semibold text-white">New Collection Jewelry</p>
                    <p className="mt-2 md:text-base text-sm text-white">
                        Discover the best of the best jewelleries of dkraj
                    </p>
                </div>

                <div className='grid md:grid-cols-2 grid-cols-1 md:gap-1 gap-6 md:px-16'>
                    <div className='flex justify-center'>
                        <img src="/assets/images/featured2.jpg" className='md:h-[24em] h-[16em] rounded-sm' alt="" />
                    </div>
                    <div className='flex flex-col items-center md:pt-14 pt-3'>
                        <p className='font-semibold text-white text-left md:w-10/12 md:text-3xl text-2xl'>A Stylish Ring</p>
                        <div className='border-t border-gray-800 w-10/12 mt-3'></div>
                        <p className='  md:px-12 text-base text-white mt-4'>This exquisite earring is the perfect blend of elegance and modern design. Its intricate craftsmanship ensures a timeless appeal. Whether you're dressing up for a special event or adding a touch of sophistication to your everyday look, this earring is an ideal choice.</p>
                        <div className='flex items-center justify-start w-full md:px-12'>
                            <Link to="/shop" className='bg-black mt-8 text-sm border border-black text-white  px-20 py-3'>
                                Know More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
