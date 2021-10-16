import { render } from "react-dom";
import { Link } from "react-router-dom";
import { poppenData } from "./mockdata";
import { NavBar } from "./navbar";
import { PoppenPage } from "./poppenPage";
import { Displaycategorien } from "./categorien";


export function CategoriePage(){
  return(
    <>
    <NavBar />
    <div className="grid" id="root"> 
    <Displaycategorien />
    </div>
    </>
  )
}

