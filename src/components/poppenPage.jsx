import { poppenData02,poppenData23,poppenData4Plus } from "./mockdata"
import { Article } from "./Article"
import { Displaycategorien } from "./categorien"

export function PoppenPage02() {
    return(

      <>
    
      <div className="grid lg:grid-cols-3">
      <Displaycategorien />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2">
      
      {poppenData02.map(el => <Article {...el}/>)}
     </div>
     

      </>
    )
}
export function PoppenPage23() {
  return(

    <>    
    <div className="grid lg:grid-cols-3">
      <Displaycategorien />
      </div>
    
    <div className="grid lg:grid-cols-3 md:grid-cols-2">
    
    {poppenData23.map(el => <Article {...el}/>)}
   </div>
   

    </>
  )
}
export function PoppenPage4Plus(){
  return(

    <>    
    <div className="grid lg:grid-cols-3">
      <Displaycategorien />
      </div>
    <div className="grid lg:grid-cols-3 md:grid-cols-2">
    
    {poppenData4Plus.map(el => <Article {...el}/>)}
   </div>
   

    </>
  )
}
// poppenData.map(el => <Article {...el}/>)}