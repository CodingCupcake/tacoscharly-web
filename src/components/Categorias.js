import React, { useState } from "react";
import Hamburguesa from "./icons/borger.png";
import Burrito from "./icons/burrirou.png";
import Camaron from "./icons/camalion.png";
import Bebida from "./icons/wawa.png";
import Mas from "./icons/etc.png";
import Menu from "./Menu";

const Categorias = () => {
    const [selectedCategory, setSelectedCategory] = useState(1);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div>
            <div className="min-h-[190px] bg-gray-100 flex justify-center items-center">
                <div className="grid grid-cols-5 gap-16 place-items-center overflow-x-auto whitespace-nowrap sm:grid-cols-5 sm:gap-16">
                    <div onClick={() => handleCategoryClick(1)} className="sm:h-44 sm:w-32 h-36 w-24 shadow-sm p-5 rounded-full bg-gray-300 flex flex-col justify-evenly items-center cursor-pointer hover:bg-primary duration-200">
                        <p className="text-center sm:text-lg text-base font-semibold">Mexicanos</p>
                        <img src={Burrito} alt="Mexicanos" className="w-auto" />
                    </div>
                    <div onClick={() => handleCategoryClick(2)} className="sm:h-44 sm:w-32 h-36 w-24 shadow-sm p-5 rounded-full bg-gray-300 flex flex-col justify-evenly items-center cursor-pointer hover:bg-primary duration-200">
                        <p className="text-center sm:text-lg text-base font-semibold">Mariscos</p>
                        <img src={Camaron} alt="Mariscos" className="w-auto" />
                    </div>
                    <div onClick={() => handleCategoryClick(3)} className="sm:h-44 sm:w-32 h-36 w-24 shadow-sm p-5 rounded-full bg-gray-300 flex flex-col justify-evenly items-center cursor-pointer hover:bg-primary duration-200">
                        <p className="text-center sm:text-base text-sm font-semibold">Hamburguesas</p>
                        <img src={Hamburguesa} alt="Hamburguesas" className="w-auto" />
                    </div>
                    <div onClick={() => handleCategoryClick(4)} className="sm:h-44 sm:w-32 h-36 w-24 shadow-sm p-5 rounded-full bg-gray-300 flex flex-col justify-evenly items-center cursor-pointer hover:bg-primary duration-200">
                        <p className="text-center sm:text-lg text-base font-semibold">Bebidas</p>
                        <img src={Bebida} alt="Bebidas" className="w-12" />
                    </div>
                    <div onClick={() => handleCategoryClick(5)} className="sm:h-44 sm:w-32 h-36 w-24 shadow-sm p-5 rounded-full bg-gray-300 flex flex-col justify-evenly items-center cursor-pointer hover:bg-primary duration-200">
                        <p className="text-center sm:text-lg text-base font-semibold">Otros</p>
                        <img src={Mas} alt="Otros" className="w-auto" />
                    </div>
                </div>
            </div>
            <Menu selectedCategory={selectedCategory} />
        </div>
    );
};

export default Categorias;
