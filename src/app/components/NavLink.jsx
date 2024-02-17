import Link from 'next/link'
import React from 'react'

const NavLink = ({ href, title, onClick }) => {
  return (
    <Link href={href} onClick={onClick} className="block py-2 pl-3 pr-4 text-[#C3CED6] sm:text-lg lg:text-xl rounded md:p-0 hover:text-white">
      {title}
    </Link>
  )
}

export default NavLink