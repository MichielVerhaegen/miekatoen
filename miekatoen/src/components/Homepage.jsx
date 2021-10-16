import React from 'react'
import { Article } from './Article'
import { NavBar } from './navbar'
import { homepageData } from './mockdata'

export function Homepage(prop){
return(
  <>
  <NavBar/>
  <Article {...homepageData}/>
  </>
  
)
}