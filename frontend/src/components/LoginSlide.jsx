import React, { useState,useEffect } from 'react';
import crash from '../assets/images/crash.png';
import second from '../assets/images/second.png';

const images = [
  {
    src: crash,
    title: "File & Track Your Claims",
    desc: "Submit claims and monitor status in real-time. Say goodbye to paperwork!"
  },
  {
    src: second,
    title: "Buy & Access Your New Policies",
    desc: "Get insurance policies for your clients directly through  E-nsure with your provider"
  }
];

const LoginSlide = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden md:flex w-1/2 bg-[#204C86] text-white flex-col justify-center items-center p-10">
      <img src={images[index].src} alt="Slide" className="max-w-xs mb-8" />      
      <h3
        className="font-opensans font-semibold text-[20px] leading-[1.5] text-center tracking-normal"
        style={{
          fontVariantNumeric: 'lining-nums tabular-nums'
        }}
      >
        {images[index].title}
      </h3>
      <p
        className="font-opensans font-normal text-[15px] text-center"
      >
        {images[index].desc}
      </p>

      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full block cursor-pointer ${i === index ? 'bg-white' : 'bg-white/50'}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default LoginSlide;