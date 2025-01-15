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

    const getButtonClass = (category) => {
        return selectedCategory === category 
            ? "bg-primary"  // Clase para la categoría seleccionada
            : "bg-gray-300";           // Clase para las categorías no seleccionadas
    };

    return (
        <div>
            <div className="min-h-[190px] bg-gray-100 flex justify-center items-center">
                <div className="grid grid-cols-5 gap-28 place-items-center overflow-x-auto whitespace-nowrap sm:gap-16 px-20 scrollbar-hide">
                    <div onClick={() => handleCategoryClick(1)} className={`sm:h-44 sm:w-32 h-40 w-24 shadow-sm p-5 rounded-full bg-gray-300 flex flex-col justify-evenly items-center cursor-pointer hover:bg-primary duration-200 ${getButtonClass(1)}`}>
                        <p className="text-center sm:text-lg text-base font-semibold">Mexicanos</p>
                        <img src={Burrito} alt="Mexicanos" className="w-auto" />
                    </div>
                    <div onClick={() => handleCategoryClick(2)} className={`sm:h-44 sm:w-32 h-40 w-24 shadow-sm p-5 rounded-full bg-gray-300 flex flex-col justify-evenly items-center cursor-pointer hover:bg-primary duration-200 ${getButtonClass(2)}`}>
                        <p className="text-center sm:text-lg text-base font-semibold">Mariscos</p>
                        <img src={Camaron} alt="Mariscos" className="w-auto" />
                    </div>
                    <div onClick={() => handleCategoryClick(3)} className={`sm:h-44 sm:w-32 h-40 w-24 shadow-sm p-5 rounded-full bg-gray-300 flex flex-col justify-evenly items-center cursor-pointer hover:bg-primary duration-200 ${getButtonClass(3)}`}>
                        <p className="text-center sm:text-base text-[13px] font-semibold">Hamburguesas</p>
                        <img src={Hamburguesa} alt="Hamburguesas" className="w-auto" />
                    </div>
                    <div onClick={() => handleCategoryClick(4)} className={`sm:h-44 sm:w-32 h-40 w-24 shadow-sm p-5 rounded-full bg-gray-300 flex flex-col justify-evenly items-center cursor-pointer hover:bg-primary duration-200 ${getButtonClass(4)}`}>
                        <p className="text-center sm:text-lg text-base font-semibold">Bebidas</p>
                        <img src={Bebida} alt="Bebidas" className="sm:w-12 w-9" />
                    </div>
                    <div onClick={() => handleCategoryClick(5)} className={`sm:h-44 sm:w-32 h-40 w-24 shadow-sm p-5 rounded-full bg-gray-300 flex flex-col justify-evenly items-center cursor-pointer hover:bg-primary duration-200 ${getButtonClass(5)}`}>
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
