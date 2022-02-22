import React from 'react'
import { Article } from './Article'

import { homepageData } from './mockdata'

export function Homepage(prop){
return(
  <>
  <Article {...homepageData}/>
  </>
  
)
}