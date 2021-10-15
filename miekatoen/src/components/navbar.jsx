import Logo from './img/logo.png'

export function NavBar(){
  return(
    <nav className="bg-white flex inline-block border-b-4 border-bordeau">
      <img src={Logo} alt="Logo" className="bg-white object-contain w-20 m-5"></img>
      <div className="text-2xl my-auto">
        <a href="" className="mx-10">Home</a>
        <a href="" className="mx-10">Poppen</a> 
        <a href="" className="mx-10">About</a>
        <a href="" className="mx-10">Contact </a>
        <a href="" className="mx-10">Bestellen</a>
      </div>
      
    </nav>
  )
}