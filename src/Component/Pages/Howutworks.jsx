import React from 'react';
import { FaSearch, FaMoon } from 'react-icons/fa';
import { LiaCarSideSolid } from "react-icons/lia";
import { LiaCheckSolid } from "react-icons/lia";
// import { FaStar } from "react-icons/fa";
import bg2 from "../../assets/bg2.jpg"
import "./Howitworks.css"

const Howutworks = () => {
    return (
        <>
            <div
                className=" h-[900px] w-full bg-cover bg-center flex items-end justify-start pl-[54px] pb-[25px]"
                style={{
                    backgroundImage: `url(${bg2})`,
                }}
            >
                {/* Styled Button */}
                <button
                    className="flex flex-col items-start justify-center gap-[10px] text-white text-lg font-semibold"
                    style={{
                        width: '513px',
                        height: '334px',
                        padding: '25px 54px',
                        borderRadius: '54px',
                        backgroundColor: '#468F9D',
                    }}
                >
                    <span className='text-left text-xl'>Grow Your campground or <br /> glamping business</span>
                    <span className="text-sm text-left">Host our community of good- natured <br />
                        RVers and campers at your property. <br />
                        Campground, or RV resort.F</span>

                    {/* Small Button Inside */}
                    <button className='Button'>
                        Start Hosting
                    </button>
                </button>
            </div>
            <div className='card'>
                <div className='text-center mt-15 mb-10 text-3xl'>
                    <h1>How It Works</h1>
                </div>
                <div className=" min-h-screen flex items-center justify-center p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full ">

                        {/* Card 1 */}
                        <div className="bg-white rounded-xl shadow-md p-6 text-center flex items-center justify-cente">
                            <FaSearch className="text-black text-4xl mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Search Frusted land</h3>
                            <p className="text-gray-600">Locate Verified, off-gird stays.</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-xl shadow-md p-6 text-center">
                            <LiaCarSideSolid className="text-black text-4xl mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Park your RV Safely</h3>
                            <p className="text-gray-600">Reserve Your Spot and travel.</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-xl shadow-md p-6 text-center">
                            <FaMoon className="text-black text-4xl mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Sleep under the stars</h3>
                            <p className="text-gray-600">Retax in a secure environment.</p>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <h1 className='flex justify-center items-center mt-10 mb-10 text-4xl font-bold'>Why RVnBo?</h1>
                <div className="flex justify-center items-center gap-5 h-48 max-w-10xl mx-20">
                    <div className="flex-1 p-4  h-full flex flex-col gap-10 justify-center text-left text-3xl ml-8">
                        <h2 className='flex'><LiaCheckSolid className='text-4xl mr-3' />Verified landowners</h2>
                        <h2 className='flex'><LiaCheckSolid className='text-4xl mr-3' />Stay off-grid or with lice</h2>
                    </div>
                    <div className="flex-1 p-4  h-full flex flex-col gap-10 justify-center text-left text-3xl">
                        <h2 className='flex'><LiaCheckSolid className='text-4xl mr-3' />Secure GPS navigation</h2>
                        <h2 className='flex'><LiaCheckSolid className='text-4xl mr-3' />Affordable ad with hookups</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Howutworks;