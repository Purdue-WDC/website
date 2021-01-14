import React from 'react';
import './button.sass';
import Link from 'gatsby';
export default function Button(props) {
    console.log(props.to)
    const internal = /^\/(?!\/)/.test(props.to)
   var link;
    if(internal) {
        console.log("gatsby link");
        link = <Link to={props.to}>{props.text}</Link>
    }
    else {
    
        link = <a href={props.to}>{props.text}</a>
    }
    console.log(link)
    return(
        
        <button class={props.class?props.class:"button-default"} style={props.style} onClick={props.onClick}>{props.text}</button>
    )

}