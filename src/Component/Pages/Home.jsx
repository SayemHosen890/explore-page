import React from 'react';
import { Link } from 'react-router-dom';
import { FaCar, FaUser, FaCalendarAlt } from 'react-icons/fa';
import { Box, TextField, InputAdornment } from '@mui/material';
import { FaSearch, FaMoon } from 'react-icons/fa';
import { LiaCarSideSolid } from "react-icons/lia";
import { LiaCheckSolid } from "react-icons/lia";
import { FaStar } from "react-icons/fa";
import pic1 from "../../assets/pic1.jpg"
import pic2 from "../../assets/pic2.jpg"
import pic3 from "../../assets/pic3.jpg"
import pic4 from "../../assets/pic4.jpg"
import right from "../../assets/right.jpg"
import road from "../../assets/road.png"
import people1 from "../../assets/people1.png"
import people2 from "../../assets/people2.png"
import background1 from "../../assets/background1.jpg"
import "./Home.css"

const Home = () => {
    return (
        <>
            <div>
                <div
                    className="h-screen bg-cover bg-center flex items-center justify-start text-white"
                    style={{ backgroundImage: `url(${background1})` }}
                >
                    <div className="ml-35 mt-40 bg-opacity-500 p-8 rounded-xl">
                        <h1 className="text-8xl font-bold mb-4">Park Safely. Sleep Peacefully</h1>
                        <p className="text-4xl mb-6">Find secure off-grid stays anywhere</p>
                    </div>
                </div>
            </div>
            <div>
                <Box className="mx-20 -mt-32 relative z-10">
                    <Box
                        className="p-10  rounded-xl bg-white shadow-md"
                        component="form"
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 2,
                            justifyContent: 'space-around',
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            required
                            id="location"
                            label="Enter City or Location"
                            defaultValue="Pune, Maharashtra"
                            InputLabelProps={{ shrink: true, required: false }}
                            sx={{ width: '48ch', m: 1 }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <FaCar style={{ color: '#000' }} />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <TextField
                            required
                            id="check-in"
                            label="Check In"
                            defaultValue="Fri 12/2"
                            InputLabelProps={{ shrink: true, required: false }}
                            sx={{ width: '25ch', m: 1 }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <FaCalendarAlt style={{ color: '#000' }} />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <TextField
                            required
                            id="check-out"
                            label="Check Out"
                            defaultValue="Sun 12/4"
                            InputLabelProps={{ shrink: true, required: false }}
                            sx={{ width: '25ch', m: 1 }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <FaCalendarAlt style={{ color: '#000' }} />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <Box sx={{ m: 2 }}>
                            <button className="border border-gray-300 rounded-xl text-black px-4 py-2  font-bold">
                                2 Night
                            </button>
                        </Box>

                        <TextField
                            required
                            id="guests"
                            label="Rooms & Guests"
                            defaultValue="1 room, 2 guests"
                            InputLabelProps={{ shrink: true, required: false }}
                            sx={{ width: '25ch', m: 1 }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <FaUser style={{ color: '#000' }} />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <Box sx={{ width: '100%', mt: 4 }}>
                            <button
                                className="text-white py-3 rounded w-full"
                                style={{ backgroundColor: '#468F9D' }}
                            >
                                Submit
                            </button>
                        </Box>
                    </Box>
                </Box>
            </div>
            <div>
                <div className="w-full pl-30 pr-30 mt-20 mb-10">
                    <div className="flex w-full gap-6">
                        {/* Left Section */}
                        <div className="flex flex-col w-1/2 gap-6">
                            {/* Image + Text Block Combined */}
                            <div className="flex flex-col rounded-sm overflow-hidden border border-gray-200">
                                {/* Image Grid Block - no padding */}
                                <div className="h-80 w-full flex gap-2 bg-white">
                                    {/* Left 2 images - 25% width, full height, no padding */}
                                    <div className="flex flex-col gap-3 w-1/4 h-full">
                                        <img src={pic1} alt="Left 1" className="w-full h-1/2 object-cover" />
                                        <img src={pic2} alt="Left 2" className="w-full h-1/2 object-cover" />
                                    </div>
                                    {/* Center image - 50% width, full height */}
                                    <img src={pic1} alt="Center" className="w-1/2 h-full object-cover" />
                                    {/* Right 2 images - 25% width, full height, no padding */}
                                    <div className="flex flex-col gap-3 w-1/4 h-full">
                                        <img src={pic3} alt="Right 1" className="w-full h-1/2 object-cover " />
                                        <img src={pic4} alt="Right 2" className="w-full h-1/2 object-cover" />
                                    </div>
                                </div>
                                {/* Text + Button */}
                                <div className="bg-gray-100 px-6 py-6 flex flex-col justify-between h-48 rounded-b-lg" style={{ backgroundColor: '#468F9D' }}>
                                    <div>
                                        <h2 className="text-md font-semibold mb-2 text-white">Only On Travelel</h2>
                                        <p className="text-white font-2xl">Explore 120,000+ campsites you won’t find <br /> anywhere else</p>
                                    </div>
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-full w-fit self-end" style={{ backgroundColor: '#8AC197' }}>Book Now</button>
                                </div>
                            </div>
                        </div>
                        {/* Right Section */}
                        <div className="flex flex-col w-1/2 gap-6">
                            {/* Image + Text Block Combined */}
                            <div className="flex flex-col rounded-sm overflow-hidden border border-gray-200">
                                {/* Single Image */}
                                <img src={right} alt="Featured" className="h-80 w-full object-cover rounded-t-lg" />

                                {/* Text + Button */}
                                <div className="bg-gray-100 px-6 py-6 flex flex-col justify-between h-48 rounded-b-lg" style={{ backgroundColor: '#468F9D' }}>
                                    <div>
                                        <h2 className="text-md font-semibold mb-2 text-white">Fourth of July</h2>
                                        <p className="text-white font-2xl">Snag a last minute fourth of july campsite</p>
                                    </div>
                                    <button className=" text-white px-4 py-2 rounded-full w-fit self-end" style={{ backgroundColor: '#8AC197' }}>Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div
                    className="mr-30 ml-30 h-[700px] bg-cover bg-center flex items-end justify-start pl-[54px] pb-[25px] mb-15"
                    style={{
                        backgroundImage: `url(${pic4})`,
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
            </div>
            <div>
                <div className="flex justify-center items-center w-full mt-20 mb-10 h-full">
                    <img src={road} alt="Logo" className="w-full px-30" />
                </div>
            </div>
            <div className='Card'>
                <div className='text-center mt-15 mb-10 text-3xl font-bold'>
                    <h1>How It Works</h1>
                </div>
                <div className="flex items-center justify-center p-8">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-8xl w-full mx-20">

                        {/* Card 1 */}
                        <div className="bg-white rounded-xl shadow-xl p-6 text-center h-100 Bg">
                            <FaSearch className="text-black text-4xl mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Search Frusted land</h3>
                            <p className="text-gray-600">Locate Verified, off-gird stays.</p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-white rounded-xl shadow-xl p-6 text-center Bg">
                            <LiaCarSideSolid className="text-black text-4xl mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Park your RV Safely</h3>
                            <p className="text-gray-600">Reserve Your Spot and travel.</p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-white rounded-xl shadow-xl p-6 text-center Bg">
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
            <div>
                <div className='text-center text-5xl mt-9 pt-10 font-semibold'>
                    <p>Don’t just take our words</p>
                </div>
                <div className="flex gap-6 w-full p-40">

                    {/* Card 1 */}
                    <div className="flex w-1/2 p-4 items-center gap-4">
                        <img src={people1} alt="Logo" className="w-84 h-84 object-cover rounded" />
                        {/* <img
                            src="https://via.placeholder.com/100"
                            alt="Example 1"
                            className="w-24 h-24 object-cover rounded"
                        /> */}
                        <div className="flex-1 flex flex-col justify-between text-left h-full py-2">
                            {/* Star Row */}
                            <div className="flex gap-1 text-yellow-500">
                                <FaStar style={{ color: '#1E91B6' }} />
                                <FaStar style={{ color: '#1E91B6' }} />
                                <FaStar style={{ color: '#1E91B6' }} />
                                <FaStar style={{ color: '#1E91B6' }} />
                                <FaStar style={{ color: '#1E91B6' }} />
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold">"We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."</h3>

                            {/* Paragraph */}
                            <h3 className="text-lg font-semibold">Jenny Wilson</h3>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="flex w-1/2 p-4 items-center gap-4">
                        <img src={people2} alt="Logo" className="w-84 h-84 object-cover rounded" />
                        {/* <img
                            src="https://via.placeholder.com/100"
                            alt="Example 1"
                            className="w-24 h-24 object-cover rounded"
                        /> */}
                        <div className="flex-1 flex flex-col justify-between text-left h-full py-2">
                            {/* Star Row */}
                            <div className="flex gap-1" style={{ Color: '#1E91B6' }}>
                                <FaStar style={{ color: '#1E91B6' }} />
                                <FaStar style={{ color: '#1E91B6' }} />
                                <FaStar style={{ color: '#1E91B6' }} />
                                <FaStar style={{ color: '#1E91B6' }} />
                                <FaStar style={{ color: '#1E91B6' }} />
                            </div>
                            {/* Title */}
                            <h3 className="text-lg font-semibold">"We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."</h3>
                            {/* Paragraph */}
                            <h3 className="text-lg font-semibold">Devon Lane</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;