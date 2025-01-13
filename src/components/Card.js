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
                <div className="flex items-center justify-between border-t-2 y-3 !mt-3">
                    <div className="opacity-70">
                        <p>{desc}</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold"></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;