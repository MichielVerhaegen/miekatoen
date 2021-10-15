import Logo from './img/logo.png'
export function Homepage(){
return(
  <body className="bg-cream flex">
    <article className="p-8 border-2 border-b-4 border-bordeau max-w-full m-8 rounded-xl">
      <h1>
        Poppen met een verhaal van Atelier Miekatoen
      </h1>
      <img src={Logo} alt="image of dolls" />
      <p></p>
    </article>
  </body>
)
}