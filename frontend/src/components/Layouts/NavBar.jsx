import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFileAlt, FaMoneyCheckAlt, FaFileSignature } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import Shield from '../../assets/images/Navbar/Shield.png'
import article from '../../assets/images/Navbar/article.png'
import wallet from '../../assets/images/Navbar/wallet.png'

const menus = [
  {
    key: 'policies',
    img: <img src={Shield} className="inline mr-2" />,
    label: 'Policies',
    items: [
      { to: '/active_policies', label: 'Active' },
      { to: '/inactive_policies', label: 'Inactive' },
      { to: '/inprogress_policies', label: 'InProgress' },
    ],
  },
  {
    key: 'claims',
    img: <img src={article} className="inline mr-2" />,
    label: 'Claims',
    items: [
      { to: '/claims/policy_claims', label: 'Policy Claims' },
      { to: '/claims/external_claims', label: 'External Claims' },
    ],
  },
  {
    key: 'billing',
    img: <img src={wallet} className="inline mr-2" />,
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
            {menu.img}
            {menu.label}
            <IoIosArrowDown className="ml-2" />
          </button>
          {openMenus.includes(menu.key) && (
            <ul className="mt-2 space-y-2 w-full flex flex-col mrleft-27px leading-9">
             {menu.items.map((item, idx) => { 
                return (
                  <li key={idx} className="w-full">
                    <Link
                      to={item.to}
                      className={`text-base font-opensans text-custom-gray`}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      ))}
    </nav>
  )
}

export default NavBar