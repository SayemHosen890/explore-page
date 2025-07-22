import React from 'react'
import { IoChevronForwardOutline } from "react-icons/io5";
import { ImLocation2 } from "react-icons/im";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoShareSocial } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import pic1 from "../../../assets/pic1.jpg"
import { Link } from 'react-router-dom';
import map from "../../../assets/map.png"
import { PiSwimmingPoolBold } from "react-icons/pi";
import { IoWifi } from "react-icons/io5";
import { FaCoffee } from "react-icons/fa";
import man1 from "../../../assets/man1.jpg"
import women1 from "../../../assets/women1.jpg"
import { IoFlag } from "react-icons/io5";

const Detail = () => {
  return (
    <>
      <div className="flex items-center gap-2 text-gray-700 pl-10 mt-10">
        <h1 className='text-red-700 text-2xl'>Maharashtra</h1>
        <IoChevronForwardOutline className='mt-2 text-2xl' />
        <h1 className='text-red-700 text-2xl'>Pune</h1>
        <IoChevronForwardOutline className='mt-2 text-2xl' />
        <h1 className='text-2xl'>Pine Creek Retreat</h1>
      </div>
      <div className="flex justify-between items-start px-6 mt-6 flex-col md:flex-row gap-8">

        {/* Left Section */}
        <div className='md:ml-4 mt-2'>
          <h2 className='font-bold text-2xl'>Pine Creek Retreat</h2>

          <div className='mt-4'>
            <h2 className="flex items-center text-gray-700 text-lg">
              <ImLocation2 className="mr-2 text-black text-2xl" />
              Pine Creek Retreat – Asheville, NC
            </h2>

            <div className="flex items-center gap-3 mt-4">
              <button className="bg-white text-black px-3 py-1 rounded-md text-sm border border-gray-600">
                4.2
              </button>
              <h2 className="text-gray-700 text-sm">
                <span className='font-bold'>Very Good</span> 371 reviews
              </h2>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-start mt-2 md:mt-0">
          <p className="text-[#468F9D] text-3xl font-bold mb-4">
            $ 2349/night
          </p>

          <div className="flex gap-3">
            <button className="border border-gray-600 text-black px-4 py-2 rounded-md text-sm hover:opacity-90 transition">
              <IoIosHeartEmpty />
            </button>
            <button className="border border-gray-600 text-black px-4 py-2 rounded-md text-sm hover:opacity-90 transition">
              <IoShareSocial />
            </button>
            <Link to="/booking" className="w-full block">
              <button className="w-full bg-[#4FA6AD] text-white p-4 rounded hover:bg-[#3c8f96]">
                Book Now
              </button>
            </Link>
          </div>
        </div>

      </div>
      <div className="grid grid-cols-2 gap-2 mx-10 my-10 rounded-2xl">
        {/* Left image - takes half width and full height */}
        <img
          src={pic1}
          alt="Large"
          className="w-full h-full object-cover"
        />

        {/* Right-side 4 small images in 2x2 grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full">
          <img src={pic1} alt="Small 1" className="w-full h-full object-cover" />
          <img src={pic1} alt="Small 2" className="w-full h-full object-cover" />
          <img src={pic1} alt="Small 3" className="w-full h-full object-cover" />

          <div className="relative w-full h-full">
            <img src={pic1} alt="Small 4" className="w-full h-full object-cover" />
            <button className="absolute bottom-2 right-2 bg-[#468F9D] text-white text-xl px-4 py-2 rounded shadow">
              View all photos
            </button>
          </div>
        </div>

      </div>
      <hr className='mx-30' />
      <div className='px-10 py-10'>
        <h2 className='mt-2 mb-2'>Overview</h2>
        <p>Riverbend Retreat is a top-rated off-grid RV spot, ideal for travelers looking for a calm, nature-rich experience near Sedona. Tucked away from the city buzz yet easily accessible, this site offers a scenic escape with essential amenities. <br /> Recommended by 90% of travelers, the spot is rated ⭐ 4.7 out of 5, marking it as an excellent choice for RV explorers seeking comfort and quiet.
          Riverbend Retreat is a top-rated off-grid RV spot, ideal for travelers looking for a calm, nature-rich experience near Sedona. Tucked away from the city buzz yet easily accessible, this site offers a scenic escape with essential amenities. <br /> Recommended by 90% of travelers, the spot is rated ⭐ 4.7 out of 5, marking it as an excellent choice for RV explorers seeking comfort and quiet.</p>
      </div>
      <div className="flex gap-6 mt-4 text-3xl ml-10">
        {/* Button 1 */}
        <button className="bg-[#468F9D] border rounded-lg shadow px-4 py-2 flex flex-col h-40 w-40 justify-between items-start">
          <span className="text-lg text-white font-semibold">4.2</span>
          <span className="text-xl text-white mt-10">Very Good</span>
          <span className="text-xl text-white">371 reviews</span>
        </button>

        {/* Button 2 */}
        <button className="bg-white border rounded-lg shadow px-4 py-2 flex flex-col h-40 w-40 items-start justify-between">
          <span className="text-xl font-semibold"><BsStars /></span>
          <span className="text-xl text-black">Near park</span>
        </button>

        {/* Button 3 */}
        <button className="bg-white border rounded-lg shadow px-4 py-2 flex flex-col h-40 w-40 items-start justify-between">
          <span className="text-xl font-semibold"><BsStars /></span>
          <span className="text-lg text-black">Near nightlife</span>
        </button>
      </div>
      <hr className="my-15 ml-10 mr-10" />
      <hr className='my-15 ml-10 mr-10' />
      <div className='flex justify-between px-10'>
        <h2>Location/Map</h2>
        <button className="bg-[#4FA6AD] text-white p-4 rounded hover:bg-[#3c8f96]">
          View on google maps
        </button>
      </div>
      <div className='flex items-center w-full pt-10'>
        <img src={map} alt="" className="w-full" />
      </div>
      <div>
        <h2 className="flex items-center pt-2 text-gray-700 text-lg">
          <ImLocation2 className="mr-2 text-black text-2xl" />
          Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
        </h2>
      </div>
      <hr className='my-15 ml-10 mr-10' />
      <div className='w-1/2'>
        <h2 className='text-center'>Amenities</h2>
        <div className='ml-29 pt-8 text-lg'>
          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <div className="flex items-center gap-2">
              <PiSwimmingPoolBold className="w-5 h-5" />
              {/* <Waves className="w-5 h-5" /> */}
              Outdoor pool
            </div>
            <div className="flex items-center gap-2">
              <IoWifi className="w-5 h-5" />
              Free Wi-Fi
            </div>
            <div className="flex items-center gap-2 mb-5">
              <PiSwimmingPoolBold className="w-5 h-5" />
              Indoor pool
            </div>
            <div className="flex items-start gap-2 flex-col">
              <div className="flex items-center gap-2">
                <FaCoffee className="w-5 h-5" />
                {/* <Coffee className="w-5 h-5" /> */}
                <span>Tea/coffee machine</span>
              </div>
              <span className="text-[#d67b6b] text-lg items-left pt-2">+24 more</span>
            </div>
          </div>
        </div>
      </div>
      <hr className='my-15 ml-10 mr-10' />
      <div className='flex justify-between px-10'>
        <h2>Reviews</h2>
        <button className="bg-[#4FA6AD] text-white p-4 rounded hover:bg-[#3c8f96]">
          Give your review
        </button>
      </div>
      <div className='flex gap-3 ml-10'>
        <div className='text-5xl'>
          4.2
        </div>
        <div className=''>
          <h2 className='font-bold'>Very Good</h2>
          <h3>371 verified reviews</h3>
        </div>
      </div>
      <hr className='my-15 ml-10 mr-10' />
      <div>
        <div class="w-full mx-auto bg-white p-4">
          {/* <!-- Review Item --> */}
          <div class="flex justify-between items-start border-b py-4">
            <div class="flex gap-4">
              <img src={man1} alt="user" class="w-10 h-10 rounded-full mt-3"/>
              <div>
                <p class="font-semibold text-sm">
                  <span class="text-black">5.0 Amazing</span>
                  <span class="text-gray-500"> | Cristofer Ekstrom Bothman</span>
                </p>
                <p class="text-sm text-gray-600 mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div class="text-black-500">
              <IoFlag />
              {/* <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mt-1" fill="currentColor" viewBox="0 0 24 24"><path d="M5 3v18l7-5 7 5V3H5z" /></svg> */}
            </div>
          </div>
          <div class="flex justify-between items-start border-b py-4">
            <div class="flex gap-4">
              <img src={man1} alt="user" class="w-10 h-10 rounded-full mt-3"/>
              <div>
                <p class="font-semibold text-sm">
                  <span class="text-black">5.0 Amazing</span>
                  <span class="text-gray-500"> | Cristofer Ekstrom Bothman</span>
                </p>
                <p class="text-sm text-gray-600 mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div class="text-black-500">
              <IoFlag />
              {/* <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mt-1" fill="currentColor" viewBox="0 0 24 24"><path d="M5 3v18l7-5 7 5V3H5z" /></svg> */}
            </div>
          </div>
          <div class="flex justify-between items-start border-b py-4">
            <div class="flex gap-4">
              <img src={man1} alt="user" class="w-10 h-10 rounded-full mt-3"/>
              <div>
                <p class="font-semibold text-sm">
                  <span class="text-black">5.0 Amazing</span>
                  <span class="text-gray-500"> | Cristofer Ekstrom Bothman</span>
                </p>
                <p class="text-sm text-gray-600 mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div class="text-black-500">
              <IoFlag />
              {/* <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mt-1" fill="currentColor" viewBox="0 0 24 24"><path d="M5 3v18l7-5 7 5V3H5z" /></svg> */}
            </div>
          </div>

          {/* <!-- Copy the entire block above to add more reviews --> */}
          {/* <!-- Example: --> */}
          <div class="flex justify-between items-start border-b py-4">
            <div class="flex gap-4">
              <img src={women1} alt="user" class="w-10 h-10 rounded-full mt-3"/>
              <div>
                <p class="font-semibold text-sm">
                  <span class="text-black">5.0 Amazing</span>
                  <span class="text-gray-500"> | Kaiya Lubin</span>
                </p>
                <p class="text-sm text-gray-600 mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div class="text-black-500">
              <IoFlag />
            </div>
          </div>

          {/* <!-- Pagination --> */}
          <div class="flex justify-center items-center mt-4 text-sm text-gray-700 gap-2">
            <button>&lt;</button>
            <span>1 of 40</span>
            
            <button>&gt;</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail