import Logo from './img/logo-white.png'
import React from 'react';
import {Link} from 'react-router-dom'
import { GoThreeBars } from 'react-icons/go';


export function NavBar({openToggle}){

  return(
    
    <div className="bg-roze border-b-4 border-bordeau px-5 flex">
          <img src={Logo} alt="Logo" className="object-contain w-20 my-2"></img>
          <div className="hidden lg:block text-3xl text-bordeau my-auto ">
            <Link to ="/"  className="px-10 border-r-2 border-bordeau">Home</Link>
            <Link to ="/Categorie" className="px-10 border-r-2 border-bordeau">Poppen</Link> 
            <Link to ="/Visie" className="px-10 border-r-2 border-bordeau">Visie</Link>
            <Link to ="/Contact" className="px-10 ">Contact </Link>
          </div>
          
          <div className="block lg:hidden my-auto flex justify-end" >
                    <svg id="menu" viewBox="0 0 15 15" width="45" height="45" onClick={openToggle} className="fill-current text-bordeau"><GoThreeBars/></svg>
            </div>
      </div>

      
  )

}



