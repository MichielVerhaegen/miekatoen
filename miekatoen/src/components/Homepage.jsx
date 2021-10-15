import React from 'react'
import { Article } from './Article'

export function Homepage(prop){
return(
  <div className="bg-cream flex">
    <div className="max-w-full mx-4">
      <Article {...prop}/>
 </div>
  </div>
)
}