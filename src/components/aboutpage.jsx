import { NavBar } from "./navbar"
import { aboutData } from "./mockdata"
import { Article } from "./Article"
export function AboutPage(){
  return(
    <>
      <div>
        {aboutData.map(el=><Article {...el}/>)}
      </div>
    </>
  )
}