import React from "react";
import Taquito from "./icons/Taco1.png";

const Banner = () => {
  return (
    <div className="min-h-[450px] bg-gray-100 z-40 relative">
      <div className="min-h-[450px] flex justify-center items-center py-12 sm:py-0 z-40 relative">
        <div
          data-aos="slide-up"
          data-aos-duration="300"
          className="container relative"
        >
          {/* Nuevo rectángulo blanco */}
          <div className="bg-white p-4 sm:p-8 max-h-[350px] rounded-lg shadow-2xl max-w-[300] sm:max-w-6xl mx-auto relative overflow-hidden">
            {/* Fondo rojo rotado */}
            <div className="absolute h-[300px] w-[600px] sm:h-[500px] sm:w-[800px] bg-red-500 top-5 -left-40 sm:top-10 sm:-left-32 transform rotate-45 z-0" />

            <div className="grid grid-cols-2 gap-4 sm:gap-6 relative z-10">
              {/* Sección de la imagen */}
              <div>
                <img
                  src={Taquito}
                  alt="Taco img"
                  className="max-w-[200px] sm:max-w-[320px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
                />
              </div>
              {/* Sección de texto */}
              <div className="flex flex-col justify-center gap-4 sm:gap-6 sm:pt-0">
                <h1 className="text-xl sm:text-3xl font-bold">
                  TACOS - $2.90
                </h1>
                <p className="text-xs sm:text-sm text-gray-500 tracking-wide leading-4 sm:leading-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eaque reiciendis inventore iste ratione ex alias quis magni at
                  optio
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae ab sed, exercitationem minima aliquid eligendi
                  distinctio? Fugit repudiandae numquam hic quo recusandae.
                  Excepturi totam ad nam velit quasi quidem aspernatur.
                </p>
              </div>
            </div>
          </div>
          {/* Fin del nuevo rectángulo */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
