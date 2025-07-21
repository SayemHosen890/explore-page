import React from 'react'
import "./BookingConfirm.css"
import image from "../../../assets/pic3.jpg"
import { MdLocationOn } from "react-icons/md";
import { Link } from 'react-router-dom';


const BookingConfirm = () => {
    return (
        <div>
            <div className="flex justify-center items-center mt-40">
                {/* Remove line height spacing */}
                <div className="leading-[0]">
                    {/* Wrapper with no padding, inline-block */}
                    <div className="group inline-block rounded-full border-4 border-transparent transition-colors duration-300 hover:border-blue-400">
                        <svg
                            className="w-100 h-100 block"
                            viewBox="0 0 323 318"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {/* Blue circle background */}
                            <path
                                d="M161.5 0C118.668 0 77.5894 16.7162 47.3023 46.4714C17.0151 76.2265 0 116.583 0 158.663C0 200.743 17.0151 241.1 47.3023 270.855C77.5894 300.61 118.668 317.326 161.5 317.326C204.332 317.326 245.411 300.61 275.698 270.855C305.985 241.1 323 200.743 323 158.663C323 116.583 305.985 76.2265 275.698 46.4714C245.411 16.7162 204.332 0 161.5 0Z"
                                fill="#468F9D"
                            />
                            {/* Checkmark fill white + stroke blue on hover */}
                            <path
                                className="fill-white transition-all duration-300 group-hover:stroke-blue-400 group-hover:stroke-[3]"
                                d="M229.877 113.798C231.183 113.79 232.46 114.188 233.523 114.934C234.587 115.68 235.384 116.736 235.801 117.953C236.218 119.17 236.234 120.485 235.846 121.711C235.458 122.937 234.686 124.012 233.641 124.782L129.759 203.528L88.4647 153.281C87.898 152.665 87.4652 151.942 87.1927 151.156C86.9202 150.37 86.8138 149.538 86.88 148.71C86.9462 147.883 87.1835 147.077 87.5776 146.343C87.9716 145.608 88.5141 144.961 89.1717 144.439C89.8293 143.918 90.5883 143.534 91.4022 143.311C92.2161 143.087 93.0678 143.03 93.9052 143.141C94.7426 143.252 95.5481 143.53 96.2724 143.958C96.9967 144.386 97.6245 144.954 98.1175 145.628L131.796 186.551L226.013 115.141C227.106 114.279 228.476 113.806 229.877 113.798Z"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div className='text-center mt-25'>
                <h1 className='font-bold text-4xl'>Your Booking is Confirmed</h1>
                <p className='text-2xl mt-5'>Thanks for choosing RVnBo. Your next adventure is ready</p>
            </div>
            <div className=" flex flex-col justify-between p-8 bg-gray-200 border border-gray-400 rounded-sm m-10">
                {/* Top H1 */}
                <h1 className="text-4xl font-bold text-left mb-4">Booking Summary</h1>
                <hr className="my-4 border-t border-gray-400" />

                {/* Middle section: image + text side by side */}
                <div className="flex items-center justify-center gap-10 flex-wrap md:flex-nowrap mr-80 mt-5">
                    {/* <img
          src="https://via.placeholder.com/250"
          alt="Example"
          className="w-64 h-auto rounded-lg shadow-lg"
        /> */}
                    <img src={image} alt="Logo" className="h-100 w-150" />
                    <div className='beside shadow-xs'>
                        <div className="max-w-xl w-150">
                            <h2 className="text-2xl font-semibold mb-4">Pine Creek Retreat</h2>
                            <div className="flex items-center text-gray-700">
                                <MdLocationOn className="text-black-500 w-5 h-5 mr-1" />
                                <span>Pine Creek Retreat – Asheville, NC</span>
                            </div>
                            <p className="text-gray-700">
                                June 24,2025- June 25,2025
                            </p>
                            <p className="text-gray-700">
                                Total Price Paid
                            </p>
                            <p className="text-gray-700">
                                $175
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom H1 */}
                <h1 className="text-2xl text-left mt-4 ml-23">A Confirmation email has been sent to your inbox <br />
                    with all the details</h1>
            </div>
            <div className='mt-15 mb-20 ml-10'>
                <button className="bg-[#468F9D] px-6 text-white py-3 rounded-lg transition">
                    View More Spote
                </button>
                <Link to ="/home">
                <button className="bg-[#468F9D] px-6 py-3 text-white rounded-lg transition ml-5">
                    Back My Home
                </button>
                </Link>
            </div>
        </div>
    )
}

export default BookingConfirm