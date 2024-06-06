import React from 'react'
import Header from './Header'
const Layout = ({children}) => { 
  return (
    <div>
    <Header/>
  
        <div className='body'>
        <div className='circleone'>ndj</div>
         
        {children}
     
        <div className='circleone'>ndj</div>
        </div>

    </div>
  )
}

export default Layout