import { NavBar } from "./navbar"
import { poppenData } from "./mockdata"
import { Article } from "./Article"
export function PoppenPage() {
    return(

      <>
      <NavBar /><div className="grid lg:grid-cols-3 md:grid-cols-2">
      {poppenData.map(el => <Article {...el}/>)}
     </div>
     

      </>
    )
}
// poppenData.map(el => <Article {...el}/>)}