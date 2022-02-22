import Logo from './img/logo-white.png'
import {Link} from 'react-router-dom'
import { React } from "react";


export default function DropDownMenu ({isOpen, openToggle})  {
    return (
        <div className= {isOpen? "flex flex-col text-3xl text-bordeau border-b-4 border-bordeau py-2 bg-roze" : "hidden"} onClick={openToggle}>
          <Link to ="/"  className="">Home</Link>
            <Link to ="/Categorie" className="pt-2">Poppen</Link> 
            <Link to ="/About" className="pt-2">About</Link>
            <Link to ="/Contact" className="pt-2">Contact </Link>
        </div>
    )
}