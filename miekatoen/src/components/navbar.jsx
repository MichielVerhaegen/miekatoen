import Logo from './img/logo-white.png'
import { Homepage } from './Homepage';
import React from 'react';
import {render} from 'react-dom';
import { PoppenPage } from './poppenPage';
import { homepageData } from './mockdata';
import {Link} from 'react-router-dom'
import { Router } from 'react-router';
import { GoThreeBars } from 'react-icons/go';

export function NavBar(){
  
  return(
    
    <nav className="bg-roze flex inline-block border-b-4 border-bordeau px-5">
      <div className="flex justify-between">
        <img src={Logo} alt="Logo" className="object-contain w-20 my-2"></img>
        <div className="hidden lg:block text-3xl text-bordeau my-auto ">
          <Link to ="/"  className="px-10 border-r-2 border-bordeau">Home</Link>
          <Link to ="/Categorie" className="px-10 border-r-2 border-bordeau">Poppen</Link> 
          <Link to ="/About" className="px-10 border-r-2 border-bordeau">About</Link>
          <Link to ="/Contact" className="px-10 ">Contact </Link>
        </div>
        <svg viewBox="0 0 15 15" width="45" height="45" className="box lg:hidden inline-block my-auto fill-current text-bordeau"><GoThreeBars/></svg>
       </div>
      </nav>
  )

}



