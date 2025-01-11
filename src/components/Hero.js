import React from "react";
import Logo from "./icons/logocharly.png"

const Hero = () => {
    return(
        <div  className="min-h-[550px] sm:min-h-[600px] bg-gray-100 duration-200 flex justify-center items-center">
            <div className="lg:h-[550px] lg:w-[550px] lg:bg-red-500 absolute lg:right-32 lg:top-20 lg:rounded-3xl lg:rotate-0 h-[550px] w-[586px] bg-red-500 -top-8 -z[8]" />
            <div className="lg:h-[15px] lg:w-[550px] lg:bg-red-500 absolute lg:-left-64 top-1 lg:rotate-45 lg:rounded-3xl -z[8]" />
            <div className="lg:h-[15px] lg:w-[550px] lg:bg-red-500 absolute lg:left-80 bottom-1 lg:rotate-45 lg:rounded-3xl -z[8]" />
            <div className="container pb-8 sm:pb-0">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/* text content section*/}
                    <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">Bienvenido a tacos Charly</h1>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dolor magna, venenatis quis elementum sed, feugiat ac sem. Suspendisse eget consequat odio, et ornare metus.</p>
                        <div>
                            <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-200">Order Now</button>
                        </div>
                    </div>
                    {/* image section */}
                    <div className="order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative">
                        {/* main image section */}
                        <div className="flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden">
                            <img src={Logo} alt="" className="w-[270px] sm:w-[410px] mx-auto sm:ml-24"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;