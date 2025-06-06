import React from 'react'
import bgshadow from '../../assets/images/policydetails/bgshadow.png'

const PolicyBanner = () => (
  <div
    className="w-full h-28 p-5 rounded-lg shadow-lg flex flex-col justify-center items-center relative overflow-hidden"
    style={{
      backgroundImage: `url(${bgshadow})`,
      backgroundSize: '',
      backgroundPosition: 'center',
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/40 rounded-lg pointer-events-none"></div>
    <div className="relative pb-1 flex flex-col justify-start items-start z-10">
      <div className="text-white text-4xl font-bold font-opensans leading-[58px]">
        {/*Do more with E-nsure*/}
      </div>
    </div>
  </div>
)

export default PolicyBanner