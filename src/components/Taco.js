import React from "react";
import Taquito from "./icons/Taco1.png"
import Fondo from "./icons/fondo.png"

const bgImage = {
    backgroundImage: `url(${Fondo})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

const Hero = () => {
    return(
        <div style={bgImage} className="min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex justify-center items-center">
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
                            <img src={Taquito} alt="" className="w-[300px] sm:w-[450px] mx-auto "/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;