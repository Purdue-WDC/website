import React from 'react'
import './fadeIn.scss';

export default function FadeIn(props) {

    return (
        <div class="fade-in">
            {props.children}
        </div>
    )
}