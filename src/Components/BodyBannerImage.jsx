import React from 'react';
import PngImage1 from '../assets/vector1.png'
import PngImage2 from '../assets/vector2.png'
const BodyBannerImage = () => {
    return (
        <div className=' flex gap-[100px] max-w-[1330px] mx-auto '>

            <div className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] flex justify-center items-center relative rounded-xl h-[250px] w-[700px] overflow-hidden sm:ml-[15px]'>

                <img className='absolute left-0 top-0 h-full w-[300px]' src={PngImage1} alt="" />

                <div className='text-white text-center z-10'>
                    <h3 className='whitespace-nowrap text-[20px]' >In-Progress</h3>
                    <h1 className='font-bold text-[40px]'>0</h1>
                </div>

                <img className='absolute right-0 top-0 h-full w-[300px]' src={PngImage2} alt="" />
            </div>


            <div className='bg-gradient-to-r from-[#54CF6B] to-[#00827A] flex justify-center items-center relative rounded-xl h-[250px] w-[700px] overflow-hidden sm:mr-[15px]'>

                <img className='absolute left-0 top-0 h-full w-[300px]' src={PngImage1} alt="" />

                <div className='text-white text-center z-10'>
                    <h3 className='whitespace-nowrap text-[20px]' >Resolved</h3>
                    <h1 className='font-bold text-[40px]'>0</h1>
                </div>

                <img className='absolute right-0 top-0 h-full w-[300px]' src={PngImage2} alt="" />
            </div>

        </div>
    );
};

export default BodyBannerImage;