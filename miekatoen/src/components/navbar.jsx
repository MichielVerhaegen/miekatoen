import Logo from './img/logo-white.png'
import React from 'react';
import {Link} from 'react-router-dom'
import { GoThreeBars } from 'react-icons/go';


export function NavBar({openToggle}){

  return(
    
    <nav className="bg-roze flex inline-block justify-between border-b-4 border-bordeau px-5">
        <div className="flex">
          <img src={Logo} alt="Logo" className="object-contain w-20 my-2"></img>
          <div className="hidden lg:block text-3xl text-bordeau my-auto ">
            <Link to ="/"  className="px-10 border-r-2 border-bordeau">Home</Link>
            <Link to ="/Categorie" className="px-10 border-r-2 border-bordeau">Poppen</Link> 
            <Link to ="/About" className="px-10 border-r-2 border-bordeau">About</Link>
            <Link to ="/Contact" className="px-10 ">Contact </Link>
          </div>
          
          <div className="grid lg:hidden flex justify-end my-auto" >
                    <svg id="menu" viewBox="0 0 15 15" width="45" height="45" onClick={openToggle}><GoThreeBars/></svg>
            </div>
          </div>
      </nav>

      
  )

}



