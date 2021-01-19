import React from 'react';
import './layout.scss'
import 'bootstrap/dist/css/bootstrap.css';
import Container from '../Container/Container'
import Navbar from './../Navbar/Navbar';
import '../normalize.css'
import {Grommet } from 'grommet'

export default function Layout(props){

    return(
        <Grommet>
        <div style={props.style}>
             <Navbar/>
      <Container> 
         
          
            {props.children}
            
           
</Container>
</div>
</Grommet>


   
    )

}