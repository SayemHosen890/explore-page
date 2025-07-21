import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";
import { Box, TextField, InputAdornment } from '@mui/material';
import { FaCar, FaUser, FaCalendarAlt } from 'react-icons/fa';
import image1 from "../../assets/pic1.jpg"

const Search = () => {
    return (
        <div className='mx-5 my-10'>
            <Box className="border border-gray-400 rounded-xl">
                <Box
                    className="p-10 rounded-xl bg-white shadow-md"
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

                    {/* <Box sx={{ width: '100%', mt: 4 }}>
                            <button
                                className="text-white py-3 rounded w-full"
                                style={{ backgroundColor: '#468F9D' }}
                            >
                                Submit
                            </button>
                        </Box> */}
                </Box>
            </Box>

            <div className="min-h-screen bg-white font-sans">

                {/* Page Content */}
                <div className="flex flex-col lg:flex-row">
                    {/* Filters */}
                    <aside className="w-full lg:w-1/4 p-6 space-y-6 text-gray-800">
                        <h2 className="text-xl font-bold">Filters</h2>

                        {/* Price */}
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block font-semibold">Price</label>
                                <MdKeyboardArrowUp className='text-2xl' />
                            </div>

                            {/* Static slider track with 2 red dots */}
                            <div className="relative h-1 bg-[#343434] rounded-full w-full">
                                {/* Left red dot */}
                                <div className="absolute top-1/2 left-0 w-5 h-5 bg-[#4FA6AD] rounded-full transform -translate-y-1/2" />
                                {/* Right red dot */}
                                <div className="absolute top-1/2 right-0 w-5 h-5 bg-[#4FA6AD] rounded-full transform -translate-y-1/2" />
                                {/* Active range (optional) */}
                                <div className="absolute top-1/2 left-[10%] right-[10%] h-2 rounded-full transform -translate-y-1/2" />
                            </div>

                            {/* Static Labels */}
                            <div className="flex justify-between text-sm text-gray-500 mt-2">
                                <span>$500</span>
                                <span>$20000</span>
                            </div>
                        </div>

                        <hr className="mx-auto  border-[#343434] my-6" />

                        {/* Rating */}
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block font-semibold mb-2">Rating</label>
                                <MdKeyboardArrowUp className='text-2xl' />
                            </div>

                            <div className="flex gap-2 flex-wrap">
                                {["0+", "1+", "2+", "3+", "4+"].map(r => (
                                    <button
                                        key={r}
                                        className="px-3 py-1 border border-gray-400 rounded text-sm hover:bg-gray-100"
                                    >
                                        {r}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <hr className="mx-auto  border-[#343434] my-6" />
                        {/* Amenities */}
                        <div className="space-y-2 text-sm">
                            {["Water", "Electric", "Sewage Hookups", "Firepit"].map(item => (
                                <label key={item} className="block">
                                    <input type="checkbox" className="mr-2" /> {item}
                                </label>
                            ))}
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 p-6">
                        <div className="flex justify-between items-center mb-4">
                            <p className="text-gray-700 text-xl font-semibold">
                                Showing 4 of <span className="text-pink-600 font-bold">257 places</span>
                            </p>
                            <div className="text-xl bold text-gray-600 flex justify-between items-center">
                                Sort by
                                <span className="font-semibold flex items-center gap-2 ml-1">
                                    Recommended
                                    <IoIosArrowDown />
                                </span>
                            </div>
                        </div>

                        {/* Cards stacked vertically */}
                        <div className="space-y-6">
                            {/* Card 1 */}
                            <div className="bg-white rounded-lg shadow overflow-hidden w-full">
                                <div className="flex flex-col lg:flex-row">
                                    <div className="relative w-full lg:w-1/2">
                                        <img
                                            src={image1}
                                            alt="Pine Creek Retreat"
                                            className="w-full h-80 object-cover"
                                        />
                                        <span className="absolute top-2 right-2 bg-[#FFFFFF80] text-black text-sm px-2 py-1 rounded">
                                            9 images
                                        </span>
                                    </div>
                                    <div className="flex-1 p-4 space-y-2">
                                        <h3 className="text-xl font-bold">Pine Creek Retreat</h3>
                                        <p className="text-sm text-gray-600">Pine Creek Retreat – Asheville, NC</p>
                                        <div className="flex items-center text-sm text-gray-700 gap-2">
                                            {/* <span>⭐⭐⭐⭐⭐</span> */}
                                            <div className="flex gap-1" style={{ Color: '#1E91B6' }}>
                                                <FaStar style={{ color: '#1E91B6' }} />
                                                <FaStar style={{ color: '#1E91B6' }} />
                                                <FaStar style={{ color: '#1E91B6' }} />
                                                <FaStar style={{ color: '#1E91B6' }} />
                                                <FaStar style={{ color: '#1E91B6' }} />
                                            </div>
                                            <span>20+ Amenities</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <span className="px-2 py-2 border rounded">4.2</span>
                                            <span className="font-semibold">Very Good</span>
                                            <span className="text-gray-600">(371 reviews)</span>
                                        </div>
                                        <div className="text-right text-sm text-teal-600 font-bold">
                                            starting from <br />
                                            $39.90
                                        </div>
                                        <hr className="mx-auto  border-[#343434] my-6" />
                                        <div className="flex items-center gap-2 mt-4">
                                            {/* Icon-only Button */}
                                            <button className="p-2 border border-[#468F9D]-200 text-[#000000] rounded text-xl h-10 w-10">
                                                {/* <FiHeart className="text-xl" /> */}
                                                <IoIosHeart />
                                            </button>

                                            {/* View Details Button */}
                                            <Link to="/details" className="w-full block">
                                                <button className="w-full bg-[#4FA6AD] text-white py-2 rounded hover:bg-[#3c8f96]">
                                                    View Details
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white rounded-lg shadow overflow-hidden w-full">
                                <div className="flex flex-col lg:flex-row">
                                    <div className="relative w-full lg:w-1/2">
                                        <img
                                            src={image1}
                                            alt="Pine Creek Retreat"
                                            className="w-full h-80 object-cover"
                                        />
                                        <span className="absolute top-2 right-2 bg-[#FFFFFF80] text-black text-sm px-2 py-1 rounded">
                                            9 images
                                        </span>
                                    </div>
                                    <div className="flex-1 p-4 space-y-2">
                                        <h3 className="text-xl font-bold">Pine Creek Retreat</h3>
                                        <p className="text-sm text-gray-600">Pine Creek Retreat – Asheville, NC</p>
                                        <div className="flex items-center text-sm text-gray-700 gap-2">
                                            {/* <span>⭐⭐⭐⭐⭐</span> */}
                                            <div className="flex gap-1" style={{ Color: '#1E91B6' }}>
                                                <FaStar style={{ color: '#1E91B6' }} />
                                                <FaStar style={{ color: '#1E91B6' }} />
                                                <FaStar style={{ color: '#1E91B6' }} />
                                                <FaStar style={{ color: '#1E91B6' }} />
                                                <FaStar style={{ color: '#1E91B6' }} />
                                            </div>
                                            <span>20+ Amenities</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <span className="px-2 py-2 border rounded">4.2</span>
                                            <span className="font-semibold">Very Good</span>
                                            <span className="text-gray-600">(371 reviews)</span>
                                        </div>
                                        <div className="text-right text-sm text-teal-600 font-bold">
                                            starting from <br />
                                            $39.90
                                        </div>
                                        <hr className="mx-auto  border-[#343434] my-6" />
                                        <div className="flex items-center gap-2 mt-4">
                                            {/* Icon-only Button */}
                                            <button className="p-2 border border-[#468F9D]-200 text-[#000000] rounded text-xl h-10 w-10">
                                                {/* <FiHeart className="text-xl" /> */}
                                                <IoIosHeart />
                                            </button>

                                            {/* View Details Button */}
                                            <button className="w-full bg-[#4FA6AD] text-white py-2 rounded hover:bg-[#3c8f96]">
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="bg-white rounded-lg shadow overflow-hidden w-full">
                                <div className="flex flex-col lg:flex-row">
                                    <div className="relative w-full lg:w-1/2">
                                        <img
                                            src={image1}
                                            alt="Pine Creek Retreat"
                                            className="w-full h-80 object-cover"
                                        />
                                        <span className="absolute top-2 right-2 bg-[#FFFFFF80] text-black text-sm px-2 py-1 rounded">
                                            9 images
                                        </span>
                                    </div>
                                    <div className="flex-1 p-4 space-y-2">
                                        <h3 className="text-xl font-bold">Pine Creek Retreat</h3>
                                        <p className="text-sm text-gray-600">Pine Creek Retreat – Asheville, NC</p>
                                        <div className="flex items-center text-sm text-gray-700 gap-2">
                                            {/* <span>⭐⭐⭐⭐⭐</span> */}
                                            <div className="flex gap-1" style={{ Color: '#1E91B6' }}>
                                                <FaStar style={{ color: '#1E91B6' }} />
                                                <FaStar style={{ color: '#1E91B6' }} />
                                                <FaStar style={{ color: '#1E91B6' }} />
                                                <FaStar style={{ color: '#1E91B6' }} />
                                                <FaStar style={{ color: '#1E91B6' }} />
                                            </div>
                                            <span>20+ Amenities</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <span className="px-2 py-2 border rounded">4.2</span>
                                            <span className="font-semibold">Very Good</span>
                                            <span className="text-gray-600">(371 reviews)</span>
                                        </div>
                                        <div className="text-right text-sm text-teal-600 font-bold">
                                            starting from <br />
                                            $39.90
                                        </div>
                                        <hr className="mx-auto  border-[#343434] my-6" />
                                        <div className="flex items-center gap-2 mt-4">
                                            {/* Icon-only Button */}
                                            <button className="p-2 border border-[#468F9D]-200 text-[#000000] rounded text-xl h-10 w-10">
                                                {/* <FiHeart className="text-xl" /> */}
                                                <IoIosHeart />
                                            </button>

                                            {/* View Details Button */}
                                            <button className="w-full bg-[#4FA6AD] text-white py-2 rounded hover:bg-[#3c8f96]">
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Card 4 */}
                            <div className="bg-white rounded-lg shadow overflow-hidden w-full">
                                <div className="flex flex-col lg:flex-row">
                                    <div className="relative w-full lg:w-1/2">
                                        <img
                                            src={image1}
                                            alt="Pine Creek Retreat"
                                            className="w-full h-80 object-cover"
                                        />
                                        <span className="absolute top-2 right-2 bg-[#FFFFFF80] text-black text-sm px-2 py-1 rounded">
                                            9 images
                                        </span>
                                    </div>
                                    <div className="flex-1 p-4 space-y-2">
                                        <h3 className="text-xl font-bold">Pine Creek Retreat</h3>
                                        <p className="text-sm text-gray-600">Pine Creek Retreat – Asheville, NC</p>
                                        <div className="flex items-center text-sm text-gray-700 gap-2">
                                            {/* <span>⭐⭐⭐⭐⭐</span> */}
                                            <div className="flex gap-1" style={{ Color: '#1E91B6' }}>
                                                <FaStar style={{ color: '#1E91B6' }} />
                                                <FaStar style={{ color: '#1E91B6' }} />
                                                <FaStar style={{ color: '#1E91B6' }} />
                                                <FaStar style={{ color: '#1E91B6' }} />
                                                <FaStar style={{ color: '#1E91B6' }} />
                                            </div>
                                            <span>20+ Amenities</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <span className="px-2 py-2 border rounded">4.2</span>
                                            <span className="font-semibold">Very Good</span>
                                            <span className="text-gray-600">(371 reviews)</span>
                                        </div>
                                        <div className="text-right text-sm text-teal-600 font-bold">
                                            starting from <br />
                                            $39.90
                                        </div>
                                        <hr className="mx-auto  border-[#343434] my-6" />
                                        <div className="flex items-center gap-2 mt-4">
                                            {/* Icon-only Button */}
                                            <button className="p-2 border border-[#468F9D]-200 text-[#000000] rounded text-xl h-10 w-10">
                                                {/* <FiHeart className="text-xl" /> */}
                                                <IoIosHeart />
                                            </button>

                                            {/* View Details Button */}
                                            <button className="w-full bg-[#4FA6AD] text-white py-2 rounded hover:bg-[#3c8f96]">
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Card 5 */}
                            <div className="bg-white rounded-lg shadow overflow-hidden w-full">
                                <div className="flex flex-col lg:flex-row">
                                    <div className="relative w-full lg:w-1/2">
                                        <img
                                            src={image1}
                                            alt="Pine Creek Retreat"
                                            className="w-full h-80 object-cover"
                                        />
                                        <span className="absolute top-2 right-2 bg-[#FFFFFF80] text-black text-sm px-2 py-1 rounded">
                                            9 images
                                        </span>
                                    </div>
                                    <div className="flex-1 p-4 space-y-2">
                                        <h3 className="text-xl font-bold">Pine Creek Retreat</h3>
                                        <p className="text-sm text-gray-600">Pine Creek Retreat – Asheville, NC</p>
                                        <div className="flex items-center text-sm text-gray-700 gap-2">
                                            {/* <span>⭐⭐⭐⭐⭐</span> */}
                                            <div className="flex gap-1" style={{ Color: '#1E91B6' }}>
                                                <FaStar style={{ color: '#1E91B6' }} />
                                                <FaStar style={{ color: '#1E91B6' }} />
                                                <FaStar style={{ color: '#1E91B6' }} />
                                                <FaStar style={{ color: '#1E91B6' }} />
                                                <FaStar style={{ color: '#1E91B6' }} />
                                            </div>
                                            <span>20+ Amenities</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <span className="px-2 py-2 border rounded">4.2</span>
                                            <span className="font-semibold">Very Good</span>
                                            <span className="text-gray-600">(371 reviews)</span>
                                        </div>
                                        <div className="text-right text-sm text-teal-600 font-bold">
                                            starting from <br />
                                            $39.90
                                        </div>
                                        <hr className="mx-auto  border-[#343434] my-6" />
                                        <div className="flex items-center gap-2 mt-4">
                                            {/* Icon-only Button */}
                                            <button className="p-2 border border-[#468F9D]-200 text-[#000000] rounded text-xl h-10 w-10">
                                                {/* <FiHeart className="text-xl" /> */}
                                                <IoIosHeart />
                                            </button>

                                            {/* View Details Button */}
                                            <button className="w-full bg-[#4FA6AD] text-white py-2 rounded hover:bg-[#3c8f96]">
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Card 6 */}
                            <div className="bg-white rounded-lg shadow overflow-hidden w-full">
                                <div className="flex flex-col lg:flex-row">
                                    <div className="relative w-full lg:w-1/2">
                                        <img
                                            src={image1}
                                            alt="Pine Creek Retreat"
                                            className="w-full h-80 object-cover"
                                        />
                                        <span className="absolute top-2 right-2 bg-[#FFFFFF80] text-black text-sm px-2 py-1 rounded">
                                            9 images
                                        </span>
                                    </div>
                                    <div className="flex-1 p-4 space-y-2">
                                        <h3 className="text-xl font-bold">Pine Creek Retreat</h3>
                                        <p className="text-sm text-gray-600">Pine Creek Retreat – Asheville, NC</p>
                                        <div className="flex items-center text-sm text-gray-700 gap-2">
                                            {/* <span>⭐⭐⭐⭐⭐</span> */}
                                            <div className="flex gap-1" style={{ Color: '#1E91B6' }}>
                                                <FaStar style={{ color: '#1E91B6' }} />
                                                <FaStar style={{ color: '#1E91B6' }} />
                                                <FaStar style={{ color: '#1E91B6' }} />
                                                <FaStar style={{ color: '#1E91B6' }} />
                                                <FaStar style={{ color: '#1E91B6' }} />
                                            </div>
                                            <span>20+ Amenities</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <span className="px-2 py-2 border rounded">4.2</span>
                                            <span className="font-semibold">Very Good</span>
                                            <span className="text-gray-600">(371 reviews)</span>
                                        </div>
                                        <div className="text-right text-sm text-teal-600 font-bold">
                                            starting from <br />
                                            $39.90
                                        </div>
                                        <hr className="mx-auto  border-[#343434] my-6" />
                                        <div className="flex items-center gap-2 mt-4">
                                            {/* Icon-only Button */}
                                            <button className="p-2 border border-[#468F9D]-200 text-[#000000] rounded text-xl h-10 w-10">
                                                {/* <FiHeart className="text-xl" /> */}
                                                <IoIosHeart />
                                            </button>

                                            {/* View Details Button */}
                                            <button className="w-full bg-[#4FA6AD] text-white py-2 rounded hover:bg-[#3c8f96]">
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Card 7 */}
                            <div className="bg-white rounded-lg shadow overflow-hidden w-full">
                                <div className="flex flex-col lg:flex-row">
                                    <div className="relative w-full lg:w-1/2">
                                        <img
                                            src={image1}
                                            alt="Pine Creek Retreat"
                                            className="w-full h-80 object-cover"
                                        />
                                        <span className="absolute top-2 right-2 bg-[#FFFFFF80] text-black text-sm px-2 py-1 rounded">
                                            9 images
                                        </span>
                                    </div>
                                    <div className="flex-1 p-4 space-y-2">
                                        <h3 className="text-xl font-bold">Pine Creek Retreat</h3>
                                        <p className="text-sm text-gray-600">Pine Creek Retreat – Asheville, NC</p>
                                        <div className="flex items-center text-sm text-gray-700 gap-2">
                                            {/* <span>⭐⭐⭐⭐⭐</span> */}
                                            <div className="flex gap-1" style={{ Color: '#1E91B6' }}>
                                                <FaStar style={{ color: '#1E91B6' }} />
                                                <FaStar style={{ color: '#1E91B6' }} />
                                                <FaStar style={{ color: '#1E91B6' }} />
                                                <FaStar style={{ color: '#1E91B6' }} />
                                                <FaStar style={{ color: '#1E91B6' }} />
                                            </div>
                                            <span>20+ Amenities</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <span className="px-2 py-2 border rounded">4.2</span>
                                            <span className="font-semibold">Very Good</span>
                                            <span className="text-gray-600">(371 reviews)</span>
                                        </div>
                                        <div className="text-right text-sm text-teal-600 font-bold">
                                            starting from <br />
                                            $39.90
                                        </div>
                                        <hr className="mx-auto  border-[#343434] my-6" />
                                        <div className="flex items-center gap-2 mt-4">
                                            {/* Icon-only Button */}
                                            <button className="p-2 border border-[#468F9D]-200 text-[#000000] rounded text-xl h-10 w-10">
                                                {/* <FiHeart className="text-xl" /> */}
                                                <IoIosHeart />
                                            </button>

                                            {/* View Details Button */}
                                            <button className="w-full bg-[#4FA6AD] text-white py-2 rounded hover:bg-[#3c8f96]">
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Card 8 */}
                            <div className="bg-white rounded-lg shadow overflow-hidden w-full">
                                <div className="flex flex-col lg:flex-row">
                                    <div className="relative w-full lg:w-1/2">
                                        <img
                                            src={image1}
                                            alt="Pine Creek Retreat"
                                            className="w-full h-80 object-cover"
                                        />
                                        <span className="absolute top-2 right-2 bg-[#FFFFFF80] text-black text-sm px-2 py-1 rounded">
                                            9 images
                                        </span>
                                    </div>
                                    <div className="flex-1 p-4 space-y-2">
                                        <h3 className="text-xl font-bold">Pine Creek Retreat</h3>
                                        <p className="text-sm text-gray-600">Pine Creek Retreat – Asheville, NC</p>
                                        <div className="flex items-center text-sm text-gray-700 gap-2">
                                            {/* <span>⭐⭐⭐⭐⭐</span> */}
                                            <div className="flex gap-1" style={{ Color: '#1E91B6' }}>
                                                <FaStar style={{ color: '#1E91B6' }} />
                                                <FaStar style={{ color: '#1E91B6' }} />
                                                <FaStar style={{ color: '#1E91B6' }} />
                                                <FaStar style={{ color: '#1E91B6' }} />
                                                <FaStar style={{ color: '#1E91B6' }} />
                                            </div>
                                            <span>20+ Amenities</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <span className="px-2 py-2 border rounded">4.2</span>
                                            <span className="font-semibold">Very Good</span>
                                            <span className="text-gray-600">(371 reviews)</span>
                                        </div>
                                        <div className="text-right text-sm text-teal-600 font-bold">
                                            starting from <br />
                                            $39.90
                                        </div>
                                        <hr className="mx-auto  border-[#343434] my-6" />
                                        <div className="flex items-center gap-2 mt-4">
                                            {/* Icon-only Button */}
                                            <button className="p-2 border border-[#468F9D]-200 text-[#000000] rounded text-xl h-10 w-10">
                                                {/* <FiHeart className="text-xl" /> */}
                                                <IoIosHeart />
                                            </button>

                                            {/* View Details Button */}
                                            <button className="w-full bg-[#4FA6AD] text-white py-2 rounded hover:bg-[#3c8f96]">
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Search;