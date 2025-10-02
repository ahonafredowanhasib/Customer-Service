import React from 'react'
import Xpng from '../assets/x.png'
import Fbpng from '../assets/fb.png'
import Mailpng from '../assets/mail.png'
import LinkdinPng from '../assets/linkdin.png'
const Footer = () => {
    return (
        <section className='bg-[#1E1E1E] text-white mt-7'>

            <div className='text-center grid grid-cols-1 md:flex md:justify-around md:p-7 border-b-2 border-gray-300 md:max-w-[1320px] md:mx-auto'>

                <div className='w-[350px] h-[200px] sm:mt-7 sm:mx-auto '>
                    <h1 className='font-bold text-2xl mb-2'>CS — Ticket System</h1>
                    <p className=''>All communication with the user and any internal notes about the issue are logged within the ticket's history. This creates a transparent record for both the user and the support team. Once the issue is resolved and confirmed by the user, the ticket is closed and archived for future reference.</p>
                </div>

                <div className='sm:mt-5'>
                    <h2 className='font-bold text-2xl mb-2'>Company</h2>
                    <ul>
                        <li className='mb-2'>
                            <a href="">
                                About Us
                            </a>
                        </li>
                        <li className='mb-2'>
                            <a href="">
                                Our Mission
                            </a>
                        </li>
                        <li className='mb-2'>
                            <a href="">
                                Contact Saled
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className='font-bold text-2xl mb-2 sm:mt-5'>Services</h2>
                    <ul>
                        <li className='mb-2'>
                            <a href="">
                                Products & Services
                            </a>
                        </li>
                        <li className='mb-2'>
                            <a href="">
                                Customer Stories
                            </a>
                        </li>
                        <li className='mb-2'>
                            <a href="">
                                Download Apps
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className='font-bold text-2xl mb-2 sm:mt-5'>Information</h2>
                    <ul>
                        <li className='mb-2'>
                            <a href="">
                                Privacy Policy
                            </a>
                        </li>
                        <li className='mb-2'>
                            <a href="">
                                Terms & Conditions
                            </a>
                        </li>
                        <li className='mb-2'>
                            <a href="">
                                Join Us

                            </a>
                        </li>
                    </ul>
                </div>

                <div className='h-[200px] sm:mx-auto sm:mb-2'>

                    <h2 className='font-bold text-2xl mb-4 sm:mt-5'>Social Links</h2>
                    <ul className=''>
                        <li className='flex gap-1 mb-2'>
                            <img src={Xpng} alt="" />
                            <a href="">@CS—Ticket System</a>
                        </li>
                        <li className='flex gap-1 mb-2'>
                            <img src={Fbpng} alt="" />
                            <a href="">@CS—Ticket System</a>
                        </li>
                        <li className='flex gap-1 mb-2'>
                            <img src={LinkdinPng} alt="" />
                            <a href="">@CS—Ticket System</a>
                        </li>
                        <li className='flex gap-1 mb-2'>
                            <img src={Mailpng} alt="" />
                            <a href=""> support@cst.com</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='text-center p-7'>
                <p>© 2025 CS — Ticket System. All rights reserved.</p>
            </div>
        </section>
    )
}

export default Footer
