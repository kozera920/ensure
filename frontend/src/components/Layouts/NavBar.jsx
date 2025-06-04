import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFileAlt, FaMoneyCheckAlt, FaFileSignature } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'

const menus = [
  {
    key: 'policies',
    icon: <FaFileAlt className="inline mr-2" />,
    label: 'Policies',
    items: [
      { to: '/users', label: 'Active' },
      { to: '/dashboard', label: 'Inactive' },
      { to: '#', label: 'InProgress' },
    ],
  },
  {
    key: 'claims',
    icon: <FaFileSignature className="inline mr-2" />,
    label: 'Claims',
    items: [
      { to: '#', label: 'Policy Claims' },
      { to: '#', label: 'External Claims' },
    ],
  },
  {
    key: 'billing',
    icon: <FaMoneyCheckAlt className="inline mr-2" />,
    label: 'Billing',
    items: [
      { to: '#', label: 'Payment Method' },
      { to: '#', label: 'Compensation Method' },
      { to: '#', label: 'Payment History' },
    ],
  },
]

const NavBar = () => {
  const [openMenus, setOpenMenus] = useState(menus.map(menu => menu.key))

  const handleToggle = (key) => {
    setOpenMenus(openMenus.includes(key)
      ? openMenus.filter(k => k !== key)
      : [...openMenus, key]
    )
  }

  return (
    <nav className="flex flex-col px-4 py-6 space-y-6 mrleft-27px">
      {menus.map(menu => (
        <div key={menu.key} className="w-full flex flex-col">
          <button
            className="flex items-center w-full text-base font-semibold text-black focus:outline-none font-opensans text-custom-black"
            onClick={() => handleToggle(menu.key)}
          >
            {menu.icon}
            {menu.label}
            <IoIosArrowDown className="ml-2" />
          </button>
          {openMenus.includes(menu.key) && (
            <ul className="mt-2 space-y-2 w-full flex flex-col mrleft-27px leading-9">
              {menu.items.map((item, idx) => (
                <li key={idx} className="w-full">
                  <Link className="text-base text-custom-gray font-opensans" to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </nav>
  )
}

export default NavBar