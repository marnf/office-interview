import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import image2 from "../assets/pic2.png"
import CountShower from './CountShower';


const Banner = () => {
    return (
        <div className='w-full bg-blue-200'>
            <div className='md:flex items-center m-auto justify-center '>

                <div>
                    <h2>Explore a world of learning</h2>
                    <p>unlock your potential with top universities </p><br />
                    <p>worldwide</p>
                    <button className='border rounded bg-blue-600 p-3'>create an account <FaArrowRight /></button>
                </div>
                <div>
                    <img src={image2} alt="" />
                </div>

            </div>
           <CountShower></CountShower>
        </div>
    );
};

export default Banner;