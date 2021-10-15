import React from 'react'
export function Article(article){
  

 
return(
  <article className="p-8 border-2 border-b-4 border-bordeau max-w-full m-4 rounded-xl bg-roze">
  <h1 className=" text-bordeau text-xl font-bold">
   {article.titel}
  </h1>  
  <img src={require(`${article.imgurl}`).default} alt="image of dolls" className='max-w-sm rotate-90 h-1/2 w-full object-cover '/>
   

  <p>{article.description}</p>
</article>
)

}

