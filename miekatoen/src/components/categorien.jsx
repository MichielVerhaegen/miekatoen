import { Link } from "react-router-dom"
export function Displaycategorien(){
  return(
    <>
    <Link to="/poppenjonger3"> kinderen jonger dan 3</Link>
    <Link to="/poppen34"> kinderen tussen 3 en 4</Link>
    <Link to="/poppen4plus"> kinderen ouder dan 4</Link>
    </>
  )
}