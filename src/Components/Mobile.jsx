import React from 'react';
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { SiAppstore } from "react-icons/si";
import mobilePic from '../assets/mobile.jpg'


const Mobile = () => {
    return (
        <div className=' container md:flex items-center justify-around m-auto md:m-auto gap-5'>
            <div className=''>
                <div className='p-4 text-center'>
                    <h2 className='text-3xl '>Download Our Mobile App</h2>
                    <p>study abroad guidance at your Fingertips</p>
                </div>
                <div className='flex gap-4 ml-3 justify-center'>
                    <button className='bg-blue-400 p-4 rounded flex items-center gap-3'>
                        <div>
                            <IoLogoGooglePlaystore size='30' />
                        </div>
                        <div>
                            play store
                        </div>
                    </button>
                    <button className='bg-blue-400 p-4 rounded flex items-center gap-3'>
                        <div>
                            <SiAppstore size='30' />
                        </div>
                        <div>
                            Google play
                        </div>
                    </button>
                </div>
            </div>
            <div>
                <img src={mobilePic} alt="" />
            </div>
        </div>
    );
};

export default Mobile;