import React from 'react';
import './container.scss';

export default function Container(props) {

    return(
        <div class="container">
            {props.children}
        </div>
    )
}