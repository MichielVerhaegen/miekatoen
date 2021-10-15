import Logo from './img/homepagebanner.jpg'
export function Article(article){

  
return(
  <article className="p-8 border-2 border-b-4 border-bordeau max-w-full m-4 rounded-xl">
  <h1>
   {article.titel}
  </h1>
  <img src={Logo} alt="image of dolls" className='max-w-sm rotate-90'/>

  <p>{article.description}</p>
</article>
)
}