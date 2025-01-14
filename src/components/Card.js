import React from "react";

const Card = ({urlImg, name, desc, price}) => {
    return(
        <div className="shadow-lg transition-all duration-500 hover:shadow-xl hover:bg-primary cursor-pointer">
            <div className="overflow-hidden">
                <img src={urlImg} alt="" 
                className="mx-auto h-[220px] w-full object-cover" />
            </div>

            <div className="space-y-2 p-3">
                <h1 className="line-clamp-1 font-bold text-xl">{name}</h1>
                <p className="line-clamp-2 opacity-70">{desc}</p>
                <div className="flex items-center justify-center border-t-2 y-3 !mt-3">
                    <div>
                        <p className="text-2xl font-bold">{price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;