import React from 'react'
import { Link } from 'react-router-dom'
import  logo  from '../assets/images/logo.png';
import usflag from '../assets/images/usflag.png';

const Dashboard = () => {
  return (
    <>
        <div>          
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">My Insurance Policies</h2>
            <button className="bg-blue-700 text-white px-4 py-2 rounded flex items-center space-x-2">
              <span className="text-lg font-semibold">+</span>
              <span>Buy New Policy</span>
            </button>
          </div>

          
          <div>
            <h3 className="text-xl font-semibold mb-4">Active</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* ...policy card... */}
              <div className="bg-white shadow rounded p-4">
                <p className="font-semibold">Radiant Insurance Company</p>
                <p className="text-sm text-gray-600">TOYOTA LAND CRUISER - RAE516T</p>
                <p className="text-xs text-gray-400">RD11AUTO222359</p>
                <button className="mt-2 border border-blue-600 text-blue-600 px-4 py-1 rounded hover:bg-blue-50">
                  View Policy
                </button>
              </div>
              {/* ...policy card... */}
              <div className="bg-white shadow rounded p-4">
                <p className="font-semibold">Radiant Insurance Company</p>
                <p className="text-sm text-gray-600">Toyota RAV4 -5 - RAE516T</p>
                <p className="text-xs text-gray-400">RD11AUTO222359</p>
                <button className="mt-2 border border-blue-600 text-blue-600 px-4 py-1 rounded hover:bg-blue-50">
                  View Policy
                </button>
              </div>
              {/* ...policy card... */}
              <div className="bg-white shadow rounded p-4">
                <p className="font-semibold">Radiant Insurance Company</p>
                <p className="text-sm text-gray-600">Toyota RAV4 -5 - RAE516T</p>
                <p className="text-xs text-gray-400">RD11AUTO222359</p>
                <button className="mt-2 border border-blue-600 text-blue-600 px-4 py-1 rounded hover:bg-blue-50">
                  View Policy
                </button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Dashboard