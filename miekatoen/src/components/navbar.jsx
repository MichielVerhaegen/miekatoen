import Logo from './img/logo-white.png'
import { Homepage } from './Homepage';
import React from 'react';
import { ReactDOM } from 'react';
import {render} from 'react-dom';
import { PoppenPage } from './poppenPage';
//import { homepageData } from './mockdata';
export function NavBar(){

  
  return(
    <nav className="bg-roze flex inline-block border-b-4 border-bordeau">
      <img src={Logo} alt="Logo" className="object-contain w-20 m-2"></img>
      <div className="text-3xl text-bordeau my-auto ">
        <button  className="px-10 border-r-2 border-bordeau" onClick={loadHomePage} >Home</button>
        <button className="px-10 border-r-2 border-bordeau" onClick={loadpoppen}>Poppen</button> 
        <button className="px-10 border-r-2 border-bordeau">About</button>
        <button className="px-10 ">Contact </button>
      </div>

    </nav>
  )

}

const loadpoppen = function (){
  render(<PoppenPage />,document.getElementById('root'))
}
const loadHomePage = function (){
  const homepageData = {
    titel:'Poppen met een verhaal By Miekatoen',
    imgurl:'./img/homepagebanner.jpg',
    description:"Atelier Mie Katoen is een poppenatelier gespecialiseerd in handgemaakte poppen en poppenkleding. De poppen zijn uniek, genderneutraal en hebben elk hun eigen verhaal. Het atelier kiest ervoor om poppen te maken vanuit een brede diversiteit, elk met zijn tekortkomingen en talenten."
  }
  const body = (<Homepage {...homepageData}/>)
  render(body, document.getElementById('root'));
}


