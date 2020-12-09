import React from 'react';
import './layout.scss'

import Container from '../Container/Container'

export default function Layout(props){

    return(
      <Container>   {props.children}
</Container>
   
    )

}