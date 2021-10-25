import Logo from './img/logo-white.png'
import {Link} from 'react-router-dom'
import { React } from "react";


export default function DropDownMenu ({isOpen, openToggle})  {
    return (
        <div className= {isOpen? "flex flex-col" : "hidden"} onClick={openToggle}>
          <Link to ="/"  className="px-10 border-r-2 border-bordeau">Home</Link>
            <Link to ="/Categorie" className="px-10 border-r-2 border-bordeau">Poppen</Link> 
            <Link to ="/About" className="px-10 border-r-2 border-bordeau">About</Link>
            <Link to ="/Contact" className="px-10 ">Contact </Link>
        </div>
    )
}