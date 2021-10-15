
export function Article(article){
  
  const image = require(article.imgurl);
return(
  <article className="p-8 border-2 border-b-4 border-bordeau max-w-full m-4 rounded-xl">
  <h1>
   {article.titel}
  </h1>  
  
  return(<img src={image} alt="image of dolls" className='max-w-sm rotate-90'/>)

  <p>{article.description}</p>
</article>
)

}

function picture(){
  return 'hallllo'
}