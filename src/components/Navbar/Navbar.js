import { Link } from 'gatsby';
import React from 'react';
import './navbar.scss';
import {Grommet, Header} from 'grommet';
import Button from './../Button/Button';
 export default function Navbar(props) {
     return (
         <Header background="light-4">
         <nav>
             <ul>
                 <h1>WEB DEV CLUB</h1>
                 <Link to="">About</Link>
                 <Link to="">Events</Link>
                 <Link to="">Blog</Link>    
                <Button text="Join our discord" class="button-main" to=""></Button>
             </ul>
         </nav>
         </Header>
     )
 }