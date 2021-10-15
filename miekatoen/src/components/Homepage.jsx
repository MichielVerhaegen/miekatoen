import Logo from './img/logo.png'
import Homepagebanner from './img/homepagebanner.jpg'
export function Homepage(){
return(
  <body className="bg-cream flex">
    <article className="p-8 border-2 border-b-4 border-bordeau max-w-full m-60 rounded-xl">
      <h1>
        Poppen met een verhaal van Atelier Miekatoen
      </h1>
      <img src={Homepagebanner} alt="image of dolls" className='max-w-sm rotate-90'/>
      <p>Atelier Mie Katoen is een poppenatelier gespecialiseerd in handgemaakte, 
        poppen en poppenkleding. De poppen zijn uniek, genderneutraal en hebben 
        elk hun eigen verhaal. Het atelier kiest ervoor om poppen te maken vanuit
         een brede diversiteit, elk met zijn tekortkomingen en talenten.</p>
    </article>
  </body>
)
}