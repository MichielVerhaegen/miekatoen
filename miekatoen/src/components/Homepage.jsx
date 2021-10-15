import Logo from './img/logo.png'
import { Article } from './Article'
const article={
  titel:'Poppen met een verhaal van Miekatoen',
  imgurl:'./img/homepagebanner.jpg',
  description:""
};
export function Homepage(){
return(
  <body className="bg-cream flex">
    
 <Article {...article}/>
  </body>
)
}