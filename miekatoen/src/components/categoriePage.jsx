import { NavBar } from "./navbar";
import { Displaycategorien } from "./categorien";


export function CategoriePage(){
  return(
    <>
    <NavBar />
    <div className="grid lg:grid-cols-3" id="root"> 
    <Displaycategorien />
    </div>
    </>
  )
}

