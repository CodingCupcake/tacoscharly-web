import React from "react";
import Logo from "../icons/taquito 2.0.png"

const Navbar = () => {
    return (
        <div className="shadow-md bg-primary w-full duration-200 z-50 fixed top-0 left-0">
            <div className="container py-3 sm:py-0">
                <div className="flex justify-center items-center">
                    <div>
                        <div className="flex items-center gap-2 text-2xl sm:text-3xl font-bold">
                            <img src={Logo} alt="CharlyTacos" className="w-14"/> Charly Tacos
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;