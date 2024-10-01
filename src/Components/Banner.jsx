import React, { useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import image2 from "../assets/pic2.png"
import CountShower from './CountShower';


const Banner = () => {


    useEffect(() => {
        const moveObject = (id, animationClass) => {
            const element = document.getElementById(id);
            element.classList.add(animationClass);

        };

        moveObject("banner-picture", "animate-move-left");
    }, []);


    return (
        <div className='w-full bg-blue-100 m-auto'>
            <div className='md:flex items-center m-auto justify-center gap-5'>

                <div className=''>
                    <h2 className='text-3xl text-gray-700'>Explore a world of learning</h2>
                    <p >unlock your potential with top universities </p>
                    <p>worldwide</p>
                    <button className='border rounded flex items-center justify-center gap-3 bg-blue-600 p-3'>create an account <FaArrowRight /></button>
                </div>
                <div id='banner-picture'>
                    <img src={image2} alt="" />
                </div>

            </div>
           <CountShower></CountShower>
        </div>
    );
};

export default Banner;