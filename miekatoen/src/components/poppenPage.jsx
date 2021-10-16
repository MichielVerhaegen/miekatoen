import { NavBar } from "./navbar"
import { poppenDataj3,poppenData34,poppenData4Plus } from "./mockdata"
import { Article } from "./Article"
import { Displaycategorien } from "./categorien"

export function PoppenPagej3() {
    return(

      <>
      
      <NavBar /><div className="grid lg:grid-cols-3 md:grid-cols-2">
      {poppenDataj3.map(el => <Article {...el}/>)}
     </div>
     

      </>
    )
}
export function PoppenPage34() {
  return(

    <>    
    <NavBar /><div className="grid lg:grid-cols-3 md:grid-cols-2">
      <Displaycategorien />
    {poppenData34.map(el => <Article {...el}/>)}
   </div>
   

    </>
  )
}
export function PoppenPage4Plus(){
  return(

    <>    
    <NavBar /><div className="grid lg:grid-cols-3 md:grid-cols-2">
      <Displaycategorien />
    {poppenData4Plus.map(el => <Article {...el}/>)}
   </div>
   

    </>
  )
}
// poppenData.map(el => <Article {...el}/>)}