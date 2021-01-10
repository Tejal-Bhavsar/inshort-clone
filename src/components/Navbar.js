import React from 'react'
import Hamburger from './Hamburger'

export default function Navbar({setCategory}) {
    return (
        <>
           <nav>
               <div className="icon">
                   <Hamburger setCategory={setCategory}/>
               </div>
               <img className="logo" src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="inshorts" />
            </nav> 
        </>
    )
}
