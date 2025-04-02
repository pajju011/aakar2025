import React from 'react';

const GlimpseOfAakar = () => {
  return (
    <div className="rounded-md grid place-items-center">

      <div className="w-full text-white py-16 max-w-7xl px-6 text-center flex flex-col md:flex-row items-center justify-around gap-8 rounded-lg">

        <h2 className="text-2xl md:text-5xl text-white flex flex-col text-center justify-center items-center">
          <p className='py-6'> Glimpse of </p>
          <p>Aakar 2024</p>
        </h2>

        <video
          className="max-h-[50vh] rounded-[3rem]"
          autoPlay
          loop
          muted
        >
          <source src="\glimpse.mp4" type="video/mp4" />
        </video>

      </div>

    </div>
  );
};

export default GlimpseOfAakar;
