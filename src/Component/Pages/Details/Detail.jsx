import React from 'react'
import { IoChevronForwardOutline } from "react-icons/io5";
import { ImLocation2 } from "react-icons/im";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoShareSocial } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import pic1 from "../../../assets/pic1.jpg"
import { Link } from 'react-router-dom';

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

          
    </>
  )
}

export default Detail