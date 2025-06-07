import React from 'react'
import {Link} from 'react-router-dom'

const ButtonBuyNewPolicy = () => {
  return (
    <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-custom-blue">My Insurance Policies</h2>
        <Link to="/buy_new_policy" className="bg-custom-blue text-white px-4 py-2 rounded-full flex items-center space-x-2 cursor-pointer">
            <span className="flex items-center justify-center text-lg font-semibold bg-white rounded-full text-custom-blue h-7 w-7">+</span>
            <span>Buy New Policy</span>
        </Link>
    </div>
  )
}

export default ButtonBuyNewPolicy