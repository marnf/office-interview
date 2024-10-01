import React from 'react';
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";



const Footer = () => {
    return (
        <div className='text-center container grid grid-cols-5 max-sm:grid-cols-2 gap-4 m-auto p-7 my-5'>
            <div className='px-4'>
                <p className='font-mono'>something</p>
                <ul>
                    <li>About us</li>
                    <li>Carrier</li>
                    <li>we are hiring</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className='px-4'>
                <p className='font-mono'>Quick Links</p>
                <ul>
                    <li>Activities</li>
                    <li>Events</li>
                    <li>News</li>
                </ul>
            </div>
            <div className='px-4'>
                <p className='font-mono'>Our info</p>
                <ul>
                    <li>About us</li>
                    <li>Carrier</li>
                    <li>we are hiring</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className='px-4'>
                <p className='font-mono'>Resource</p>
                <ul>
                    <li>About us</li>
                    <li>Carrier</li>
                    <li>we are hiring</li>
                    <li>Blog</li>
                </ul>

            </div>
            <div>
                <p className='font-mono'>Get in touch</p>
                <div className=''>
                    <div className='flex gap-2 items-center'><FaPhoneVolume />0188*******</div>
                    <div className='flex gap-2 items-center'><MdEmail /> someting@gmail.com</div>
                </div>
            </div>
        </div>

    );
};

export default Footer;