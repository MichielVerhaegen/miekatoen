import { Link } from "react-router-dom"
import voorbeeldfoto from "./img/li.jpg"
export function Displaycategorien(){
  return(
    <>
    <Link to="/poppenjonger3" className=" bg-4plus p-8 border-2 border-b-4 border-bordeau max-w-full m-4 rounded-xl bg-roze max-h-auto"> kinderen jonger dan 3</Link>
    <Link to="/poppen34" className="bg-j3 p-8 border-2 border-b-4 border-bordeau max-w-full m-4 rounded-xl bg-roze max-h-auto"> kinderen tussen 3 en 4<img src={voorbeeldfoto} alt="" className="hidden"/></Link>
    <Link to="/poppen4plus" className="bg-34 plus p-8 border-2 border-b-4 border-bordeau max-w-full m-4 rounded-xl bg-roze max-h-auto"> kinderen ouder dan 4</Link>
    </>
  )
}