'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { pagesRoute } from '../router'

const Nav = () => {
  const pathname = usePathname()

  return (
    <div className='topnav'>
      <div>
        {pagesRoute.map((item) => {
          return (
            <Link 
              key={item.id} 
              className={pathname === item.path ? 'active' : ''} 
              href={item.path}
              >
                {item.name}
              </Link>
          )
        })}
      </div>
      <div className='logo_nav'>
        <h3>Next JS 13</h3>
      </div>
    </div>
  )
}

export default Nav