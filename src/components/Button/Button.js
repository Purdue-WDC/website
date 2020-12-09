import React from 'react';
import './button.scss';

export default function Button(props) {

    return(
        <button class={props.class}>{props.text}</button>
    )

}