import React, { useState} from 'react';
import { SiShopware } from 'react-icons/si';
import { Link, NavLink } from 'react-router-dom';
import { links, orderLinks } from '../data/links'


const Sidebar = () => {

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-300 text-md m-2 text-white bg-sky-400 text-black';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md  dark:text-gray-700 dark:hover:text-black hover:bg-light-gray m-2';

  // const [adminLinks, setAdminLinks] = useState([])

  const user = {
    name: 'Rehema',  
    role: 'admin'
  }

  console.log(links)
  console.log(orderLinks)

  const userLinks = orderLinks.filter(orderLink => orderLink.role === 'user');
  console.log(userLinks)


  return (
    <div className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 bg-slate-200">
        <div className="flex justify-between items-center">
          <Link to='/'  className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
            <SiShopware className='text-black' /> <span className='text-black'>PEZA</span>
          </Link>
        </div>
        <div className="mt-10">

          {
            (user.role === 'admin') ? 
            <>
            {
                orderLinks.map((link) => ( 
                  <NavLink to={`/${link.url}`}
                  key = {link.name} 
                  className={({isActive}) =>  
                  isActive ? activeLink : normalLink
                
                }>
                  {link.icon}
                  <span className='capitalize'> { link.name } </span>
    
                  </NavLink>
                ))
            }
            </> 
            : 
            <>
            {
                userLinks.map((link) => ( 
                  <NavLink to={`/${link.url}`}
                  key = {link.name} 
                  className={({isActive}) =>  
                  isActive ? activeLink : normalLink
                
                }>
                  {link.icon}
                  <span className='capitalize'> { link.name } </span>
    
                  </NavLink>
                ))
            }
            </>
          }

        </div>
    </div>
  )
}

export default Sidebar