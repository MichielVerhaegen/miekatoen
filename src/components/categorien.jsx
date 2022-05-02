import { Link } from "react-router-dom"
import voorbeeldfoto from "./img/li.jpg"
export function Displaycategorien(){
  return(
    <>
    <Link to="/poppen02" className=" bg-4plus p-8 border-2 border-b-4 border-bordeau max-w-full m-4 rounded-xl bg-roze max-h-auto"> 0 tot 2 jaar</Link>
    <Link to="/poppen23" className="bg-j3 p-8 border-2 border-b-4 border-bordeau max-w-full m-4 rounded-xl bg-roze max-h-auto"> 2 tot 3 jaar<img src={voorbeeldfoto} alt="" className="hidden"/></Link>
    <Link to="/poppen4plus" className="bg-34 plus p-8 border-2 border-b-4 border-bordeau max-w-full m-4 rounded-xl bg-roze max-h-auto"> Ouder dan 4 jaar</Link>
    </>
  )
}