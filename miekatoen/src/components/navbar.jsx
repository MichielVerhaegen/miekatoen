import Logo from './img/logo-white.png'
import { Homepage } from './Homepage';
import React from 'react';
import {render} from 'react-dom';
import { PoppenPage } from './poppenPage';
import { homepageData } from './mockdata';
import {Link} from 'react-router-dom'
import { Router } from 'react-router';
export function NavBar(){
  
  return(
    
    <nav className="bg-roze flex inline-block border-b-4 border-bordeau">
      <img src={Logo} alt="Logo" className="object-contain w-20 m-2"></img>
      <div className="text-3xl text-bordeau my-auto ">
        <Link to ="/"  className="px-10 border-r-2 border-bordeau">Home</Link>
        <Link to ="/Poppen" className="px-10 border-r-2 border-bordeau">Poppen</Link> 
        <Link to ="About" className="px-10 border-r-2 border-bordeau">About</Link>
        <Link to ="/Contact" className="px-10 ">Contact </Link>
      </div>

    </nav>
  )

}



