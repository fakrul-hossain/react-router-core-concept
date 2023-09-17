import React, { useEffect, useState } from 'react';
import Link from '../Link/Link';
import { HiMenuAlt1 } from 'react-icons/hi';
import { VscChromeClose } from 'react-icons/vsc';

const Navbar = () => {

    const [open,setOpen] = useState(false)
    const [routes,setRoutes] = useState([])
        useEffect(() =>{
           const URL = 'nav_items.json'
           fetch(URL)
           .then(res => res.json())
           .then(data => setRoutes(data))
        },[])
      

    return (
        <div>
            <nav className="bg-base-200">
               <div onClick={()=> setOpen(!open)} className="md:hidden p-2">
                {
                    open === true ? 
                    <VscChromeClose className='text-4xl'></VscChromeClose> : 
                    
                    <HiMenuAlt1 className='text-4xl'></HiMenuAlt1>
                }
               
               </div>
               <ul className={`md:flex duration-700 absolute md;static ${open ? 'left-[5px]' : '-left-[195px]'} md:bg-base-200 rounded-lg p-6 shadow-2xl`
            }>
               {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
               </ul>
            </nav>
        </div>
    );
};

export default Navbar;