import React from 'react';
import logo from '../share.svg'
import {ButtonContainer} from './Button'
function Nav() {
    return (
        
        <React.Fragment>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
            <img src={logo} alt="logo" className="navbar-brand sizes"/>
            <ul className="navbar-nav align-items-center">
                 <li className="nav-item ml-0 text-capitalize text-white">
                     locator
                      </li>
             </ul>
            <div className="ml-auto text-capitalize">
           <ButtonContainer onClick={()=>console.log('newpoint button')}> new point</ButtonContainer>
           <ButtonContainer onClick={()=>console.log('search  button')}>
                  
            <span className="mr-2"><i className="fas fa-search-location"></i></span>
               search</ButtonContainer>
           
            </div>
            

            </nav>
 </React.Fragment>
        
    );
}

export default Nav;