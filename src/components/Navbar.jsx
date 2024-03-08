import React from 'react'
import { NavLink } from 'react-router-dom'
import { NAV_LINKS } from "../contants/index"
import Button from './Button'

const Navbar = () => {
  return (
    <>
      <nav className='flexBetween max-container padding-container relative z-30 py-5'>

        <NavLink className="navbar-item" to="/">
          <img
            src="hilink-logo.svg"
            alt='logo'
            width={74}
            height={29}
          />
        </NavLink>

        <ul className='hidden h-full gap-12 lg:flex'>
          {NAV_LINKS.map((link) => (
            <NavLink to={link.href} key={link.key}
              className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'
            >
              {link.label}
            </NavLink>
          ))}
        </ul>

        <div className='lg:flexCenter hidden'>
          <Button
            type="button"
            title="Login"
            icon="user.svg"
            variant="btn_dark_green"
          />
        </div>
        
        <img
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className='inline-block cursor-pointer lg:hidden'
        />
      </nav>
    </>
  )
}

export default Navbar