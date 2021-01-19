import { Link } from 'gatsby';
import React from 'react';
import './navbar.scss';
import Button from './../Button/Button';
 export default function Navbar(props) {
     return (
         <nav class="navbar">
             <ul >
              <Link to="/">  <a class="website-title"><b>WEB DEV CLUB</b></a></Link> 
                 <React.Fragment class="nav-links">
                 <Link  to="/about">About</Link>
                 <Link to="/events">Events</Link>
                 <Link to="/contact">Contact</Link> 
                 </React.Fragment>   
                <Button text="Join our discord" class="button-default"to=""></Button>
             </ul>
             
         </nav>
         
     )
 }