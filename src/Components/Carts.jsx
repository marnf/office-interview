import React from 'react';
import { FaStar } from "react-icons/fa";


import yunus from '../assets/yunus.jpg'

const Carts = () => {
    return (
        <div className='container m-auto'>
            <h1 className='text-5xl text-center p-7'>Meet our top-class consultants</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-3 sm:gap-2 '>
            <div className='container m-auto flex shadow-2xl  gap-3'>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src={yunus}
                            alt="" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title text-start">
                            Dr.Mohammad yunus
                        </h2>
                        <p className='text-start'>new leader of bangladesh</p>
                        <div className="card-actions justify-center">
                            <FaStar color='yellow' size="20" />
                            <FaStar color='yellow' size="20" />
                            <FaStar color='yellow' size="20" />
                            <FaStar color='yellow' size="20" />
                            <FaStar size="20" />

                        </div>
                    </div>
                </div>

            </div>
            <div className='container m-auto flex shadow-2xl gap-3'>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src={yunus}
                            alt="" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title text-start">
                            Dr.Mohammad yunus
                        </h2>
                        <p className='text-start'>new leader of bangladesh</p>
                        <div className="card-actions justify-center">
                            <FaStar color='yellow' size="20" />
                            <FaStar color='yellow' size="20" />
                            <FaStar color='yellow' size="20" />
                            <FaStar color='yellow' size="20" />
                            <FaStar size="20" />

                        </div>
                    </div>
                </div>

            </div>
            <div className='container m-auto flex shadow-2xl gap-3'>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src={yunus}
                            alt="" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title text-start">
                            Dr.Mohammad yunus
                        </h2>
                        <p className='text-start'>new leader of bangladesh</p>
                        <div className="card-actions justify-center">
                            <FaStar color='yellow' size="20" />
                            <FaStar color='yellow' size="20" />
                            <FaStar color='yellow' size="20" />
                            <FaStar color='yellow' size="20" />
                            <FaStar size="20" />

                        </div>
                    </div>
                </div>

            </div>
            <div className='container m-auto flex shadow-2xl gap-3'>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src={yunus}
                            alt="" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title text-start">
                            Dr.Mohammad yunus
                        </h2>
                        <p className='text-start'>new leader of bangladesh</p>
                        <div className="card-actions justify-center">
                            <FaStar color='yellow' size="20" />
                            <FaStar color='yellow' size="20" />
                            <FaStar color='yellow' size="20" />
                            <FaStar color='yellow' size="20" />
                            <FaStar size="20" />

                        </div>
                    </div>
                </div>

            </div>
            </div>
        </div>
    );
};

export default Carts;