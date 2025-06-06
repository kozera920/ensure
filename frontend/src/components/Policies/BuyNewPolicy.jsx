import React from 'react'

const BuyNewPolicy = () => {
  return (
    <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-custom-blue">My Insurance Policies</h2>
        <button className="bg-custom-blue text-white px-4 py-2 rounded-full flex items-center space-x-2">
            <span className="flex items-center justify-center text-lg font-semibold bg-white rounded-full text-custom-blue h-7 w-7">+</span>
            <span>Buy New Policy</span>
        </button>
    </div>
  )
}

export default BuyNewPolicy