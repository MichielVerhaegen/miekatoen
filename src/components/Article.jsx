import React from 'react'
export function Article(article){
  

 
return(
  <article className="p-8 border-2 border-b-4 border-bordeau max-w-full m-4 rounded-xl bg-roze max-h-auto">
  <h1 className=" text-bordeau text-xl font-bold">
   {article.titel}
  </h1>
  
  
  <img src={require(`${article.imgurl}`).default} alt="dolls" className='w-full h-52 object-cover rounded-xl mb-4'/>
  <p className="text-bordeau border-2 border-b-4 border-bordeau bg-cream rounded-xl p-1">{article.description}</p>

  
  
</article>
)

}

