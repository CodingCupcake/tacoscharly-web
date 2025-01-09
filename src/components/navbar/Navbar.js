import React from "react";
import Logo from "../icons/taquito 2.0.png"

const Navbar = () => {
    return (
        <div className="shadow-md bg-primary dark:bg-gray-900 dark:text-white duration-200">
            <div className="container py-3 sm:py-0">
                <div className="flex justify-between items-center">
                    <div>
                        <a href="#" className="flex items-center gap-2 text-2xl sm:text-3xl font-bold">
                            <img src={Logo} alt="CharlyTacos" className="w-10"/> Charly Tacos
                        </a>
                    </div>
                    <div className="flex items-center -4">
                        <ul className="hidden sm:flex gap-4">
                            <li>
                                <a href="#" className="inline-block px-4 py-4 hover:text-primary">Home</a>
                            </li>
                            <li>
                                <a href="#" className="inline-block px-4 py-4 hover:text-primary">About</a>
                            </li>
                            <li>
                                <a href="#" className="inline-block px-4 py-4 hover:text-primary">Contact</a>
                            </li>
                        </ul>
                        <button className="bg-gradient-to-t from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-300">
                            Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;