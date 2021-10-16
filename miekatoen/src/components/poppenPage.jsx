import { NavBar } from "./navbar"
import { poppenData } from "./mockdata"
import { Article } from "./Article"
export function PoppenPage() {
    return(

      <>
      <NavBar />
      {poppenData.map(el => <Article {...el}/>)}
     
     

      </>
    )
}
// poppenData.map(el => <Article {...el}/>)}