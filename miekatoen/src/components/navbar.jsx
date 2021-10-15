import Logo from './img/logo.png'

export function NavBar(){
  return(
    <nav className="bg-white flex inline-block border-b-4 border-bordeau">
      <img src={Logo} alt="Logo" className="object-contain w-20 m-2"></img>
      <div className="text-2xl my-auto">
        <a href="/" className="px-10 border-r-2 border-bordeau">Home</a>
        <a href="/" className="px-10 border-r-2 border-bordeau">Poppen</a> 
        <a href="/" className="px-10 border-r-2 border-bordeau">About</a>
        <a href="/" className="px-10 border-bordeau">Contact </a>
      </div>
      
    </nav>
  )
}