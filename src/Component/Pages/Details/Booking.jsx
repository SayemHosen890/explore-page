import { Calendar, Hotel, ShieldCheck, Star } from 'lucide-react';
import image1 from "../../../assets/pic4.jpg" // Replace with actual image
import hotelLogo from "../../../assets/pic2.jpg"; // Replace with actual image
import { Link } from 'react-router-dom';


const Booking = () => {
    return (
        <>
            <div className=" bg-white p-6 md:p-12 font-sans">
                {/* Main container */}
                <div className="flex flex-col lg:flex-row gap-6 shadow-lg">
                    {/* Left Card */}
                    <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-2/3 space-y-6 shadow-sm">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-medium text-gray-800">
                                Superior room – 1 double bed or 2 twin beds
                            </h2>
                            <div className="text-right text-[#4FA6AD] text-2xl font-bold">
                                $5240
                                <span className="text-sm font-medium text-gray-500">/night</span>
                            </div>
                        </div>


                        <div className="flex justify-between items-center">
                            <div className="flex items-center w-full gap-3 border rounded-xl h-20">
                                {/* Icon */}
                                <img src={hotelLogo} alt="Hotel Logo" className="w-12 h-12 ml-5" />

                                {/* Text Content */}
                                <div className="flex flex-col w-full ml-3">
                                    <h1 className="text-xl font-semibold text-[#4FA6AD]">Pine Creek Retreat</h1>
                                    <div className="text-xl text-gray-600">
                                        Pine Creek Retreat – Asheville, NC
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Date Row */}
                        <div className="flex justify-between items-center border-t pt-4 mt-10">
                            <div>
                                {/* Check-In Info */}
                                <div className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                                    <Calendar className="w-4 h-4 text-[#4FA6AD]" />
                                    Thursday, Dec 8
                                </div>
                                <div className="text-xs text-gray-500">Check-In</div>

                                {/* Nights Button BELOW */}
                                <button className="mt-5 bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 transition">
                                    1 Night
                                </button>
                            </div>



                            <Hotel className="text-[#4FA6AD] w-5 h-5" />

                            {/* Check Out */}
                            <div>
                                <div className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                                    <Calendar className="w-4 h-4 text-[#4FA6AD]" />
                                    Friday, Dec 9
                                </div>
                                <div className="text-xs text-gray-500">Check-Out</div>
                            </div>


                        </div>

                        {/* Pay Section */}
                    </div>

                    {/* Right Card */}
                    <div className="bg-white rounded-lg p-10 w-full lg:w-1/3 shadow-lg">
                        {/* Image & Title */}
                        <div className="flex items-start gap-4">
                            <img src={image1} alt="room" className="w-20 h-20 rounded object-cover" />
                            <div>
                                <div className="text-sm text-gray-800 font-semibold">CVK Park Bosphorus...</div>
                                <div className="text-sm text-gray-800">Superior room – 1 double bed or 2 twin beds</div>
                                <div className="mt-1 flex items-center text-xs text-gray-600 gap-2">
                                    <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-semibold flex items-center gap-1">
                                        <Star className="w-3 h-3" /> 4.2
                                    </span>
                                    <span className="text-sm font-medium text-gray-700">Very Good</span>
                                    <span className="text-xs">(54 reviews)</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 text-sm text-gray-700">
                            Your booking is protected by <span className="font-semibold">PhonePe</span>
                        </div>

                        {/* Price Details */}
                        <div className="border-t mt-4 pt-4 space-y-2 text-sm text-gray-700">
                            <div className="flex justify-between">
                                <span>Base Fare</span>
                                <span>$240</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Discount</span>
                                <span>$0</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Taxes</span>
                                <span>$20</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Service Fee</span>
                                <span>$5</span>
                            </div>
                            <div className="border-t pt-2 flex justify-between font-semibold">
                                <span>Total</span>
                                <span>$265</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-232 ml-12'>
                <div className="bg-[#4FA6AD] text-white rounded-lg py-4 px-6 flex justify-between items-center">
                    <div>
                        <div className="font-semibold flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4" /> Pay in full
                        </div>
                        <div className="text-sm">Pay the total and you are all set</div>
                    </div>
                    <div className="w-6 h-6 rounded-full border-2 border-white"></div>
                </div>
            </div>
            <div className="max-w mx-auto bg-white shadow-lg rounded-lg p-6 ml-10 mt-5 mr-130">
                <h2 className="text-xl font-semibold mb-4">Login or Sign up to book</h2>

                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                </label>
                <input
                    id="phone"
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full text-black px-3 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-xs text-gray-500 mb-4">
                    We’ll call or text you to confirm your number. Standard message and data rates apply.{' '}
                    <a href="#" className="underline text-blue-600 hover:text-blue-800">Privacy Policy</a>
                </p>


                <Link to="/bookingConfirm" className="w-full block">
                    <button className="w-full bg-[#4FA6AD] text-white py-2 rounded hover:bg-[#3c8f96]">
                        Continue
                    </button>
                </Link>


                <div className="flex items-center text-gray-500 mt-4">
                    <hr className="flex-grow border-t border-gray-300" />
                    <span className="mx-2">Or</span>
                    <hr className="flex-grow border-t border-gray-300" />
                </div>

            </div>

        </>
    );
};

export default Booking;
