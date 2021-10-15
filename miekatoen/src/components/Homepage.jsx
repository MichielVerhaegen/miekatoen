import Logo from './img/logo.png'
import { Article } from './Article'
const article={
  titel:'Poppen met een verhaal van Miekatoen',
  imgurl:'./img/homepagebanner.jpg',
  description:"Atelier Mie Katoen is een poppenatelier gespecialiseerd in handgemaakte poppen en poppenkleding. De poppen zijn uniek, genderneutraal en hebben elk hun eigen verhaal. Het atelier kiest ervoor om poppen te maken vanuit een brede diversiteit, elk met zijn tekortkomingen en talenten."
};
export function Homepage(){
return(
  <body className="bg-cream flex">
    <div className="max-w-screen-2xl m-auto">
      <Article {...article}/>
 </div>
  </body>
)
}